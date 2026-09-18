'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { parsePostBody } from '../utils'
import { getAnonIdentity, updateAnonDisplayName, type AnonIdentity } from '@/lib/anon-identity'

type Post = {
  id: string
  body: string
  upvotes: number
  reply_count: number
  created_at: string
  anon_uuid: string | null
  anon_display_name?: string | null
  anon_discriminator?: string | null
  author: {
    username: string
    display_name: string
    discriminator: string
    avatar_path: string | null
  } | null
}

type Reply = {
  id: string
  body: string
  upvotes: number
  created_at: string
  anon_uuid: string | null
  anon_display_name?: string | null
  anon_discriminator?: string | null
  author: {
    username: string
    display_name: string
    discriminator: string
    avatar_path: string | null
  } | null
}

function displaySrc(path: string | null | undefined): string {
  if (!path) return '/img_profile/default-profile.png'
  if (path.startsWith('http')) return path
  return `/img_profile/${encodeURI(path)}`
}

function getAuthorDisplay(item: Post | Reply) {
  if (item.author) {
    return {
      display_name: item.author.display_name,
      discriminator: item.author.discriminator,
      avatar_path: item.author.avatar_path,
    }
  }
  if (item.anon_display_name) {
    return {
      display_name: item.anon_display_name,
      discriminator: item.anon_discriminator || '0000',
      avatar_path: null,
    }
  }
  return {
    display_name: 'Anónimo',
    discriminator: '0000',
    avatar_path: null,
  }
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

// Local vote storage for post detail
const VOTES_KEY = 'uless_voted_posts_v1'
const REPLY_VOTES_KEY = 'uless_voted_replies_v1'

function getLocalVotesSet(key: string): Set<string> {
  try {
    const raw = localStorage.getItem(key)
    if (raw) return new Set(JSON.parse(raw) as string[])
  } catch { /* ignore */ }
  return new Set()
}

function saveLocalVotesSet(key: string, votes: Set<string>) {
  try {
    localStorage.setItem(key, JSON.stringify([...votes]))
  } catch { /* ignore */ }
}

export function PostDetailClient({ postId }: { postId: string }) {
  const router = useRouter()
  const [identity, setIdentity] = useState<AnonIdentity | null>(null)
  const [post, setPost] = useState<Post | null>(null)
  const [replies, setReplies] = useState<Reply[]>([])
  const [loading, setLoading] = useState(true)
  const [newReplyBody, setNewReplyBody] = useState('')
  const [isPosting, setIsPosting] = useState(false)

  const [votedPost, setVotedPost] = useState(false)
  const [votedReplies, setVotedReplies] = useState<Set<string>>(new Set())

  useEffect(() => {
    const id = getAnonIdentity()
    setIdentity(id)
    const pVotes = getLocalVotesSet(VOTES_KEY)
    const rVotes = getLocalVotesSet(REPLY_VOTES_KEY)
    setVotedPost(pVotes.has(postId))
    setVotedReplies(rVotes)
  }, [postId])

  const fetchData = async () => {
    try {
      const [postRes, repliesRes] = await Promise.all([
        fetch(`/api/forum/posts/${postId}`),
        fetch(`/api/forum/posts/${postId}/replies`),
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
    if (!identity) return
    if (!newReplyBody.trim() || newReplyBody.length > 2000) return

    setIsPosting(true)
    try {
      const res = await fetch(`/api/forum/posts/${postId}/replies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          body: newReplyBody,
          anon_uuid: identity.uuid,
          display_name: identity.display_name,
          discriminator: identity.discriminator,
        }),
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
    if (!identity || !post) return
    if (post.anon_uuid !== identity.uuid) return
    if (!confirm('¿Seguro que quieres borrar este post?')) return
    try {
      const res = await fetch(`/api/forum/posts/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ anon_uuid: identity.uuid }),
      })
      if (res.ok) router.push('/uless')
    } catch (e) {
      console.error(e)
    }
  }

  const handleDeleteReply = async (replyId: string) => {
    if (!identity) return
    const reply = replies.find(r => r.id === replyId)
    if (!reply || reply.anon_uuid !== identity.uuid) return
    if (!confirm('¿Seguro que quieres borrar esta respuesta?')) return
    try {
      const res = await fetch(`/api/forum/posts/${postId}/replies/${replyId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ anon_uuid: identity.uuid }),
      })
      if (res.ok) {
        setReplies(replies.filter(r => r.id !== replyId))
        if (post) setPost({ ...post, reply_count: Math.max(0, post.reply_count - 1) })
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleVotePost = async () => {
    if (!post) return

    const newVoted = !votedPost
    setPost({ ...post, upvotes: Math.max(0, post.upvotes + (votedPost ? -1 : 1)) })
    setVotedPost(newVoted)

    const pVotes = getLocalVotesSet(VOTES_KEY)
    if (newVoted) pVotes.add(postId)
    else pVotes.delete(postId)
    saveLocalVotesSet(VOTES_KEY, pVotes)

    try {
      await fetch('/api/forum/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetType: 'post', targetId: postId, toggle: newVoted }),
      })
    } catch { /* ignore */ }
  }

  const handleVoteReply = async (replyId: string) => {
    const isVoted = votedReplies.has(replyId)
    setReplies(replies.map(r => r.id === replyId ? { ...r, upvotes: Math.max(0, r.upvotes + (isVoted ? -1 : 1)) } : r))

    const newVoted = new Set(votedReplies)
    if (isVoted) newVoted.delete(replyId)
    else newVoted.add(replyId)
    setVotedReplies(newVoted)
    saveLocalVotesSet(REPLY_VOTES_KEY, newVoted)

    try {
      await fetch('/api/forum/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetType: 'reply', targetId: replyId, toggle: !isVoted }),
      })
    } catch { /* ignore */ }
  }

  if (loading) {
    return (
      <div className="forum-main-content">
        <div className="forum-shell" style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="spinner-anim">
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
          </svg>
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
          <Link href="/uless" className="forum-btn-outline" style={{ textDecoration: 'none', padding: '8px 16px', borderRadius: '6px' }}>Volver al foro</Link>
        </div>
      </div>
    )
  }

  const postAuthor = getAuthorDisplay(post)
  const isOwnPost = identity && post.anon_uuid === identity.uuid

  return (
    <div className="forum-main-content">
      <div className="forum-shell">

        <Link href="/uless" style={{ color: '#b3b3b3', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', marginBottom: '8px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Volver al foro
        </Link>

        {/* Main Post */}
        <div className="forum-post" style={{ cursor: 'default' }}>
          <img src={displaySrc(postAuthor.avatar_path)} alt="" className="forum-create-avatar" style={{ width: '48px', height: '48px' }} />
          <div className="forum-post-content">
            <div className="forum-post-header">
              <span className="forum-post-author">
                <span className="forum-post-name" style={{ fontSize: '1rem' }}>{postAuthor.display_name}</span>
                <span className="forum-post-disc" style={{ fontSize: '0.85rem' }}>#{postAuthor.discriminator}</span>
                {isOwnPost && <span style={{ fontSize: '0.7rem', color: '#55b725', marginLeft: '6px', fontFamily: 'PoppinsFont, sans-serif' }}>tú</span>}
              </span>
              <span className="forum-post-time">{timeAgo(post.created_at)}</span>
            </div>
            <div className="forum-post-body" style={{ fontSize: '1.05rem', margin: '16px 0' }}>
              {parsePostBody(post.body)}
            </div>
            <div className="forum-post-footer">
              <button
                className={`forum-action-btn ${votedPost ? 'upvoted' : ''}`}
                onClick={handleVotePost}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
                {post.upvotes}
              </button>

              <button
                className="forum-action-btn"
                onClick={() => {
                  setNewReplyBody((prev) => prev ? prev + `\n${window.location.origin}/uless/${post.id}\n` : `${window.location.origin}/uless/${post.id}\n`)
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v12c0 4 1 6 1 6Z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v12c0 4 1 6 1 6Z"></path>
                </svg>
                Citar
              </button>

              {isOwnPost && (
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
        <div className="forum-create-box" style={{ padding: '12px' }}>
          <img src="/img_profile/default-profile.png" alt="" className="forum-create-avatar" style={{ width: '40px', height: '40px' }} />
          <div className="forum-create-input-area">
            {identity && (
              <div style={{ fontSize: '0.78rem', color: '#6b6b6b', marginBottom: '6px', fontFamily: 'PoppinsFont, sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>
                  Respondiendo como <strong style={{ color: '#9b9b9b' }}>{identity.display_name}</strong>
                  <span style={{ color: '#55b725' }}> #{identity.discriminator}</span>
                </span>
                <button
                  className="forum-btn-outline"
                  style={{ padding: '2px 8px', fontSize: '0.7rem' }}
                  onClick={() => {
                    const newName = prompt('Ingresá tu nuevo nombre:', identity.display_name)
                    if (newName && newName.trim().length > 0 && newName.trim().length <= 24) {
                      updateAnonDisplayName(newName.trim())
                      setIdentity({ ...identity, display_name: newName.trim() })
                    }
                  }}
                >
                  Cambiar
                </button>
              </div>
            )}
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

        {/* Replies List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {replies.map(reply => {
            const isVoted = votedReplies.has(reply.id)
            const replyAuthor = getAuthorDisplay(reply)
            const isOwnReply = identity && reply.anon_uuid === identity.uuid

            return (
              <div key={reply.id} className="forum-post" style={{ cursor: 'default', padding: '12px' }}>
                <img src={displaySrc(replyAuthor.avatar_path)} alt="" className="forum-create-avatar" style={{ width: '36px', height: '36px' }} />
                <div className="forum-post-content">
                  <div className="forum-post-header">
                    <span className="forum-post-author">
                      <span className="forum-post-name" style={{ fontSize: '0.95rem' }}>{replyAuthor.display_name}</span>
                      <span className="forum-post-disc" style={{ fontSize: '0.8rem' }}>#{replyAuthor.discriminator}</span>
                      {isOwnReply && <span style={{ fontSize: '0.7rem', color: '#55b725', marginLeft: '6px', fontFamily: 'PoppinsFont, sans-serif' }}>tú</span>}
                    </span>
                    <span className="forum-post-time">{timeAgo(reply.created_at)}</span>
                  </div>
                  <div className="forum-post-body" style={{ margin: '8px 0', fontSize: '0.9rem' }}>
                    {parsePostBody(reply.body)}
                  </div>
                  <div className="forum-post-footer">
                    <button
                      className={`forum-action-btn ${isVoted ? 'upvoted' : ''}`}
                      onClick={() => handleVoteReply(reply.id)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                      {reply.upvotes}
                    </button>

                    {isOwnReply && (
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
