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
    title: "Flex (Full Version)",
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
    { label: "Spotify", href: r.spotify },
    { label: "Apple", href: r.apple },
    { label: "YouTube", href: r.youtube },
    { label: "Audiomack", href: r.audiomack },
  ]
}

export function MusicSection() {
  return (
    <section
      id="music"
      className="
        py-28
        bg-background
        relative
        overflow-hidden
      "
    >
      {/* soft glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 blur-[160px]" />
      </div>

      <div className="container mx-auto px-6 relative">

        {/* HEADER */}
        <div className="mb-14">

          <p className="text-primary tracking-[0.35em] text-xs uppercase mb-3">
            Discography
          </p>

          <h2 className="text-3xl md:text-6xl font-black tracking-tight">
            Latest Releases
          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {releases.map((release) => (
            <div
              key={release.title}
              className="
                group

                relative

                rounded-2xl

                overflow-hidden

                border border-white/10
                bg-white/[0.03]

                backdrop-blur-xl

                transition-all duration-500

                hover:-translate-y-2
                hover:border-primary/40
                hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)]
              "
            >

              {/* IMAGE */}
              <div className="relative aspect-square overflow-hidden">

                <Image
                  src={release.cover}
                  alt={release.title}
                  fill
                  className="
                    object-cover

                    transition-transform duration-700

                    group-hover:scale-110
                  "
                />

                {/* overlay */}
                <div
                  className="
                    absolute inset-0

                    opacity-0
                    group-hover:opacity-100

                    transition-opacity duration-300

                    bg-gradient-to-t
                    from-black/90
                    via-black/60
                    to-black/20

                    flex flex-col justify-center items-center gap-2 p-4
                  "
                >

                  <p className="text-[9px] tracking-[0.4em] uppercase text-white/50 mb-2">
                    Stream
                  </p>

                  {streamingLinks(release).map((p) => (
                    <Link
                      key={p.label}
                      href={p.href}
                      target="_blank"
                      className="
                        w-full

                        text-center

                        py-2

                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.2em]

                        text-white/80

                        border border-white/10
                        bg-white/[0.05]

                        hover:bg-white/10
                        hover:scale-105

                        transition-all duration-200
                      "
                    >
                      {p.label}
                    </Link>
                  ))}

                </div>

              </div>

              {/* INFO */}
              <div className="p-4">

                <p className="text-primary text-[10px] tracking-[0.25em] uppercase mb-1">
                  {release.type} · {release.year}
                </p>

                <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors">
                  {release.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

        {/* SPOTIFY */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl">

          <div className="px-5 py-3 border-b border-white/10 flex items-center gap-3">

            <span className="w-2 h-2 rounded-full bg-[#1DB954]" />

            <p className="text-[10px] tracking-[0.3em] uppercase text-white/60">
              Full Catalog
            </p>

          </div>

          <iframe
            src="https://open.spotify.com/embed/artist/2HsQ019QVh3OKVEAfTry74?utm_source=generator"
            width="100%"
            height="352"
            loading="lazy"
            className="block"
          />

        </div>

      </div>
    </section>
  )
}
