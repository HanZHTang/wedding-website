import Reveal from '../components/Reveal'
import lakeArch from '../assets/lake-arch.jpg'
import lakeCasual from '../assets/lake-casual.jpg'
import wow from '../assets/wow.jpg'
import envelope from '../assets/envelope.png'
import bookpage from '../assets/bookpage.png'
import leaf from '../assets/leaf.png'
import flower1 from '../assets/flower1.png'
import flower2 from '../assets/flower2.png'

function Polaroid({
  src,
  alt,
  className = '',
  imgClass = '',
  style,
}: {
  src: string
  alt: string
  className?: string
  imgClass?: string
  style?: React.CSSProperties
}) {
  return (
    <div className={`absolute bg-white p-2 pb-8 shadow-lg ${className}`} style={style}>
      <img src={src} alt={alt} className={`block w-full object-cover ${imgClass}`} />
    </div>
  )
}

export default function Story() {
  return (
    <section className="bg-[#eae4cc] py-16 sm:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
        {/* Text */}
        <Reveal className="max-w-md mx-auto lg:mx-0 lg:pl-6 text-center lg:text-left">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-neutral-900">
            A CHANCE
            <br />
            ENCOUNTER
          </h2>
          <p className="mt-8 text-[15px] leading-7 text-neutral-800 font-light">
            Life has a beautiful way of bringing people together when the time is right. What began
            as a simple meeting between two colleagues soon turned into meaningful conversations,
            shared laughter, and countless moments that brought us closer.
          </p>
          <p className="mt-6 text-[15px] leading-7 text-neutral-800 font-light">
            Neither of us imagined that our workplace would become the place where our greatest love
            story would begin. What started by chance became a connection we now cherish forever.
          </p>
        </Reveal>

        {/* Collage */}
        <Reveal delay={150} className="relative h-[440px] sm:h-[560px] lg:h-[640px] select-none">
          {/* envelope behind */}
          <img
            src={envelope}
            alt=""
            className="absolute right-[2%] top-[6%] w-[38%] rotate-6 opacity-90"
          />
          {/* book page scraps */}
          <img
            src={bookpage}
            alt=""
            className="absolute right-[6%] bottom-[16%] w-[26%] rotate-12 opacity-80"
          />
          {/* top polaroid */}
          <Polaroid
            src={lakeArch}
            alt="Couple at the lake arch"
            className="left-[16%] top-0 w-[52%] rotate-2"
            imgClass="aspect-[4/3]"
          />
          {/* bottom polaroids */}
          <Polaroid
            src={lakeCasual}
            alt="Couple by the lake"
            className="left-[4%] bottom-[8%] w-[42%] -rotate-3"
            imgClass="aspect-[3/4]"
          />
          <Polaroid
            src={wow}
            alt="Couple holding a WOW sign"
            className="right-[6%] bottom-[2%] w-[46%] rotate-2"
            imgClass="aspect-[4/3]"
          />
          {/* dried flowers & leaf */}
          <img src={flower1} alt="" className="absolute left-[9%] top-[2%] w-[13%] -rotate-6" />
          <img src={flower2} alt="" className="absolute left-[2%] top-[10%] w-[12%]" />
          <img src={leaf} alt="" className="absolute left-[42%] bottom-[6%] w-[9%] rotate-3" />
        </Reveal>
      </div>
    </section>
  )
}
