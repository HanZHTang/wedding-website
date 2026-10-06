import Reveal from '../components/Reveal'
import windowPhoto from '../assets/window.jpg'
import corridor from '../assets/corridor.jpg'
import icecream from '../assets/icecream.png'
import photostrip from '../assets/photostrip.png'
import gift from '../assets/gift.svg'

const schedule = [
  ['6:00 PM', 'COCKTAIL HOUR'],
  ['7:00 PM', 'CEREMONY'],
  ['8:30 PM', 'SPEECH & TOSSING'],
  ['10:00 PM', 'THE SEND-OFF'],
]

const tidbits = [
  {
    icon: icecream,
    alt: 'Ice cream',
    title: null,
    text: 'Cocktails and light refreshments will be prepared for your enjoyment before the ceremony.',
  },
  {
    icon: photostrip,
    alt: 'Photo strip',
    title: 'PRE-CEREMONY PHOTO SESSION',
    text: 'Join us for a pre-ceremony photo session and capture special moments with family and friends.',
  },
  {
    icon: gift,
    alt: 'Gift',
    title: 'DOOR GIFTS',
    text: 'A door gift has been prepared for you as a token of our appreciation.',
    invert: true,
  },
]

export default function Events() {
  return (
    <section className="bg-[#9f8967] pb-16 sm:pb-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Photos column */}
        <Reveal className="space-y-10 order-2 lg:order-1">
          <img
            src={windowPhoto}
            alt="Couple by a flower-framed window"
            className="w-full max-w-md mx-auto lg:max-w-none object-cover aspect-[2/3] shadow-xl"
          />
          <div className="relative max-w-md mx-auto lg:max-w-none shadow-xl">
            <img
              src={corridor}
              alt="Couple in traditional attire"
              className="w-full object-cover aspect-[2/3]"
            />
            <p className="absolute bottom-4 left-5 font-display text-3xl sm:text-4xl text-white/60 leading-tight">
              Special
              <br />
              information
            </p>
          </div>
        </Reveal>

        {/* Schedule + tidbits column */}
        <div className="order-1 lg:order-2">
          <Reveal className="text-center lg:text-left">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-white">
              THE DAY’S
              <br />
              EVENTS
            </h2>
            <p className="mt-3 text-sm tracking-[0.3em] text-white/80">DECEMBER 12, 2026</p>
          </Reveal>

          <Reveal delay={120} className="mt-12">
            <ul>
              {schedule.map(([time, name]) => (
                <li
                  key={name}
                  className="flex items-baseline justify-between gap-6 border-t border-white/40 py-4 last:border-b"
                >
                  <span className="text-sm text-white font-light tracking-wide">{time}</span>
                  <span className="text-sm tracking-[0.2em] text-white font-light text-right">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="mt-14">
            <p className="text-sm tracking-[0.25em] text-white/80">TidBits</p>
            <ul className="mt-8 space-y-10">
              {tidbits.map((t, i) => (
                <li key={i} className="flex items-center gap-6">
                  <img
                    src={t.icon}
                    alt={t.alt}
                    className={`w-12 sm:w-14 shrink-0 ${t.invert ? 'invert' : ''}`}
                  />
                  <div>
                    {t.title && (
                      <p className="text-xs tracking-[0.2em] text-white font-medium mb-1">
                        {t.title}
                      </p>
                    )}
                    <p className="text-[15px] leading-7 text-white/90 font-light">{t.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
