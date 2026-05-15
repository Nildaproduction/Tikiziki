import { Mail } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tiki_zikigram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@tikizikitv",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/2HsQ019QVh3OKVEAfTry74",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
]

const contactCards = [
  {
    title: "Booking & Management",
    email: "booking@tikiziki.com",
  },
  {
    title: "Press & Media",
    email: "management@tikiziki.com",
  },
  {
    title: "Merchandise",
    email: "merch@tikiziki.com",
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-background"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[160px] rounded-full" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-primary tracking-[0.3em] text-xs font-bold uppercase mb-4">
            Get In Touch
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            {"Let's Work"}
            <br />
            <span className="text-primary">Together</span>
          </h2>

          <p className="text-muted-foreground mb-16 max-w-xl mx-auto text-lg">
            For booking inquiries, press, collaborations, or merchandise —
            connect below.
          </p>

          {/* Glass Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">

            {contactCards.map((card) => (
              <div
                key={card.title}
                className="
                  group
                  relative
                  overflow-hidden
                  p-8
                  rounded-[34px]

                  border border-white/20
                  bg-white/[0.08]

                  backdrop-blur-3xl
                  supports-[backdrop-filter]:bg-white/[0.07]

                  shadow-[0_20px_80px_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.35)]

                  before:absolute
                  before:inset-0
                  before:rounded-[34px]
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

                  hover:bg-white/[0.12]
                  hover:border-white/30
                  hover:-translate-y-3
                  hover:scale-[1.02]

                  hover:shadow-[0_30px_120px_rgba(255,255,255,0.12),0_10px_40px_rgba(0,0,0,0.45)]

                  transition-all
                  duration-500

                  text-left
                "
              >

                {/* Floating Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex items-center gap-4 mb-6">

                  <div
                    className="
                      p-3
                      rounded-2xl

                      border border-white/20
                      bg-white/[0.08]

                      backdrop-blur-xl
                      text-primary

                      shadow-[0_4px_20px_rgba(255,255,255,0.08)]

                      group-hover:scale-110
                      transition-all
                      duration-300
                    "
                  >
                    <Mail className="h-5 w-5" />
                  </div>

                  <h3 className="font-bold text-sm tracking-[0.2em] uppercase">
                    {card.title}
                  </h3>
                </div>

                <Link
                  href={`mailto:${card.email}`}
                  className="
                    relative
                    z-10
                    text-muted-foreground
                    hover:text-primary
                    transition-colors
                    text-sm
                    break-all
                  "
                >
                  {card.email}
                </Link>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div>
            <p className="text-xs text-muted-foreground mb-6 tracking-[0.3em] uppercase">
              Connect
            </p>

            <div className="flex justify-center gap-5">

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

                    w-14
                    h-14

                    rounded-2xl

                    border border-white/15
                    bg-white/[0.06]

                    backdrop-blur-2xl

                    text-muted-foreground

                    shadow-[0_10px_40px_rgba(255,255,255,0.06)]

                    hover:text-primary
                    hover:border-white/30
                    hover:bg-white/[0.1]

                    hover:-translate-y-1
                    hover:scale-110

                    transition-all
                    duration-300
                  "
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-40 pointer-events-none" />

                  <div className="relative z-10">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
