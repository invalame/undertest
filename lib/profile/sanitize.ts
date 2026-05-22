/** Límite de caracteres en biografía. */
export const MAX_BIO_CHARS = 320

const DISPLAY_NAME_RE = /^[a-zA-Z0-9 ]+$/
const URL_RE = /(https?:\/\/[^\s]+)/gi
const ALLOWED_LINK_HOSTS = [
  'youtube.com',
  'youtu.be',
  'twitter.com',
  'x.com',
  'instagram.com',
]

/** Caracteres de control y marcas bidireccionales (XSS / spoofing). */
const UNSAFE_CHAR_RE =
  /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF<>]/g

export function countWords(text: string): number {
  const t = text.trim()
  if (!t) return 0
  return t.split(/\s+/).length
}

export function truncateToWordLimit(text: string, maxWords: number): string {
  const trimmed = text.trim()
  if (!trimmed) return ''
  const words = trimmed.split(/\s+/)
  if (words.length <= maxWords) return text
  return words.slice(0, maxWords).join(' ')
}

export function stripUnsafeText(input: string): string {
  return input.replace(UNSAFE_CHAR_RE, '')
}

export function filterBioLinks(text: string): string {
  return text.replace(URL_RE, (url) => {
    const lower = url.toLowerCase()
    if (ALLOWED_LINK_HOSTS.some((h) => lower.includes(h))) return url
    return '[link removido]'
  })
}

export function sanitizeBio(raw: string): string {
  const stripped = stripUnsafeText(raw)
  const linked = filterBioLinks(stripped)
  return linked.slice(0, MAX_BIO_CHARS)
}

export function validateDisplayName(name: string): string | null {
  const trimmed = name.trim()
  if (!DISPLAY_NAME_RE.test(trimmed)) {
    return 'ponete un nombre como la gente'
  }
  if (trimmed.length < 2 || trimmed.length > 20) {
    return 'ponete un nombre como la gente'
  }
  if (/(.)\1{4}/.test(trimmed)) {
    return 'ponete un nombre como la gente jajaj'
  }
  if (/^[0-9]+$/.test(trimmed)) {
    return 'ponete un nombre como la gente jajaj'
  }
  return null
}

export function sanitizeDisplayName(raw: string): string | null {
  const trimmed = stripUnsafeText(raw.trim())
  const err = validateDisplayName(trimmed)
  if (err) return null
  return trimmed
}
