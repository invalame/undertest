'use client'

import React from 'react'

export function ProfileHeaderClient({ username }: { username: string }) {
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
      </div>

      <div className="underless-global-top-actions" style={{ position: 'fixed', top: '20px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000, pointerEvents: 'none' }}>
          <div style={{ pointerEvents: 'auto' }}>
              <button className="underless-main-sidebar-toggle" onClick={toggleSidebar} aria-label="Menu" style={{ background: '#242829', border: '1px solid #3a3d3f', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px', padding: '10px', borderRadius: '8px', width: '44px', height: '44px', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ display: 'block', width: '20px', height: '2px', background: 'white' }}></span>
                  <span style={{ display: 'block', width: '20px', height: '2px', background: 'white' }}></span>
                  <span style={{ display: 'block', width: '20px', height: '2px', background: 'white' }}></span>
              </button>
          </div>
          <div className="underless-profile-corner-wrap" data-ul-profile-corner-wrap hidden style={{display:'none', pointerEvents: 'auto'}}>
              <a data-ul-profile-corner-link href="/" className="underless-profile-corner-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', background: 'rgba(0,0,0,0.6)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img data-ul-profile-corner-img src="" alt="" width="28" height="28" className="underless-profile-corner-img" style={{ borderRadius: '50%' }} />
                  <span data-ul-profile-corner-name className="underless-profile-corner-name" style={{ color: 'white', fontSize: '0.9em', fontWeight: 500 }}></span>
              </a>
          </div>
      </div>

      <header className="profile-top-header">
          <a href="/" className="logo">Profiles</a>
      </header>

      <style jsx global>{`
        * { box-shadow: none !important; text-shadow: none !important; }
        
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
        }
      `}</style>
    </>
  )
}
