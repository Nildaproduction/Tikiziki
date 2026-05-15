import { Mail } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tiki_zikigram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
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
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0z" />
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
      className="relative py-28 overflow-hidden bg-background"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-primary tracking-[0.3em] text-xs font-bold uppercase mb-4">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            {"Let's Work"}
            <br />
            <span className="text-primary">Together</span>
          </h2>

          <p className="text-muted-foreground mb-14 max-w-md mx-auto">
            For booking inquiries, press, collaborations, or merchandise —
            reach out below.
          </p>

          {/* Glass cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="
                  group
                  relative
                  p-8
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                  hover:bg-white/[0.08]
                  hover:border-primary/30
                  transition-all
                  duration-300
                  text-left
                "
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary backdrop-blur-md">
                    <Mail className="h-5 w-5" />
                  </div>

                  <h3 className="font-bold text-sm tracking-wide uppercase">
                    {card.title}
                  </h3>
                </div>

                <Link
                  href={`mailto:${card.email}`}
                  className="
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

          {/* Socials */}
          <div>
            <p className="text-xs text-muted-foreground mb-5 tracking-[0.2em] uppercase">
              Connect
            </p>

            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    flex
                    items-center
                    justify-center
                    w-14
                    h-14
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    text-muted-foreground
                    hover:text-primary
                    hover:border-primary/40
                    hover:scale-110
                    transition-all
                    duration-300
                    shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                  "
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
