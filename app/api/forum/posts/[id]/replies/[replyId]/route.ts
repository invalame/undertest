import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string, replyId: string }> }) {
  const { id, replyId } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  // RLS will ensure they can only delete their own
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
