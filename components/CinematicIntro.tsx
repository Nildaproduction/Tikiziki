'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const INTRO_MS  = 6_000   // total intro
const GLASS_MS  = 4_000   // glassmorphism starts at second 4

export default function CinematicIntro({ onComplete }: { onComplete?: () => void }) {
  const audioRef   = useRef<HTMLAudioElement | null>(null)
  const rafRef     = useRef<number>(0)
  const closingRef = useRef(false)
  const tappedRef  = useRef(false)

  const [progress, setProgress]         = useState(0)
  const [glassOpacity, setGlassOpacity] = useState(0)
  const [pulse, setPulse]               = useState(1)
  const [closing, setClosing]           = useState(false)

  const triggerClose = () => {
    if (closingRef.current) return
    closingRef.current = true
    setClosing(true)
    setTimeout(() => onComplete?.(), 900)
  }

  // Try to play sound on tap anywhere — not required
  const handleTap = () => {
    if (tappedRef.current) return
    tappedRef.current = true
    audioRef.current?.play().catch(() => {})
  }

  useEffect(() => {
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const p = Math.min(elapsed / INTRO_MS, 1)

      setProgress(p)
      setPulse(1 + Math.sin(elapsed / 300) * 0.02)

      // Glass starts at second 4
      if (elapsed > GLASS_MS) {
        const g = Math.min((elapsed - GLASS_MS) / (INTRO_MS - GLASS_MS), 1)
        setGlassOpacity(g)
      }

      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        triggerClose()
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      try { audioRef.current?.pause() } catch (_) {}
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Glass layer — website shows through from second 4 */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9998,
        backdropFilter:         `blur(${(1 - glassOpacity) * 28}px) saturate(${1 + glassOpacity * 0.5})`,
        WebkitBackdropFilter:   `blur(${(1 - glassOpacity) * 28}px) saturate(${1 + glassOpacity * 0.5})`,
        background:             `rgba(8,8,8,${(1 - glassOpacity) * 0.94})`,
        opacity:                closing ? 0 : 1,
        transition:             closing ? 'opacity 0.9s ease-in' : 'none',
        pointerEvents:          'none',
      }} />

      {/* Intro overlay — logo + bar — tap anywhere for sound */}
      <div
        onClick={handleTap}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
          opacity: closing ? 0 : 1,
          transition: closing ? 'opacity 0.9s ease-in' : 'none',
          pointerEvents: closing ? 'none' : 'auto',
          cursor: 'default',
          background: 'transparent',
        }}
      >
        {/* Audio — plays only if user taps */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio ref={audioRef} src="/images/glitch.mp3" preload="auto" playsInline />

        {/* Ambient glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `radial-gradient(ellipse 50% 42% at 50% 50%,
            rgba(140,90,0,${0.06 + progress * 0.2}) 0%, transparent 70%)`,
          opacity: 1 - glassOpacity,
        }} />

        {/* Logo */}
        <div style={{
          transform: `scale(${pulse})`,
          filter: `brightness(${1 + progress * 0.25})`,
          opacity: 1 - glassOpacity * 0.9,
          transition: 'opacity 0.15s, filter 0.15s',
        }}>
          <Image
            src="/images/Tiki ziki Model.png"
            alt="Tiki ziki"
            width={600} height={600}
            style={{ width: '62vmin', height: '62vmin', objectFit: 'contain' }}
            priority
          />
        </div>


        {/* Tap anywhere prompt */}
        <div style={{
          position: 'absolute', bottom: '18%',
          left: '50%', transform: 'translateX(-50%)',
          opacity: tappedRef.current ? 0 : 1 - glassOpacity,
          transition: 'opacity 0.4s',
          animation: 'tzPulse 1.8s ease-in-out infinite',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}>
          <style>{`@keyframes tzPulse{0%,100%{opacity:.25}50%{opacity:.8}}`}</style>
          <span style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: 'clamp(0.55rem, 1.3vw, 0.75rem)',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
          }}>
            Tap anywhere for sound
          </span>
        </div>
        {/* Apple loading bar */}
        <div style={{
          position: 'absolute', bottom: '10%',
          width: 'clamp(140px, 22vw, 240px)',
          opacity: 1 - glassOpacity,
        }}>
          <div style={{
            width: '100%', height: '2px', borderRadius: '999px',
            background: 'rgba(255,255,255,0.08)',
            overflow: 'hidden', position: 'relative',
          }}>
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: `${progress * 100}%`,
              borderRadius: '999px',
              background: 'linear-gradient(90deg,rgba(200,145,35,.85),rgba(255,215,70,1))',
              boxShadow: `0 0 8px rgba(255,200,50,${0.35 + progress * 0.55})`,
              transition: 'width 0.08s linear',
            }} />
          </div>
        </div>

        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 35%, rgba(0,0,0,0.6) 100%)',
          opacity: 1 - glassOpacity,
        }} />

      </div>
    </>
  )
}
