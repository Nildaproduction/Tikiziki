'use client'

const videos = [
  {
    title: "I'M HIM x H.O.B",
    videoId: "oLgfxx2j-ok",
    type: "Music Video",
  },
  {
    title: "Don't You Know",
    videoId: "JQg6xW434Ek",
    type: "Music Video",
  },
  {
    title: "Flex (Full Version)",
    videoId: "iK31wp4AdwQ",
    type: "Visualiser",
  },
]

export function VideosSection() {
  return (
    <section
      id="videos"
      className="py-28 bg-background relative overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/10 blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 relative">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.35em] text-xs uppercase mb-3">
            Visuals
          </p>

          <h2 className="text-3xl md:text-6xl font-black tracking-tight">
            Videos
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {videos.map((video) => (
            <div
              key={video.title}
              className="
                group

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

              {/* VIDEO */}
              <div className="relative aspect-video">

                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />

                {/* overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              </div>

              {/* INFO */}
              <div className="p-5">

                <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-2">
                  {video.type}
                </p>

                <h3 className="text-sm md:text-base font-bold tracking-tight group-hover:text-primary transition-colors">
                  {video.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
