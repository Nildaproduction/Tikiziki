'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const INTRO_MS   = 4_000   // total intro length
const REVEAL_MS  = 3_000   // when glassmorphism starts showing website beneath

export default function CinematicIntro({ onComplete }: { onComplete?: () => void }) {
  const audioRef   = useRef<HTMLAudioElement | null>(null)
  const rafRef     = useRef<number>(0)
  const startRef   = useRef<number>(0)
  const closingRef = useRef(false)

  const [phase, setPhase]       = useState<'tap' | 'running' | 'closing'>('tap')
  const [progress, setProgress] = useState(0)   // 0–1 over 4 s
  const [pulse, setPulse]       = useState(1)
  const [glassOpacity, setGlassOpacity] = useState(0) // 0→1 from second 3

  const triggerClose = () => {
    if (closingRef.current) return
    closingRef.current = true
    setPhase('closing')
    setTimeout(() => onComplete?.(), 800)
  }

  // Called on the first tap — this is inside a user gesture so audio is allowed
  const handleTap = () => {
    if (phase !== 'tap') return

    const audio = audioRef.current
    if (audio) {
      audio.volume = 1
      audio.play().catch(err => console.warn('[audio]', err))
    }

    setPhase('running')
    startRef.current = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startRef.current
      const p = Math.min(elapsed / INTRO_MS, 1)
      setProgress(p)
      setPulse(1 + Math.sin(elapsed / 280) * 0.02)

      // Glassmorphism starts fading in at second 3
      if (elapsed > REVEAL_MS) {
        const g = Math.min((elapsed - REVEAL_MS) / (INTRO_MS - REVEAL_MS), 1)
        setGlassOpacity(g)
      }

      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        triggerClose()
      }
    }

    rafRef.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current)
      try {
        audioRef.current?.pause()
        if (audioRef.current) audioRef.current.currentTime = 0
      } catch (_) {}
    }
  }, [])

  const isRunning = phase === 'running'
  const isClosing = phase === 'closing'

  return (
    <>
      {/* ── Glass layer — website bleeds through from second 3 ── */}
      {glassOpacity > 0 && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9998,
            backdropFilter: `blur(${24 - glassOpacity * 20}px) saturate(${1 + glassOpacity * 0.6})`,
            WebkitBackdropFilter: `blur(${24 - glassOpacity * 20}px) saturate(${1 + glassOpacity * 0.6})`,
            background: `rgba(8,8,8,${0.92 - glassOpacity * 0.92})`,
            pointerEvents: 'none',
            transition: 'none',
          }}
        />
      )}

      {/* ── Main intro overlay ── */}
      <div
        onClick={handleTap}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: phase === 'tap' ? '#080808' : 'transparent',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
          opacity: isClosing ? 0 : 1,
          transition: isClosing ? 'opacity 0.8s ease-in' : 'none',
          pointerEvents: isClosing ? 'none' : 'auto',
          cursor: phase === 'tap' ? 'pointer' : 'default',
        }}
      >
        {/* Hidden audio */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio
          ref={audioRef}
          src="/images/glitch.mp3"
          preload="auto"
          playsInline
        />

        {/* Ambient glow */}
        {isRunning && (
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: `radial-gradient(ellipse 50% 42% at 50% 50%,
              rgba(140,90,0,${0.08 + progress * 0.22}) 0%, transparent 70%)`,
          }} />
        )}

        {/* Logo — hidden once glass reveal is full */}
        <div style={{
          transform: `scale(${isRunning ? pulse : 1})`,
          filter: `brightness(${1 + progress * 0.3})`,
          opacity: isRunning ? 1 - glassOpacity * 0.85 : 1,
          transition: 'opacity 0.1s, filter 0.15s',
        }}>
          <Image
            src="/images/Tiki ziki Model.png"
            alt="Tiki ziki"
            width={600} height={600}
            style={{ width: '62vmin', height: '62vmin', objectFit: 'contain' }}
            priority
          />
        </div>

        {/* TAP PROMPT */}
        {phase === 'tap' && (
          <div style={{
            position: 'absolute', bottom: '14%',
            textAlign: 'center',
            animation: 'tzPulse 1.6s ease-in-out infinite',
          }}>
            <style>{`
              @keyframes tzPulse {
                0%,100%{opacity:.25} 50%{opacity:.85}
              }
            `}</style>
            <span style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: 'clamp(0.6rem, 1.5vw, 0.82rem)',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
            }}>
              Tap anywhere
            </span>
          </div>
        )}

        {/* Loading bar */}
        {isRunning && (
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
                boxShadow: `0 0 8px rgba(255,200,50,${0.4 + progress * 0.55})`,
                transition: 'width 0.08s linear',
              }} />
            </div>
          </div>
        )}

        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 35%, rgba(0,0,0,0.6) 100%)',
          opacity: isRunning ? 1 - glassOpacity * 0.8 : 1,
        }} />
      </div>
    </>
  )
}
