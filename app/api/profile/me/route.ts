import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { isValidUsername } from '@/lib/profile/username'
import { sanitizeBio, sanitizeDisplayName } from '@/lib/profile/sanitize'
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

export const dynamic = 'force-dynamic'

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg)$/i

async function allowedAvatarFiles(): Promise<Set<string>> {
  const dir = join(process.cwd(), 'public', 'img_profile')
  try {
    const names = await readdir(dir)
    return new Set(
      names.filter((n) => !n.startsWith('.') && !n.startsWith('_') && IMAGE_EXT.test(n))
    )
  } catch {
    return new Set()
  }
}

export async function PATCH(request: Request) {
  const supabase = await createClient()
  const { data: userData, error: userErr } = await supabase.auth.getUser()
  if (userErr || !userData.user) {
    return NextResponse.json({ ok: false, reason: 'no_session' }, { status: 401 })
  }
  const userId = userData.user.id

  let body: { bio?: unknown; username?: unknown; avatar_path?: unknown; display_name?: unknown }
  try {
    body = (await request.json()) as typeof body
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad_json' }, { status: 400 })
  }

  const patch: Record<string, string | null> = {}
  const allowedFiles = await allowedAvatarFiles()

  if (typeof body.bio === 'string') {
    patch.bio = sanitizeBio(body.bio)
  }

  if (typeof body.username === 'string') {
    const u = body.username.trim().toLowerCase()
    if (!isValidUsername(u)) {
      return NextResponse.json(
        { ok: false, reason: 'bad_username', hint: '3–24 caracteres: letras minúsculas, números y _' },
        { status: 400 }
      )
    }
    patch.username = u
  }

  if (typeof body.display_name === 'string') {
    const dName = sanitizeDisplayName(body.display_name)
    if (!dName) {
      return NextResponse.json(
        { ok: false, reason: 'bad_display_name', hint: 'ponete un nombre como la gente' },
        { status: 400 }
      )
    }
    patch.display_name = dName
  }

  if (body.avatar_path === null) {
    patch.avatar_path = null
  } else if (typeof body.avatar_path === 'string') {
    const fn = body.avatar_path.replace(/\\/g, '/').split('/').pop() ?? ''
    if (!allowedFiles.has(fn)) {
      return NextResponse.json({ ok: false, reason: 'bad_avatar' }, { status: 400 })
    }
    patch.avatar_path = fn
  }

  if (Object.keys(patch).length === 0) {
    return NextResponse.json({ ok: false, reason: 'empty' }, { status: 400 })
  }

  const { error } = await supabase
    .from('profiles')
    .update({ ...patch, updated_at: new Date().toISOString() })
    .eq('id', userId)

  if (error) {
    const dup = error.message.toLowerCase().includes('duplicate')
    return NextResponse.json(
      { ok: false, reason: dup ? 'username_taken' : 'db', detail: error.message },
      { status: dup ? 409 : 500 }
    )
  }

  return NextResponse.json({ ok: true })
}
