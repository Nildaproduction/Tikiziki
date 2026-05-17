'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

const CinematicIntro = dynamic(() => import('./CinematicIntro'), {
  ssr: false,
})

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone && (
        <CinematicIntro onComplete={() => setIntroDone(true)} />
      )}
      <div
        style={{
          opacity: introDone ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
        {children}
      </div>
    </>
  )
}
