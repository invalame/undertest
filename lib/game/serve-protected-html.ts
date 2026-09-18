import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { NextResponse } from 'next/server'

const noStore = {
  'Content-Type': 'text/html; charset=utf-8',
  'Cache-Control':
    'private, no-store, no-cache, must-revalidate, max-age=0, Pragma: no-cache',
}

export async function serveProtectedGameHtml(filename: string, request: Request) {
  const path = join(process.cwd(), 'public', filename)
  const rawHtml = await readFile(path, 'utf8')

  // Inject the user ID as a global JS variable so game.js can namespace localStorage keys.
  // This ensures local storage works even without accounts.
  const injectedScript = `<script>window.__UL_USER_ID = 'anon';</script>`
  const html = rawHtml.replace('</head>', `${injectedScript}\n</head>`)

  return new NextResponse(html, { status: 200, headers: noStore })
}
