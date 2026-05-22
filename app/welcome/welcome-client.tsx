'use client'

import React, { useState, useEffect } from 'react'
import { sanitizeDisplayName } from '@/lib/profile/sanitize'

export function WelcomeClient({ oauthPicture }: { oauthPicture: string | null }) {
    const [step, setStep] = useState(1) // 1: Name, 2: Avatar
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState<string | null>(null)
    const [avatars, setAvatars] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('/api/profile/avatars').then(r => r.json()).then(data => {
            if (data.ok && data.files) setAvatars(data.files)
        }).catch(() => {})
    }, [])

    const handleSkip = async () => {
        setLoading(true)
        await fetch('/api/profile/me', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                display_name: 'Userless',
                avatar_path: '/img_profile/default-profile.png',
                onboarded: true
            })
        })
        window.location.href = '/'
    }

    const handleNext = () => {
        if (!name.trim()) return
        setStep(2)
    }

    const handleFinish = async () => {
        setLoading(true)
        const safeName = sanitizeDisplayName(name) || 'Userless'
        const avatarPath = avatar === null ? oauthPicture : avatar

        await fetch('/api/profile/me', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                display_name: safeName,
                avatar_path: avatarPath || '/img_profile/default-profile.png',
                onboarded: true
            })
        })
        window.location.href = '/'
    }

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#161819', color: '#fff', fontFamily: 'PoppinsFont, sans-serif' }}>
            <div style={{ background: '#242829', padding: '32px', borderRadius: '12px', width: '100%', maxWidth: '400px', border: '1px solid #3a3d3f' }}>
                <h1 style={{ marginTop: 0, fontFamily: 'UnderLessFont', fontSize: '2rem' }}>Bienvenido</h1>
                
                {step === 1 && (
                    <div>
                        <p style={{ color: '#b3b3b3', marginBottom: '24px' }}>Elegí un nombre para tu perfil.</p>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={e => setName(e.target.value.slice(0, 20))}
                            placeholder="Tu nombre..."
                            style={{ width: '100%', padding: '12px', background: '#161819', border: '1px solid #3a3d3f', borderRadius: '8px', color: '#fff', marginBottom: '24px', boxSizing: 'border-box' }}
                            autoFocus
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button onClick={handleSkip} style={{ background: 'transparent', border: 'none', color: '#575757', cursor: 'pointer' }}>Omitir paso</button>
                            <button 
                                onClick={handleNext} 
                                disabled={!name.trim()}
                                style={{ background: '#55b725', color: '#111', border: 'none', padding: '8px 24px', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', opacity: name.trim() ? 1 : 0.5 }}
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <p style={{ color: '#b3b3b3', marginBottom: '24px' }}>Elegí tu foto de perfil.</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '24px' }}>
                            {oauthPicture && (
                                <img 
                                    src={oauthPicture} 
                                    onClick={() => setAvatar(null)}
                                    style={{ width: '100%', aspectRatio: '1', borderRadius: '8px', objectFit: 'cover', cursor: 'pointer', border: avatar === null ? '2px solid #55b725' : '2px solid transparent' }} 
                                    alt=""
                                />
                            )}
                            {avatars.map(a => (
                                <img 
                                    key={a}
                                    src={`/img_profile/${encodeURI(a)}`}
                                    onClick={() => setAvatar(a)}
                                    style={{ width: '100%', aspectRatio: '1', borderRadius: '8px', objectFit: 'cover', cursor: 'pointer', border: avatar === a ? '2px solid #55b725' : '2px solid transparent' }} 
                                    alt=""
                                />
                            ))}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button onClick={handleSkip} disabled={loading} style={{ background: 'transparent', border: 'none', color: '#575757', cursor: 'pointer' }}>Omitir paso</button>
                            <button 
                                onClick={handleFinish} 
                                disabled={loading}
                                style={{ background: '#55b725', color: '#111', border: 'none', padding: '8px 24px', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', opacity: loading ? 0.5 : 1 }}
                            >
                                {loading ? 'Guardando...' : 'Finalizar'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
