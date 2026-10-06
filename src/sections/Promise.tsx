import Reveal from '../components/Reveal'
import piano from '../assets/piano.jpg'

export default function Promise() {
  return (
    <section className="bg-[#9f8967] py-16 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          <img
            src={piano}
            alt="Bride and groom by the piano"
            className="w-full max-w-md mx-auto lg:max-w-none object-cover aspect-[2/3] shadow-xl"
          />
        </Reveal>
        <Reveal delay={150} className="order-1 lg:order-2 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-white">
            A PROMISE
            <br />
            FOR LIFE
          </h2>
          <p className="mt-8 text-[15px] leading-7 text-white/90 font-light">
            With grateful hearts and endless love, we invite you to witness the start of our
            forever. Your presence will make this special chapter even more meaningful as we begin
            our greatest journey—together.
          </p>
          <p className="mt-8 text-[15px] leading-7 text-white font-light">
            <span className="font-medium">Location:</span>
            <br />
            Sheraton Imperial Kuala Lumpur Hotel
          </p>
          <a
            href="https://maps.app.goo.gl/o1bTdTs9nYActEF36"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-white underline underline-offset-4 decoration-white/60 hover:decoration-white min-h-[44px]"
          >
            <span aria-hidden="true">📍</span>
            Google Map
          </a>
        </Reveal>
      </div>
    </section>
  )
}
