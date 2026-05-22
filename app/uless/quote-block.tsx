'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function displaySrc(path: string | null): string {
    if (!path) return '/img_profile/default-profile.png'
    if (path.startsWith('http')) return path
    return `/img_profile/${encodeURI(path)}`
}

export function QuoteBlock({ postId }: { postId: string }) {
    const [post, setPost] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`/api/forum/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                if (data.ok && data.post) {
                    setPost(data.post)
                }
            })
            .catch(() => {})
            .finally(() => setLoading(false))
    }, [postId])

    if (loading) {
        return <div className="forum-quote-box loading">Cargando cita...</div>
    }

    if (!post) {
        return <div className="forum-quote-box not-found">Post no encontrado.</div>
    }

    return (
        <Link href={`/uless/${post.id}`} className="forum-quote-box" onClick={(e) => e.stopPropagation()}>
            <div className="forum-quote-header">
                <img src={displaySrc(post.author?.avatar_path)} alt="" className="forum-quote-avatar" />
                <span className="forum-quote-name">{post.author?.display_name || 'Usuario'}</span>
                <span className="forum-quote-disc">#{post.author?.discriminator || '0000'}</span>
            </div>
            <p className="forum-quote-body">
                {post.body.length > 200 ? post.body.substring(0, 200) + '...' : post.body}
            </p>
        </Link>
    )
}
