import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const releases = [
  {
    title: "Golden Hour",
    type: "Single",
    year: "2025",
    cover: "/images/album-1.jpg",
    spotify: "https://spotify.com",
    audiomack: "https://audiomack.com",
    youtube: "https://youtube.com",
  },
  {
    title: "Lagos Nights",
    type: "EP",
    year: "2024",
    cover: "/images/album-2.jpg",
    spotify: "https://spotify.com",
    audiomack: "https://audiomack.com",
    youtube: "https://youtube.com",
  },
  {
    title: "Roots & Wings",
    type: "Album",
    year: "2024",
    cover: "/images/album-3.jpg",
    spotify: "https://spotify.com",
    audiomack: "https://audiomack.com",
    youtube: "https://youtube.com",
  },
]

export function MusicSection() {
  return (
    <section id="music" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] text-sm mb-4">DISCOGRAPHY</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Latest Releases</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release) => (
            <div
              key={release.title}
              className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={release.cover}
                  alt={release.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-primary text-sm tracking-wide mb-1">
                  {release.type} • {release.year}
                </p>
                <h3 className="text-xl font-bold mb-4">{release.title}</h3>
                <div className="flex gap-4">
                  <Link
                    href={release.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm"
                  >
                    Spotify <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={release.audiomack}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm"
                  >
                    Audiomack <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={release.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm"
                  >
                    YouTube <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spotify Embed */}
        <div className="mt-16">
          <iframe
            src="https://open.spotify.com/embed/artist/4V8LLVI7PbaPR0K2TGSxFF?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg"
            title="Spotify Player"
          />
        </div>
      </div>
    </section>
  )
}
