import { readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { NextResponse } from 'next/server'

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg)$/i

export const dynamic = 'force-dynamic'

export async function GET() {
  const dir = join(process.cwd(), 'public', 'img_profile')
  try {
    const names = await readdir(dir)
    const files = names
      .filter((n) => !n.startsWith('.') && !n.startsWith('_') && IMAGE_EXT.test(n))
      .sort((a, b) => a.localeCompare(b))
    return NextResponse.json({ ok: true, files })
  } catch {
    return NextResponse.json({ ok: true, files: [] as string[] })
  }
}
