import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getSupabaseBrowserEnv } from '@/lib/supabase/env'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const cookieStore = await cookies()
  const response = NextResponse.redirect(new URL('/', request.url), {
    status: 302,
  })

  const { url: supabaseUrl, anonKey } = getSupabaseBrowserEnv()

  const supabase = createServerClient(supabaseUrl, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet, cacheHeaders) {
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options)
        })
        if (cacheHeaders) {
          Object.entries(cacheHeaders).forEach(([key, value]) => {
            response.headers.set(key, String(value))
          })
        }
      },
    },
  })

  await supabase.auth.signOut()
  return response
}
