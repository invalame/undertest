'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

type Post = {
  id: string
  body: string
  created_at: string
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

export function QuotedPost({ postId }: { postId: string }) {
    const [post, setPost] = useState<Post | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`/api/forum/posts/${postId}`)
            .then(r => r.json())
            .then(data => {
                if (data.ok) setPost(data.post)
            })
            .catch(() => {})
            .finally(() => setLoading(false))
    }, [postId])

    if (loading) {
        return (
            <div style={{ border: '1px solid #3a3d3f', borderRadius: '8px', padding: '12px', margin: '8px 0', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #575757', borderTopColor: '#55b725', animation: 'spin 1s linear infinite' }} />
            </div>
        )
    }

    if (!post) {
        return (
            <div style={{ border: '1px solid #3a3d3f', borderRadius: '8px', padding: '12px', margin: '8px 0', color: '#575757', fontSize: '0.9rem' }}>
                Post no encontrado o eliminado.
            </div>
        )
    }

    return (
        <Link href={`/uless/${post.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div style={{ border: '1px solid #3a3d3f', borderRadius: '8px', padding: '12px', margin: '8px 0', background: 'rgba(255,255,255,0.02)', cursor: 'pointer', transition: 'background 0.2s' }}
                 onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                 onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                 onClick={(e) => e.stopPropagation()}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <img src={displaySrc(post.author.avatar_path)} alt="" style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }} />
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>{post.author.display_name}</span>
                    <span style={{ fontSize: '0.8rem', color: '#575757' }}>#{post.author.discriminator}</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#e8e8e8', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {post.body.length > 150 ? post.body.substring(0, 150) + '...' : post.body}
                </div>
            </div>
        </Link>
    )
}

export function parsePostBody(body: string) {
    // Regex to match URLs ending in /uless/[uuid]
    const ulessRegex = /(https?:\/\/[^\s]+)?\/uless\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/gi;
    
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = ulessRegex.exec(body)) !== null) {
        // Push preceding text
        if (match.index > lastIndex) {
            parts.push(body.substring(lastIndex, match.index));
        }

        const postId = match[2];
        parts.push(<QuotedPost key={`${postId}-${match.index}`} postId={postId} />);

        lastIndex = ulessRegex.lastIndex;
    }

    if (lastIndex < body.length) {
        parts.push(body.substring(lastIndex));
    }

    return parts.length > 0 ? parts : body;
}
