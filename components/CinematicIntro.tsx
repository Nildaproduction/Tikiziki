'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const INTRO_MS = 6_000   // 6 seconds then site opens

export default function CinematicIntro({ onComplete }: { onComplete?: () => void }) {
  const audioRef   = useRef<HTMLAudioElement | null>(null)
  const rafRef     = useRef<number>(0)
  const closingRef = useRef(false)

  const [closing, setClosing]   = useState(false)
  const [progress, setProgress] = useState(0)   // 0–1 over 6 s (drives loading bar)
  const [pulse, setPulse]       = useState(1)    // logo scale pulse (CSS-driven)

  // ── Close sequence ─────────────────────────────────────────────────────────
  const triggerClose = () => {
    if (closingRef.current) return
    closingRef.current = true
    setClosing(true)
    setTimeout(() => onComplete?.(), 1000)
  }

  // ── On mount: play audio + run progress timer ──────────────────────────────
  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 1
      audio.play().catch(() => {
        // Autoplay blocked — site still opens after 6 s
      })
    }

    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const p = Math.min(elapsed / INTRO_MS, 1)
      setProgress(p)

      // Gentle logo pulse every ~600 ms
      setPulse(1 + Math.sin(elapsed / 300) * 0.018)

      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        triggerClose()
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      if (audio) { audio.pause(); audio.currentTime = 0 }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#080808',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        opacity: closing ? 0 : 1,
        transition: closing ? 'opacity 1s ease-in' : 'none',
        pointerEvents: closing ? 'none' : 'auto',
      }}
    >
      {/* Hidden audio element — autoplay */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        ref={audioRef}
        src="/images/glitch.mp3"
        autoPlay
        playsInline
        preload="auto"
      />

      {/* Ambient glow that grows with progress */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse 50% 42% at 50% 50%,
          rgba(140,90,0,${progress * 0.25}) 0%, transparent 70%)`,
      }} />

      {/* Logo */}
      <div style={{
        transform: `scale(${pulse})`,
        transition: 'transform 0.15s ease-out',
        filter: `brightness(${1 + progress * 0.3})`,
      }}>
        <Image
          src="/images/Tiki ziki Model.png"
          alt="Tiki ziki"
          width={600}
          height={600}
          style={{ width: '62vmin', height: '62vmin', objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Apple-style loading bar */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        width: 'clamp(140px, 22vw, 250px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        {/* Track */}
        <div style={{
          width: '100%', height: '2px', borderRadius: '999px',
          background: 'rgba(255,255,255,0.08)',
          overflow: 'hidden', position: 'relative',
        }}>
          {/* Fill */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: `${progress * 100}%`,
            borderRadius: '999px',
            background: 'linear-gradient(90deg, rgba(200,145,35,0.8), rgba(255,215,70,1))',
            boxShadow: `0 0 8px rgba(255,200,50,${0.4 + progress * 0.5})`,
            transition: 'width 0.1s linear',
          }} />
        </div>
      </div>

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)',
      }} />
    </div>
  )
}
