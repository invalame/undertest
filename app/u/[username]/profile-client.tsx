'use client'

import { useMemo, useState } from 'react'
import {
  countWords,
  MAX_BIO_WORDS,
  sanitizeBio,
  sanitizeDisplayName,
  stripUnsafeText,
  validateDisplayName,
} from '@/lib/profile/sanitize'

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
    if (p.avatar_path.startsWith('http')) return p.avatar_path;
    return `/img_profile/${encodeURI(p.avatar_path)}`;
  }
  if (oauth) return oauth
  return '/img_profile/default-profile.png'
}

export function ProfileClient({ profile, isOwner, oauthPicture, initialAvatars }: Props) {
  const [bio, setBio] = useState(profile.bio)
  const [displayName, setDisplayName] = useState(profile.display_name)
  const [avatarPath, setAvatarPath] = useState<string | null>(profile.avatar_path)
  const [pickerOpen, setPickerOpen] = useState(false)
  const [avatars, setAvatars] = useState<string[]>(initialAvatars)
  const [loading, setLoading] = useState(false)
  const [savedBio, setSavedBio] = useState(profile.bio)
  const [isEditingName, setIsEditingName] = useState(false)
  const [isEditingBio, setIsEditingBio] = useState(false)
  const [msg, setMsg] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)

  const hasBioChanged = bio !== savedBio
  const bioWordCount = countWords(bio)

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
      setTimeout(() => setMsg(null), 3000)
      // Display name doesn't change the URL, so we don't need to redirect
      setLoading(false)
      return true
    } catch {
      setMsg({ type: 'err', text: 'Error de red.' })
      setTimeout(() => setMsg(null), 3000)
      setLoading(false)
      return false
    }
  }

  async function pickAvatar(fn: string | null) {
    const pathToSave = fn === null ? oauthPicture : fn;
    const ok = await saveField({ avatar_path: pathToSave })
    if (!ok) return
    setAvatarPath(pathToSave)
    setPickerOpen(false)
  }

  return (
    <>
      <div className="profile-main-content">
        <div className="profile-shell">
          <div className="profile-head">
            <div className="profile-avatar-block">
              <img className="profile-avatar" src={src} alt="" width={140} height={140} referrerPolicy="no-referrer" />
              {isOwner ? (
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
              ) : null}
            </div>

            <div className="profile-head-main">
              <div className="profile-name-container">
                {isOwner && isEditingName ? (
                  <div className="profile-name-edit-box">
                    <input
                      className="profile-name-input"
                      value={displayName}
                      onChange={(e) => setDisplayName(stripUnsafeText(e.target.value).slice(0, 20))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const trimmed = displayName.trim();
                          if (trimmed === profile.display_name) {
                            setIsEditingName(false);
                            return;
                          }
                          const err = validateDisplayName(trimmed);
                          if (err) {
                            setMsg({ type: 'err', text: err });
                            setTimeout(() => setMsg(null), 3000);
                            return;
                          }
                          const safe = sanitizeDisplayName(trimmed)
                          if (!safe) return
                          saveField({ display_name: safe }).then(ok => {
                            if (ok) {
                              setDisplayName(safe)
                              setIsEditingName(false)
                            }
                          })
                        }
                      }}
                      autoFocus
                      maxLength={20}
                    />
                    <button className="profile-name-save-btn" onClick={() => {
                        const trimmed = displayName.trim();
                        if (trimmed === profile.display_name) {
                          setIsEditingName(false);
                          return;
                        }
                        const err = validateDisplayName(trimmed);
                        if (err) {
                          setMsg({ type: 'err', text: err });
                          setTimeout(() => setMsg(null), 3000);
                          return;
                        }
                        const safe = sanitizeDisplayName(trimmed)
                        if (!safe) {
                          setMsg({ type: 'err', text: 'ponete un nombre como la gente' })
                          setTimeout(() => setMsg(null), 3000)
                          return
                        }
                        saveField({ display_name: safe }).then(ok => {
                            if (ok) {
                              setDisplayName(safe)
                              setIsEditingName(false)
                            }
                        })
                    }}>Guardar</button>
                    <button className="profile-name-cancel-btn" onClick={() => {
                        setDisplayName(profile.display_name)
                        setIsEditingName(false)
                    }}>✕</button>
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

              <div className="profile-stats-top">
                <span className="profile-stat">
                  Underium: <strong>{profile.underium}</strong>
                </span>
                <span className="profile-stat">
                  Racha máx.: <strong>{profile.max_streak}</strong>
                </span>
              </div>

              <div className="profile-bio-section">
                <div className="profile-bio-header">
                  <span className="profile-bio-label">Biografía</span>
                  {isOwner && !isEditingBio && (
                    <button className="profile-edit-bio-btn" onClick={() => setIsEditingBio(true)} title="Editar biografía">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                      </svg>
                    </button>
                  )}
                </div>
                {isOwner && isEditingBio ? (
                  <>
                    <textarea
                      id="profile-bio"
                      className="profile-bio-input"
                      value={bio}
                      placeholder="Escribe algo sobre ti..."
                      onChange={(e) => setBio(sanitizeBio(e.target.value))}
                      rows={6}
                      autoFocus
                    />
                    <div className="profile-bio-footer">
                      <span className="profile-bio-counter">{bioWordCount}/{MAX_BIO_WORDS} palabras</span>
                      <div className="profile-bio-actions">
                        <button type="button" className="profile-btn profile-btn-secondary" onClick={() => { setBio(savedBio); setIsEditingBio(false); }}>Cancelar</button>
                        <button
                          type="button"
                          className="profile-btn profile-btn-primary"
                          disabled={loading || !hasBioChanged}
                          onClick={async () => {
                            const cleaned = sanitizeBio(bio)
                            setBio(cleaned)
                            const ok = await saveField({ bio: cleaned })
                            if (ok) {
                              setSavedBio(cleaned)
                              setIsEditingBio(false)
                            }
                          }}
                        >
                          Guardar
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="profile-bio-text-container">
                    <p className="profile-bio-text">
                      {bio ? bio : 'Actualmente sin biografía.'}
                    </p>
                  </div>
                )}
              </div>
              {msg ? (
                <div className={`profile-msg profile-msg--${msg.type === 'ok' ? 'ok' : 'err'}`}>{msg.text}</div>
              ) : null}
            </div>
          </div>

          <section className="profile-posts" aria-labelledby="profile-posts-h">
            <h2 id="profile-posts-h" className="profile-posts-title">
              Publicaciones
            </h2>
            <div className="profile-posts-box">
              <p className="profile-posts-empty">Ninguna publicación por aquí</p>
            </div>
          </section>
        </div>
      </div>

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
                    <img src={oauthPicture} alt="Google" referrerPolicy="no-referrer" />
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
