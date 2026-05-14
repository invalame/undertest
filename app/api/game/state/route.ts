import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const supabase = await createClient()
  const { data: userData, error: userErr } = await supabase.auth.getUser()
  if (userErr || !userData.user) {
    return NextResponse.json({ ok: false, reason: 'no_session' }, { status: 401 })
  }

  const { data: profile, error: selErr } = await supabase
    .from('profiles')
    .select('game_state')
    .eq('id', userData.user.id)
    .maybeSingle()

  if (selErr) {
    return NextResponse.json({ ok: false, reason: 'db' }, { status: 500 })
  }

  return NextResponse.json({ ok: true, state: profile?.game_state || {} })
}

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: userData, error: userErr } = await supabase.auth.getUser()
  if (userErr || !userData.user) {
    return NextResponse.json({ ok: false, reason: 'no_session' }, { status: 401 })
  }

  let state: any
  try {
    const body = await request.json()
    state = body.state
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad_json' }, { status: 400 })
  }

  if (!state) {
    return NextResponse.json({ ok: false, reason: 'missing_state' }, { status: 400 })
  }

  const { error: updErr } = await supabase
    .from('profiles')
    .update({ game_state: state })
    .eq('id', userData.user.id)

  if (updErr) {
    return NextResponse.json({ ok: false, reason: 'db' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
