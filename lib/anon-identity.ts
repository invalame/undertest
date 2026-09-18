// Identidad anónima persistida en localStorage.
// Cada visitante del foro recibe un UUID único + nombre corto aleatorio + discriminador.

const STORAGE_KEY = 'uless_anon_v1'

const ADJECTIVES = [
  'Rojo', 'Azul', 'Verde', 'Veloz', 'Frío', 'Lunar', 'Zen', 'Gris',
  'Fiero', 'Bello', 'Seco', 'Vivo', 'Loco', 'Rico', 'Solo', 'Neto',
  'Puro', 'Fino', 'Dulce', 'Fijo', 'Leve', 'Real', 'Mudo', 'Libre',
]

const NOUNS = [
  'Lobo', 'Pato', 'Cobra', 'Tigre', 'Oso', 'Zorro', 'Cuervo', 'Rayo',
  'Puma', 'Viento', 'Nube', 'Trueno', 'Llama', 'Roca', 'Sombra', 'Río',
  'Fuego', 'Hielo', 'Perro', 'Gato', 'Lince', 'Aguila', 'Buho', 'Sapo',
  'Vibora', 'Delfin', 'Toro', 'Cisne', 'Halcon', 'Caimán',
]

export type AnonIdentity = {
  uuid: string
  display_name: string
  discriminator: string
  avatar_path: null
  username: string
}

function generateUUID(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  // Fallback for older environments
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

function generateDisplayName(): string {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)]
  return `${noun} ${adj}`
}

function generateDiscriminator(): string {
  return Math.floor(Math.random() * 10000).toString().padStart(4, '0')
}

export function getAnonIdentity(): AnonIdentity {
  if (typeof window === 'undefined') {
    // SSR fallback — shouldn't be called server-side
    return {
      uuid: 'ssr-placeholder',
      display_name: 'Anónimo',
      discriminator: '0000',
      avatar_path: null,
      username: 'anonimo',
    }
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<AnonIdentity>
      if (parsed.uuid && parsed.display_name && parsed.discriminator) {
        return {
          uuid: parsed.uuid,
          display_name: parsed.display_name,
          discriminator: parsed.discriminator,
          avatar_path: null,
          username: parsed.username || `anon_${parsed.uuid.slice(0, 8)}`,
        }
      }
    }
  } catch {
    /* ignore */
  }

  // Generate new identity
  const uuid = generateUUID()
  const identity: AnonIdentity = {
    uuid,
    display_name: generateDisplayName(),
    discriminator: generateDiscriminator(),
    avatar_path: null,
    username: `anon_${uuid.slice(0, 8)}`,
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(identity))
  } catch {
    /* ignore */
  }

  return identity
}

/** Permite al usuario cambiar solo el display_name */
export function updateAnonDisplayName(newName: string): void {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const current = raw ? (JSON.parse(raw) as AnonIdentity) : null
    if (current) {
      current.display_name = newName
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current))
    }
  } catch {
    /* ignore */
  }
}
