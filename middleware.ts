import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  const productionDomain = 'underless.vercel.app'

  // Forzar dominio oficial en producción
  if (host && host !== productionDomain && !host.includes('localhost') && !host.includes('127.0.0.1')) {
    return NextResponse.redirect(`https://${productionDomain}${request.nextUrl.pathname}${request.nextUrl.search}`)
  }

  return NextResponse.next({ request })
}

export const config = {
  matcher: [
    '/((?!api|_next|favicon.ico|underless.ico|img/|sounds/|covers/|fonts/|.*\\..*$).*)',
  ],
}
