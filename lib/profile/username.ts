const USERNAME_RE = /^[a-z0-9_]{3,24}$/

export function isValidUsername(s: string): boolean {
  return USERNAME_RE.test(s)
}

export function slugFromEmail(email: string | undefined, userId: string): string {
  const local = (email?.split('@')[0] ?? 'jugador').toLowerCase()
  const base = local.replace(/[^a-z0-9_]/g, '').replace(/_+/g, '_').replace(/^_|_$/g, '')
  const short = base.length >= 3 ? base.slice(0, 20) : `jug_${userId.replace(/-/g, '').slice(0, 8)}`
  return short.slice(0, 24)
}

export async function pickUniqueUsername(
  tryInsert: (candidate: string) => Promise<{ ok: true } | { ok: false; duplicate: boolean }>,
  email: string | undefined,
  userId: string
): Promise<string> {
  const base = slugFromEmail(email, userId)
  for (let i = 0; i < 40; i++) {
    const candidate = i === 0 ? base : `${base}_${i + 1}`.slice(0, 24)
    if (candidate.length < 3) continue
    const r = await tryInsert(candidate)
    if (r.ok) return candidate
    if (!r.duplicate) throw new Error('insert_failed')
  }
  const fallback = `u_${userId.replace(/-/g, '').slice(0, 20)}`.slice(0, 24)
  const last = await tryInsert(fallback)
  if (last.ok) return fallback
  throw new Error('username_exhausted')
}
