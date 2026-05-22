import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { WelcomeClient } from './welcome-client'

export const dynamic = 'force-dynamic'

export default async function WelcomePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('onboarded, display_name, avatar_path')
    .eq('id', user.id)
    .maybeSingle()

  if (profile?.onboarded) {
    redirect('/')
  }

  const userMeta = user.user_metadata
  const oauthAvatar = userMeta?.avatar_url || userMeta?.picture
  const defaultAvatar = typeof oauthAvatar === 'string' && oauthAvatar.startsWith('http') ? oauthAvatar : null

  return <WelcomeClient defaultAvatar={defaultAvatar} initialName={profile?.display_name || ''} />
}
