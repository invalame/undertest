import { ForumHeaderClient } from './forum-header-client'
import { ForumClient } from './forum-client'
import './forum.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foro - UnderLess',
  description: 'Comunidad de UnderLess.',
}

export const dynamic = 'force-dynamic'

export default function ForumPage() {
  return (
    <div className="forum-root">
      <ForumHeaderClient />
      <ForumClient />
    </div>
  )
}
