import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const PROTECTED_PREFIXES = ['/underless', '/uoh'] as const

function isProtectedPath(pathname: string) {
  return PROTECTED_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  )
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!url || !anonKey) {
    return supabaseResponse
  }

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet, cacheHeaders) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        )
        supabaseResponse = NextResponse.next({
          request,
        })
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        )
        if (cacheHeaders) {
          Object.entries(cacheHeaders).forEach(([key, value]) => {
            supabaseResponse.headers.set(key, String(value))
          })
        }
      },
    },
  })

  const { data } = await supabase.auth.getClaims()

  if (isProtectedPath(request.nextUrl.pathname) && !data?.claims?.sub) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/'
    redirectUrl.searchParams.set(
      'next',
      `${request.nextUrl.pathname}${request.nextUrl.search}`
    )
    return NextResponse.redirect(redirectUrl)
  }

  return supabaseResponse
}
