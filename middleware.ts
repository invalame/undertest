import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // EL PORTERO: Revisamos si existe la cookie de sesión de Supabase
  const cookies = request.cookies.getAll()
  const hasSession = cookies.some(c => c.name.startsWith('sb-') && c.name.endsWith('-auth-token'))

  // RUTAS PROTEGIDAS: Solo entran los logueados
  const isProtected = request.nextUrl.pathname.startsWith('/underless') || 
                      request.nextUrl.pathname.startsWith('/uoh')

  if (isProtected && !hasSession) {
    // Si no tiene sesión y quiere entrar a jugar, lo mandamos a la Home
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Protegemos todo el sitio excepto archivos estáticos (con punto), 
     * carpetas internas de Next y la API.
     */
    '/((?!api|_next|favicon.ico|underless.ico|.*\\..*$).*)',
  ],
}
