import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getSupabaseBrowserEnv } from '@/lib/supabase/env'
import { safeNextPath, getSiteUrl } from '@/lib/site-url'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  
  // Usamos getSiteUrl() para forzar que el origen sea SIEMPRE el oficial
  const officialOrigin = getSiteUrl()
  const next = safeNextPath(url.searchParams.get('next'), officialOrigin)

  if (!code) {
    return NextResponse.redirect(new URL('/?error=missing_code', officialOrigin))
  }

  const cookieStore = await cookies()
  // Aquí es donde forzamos la redirección al dominio principal
  const response = NextResponse.redirect(new URL(next, officialOrigin))

  const { url: supabaseUrl, anonKey } = getSupabaseBrowserEnv()

  const supabase = createServerClient(supabaseUrl, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet, cacheHeaders) {
        cookiesToSet.forEach(({ name, value, options }) => {
          // Importante: Al setear la cookie en el dominio oficial, 
          // nos aseguramos de que la sesión sea válida allí.
          response.cookies.set(name, value, { ...options, domain: undefined })
        })
        if (cacheHeaders) {
          Object.entries(cacheHeaders).forEach(([key, value]) => {
            response.headers.set(key, String(value))
          })
        }
      },
    },
  })

  const { data: sessionData, error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    return NextResponse.redirect(
      new URL(`/?error=${encodeURIComponent(error.message)}`, officialOrigin)
    )
  }

  // Auto-create profile if missing
  const user = sessionData.user
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', user.id)
      .maybeSingle()

    if (!profile) {
      const { createDefaultProfile } = await import('@/lib/profile/username')
      try {
        await createDefaultProfile(async (u, dName, disc) => {
          const { error: insertErr } = await supabase.from('profiles').insert({
            id: user.id,
            username: u,
            display_name: dName,
            discriminator: disc
          })
          if (!insertErr) return { ok: true as const }
          const msg = insertErr.message.toLowerCase()
          if (msg.includes('duplicate') || msg.includes('unique')) {
            return { ok: false as const, duplicate: true }
          }
          return { ok: false as const, duplicate: false }
        }, user.id)
      } catch (err) {
        console.error('Failed to auto-create profile:', err)
      }
    }
  }

  return response
}
