"use client"

import { useEffect, useRef, useState } from "react"

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [skip, setSkip] = useState(false)

  const [energy, setEnergy] = useState(0)
  const [beat, setBeat] = useState(0)
  const [phase, setPhase] = useState(0)
  const [drop, setDrop] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const dataRef = useRef<Uint8Array | null>(null)

  const beats: number[] = []
  const lastBeatTime = useRef(0)
  const bpmRef = useRef(120)

  useEffect(() => {
    const audio = new Audio("/images/glitch.mp3")
    audio.volume = 0.7
    audio.crossOrigin = "anonymous"
    audioRef.current = audio

    const AudioContext = window.AudioContext || (window as any).webkitAudioContext
    const ctx = new AudioContext()

    const source = ctx.createMediaElementSource(audio)
    const analyser = ctx.createAnalyser()

    analyser.fftSize = 256
    const buffer = new Uint8Array(analyser.frequencyBinCount)

    source.connect(analyser)
    analyser.connect(ctx.destination)

    analyserRef.current = analyser
    dataRef.current = buffer

    const start = async () => {
      try {
        await ctx.resume()
        await audio.play()
      } catch {}
    }

    start()

    const detect = (t: number) => {
      if (!dataRef.current || !analyserRef.current) return

      analyserRef.current.getByteFrequencyData(dataRef.current)

      // ENERGY (overall sound level)
      let sum = 0
      for (let i = 0; i < 64; i++) sum += dataRef.current[i]

      const e = sum / 64 / 255
      setEnergy(e)

      // ONSET DETECTION (beat candidate)
      const now = performance.now()
      if (e > 0.6 && now - lastBeatTime.current > 250) {
        beats.push(now)

        if (beats.length > 8) beats.shift()

        // estimate BPM from interval avg
        if (beats.length > 2) {
          const intervals = beats.slice(1).map((b, i) => b - beats[i])
          const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length
          const bpm = Math.round(60000 / avg)
          bpmRef.current = bpm
        }

        lastBeatTime.current = now
        setBeat((b) => b + 1)
      }

      // PHASE (beat grid 1-2-3-4 simulation)
      const beatInterval = 60000 / bpmRef.current
      const p = (now % (beatInterval * 4)) / (beatInterval * 4)
      setPhase(p)

      // DROP DETECTION
      if (e > 0.8) setDrop(true)

      requestAnimationFrame(detect)
    }

    requestAnimationFrame(detect)

    const timer = setTimeout(() => onFinish(), 10000)

    return () => {
      audio.pause()
      ctx.close()
      clearTimeout(timer)
    }
  }, [onFinish])

  if (skip) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden flex items-center justify-center">

      {/* LENS DISTORTION FIELD */}
      <div
        className="absolute inset-0 lens"
        style={{
          transform: `scale(${1 + energy * 0.02})`,
        }}
      />

      {/* CAMERA SHAKE */}
      <div
        className="relative flex flex-col items-center"
        style={{
          transform: `
            translate(${energy * 10}px, ${energy * 6}px)
          `,
        }}
      >

        {/* LOGO FRACTURE SYSTEM */}
        <div className="relative">

          {/* LEFT FRACTURE */}
          <img
            src="/images/Tiki ziki Model.png"
            className="absolute w-64 md:w-96 opacity-40 -translate-x-2"
            style={{
              filter: "hue-rotate(0deg)",
              transform: `translateX(${-energy * 10}px)`,
            }}
          />

          {/* RIGHT FRACTURE */}
          <img
            src="/images/Tiki ziki Model.png"
            className="absolute w-64 md:w-96 opacity-40 translate-x-2"
            style={{
              filter: "hue-rotate(180deg)",
              transform: `translateX(${energy * 10}px)`,
            }}
          />

          {/* MAIN LOGO */}
          <img
            src="/images/Tiki ziki Model.png"
            className="
              w-64 md:w-96
              object-contain

              transition-all duration-75

              drop-shadow-[0_0_100px_rgba(255,255,255,0.3)]
            "
            style={{
              transform: `
                scale(${1 + energy * 0.6 + (drop ? 0.3 : 0)})
                rotate(${energy * 8}deg)
              `,
              filter: `
                brightness(${1 + energy * 1.5})
                contrast(${1 + energy})
              `,
            }}
          />
        </div>

        {/* BEAT GRID VISUAL (1-2-3-4) */}
        <div className="flex gap-2 mt-10">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-6 h-2 rounded-full bg-white/20"
              style={{
                opacity: phase * 4 > i ? 1 : 0.2,
                transform: phase * 4 > i ? "scale(1.2)" : "scale(1)",
              }}
            />
          ))}
        </div>

        {/* TEXT */}
        <div className="mt-6 text-white/60 tracking-[0.4em] text-xs uppercase">
          TIKIZIKI RECORD SYSTEM · BPM {bpmRef.current}
        </div>
      </div>

      {/* SKIP */}
      <button
        onClick={() => {
          setSkip(true)
          onFinish()
        }}
        className="absolute top-6 right-6 text-white/50 text-xs tracking-[0.3em]"
      >
        SKIP
      </button>

      {/* LENS EFFECT */}
      <style jsx global>{`
        .lens {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center,
            rgba(255,255,255,0.08),
            rgba(0,0,0,1)
          );
          filter: blur(2px);
          opacity: 0.6;
        }
      `}</style>
    </div>
  )
}
