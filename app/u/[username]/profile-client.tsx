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
  if (p.avatar_path) return `/img_profile/${encodeURI(p.avatar_path)}`
  if (oauth) return oauth
  return '/img_profile/default-profile.png'
}

function filterBioLinks(text: string): string {
  // Regex to find URLs
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
      } catch {
        /* ignore */
      }
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
        if (j.reason === 'username_taken') {
          setMsg({ type: 'err', text: 'Ese nombre de usuario ya está en uso.' })
        } else {
          setMsg({ type: 'err', text: j.detail ?? 'No se pudo guardar.' })
        }
        setLoading(false)
        return false
      }
      setMsg({ type: 'ok', text: 'Guardado.' })
      // Display name doesn't change the URL, so we don't need to redirect
      setLoading(false)
      return true
    } catch {
      setMsg({ type: 'err', text: 'Error de red.' })
      setLoading(false)
      return false
    }
  }

  async function pickAvatar(fn: string | null) {
    // If fn is null, we are clearing to use OAuth/Default
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
          <Link href="/underless" className="profile-back" style={{ marginBottom: 0 }}>
            ← Volver al juego
          </Link>
        </div>
      </header>
      <div className="profile-shell">
        <div className="profile-head">
        <div className="profile-head-top">
          <div className="profile-avatar-block">
            <img className="profile-avatar" src={src} alt="" width={96} height={96} />
            {isOwner ? (
              <button
                type="button"
                className="profile-avatar-edit"
                onClick={() => void openPicker()}
                aria-label="Cambiar imagen de perfil"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </button>
            ) : null}
          </div>
          <div className="profile-stats-top">
            <span className="profile-stat">
              Underium: <strong>{profile.underium}</strong>
            </span>
            <span className="profile-stat">
              Racha máx.: <strong>{profile.max_streak}</strong>
            </span>
          </div>
        </div>

        <div className="profile-head-main">
          <div className="profile-name-container">
            {isOwner && isEditingName ? (
              <div className="profile-name-edit-box">
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
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.currentTarget.blur()
                    }
                  }}
                  autoFocus
                  maxLength={20}
                />
              </div>
            ) : (
              <h1 className="profile-username">
                {displayName}
                {isOwner && (
                  <button 
                    className="profile-edit-name-btn" 
                    onClick={() => setIsEditingName(true)}
                    title="Editar nombre"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                    </svg>
                  </button>
                )}
                <span className="profile-disc">#{profile.discriminator}</span>
              </h1>
            )}
          </div>

          <div className="profile-bio-section">
            <span className="profile-bio-label">Biografía</span>
            {isOwner ? (
              <>
                <textarea
                  id="profile-bio"
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
                      className="profile-btn profile-btn-primary"
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
              <p className="profile-bio-text">
                {profile.bio ? profile.bio : 'Actualmente sin biografía.'}
              </p>
            )}
          </div>
          {msg ? (
            <p className={`profile-msg profile-msg--${msg.type === 'ok' ? 'ok' : 'err'}`}>{msg.text}</p>
          ) : null}
        </div>
      </div>

      <section className="profile-posts" aria-labelledby="profile-posts-h">
        <h2 id="profile-posts-h" className="profile-posts-title">
          Publicaciones
        </h2>
        <div className="profile-posts-box">
          <p className="profile-posts-empty">Ningun post por aca</p>
        </div>
      </section>

      {pickerOpen ? (
        <div
          className="profile-modal-overlay"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPickerOpen(false)
          }}
        >
          <div className="profile-modal" role="dialog" aria-modal="true" aria-labelledby="av-head">
            <h3 id="av-head">Elegí una imagen</h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '0.85rem', color: '#aaa' }}>
              Archivos en <code style={{ color: '#ccc' }}>/public/img_profile/</code>. Agregá imágenes ahí y
              recargá esta ventana.
            </p>
            <div className="profile-modal-grid">
                {/* Opción de Foto de Gmail siempre primero si existe */}
                {oauthPicture && (
                  <button
                    type="button"
                    className="profile-modal-tile profile-modal-tile-google"
                    onClick={() => void pickAvatar(null)}
                    aria-label="Usar foto de Google"
                  >
                    <img src={oauthPicture} alt="Google" />
                    <div className="google-badge">G</div>
                  </button>
                )}
                
                {avatars.map((fn) => (
                  <button
                    key={fn}
                    type="button"
                    className="profile-modal-tile"
                    onClick={() => void pickAvatar(fn)}
                    aria-label={`Usar ${fn}`}
                  >
                    <img src={`/img_profile/${encodeURI(fn)}`} alt="" />
                  </button>
                ))}
              </div>
            )}
            <div className="profile-modal-actions">
              <button type="button" className="profile-btn" onClick={() => setPickerOpen(false)}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
