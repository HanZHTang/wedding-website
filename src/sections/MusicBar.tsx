import { useEffect, useRef } from 'react'

// Background music player. Starts automatically on desktop, and on mobile
// starts the moment the envelope is tapped (autoStart=true) — that tap is a
// real user gesture, so mobile browsers allow the sound.
export default function MusicBar({ autoStart = false }: { autoStart?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio('/music.mp3')
    audio.loop = true
    audio.volume = 0.9
    audio.preload = 'auto'
    audioRef.current = audio

    // Try true autoplay first (works on most desktop browsers).
    audio.play().catch(() => {})

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  // Mobile fallback: the envelope tap opens the site — start music then.
  useEffect(() => {
    if (autoStart && audioRef.current?.paused) {
      audioRef.current.play().catch(() => {})
    }
  }, [autoStart])

  return null
}
