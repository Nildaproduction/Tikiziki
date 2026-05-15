"use client"

import Link from "next/link"

export function StorePreview() {
  return (
    <section className="relative py-32 overflow-hidden bg-neutral-950 text-center">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 blur-[180px] rounded-full" />
      </div>

      <div className="container relative mx-auto px-6">

        <p className="text-primary tracking-[0.45em] text-xs font-bold uppercase mb-5">
          Store
        </p>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
          Merchandise
          <br />
          <span className="text-primary">Coming Soon</span>
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          Official apparel, vinyl, accessories and exclusive releases
          will be available in the store soon.
        </p>

        {/* Apple Glass Card */}
        <div
          className="
            relative
            max-w-3xl
            mx-auto

            overflow-hidden
            rounded-[40px]

            border border-white/20
            bg-white/[0.07]

            backdrop-blur-3xl
            supports-[backdrop-filter]:bg-white/[0.06]

            shadow-[0_20px_80px_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.4)]

            before:absolute
            before:inset-0
            before:rounded-[40px]
            before:bg-gradient-to-br
            before:from-white/30
            before:via-white/10
            before:to-transparent
            before:pointer-events-none

            after:absolute
            after:top-0
            after:left-0
            after:w-full
            after:h-[1px]
            after:bg-white/40
            after:pointer-events-none
          "
        >

          {/* Floating glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 blur-3xl rounded-full opacity-70" />

          <div className="relative z-10 px-10 py-16 md:px-16">

            <div
              className="
                inline-flex
                items-center
                justify-center

                w-20
                h-20

                rounded-3xl

                border border-white/20
                bg-white/[0.08]

                backdrop-blur-2xl

                shadow-[0_8px_30px_rgba(255,255,255,0.08)]

                mb-8
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18l-2 13H5L3 3zm2 0L4 1m15 2l1-2m-6 9a1 1 0 100 2 1 1 0 000-2zm-4 0a1 1 0 100 2 1 1 0 000-2z"
                />
              </svg>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-5">
              The Official Tiki Ziki Store
            </h3>

            <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Premium merchandise, limited edition drops, exclusive
              collections and official artist products are currently
              being prepared.
            </p>

            <Link
              href="/store"
              className="
                inline-flex
                items-center
                justify-center

                px-8
                py-4

                rounded-2xl

                border border-white/20
                bg-white/[0.08]

                backdrop-blur-2xl

                text-white
                font-medium

                shadow-[0_8px_30px_rgba(255,255,255,0.08)]

                hover:bg-white/[0.12]
                hover:border-white/30
                hover:-translate-y-1
                hover:scale-105

                transition-all
                duration-300
              "
            >
              Visit Store
            </Link>

          </div>
        </div>

      </div>
    </section>
  )
}
