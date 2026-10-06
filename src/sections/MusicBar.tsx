import { useEffect, useRef, useState } from 'react'

export default function MusicBar() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio('/music.mp3')
    audio.loop = true
    audio.volume = 0.9
    audioRef.current = audio

    const syncState = () => setPlaying(!audio.paused)
    audio.addEventListener('play', syncState)
    audio.addEventListener('pause', syncState)

    // Try to autoplay immediately; browsers usually block sound before
    // the first interaction, so fall back to starting on the first gesture.
    const startOnGesture = () => {
      audio.play().catch(() => {})
    }
    audio.play().catch(() => {
      const events: (keyof WindowEventMap)[] = ['pointerdown', 'touchstart', 'keydown', 'wheel']
      const handler = () => {
        startOnGesture()
        events.forEach((e) => window.removeEventListener(e, handler))
      }
      events.forEach((e) => window.addEventListener(e, handler, { once: false }))
    })

    return () => {
      audio.pause()
      audio.removeEventListener('play', syncState)
      audio.removeEventListener('pause', syncState)
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }

  return (
    <div className="bg-[#eae4cc] py-8 flex justify-center">
      <button
        onClick={toggle}
        className="flex items-center gap-4 min-h-[44px] px-6 cursor-pointer group"
        aria-pressed={playing}
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        <span
          className={`relative block w-14 h-14 rounded-full bg-neutral-900 shadow-md ${
            playing ? 'spin-slow' : 'group-hover:scale-105 transition-transform'
          }`}
        >
          {/* vinyl grooves */}
          <span className="absolute inset-2 rounded-full border border-white/40" />
          <span className="absolute inset-3.5 rounded-full border border-white/30" />
          <span className="absolute inset-5 rounded-full border border-white/20" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#eae4cc] border border-white/50" />
        </span>
        <span className="text-left leading-tight">
          <span className="block font-display text-lg tracking-[0.15em] text-neutral-900">
            {playing ? 'PLAYING' : 'CLICK ME'}
          </span>
          <span className="block text-[11px] tracking-[0.3em] text-neutral-700 uppercase">
            {playing ? 'click to pause' : 'for music'}
          </span>
        </span>
      </button>
    </div>
  )
}
