'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

const DESKTOP_MQ = '(min-width: 769px)'

export function ForumHeaderClient({ username, avatarUrl }: { username?: string; avatarUrl?: string }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    const syncViewport = useCallback(() => {
        const desktop = window.matchMedia(DESKTOP_MQ).matches
        setIsDesktop(desktop)
        setSidebarOpen(desktop)
    }, [])

    useEffect(() => {
        syncViewport()
        const mq = window.matchMedia(DESKTOP_MQ)
        const onChange = () => syncViewport()
        mq.addEventListener('change', onChange)
        return () => mq.removeEventListener('change', onChange)
    }, [syncViewport])

    useEffect(() => {
        document.body.classList.toggle('ul-sidebar-open', sidebarOpen)
        return () => document.body.classList.remove('ul-sidebar-open')
    }, [sidebarOpen])

    const toggleSidebar = () => {
        if (isDesktop) return
        setSidebarOpen((v) => !v)
    }

    const closeSidebar = () => {
        if (isDesktop) return
        setSidebarOpen(false)
    }

    const rootClass = [
        sidebarOpen ? 'underless-open' : '',
        'ul-profile-page',
        isDesktop ? 'ul-profile-desktop' : 'ul-profile-mobile',
    ].filter(Boolean).join(' ')

    return (
        <>
            {!isDesktop && !sidebarOpen ? (
                <div
                    className="underless-sidebar-trigger-line"
                    onClick={toggleSidebar}
                    title="Abrir menú"
                    role="button"
                    tabIndex={0}
                />
            ) : null}

            <div id="underless-sidebar-root" data-ul-page="profile" className={rootClass}>
                <div
                    className="underless-overlay"
                    aria-hidden={!sidebarOpen || isDesktop}
                    onClick={closeSidebar}
                />
                <nav className="underless-sidebar" aria-label="Menú principal">
                    <button type="button" className="underless-sidebar-close-btn" onClick={closeSidebar} aria-label="Cerrar">
                        ×
                    </button>
                    <a href="/" className="underless-sidebar-home-link">
                        <span className="underless-sidebar-home-text">Home</span>
                    </a>

                    <div className="underless-social-section">
                        <p className="underless-sidebar-label">SOCIAL</p>
                        {username ? (
                            <a href={`/u/${username}`} className="underless-mode-option">
                                MI PERFIL
                            </a>
                        ) : null}
                        <button type="button" className="underless-mode-option">
                            TIENDA
                        </button>
                        <a href="/uless" className="underless-mode-option active">
                            ULESS
                        </a>
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

                    {username && (
                        <div className="underless-sidebar-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', borderTop: '1px solid #3a3d3f', marginTop: 'auto' }}>
                            <a href={`/u/${username}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#fff', minWidth: 0, flex: 1 }} title="Ir a mi perfil">
                                {avatarUrl ? (
                                    <img src={avatarUrl} alt="" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} referrerPolicy="no-referrer" />
                                ) : null}
                                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.95rem', fontWeight: 600 }}>{username}</span>
                            </a>
                            <form action="/auth/signout" method="post" style={{ margin: 0, flexShrink: 0 }}>
                                <button type="submit" style={{ background: 'transparent', border: 'none', color: '#b3b3b3', cursor: 'pointer', padding: '8px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Cerrar sesión" onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#b3b3b3'}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        <polyline points="16 17 21 12 16 7" />
                                        <line x1="21" y1="12" x2="9" y2="12" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    )}
                </nav>
            </div>
            
            <div
                className="underless-global-top-actions"
                style={{ position: 'fixed', top: '20px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 6501, pointerEvents: 'none' }}
            >
                <div style={{ pointerEvents: 'auto' }} className="mobile-header-left">
                    {!sidebarOpen ? (
                        <button
                            type="button"
                            className="underless-main-sidebar-toggle"
                            onClick={toggleSidebar}
                            aria-label="Menú"
                            style={{ background: '#242829', border: '1px solid #3a3d3f', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px', padding: '10px', borderRadius: '8px', width: '44px', height: '44px', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <span style={{ display: 'block', width: '20px', height: '2px', background: 'white' }} />
                            <span style={{ display: 'block', width: '20px', height: '2px', background: 'white' }} />
                            <span style={{ display: 'block', width: '20px', height: '2px', background: 'white' }} />
                        </button>
                    ) : null}
                </div>
            </div>
        </>
    )
}
