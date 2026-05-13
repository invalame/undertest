import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { ProfileClient, type ProfilePublic } from './profile-client'
import './profile.css'

type Props = { params: Promise<{ username: string }> }

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
    .select('id, username, bio, avatar_path, underium, max_streak')
    .eq('username', username)
    .maybeSingle()

  if (error || !row) {
    notFound()
  }

  const { data: userData } = await supabase.auth.getUser()
  const sessionUser = userData.user
  const isOwner = !!sessionUser && sessionUser.id === row.id

  const profile: ProfilePublic = {
    id: row.id as string,
    username: row.username as string,
    bio: (row.bio as string) ?? '',
    avatar_path: (row.avatar_path as string | null) ?? null,
    underium: Number(row.underium ?? 0),
    max_streak: Number(row.max_streak ?? 0),
  }

  const oauth = isOwner ? oauthPicture(sessionUser?.user_metadata as Record<string, unknown>) : null

  return (
    <div className="profile-root">
      <Link href="/underless" className="profile-back">
        ← Volver al juego
      </Link>
      <div className="profile-shell">
        <ProfileClient
          profile={profile}
          isOwner={isOwner}
          oauthPicture={oauth}
          initialAvatars={[]}
        />
      </div>
    </div>
  )
}
