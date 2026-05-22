import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
    }

    const { display_name, avatar_path } = await req.json()

    const { error } = await supabase
      .from('profiles')
      .update({
        display_name,
        avatar_path,
        onboarded: true
      })
      .eq('id', user.id)

    if (error) {
      return NextResponse.json({ ok: false, error: error.message })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 })
  }
}
