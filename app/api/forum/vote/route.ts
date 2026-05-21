import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { targetType, targetId } = await req.json()

  if (!targetType || !['post', 'reply'].includes(targetType) || !targetId) {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
  }

  const table = targetType === 'post' ? 'forum_posts' : 'forum_replies'

  // Check if vote exists
  const { data: existingVote } = await supabase
    .from('forum_votes')
    .select('*')
    .eq('user_id', user.id)
    .eq('target_type', targetType)
    .eq('target_id', targetId)
    .maybeSingle()

  if (existingVote) {
    // Remove vote
    await supabase
      .from('forum_votes')
      .delete()
      .eq('user_id', user.id)
      .eq('target_type', targetType)
      .eq('target_id', targetId)

    // Decrement count in target table
    const { data: targetData } = await supabase
      .from(table)
      .select('upvotes')
      .eq('id', targetId)
      .single()
      
    if (targetData) {
      await supabase
        .from(table)
        .update({ upvotes: Math.max(0, (targetData.upvotes || 0) - 1) })
        .eq('id', targetId)
    }

    return NextResponse.json({ ok: true, voted: false })
  } else {
    // Add vote
    const { error: voteError } = await supabase
      .from('forum_votes')
      .insert({
        user_id: user.id,
        target_type: targetType,
        target_id: targetId
      })

    if (voteError) {
       return NextResponse.json({ ok: false, error: voteError.message }, { status: 500 })
    }

    // Increment count in target table
    const { data: targetData } = await supabase
      .from(table)
      .select('upvotes')
      .eq('id', targetId)
      .single()
      
    if (targetData) {
      await supabase
        .from(table)
        .update({ upvotes: (targetData.upvotes || 0) + 1 })
        .eq('id', targetId)
    }

    return NextResponse.json({ ok: true, voted: true })
  }
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const targetIds = searchParams.get('ids')?.split(',') || []
    
    if (targetIds.length === 0) {
        return NextResponse.json({ ok: true, votes: [] })
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return NextResponse.json({ ok: true, votes: [] })
    }

    const { data } = await supabase
        .from('forum_votes')
        .select('target_id')
        .eq('user_id', user.id)
        .in('target_id', targetIds)

    return NextResponse.json({ ok: true, votes: data?.map(v => v.target_id) || [] })
}
