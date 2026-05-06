import Image from "next/image"

const highlights = [
  { stat: "15K+", label: "Monthly Listeners" },
  { stat: "4+", label: "Live Shows" },
  { stat: "20", label: "Total Releases" },
  { stat: "3", label: "Years Active" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Decorative watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[18rem] font-black leading-none select-none pointer-events-none tracking-tighter text-white/[0.025]"
        aria-hidden="true"
      >
        TZ
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image — with offset border accent */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full border border-primary/20 pointer-events-none" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/artist-about.jpg"
                alt="Tiki Ziki portrait"
                fill
                className="object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary tracking-[0.3em] text-xs font-bold uppercase mb-4">The Artist</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-tight">
              About<br />
              <span className="text-primary">Tiki Ziki</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Tiki Ziki is an emerging Afropop and Afrobeat artist from Mombasa, Kenya. His music blends
                contemporary African rhythms with melodic storytelling, creating a sound influenced by
                modern Afrobeats while maintaining a distinct coastal East African identity. Through his
                releases, he focuses on themes of ambition, relationships, and everyday life.
              </p>
              <p>
                Over time, Tiki Ziki has developed a growing catalog of songs on all major digital
                streaming platforms, building a presence among listeners drawn to Afropop and Afrobeat.
                His work combines catchy melodies with rhythmic production, positioning him within the
                new generation of independent African artists expanding their audience globally.
              </p>
              <p>
                Working with Top Sound Music Label, Tiki Ziki continues to develop new projects and
                collaborations aimed at reaching wider global audiences through digital distribution,
                online promotion, and live performances.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-border">
              {highlights.map((item) => (
                <div key={item.label} className="group">
                  <p className="text-3xl md:text-4xl font-black text-primary group-hover:scale-110 transition-transform duration-200 inline-block">
                    {item.stat}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
