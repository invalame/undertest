'use client'

import React from 'react'

export function ProfileHeaderClient({ username, avatarUrl }: { username: string; avatarUrl?: string }) {
  const toggleSidebar = () => {
    if (typeof window !== 'undefined' && (window as any).UnderlessSidebar) {
      (window as any).UnderlessSidebar.toggleSidebar();
    }
  }

  const closeSidebar = () => {
    if (typeof window !== 'undefined' && (window as any).UnderlessSidebar) {
      (window as any).UnderlessSidebar.closeSidebar();
    }
  }

  return (
    <>
      <div className="underless-sidebar-trigger-line" onClick={toggleSidebar} title="Abrir Sidebar"></div>

      <div id="underless-sidebar-root">
          <div className="underless-overlay" aria-hidden="true"></div>
          <nav className="underless-sidebar" aria-label="Menu de modos de juego">
              <button type="button" className="underless-sidebar-close-btn" onClick={closeSidebar} aria-label="Cerrar">×</button>
              <a href="/" className="underless-sidebar-home-link">
                  <span className="underless-sidebar-home-text">Home</span>
              </a>

              <div className="underless-social-section">
                  <p className="underless-sidebar-label">SOCIAL</p>
                  <a href={`/u/${username}`} className="underless-mode-option active">MI PERFIL</a>
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
          
          {/* Logout button bottom left sidebar */}
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 7001 }}>
              <form action="/auth/signout" method="post">
                  <button type="submit" className="underless-mode-option" style={{ background: 'transparent', border: 'none', color: '#ff4444', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {avatarUrl && <img src={avatarUrl} alt="" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} referrerPolicy="no-referrer" />}
                      <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        Cerrar Sesión
                      </span>
                  </button>
              </form>
          </div>
      </div>

      <div className="underless-global-top-actions" style={{ position: 'fixed', top: '20px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 6501, pointerEvents: 'none' }}>
          <div style={{ pointerEvents: 'auto' }} className="mobile-header-left">
              <button className="underless-main-sidebar-toggle desktop-only" onClick={toggleSidebar} aria-label="Menu" style={{ background: '#242829', border: '1px solid #3a3d3f', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px', padding: '10px', borderRadius: '8px', width: '44px', height: '44px', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ display: 'block', width: '20px', height: '2px', background: 'white' }}></span>
                  <span style={{ display: 'block', width: '20px', height: '2px', background: 'white' }}></span>
                  <span style={{ display: 'block', width: '20px', height: '2px', background: 'white' }}></span>
              </button>
              <a href="/underless" className="mobile-only-back" aria-label="Ir a Underless" style={{ background: '#242829', border: '1px solid #3a3d3f', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px', padding: '10px', borderRadius: '8px', width: '44px', height: '44px', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </a>
          </div>
          {/* Logout corner for mobile if sidebar is not open, visible next to profile wrap */}
          <div className="mobile-logout-wrap" style={{ pointerEvents: 'auto', display: 'flex', gap: '10px' }}>
            <form action="/auth/signout" method="post">
                <button type="submit" aria-label="Cerrar sesión" style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '20px', padding: '6px 12px', color: '#ff4444', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                </button>
            </form>
          </div>
      </div>



      <style jsx global>{`
        * { box-shadow: none !important; text-shadow: none !important; }
        a { text-decoration: none !important; }
        
        .profile-root {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            align-items: center;
        }

        .profile-top-header {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 20px 20px;
            box-sizing: border-box;
            position: relative;
        }

        .profile-top-header .logo {
            font-family: 'UnderLessFont', sans-serif;
            font-size: clamp(2rem, 5vw, 3rem);
            text-decoration: none;
            color: white;
        }

        @media (max-width: 768px) {
            .profile-top-header .logo {
                font-size: 1.8rem;
            }
            #emote-7tv {
                height: 20px !important;
            }
            .desktop-only { display: none !important; }
        }
        @media (min-width: 769px) {
            .mobile-only-back { display: none !important; }
        }
        #underless-sidebar-root.underless-open ~ .underless-global-top-actions .mobile-logout-wrap {
            display: none !important;
        }
      `}</style>
    </>
  )
}
