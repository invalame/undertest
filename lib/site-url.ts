/**
 * URL canónica del sitio (OAuth y emails). En Vercel suele inferirse; en local usá .env.local.
 */
export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) {
    return explicit.replace(/\/$/, '')
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, '')}`
  }
  return 'http://localhost:3000'
}

/**
 * Evita open-redirect: solo rutas relativas del mismo origen.
 */
export function safeNextPath(next: string | null, origin: string) {
  if (!next || !next.startsWith('/') || next.startsWith('//')) {
    return '/'
  }
  try {
    const resolved = new URL(next, origin)
    const base = new URL(origin)
    if (resolved.origin !== base.origin) {
      return '/'
    }
    return `${resolved.pathname}${resolved.search}`
  } catch {
    return '/'
  }
}
