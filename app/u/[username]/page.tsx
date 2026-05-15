import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { ProfileClient, type ProfilePublic } from './profile-client'
import './profile.css'
import Script from 'next/script'

import { Metadata } from 'next'

type Props = { params: Promise<{ username: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username: raw } = await params
  const username = decodeURIComponent(raw).toLowerCase()
  const supabase = await createClient()
  const { data: profile } = await supabase
    .from('profiles')
    .select('display_name, discriminator, avatar_path')
    .eq('username', username)
    .maybeSingle()

  const title = profile 
    ? `${profile.display_name} #${profile.discriminator} - UnderLess` 
    : 'Perfil - UnderLess'
  
  const avatar = profile?.avatar_path 
    ? `https://underless.vercel.app/img_profile/${profile.avatar_path}` 
    : 'https://underless.vercel.app/img_profile/default-profile.png'

  return {
    title,
    description: `Mirá el perfil de ${profile?.display_name || username} en UnderLess.`,
    openGraph: {
      title,
      images: [avatar],
    },
    twitter: {
      card: 'summary',
      title,
      images: [avatar],
    }
  }
}

function oauthPicture(meta: Record<string, unknown> | null | undefined): string | null {
  if (!meta) return null
  const a = meta.avatar_url ?? meta.picture
  return typeof a === 'string' && a.startsWith('http') ? a : null
}

export default async function UserProfilePage({ params }: Props) {
  const { username: raw } = await params
  const username = decodeURIComponent(raw).toLowerCase()
  if (!/^[a-z0-9_]{3,24}$/.test(username)) {
    notFound()
  }

  const supabase = await createClient()
  const { data: row, error } = await supabase
    .from('profiles')
    .select('id, username, bio, avatar_path, underium, max_streak, display_name, discriminator')
    .eq('username', username)
    .maybeSingle()

  if (error || !row) {
    notFound()
  }

  const { data: { user: sessionUser } = { user: null } } = await supabase.auth.getUser()
  const isOwner = !!sessionUser && sessionUser.id === row.id

  const profile: ProfilePublic = {
    id: row.id as string,
    username: row.username as string,
    bio: (row.bio as string) ?? '',
    avatar_path: (row.avatar_path as string | null) ?? null,
    underium: Number(row.underium ?? 0),
    max_streak: Number(row.max_streak ?? 0),
    display_name: (row.display_name as string) ?? 'Userless',
    discriminator: (row.discriminator as string) ?? '0000',
  }

  const oauth = isOwner ? oauthPicture(sessionUser?.user_metadata as Record<string, unknown>) : null

  return (
    <div className="profile-root">
      <div className="underless-sidebar-trigger-line" onClick={() => {
        if (typeof window !== 'undefined' && (window as any).UnderlessSidebar) {
          (window as any).UnderlessSidebar.toggleSidebar();
        }
      }} title="Abrir Sidebar"></div>

      <div id="underless-sidebar-root">
          <div className="underless-overlay" aria-hidden="true"></div>
          <nav className="underless-sidebar" aria-label="Menu de modos de juego">
              <button type="button" className="underless-sidebar-close-btn" onClick={() => {
                if (typeof window !== 'undefined' && (window as any).UnderlessSidebar) {
                  (window as any).UnderlessSidebar.closeSidebar();
                }
              }} aria-label="Cerrar">×</button>
              <a href="/" className="underless-sidebar-home-link">
                  <span className="underless-sidebar-home-text">Home</span>
              </a>

              <div className="underless-social-section">
                  <p className="underless-sidebar-label">SOCIAL</p>
                  <a href={`/u/${profile.username}`} className="underless-mode-option active">MI PERFIL</a>
                  <button type="button" className="underless-mode-option">TIENDA</button>
                  <button type="button" className="underless-mode-option">ULESS</button>
              </div>

              <p className="underless-sidebar-label">MODOS DE JUEGO</p>
              <a href="/underless" className="underless-mode-option">
                  <img src="/img/home_underless.png" alt="" className="mode-icon" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                  <span>UNDERLESS</span>
              </a>
              <a href="/uoh" className="underless-mode-option">
                  <img src="/img/home_underhigher.png" alt="" className="mode-icon" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                  <span>UNDER/HIGHER</span>
              </a>
          </nav>
      </div>

      <header className="profile-top-header">
          <div className="header-left-actions">
              <button className="underless-main-sidebar-toggle" onClick={() => {
                if (typeof window !== 'undefined' && (window as any).UnderlessSidebar) {
                  (window as any).UnderlessSidebar.toggleSidebar();
                }
              }} aria-label="Menu">
                  <span></span>
                  <span></span>
                  <span></span>
              </button>
              <div className="underless-profile-corner-wrap" data-ul-profile-corner-wrap hidden style={{display:'none'}}>
                  <a data-ul-profile-corner-link href="/" className="underless-profile-corner-link">
                      <img data-ul-profile-corner-img src="" alt="" width="32" height="32" className="underless-profile-corner-img" />
                      <span data-ul-profile-corner-name className="underless-profile-corner-name"></span>
                  </a>
              </div>
          </div>
          
          <div className="header-center-branding">
              <a href="/" className="logo">UnderLess</a>
              <img id="emote-7tv" src="/img/peepo-band.gif" alt="peepo band" style={{ height: '30px', marginLeft: '10px' }} />
          </div>
          
          <div className="header-right-spacer"></div>
      </header>

      <ProfileClient
        profile={profile}
        isOwner={isOwner}
        oauthPicture={oauth}
        initialAvatars={[]}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        * { box-shadow: none !important; text-shadow: none !important; }
        
        .profile-root {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            align-items: center;
        }

        .profile-top-header {
            width: 100%;
            max-width: 1200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;
            position: relative;
        }

        .header-left-actions {
            display: flex;
            align-items: center;
            gap: 15px;
            flex: 1;
        }

        .header-center-branding {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 2;
        }

        .header-center-branding .logo {
            font-family: 'UnderLessFont', sans-serif;
            font-size: 2.5rem;
            text-decoration: none;
            color: white;
        }

        .header-right-spacer {
            flex: 1;
        }

        .underless-main-sidebar-toggle {
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .underless-main-sidebar-toggle span {
            display: block;
            width: 24px;
            height: 2px;
            background: white;
        }

        @media (max-width: 768px) {
            .header-center-branding .logo {
                font-size: 1.8rem;
            }
            #emote-7tv {
                height: 20px !important;
            }
        }
      `}} />

      <link rel="stylesheet" href="/underless-sidebar.css" />
      <Script src="/underless-sidebar.js" strategy="afterInteractive" />
    </div>
  )
}
