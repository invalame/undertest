import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

// Votes are tracked client-side in localStorage.
// The API just increments/decrements the counter in the DB.
export async function POST(req: Request) {
  const supabase = await createClient()

  let targetType: string, targetId: string, toggle: boolean
  try {
    const body = await req.json()
    targetType = body.targetType
    targetId = body.targetId
    toggle = body.toggle ?? true // true = add vote, false = remove vote
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
  }

  if (!targetType || !['post', 'reply'].includes(targetType) || !targetId) {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
  }

  const table = targetType === 'post' ? 'forum_posts' : 'forum_replies'

  const { data: targetData } = await supabase
    .from(table)
    .select('upvotes')
    .eq('id', targetId)
    .single()

  if (!targetData) {
    return NextResponse.json({ ok: false, error: 'Target not found' }, { status: 404 })
  }

  const currentVotes = targetData.upvotes || 0
  const newVotes = toggle
    ? currentVotes + 1
    : Math.max(0, currentVotes - 1)

  await supabase
    .from(table)
    .update({ upvotes: newVotes })
    .eq('id', targetId)

  return NextResponse.json({ ok: true, upvotes: newVotes })
}

// GET is no longer needed (votes tracked in localStorage), kept for compat
export async function GET() {
  return NextResponse.json({ ok: true, votes: [] })
}
