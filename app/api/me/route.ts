import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createDefaultProfile } from '@/lib/profile/username'

export const dynamic = 'force-dynamic'

function oauthAvatar(user: { user_metadata?: Record<string, unknown> }): string | null {
  const m = user.user_metadata
  if (!m) return null
  const a = m.avatar_url ?? m.picture
  return typeof a === 'string' && a.startsWith('http') ? a : null
}

export async function GET() {
  const supabase = await createClient()
  const { data: userData, error: userErr } = await supabase.auth.getUser()
  if (userErr || !userData.user) {
    return NextResponse.json({ ok: false, reason: 'no_session' }, { status: 401 })
  }
  const user = userData.user

  let { data: row, error: selErr } = await supabase
    .from('profiles')
    .select('username, avatar_path, display_name, discriminator')
    .eq('id', user.id)
    .maybeSingle()

  if (selErr) {
    return NextResponse.json({ ok: false, reason: 'db', detail: selErr.message }, { status: 500 })
  }

  if (!row) {
    const email = user.email ?? undefined
    let username: string
    let displayName: string = 'Userless'
    let discriminator: string = '0000'
    try {
      const result = await createDefaultProfile(async (u, dName, disc) => {
        const { error } = await supabase.from('profiles').insert({
          id: user.id,
          username: u,
          display_name: dName,
          discriminator: disc
        })
        if (!error) return { ok: true as const }
        const msg = error.message.toLowerCase()
        if (msg.includes('duplicate') || msg.includes('unique')) {
          return { ok: false as const, duplicate: true }
        }
        return { ok: false as const, duplicate: false }
      }, user.id)
      username = result.username
      displayName = result.display_name
      discriminator = result.discriminator
    } catch {
      return NextResponse.json({ ok: false, reason: 'profile_bootstrap' }, { status: 500 })
    }

    const { data: again } = await supabase
      .from('profiles')
      .select('username, avatar_path, display_name, discriminator')
      .eq('id', user.id)
      .maybeSingle()
    row = again ?? { username, avatar_path: null, display_name: displayName, discriminator: discriminator }
  }

  const avatarPath = row.avatar_path as string | null
  const oauth = oauthAvatar(user)
  const cornerSrc =
    avatarPath && avatarPath.length > 0 ? `/img_profile/${encodeURI(avatarPath)}` : oauth ?? '/img/peepo-band.gif'

  return NextResponse.json({
    ok: true,
    username: row.username as string,
    display_name: row.display_name as string,
    discriminator: row.discriminator as string,
    profilePath: `/u/${encodeURIComponent(row.username as string)}`,
    cornerSrc,
  })
}
