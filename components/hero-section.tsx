"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/artist-hero.jpg"
          alt="Kofi Asante"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-primary tracking-[0.3em] text-sm mb-4 animate-fade-in">
          AFROPOP • AFROBEAT • HIP-HOP
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
          TIKI ZIKI
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 text-pretty">
          Bridging cultures through rhythm. A sonic journey from Lagos to the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2 px-8" asChild>
            <Link href="#music">
              <Play className="h-5 w-5" />
              Listen Now
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
            <Link href="#contact">
              Book Now
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link href="#music" aria-label="Scroll to music section">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </Link>
      </div>
    </section>
  )
}
