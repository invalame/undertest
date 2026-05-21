import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('forum_replies')
    .select(`
      id, body, upvotes, created_at, author_id,
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
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { body } = await req.json()

  if (!body || typeof body !== 'string' || body.trim().length === 0 || body.length > 2000) {
    return NextResponse.json({ ok: false, error: 'Invalid body' }, { status: 400 })
  }

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
      author_id: user.id,
      body: body.trim(),
    })
    .select(`
      id, body, upvotes, created_at, author_id,
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

  return NextResponse.json({ ok: true, reply: data })
}
