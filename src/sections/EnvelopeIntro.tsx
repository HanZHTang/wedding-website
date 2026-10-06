import { useState } from 'react'

export default function EnvelopeIntro({ onOpen }: { onOpen: () => void }) {
  const [stage, setStage] = useState<'closed' | 'opening' | 'leaving'>('closed')

  const handleOpen = () => {
    if (stage !== 'closed') return
    setStage('opening')
    // flap opens, letter rises, then whole intro fades away
    window.setTimeout(() => setStage('leaving'), 1400)
    window.setTimeout(() => onOpen(), 2100)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#eae4cc] transition-opacity duration-700 ${
        stage === 'leaving' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={handleOpen}
      role="button"
      aria-label="Open the invitation"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
    >
      {/* soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55),rgba(234,228,204,0))]" />

      <div className="relative flex flex-col items-center px-6 cursor-pointer select-none">
        <p className="font-display text-xs sm:text-sm tracking-[0.4em] text-neutral-700 mb-10 text-center">
          YOU ARE INVITED TO
          <br />
          <span className="text-base sm:text-lg tracking-[0.25em] text-neutral-900">
            THE WEDDING OF
          </span>
        </p>

        {/* Envelope */}
        <div className="relative w-[300px] sm:w-[400px] aspect-[10/7]">
          {/* letter/card inside */}
          <div
            className={`absolute left-[6%] right-[6%] top-[6%] bottom-[10%] bg-white rounded-sm shadow-md flex flex-col items-center justify-center transition-transform duration-1000 ease-out z-30 ${
              stage === 'closed' ? 'translate-y-6' : '-translate-y-[60%]'
            }`}
          >
            <div className="flex items-center">
              <span className="font-display text-4xl sm:text-5xl text-neutral-800 pr-3">T</span>
              <span className="block w-px h-9 bg-neutral-400" />
              <span className="font-display text-4xl sm:text-5xl text-neutral-800 pl-3">L</span>
            </div>
            <p className="mt-2 text-[9px] sm:text-[10px] tracking-[0.35em] text-neutral-600">
              ZHI HAN &amp; YI QI
            </p>
            <p className="mt-1 text-[8px] sm:text-[9px] tracking-[0.25em] text-neutral-500">
              12 . 12 . 2026
            </p>
          </div>

          {/* envelope pocket (back + diagonal folds) — card slides behind it when closed */}
          <svg
            viewBox="0 0 100 70"
            className="absolute inset-0 z-40 h-full w-full drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)]"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <rect x="0" y="0" width="100" height="70" fill="#f5efe0" />
            <polygon
              points="0,0 50,42 0,70"
              fill="#efe7d2"
              stroke="#ddd3ba"
              strokeWidth="0.4"
            />
            <polygon
              points="100,0 50,42 100,70"
              fill="#efe7d2"
              stroke="#ddd3ba"
              strokeWidth="0.4"
            />
            <polygon
              points="0,70 50,30 100,70"
              fill="#f8f2e4"
              stroke="#ddd3ba"
              strokeWidth="0.4"
            />
          </svg>

          {/* flap */}
          <div
            className={`absolute left-0 right-0 top-0 origin-top transition-all duration-700 ease-in-out ${
              stage === 'closed' ? 'z-50' : 'z-10 [transform:rotateX(180deg)]'
            }`}
            style={{ transformStyle: 'preserve-3d', perspective: '600px', height: '46%' }}
          >
            <svg
              viewBox="0 0 100 46"
              className="h-full w-full drop-shadow-sm"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon
                points="0,0 100,0 50,46"
                fill="#e9e0c7"
                stroke="#ddd3ba"
                strokeWidth="0.4"
              />
            </svg>
            {/* wax seal on flap tip */}
            <div
              className={`absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#9f8967] shadow-md flex items-center justify-center transition-opacity duration-500 ${
                stage === 'closed' ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="font-display text-white text-sm sm:text-base tracking-wide">
                T·L
              </span>
            </div>
          </div>
        </div>

        <p
          className={`mt-12 text-[11px] sm:text-xs tracking-[0.35em] text-neutral-600 uppercase transition-opacity duration-500 animate-pulse ${
            stage === 'closed' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Tap to open
        </p>
      </div>
    </div>
  )
}
