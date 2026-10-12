import hero from '../assets/hero.jpg'
import rings from '../assets/rings.png'

export default function Hero() {
  return (
    <header className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Zhi Han and Yi Qi in the mountains"
        className="absolute inset-0 h-full w-full object-cover object-[50%_45%] scale-[1.12]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        {/* Monogram */}
        <div className="relative flex items-center -translate-y-[6%]">
          <span className="font-display text-white text-5xl sm:text-7xl lg:text-8xl leading-none pr-4 sm:pr-6">
            T
          </span>
          <span className="block w-px h-14 sm:h-20 lg:h-24 bg-white/90" />
          <span className="font-display text-white text-5xl sm:text-7xl lg:text-8xl leading-none pl-4 sm:pl-6">
            L
          </span>
          {/* Name banner crossing the monogram */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 sm:px-7 py-1.5 sm:py-2 shadow-sm">
            <p className="whitespace-nowrap text-[9px] sm:text-xs lg:text-sm font-medium tracking-[0.35em] sm:tracking-[0.45em] text-neutral-900">
              ZHI&nbsp;HAN&nbsp;&amp;&nbsp;YI&nbsp;QI
            </p>
          </div>
        </div>
        <img src={rings} alt="" className="mt-5 w-32 sm:w-44 opacity-95" />
      </div>
      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90">
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="white" strokeWidth="1.5" />
          <circle cx="11" cy="10" r="2.5" fill="white" />
        </svg>
      </div>
    </header>
  )
}
