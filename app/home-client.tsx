'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HubPlayer, readStoredVolume, VOLUME_STORAGE_KEY } from './login/hub-player'
import { HomeUpdatesPanel } from './home-updates-panel'

export function HomeClient() {
  const [hubVolume, setHubVolume] = useState(0.85)

  useEffect(() => {
    setHubVolume(readStoredVolume())
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(VOLUME_STORAGE_KEY, String(hubVolume))
    } catch {
      /* ignore */
    }
  }, [hubVolume])

  return (
    <div id="home-root" className="home-root home-root--landing home-root--idle-hub">
      {/* Volume control */}
      <div className="hub-volume-global">
        <div className="hub-volume-global-inner hub-volume-control">
          <button type="button" className="hub-volume-btn" aria-label="Volumen del hub">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 5 6 9H3v6h3l5 4V5Z" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.08" />
              <path d="M17.78 6.22a8 8 0 0 1 0 11.56" />
            </svg>
          </button>
          <div className="hub-volume-pop" role="presentation">
            <input
              type="range"
              className="hub-volume-slider"
              min={0}
              max={1}
              step={0.02}
              value={hubVolume}
              onChange={(e) => setHubVolume(parseFloat(e.target.value))}
              aria-label="Nivel de volumen"
            />
          </div>
        </div>
      </div>

      <div className="home-landing-shell">
        <div className="home-landing-primary">
          <header className="home-landing-header">
            <h1 className="logo home-landing-logo">UnderLess</h1>
            <img
              src="/img/peepo-band.gif"
              alt=""
              width={170}
              height={170}
              className="home-peepo-gif"
            />
          </header>

          <main className="home-main home-main--landing-body">
            <div className="home-auth-actions home-auth-actions--tight">
              <Link href="/underless" className="home-btn home-btn-secondary home-btn-hairline">
                UnderLess
              </Link>
              <Link
                href="/uoh"
                className="home-btn home-btn-secondary home-btn-hairline"
                style={{ marginTop: 10 }}
              >
                Under Or Higher
              </Link>
              <Link
                href="/uless"
                className="home-btn home-btn-secondary home-btn-hairline"
                style={{ marginTop: 10 }}
              >
                Foro
              </Link>
            </div>
          </main>
        </div>

        <aside className="home-updates-aside" aria-label="Novedades">
          <HomeUpdatesPanel canCompose={false} />
        </aside>
      </div>

      <footer className="home-hub-footer home-hub-footer--raised">
        <HubPlayer
          variant="footer"
          volume={hubVolume}
          onVolumeChange={setHubVolume}
        />
      </footer>

      <footer className="home-footer-legal-bar">
        <div className="home-footer-legal-content">
          <Link href="/legal/terms.html" className="home-legal-mini-link">Términos</Link>
          <span className="home-legal-mini-sep">•</span>
          <Link href="/legal/privacy.html" className="home-legal-mini-link">Privacidad</Link>
          <span className="home-legal-mini-sep">•</span>
          <span className="home-legal-copy">UnderLess © 2026</span>
        </div>
      </footer>
    </div>
  )
}
