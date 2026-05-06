import Image from "next/image"
import Link from "next/link"

const releases = [
  {
    title: "I'M HIM X H.O.B",
    type: "Single",
    year: "2026",
    cover: "/images/i'm him.png",
    spotify: "https://open.spotify.com/track/2KcVediHF4bZ0z4fWyU0Vp?si=44f91a5e56ee44f5",
    audiomack: "https://audiomack.com/Tiki-Ziki-Ke/song/im-him",
    youtube: "https://youtu.be/oLgfxx2j-ok?si=-q9m5aQIO2H50bjA",
    apple: "https://music.apple.com/fr/song/im-him-feat-h-o-b/1880787217",
  },
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

type Release = typeof releases[0]

function streamingLinks(r: Release) {
  return [
    { label: "Spotify", href: r.spotify, color: "#1DB954" },
    { label: "Apple Music", href: r.apple, color: "#fc3c44" },
    { label: "YouTube", href: r.youtube, color: "#FF0000" },
    { label: "Audiomack", href: r.audiomack, color: "#FFA200" },
  ]
}

export function MusicSection() {
  return (
    <section id="music" className="py-28 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6 relative">

        {/* Section header */}
        <div className="mb-16">
          <p className="text-primary tracking-[0.3em] text-xs font-bold mb-3 uppercase">Discography</p>
          <div className="flex items-end gap-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">Latest Releases</h2>
            <div className="hidden md:block h-px flex-1 bg-border mb-2" />
          </div>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {releases.map((release) => (
            <div
              key={release.title}
              className="group relative bg-background border border-border overflow-hidden transition-all duration-500 hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              {/* Album art with hover overlay */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={release.cover}
                  alt={release.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Streaming links appear on hover */}
                <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4">
                  <p className="text-white/50 text-[9px] tracking-[0.3em] uppercase mb-1">Stream on</p>
                  {streamingLinks(release).map((platform) => (
                    <Link
                      key={platform.label}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center py-2 px-3 text-xs font-bold tracking-wide transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: platform.color + "20",
                        color: platform.color,
                        border: `1px solid ${platform.color}40`,
                      }}
                    >
                      {platform.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Track info */}
              <div className="p-4 border-t border-border">
                <p className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold mb-1">
                  {release.type} · {release.year}
                </p>
                <h3 className="text-sm font-bold leading-tight">{release.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Spotify embed — framed */}
        <div className="mt-16 border border-border bg-background overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-card">
            <div className="h-2 w-2 rounded-full bg-[#1DB954]" />
            <span className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase font-semibold">Full Catalog on Spotify</span>
          </div>
          <iframe
            src="https://open.spotify.com/embed/artist/2HsQ019QVh3OKVEAfTry74?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block"
            title="Spotify Player"
          />
        </div>

      </div>
    </section>
  )
}
