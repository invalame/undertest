'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useLayoutEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { HubPlayer, readStoredVolume, VOLUME_STORAGE_KEY } from './login/hub-player'
import { HomeUpdatesPanel } from './home-updates-panel'

const LEGAL_RETURN_KEY = 'underlessLegalReturn_v1'

type EmailStep = 'idle' | 'signin' | 'signup'

type Props = {
  isAuthed: boolean
  nextPath: string
  errorMessage: string | null
  officialOrigin?: string
  userData?: { username: string; avatar: string }
}

function storeLegalSnapshot(step: EmailStep, emailValue: string) {
  try {
    sessionStorage.setItem(
      LEGAL_RETURN_KEY,
      JSON.stringify({
        step,
        email: emailValue.slice(0, 320),
        returnHref: window.location.href,
        ts: Date.now(),
      })
    )
  } catch {
    /* ignore */
  }
}

export function HomeClient({ isAuthed, nextPath, errorMessage, officialOrigin, userData }: Props) {
  const router = useRouter()
  const [emailStep, setEmailStep] = useState<EmailStep>('idle')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
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

  useLayoutEffect(() => {
    if (isAuthed) return
    try {
      const raw = sessionStorage.getItem(LEGAL_RETURN_KEY)
      if (!raw) return
      const o = JSON.parse(raw) as { step?: string; email?: string; ts?: number }
      if (typeof o.ts === 'number' && Date.now() - o.ts > 3600000) {
        sessionStorage.removeItem(LEGAL_RETURN_KEY)
        return
      }
      sessionStorage.removeItem(LEGAL_RETURN_KEY)
      if (typeof o.email === 'string') setEmail(o.email)
      if (o.step === 'choose') {
        setEmailStep('idle')
        return
      }
      if (o.step === 'signin' || o.step === 'signup') {
        setEmailStep(o.step as EmailStep)
      }
    } catch {
      /* ignore */
    }
  }, [isAuthed])

  useEffect(() => {
    setShowPassword(false)
  }, [emailStep])

  const signupCallbackUrl = () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : ''
    return `${origin}/auth/callback?next=${encodeURIComponent('/underless')}`
  }

  const callbackUrl = () => {
    const origin = officialOrigin || (typeof window !== 'undefined' ? window.location.origin : '')
    const next = nextPath.startsWith('/') ? nextPath : '/underless'
    return `${origin}/auth/callback?next=${encodeURIComponent(next)}`
  }

  async function signInGoogle() {
    setMessage(null)
    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: callbackUrl(),
      },
    })
    setLoading(false)
    if (error) setMessage(mapAuthMessage(error.message))
  }

  async function signInEmail(e: React.FormEvent) {
    e.preventDefault()
    setMessage(null)
    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })
    setLoading(false)
    if (error) {
      setMessage(mapAuthMessage(error.message))
      return
    }
    router.push(nextPath.startsWith('/') ? nextPath : '/underless')
    router.refresh()
  }

  async function signUpEmail() {
    setMessage(null)
    setLoading(true)
    const supabase = createClient()
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        emailRedirectTo: signupCallbackUrl(),
      },
    })
    setLoading(false)
    if (error) {
      setMessage(mapAuthMessage(error.message))
      return
    }

    const identities = data.user?.identities
    if (identities && identities.length === 0) {
      setMessage(
        'Este email ya está registrado. Probá iniciar sesión con esa cuenta o usá “Olvidé mi contraseña” desde el proveedor de auth si aplica.'
      )
      return
    }

    if (data.session) {
      router.push('/underless')
      router.refresh()
      return
    }

    setMessage(
      'Te enviamos un correo a tu dirección: abrilo y tocá el enlace para confirmar tu cuenta. Hasta que no confirmes el email no vas a poder entrar. Revisá también spam o promociones.'
    )
  }

  const headerTitle = (() => {
    if (isAuthed) return 'Home'
    if (emailStep === 'signin') return 'Iniciar Sesión'
    if (emailStep === 'signup') return 'Registrarse'
    return 'UnderLess'
  })()

  const showPeepoGif = isAuthed || emailStep === 'idle'
  const showHubPlayer = !isAuthed && emailStep === 'idle'
  const showBack = !isAuthed && emailStep !== 'idle'
  const emailFlow = !isAuthed && emailStep !== 'idle'
  const showUpdatesColumn = isAuthed

  const rootClass =
    `home-root--landing${isAuthed ? ' home-root--authed-hub' : ''}${emailFlow ? ' home-root--email-flow' : ''}${!isAuthed && emailStep === 'idle' ? ' home-root--idle-hub' : ''}`

  function goBack() {
    setMessage(null)
    if (emailStep === 'signin' || emailStep === 'signup') setEmailStep('idle')
  }

  return (
    <div id="home-root" className={rootClass}>
      {showHubPlayer ? (
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
      ) : null}

      {showBack ? (
        <button
          type="button"
          className="home-back-arrow"
          onClick={goBack}
          aria-label="Volver atrás"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
            />
          </svg>
        </button>
      ) : null}

      <div
        className={`home-landing-shell${showUpdatesColumn ? ' home-landing-shell--grid' : ''}`}
      >
        <div className="home-landing-primary">
          <header
            className={`home-landing-header${isAuthed ? ' home-landing-header--authed' : ''}`}
          >
            <h1 className="logo home-landing-logo">{headerTitle}</h1>
            {showPeepoGif ? (
              <img
                src="/img/peepo-band.gif"
                alt=""
                width={170}
                height={170}
                className="home-peepo-gif"
              />
            ) : null}
          </header>

          <main
            className={`home-main home-main--landing-body${emailFlow ? ' home-main--email-flow' : ''}${isAuthed ? ' home-main--authed-actions' : ''}`}
          >
        {isAuthed ? (
          <div className="home-auth-actions home-auth-actions--authed">
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
            
            <div className="home-user-separator" />
            
            <div className="home-user-mini-profile">
              <div className="home-user-info">
                <img src={userData?.avatar || '/img/peepo-band.gif'} alt="" className="home-user-avatar-mini" />
                <span className="home-user-name-mini">{userData?.username || 'Usuario'}</span>
              </div>
              <form action="/auth/signout" method="post">
                <button type="submit" className="home-btn-small-rect">
                  Salir
                </button>
              </form>
            </div>
          </div>
        ) : (
          <>
            {errorMessage ? (
              <p
                role="alert"
                className="home-muted-note home-error-note"
                style={{ marginBottom: 14 }}
              >
                {errorMessage}
              </p>
            ) : null}

            {emailStep === 'idle' ? (
              <div className="home-auth-actions home-auth-actions--tight">
                <button
                  type="button"
                  onClick={() => void signInGoogle()}
                  disabled={loading}
                  className="home-btn google-btn home-btn-hairline"
                >
                  <img src="/img/Google_Favicon.png" alt="" width={24} height={24} />
                  Continuar con Google
                </button>
                <button
                  type="button"
                  disabled={loading}
                  className="home-btn home-btn-secondary home-btn-hairline"
                  style={{ marginTop: 10 }}
                  onClick={() => {
                    setMessage(null)
                    setEmailStep('signin')
                  }}
                >
                  Iniciar sesión
                </button>
                <button
                  type="button"
                  disabled={loading}
                  className="home-btn home-btn-secondary home-btn-hairline"
                  style={{ marginTop: 10 }}
                  onClick={() => {
                    setMessage(null)
                    setEmailStep('signup')
                  }}
                >
                  Crear cuenta
                </button>
              </div>
            ) : null}

            {emailStep === 'signin' ? (
              <div className="home-auth-actions home-auth-panel home-auth-actions--tight">
                <form
                  onSubmit={signInEmail}
                  className="home-email-form"
                >
                  <label htmlFor="home-email-in" className="home-field-label">
                    Email
                  </label>
                  <div className="search-container home-search-flat">
                    <input
                      id="home-email-in"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="search-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                  <label htmlFor="home-pass-in" className="home-field-label">
                    Contraseña
                  </label>
                  <PasswordField
                    id="home-pass-in"
                    autoComplete="current-password"
                    value={password}
                    onChange={setPassword}
                    visible={showPassword}
                    onToggleVisible={() => setShowPassword((v) => !v)}
                  />
                  <button type="submit" disabled={loading} className="home-btn home-btn-accent home-btn-hairline">
                    Entrar
                  </button>
                </form>
                {message ? <p className="home-muted-note">{message}</p> : null}
                <LegalLinks emailStep={emailStep} email={email} />
              </div>
            ) : null}

            {emailStep === 'signup' ? (
              <div className="home-auth-actions home-auth-panel home-auth-actions--tight">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    void signUpEmail()
                  }}
                  className="home-email-form"
                >
                  <label htmlFor="home-email-up" className="home-field-label">
                    Email
                  </label>
                  <div className="search-container home-search-flat">
                    <input
                      id="home-email-up"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="search-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                  <label htmlFor="home-pass-up" className="home-field-label">
                    Contraseña
                  </label>
                  <PasswordField
                    id="home-pass-up"
                    autoComplete="new-password"
                    value={password}
                    onChange={setPassword}
                    visible={showPassword}
                    onToggleVisible={() => setShowPassword((v) => !v)}
                  />
                  <button type="submit" disabled={loading} className="home-btn home-btn-accent home-btn-hairline">
                    Registrarme
                  </button>
                </form>
                {message ? <p className="home-muted-note">{message}</p> : null}
                <LegalLinks emailStep={emailStep} email={email} />
              </div>
            ) : null}
          </>
        )}
          </main>
        </div>

        {showUpdatesColumn ? (
          <aside className="home-updates-aside" aria-label="Novedades">
            <HomeUpdatesPanel canCompose={isAuthed} />
          </aside>
        ) : null}
      </div>

      {showHubPlayer ? (
        <footer className="home-hub-footer home-hub-footer--raised">
          <HubPlayer
            variant="footer"
            volume={hubVolume}
            onVolumeChange={setHubVolume}
          />
        </footer>
      ) : null}
    </div>
  )
}

function mapAuthMessage(msg: string): string {
  const m = msg.toLowerCase()
  if (m.includes('already registered') || m.includes('user already')) {
    return 'Este email ya está registrado. Probá iniciar sesión en lugar de crear otra cuenta.'
  }
  if (m.includes('invalid login') || m.includes('invalid credentials')) {
    return 'Email o contraseña incorrectos.'
  }
  return msg
}

function PasswordField(props: {
  id: string
  autoComplete: string
  value: string
  onChange: (v: string) => void
  visible: boolean
  onToggleVisible: () => void
}) {
  const { id, autoComplete, value, onChange, visible, onToggleVisible } = props
  return (
    <div className="search-container home-search-flat home-password-row">
      <input
        id={id}
        name="password"
        type={visible ? 'text' : 'password'}
        autoComplete={autoComplete}
        className="search-input home-password-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        minLength={6}
        placeholder="········"
      />
      <button
        type="button"
        className="home-password-toggle"
        onClick={onToggleVisible}
        aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
        tabIndex={0}
      >
        {visible ? (
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
            />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

function LegalLinks(props: { emailStep: EmailStep; email: string }) {
  const { emailStep, email } = props
  return (
    <p className="home-muted-note" style={{ marginTop: 14, marginBottom: 0 }}>
      <a
        href="/legal/privacy.html"
        className="home-legal-link"
        onClick={() => storeLegalSnapshot(emailStep, email)}
      >
        Privacidad
      </a>
      <span style={{ color: 'var(--grisesito)', margin: '0 6px' }}>·</span>
      <a
        href="/legal/terms.html"
        className="home-legal-link"
        onClick={() => storeLegalSnapshot(emailStep, email)}
      >
        Términos
      </a>
    </p>
  )
}
