'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type UserProfile = {
  id: string
  username: string
  avatarUrl: string
}

type Post = {
  id: string
  body: string
  upvotes: number
  reply_count: number
  created_at: string
  author_id: string
  author: {
    username: string
    display_name: string
    discriminator: string
    avatar_path: string | null
  }
}

type Reply = {
  id: string
  body: string
  upvotes: number
  created_at: string
  author_id: string
  author: {
    username: string
    display_name: string
    discriminator: string
    avatar_path: string | null
  }
}

function displaySrc(path: string | null): string {
    if (!path) return '/img_profile/default-profile.png'
    if (path.startsWith('http')) return path
    return `/img_profile/${encodeURI(path)}`
}

function timeAgo(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  if (seconds < 60) return `hace ${seconds}s`
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `hace ${minutes}m`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `hace ${hours}h`
  const days = Math.floor(hours / 24)
  if (days < 7) return `hace ${days}d`
  
  return date.toLocaleDateString('es-AR')
}

export function PostDetailClient({ currentUser, postId }: { currentUser: UserProfile | null, postId: string }) {
  const router = useRouter()
  const [post, setPost] = useState<Post | null>(null)
  const [replies, setReplies] = useState<Reply[]>([])
  const [loading, setLoading] = useState(true)
  const [newReplyBody, setNewReplyBody] = useState('')
  const [isPosting, setIsPosting] = useState(false)
  
  const [votedPost, setVotedPost] = useState(false)
  const [votedReplies, setVotedReplies] = useState<Set<string>>(new Set())

  const fetchData = async () => {
    try {
      const [postRes, repliesRes] = await Promise.all([
          fetch(`/api/forum/posts/${postId}`),
          fetch(`/api/forum/posts/${postId}/replies`)
      ])
      
      const postData = await postRes.json()
      if (!postData.ok) {
          setLoading(false)
          return
      }
      setPost(postData.post)
      
      const repliesData = await repliesRes.json()
      if (repliesData.ok) {
          setReplies(repliesData.replies)
      }

      if (currentUser) {
          const ids = [postId, ...(repliesData.replies || []).map((r: Reply) => r.id)].join(',')
          const voteRes = await fetch(`/api/forum/vote?ids=${ids}`)
          const voteData = await voteRes.json()
          if (voteData.ok) {
              const votes = new Set<string>(voteData.votes)
              setVotedPost(votes.has(postId))
              votes.delete(postId)
              setVotedReplies(votes)
          }
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [postId])

  const handleReply = async () => {
    if (!currentUser) return
    if (!newReplyBody.trim() || newReplyBody.length > 2000) return
    
    setIsPosting(true)
    try {
      const res = await fetch(`/api/forum/posts/${postId}/replies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: newReplyBody })
      })
      const data = await res.json()
      if (data.ok) {
        setReplies([...replies, data.reply])
        setNewReplyBody('')
        if (post) setPost({ ...post, reply_count: post.reply_count + 1 })
      }
    } catch (e) {
      console.error(e)
    } finally {
      setIsPosting(false)
    }
  }

  const handleDeletePost = async () => {
      if (!confirm('¿Seguro que quieres borrar este post?')) return
      try {
          const res = await fetch(`/api/forum/posts/${postId}`, { method: 'DELETE' })
          if (res.ok) router.push('/forum')
      } catch (e) {
          console.error(e)
      }
  }

  const handleDeleteReply = async (replyId: string) => {
      if (!confirm('¿Seguro que quieres borrar esta respuesta?')) return
      try {
          const res = await fetch(`/api/forum/posts/${postId}/replies/${replyId}`, { method: 'DELETE' })
          if (res.ok) {
              setReplies(replies.filter(r => r.id !== replyId))
              if (post) setPost({ ...post, reply_count: Math.max(0, post.reply_count - 1) })
          }
      } catch (e) {
          console.error(e)
      }
  }

  const handleVotePost = async () => {
      if (!currentUser || !post) return
      
      setPost({ ...post, upvotes: Math.max(0, post.upvotes + (votedPost ? -1 : 1)) })
      setVotedPost(!votedPost)

      try {
          const res = await fetch('/api/forum/vote', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ targetType: 'post', targetId: postId })
          })
          if (!(await res.json()).ok) fetchData()
      } catch (e) { fetchData() }
  }

  const handleVoteReply = async (replyId: string) => {
      if (!currentUser) return
      
      const isVoted = votedReplies.has(replyId)
      setReplies(replies.map(r => r.id === replyId ? { ...r, upvotes: Math.max(0, r.upvotes + (isVoted ? -1 : 1)) } : r))
      
      const newVoted = new Set(votedReplies)
      if (isVoted) newVoted.delete(replyId)
      else newVoted.add(replyId)
      setVotedReplies(newVoted)

      try {
          const res = await fetch('/api/forum/vote', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ targetType: 'reply', targetId: replyId })
          })
          if (!(await res.json()).ok) fetchData()
      } catch (e) { fetchData() }
  }

  if (loading) {
      return (
          <div className="forum-main-content">
              <div className="forum-shell" style={{ textAlign: 'center', padding: '40px', color: '#575757' }}>
                  Cargando post...
              </div>
          </div>
      )
  }

  if (!post) {
      return (
          <div className="forum-main-content">
              <div className="forum-shell" style={{ textAlign: 'center', padding: '40px', color: '#575757' }}>
                  Post no encontrado.
                  <br /><br />
                  <Link href="/forum" className="forum-btn-outline" style={{ textDecoration: 'none', padding: '8px 16px', borderRadius: '6px' }}>Volver al foro</Link>
              </div>
          </div>
      )
  }

  return (
    <div className="forum-main-content">
      <div className="forum-shell">
        
        <Link href="/forum" style={{ color: '#b3b3b3', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', marginBottom: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Volver al foro
        </Link>

        {/* Main Post */}
        <div className="forum-post" style={{ cursor: 'default' }}>
            <img src={displaySrc(post.author.avatar_path)} alt="" className="forum-create-avatar" style={{ width: '48px', height: '48px' }} />
            <div className="forum-post-content">
                <div className="forum-post-header">
                    <Link href={`/u/${post.author.username}`} className="forum-post-author">
                        <span className="forum-post-name" style={{ fontSize: '1rem' }}>{post.author.display_name}</span>
                        <span className="forum-post-disc" style={{ fontSize: '0.85rem' }}>#{post.author.discriminator}</span>
                    </Link>
                    <span className="forum-post-time">{timeAgo(post.created_at)}</span>
                </div>
                <p className="forum-post-body" style={{ fontSize: '1.05rem', margin: '16px 0' }}>
                    {post.body}
                </p>
                <div className="forum-post-footer">
                    <button 
                        className={`forum-action-btn ${votedPost ? 'upvoted' : ''}`} 
                        onClick={handleVotePost}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill={votedPost ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                        {post.upvotes}
                    </button>
                    
                    <button 
                        className="forum-action-btn"
                        onClick={() => {
                            navigator.clipboard.writeText(`${window.location.origin}/forum/${post.id}`)
                            alert('Enlace copiado al portapapeles.')
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                        Compartir
                    </button>

                    {currentUser?.id === post.author_id && (
                        <button className="forum-action-btn delete" onClick={handleDeletePost}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>

        {/* Replies Header */}
        <h3 style={{ margin: '8px 0 0 0', fontFamily: 'PoppinsFont', fontSize: '1.1rem', color: '#fff' }}>
            Respuestas ({post.reply_count})
        </h3>

        {/* Create Reply */}
        {currentUser ? (
            <div className="forum-create-box" style={{ padding: '12px' }}>
               <img src={currentUser.avatarUrl} alt="" className="forum-create-avatar" style={{ width: '40px', height: '40px' }} />
               <div className="forum-create-input-area">
                   <textarea
                       className="forum-create-textarea"
                       placeholder="Escribe una respuesta..."
                       value={newReplyBody}
                       onChange={(e) => setNewReplyBody(e.target.value)}
                       maxLength={2000}
                       style={{ minHeight: '40px' }}
                   />
                   <div className="forum-create-actions">
                       <span className={`forum-char-count ${newReplyBody.length >= 2000 ? 'limit' : ''}`}>
                           {newReplyBody.length} / 2000
                       </span>
                       <button 
                           className="forum-btn" 
                           onClick={handleReply} 
                           disabled={!newReplyBody.trim() || isPosting || newReplyBody.length > 2000}
                           style={{ padding: '6px 12px', fontSize: '0.85rem' }}
                       >
                           Responder
                       </button>
                   </div>
               </div>
            </div>
        ) : null}

        {/* Replies List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {replies.map(reply => {
                const isVoted = votedReplies.has(reply.id)
                return (
                    <div key={reply.id} className="forum-post" style={{ cursor: 'default', padding: '12px' }}>
                        <img src={displaySrc(reply.author.avatar_path)} alt="" className="forum-create-avatar" style={{ width: '36px', height: '36px' }} />
                        <div className="forum-post-content">
                            <div className="forum-post-header">
                                <Link href={`/u/${reply.author.username}`} className="forum-post-author">
                                    <span className="forum-post-name" style={{ fontSize: '0.95rem' }}>{reply.author.display_name}</span>
                                    <span className="forum-post-disc" style={{ fontSize: '0.8rem' }}>#{reply.author.discriminator}</span>
                                </Link>
                                <span className="forum-post-time">{timeAgo(reply.created_at)}</span>
                            </div>
                            <p className="forum-post-body" style={{ margin: '8px 0', fontSize: '0.9rem' }}>
                                {reply.body}
                            </p>
                            <div className="forum-post-footer">
                                <button 
                                    className={`forum-action-btn ${isVoted ? 'upvoted' : ''}`} 
                                    onClick={() => handleVoteReply(reply.id)}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill={isVoted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                    {reply.upvotes}
                                </button>
                                
                                {currentUser?.id === reply.author_id && (
                                    <button className="forum-action-btn delete" onClick={() => handleDeleteReply(reply.id)}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

      </div>
    </div>
  )
}
