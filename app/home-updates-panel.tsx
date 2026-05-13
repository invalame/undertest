'use client'

import { useEffect, useState } from 'react'

export const HUB_UPDATES_STORAGE_KEY = 'underlessHubUpdatesV1'

export type HubUpdate = {
  id: string
  title: string
  description: string
  imageDataUrl: string | null
  createdAt: string
}

function safeParse(raw: string | null): HubUpdate[] {
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed
      .map((row) => {
        if (!row || typeof row !== 'object') return null
        const o = row as Record<string, unknown>
        const id = typeof o.id === 'string' ? o.id : ''
        const title = typeof o.title === 'string' ? o.title : ''
        const description = typeof o.description === 'string' ? o.description : ''
        const imageDataUrl =
          o.imageDataUrl === null || typeof o.imageDataUrl === 'string' ? o.imageDataUrl : null
        const createdAt = typeof o.createdAt === 'string' ? o.createdAt : ''
        if (!id || !title) return null
        return { id, title, description, imageDataUrl, createdAt } satisfies HubUpdate
      })
      .filter((x): x is HubUpdate => x !== null)
  } catch {
    return []
  }
}

export function HomeUpdatesPanel({ canCompose }: { canCompose: boolean }) {
  const [items, setItems] = useState<HubUpdate[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null)
  const [imageName, setImageName] = useState<string | null>(null)
  const [formError, setFormError] = useState<string | null>(null)
  const [savedFlash, setSavedFlash] = useState(false)

  useEffect(() => {
    setItems(safeParse(typeof window !== 'undefined' ? localStorage.getItem(HUB_UPDATES_STORAGE_KEY) : null))
  }, [])

  const onPickImage = (file: File | null) => {
    setFormError(null)
    if (!file) {
      setImageDataUrl(null)
      setImageName(null)
      return
    }
    if (!file.type.startsWith('image/')) {
      setFormError('Elegí un archivo de imagen (PNG, JPG, WebP, etc.).')
      return
    }
    if (file.size > 450_000) {
      setFormError('La imagen es muy pesada para guardarla acá (máx. ~450 KB). Probá otra más chica.')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      const r = reader.result
      if (typeof r === 'string') {
        setImageDataUrl(r)
        setImageName(file.name)
      }
    }
    reader.onerror = () => setFormError('No se pudo leer la imagen.')
    reader.readAsDataURL(file)
  }

  const addUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)
    const t = title.trim()
    if (!t) {
      setFormError('Poné un título.')
      return
    }
    const row: HubUpdate = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      title: t.slice(0, 200),
      description: description.trim().slice(0, 4000),
      imageDataUrl,
      createdAt: new Date().toISOString(),
    }
    const next = [row, ...items]
    try {
      localStorage.setItem(HUB_UPDATES_STORAGE_KEY, JSON.stringify(next))
    } catch {
      setFormError('No se pudo guardar (memoria del navegador llena o modo privado). Borrá updates viejas o usá imágenes más chicas.')
      return
    }
    setItems(next)
    setTitle('')
    setDescription('')
    setImageDataUrl(null)
    setImageName(null)
    setSavedFlash(true)
    window.setTimeout(() => setSavedFlash(false), 2000)
  }

  return (
    <section className="home-updates-panel" aria-labelledby="home-updates-heading">
      <h2 id="home-updates-heading" className="home-updates-title">
        UPDATES
      </h2>

      <div className="home-updates-howto">
        <p className="home-updates-howto-lead">
          Cómo agregar una update (mientras estés con sesión iniciada):
        </p>
        <ol className="home-updates-howto-list">
          <li>Escribí un título y una descripción.</li>
          <li>Opcional: tocá &quot;Elegir imagen&quot; y seleccioná un archivo (idealmente liviano).</li>
          <li>Tocá &quot;Publicar update&quot;. Se guarda en este navegador y aparece arriba en la lista.</li>
        </ol>
        <p className="home-updates-howto-note">
          Hoy los datos viven en <strong>localStorage</strong> de tu equipo: no se sincronizan entre
          dispositivos ni usuarios. Para un sitio público conviene más adelante guardar titulo, texto e
          imagen en base de datos (por ejemplo Supabase Storage + tabla de posts) y subir la imagen al
          servidor.
        </p>
      </div>

      {canCompose ? (
        <form className="home-updates-form" onSubmit={addUpdate}>
          <label className="home-updates-label" htmlFor="home-update-title">
            Título
          </label>
          <input
            id="home-update-title"
            className="home-updates-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={200}
            autoComplete="off"
          />
          <label className="home-updates-label" htmlFor="home-update-desc">
            Descripción
          </label>
          <textarea
            id="home-update-desc"
            className="home-updates-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            maxLength={4000}
          />
          <label className="home-updates-label" htmlFor="home-update-img">
            Imagen (opcional)
          </label>
          <div className="home-updates-file-row">
            <input
              id="home-update-img"
              type="file"
              accept="image/*"
              className="home-updates-file"
              onChange={(e) => onPickImage(e.target.files?.[0] ?? null)}
            />
            {imageName ? (
              <span className="home-updates-file-name" title={imageName}>
                {imageName}
              </span>
            ) : null}
          </div>
          {imageDataUrl ? (
            <div className="home-updates-thumb-wrap">
              <img src={imageDataUrl} alt="" className="home-updates-thumb" />
              <button
                type="button"
                className="home-updates-clear-img"
                onClick={() => {
                  setImageDataUrl(null)
                  setImageName(null)
                }}
              >
                Quitar imagen
              </button>
            </div>
          ) : null}
          {formError ? (
            <p className="home-updates-error" role="alert">
              {formError}
            </p>
          ) : null}
          <button type="submit" className="home-btn home-btn-accent home-btn-hairline">
            Publicar update
          </button>
          {savedFlash ? <p className="home-updates-saved">Guardado.</p> : null}
        </form>
      ) : (
        <p className="home-updates-login-hint">Iniciá sesión para poder publicar updates desde acá.</p>
      )}

      <ul className="home-updates-list">
        {items.length === 0 ? (
          <li className="home-updates-empty">Todavía no hay updates guardadas en este navegador.</li>
        ) : (
          items.map((u) => (
            <li key={u.id} className="home-updates-card">
              {u.imageDataUrl ? (
                <img src={u.imageDataUrl} alt="" className="home-updates-card-img" />
              ) : null}
              <div className="home-updates-card-body">
                <h3 className="home-updates-card-title">{u.title}</h3>
                {u.description ? <p className="home-updates-card-desc">{u.description}</p> : null}
                <time className="home-updates-card-time" dateTime={u.createdAt}>
                  {new Date(u.createdAt).toLocaleString('es-AR', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                  })}
                </time>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}
