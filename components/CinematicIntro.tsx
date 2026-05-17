'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'

// ─── Types ───────────────────────────────────────────────────────────────────
interface AudioState {
  energy: number        // 0–1  overall RMS volume
  bass: number          // 0–1  low-freq impact
  bpm: number           // estimated beats per minute
  beatStep: number      // 0-3  (1-2-3-4 grid)
  isDropping: boolean   // sustained high-energy state
}

// ─── Constants ────────────────────────────────────────────────────────────────
const INTRO_DURATION_MS = 10_000
const FFT_SIZE = 2048
const DROP_THRESHOLD = 0.72      // energy level that triggers DROP
const DROP_SUSTAIN_MS = 1_200    // must stay above threshold this long

// ─── Component ────────────────────────────────────────────────────────────────
export default function CinematicIntro({ onComplete }: { onComplete?: () => void }) {
  const canvasRef       = useRef<HTMLCanvasElement>(null)
  const audioCtxRef     = useRef<AudioContext | null>(null)
  const analyserRef     = useRef<AnalyserNode | null>(null)
  const sourceRef       = useRef<AudioBufferSourceNode | null>(null)
  const rafRef          = useRef<number>(0)
  const dropTimerRef    = useRef<number>(0)
  const beatTimesRef    = useRef<number[]>([])
  const lastBeatRef     = useRef<number>(0)
  const closingRef      = useRef<boolean>(false)

  const [audioState, setAudioState] = useState<AudioState>({
    energy: 0, bass: 0, bpm: 120, beatStep: 0, isDropping: false,
  })
  const [phase, setPhase] = useState<'loading' | 'running' | 'closing'>('loading')
  const [dropTriggered, setDropTriggered] = useState(false)

  // ── Kick / beat detection ──────────────────────────────────────────────────
  const detectBeat = useCallback((bass: number, now: number) => {
    if (bass > 0.55 && now - lastBeatRef.current > 200) {
      lastBeatRef.current = now
      beatTimesRef.current.push(now)
      if (beatTimesRef.current.length > 8) beatTimesRef.current.shift()

      // estimate BPM from last 8 beat intervals
      if (beatTimesRef.current.length >= 2) {
        const intervals: number[] = []
        for (let i = 1; i < beatTimesRef.current.length; i++) {
          intervals.push(beatTimesRef.current[i] - beatTimesRef.current[i - 1])
        }
        const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length
        const bpm = Math.round(60_000 / avg)
        return Math.min(Math.max(bpm, 60), 200)
      }
    }
    return null
  }, [])

  // ── Canvas VHS / lens overlay ─────────────────────────────────────────────
  const drawOverlays = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number, energy: number) => {
    // Scanlines
    ctx.save()
    for (let y = 0; y < h; y += 4) {
      ctx.fillStyle = `rgba(0,0,0,${0.12 + energy * 0.08})`
      ctx.fillRect(0, y, w, 1)
    }

    // Radial vignette
    const vg = ctx.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, h * 0.85)
    vg.addColorStop(0, 'rgba(0,0,0,0)')
    vg.addColorStop(1, `rgba(0,0,0,${0.6 + energy * 0.25})`)
    ctx.fillStyle = vg
    ctx.fillRect(0, 0, w, h)

    // VHS noise grain
    const imgData = ctx.createImageData(w, h)
    for (let i = 0; i < imgData.data.length; i += 4) {
      const n = (Math.random() - 0.5) * 30 * (1 + energy * 1.5)
      imgData.data[i]     = 128 + n
      imgData.data[i + 1] = 128 + n
      imgData.data[i + 2] = 128 + n
      imgData.data[i + 3] = 8 + energy * 12
    }
    ctx.putImageData(imgData, 0, 0)
    ctx.restore()
  }, [])

  // ── Main audio bootstrap ───────────────────────────────────────────────────
  const startAudio = useCallback(async () => {
    try {
      const ctx = new AudioContext()
      audioCtxRef.current = ctx

      const analyser = ctx.createAnalyser()
      analyser.fftSize = FFT_SIZE
      analyser.smoothingTimeConstant = 0.8
      analyserRef.current = analyser
      analyser.connect(ctx.destination)

      const res = await fetch('/images/glitch.mp3')
      const buf = await res.arrayBuffer()
      const decoded = await ctx.decodeAudioData(buf)

      const source = ctx.createBufferSource()
      source.buffer = decoded
      source.connect(analyser)
      source.start(0)
      sourceRef.current = source

      setPhase('running')

      // ── animation loop ────────────────────────────────────────────────────
      const freqData  = new Uint8Array(analyser.frequencyBinCount)
      const timeData  = new Uint8Array(analyser.fftSize)

      let beatStep    = 0
      let bpm         = 120
      let isDropping  = false
      let dropHighSince = 0

      const tick = () => {
        analyser.getByteFrequencyData(freqData)
        analyser.getByteTimeDomainData(timeData)

        // RMS energy
        let sum = 0
        for (let i = 0; i < timeData.length; i++) {
          const s = (timeData[i] - 128) / 128
          sum += s * s
        }
        const energy = Math.sqrt(sum / timeData.length)

        // Bass (bins 0-10 ≈ 0-430 Hz)
        let bassSum = 0
        for (let i = 0; i < 10; i++) bassSum += freqData[i]
        const bass = bassSum / (10 * 255)

        const now = performance.now()

        // BPM detection
        const detectedBpm = detectBeat(bass, now)
        if (detectedBpm) {
          bpm = detectedBpm
          beatStep = (beatStep + 1) % 4
        }

        // Drop detection
        if (energy > DROP_THRESHOLD) {
          if (dropHighSince === 0) dropHighSince = now
          else if (now - dropHighSince > DROP_SUSTAIN_MS) {
            isDropping = true
            setDropTriggered(true)
          }
        } else {
          dropHighSince = 0
          isDropping = false
        }

        setAudioState({ energy, bass, bpm, beatStep, isDropping })

        // Canvas overlays
        const canvas = canvasRef.current
        if (canvas) {
          const ctx2d = canvas.getContext('2d')
          if (ctx2d) {
            canvas.width  = window.innerWidth
            canvas.height = window.innerHeight
            ctx2d.clearRect(0, 0, canvas.width, canvas.height)
            drawOverlays(ctx2d, canvas.width, canvas.height, energy)
          }
        }

        rafRef.current = requestAnimationFrame(tick)
      }

      rafRef.current = requestAnimationFrame(tick)

      // Auto-close after INTRO_DURATION_MS
      dropTimerRef.current = window.setTimeout(() => {
        triggerClose()
      }, INTRO_DURATION_MS)

    } catch (err) {
      console.error('Audio init failed:', err)
      // Fallback: run visually without audio
      setPhase('running')
      dropTimerRef.current = window.setTimeout(() => triggerClose(), INTRO_DURATION_MS)
    }
  }, [detectBeat, drawOverlays])

  const triggerClose = useCallback(() => {
    if (closingRef.current) return
    closingRef.current = true
    setPhase('closing')
    setTimeout(() => onComplete?.(), 1_200)
  }, [onComplete])

  // Bootstrap on mount
  useEffect(() => {
    startAudio()
    return () => {
      cancelAnimationFrame(rafRef.current)
      clearTimeout(dropTimerRef.current)
      sourceRef.current?.stop()
      audioCtxRef.current?.close()
    }
  }, [startAudio])

  // ── Derived visual values ──────────────────────────────────────────────────
  const { energy, bass, bpm, beatStep, isDropping } = audioState

  const logoScale    = 1 + energy * (isDropping ? 0.22 : 0.12) + bass * 0.08
  const logoRotate   = (Math.random() - 0.5) * bass * (isDropping ? 4 : 1.5)
  const logoBrightness = 1 + energy * 0.6 + (isDropping ? 0.4 : 0)
  const shakeX       = (Math.random() - 0.5) * energy * (isDropping ? 18 : 7)
  const shakeY       = (Math.random() - 0.5) * energy * (isDropping ? 14 : 5)
  const glitchOffset = bass * (isDropping ? 28 : 10)

  const containerStyle: React.CSSProperties = {
    transform: `translate(${shakeX}px, ${shakeY}px)`,
    transition: energy > 0.3 ? 'none' : 'transform 0.1s ease-out',
  }

  const logoStyle: React.CSSProperties = {
    transform: `scale(${logoScale}) rotate(${logoRotate}deg)`,
    filter: `brightness(${logoBrightness}) contrast(${1 + energy * 0.4})`,
    transition: bass > 0.4 ? 'none' : 'transform 0.08s ease-out, filter 0.08s ease-out',
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div
      className="cinematic-intro"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#080808',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        opacity: phase === 'closing' ? 0 : 1,
        transition: phase === 'closing' ? 'opacity 1.2s cubic-bezier(0.4,0,1,1)' : 'none',
        pointerEvents: phase === 'closing' ? 'none' : 'auto',
      }}
    >
      {/* ── Ambient glow background ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: isDropping
          ? `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(180,120,0,${0.15 + energy * 0.25}) 0%, transparent 70%)`
          : `radial-gradient(ellipse 50% 40% at 50% 50%, rgba(100,60,0,${energy * 0.2}) 0%, transparent 70%)`,
        transition: 'background 0.15s',
      }} />

      {/* ── Main content (shake wrapper) ── */}
      <div style={{ position: 'relative', ...containerStyle }}>

        {/* RGB fracture — LEFT ghost */}
        <div style={{
          position: 'absolute', inset: 0,
          transform: `translateX(-${glitchOffset}px)`,
          opacity: bass * 0.7,
          mixBlendMode: 'screen',
          filter: 'hue-rotate(0deg) saturate(3)',
          pointerEvents: 'none',
        }}>
          <Image
            src="/images/Tiki ziki Model.png"
            alt=""
            width={480}
            height={480}
            style={{ objectFit: 'contain', width: '38vmin', height: '38vmin', filter: 'hue-rotate(200deg)' }}
            priority
          />
        </div>

        {/* RGB fracture — RIGHT ghost */}
        <div style={{
          position: 'absolute', inset: 0,
          transform: `translateX(${glitchOffset}px)`,
          opacity: bass * 0.5,
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }}>
          <Image
            src="/images/Tiki ziki Model.png"
            alt=""
            width={480}
            height={480}
            style={{ objectFit: 'contain', width: '38vmin', height: '38vmin', filter: 'hue-rotate(330deg) saturate(4)' }}
            priority
          />
        </div>

        {/* ── Main logo ── */}
        <div style={logoStyle}>
          <Image
            src="/images/Tiki ziki Model.png"
            alt="Tiki ziki"
            width={480}
            height={480}
            style={{ objectFit: 'contain', width: '38vmin', height: '38vmin' }}
            priority
          />
        </div>
      </div>

      {/* ── Artist name ── */}
      <div style={{
        position: 'absolute',
        bottom: '22%',
        left: '50%',
        transform: `translateX(-50%) scale(${1 + energy * 0.06})`,
        textAlign: 'center',
        letterSpacing: '0.35em',
        fontFamily: 'var(--font-serif, Georgia, serif)',
        transition: 'transform 0.1s',
      }}>
        <div style={{
          fontSize: 'clamp(1rem, 3vw, 1.8rem)',
          color: `rgba(255,220,120,${0.55 + energy * 0.45})`,
          textTransform: 'uppercase',
          textShadow: isDropping
            ? `0 0 40px rgba(255,200,60,0.9), 0 0 80px rgba(255,150,0,0.6)`
            : `0 0 20px rgba(255,200,60,${energy * 0.7})`,
          transition: 'color 0.1s, text-shadow 0.15s',
        }}>
          Tiki Ziki
        </div>
        <div style={{
          fontSize: 'clamp(0.5rem, 1.2vw, 0.75rem)',
          color: `rgba(200,180,120,${0.3 + energy * 0.4})`,
          letterSpacing: '0.6em',
          marginTop: '0.4em',
          textTransform: 'uppercase',
        }}>
          Afropop · Afrobeat
        </div>
      </div>

      {/* ── Apple-style audio energy loading bar ── */}
      <div style={{
        position: 'absolute',
        bottom: '12%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.55rem',
        width: 'clamp(160px, 28vw, 300px)',
      }}>
        {/* Track */}
        <div style={{
          width: '100%',
          height: '2px',
          borderRadius: '999px',
          background: 'rgba(255,255,255,0.1)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Fill — driven by energy */}
          <div style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: `${Math.min(energy * 320, 100)}%`,
            borderRadius: '999px',
            background: isDropping
              ? `linear-gradient(90deg, rgba(255,180,0,0.9), rgba(255,230,80,1))`
              : `linear-gradient(90deg, rgba(200,150,40,0.7), rgba(255,210,80,0.95))`,
            boxShadow: isDropping
              ? `0 0 10px rgba(255,200,50,0.9), 0 0 24px rgba(255,160,0,0.5)`
              : `0 0 6px rgba(255,200,50,${energy * 0.8})`,
            transition: energy > 0.25 ? 'none' : 'width 0.12s ease-out',
          }} />

          {/* Beat-pulse flash — fires on kick */}
          <div style={{
            position: 'absolute',
            left: 0, top: 0, right: 0, bottom: 0,
            borderRadius: '999px',
            background: `rgba(255,255,255,${bass > 0.5 ? bass * 0.35 : 0})`,
            transition: bass > 0.5 ? 'none' : 'background 0.15s ease-out',
          }} />
        </div>

        {/* Beat step dots — compact, below bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              style={{
                width: i === beatStep ? '5px' : '3px',
                height: i === beatStep ? '5px' : '3px',
                borderRadius: '50%',
                background: i === beatStep
                  ? `rgba(255,210,70,${0.8 + energy * 0.2})`
                  : `rgba(255,255,255,0.2)`,
                boxShadow: i === beatStep
                  ? `0 0 6px rgba(255,200,60,0.9)`
                  : 'none',
                transition: 'all 0.05s',
              }}
            />
          ))}
          <div style={{
            marginLeft: '0.3rem',
            fontSize: '0.5rem',
            color: 'rgba(255,255,255,0.2)',
            fontFamily: 'monospace',
            letterSpacing: '0.05em',
          }}>
            {bpm}
          </div>
        </div>
      </div>

      {/* ── DROP flash overlay ── */}
      {isDropping && (
        <div style={{
          position: 'absolute', inset: 0,
          background: `rgba(255,180,0,${energy * 0.07})`,
          pointerEvents: 'none',
          mixBlendMode: 'overlay',
        }} />
      )}

      {/* ── VHS / lens canvas overlay ── */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute', inset: 0,
          pointerEvents: 'none',
          mixBlendMode: 'overlay',
          opacity: 0.6,
        }}
      />

      {/* ── Skip button ── */}
      {phase === 'running' && (
        <button
          onClick={triggerClose}
          style={{
            position: 'absolute',
            top: '1.5rem', right: '1.5rem',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            padding: '0.4rem 0.8rem',
            cursor: 'pointer',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { (e.target as HTMLButtonElement).style.color = 'rgba(255,255,255,0.8)'; (e.target as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.5)' }}
          onMouseLeave={e => { (e.target as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)'; (e.target as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)' }}
        >
          Skip ›
        </button>
      )}
    </div>
  )
}
