import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { validateLinks } from '@/lib/forum/validate-links'

export const dynamic = 'force-dynamic'

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('forum_replies')
    .select(`
      id, body, upvotes, created_at, anon_uuid, anon_display_name, anon_discriminator,
      author:author_id ( username, display_name, discriminator, avatar_path )
    `)
    .eq('post_id', id)
    .order('created_at', { ascending: true })

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, replies: data })
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const { body, anon_uuid, display_name, discriminator } = await req.json()

  if (!anon_uuid || typeof anon_uuid !== 'string') {
    return NextResponse.json({ ok: false, error: 'Missing identity' }, { status: 400 })
  }

  if (!body || typeof body !== 'string' || body.trim().length === 0 || body.length > 2000) {
    return NextResponse.json({ ok: false, error: 'Invalid body' }, { status: 400 })
  }

  if (!validateLinks(body)) {
    return NextResponse.json({ ok: false, error: 'Solo se permiten links de Twitter/X, YouTube, Instagram, Kick y citas del foro.' }, { status: 400 })
  }

  const supabase = await createClient()

  // Verify post exists
  const { data: post, error: postError } = await supabase
    .from('forum_posts')
    .select('id, reply_count')
    .eq('id', id)
    .single()

  if (postError || !post) {
    return NextResponse.json({ ok: false, error: 'Post not found' }, { status: 404 })
  }

  const { data, error } = await supabase
    .from('forum_replies')
    .insert({
      post_id: id,
      anon_uuid,
      anon_display_name: display_name,
      anon_discriminator: discriminator,
      body: body.trim(),
    })
    .select(`
      id, body, upvotes, created_at, anon_uuid, anon_display_name, anon_discriminator,
      author:author_id ( username, display_name, discriminator, avatar_path )
    `)
    .single()

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  // Increment reply count
  await supabase
    .from('forum_posts')
    .update({ reply_count: (post.reply_count || 0) + 1 })
    .eq('id', id)

  const reply = {
    ...data,
    author: data.author || {
      username: `anon_${anon_uuid.slice(0, 8)}`,
      display_name: display_name || 'Anónimo',
      discriminator: discriminator || '0000',
      avatar_path: null,
    },
  }

  return NextResponse.json({ ok: true, reply })
}
