import { serveProtectedGameHtml } from '@/lib/game/serve-protected-html'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  return serveProtectedGameHtml('uoh.html', request)
}
