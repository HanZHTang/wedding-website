import hero from '../assets/hero.jpg'
import rings from '../assets/rings.png'

export default function Hero() {
  return (
    <header className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Zhi Han and Yi Qi in the mountains"
        className="absolute inset-0 h-full w-full object-cover object-[50%_20%]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        {/* Monogram */}
        <div className="relative flex items-center">
          <span className="font-display text-white text-7xl sm:text-8xl lg:text-9xl leading-none pr-5 sm:pr-8">
            T
          </span>
          <span className="block w-px h-20 sm:h-24 lg:h-28 bg-white/90" />
          <span className="font-display text-white text-7xl sm:text-8xl lg:text-9xl leading-none pl-5 sm:pl-8">
            L
          </span>
          {/* Name banner crossing the monogram */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 sm:px-8 py-2 sm:py-2.5 shadow-sm">
            <p className="whitespace-nowrap text-[10px] sm:text-sm lg:text-base font-medium tracking-[0.35em] sm:tracking-[0.45em] text-neutral-900">
              ZHI&nbsp;HAN&nbsp;&amp;&nbsp;YI&nbsp;QI
            </p>
          </div>
        </div>
        <img src={rings} alt="" className="mt-6 w-36 sm:w-48 opacity-95" />
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
