import { createClient } from '@/lib/supabase/server'
import { createDefaultProfile } from './username'

export async function ensureProfile(userId: string) {
  const supabase = await createClient()

  // 1. Intentar obtener el perfil
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle()

  if (profile) return profile

  // 2. Si no existe, crearlo
  console.log(`Auto-creating profile for user ${userId}`)
  
  let newProfile = null
  await createDefaultProfile(async (u, dName, disc) => {
    const { data, error: insertErr } = await supabase
      .from('profiles')
      .insert({
        id: userId,
        username: u,
        display_name: dName,
        discriminator: disc
      })
      .select()
      .single()

    if (!insertErr) {
      newProfile = data
      return { ok: true as const }
    }

    const msg = insertErr.message.toLowerCase()
    if (msg.includes('duplicate') || msg.includes('unique')) {
      return { ok: false as const, duplicate: true }
    }
    return { ok: false as const, duplicate: false }
  }, userId)

  return newProfile
}
