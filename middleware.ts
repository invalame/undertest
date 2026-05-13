import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from './lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  try {
    // Esta función maneja el refresco de sesión y la protección de rutas
    return await updateSession(request)
  } catch (e) {
    // Si algo falla, dejamos pasar la petición para no romper el sitio (error 500)
    console.error('Middleware Error:', e)
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, underless.ico
     * - assets (img, sounds, covers, fonts)
     * - any file with an extension (.*)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|underless.ico|img/|sounds/|covers/|fonts/|.*\\..*$).*)',
  ],
}
