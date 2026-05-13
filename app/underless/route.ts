import { serveProtectedGameHtml } from '@/lib/game/serve-protected-html'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  return serveProtectedGameHtml('underless.html', request)
}
