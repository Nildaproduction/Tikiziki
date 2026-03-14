import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const releases = [
  {
    title: "Don't You Know",
    type: "Single",
    year: "2026",
    cover: "/images/album-1.jpg",
    spotify: "https://open.spotify.com/track/1al3zgZgaKwuIbX3JEm4tK",
    audiomack: "https://audiomack.com/Tiki-Ziki-Ke/song/dont-you-know",
    youtube: "https://youtu.be/JQg6xW434Ek",
    apple: "https://music.apple.com/fr/album/dont-you-know-single/1869739518",
  },
  {
    title: "Dopeless",
    type: "Single",
    year: "2025",
    cover: "/images/album-2.jpg",
    spotify: "https://open.spotify.com/track/3qZViTK3g4JEft53aKQtQG",
    audiomack: "https://audiomack.com/Tiki-Ziki-Ke/song/dopeless",
    youtube: "https://youtu.be/nTp0rm67ohY",
    apple: "https://music.apple.com/fr/song/dopeless/1848180226",
  },
  {
    title: "Flex (Full Version) ft Dj Nilda",
    type: "Single",
    year: "2025",
    cover: "/images/album-3.jpg",
    spotify: "https://open.spotify.com/album/3tdE48ixtQPqYjI15u1Cnx",
    audiomack: "https://audiomack.com/Tiki-Ziki-Ke/song/flex-full-version",
    youtube: "https://youtu.be/iK31wp4AdwQ",
    apple: "https://music.apple.com/fr/album/flex-full-version-single/1840902656",
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

                <div className="flex flex-wrap gap-4">

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

                  <Link
                    href={release.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm"
                  >
                    Apple Music <ExternalLink className="h-3 w-3" />
                  </Link>

                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-16">
          <iframe
            src="https://open.spotify.com/embed/artist/2HsQ019QVh3OKVEAfTry74?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
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
