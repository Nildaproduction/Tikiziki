import Link from "next/link"

const navLinks = [
  { href: "#music", label: "Music" },
  { href: "#videos", label: "Videos" },
  { href: "#press-kit", label: "Press Kit" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tiki_zikigram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@tikizikitv",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/2HsQ019QVh3OKVEAfTry74",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_100%] opacity-10" />

      </div>

      {/* Accent Line */}
      <div className="relative z-10 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 py-16">

        {/* Main Footer */}
        <div className="flex flex-col items-center text-center">

          {/* Logo */}
          <Link
            href="#home"
            className="
              group
              inline-flex
              items-center
              mb-6
            "
          >
            <span
              className="
                text-3xl
                md:text-4xl

                font-black
                tracking-[-0.08em]

                text-white

                transition-colors
                duration-300

                group-hover:text-primary
              "
            >
              TIKI ZIKI
            </span>

            <span
              className="
                text-primary
                text-4xl

                group-hover:scale-125

                transition-transform
                duration-300
              "
            >
              .
            </span>
          </Link>

          {/* Small Tagline */}
          <p
            className="
              max-w-md
              mb-10

              text-sm
              leading-relaxed

              text-white/45
            "
          >
            Afrobeat, coastal rhythm and cinematic African sound.
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-10">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  relative

                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  font-semibold

                  text-white/45

                  hover:text-white

                  transition-colors
                  duration-300

                  group
                "
              >
                {link.label}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1

                    h-px
                    w-full

                    bg-primary

                    scale-x-0
                    group-hover:scale-x-100

                    origin-left

                    transition-transform
                    duration-300
                  "
                />
              </Link>
            ))}

          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4 mb-12">

            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                  group

                  relative

                  flex
                  items-center
                  justify-center

                  w-11
                  h-11

                  rounded-2xl

                  border border-white/10
                  bg-white/[0.04]

                  backdrop-blur-xl

                  text-white/50

                  hover:text-primary
                  hover:border-primary/30
                  hover:bg-white/[0.06]
                  hover:scale-110

                  transition-all
                  duration-300
                "
              >

                <span
                  className="
                    absolute
                    inset-0

                    rounded-2xl

                    bg-gradient-to-br
                    from-white/10
                    to-transparent

                    opacity-0
                    group-hover:opacity-100

                    transition-opacity
                    duration-300
                  "
                />

                <span className="relative z-10">
                  {social.icon}
                </span>

              </Link>
            ))}

          </div>

          {/* Bottom */}
          <div className="w-full pt-8 border-t border-white/10">

            <p
              className="
                text-[11px]
                tracking-[0.18em]
                uppercase

                text-white/30
              "
            >
              © {new Date().getFullYear()} Tiki Ziki — Sound of the Coast
            </p>

          </div>

        </div>
      </div>
    </footer>
  )
}
