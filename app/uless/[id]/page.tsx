import { ForumHeaderClient } from '../forum-header-client'
import { PostDetailClient } from './post-detail-client'
import '../forum.css'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params

  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('forum_posts')
      .select('body')
      .eq('id', id)
      .maybeSingle()

    if (data) {
      const bodyPrev = data.body.length > 50 ? data.body.substring(0, 50) + '...' : data.body
      return {
        title: 'Post - UnderLess',
        description: bodyPrev,
      }
    }
  } catch {
    // Ignore
  }

  return { title: 'Post - UnderLess' }
}

export const dynamic = 'force-dynamic'

export default async function PostDetailPage({ params }: Props) {
  const { id } = await params
  const supabase = await createClient()

  // Verify post exists
  const { data: post } = await supabase
    .from('forum_posts')
    .select('id')
    .eq('id', id)
    .maybeSingle()

  if (!post) {
    notFound()
  }

  return (
    <div className="forum-root">
      <ForumHeaderClient />
      <PostDetailClient postId={id} />
    </div>
  )
}
