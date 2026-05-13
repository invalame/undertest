/**
 * Clave pública de Supabase: preferimos el nombre que pediste (anon).
 * Si migrás a la nueva API, podés usar NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.
 */
export function getSupabaseBrowserEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!url || !anonKey) {
    throw new Error(
      'Faltan NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY (o NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) en el entorno.'
    )
  }

  return { url, anonKey }
}
