const videos = [
  {
    title: "Golden Hour (Official Music Video)",
    videoId: "dQw4w9WgXcQ",
    type: "Music Video",
  },
  {
    title: "Lagos Nights - Live at Afro Nation",
    videoId: "dQw4w9WgXcQ",
    type: "Live Performance",
  },
  {
    title: "Roots & Wings (Acoustic Session)",
    videoId: "dQw4w9WgXcQ",
    type: "Acoustic",
  },
  {
    title: "Behind the Scenes - Album Recording",
    videoId: "dQw4w9WgXcQ",
    type: "Documentary",
  },
]

export function VideosSection() {
  return (
    <section id="videos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] text-sm mb-4">VISUALS</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Videos</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.title}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6">
                <p className="text-primary text-sm tracking-wide mb-1">{video.type}</p>
                <h3 className="text-lg font-bold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
