import Image from "next/image"

const highlights = [
  { stat: "15K+", label: "Monthly Listeners" },
  { stat: "4+", label: "Shows" },
  { stat: "17", label: "Total Releases" },
  { stat: "0", label: "Awards" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="/images/artist-about.jpg"
              alt="Kofi Asante portrait"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary tracking-[0.3em] text-sm mb-4">THE ARTIST</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Tiki ziki</h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
               Tiki ziki is an emerging Afropop and Afrobeat artist from Mombasa, Kenya.
                His music blends contemporary African rhythms with melodic storytelling,
                creating a sound influenced by modern Afrobeats while maintaining a distinct
                coastal East African identity Through his releases, he focuses on themes of ambition,
                relationships, and everyday life experiences.
          
              </p>
              <p>
                Over time, Tiki ziki has developed a growing catalog of songs distributed 
                on digital streaming platforms, building a presence among listeners interested 
                in Afropop and Afrobeat music. His work combines catchy melodies with rhythmic
                production,positioning him within the new generation of independent African artists 
                working to expand their audience both locally and internationally.
              </p>
              <p>
                Working with Top Sound Music Label, Tiki ziki continues to develop new projects 
               and collaborations aimed at reaching wider global audiences. His music strategy 
                includes digital distribution, online promotion, and performance opportunities
                designed to strengthen his presence within the evolving Afrobeats scene.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
              {highlights.map((item) => (
                <div key={item.label}>
                  <p className="text-3xl md:text-4xl font-bold text-primary">{item.stat}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
