import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Eliminamos outputFileTracingIncludes ya que los archivos están en public/ 
  // y Next.js los sirve automáticamente sin necesidad de esta configuración.
}

export default nextConfig
