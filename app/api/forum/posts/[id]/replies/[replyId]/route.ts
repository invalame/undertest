import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string, replyId: string }> }) {
  const { id, replyId } = await params

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
  const { data: reply } = await supabase
    .from('forum_replies')
    .select('anon_uuid')
    .eq('id', replyId)
    .eq('post_id', id)
    .maybeSingle()

  if (!reply || reply.anon_uuid !== anon_uuid) {
    return NextResponse.json({ ok: false, error: 'Not your reply' }, { status: 403 })
  }

  const { error } = await supabase
    .from('forum_replies')
    .delete()
    .eq('id', replyId)
    .eq('post_id', id)

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  // Decrement reply count
  const { data: post } = await supabase
    .from('forum_posts')
    .select('reply_count')
    .eq('id', id)
    .single()

  if (post) {
    await supabase
      .from('forum_posts')
      .update({ reply_count: Math.max(0, (post.reply_count || 0) - 1) })
      .eq('id', id)
  }

  return NextResponse.json({ ok: true })
}
