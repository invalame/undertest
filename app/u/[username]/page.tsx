import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { ProfileClient, type ProfilePublic } from './profile-client'
import { ProfileHeaderClient } from './profile-header-client'
import { getProfileByUsername } from './get-profile'
import './profile.css'

import { Metadata } from 'next'

type Props = { params: Promise<{ username: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username: raw } = await params
  const username = decodeURIComponent(raw).toLowerCase()
  const { row: profile } = await getProfileByUsername(username)

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
    },
  }
}

export default async function UserProfilePage({ params }: Props) {
  const { username: raw } = await params
  const username = decodeURIComponent(raw).toLowerCase()
  if (!/^[a-z0-9_]{3,24}$/.test(username)) {
    notFound()
  }

  const supabase = await createClient()
  const { row } = await getProfileByUsername(username)

  if (!row) {
    notFound()
  }

  // isOwner check not applicable without auth — profile editing still works via API auth
  const isOwner = false

  const profile: ProfilePublic = {
    id: row.id,
    username: row.username,
    bio: row.bio,
    avatar_path: row.avatar_path,
    max_streak: row.max_streak,
    display_name: row.display_name,
    discriminator: row.discriminator,
  }

  const avatarUrl = profile.avatar_path
    ? profile.avatar_path.startsWith('http')
      ? profile.avatar_path
      : `/img_profile/${encodeURI(profile.avatar_path)}`
    : '/img_profile/default-profile.png'

  return (
    <div className="profile-root">
      <ProfileHeaderClient username={profile.username} avatarUrl={avatarUrl} />

      <ProfileClient
        profile={profile}
        isOwner={isOwner}
        oauthPicture={null}
        initialAvatars={[]}
      />
    </div>
  )
}
