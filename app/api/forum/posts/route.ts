import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { validateLinks } from '@/lib/forum/validate-links'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const sort = searchParams.get('sort') || 'recommended' // 'recommended', 'recent'
  const authorId = searchParams.get('authorId')
  
  const supabase = await createClient()
  
  let query = supabase
    .from('forum_posts')
    .select(`
      id, body, upvotes, reply_count, created_at,
      author:author_id ( username, display_name, discriminator, avatar_path )
    `)
  
  if (authorId) {
    query = query.eq('author_id', authorId)
    query = query.order('created_at', { ascending: false })
  } else if (sort === 'recent') {
    query = query.order('created_at', { ascending: false })
  } else {
    // Recommended: order by upvotes first, then created_at.
    // In a real app this would be a more complex algorithm.
    query = query.order('upvotes', { ascending: false }).order('created_at', { ascending: false })
  }
  
  query = query.limit(50)

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, posts: data })
}

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { body } = await req.json()

  if (!body || typeof body !== 'string' || body.trim().length === 0 || body.length > 2000) {
    return NextResponse.json({ ok: false, error: 'Invalid body' }, { status: 400 })
  }

  if (!validateLinks(body)) {
    return NextResponse.json({ ok: false, error: 'Solo se permiten links de Twitter/X, YouTube, Instagram, Kick y citas del foro.' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('forum_posts')
    .insert({
      author_id: user.id,
      body: body.trim(),
    })
    .select(`
      id, body, upvotes, reply_count, created_at,
      author:author_id ( username, display_name, discriminator, avatar_path )
    `)
    .single()

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, post: data })
}
