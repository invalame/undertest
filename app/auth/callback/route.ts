import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getSupabaseBrowserEnv } from '@/lib/supabase/env'
import { safeNextPath } from '@/lib/site-url'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const next = safeNextPath(url.searchParams.get('next'), url.origin)

  if (!code) {
    return NextResponse.redirect(new URL('/?error=missing_code', request.url))
  }

  const cookieStore = await cookies()
  const response = NextResponse.redirect(new URL(next, request.url))

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

  const { error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    return NextResponse.redirect(
      new URL(`/?error=${encodeURIComponent(error.message)}`, request.url)
    )
  }

  return response
}
