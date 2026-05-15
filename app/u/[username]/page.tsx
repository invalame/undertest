import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { ProfileClient, type ProfilePublic } from './profile-client'
import { ProfileHeaderClient } from './profile-header-client'
import './profile.css'
import Script from 'next/script'

import { Metadata } from 'next'

type Props = { params: Promise<{ username: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username: raw } = await params
  const username = decodeURIComponent(raw).toLowerCase()
  const supabase = await createClient()
  const { data: profile } = await supabase
    .from('profiles')
    .select('display_name, discriminator, avatar_path')
    .eq('username', username)
    .maybeSingle()

  const title = profile 
    ? `${profile.display_name} #${profile.discriminator} - UnderLess` 
    : 'Perfil - UnderLess'
  
  const avatar = profile?.avatar_path 
    ? `https://underless.vercel.app/img_profile/${profile.avatar_path}` 
    : 'https://underless.vercel.app/img_profile/default-profile.png'

  return {
    title,
    description: `Mirá el perfil de ${profile?.display_name || username} en UnderLess.`,
    openGraph: {
      title,
      images: [avatar],
    },
    twitter: {
      card: 'summary',
      title,
      images: [avatar],
    }
  }
}

function oauthPicture(meta: Record<string, unknown> | null | undefined): string | null {
  if (!meta) return null
  const a = meta.avatar_url ?? meta.picture
  return typeof a === 'string' && a.startsWith('http') ? a : null
}

export default async function UserProfilePage({ params }: Props) {
  const { username: raw } = await params
  const username = decodeURIComponent(raw).toLowerCase()
  if (!/^[a-z0-9_]{3,24}$/.test(username)) {
    notFound()
  }

  const supabase = await createClient()
  const { data: row, error } = await supabase
    .from('profiles')
    .select('id, username, bio, avatar_path, underium, max_streak, display_name, discriminator')
    .eq('username', username)
    .maybeSingle()

  if (error || !row) {
    notFound()
  }

  const { data: { user: sessionUser } = { user: null } } = await supabase.auth.getUser()
  const isOwner = !!sessionUser && sessionUser.id === row.id

  const profile: ProfilePublic = {
    id: row.id as string,
    username: row.username as string,
    bio: (row.bio as string) ?? '',
    avatar_path: (row.avatar_path as string | null) ?? null,
    underium: Number(row.underium ?? 0),
    max_streak: Number(row.max_streak ?? 0),
    display_name: (row.display_name as string) ?? 'Userless',
    discriminator: (row.discriminator as string) ?? '0000',
  }

  const oauth = isOwner ? oauthPicture(sessionUser?.user_metadata as Record<string, unknown>) : null

  return (
    <div className="profile-root">
      <ProfileHeaderClient username={profile.username} />

      <ProfileClient
        profile={profile}
        isOwner={isOwner}
        oauthPicture={oauth}
        initialAvatars={[]}
      />

      <link rel="stylesheet" href="/underless-sidebar.css" />
      <Script src="/underless-sidebar.js" strategy="afterInteractive" />
    </div>
  )
}
