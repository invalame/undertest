import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  const protocol = request.headers.get('x-forwarded-proto') || 'https'
  const productionDomain = 'underless.vercel.app'

  // 1. FORZAR DOMINIO OFICIAL: Si el usuario entra por un link "raro" de Vercel,
  // lo mandamos inmediatamente al link oficial para evitar líos de cookies y audio.
  if (host && host !== productionDomain && !host.includes('localhost') && !host.includes('127.0.0.1')) {
    return NextResponse.redirect(`https://${productionDomain}${request.nextUrl.pathname}${request.nextUrl.search}`)
  }

  let response = NextResponse.next({
    request,
  })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) return response

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        response = NextResponse.next({
          request,
        })
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        )
      },
    },
  })

  // Refrescamos sesión (Esto es vital para que no se cierre sola)
  const { data: { user } } = await supabase.auth.getUser()

  const isProtected = request.nextUrl.pathname.startsWith('/underless') || 
                      request.nextUrl.pathname.startsWith('/uoh')

  if (isProtected && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next|favicon.ico|underless.ico|img/|sounds/|covers/|fonts/|.*\\..*$).*)',
  ],
}
