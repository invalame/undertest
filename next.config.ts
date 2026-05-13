import type { NextConfig } from 'next'
import path from 'node:path'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracingIncludes: {
    '/underless': [path.join(process.cwd(), 'underless.html')],
    '/uoh': [path.join(process.cwd(), 'uoh.html')],
  },
}

export default nextConfig
