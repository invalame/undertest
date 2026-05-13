import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UnderLess',
  description: 'Adiviná artistas y canciones del under argentino.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
