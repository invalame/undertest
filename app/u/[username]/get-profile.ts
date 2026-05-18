import { cache } from 'react'
import { createClient } from '@/lib/supabase/server'

export type ProfileRow = {
  id: string
  username: string
  bio: string
  avatar_path: string | null
  underium: number
  max_streak: number
  display_name: string
  discriminator: string
}

export const getProfileByUsername = cache(async (username: string) => {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, bio, avatar_path, underium, max_streak, display_name, discriminator')
    .eq('username', username)
    .maybeSingle()

  if (error || !data) return { row: null as ProfileRow | null, error }

  const row: ProfileRow = {
    id: data.id as string,
    username: data.username as string,
    bio: (data.bio as string) ?? '',
    avatar_path: (data.avatar_path as string | null) ?? null,
    underium: Number(data.underium ?? 0),
    max_streak: Number(data.max_streak ?? 0),
    display_name: (data.display_name as string) ?? 'Userless',
    discriminator: (data.discriminator as string) ?? '0000',
  }

  return { row, error: null }
})
