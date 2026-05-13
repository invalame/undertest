import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  return updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Excluir estáticos y archivos de medios para bajar CPU en Edge (tráfico alto).
     * El matcher sigue cubriendo /, /login, /underless, /auth/*, etc.
     */
    /*
     * Excluir todo `/_next/*` (chunks, CSS, HMR, etc.) para evitar 404 / respuestas rotas
     * si el matcher interceptaba rutas internas de Next.
     */
    '/((?!_next/).*)',
  ],
}
