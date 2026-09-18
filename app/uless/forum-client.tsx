'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { parsePostBody } from './utils'
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

type SearchResult = {
  id: string
  body?: string
  username?: string
  display_name?: string
  avatar_path?: string | null
  author?: { username: string, avatar_path: string | null }
}

function displaySrc(path: string | null | undefined): string {
  if (!path) return '/img_profile/default-profile.png'
  if (path.startsWith('http')) return path
  return `/img_profile/${encodeURI(path)}`
}

function getAuthorDisplay(post: Post) {
  if (post.author) {
    return {
      display_name: post.author.display_name,
      discriminator: post.author.discriminator,
      avatar_path: post.author.avatar_path,
    }
  }
  if (post.anon_display_name) {
    return {
      display_name: post.anon_display_name,
      discriminator: post.anon_discriminator || '0000',
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

// Votes are stored locally — simpler and avoids DB auth dependency
const VOTES_KEY = 'uless_voted_posts_v1'

function getLocalVotes(): Set<string> {
  try {
    const raw = localStorage.getItem(VOTES_KEY)
    if (raw) return new Set(JSON.parse(raw) as string[])
  } catch { /* ignore */ }
  return new Set()
}

function saveLocalVotes(votes: Set<string>) {
  try {
    localStorage.setItem(VOTES_KEY, JSON.stringify([...votes]))
  } catch { /* ignore */ }
}

export function ForumClient() {
  const [identity, setIdentity] = useState<AnonIdentity | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [newPostBody, setNewPostBody] = useState('')
  const [isPosting, setIsPosting] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showSearch, setShowSearch] = useState(false)
  const searchDebounce = useRef<NodeJS.Timeout | null>(null)

  const [votedIds, setVotedIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    const id = getAnonIdentity()
    setIdentity(id)
    setVotedIds(getLocalVotes())
  }, [])

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/forum/posts')
      const data = await res.json()
      if (data.ok) {
        setPosts(data.posts)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handlePost = async () => {
    if (!identity) return
    if (!newPostBody.trim() || newPostBody.length > 2000) return

    setIsPosting(true)
    setErrorMsg(null)
    try {
      const res = await fetch('/api/forum/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          body: newPostBody,
          anon_uuid: identity.uuid,
          display_name: identity.display_name,
          discriminator: identity.discriminator,
        }),
      })
      const data = await res.json()
      if (data.ok) {
        setPosts([data.post, ...posts])
        setNewPostBody('')
      } else {
        setErrorMsg(data.error)
      }
    } catch {
      setErrorMsg('Error al publicar.')
    } finally {
      setIsPosting(false)
    }
  }

  const handleVote = async (e: React.MouseEvent, postId: string) => {
    e.preventDefault()
    e.stopPropagation()

    const isVoted = votedIds.has(postId)

    // Optimistic update
    setPosts(posts.map(p => {
      if (p.id === postId) {
        return { ...p, upvotes: Math.max(0, p.upvotes + (isVoted ? -1 : 1)) }
      }
      return p
    }))

    const newVotedIds = new Set(votedIds)
    if (isVoted) newVotedIds.delete(postId)
    else newVotedIds.add(postId)
    setVotedIds(newVotedIds)
    saveLocalVotes(newVotedIds)

    try {
      await fetch('/api/forum/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetType: 'post', targetId: postId, toggle: !isVoted }),
      })
    } catch {
      /* ignore — optimistic update stays */
    }
  }

  const handleSearch = (q: string) => {
    setSearchQuery(q)
    if (searchDebounce.current) clearTimeout(searchDebounce.current)

    if (q.trim().length === 0) {
      setSearchResults([])
      setShowSearch(false)
      return
    }

    setShowSearch(true)
    searchDebounce.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/forum/search?q=${encodeURIComponent(q)}&type=posts`)
        const data = await res.json()
        if (data.ok) {
          setSearchResults(data.results)
        }
      } catch (e) {
        console.error(e)
      }
    }, 300)
  }

  return (
    <div className="forum-main-content">
      <div className="forum-shell">

        <div className="forum-top-bar">
          <h1 className="forum-title">uLess</h1>
          <div className="forum-search-box" style={{ position: 'relative' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Buscar posts..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => { if (searchResults.length > 0) setShowSearch(true) }}
              onBlur={() => setTimeout(() => setShowSearch(false), 200)}
            />
            {showSearch && searchResults.length > 0 && (
              <div className="forum-search-results">
                {searchResults.map(res => (
                  <Link href={`/uless/${res.id}`} key={res.id} className="forum-search-result-item" onClick={() => setShowSearch(false)}>
                    <img src={displaySrc(res.author?.avatar_path || res.avatar_path || null)} alt="" />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {res.author?.username || res.username}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#b3b3b3', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {res.body || 'Post'}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Compose box — always visible, identity from localStorage */}
        <div className="forum-create-box">
          <img src="/img_profile/default-profile.png" alt="" className="forum-create-avatar" />
          <div className="forum-create-input-area">
            {identity && (
              <div style={{ fontSize: '0.78rem', color: '#6b6b6b', marginBottom: '6px', fontFamily: 'PoppinsFont, sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>
                  Publicando como <strong style={{ color: '#9b9b9b' }}>{identity.display_name}</strong>
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
              placeholder="¿Qué estás pensando?"
              value={newPostBody}
              onChange={(e) => setNewPostBody(e.target.value)}
              maxLength={2000}
            />
            {errorMsg && <div className="forum-error">{errorMsg}</div>}
            <div className="forum-create-actions">
              <span className={`forum-char-count ${newPostBody.length >= 2000 ? 'limit' : ''}`}>
                {newPostBody.length} / 2000
              </span>
              <button
                className="forum-btn"
                onClick={handlePost}
                disabled={!newPostBody.trim() || isPosting || newPostBody.length > 2000}
              >
                Publicar
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
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
        ) : posts.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#575757', padding: '40px' }}>No hay posts todavía. Sé el primero.</div>
        ) : (
          posts.map(post => {
            const isVoted = votedIds.has(post.id)
            const authorData = getAuthorDisplay(post)
            const isOwn = identity && post.anon_uuid === identity.uuid

            return (
              <Link href={`/uless/${post.id}`} key={post.id} className="forum-post">
                <img src={displaySrc(authorData.avatar_path)} alt="" className="forum-create-avatar" style={{ width: '40px', height: '40px' }} />
                <div className="forum-post-content">
                  <div className="forum-post-header">
                    <span className="forum-post-author">
                      <span className="forum-post-name">{authorData.display_name}</span>
                      <span className="forum-post-disc">#{authorData.discriminator}</span>
                      {isOwn && <span style={{ fontSize: '0.7rem', color: '#55b725', marginLeft: '6px', fontFamily: 'PoppinsFont, sans-serif' }}>tú</span>}
                    </span>
                    <span className="forum-post-time">{timeAgo(post.created_at)}</span>
                  </div>
                  <div className="forum-post-body">
                    {parsePostBody(post.body.length > 300 ? post.body.substring(0, 300) + '...' : post.body)}
                  </div>
                  <div className="forum-post-footer">
                    <object><button
                      className={`forum-action-btn ${isVoted ? 'upvoted' : ''}`}
                      onClick={(e) => handleVote(e, post.id)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                      {post.upvotes}
                    </button></object>

                    <span className="forum-action-btn" style={{ cursor: 'default' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      {post.reply_count}
                    </span>

                    <object><button
                      className="forum-action-btn"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setNewPostBody((prev) => prev ? prev + `\n${window.location.origin}/uless/${post.id}\n` : `${window.location.origin}/uless/${post.id}\n`)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      title="Citar post"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v12c0 4 1 6 1 6Z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v12c0 4 1 6 1 6Z"></path>
                      </svg>
                    </button></object>
                  </div>
                </div>
              </Link>
            )
          })
        )}
      </div>
    </div>
  )
}
