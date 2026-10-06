import finale from '../assets/finale.jpg'

export default function Finale() {
  return (
    <section className="relative">
      <img
        src={finale}
        alt="Zhi Han and Yi Qi waving at the camera"
        className="w-full h-[70svh] sm:h-[85svh] lg:h-[95svh] object-cover object-[center_30%]"
      />
      <p className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-full text-center font-display text-xl sm:text-3xl lg:text-4xl tracking-[0.12em] text-neutral-900 px-4">
        WE CAN’T WAIT TO SEE YOU
      </p>
    </section>
  )
}
