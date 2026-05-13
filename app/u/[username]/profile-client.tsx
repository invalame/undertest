'use client'

import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { isValidUsername } from '@/lib/profile/username'

export type ProfilePublic = {
  id: string
  username: string
  bio: string
  avatar_path: string | null
  underium: number
  max_streak: number
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
  return '/img/peepo-band.gif'
}

export function ProfileClient({ profile, isOwner, oauthPicture, initialAvatars }: Props) {
  const router = useRouter()
  const [bio, setBio] = useState(profile.bio)
  const [username, setUsername] = useState(profile.username)
  const [avatarPath, setAvatarPath] = useState<string | null>(profile.avatar_path)
  const [pickerOpen, setPickerOpen] = useState(false)
  const [avatars, setAvatars] = useState<string[]>(initialAvatars)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)

  const row = useMemo(
    () => ({ ...profile, bio, username, avatar_path: avatarPath }),
    [profile, bio, username, avatarPath]
  )

  const src = displaySrc(row, oauthPicture)

  const shareUrl = useMemo(() => {
    if (typeof window === 'undefined') return ''
    return `${window.location.origin}/u/${encodeURIComponent(username)}`
  }, [username])

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
      if (typeof patch.username === 'string' && patch.username !== profile.username) {
        router.push(`/u/${encodeURIComponent(patch.username)}`)
        router.refresh()
      }
      setLoading(false)
      return true
    } catch {
      setMsg({ type: 'err', text: 'Error de red.' })
      setLoading(false)
      return false
    }
  }

  async function pickAvatar(fn: string) {
    const ok = await saveField({ avatar_path: fn })
    if (!ok) return
    setAvatarPath(fn)
    setPickerOpen(false)
  }

  return (
    <>
      <div className="profile-head">
        <div className="profile-avatar-block">
          <img className="profile-avatar" src={src} alt="" width={96} height={96} />
          {isOwner ? (
            <button
              type="button"
              className="profile-avatar-edit"
              onClick={() => void openPicker()}
              aria-label="Cambiar imagen de perfil"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              </svg>
            </button>
          ) : null}
        </div>
        <div className="profile-head-main">
          <h1 className="profile-username">{username}</h1>
          <div className="profile-meta-row">
            <span className="profile-stat">
              Underium: <strong>{profile.underium}</strong>
            </span>
            <span className="profile-stat">
              Racha máx.: <strong>{profile.max_streak}</strong>
            </span>
          </div>
          {isOwner ? (
            <>
              <div className="profile-user-row">
                <input
                  className="profile-user-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                  maxLength={24}
                  autoComplete="off"
                  aria-label="Nombre de usuario"
                />
                <button
                  type="button"
                  className="profile-btn profile-btn-primary"
                  disabled={
                    loading ||
                    username === profile.username ||
                    !isValidUsername(username)
                  }
                  onClick={() => void saveField({ username })}
                >
                  Guardar nombre
                </button>
              </div>
              <label className="profile-bio-label" htmlFor="profile-bio" style={{ marginTop: 14 }}>
                Biografía
              </label>
              <textarea
                id="profile-bio"
                className="profile-bio-input"
                value={bio}
                onChange={(e) => setBio(e.target.value.slice(0, 500))}
                maxLength={500}
                rows={5}
              />
              <button
                type="button"
                className="profile-btn profile-btn-primary"
                style={{ marginTop: 10 }}
                disabled={loading || bio === profile.bio}
                onClick={() => void saveField({ bio })}
              >
                Guardar biografía
              </button>
            </>
          ) : (
            <>
              {profile.bio ? (
                <>
                  <span className="profile-bio-label" style={{ marginTop: 14 }}>
                    Biografía
                  </span>
                  <p className="profile-bio-text">{profile.bio}</p>
                </>
              ) : (
                <p className="profile-bio-text" style={{ marginTop: 14, color: '#777' }}>
                  Sin biografía.
                </p>
              )}
            </>
          )}
          {msg ? (
            <p className={`profile-msg profile-msg--${msg.type === 'ok' ? 'ok' : 'err'}`}>{msg.text}</p>
          ) : null}
          <p className="profile-share">Link para compartir: {shareUrl}</p>
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
            {avatars.length === 0 ? (
              <p style={{ color: '#888', fontSize: '0.9rem' }}>No hay imágenes en la carpeta todavía.</p>
            ) : (
              <div className="profile-modal-grid">
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
