import Reveal from '../components/Reveal'

export default function Info() {
  return (
    <section className="bg-[#eae4cc] py-16 sm:py-24 px-6 text-center text-neutral-900">
      <Reveal className="max-w-xl mx-auto">
        {/* Location */}
        <svg
          width="30"
          height="38"
          viewBox="0 0 24 32"
          fill="none"
          className="mx-auto"
          aria-hidden="true"
        >
          <path
            d="M12 1C6 1 1.5 5.6 1.5 11.4 1.5 19.5 12 31 12 31s10.5-11.5 10.5-19.6C22.5 5.6 18 1 12 1Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="11.5" r="3.6" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <p className="mt-3 text-sm font-semibold tracking-[0.25em]">LOCATION</p>
        <p className="mt-1 text-lg font-light">Sheraton Imperial Kuala Lumpur Hotel</p>

        {/* Date */}
        <svg
          width="30"
          height="32"
          viewBox="0 0 24 26"
          fill="none"
          className="mx-auto mt-10"
          aria-hidden="true"
        >
          <rect x="1" y="4" width="22" height="21" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M1 10h22" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7 1v5M17 1v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path
            d="M6 14h2M11 14h2M16 14h2M6 18h2M11 18h2M16 18h2"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
        <p className="mt-3 text-sm font-semibold tracking-[0.25em]">DATE</p>
        <p className="mt-1 text-lg font-light">12th December 2026</p>

        {/* RSVP */}
        <h2 className="mt-12 font-display text-4xl tracking-[0.1em] font-semibold">RSVP</h2>
        <a
          href="https://forms.gle/p4qHYEhZn4pyRCgS8"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block underline underline-offset-4 text-[15px] font-light hover:text-neutral-600 min-h-[44px] leading-[44px]"
        >
          Click Here For Reservation
        </a>
      </Reveal>
    </section>
  )
}
