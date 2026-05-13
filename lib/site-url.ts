export function getSiteUrl() {
  // 1. Prioridad absoluta: El dominio oficial que configuraste
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) {
    return explicit.replace(/\/$/, '')
  }

  // 2. Fallback de Vercel (si no hay variable)
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }

  // 3. Fallback local
  return 'http://localhost:3000'
}

export function safeNextPath(path: string | null, origin: string): string {
  if (!path) return '/'
  try {
    const url = new URL(path, origin)
    // Solo permitimos redirecciones internas
    if (url.origin === origin) {
      return url.pathname + url.search
    }
    return '/'
  } catch {
    return '/'
  }
}
