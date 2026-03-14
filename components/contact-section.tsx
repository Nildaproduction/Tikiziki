import { Button } from "@/components/ui/button"
import { Mail, Instagram, Youtube, Music } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Music, href: "https://spotify.com", label: "Spotify" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary tracking-[0.3em] text-sm mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            {"Let's Work Together"}
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            For booking inquiries, press, collaborations, or just to say hello.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-card border border-border rounded-lg">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Booking & Management</h3>
              <Link
                href="mailto:booking@kofiasante.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                booking@kofiasante.com
              </Link>
            </div>
            <div className="p-8 bg-card border border-border rounded-lg">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Press & Media</h3>
              <Link
                href="mailto:press@kofiasante.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                press@kofiasante.com
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-sm text-muted-foreground mb-4">Connect on social</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <Button key={social.label} variant="outline" size="icon" asChild>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
