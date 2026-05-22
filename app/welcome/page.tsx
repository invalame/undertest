import { createClient } from '@/lib/supabase/server'
import { WelcomeClient } from './welcome-client'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function WelcomePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('onboarded, username, avatar_path')
    .eq('id', user.id)
    .single()

  if (profile?.onboarded) {
    redirect('/')
  }

  const oauthAvatar = user.user_metadata?.avatar_url || user.user_metadata?.picture || null

  return <WelcomeClient oauthPicture={oauthAvatar} />
}
