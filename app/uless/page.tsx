import { createClient } from '@/lib/supabase/server'
import { ForumHeaderClient } from './forum-header-client'
import { ForumClient } from './forum-client'
import './forum.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foro - UnderLess',
  description: 'Comunidad de UnderLess.',
}

export const dynamic = 'force-dynamic'

function oauthPicture(meta: Record<string, unknown> | null | undefined): string | null {
    if (!meta) return null
    const a = meta.avatar_url ?? meta.picture
    return typeof a === 'string' && a.startsWith('http') ? a : null
}

export default async function ForumPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let userProfile = null
  if (user) {
      const { data } = await supabase
        .from('profiles')
        .select('username, avatar_path, onboarded')
        .eq('id', user.id)
        .maybeSingle()
        
      if (data) {
          if (data.onboarded === false) {
              redirect('/welcome')
          }
          const oauth = oauthPicture(user.user_metadata as Record<string, unknown>)
          const avatarUrl = data.avatar_path
            ? (data.avatar_path.startsWith('http') ? data.avatar_path : `/img_profile/${encodeURI(data.avatar_path)}`)
            : oauth || '/img_profile/default-profile.png'
            
          userProfile = {
              id: user.id,
              username: data.username,
              avatarUrl
          }
      }
  }

  return (
    <div className="forum-root">
      <ForumHeaderClient username={userProfile?.username} avatarUrl={userProfile?.avatarUrl} />
      <ForumClient currentUser={userProfile} />
    </div>
  )
}
