import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { validateLinks } from '@/lib/forum/validate-links'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const sort = searchParams.get('sort') || 'recommended'
  const authorId = searchParams.get('authorId')

  const supabase = await createClient()

  let query = supabase
    .from('forum_posts')
    .select(`
      id, body, upvotes, reply_count, created_at, anon_uuid, anon_display_name, anon_discriminator,
      author:author_id ( username, display_name, discriminator, avatar_path )
    `)

  if (authorId) {
    query = query.eq('anon_uuid', authorId)
    query = query.order('created_at', { ascending: false })
  } else if (sort === 'recent') {
    query = query.order('created_at', { ascending: false })
  } else {
    query = query.order('upvotes', { ascending: false }).order('created_at', { ascending: false })
  }

  query = query.limit(50)

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, posts: data })
}

export async function POST(req: Request) {
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

  const { data, error } = await supabase
    .from('forum_posts')
    .insert({
      anon_uuid,
      anon_display_name: display_name,
      anon_discriminator: discriminator,
      body: body.trim(),
    })
    .select(`
      id, body, upvotes, reply_count, created_at, anon_uuid, anon_display_name, anon_discriminator,
      author:author_id ( username, display_name, discriminator, avatar_path )
    `)
    .single()

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  // Inject the display name from the client payload so we don't need an extra DB column
  const post = {
    ...data,
    author: data.author || {
      username: `anon_${anon_uuid.slice(0, 8)}`,
      display_name: display_name || 'Anónimo',
      discriminator: discriminator || '0000',
      avatar_path: null,
    },
  }

  return NextResponse.json({ ok: true, post })
}
