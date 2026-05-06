"use client"
import Image from "next/image"
import { Play, ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/artist-hero.jpg"
          alt="Tiki ziki"
          fill
          className="object-cover object-center scale-[1.03]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent z-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">

        {/* Genre pills */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {["AFROPOP", "AFROBEAT", "HIP-HOP"].map((genre) => (
            <span
              key={genre}
              className="text-[10px] tracking-[0.25em] text-primary font-bold border border-primary/40 px-4 py-1.5 bg-black/40 backdrop-blur-sm"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Giant stacked name */}
        <h1 className="font-black tracking-tighter leading-[0.88] mb-6 select-none">
          <span
            className="block text-[5rem] md:text-[9rem] lg:text-[13rem] text-white"
            style={{ textShadow: "0 4px 40px rgba(0,0,0,0.9)" }}
          >
            TIKI
          </span>
          <span
            className="block text-[5rem] md:text-[9rem] lg:text-[13rem] text-primary"
            style={{ textShadow: "0 0 80px oklch(0.78 0.12 65 / 0.55)" }}
          >
            ZIKI
          </span>
        </h1>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 bg-primary/50" />
          <p className="text-xs md:text-sm text-white/55 tracking-[0.3em] uppercase font-light">
            Sound of the Coast
          </p>
          <div className="h-px w-12 bg-primary/50" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#music"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_40px_oklch(0.78_0.12_65/0.45)]"
          >
            <Play className="h-4 w-4 fill-current" />
            Listen Now
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase text-white border border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white/60"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.4em] text-white/25 uppercase">Scroll</span>
        <Link href="#music" aria-label="Scroll down" className="animate-bounce block">
          <ChevronDown className="h-5 w-5 text-primary/40" />
        </Link>
      </div>
    </section>
  )
}
