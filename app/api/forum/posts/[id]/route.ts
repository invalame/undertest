import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('forum_posts')
    .select(`
      id, body, upvotes, reply_count, created_at, anon_uuid, anon_display_name, anon_discriminator,
      author:author_id ( username, display_name, discriminator, avatar_path )
    `)
    .eq('id', id)
    .single()

  if (error || !data) {
    return NextResponse.json({ ok: false, error: 'Post not found' }, { status: 404 })
  }

  return NextResponse.json({ ok: true, post: data })
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  let anon_uuid: string | undefined
  try {
    const body = await req.json()
    anon_uuid = body?.anon_uuid
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }

  if (!anon_uuid) {
    return NextResponse.json({ ok: false, error: 'Missing identity' }, { status: 401 })
  }

  const supabase = await createClient()

  // Verify ownership via anon_uuid
  const { data: post } = await supabase
    .from('forum_posts')
    .select('anon_uuid')
    .eq('id', id)
    .maybeSingle()

  if (!post || post.anon_uuid !== anon_uuid) {
    return NextResponse.json({ ok: false, error: 'Not your post' }, { status: 403 })
  }

  const { error } = await supabase
    .from('forum_posts')
    .delete()
    .eq('id', id)

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
