'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

type Props = {
  nextPath: string
}

export function LoginForm({ nextPath }: Props) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const callbackUrl = () => {
    const origin =
      typeof window !== 'undefined' ? window.location.origin : ''
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
    if (error) {
      setMessage(error.message)
    }
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
      setMessage(error.message)
      return
    }
    router.push(nextPath.startsWith('/') ? nextPath : '/underless')
    router.refresh()
  }

  async function signUpEmail() {
    setMessage(null)
    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        emailRedirectTo: callbackUrl(),
      },
    })
    setLoading(false)
    if (error) {
      setMessage(error.message)
      return
    }
    setMessage(
      'Si tu proyecto requiere confirmación por email, revisá la bandeja. Si no, ya podés entrar.'
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        gap: 0,
      }}
    >
      <h3
        style={{
          margin: '0 0 6px 0',
          color: 'var(--white)',
          fontSize: '1.2em',
          fontWeight: 700,
          fontFamily: "'PoppinsFont', sans-serif",
        }}
      >
        Iniciar sesión
      </h3>
      <p className="offline-warning" style={{ marginTop: 0, marginBottom: 18, maxWidth: 'none' }}>
        Usá Google o tu email y contraseña.
      </p>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button
          type="button"
          onClick={() => void signInGoogle()}
          disabled={loading}
          className="home-btn google-btn"
          style={{ marginBottom: 4 }}
        >
          <img src="/img/Google_Favicon.png" alt="" width={24} height={24} />
          Entrar con Google
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          width: '100%',
          margin: '10px 0 16px 0',
          color: 'var(--muted)',
          fontSize: '0.85em',
          fontFamily: "'PoppinsFont', sans-serif",
        }}
      >
        <span style={{ flex: 1, height: 1, background: 'var(--grisesito)' }} />
        o con email
        <span style={{ flex: 1, height: 1, background: 'var(--grisesito)' }} />
      </div>

      <form
        onSubmit={signInEmail}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: 12,
          width: '100%',
        }}
      >
        <label htmlFor="email" className="offline-warning" style={{ textAlign: 'left', margin: 0, maxWidth: 'none' }}>
          Email
        </label>
        <div className="search-container">
          <input
            id="email"
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

        <label htmlFor="password" className="offline-warning" style={{ textAlign: 'left', margin: 0, maxWidth: 'none' }}>
          Contraseña
        </label>
        <div className="search-container">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="search-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            placeholder="········"
          />
        </div>

        <button type="submit" disabled={loading} className="home-btn offline-btn">
          Entrar con email
        </button>
        <button
          type="button"
          disabled={loading}
          onClick={() => void signUpEmail()}
          className="home-btn offline-btn"
        >
          Crear cuenta con email
        </button>
      </form>

      {message ? (
        <p className="offline-warning" style={{ marginTop: 14, marginBottom: 0, maxWidth: 'none' }}>
          {message}
        </p>
      ) : null}

      <p className="offline-warning" style={{ marginTop: 16, marginBottom: 0, maxWidth: 'none' }}>
        <a href="/" style={{ color: 'var(--muted)', textDecoration: 'underline' }}>
          Volver al inicio
        </a>
      </p>

      <p
        className="offline-warning"
        style={{ marginTop: 10, marginBottom: 0, maxWidth: 'none', fontSize: '0.75em' }}
      >
        <a href="/legal/privacy.html" style={{ color: 'var(--muted)', textDecoration: 'underline' }}>
          Privacidad
        </a>
        <span style={{ color: 'var(--grisesito)', margin: '0 6px' }}>·</span>
        <a href="/legal/terms.html" style={{ color: 'var(--muted)', textDecoration: 'underline' }}>
          Términos
        </a>
      </p>
    </div>
  )
}
