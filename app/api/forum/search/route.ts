import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get('q')
  const type = searchParams.get('type') || 'posts' // 'posts' or 'profiles'
  
  if (!query || query.trim().length === 0) {
      return NextResponse.json({ ok: true, results: [] })
  }

  const supabase = await createClient()
  
  if (type === 'posts') {
      const { data, error } = await supabase
        .from('forum_posts')
        .select(`
            id, body, upvotes, reply_count, created_at,
            author:author_id ( username, display_name, discriminator, avatar_path )
        `)
        .ilike('body', `%${query}%`)
        .order('created_at', { ascending: false })
        .limit(20)
        
      if (error) {
        return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
      }
      return NextResponse.json({ ok: true, results: data })
  } else {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, username, display_name, discriminator, avatar_path')
        .ilike('username', `%${query}%`)
        .limit(20)
        
      if (error) {
        return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
      }
      return NextResponse.json({ ok: true, results: data })
  }
}
