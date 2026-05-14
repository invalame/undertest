'use client'

import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { isValidUsername } from '@/lib/profile/username'
import Link from 'next/link'

export type ProfilePublic = {
  id: string
  username: string
  bio: string
  avatar_path: string | null
  underium: number
  max_streak: number
  display_name: string
  discriminator: string
}

type Props = {
  profile: ProfilePublic
  isOwner: boolean
  oauthPicture: string | null
  initialAvatars: string[]
}

function displaySrc(p: ProfilePublic, oauth: string | null): string {
  if (p.avatar_path) {
    if (p.avatar_path.startsWith('http')) return p.avatar_path
    return `/img_profile/${encodeURI(p.avatar_path)}`
  }
  if (oauth) return oauth
  return '/img_profile/default-profile.png'
}

function filterBioLinks(text: string): string {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, (url) => {
    const lower = url.toLowerCase();
    if (
      lower.includes('youtube.com') || 
      lower.includes('youtu.be') || 
      lower.includes('twitter.com') || 
      lower.includes('x.com') || 
      lower.includes('instagram.com')
    ) {
      return url;
    }
    return '[link removido]';
  });
}

export function ProfileClient({ profile, isOwner, oauthPicture, initialAvatars }: Props) {
  const router = useRouter()
  const [bio, setBio] = useState(profile.bio)
  const [displayName, setDisplayName] = useState(profile.display_name)
  const [avatarPath, setAvatarPath] = useState<string | null>(profile.avatar_path)
  const [pickerOpen, setPickerOpen] = useState(false)
  const [avatars, setAvatars] = useState<string[]>(initialAvatars)
  const [loading, setLoading] = useState(false)
  const [isEditingName, setIsEditingName] = useState(false)
  const [msg, setMsg] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)

  const hasBioChanged = bio !== profile.bio
  const bioCharCount = bio.length

  const row = useMemo(
    () => ({ ...profile, bio, display_name: displayName, avatar_path: avatarPath }),
    [profile, bio, displayName, avatarPath]
  )

  const src = displaySrc(row, oauthPicture)

  async function openPicker() {
    setMsg(null)
    if (avatars.length === 0) {
      try {
        const r = await fetch('/api/profile/avatars', { credentials: 'include' })
        const j = (await r.json()) as { ok?: boolean; files?: string[] }
        if (j.ok && Array.isArray(j.files)) setAvatars(j.files)
      } catch { /* ignore */ }
    }
    setPickerOpen(true)
  }

  async function saveField(patch: Record<string, unknown>): Promise<boolean> {
    setLoading(true)
    setMsg(null)
    try {
      const r = await fetch('/api/profile/me', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(patch),
      })
      const j = (await r.json()) as { ok?: boolean; reason?: string; detail?: string }
      if (!r.ok || !j.ok) {
        setMsg({ type: 'err', text: j.detail ?? 'No se pudo guardar.' })
        setLoading(false)
        return false
      }
      setMsg({ type: 'ok', text: 'Guardado.' })
      setLoading(false)
      return true
    } catch {
      setMsg({ type: 'err', text: 'Error de red.' })
      setLoading(false)
      return false
    }
  }

  async function pickAvatar(fn: string | null) {
    const ok = await saveField({ avatar_path: fn })
    if (!ok) return
    setAvatarPath(fn)
    setPickerOpen(false)
  }

  return (
    <>
      <header className="profile-top-bar">
        <div className="header-left">
          <button 
            className="underless-main-sidebar-toggle" 
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).toggleSidebar) {
                (window as any).toggleSidebar();
              }
            }} 
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className="profile-shell">
        <div className="profile-head">
          <div className="profile-head-left">
            <div className="profile-avatar-block">
              <img className="profile-avatar" src={src} alt="" />
              {isOwner && (
                <button
                  type="button"
                  className="profile-avatar-edit"
                  onClick={() => void openPicker()}
                  aria-label="Cambiar imagen de perfil"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="profile-head-right">
            <div className="profile-name-container">
              {isOwner && isEditingName ? (
                <input
                  className="profile-name-input"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value.slice(0, 20))}
                  onBlur={() => {
                    if (displayName.trim().length >= 2 && displayName !== profile.display_name) {
                      void saveField({ display_name: displayName })
                    }
                    setIsEditingName(false)
                  }}
                  onKeyDown={(e) => { if (e.key === 'Enter') e.currentTarget.blur() }}
                  autoFocus
                  maxLength={20}
                />
              ) : (
                <h1 className="profile-username">
                  {displayName}
                  {isOwner && (
                    <button className="profile-edit-name-btn" onClick={() => setIsEditingName(true)}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                      </svg>
                    </button>
                  )}
                  <span className="profile-disc">#{profile.discriminator}</span>
                </h1>
              )}
            </div>

            <div className="profile-stats-inline">
              <span className="profile-stat">Underium: <strong>{profile.underium}</strong></span>
              <span className="profile-stat">Racha máx.: <strong>{profile.max_streak}</strong></span>
            </div>

            <div className="profile-bio-section">
              <span className="profile-bio-label">Biografía</span>
              {isOwner ? (
                <>
                  <textarea
                    className="profile-bio-input"
                    value={bio}
                    placeholder="Escribe algo sobre ti..."
                    onChange={(e) => setBio(e.target.value.slice(0, 160))}
                    maxLength={160}
                    rows={3}
                  />
                  <div className="profile-bio-footer">
                    <span className="profile-bio-counter">{bioCharCount}/160</span>
                    {hasBioChanged && (
                      <button
                        type="button"
                        className="profile-btn-primary"
                        disabled={loading}
                        onClick={() => {
                          const filtered = filterBioLinks(bio)
                          setBio(filtered)
                          void saveField({ bio: filtered })
                        }}
                      >
                        Guardar biografía
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <p className="profile-bio-text">{profile.bio || 'Actualmente sin biografía.'}</p>
              )}
            </div>
            {msg && <p className={`profile-msg profile-msg--${msg.type}`}>{msg.text}</p>}
          </div>
        </div>
      </div>

      {pickerOpen && (
        <div className="profile-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setPickerOpen(false) }}>
          <div className="profile-modal">
            <h3>Elegí una imagen</h3>
            <div className="profile-modal-grid">
              {oauthPicture && (
                <button type="button" className="profile-modal-tile profile-modal-tile-google" onClick={() => void pickAvatar(null)}>
                  <img src={oauthPicture} alt="Google" />
                  <div className="google-badge">G</div>
                </button>
              )}
              {avatars.map((fn) => (
                <button key={fn} type="button" className="profile-modal-tile" onClick={() => void pickAvatar(fn)}>
                  <img src={`/img_profile/${encodeURI(fn)}`} alt="" />
                </button>
              ))}
            </div>
            <div className="profile-modal-actions">
              <button type="button" className="profile-btn-primary" onClick={() => setPickerOpen(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
