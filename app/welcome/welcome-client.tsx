'use client'

import { useState, useEffect } from 'react'
import { sanitizeDisplayName, validateDisplayName } from '@/lib/profile/sanitize'

export function WelcomeClient({ defaultAvatar, initialName }: { defaultAvatar: string | null, initialName: string }) {
  const [name, setName] = useState(initialName === 'Userless' ? '' : initialName)
  const [avatars, setAvatars] = useState<string[]>([])
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(defaultAvatar)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/profile/avatars')
      .then(r => r.json())
      .then(j => {
        if (j.ok && Array.isArray(j.files)) setAvatars(j.files)
      })
      .catch(() => {})
  }, [])

  const handleSave = async (skip: boolean) => {
    setLoading(true)
    setError(null)

    let finalName = name.trim()
    let finalAvatar = selectedAvatar

    if (skip) {
        finalName = 'Userless'
        finalAvatar = defaultAvatar || null // Se usa null para que use defaultProfile o lo que sea si no hay google
    } else {
        const err = validateDisplayName(finalName)
        if (err) {
            setError(err)
            setLoading(false)
            return
        }
        finalName = sanitizeDisplayName(finalName) || 'Userless'
    }

    try {
      const res = await fetch('/api/profile/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ display_name: finalName, avatar_path: finalAvatar })
      })
      const data = await res.json()
      if (data.ok) {
        window.location.href = '/'
      } else {
        setError(data.error || 'Ocurrió un error.')
        setLoading(false)
      }
    } catch {
      setError('Error de red.')
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#161819', color: '#fff', fontFamily: 'PoppinsFont, sans-serif' }}>
      <div style={{ background: '#242829', border: '1px solid #3a3d3f', borderRadius: '12px', padding: '32px', width: 'min(400px, 90%)', boxSizing: 'border-box' }}>
        <h1 style={{ fontFamily: 'UnderLessFont, sans-serif', fontSize: '2rem', margin: '0 0 8px 0', textAlign: 'center' }}>Bienvenido a UnderLess</h1>
        <p style={{ color: '#b3b3b3', textAlign: 'center', marginBottom: '24px', fontSize: '0.9rem' }}>Completá tu perfil para empezar a interactuar en la comunidad.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: '#888' }}>AVATAR</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
               {defaultAvatar && (
                 <img 
                   src={defaultAvatar} 
                   alt="Google" 
                   referrerPolicy="no-referrer"
                   onClick={() => setSelectedAvatar(defaultAvatar)}
                   style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '6px', cursor: 'pointer', border: selectedAvatar === defaultAvatar ? '2px solid #55b725' : '2px solid transparent' }} 
                 />
               )}
               {avatars.map(av => (
                 <img 
                   key={av}
                   src={`/img_profile/${encodeURI(av)}`} 
                   alt=""
                   onClick={() => setSelectedAvatar(av)}
                   style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '6px', cursor: 'pointer', border: selectedAvatar === av ? '2px solid #55b725' : '2px solid transparent', background: '#161819' }} 
                 />
               ))}
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: '#888' }}>NOMBRE PARA MOSTRAR</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Elegí tu nombre..."
              maxLength={20}
              style={{ width: '100%', boxSizing: 'border-box', background: '#161819', border: '1px solid #575757', color: '#fff', padding: '12px', borderRadius: '6px', fontSize: '1rem', outline: 'none' }}
            />
          </div>

          {error && <div style={{ color: '#ff4444', fontSize: '0.9rem', textAlign: 'center' }}>{error}</div>}

          <button 
            onClick={() => handleSave(false)} 
            disabled={loading || !name.trim()}
            style={{ background: '#55b725', color: '#111', padding: '12px', borderRadius: '6px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', opacity: loading || !name.trim() ? 0.5 : 1 }}
          >
            {loading ? 'Guardando...' : 'Comenzar'}
          </button>

          <button 
            onClick={() => handleSave(true)} 
            disabled={loading}
            style={{ background: 'transparent', color: '#888', padding: '8px', borderRadius: '6px', border: 'none', fontSize: '0.9rem', cursor: 'pointer' }}
          >
            Omitir por ahora
          </button>
        </div>
      </div>
    </div>
  )
}
