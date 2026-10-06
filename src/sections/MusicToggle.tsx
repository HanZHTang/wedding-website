import { useState } from 'react'

const YT_EMBED =
  'https://www.youtube-nocookie.com/embed/cyFNVN04D68?autoplay=1&rel=0'

export function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="flex items-center justify-center gap-4 py-10">
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-pressed={playing}
        aria-label={playing ? 'Pause music' : 'Play music'}
        className="flex items-center gap-4 min-h-[44px]"
      >
        <img
          src="/photos/vinyl.png"
          alt=""
          className={`w-12 h-12 ${playing ? 'spinning' : ''}`}
        />
        <span className="text-left leading-tight">
          <span className="block font-sans-body text-base font-medium tracking-wide">
            {playing ? 'PLAYING' : 'CLICK ME'}
          </span>
          <span className="block font-serif-display italic text-sm">
            for music
          </span>
        </span>
      </button>
      {playing && (
        <iframe
          src={YT_EMBED}
          title="Wedding music"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute w-0 h-0 border-0 opacity-0 pointer-events-none"
        />
      )}
    </div>
  )
}
