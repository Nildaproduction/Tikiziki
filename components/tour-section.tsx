import { Button } from "@/components/ui/button"
import { MapPin, Calendar } from "lucide-react"
import Link from "next/link"

const tourDates = [
  {
    date: "Apr 15, 2026",
    venue: "O2 Academy Brixton",
    city: "London, UK",
    status: "On Sale",
    link: "#",
  },
  {
    date: "Apr 22, 2026",
    venue: "Afro Nation Festival",
    city: "Lagos, Nigeria",
    status: "On Sale",
    link: "#",
  },
  {
    date: "May 5, 2026",
    venue: "Apollo Theater",
    city: "New York, USA",
    status: "Sold Out",
    link: "#",
  },
  {
    date: "May 18, 2026",
    venue: "Bataclan",
    city: "Paris, France",
    status: "On Sale",
    link: "#",
  },
  {
    date: "Jun 2, 2026",
    venue: "Roskilde Festival",
    city: "Copenhagen, Denmark",
    status: "Coming Soon",
    link: "#",
  },
]

const news = [
  {
    date: "Mar 10, 2026",
    title: "New Single 'Golden Hour' Out Now",
    excerpt: "The highly anticipated single featuring Grammy-winning producer is finally here.",
  },
  {
    date: "Feb 28, 2026",
    title: "World Tour 2026 Dates Announced",
    excerpt: "Join us on a journey across 15 countries and 30 cities this summer.",
  },
  {
    date: "Feb 15, 2026",
    title: "Collaboration with International Artists",
    excerpt: "Exciting new collaborations coming soon with artists from around the globe.",
  },
]

export function TourSection() {
  return (
    <section id="tour" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Tour Dates */}
          <div>
            <p className="text-primary tracking-[0.3em] text-sm mb-4">ON THE ROAD</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Tour Dates</h2>
            
            <div className="space-y-4">
              {tourDates.map((show) => (
                <div
                  key={`${show.date}-${show.venue}`}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium whitespace-nowrap">{show.date}</span>
                    </div>
                    <div>
                      <h3 className="font-bold">{show.venue}</h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <MapPin className="h-3 w-3" />
                        {show.city}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant={show.status === "Sold Out" ? "secondary" : "default"}
                    size="sm"
                    disabled={show.status === "Sold Out" || show.status === "Coming Soon"}
                    asChild={show.status === "On Sale"}
                  >
                    {show.status === "On Sale" ? (
                      <Link href={show.link}>Tickets</Link>
                    ) : (
                      <span>{show.status}</span>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* News */}
          <div>
            <p className="text-primary tracking-[0.3em] text-sm mb-4">UPDATES</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Latest News</h2>
            
            <div className="space-y-6">
              {news.map((item) => (
                <article
                  key={item.title}
                  className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <p className="text-primary text-sm mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
