import { useState } from 'react'
import Hero from '../sections/Hero'
import MusicBar from '../sections/MusicBar'
import Story from '../sections/Story'
import Promise from '../sections/Promise'
import Events from '../sections/Events'
import Info from '../sections/Info'
import Finale from '../sections/Finale'
import EnvelopeIntro from '../sections/EnvelopeIntro'

export default function Home() {
  const [opened, setOpened] = useState(false)

  return (
    <main className="bg-[#eae4cc]">
      {!opened && <EnvelopeIntro onOpen={() => setOpened(true)} />}
      <MusicBar autoStart={opened} />
      <div
        className={`transition-opacity duration-700 ${
          opened ? 'opacity-100' : 'opacity-0 h-[100svh] overflow-hidden'
        }`}
        aria-hidden={!opened}
      >
        <Hero />
        <Story />
        <Promise />
        <Events />
        <Info />
        <Finale />
      </div>
    </main>
  )
}
