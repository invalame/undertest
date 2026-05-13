import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request,
  })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Si faltan variables, no hacemos nada para evitar el crash
  if (!supabaseUrl || !supabaseAnonKey) {
    return response
  }

  try {
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

    // Refrescamos la sesión
    const { data: { user } } = await supabase.auth.getUser()

    // Protección de rutas: si no hay usuario y va a /underless o /uoh, a la home
    const isProtected = request.nextUrl.pathname.startsWith('/underless') || 
                        request.nextUrl.pathname.startsWith('/uoh')

    if (isProtected && !user) {
      return NextResponse.redirect(new URL('/', request.url))
    }

  } catch (e) {
    console.error('Middleware Error:', e)
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Matcher simplificado al máximo: 
     * Solo se ejecuta en rutas que NO tengan un punto (evita imágenes, css, js)
     * y que NO empiecen con _next o api.
     */
    '/((?!api|_next|.*\\..*$).*)',
  ],
}
