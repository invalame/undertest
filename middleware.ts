import { type NextRequest } from 'next/server'
import { updateSession } from './lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  return updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, underless.ico (favicon files)
     * - public assets (img, sounds, covers, fonts)
     * - any file with an extension (svg, png, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|underless.ico|img/|sounds/|covers/|fonts/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
