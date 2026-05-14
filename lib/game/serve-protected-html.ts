import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const noStore = {
  'Content-Type': 'text/html; charset=utf-8',
  'Cache-Control':
    'private, no-store, no-cache, must-revalidate, max-age=0, Pragma: no-cache',
}

export async function serveProtectedGameHtml(filename: string, request: Request) {
  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()

  if (!data?.claims?.sub) {
    const url = new URL('/', request.url)
    url.searchParams.set('next', new URL(request.url).pathname)
    return NextResponse.redirect(url)
  }

  const userId = data.claims.sub as string

  const path = join(process.cwd(), 'public', filename)
  const rawHtml = await readFile(path, 'utf8')

  // Inject the user ID as a global JS variable so game.js can namespace localStorage keys.
  // This ensures each Google account has its own isolated game state.
  const injectedScript = `<script>window.__UL_USER_ID = ${JSON.stringify(userId)};</script>`
  const html = rawHtml.replace('</head>', `${injectedScript}\n</head>`)

  return new NextResponse(html, { status: 200, headers: noStore })
}
