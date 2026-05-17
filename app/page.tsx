import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getSiteUrl, safeNextPath } from '@/lib/site-url'
import { HomeClient } from './home-client'

export const dynamic = 'force-dynamic'

type Props = {
  searchParams: Promise<{ next?: string; error?: string }>
}

export default async function HomePage({ searchParams }: Props) {
  const sp = await searchParams
  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  const origin = getSiteUrl()

  if (data?.claims?.sub) {
    const userId = data.claims.sub
    const { ensureProfile } = await import('@/lib/profile/ensure-profile')
    const profile = await ensureProfile(userId)

    const dest = safeNextPath(sp.next ?? null, origin)
    if (dest !== '/') {
      redirect(dest)
    }

    const userMeta = (await supabase.auth.getUser()).data.user?.user_metadata
    const oauthAvatar = userMeta?.avatar_url || userMeta?.picture
    
    const userProfile = {
      username: profile?.display_name && profile?.discriminator 
        ? `${profile.display_name} #${profile.discriminator}` 
        : (profile?.username || 'Usuario'),
      profileSlug: profile?.username || '',
      avatar: profile?.avatar_path 
        ? `/img_profile/${profile.avatar_path}` 
        : oauthAvatar || '/img_profile/default-profile.png'
    }

    return <HomeClient isAuthed nextPath="/" errorMessage={null} officialOrigin={origin} userData={userProfile} />
  }

  const errorMessage = (() => {
    const raw = sp.error
    if (!raw) return null
    if (raw === 'missing_code') {
      return 'No se recibió el código de autenticación. Intentá de nuevo.'
    }
    try {
      return decodeURIComponent(raw)
    } catch {
      return raw
    }
  })()

  const nextPath = safeNextPath(sp.next ?? null, origin)

  return <HomeClient isAuthed={false} nextPath={nextPath} errorMessage={errorMessage} officialOrigin={origin} />
}
