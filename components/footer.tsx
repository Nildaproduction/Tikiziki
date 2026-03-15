import Link from "next/link"
import { Instagram, Youtube, Music } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "instagram.com/tiki_zikigram?igsh=MTFtdzJjeTB4Mjd2Zw==", label: "Instagram" },
  { icon: Youtube, href: "www.youtube.com/@TikizikiTV", label: "YouTube" },
  { icon: Music, href: "https://open.spotify.com/artist/2HsQ019QVh3OKVEAfTry74?si=ePngPr07TXajhhT3rSFdcg", label: "Spotify" },
]

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#music", label: "Music" },
  { href: "#videos", label: "Videos" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="#home" className="text-2xl font-bold tracking-tight">
            TIKI ZIKI<span className="text-primary">.</span>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tiki ziki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
