import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('forum_posts')
    .select(`
      id, body, upvotes, reply_count, created_at, author_id,
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
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  // RLS will ensure they can only delete their own
  const { error } = await supabase
    .from('forum_posts')
    .delete()
    .eq('id', id)

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
