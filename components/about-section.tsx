import Image from "next/image"

const highlights = [
  { stat: "5M+", label: "Monthly Listeners" },
  { stat: "50+", label: "Shows Worldwide" },
  { stat: "3", label: "Studio Albums" },
  { stat: "15+", label: "Awards" },
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Kofi</h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Born in Accra and raised between Lagos and London, Kofi Asante is a 
                trailblazing force in contemporary African music. His unique sound 
                weaves together the pulsating rhythms of Afrobeat, the melodic sensibilities 
                of Afropop, and the intimate storytelling of acoustic folk.
              </p>
              <p>
                With three critically acclaimed albums and collaborations with artists 
                across the globe, Kofi has established himself as a bridge between 
                traditional African musical heritage and modern global sounds. His 
                live performances are legendary, transforming venues into spiritual 
                gatherings of rhythm and connection.
              </p>
              <p>
                Beyond music, Kofi is passionate about nurturing the next generation 
                of African artists through his foundation, which provides music 
                education to underserved communities across West Africa.
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
