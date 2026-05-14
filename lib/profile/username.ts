const USERNAME_RE = /^[a-z0-9_]{3,24}$/

export function isValidUsername(s: string): boolean {
  return USERNAME_RE.test(s)
}

export function generateDiscriminator(): string {
  return Math.floor(Math.random() * 10000).toString().padStart(4, '0')
}

export async function createDefaultProfile(
  tryInsert: (username: string, display_name: string, discriminator: string) => Promise<{ ok: true } | { ok: false; duplicate: boolean }>,
  userId: string
): Promise<{ username: string, display_name: string, discriminator: string }> {
  for (let i = 0; i < 40; i++) {
    const discriminator = generateDiscriminator()
    const username = `userless_${discriminator}`
    const r = await tryInsert(username, 'Userless', discriminator)
    if (r.ok) return { username, display_name: 'Userless', discriminator }
    if (!r.duplicate) throw new Error('insert_failed')
  }
  
  // Fallback
  const discriminator = generateDiscriminator()
  const fallback = `u_${userId.replace(/-/g, '').slice(0, 10)}_${discriminator}`
  const last = await tryInsert(fallback, 'Userless', discriminator)
  if (last.ok) return { username: fallback, display_name: 'Userless', discriminator }
  throw new Error('username_exhausted')
}
