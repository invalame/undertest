'use client'

import React, { useEffect } from 'react'

type UnderlessSidebarApi = {
    toggleSidebar: () => void
    closeSidebar: (force?: boolean) => void
    openSidebar: () => void
}

export function ProfileHeaderClient({ username, avatarUrl }: { username: string; avatarUrl?: string }) {
    const getSidebar = (): UnderlessSidebarApi | null => {
        if (typeof window === 'undefined') return null
        return (window as Window & { UnderlessSidebar?: UnderlessSidebarApi }).UnderlessSidebar ?? null
    }

    const toggleSidebar = () => {
        const ul = getSidebar()
        if (ul) {
            ul.toggleSidebar()
            return
        }
        const w = window as Window & { toggleSidebar?: () => void }
        if (typeof w.toggleSidebar === 'function') w.toggleSidebar()
    }

    const closeSidebar = () => {
        const ul = getSidebar()
        if (ul) ul.closeSidebar(true)
    }

    useEffect(() => {
        const boot = () => {
            const w = window as Window & {
                UnderlessSidebar?: UnderlessSidebarApi & { init?: () => void; syncSidebarChrome?: () => void }
            }
            if (w.UnderlessSidebar?.init) w.UnderlessSidebar.init()
            if (w.UnderlessSidebar?.openSidebar) w.UnderlessSidebar.openSidebar()
            else if (w.UnderlessSidebar?.syncSidebarChrome) w.UnderlessSidebar.syncSidebarChrome()
        }
        boot()
        const t = window.setTimeout(boot, 200)
        return () => window.clearTimeout(t)
    }, [])

    return (
        <>
            <div
                className="underless-sidebar-trigger-line"
                onClick={toggleSidebar}
                title="Abrir menú"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleSidebar()}
            />

            <div id="underless-sidebar-root" data-ul-page="profile">
                <div className="underless-overlay" aria-hidden="true" />
                <nav className="underless-sidebar" aria-label="Menú de modos de juego">
                    <button type="button" className="underless-sidebar-close-btn" onClick={closeSidebar} aria-label="Cerrar">
                        ×
                    </button>
                    <a href="/" className="underless-sidebar-home-link">
                        <span className="underless-sidebar-home-text">Home</span>
                    </a>

                    <div className="underless-social-section">
                        <p className="underless-sidebar-label">SOCIAL</p>
                        <a href={`/u/${username}`} className="underless-mode-option active">
                            MI PERFIL
                        </a>
                        <button type="button" className="underless-mode-option">
                            TIENDA
                        </button>
                        <button type="button" className="underless-mode-option">
                            ULESS
                        </button>
                    </div>

                    <p className="underless-sidebar-label">MODOS DE JUEGO</p>
                    <a href="/underless" className="underless-mode-option">
                        <img
                            src="/img/home_underless.png"
                            alt=""
                            className="mode-icon"
                            style={{ width: '20px', height: '20px', marginRight: '10px' }}
                        />
                        <span>UNDERLESS</span>
                    </a>
                    <a href="/uoh" className="underless-mode-option">
                        <img
                            src="/img/home_underhigher.png"
                            alt=""
                            className="mode-icon"
                            style={{ width: '20px', height: '20px', marginRight: '10px' }}
                        />
                        <span>UNDER/HIGHER</span>
                    </a>

                    <div className="underless-sidebar-footer">
                        <form action="/auth/signout" method="post">
                            <button type="submit" className="underless-logout-btn">
                                {avatarUrl ? (
                                    <img
                                        src={avatarUrl}
                                        alt=""
                                        style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                                        referrerPolicy="no-referrer"
                                    />
                                ) : null}
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        <polyline points="16 17 21 12 16 7" />
                                        <line x1="21" y1="12" x2="9" y2="12" />
                                    </svg>
                                    Cerrar sesión
                                </span>
                            </button>
                        </form>
                    </div>
                </nav>
            </div>

            <div
                className="underless-global-top-actions"
                style={{
                    position: 'fixed',
                    top: '20px',
                    left: '20px',
                    right: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 6501,
                    pointerEvents: 'none',
                }}
            >
                <div style={{ pointerEvents: 'auto' }} className="mobile-header-left">
                    <button
                        type="button"
                        className="underless-main-sidebar-toggle"
                        onClick={toggleSidebar}
                        aria-label="Menú"
                        style={{
                            background: '#242829',
                            border: '1px solid #3a3d3f',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            padding: '10px',
                            borderRadius: '8px',
                            width: '44px',
                            height: '44px',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <span style={{ display: 'block', width: '20px', height: '2px', background: 'white' }} />
                        <span style={{ display: 'block', width: '20px', height: '2px', background: 'white' }} />
                        <span style={{ display: 'block', width: '20px', height: '2px', background: 'white' }} />
                    </button>
                </div>
            </div>

            <style jsx global>{`
        * {
          box-shadow: none !important;
          text-shadow: none !important;
        }
        a {
          text-decoration: none !important;
        }

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

        @media (min-width: 769px) {
          .profile-root .profile-main-content,
          .profile-root .profile-shell {
            margin-left: 300px;
            width: calc(100% - 300px);
            max-width: 900px;
          }
        }
      `}</style>
        </>
    )
}
