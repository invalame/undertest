'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const VOLUME_STORAGE_KEY = 'underlessHubVolumeV1'

const hubSongs = [
  '/sounds/hub/cero - como roe.mp3',
  '/sounds/hub/Blagh, Agush  - TIBURON.mp3',
  '/sounds/hub/cero, enzocerobulto - De concierto en concierto.mp3',
  '/sounds/hub/Cluster, Frozouda - TOP 1 CHARTS.mp3',
  '/sounds/hub/enzocerobulto - Ocupado en mi droga.mp3',
  '/sounds/hub/Frozouda - quitate los Jeans.mp3',
  '/sounds/hub/LITTLE BOOGIE - LITTLE BOOGIE VS EL GOBIERNO.mp3',
  '/sounds/hub/LOLO - FERNET HIELO.mp3',
  '/sounds/hub/pa2k, enzocerobulto - RIGHT NOW.mp3',
  '/sounds/hub/pabloxo - lo hago x mi.mp3',
  '/sounds/hub/PILF - FUMO UNO FUMO DOS.mp3',
  '/sounds/hub/SixUp - TikiTime.mp3',
  '/sounds/hub/Stiffy - MECHINSTRONGAS.mp3',
  '/sounds/hub/TURROBABY - YPF.mp3',
]

const svgPlay = 'M8 5v14l11-7z'
const svgPause = 'M6 19h4V5H6v14zm8-14v14h4V5h-4z'

function readStoredVolume(): number {
  if (typeof window === 'undefined') return 0.85
  try {
    const v = parseFloat(localStorage.getItem(VOLUME_STORAGE_KEY) ?? '')
    if (Number.isFinite(v) && v >= 0 && v <= 1) return v
  } catch {
    /* ignore */
  }
  return 0.85
}

type HubPlayerProps = {
  variant?: 'default' | 'footer'
  /** Si se pasan ambos, el volumen lo controla el padre (landing). */
  volume?: number
  onVolumeChange?: (v: number) => void
}

export function HubPlayer({
  variant = 'default',
  volume: volumeProp,
  onVolumeChange,
}: HubPlayerProps) {
  const hubAudioRef = useRef<HTMLAudioElement | null>(null)
  const playIconPathRef = useRef<SVGPathElement | null>(null)
  const progressFillRef = useRef<HTMLDivElement | null>(null)
  const hubAnimFrameRef = useRef<number | null>(null)
  const isPlayingRef = useRef(false)
  const hubStartTimeRef = useRef(0)
  const lastPlayedSongsRef = useRef<string[]>([])
  const lastPlayClickRef = useRef(0)
  const playBusyRef = useRef(false)

  const controlled =
    typeof volumeProp === 'number' && typeof onVolumeChange === 'function'
  const [internalVolume, setInternalVolume] = useState(0.85)
  const volume = controlled ? volumeProp : internalVolume

  const setVolume = useCallback(
    (v: number) => {
      if (controlled) onVolumeChange(v)
      else setInternalVolume(v)
    },
    [controlled, onVolumeChange]
  )

  useEffect(() => {
    if (!controlled) setInternalVolume(readStoredVolume())
  }, [controlled])

  useEffect(() => {
    const a = hubAudioRef.current
    if (a) a.volume = volume
    if (!controlled) {
      try {
        localStorage.setItem(VOLUME_STORAGE_KEY, String(volume))
      } catch {
        /* ignore */
      }
    }
  }, [volume, controlled])

  useEffect(() => {
    hubAudioRef.current = new Audio()
    return () => {
      if (hubAnimFrameRef.current) {
        cancelAnimationFrame(hubAnimFrameRef.current)
      }
      hubAudioRef.current?.pause()
      hubAudioRef.current = null
    }
  }, [])

  const getRandomSong = useCallback(() => {
    if (hubSongs.length === 0) return null
    if (hubSongs.length === 1) return hubSongs[0]

    let available = hubSongs.filter((s) => !lastPlayedSongsRef.current.includes(s))
    if (available.length === 0) {
      lastPlayedSongsRef.current = lastPlayedSongsRef.current.slice(-1)
      available = hubSongs.filter((s) => !lastPlayedSongsRef.current.includes(s))
    }

    const song = available[Math.floor(Math.random() * available.length)]
    lastPlayedSongsRef.current.push(song)
    if (lastPlayedSongsRef.current.length > Math.floor(hubSongs.length / 2)) {
      lastPlayedSongsRef.current.shift()
    }
    return song
  }, [])

  const finishHubAudio = useCallback(() => {
    isPlayingRef.current = false
    playBusyRef.current = false
    const hubAudio = hubAudioRef.current
    const playIconPath = playIconPathRef.current
    const progressFill = progressFillRef.current
    hubAudio?.pause()
    if (playIconPath) playIconPath.setAttribute('d', svgPlay)
    if (progressFill) progressFill.style.width = '26.66%'
    if (hubAnimFrameRef.current) {
      cancelAnimationFrame(hubAnimFrameRef.current)
      hubAnimFrameRef.current = null
    }
    if (hubAudio) hubAudio.src = ''
  }, [])

  const animateProgress = useCallback(() => {
    if (!isPlayingRef.current) return
    const progressFill = progressFillRef.current
    if (!progressFill) return

    const elapsed = (Date.now() - hubStartTimeRef.current) / 1000
    if (elapsed >= 4) {
      finishHubAudio()
    } else {
      const maxPercent = 26.66
      const currentPercent = (elapsed / 4) * maxPercent
      progressFill.style.width = `${currentPercent}%`
      hubAnimFrameRef.current = requestAnimationFrame(animateProgress)
    }
  }, [finishHubAudio])

  const pauseHubAudio = useCallback(() => {
    isPlayingRef.current = false
    playBusyRef.current = false
    hubAudioRef.current?.pause()
    const playIconPath = playIconPathRef.current
    if (playIconPath) playIconPath.setAttribute('d', svgPlay)
    if (hubAnimFrameRef.current) {
      cancelAnimationFrame(hubAnimFrameRef.current)
      hubAnimFrameRef.current = null
    }
  }, [])

  const onPlayClick = useCallback(() => {
    const now = Date.now()
    if (now - lastPlayClickRef.current < 280) return
    lastPlayClickRef.current = now
    if (playBusyRef.current) return

    const hubAudio = hubAudioRef.current
    const playIconPath = playIconPathRef.current
    const progressFill = progressFillRef.current
    if (!hubAudio || !playIconPath || !progressFill) return

    if (isPlayingRef.current) {
      pauseHubAudio()
      return
    }

    playBusyRef.current = true

    const startPlayback = () => {
      hubAudio.volume = volume
      hubAudio
        .play()
        .then(() => {
          isPlayingRef.current = true
          playIconPath.setAttribute('d', svgPause)
          if (hubAnimFrameRef.current) cancelAnimationFrame(hubAnimFrameRef.current)
          hubAnimFrameRef.current = requestAnimationFrame(animateProgress)
        })
        .catch(() => {
          /* decode / autoplay */
        })
        .finally(() => {
          playBusyRef.current = false
        })
    }

    if (
      hubAudio.src &&
      !hubAudio.ended &&
      progressFill.style.width !== '26.66%' &&
      progressFill.style.width !== '0%'
    ) {
      const currentPercent = parseFloat(progressFill.style.width) || 0
      const elapsedSoFar = (currentPercent / 26.66) * 4
      hubStartTimeRef.current = Date.now() - elapsedSoFar * 1000
      startPlayback()
      return
    }

    const song = getRandomSong()
    if (!song) {
      playBusyRef.current = false
      return
    }

    hubAudio.src = song
    const onLoaded = () => {
      hubAudio.removeEventListener('loadedmetadata', onLoaded)
      hubAudio.removeEventListener('error', onError)
      const maxStart = Math.max(0, hubAudio.duration - 4)
      hubAudio.currentTime = Math.random() * maxStart
      hubStartTimeRef.current = Date.now()
      progressFill.style.width = '0%'
      startPlayback()
    }
    const onError = () => {
      hubAudio.removeEventListener('loadedmetadata', onLoaded)
      hubAudio.removeEventListener('error', onError)
      playBusyRef.current = false
      if (playIconPath) playIconPath.setAttribute('d', svgPlay)
    }
    hubAudio.addEventListener('loadedmetadata', onLoaded)
    hubAudio.addEventListener('error', onError)
    hubAudio.load()
  }, [animateProgress, getRandomSong, pauseHubAudio, volume])

  const progressClass =
    variant === 'footer'
      ? 'progress-wrapper hub-progress-wrapper hub-progress-wrapper--footer hub-footer-progress-inner'
      : 'progress-wrapper hub-progress-wrapper hub-progress-wrapper--default'

  const progressBlock = (
    <div className={progressClass}>
      <div
        className="progress-bar-container"
        id="login-hub-progress-bar"
      >
        <div className="segments-overlay" id="login-hub-segments-overlay">
          <div className="segment-divider hub-hide-mobile" style={{ left: '3.33%' }} />
          <div className="segment-divider hub-hide-mobile" style={{ left: '13.33%' }} />
          <div className="segment-divider" style={{ left: '26.66%' }} />
          <div className="segment-divider hub-hide-mobile" style={{ left: '53.33%' }} />
          <div className="segment-divider hub-hide-mobile" style={{ left: '73.33%' }} />
        </div>
        <div
          className="progress-bar-fill"
          id="login-hub-progress-fill"
          ref={progressFillRef}
          style={{ width: '26.66%' }}
        />
      </div>
      <span className="timer-text" id="login-hub-timer-text" style={{ left: '26.66%' }}>
        4s
      </span>
    </div>
  )

  const playBlock = (
    <div className="hub-play-outer">
      <button
        type="button"
        className={
          variant === 'footer' ? 'play-button hub-play-button--footer' : 'play-button'
        }
        id="login-hub-play-button"
        aria-label="escuchar fragmento"
        style={variant === 'default' ? { marginBottom: 20 } : undefined}
        onClick={(e) => {
          e.preventDefault()
          onPlayClick()
        }}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" id="login-hub-play-icon">
          <path
            ref={playIconPathRef}
            d={svgPlay}
            fill="white"
            stroke="white"
            strokeWidth={2}
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )

  if (variant === 'footer') {
    return (
      <div className="hub-footer-shell">
        <div className="hub-footer-column">
          {progressBlock}
          {playBlock}
        </div>
      </div>
    )
  }

  return (
    <>
      {progressBlock}
      {playBlock}
    </>
  )
}

export { readStoredVolume, VOLUME_STORAGE_KEY }
