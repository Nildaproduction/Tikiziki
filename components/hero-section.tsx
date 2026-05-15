"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, ChevronDown } from "lucide-react"

const genres = ["AFROPOP", "AFROBEAT", "HIP-HOP"]

export function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >

      {/* Background */}
      <div className="absolute inset-0 z-0">

        <Image
          src="/images/artist-hero.jpg"
          alt="Tiki Ziki"
          fill
          priority
          className="
            object-cover
            object-center
            scale-[1.04]

            brightness-[0.65]
            contrast-[1.08]
            saturate-[1.05]
          "
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_100%] opacity-20" />

        {/* Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full" />

      </div>

      {/* Floating Accent Lines */}
      <div className="absolute inset-0 pointer-events-none z-[1]">

        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        <div className="absolute top-[25%] left-[-10%] w-[40%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-12" />

        <div className="absolute bottom-[18%] right-[-10%] w-[35%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -rotate-12" />

      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 md:pt-36">

        <div className="max-w-6xl mx-auto text-center">

          {/* Genres */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">

            {genres.map((genre) => (
              <span
                key={genre}
                className="
                  px-5
                  py-2

                  rounded-full

                  border border-white/10
                  bg-white/[0.05]

                  backdrop-blur-xl

                  text-[10px]
                  md:text-xs

                  tracking-[0.35em]
                  font-bold

                  text-primary

                  shadow-[0_4px_20px_rgba(255,255,255,0.04)]
                "
              >
                {genre}
              </span>
            ))}

          </div>

          {/* Title */}
          <div className="relative inline-block mb-8">

            {/* Glow Text */}
            <span
              className="
                absolute
                inset-0

                text-[3.8rem]
                md:text-[7rem]
                lg:text-[9rem]

                font-black
                tracking-[-0.08em]

                text-primary/10

                blur-2xl
                scale-110

                select-none
                pointer-events-none
              "
            >
              TIKI ZIKI
            </span>

            {/* Main Text */}
            <h1
              className="
                relative

                text-[3.8rem]
                md:text-[7rem]
                lg:text-[9rem]

                leading-[0.86]
                tracking-[-0.08em]

                font-black
                uppercase
              "
            >

              <span
                className="
                  block
                  text-white

                  drop-shadow-[0_0_40px_rgba(0,0,0,0.8)]
                "
              >
                TIKI
              </span>

              <span
                className="
                  block
                  text-primary

                  drop-shadow-[0_0_40px_oklch(0.78_0.12_65/0.45)]
                "
              >
                ZIKI
              </span>

            </h1>

          </div>

          {/* Tagline */}
          <div className="flex items-center justify-center gap-5 mb-10">

            <div className="w-14 h-px bg-gradient-to-r from-transparent to-primary/60" />

            <p
              className="
                text-[10px]
                md:text-xs

                uppercase

                tracking-[0.45em]

                text-white/60

                font-medium
              "
            >
              Sound of the Coast
            </p>

            <div className="w-14 h-px bg-gradient-to-l from-transparent to-primary/60" />

          </div>

          {/* Description */}
          <p
            className="
              max-w-2xl
              mx-auto
              mb-12

              text-white/55
              text-sm
              md:text-base

              leading-relaxed
            "
          >
            A fusion of Afrobeat, coastal rhythm and modern storytelling —
            shaping a cinematic African sound through music, visuals and culture.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

            {/* Primary */}
            <Link
              href="#music"
              className="
                group

                relative

                inline-flex
                items-center
                justify-center
                gap-3

                overflow-hidden

                px-10
                py-4

                rounded-2xl

                bg-primary

                text-primary-foreground

                text-xs
                font-bold
                uppercase

                tracking-[0.25em]

                shadow-[0_10px_50px_oklch(0.78_0.12_65/0.35)]

                hover:scale-105
                hover:shadow-[0_20px_80px_oklch(0.78_0.12_65/0.5)]

                transition-all
                duration-300
              "
            >

              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <Play className="relative z-10 h-4 w-4 fill-current" />

              <span className="relative z-10">
                Listen Now
              </span>

            </Link>

            {/* Secondary */}
            <Link
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center

                px-10
                py-4

                rounded-2xl

                border border-white/15
                bg-white/[0.05]

                backdrop-blur-xl

                text-white

                text-xs
                font-bold
                uppercase

                tracking-[0.25em]

                hover:bg-white/[0.08]
                hover:border-white/30
                hover:scale-105

                transition-all
                duration-300
              "
            >
              Book Now
            </Link>

          </div>

        </div>
      </div>

      {/* Scroll */}
      <div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2

          z-10

          flex
          flex-col
          items-center
          gap-3
        "
      >

        <span
          className="
            text-[9px]

            uppercase

            tracking-[0.45em]

            text-white/25
          "
        >
          Scroll
        </span>

        <Link
          href="#music"
          aria-label="Scroll down"
          className="
            flex
            items-center
            justify-center

            w-10
            h-10

            rounded-full

            border border-white/10
            bg-white/[0.04]

            backdrop-blur-xl

            animate-bounce
          "
        >
          <ChevronDown className="h-4 w-4 text-primary/60" />
        </Link>

      </div>
    </section>
  )
}
