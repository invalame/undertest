import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({ ok: true, state: {} })
}

export async function POST(request: Request) {
  return NextResponse.json({ ok: true })
}
