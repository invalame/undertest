import { createClient } from '@/lib/supabase/server'
import { ForumHeaderClient } from '../forum-header-client'
import { PostDetailClient } from './post-detail-client'
import '../forum.css'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  
  try {
      const supabase = await createClient()
      const { data } = await supabase
        .from('forum_posts')
        .select(`
          body,
          author:author_id ( display_name )
        `)
        .eq('id', id)
        .maybeSingle()

      if (data) {
          const bodyPrev = data.body.length > 50 ? data.body.substring(0, 50) + '...' : data.body
          const authorData = data.author as any
          const title = `Post de ${authorData?.display_name || 'Usuario'} - UnderLess`
          return {
              title,
              description: bodyPrev,
          }
      }
  } catch (e) {
      // Ignore
  }

  return { title: 'Post - UnderLess' }
}

export const dynamic = 'force-dynamic'

function oauthPicture(meta: Record<string, unknown> | null | undefined): string | null {
    if (!meta) return null
    const a = meta.avatar_url ?? meta.picture
    return typeof a === 'string' && a.startsWith('http') ? a : null
}

export default async function PostDetailPage({ params }: Props) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Verify post exists
  const { data: post } = await supabase
    .from('forum_posts')
    .select('id')
    .eq('id', id)
    .maybeSingle()

  if (!post) {
      notFound()
  }

  let userProfile = null
  if (user) {
      const { data } = await supabase
        .from('profiles')
        .select('username, avatar_path, onboarded')
        .eq('id', user.id)
        .maybeSingle()
        
      if (data) {
          if (data.onboarded === false) {
              const { redirect } = await import('next/navigation')
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
      <PostDetailClient currentUser={userProfile} postId={id} />
    </div>
  )
}
