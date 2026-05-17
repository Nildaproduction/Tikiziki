'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'

const INTRO_DURATION_MS = 10_000
const FFT_SIZE = 2048
const DROP_THRESHOLD = 0.65
const DROP_SUSTAIN_MS = 1_000

export default function CinematicIntro({ onComplete }: { onComplete?: () => void }) {
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  const audioCtxRef  = useRef<AudioContext | null>(null)
  const analyserRef  = useRef<AnalyserNode | null>(null)
  const sourceRef    = useRef<AudioBufferSourceNode | null>(null)
  const rafRef       = useRef<number>(0)
  const timerRef     = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closingRef   = useRef(false)
  const dropSinceRef = useRef(0)
  const lastBeatRef  = useRef(0)

  // 'tap' = waiting for user gesture (required for AudioContext autoplay)
  // 'running' = audio + visuals active
  // 'closing' = fade out
  const [phase, setPhase]           = useState<'tap' | 'running' | 'closing'>('tap')
  const [energy, setEnergy]         = useState(0)
  const [bass, setBass]             = useState(0)
  const [beatStep, setBeatStep]     = useState(0)
  const [isDropping, setIsDropping] = useState(false)

  const triggerClose = useCallback(() => {
    if (closingRef.current) return
    closingRef.current = true
    setPhase('closing')
    setTimeout(() => onComplete?.(), 1200)
  }, [onComplete])

  // ── VHS canvas overlays ────────────────────────────────────────────────────
  const drawOverlays = useCallback((
    ctx: CanvasRenderingContext2D, w: number, h: number, e: number
  ) => {
    for (let y = 0; y < h; y += 4) {
      ctx.fillStyle = `rgba(0,0,0,${0.1 + e * 0.07})`
      ctx.fillRect(0, y, w, 1)
    }
    const vg = ctx.createRadialGradient(w / 2, h / 2, h * 0.25, w / 2, h / 2, h * 0.9)
    vg.addColorStop(0, 'rgba(0,0,0,0)')
    vg.addColorStop(1, `rgba(0,0,0,${0.55 + e * 0.3})`)
    ctx.fillStyle = vg
    ctx.fillRect(0, 0, w, h)
    const id = ctx.createImageData(w, h)
    for (let i = 0; i < id.data.length; i += 4) {
      const n = (Math.random() - 0.5) * 28 * (1 + e * 1.4)
      id.data[i] = id.data[i + 1] = id.data[i + 2] = 128 + n
      id.data[i + 3] = 7 + e * 10
    }
    ctx.putImageData(id, 0, 0)
  }, [])

  // ── Boot audio — must be called from inside a click handler ───────────────
  const startAudio = useCallback(async () => {
    try {
      const ctx = new AudioContext()
      audioCtxRef.current = ctx
      if (ctx.state === 'suspended') await ctx.resume()

      const analyser = ctx.createAnalyser()
      analyser.fftSize = FFT_SIZE
      analyser.smoothingTimeConstant = 0.82
      analyserRef.current = analyser
      analyser.connect(ctx.destination)

      const res = await fetch('/images/glitch.mp3')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const buf = await res.arrayBuffer()
      const decoded = await ctx.decodeAudioData(buf)

      const source = ctx.createBufferSource()
      source.buffer = decoded
      source.connect(analyser)
      source.start(0)
      sourceRef.current = source

      setPhase('running')

      const freqData = new Uint8Array(analyser.frequencyBinCount)
      const timeData = new Uint8Array(analyser.fftSize)
      let _step = 0
      let _drop = false

      const tick = () => {
        analyser.getByteFrequencyData(freqData)
        analyser.getByteTimeDomainData(timeData)

        let sum = 0
        for (let i = 0; i < timeData.length; i++) {
          const s = (timeData[i] - 128) / 128
          sum += s * s
        }
        const e = Math.sqrt(sum / timeData.length)

        let bSum = 0
        for (let i = 0; i < 10; i++) bSum += freqData[i]
        const b = bSum / (10 * 255)

        const now = performance.now()
        if (b > 0.5 && now - lastBeatRef.current > 220) {
          lastBeatRef.current = now
          _step = (_step + 1) % 4
          setBeatStep(_step)
        }

        if (e > DROP_THRESHOLD) {
          if (dropSinceRef.current === 0) dropSinceRef.current = now
          else if (now - dropSinceRef.current > DROP_SUSTAIN_MS) _drop = true
        } else {
          dropSinceRef.current = 0
          _drop = false
        }

        setEnergy(e)
        setBass(b)
        setIsDropping(_drop)

        const canvas = canvasRef.current
        if (canvas) {
          const c = canvas.getContext('2d')
          if (c) {
            canvas.width  = window.innerWidth
            canvas.height = window.innerHeight
            c.clearRect(0, 0, canvas.width, canvas.height)
            drawOverlays(c, canvas.width, canvas.height, e)
          }
        }

        rafRef.current = requestAnimationFrame(tick)
      }

      rafRef.current = requestAnimationFrame(tick)
      timerRef.current = setTimeout(triggerClose, INTRO_DURATION_MS)

    } catch (err) {
      console.error('[CinematicIntro] audio error:', err)
      setPhase('running')
      timerRef.current = setTimeout(triggerClose, INTRO_DURATION_MS)
    }
  }, [drawOverlays, triggerClose])

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current)
      if (timerRef.current) clearTimeout(timerRef.current)
      try { sourceRef.current?.stop() } catch (_) {}
      audioCtxRef.current?.close()
    }
  }, [])

  // ── Derived visual values ──────────────────────────────────────────────────
  const logoScale      = 1 + energy * (isDropping ? 0.2 : 0.1) + bass * 0.07
  const logoRotate     = (Math.random() - 0.5) * bass * (isDropping ? 3.5 : 1.2)
  const logoBrightness = 1 + energy * 0.55 + (isDropping ? 0.35 : 0)
  const shakeX         = (Math.random() - 0.5) * energy * (isDropping ? 16 : 6)
  const shakeY         = (Math.random() - 0.5) * energy * (isDropping ? 12 : 4)
  const glitchOff      = bass * (isDropping ? 26 : 9)

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#080808',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        opacity: phase === 'closing' ? 0 : 1,
        transition: phase === 'closing' ? 'opacity 1.2s ease-in' : 'none',
        pointerEvents: phase === 'closing' ? 'none' : 'auto',
        cursor: phase === 'tap' ? 'pointer' : 'default',
      }}
      onClick={phase === 'tap' ? startAudio : undefined}
    >

      {/* Ambient glow */}
      {phase === 'running' && (
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: isDropping
            ? `radial-gradient(ellipse 55% 45% at 50% 50%, rgba(180,110,0,${0.18 + energy * 0.28}) 0%, transparent 70%)`
            : `radial-gradient(ellipse 45% 38% at 50% 50%, rgba(100,60,0,${energy * 0.22}) 0%, transparent 70%)`,
        }} />
      )}

      {/* Shake + glitch wrapper */}
      <div style={{
        position: 'relative',
        transform: phase === 'running' ? `translate(${shakeX}px,${shakeY}px)` : 'none',
        transition: energy > 0.3 ? 'none' : 'transform 0.1s ease-out',
      }}>

        {/* RGB ghost LEFT */}
        {phase === 'running' && (
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            transform: `translateX(-${glitchOff}px)`,
            opacity: bass * 0.65,
            mixBlendMode: 'screen',
          }}>
            <Image src="/images/Tiki ziki Model.png" alt=""
              width={600} height={600}
              style={{ width: '60vmin', height: '60vmin', objectFit: 'contain',
                       filter: 'hue-rotate(200deg) saturate(3)' }}
              priority
            />
          </div>
        )}

        {/* RGB ghost RIGHT */}
        {phase === 'running' && (
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            transform: `translateX(${glitchOff}px)`,
            opacity: bass * 0.45,
            mixBlendMode: 'screen',
          }}>
            <Image src="/images/Tiki ziki Model.png" alt=""
              width={600} height={600}
              style={{ width: '60vmin', height: '60vmin', objectFit: 'contain',
                       filter: 'hue-rotate(330deg) saturate(4)' }}
              priority
            />
          </div>
        )}

        {/* MAIN LOGO — big, no text */}
        <div style={{
          transform: phase === 'running'
            ? `scale(${logoScale}) rotate(${logoRotate}deg)`
            : 'scale(1)',
          filter: phase === 'running'
            ? `brightness(${logoBrightness}) contrast(${1 + energy * 0.35})`
            : 'brightness(1)',
          transition: bass > 0.4 ? 'none' : 'transform 0.08s ease-out, filter 0.08s ease-out',
        }}>
          <Image
            src="/images/Tiki ziki Model.png"
            alt="Tiki ziki"
            width={600} height={600}
            style={{ width: '60vmin', height: '60vmin', objectFit: 'contain' }}
            priority
          />
        </div>
      </div>

      {/* TAP TO ENTER prompt */}
      {phase === 'tap' && (
        <div style={{
          position: 'absolute', bottom: '12%',
          left: '50%', transform: 'translateX(-50%)',
          textAlign: 'center',
          animation: 'tzPulse 1.8s ease-in-out infinite',
        }}>
          <style>{`
            @keyframes tzPulse {
              0%, 100% { opacity: 0.3; }
              50%       { opacity: 0.8; }
            }
          `}</style>
          <span style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: 'clamp(0.55rem, 1.4vw, 0.8rem)',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
          }}>
            Tap to enter
          </span>
        </div>
      )}

      {/* Apple-style loading bar */}
      {phase === 'running' && (
        <div style={{
          position: 'absolute', bottom: '10%',
          left: '50%', transform: 'translateX(-50%)',
          width: 'clamp(140px, 22vw, 250px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.5rem',
        }}>
          <div style={{
            width: '100%', height: '2px', borderRadius: '999px',
            background: 'rgba(255,255,255,0.08)',
            overflow: 'hidden', position: 'relative',
          }}>
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: `${Math.min(energy * 350, 100)}%`,
              borderRadius: '999px',
              background: isDropping
                ? 'linear-gradient(90deg,rgba(255,170,0,.9),rgba(255,235,80,1))'
                : 'linear-gradient(90deg,rgba(200,145,35,.75),rgba(255,210,70,.95))',
              boxShadow: `0 0 ${isDropping ? 14 : 6}px rgba(255,200,50,${isDropping ? .9 : energy * .7})`,
              transition: energy > 0.2 ? 'none' : 'width 0.12s ease-out',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: `rgba(255,255,255,${bass > 0.48 ? bass * 0.3 : 0})`,
              transition: bass > 0.48 ? 'none' : 'background 0.14s ease-out',
            }} />
          </div>
          <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{
                width:  i === beatStep ? '5px' : '3px',
                height: i === beatStep ? '5px' : '3px',
                borderRadius: '50%',
                background: i === beatStep
                  ? `rgba(255,210,65,${0.85 + energy * 0.15})`
                  : 'rgba(255,255,255,0.18)',
                boxShadow: i === beatStep ? '0 0 5px rgba(255,200,55,0.9)' : 'none',
                transition: 'all 0.05s',
              }} />
            ))}
          </div>
        </div>
      )}

      {/* Drop flash */}
      {isDropping && (
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `rgba(255,170,0,${energy * 0.065})`,
          mixBlendMode: 'overlay',
        }} />
      )}

      {/* VHS canvas */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0,
        pointerEvents: 'none', mixBlendMode: 'overlay', opacity: 0.55,
      }} />

      {/* Skip button */}
      {phase === 'running' && (
        <button
          onClick={triggerClose}
          style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.18)',
            color: 'rgba(255,255,255,0.35)',
            fontSize: '0.6rem', letterSpacing: '0.2em',
            padding: '0.35rem 0.75rem',
            cursor: 'pointer', textTransform: 'uppercase', fontFamily: 'monospace',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.35)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
          }}
        >
          Skip ›
        </button>
      )}
    </div>
  )
}
