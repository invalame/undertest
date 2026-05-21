'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

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
  author: {
    username: string
    display_name: string
    discriminator: string
    avatar_path: string | null
  }
}

type SearchResult = {
  id: string
  body?: string
  username?: string
  display_name?: string
  avatar_path?: string | null
  author?: { username: string, avatar_path: string | null }
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

export function ForumClient({ currentUser }: { currentUser: UserProfile | null }) {
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

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/forum/posts')
      const data = await res.json()
      if (data.ok) {
        setPosts(data.posts)
        if (currentUser && data.posts.length > 0) {
           const ids = data.posts.map((p: Post) => p.id).join(',')
           const voteRes = await fetch(`/api/forum/vote?ids=${ids}`)
           const voteData = await voteRes.json()
           if (voteData.ok) {
               setVotedIds(new Set(voteData.votes))
           }
        }
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
    if (!currentUser) return
    if (!newPostBody.trim() || newPostBody.length > 2000) return
    
    setIsPosting(true)
    setErrorMsg(null)
    try {
      const res = await fetch('/api/forum/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: newPostBody })
      })
      const data = await res.json()
      if (data.ok) {
        setPosts([data.post, ...posts])
        setNewPostBody('')
      } else {
        setErrorMsg(data.error)
      }
    } catch (e) {
      setErrorMsg('Error al publicar.')
    } finally {
      setIsPosting(false)
    }
  }

  const handleVote = async (e: React.MouseEvent, postId: string) => {
      e.preventDefault()
      e.stopPropagation()
      if (!currentUser) return

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

      try {
          const res = await fetch('/api/forum/vote', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ targetType: 'post', targetId: postId })
          })
          const data = await res.json()
          if (!data.ok) {
              // Revert on error
              fetchPosts()
          }
      } catch (e) {
          fetchPosts()
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
          <h1 className="forum-title">Foro</h1>
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
                         <Link href={`/forum/${res.id}`} key={res.id} className="forum-search-result-item" onClick={() => setShowSearch(false)}>
                             <img src={displaySrc(res.author?.avatar_path || res.avatar_path || null)} alt="" />
                             <div style={{ flex: 1, minWidth: 0 }}>
                                 <div style={{ fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                     {res.author?.username || res.username}
                                 </div>
                                 <div style={{ fontSize: '0.8rem', color: '#b3b3b3', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                     {res.body || 'Perfil'}
                                 </div>
                             </div>
                         </Link>
                     ))}
                 </div>
             )}
          </div>
        </div>

        {currentUser ? (
            <div className="forum-create-box">
               <img src={currentUser.avatarUrl} alt="" className="forum-create-avatar" />
               <div className="forum-create-input-area">
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
        ) : (
            <div className="forum-create-box" style={{ justifyContent: 'center', padding: '32px' }}>
               <span style={{ color: '#b3b3b3' }}>
                   Debes <a href="/" style={{ color: '#55b725', textDecoration: 'none' }}>iniciar sesión</a> para publicar o interactuar.
               </span>
            </div>
        )}

        {loading ? (
            <div style={{ textAlign: 'center', color: '#575757', padding: '40px' }}>Cargando posts...</div>
        ) : posts.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#575757', padding: '40px' }}>No hay posts todavía. Sé el primero.</div>
        ) : (
            posts.map(post => {
                const isVoted = votedIds.has(post.id)
                return (
                    <Link href={`/forum/${post.id}`} key={post.id} className="forum-post">
                        <img src={displaySrc(post.author.avatar_path)} alt="" className="forum-create-avatar" style={{ width: '40px', height: '40px' }} />
                        <div className="forum-post-content">
                            <div className="forum-post-header">
                                <object><Link href={`/u/${post.author.username}`} className="forum-post-author">
                                    <span className="forum-post-name">{post.author.display_name}</span>
                                    <span className="forum-post-disc">#{post.author.discriminator}</span>
                                </Link></object>
                                <span className="forum-post-time">{timeAgo(post.created_at)}</span>
                            </div>
                            <p className="forum-post-body">
                                {post.body.length > 300 ? post.body.substring(0, 300) + '...' : post.body}
                            </p>
                            <div className="forum-post-footer">
                                <object><button 
                                    className={`forum-action-btn ${isVoted ? 'upvoted' : ''}`} 
                                    onClick={(e) => handleVote(e, post.id)}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill={isVoted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                                        navigator.clipboard.writeText(`${window.location.origin}/forum/${post.id}`)
                                    }}
                                    title="Copiar enlace"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
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
