import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Verificamos si existe alguna cookie de Supabase de forma manual
  // Esto evita importar @supabase/ssr que es lo que está rompiendo el Edge Runtime
  const cookies = request.cookies.getAll()
  const hasSession = cookies.some(c => c.name.startsWith('sb-') && c.name.endsWith('-auth-token'))

  const isProtected = request.nextUrl.pathname.startsWith('/underless') || 
                      request.nextUrl.pathname.startsWith('/uoh')

  if (isProtected && !hasSession) {
    // Si intenta entrar a jugar sin sesión, lo mandamos al inicio
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Matcher ultra-seguro: solo se ejecuta en rutas de navegación,
     * ignorando archivos con extensión (fotos, sonidos, etc) y carpetas de Next.
     */
    '/((?!api|_next|favicon.ico|underless.ico|.*\\..*$).*)',
  ],
}
