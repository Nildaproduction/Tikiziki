"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Calendar } from "lucide-react"
import Link from "next/link"

type TourDate = {
  date: string
  venue: string
  city: string
  status: "Coming Soon" | "On Sale" | "Sold Out"
  link: string
}

const tourDates: TourDate[] = []

const news = [
  {
    date: "Mar 27, 2026",
    title: "Tiki Ziki x H.O.B - I’M HIM Visuals",
    excerpt:
      "A bold release built on confidence, identity, and modern hip-hop energy.",
  },
  {
    date: "Mar 15, 2026",
    title: "International Collaborations",
    excerpt: "New global collaborations are in development across multiple scenes.",
  },
  {
    date: "Feb 6, 2026",
    title: "‘Don’t You Know’ Out Now",
    excerpt: "A coastal-inspired single blending rhythm and melodic storytelling.",
  },
]

export function TourSection() {
  const hasShows = tourDates.length > 0

  return (
    <section id="tour" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14">

          {/* TOUR */}
          <div>
            <p className="text-primary tracking-[0.35em] text-xs uppercase mb-3">
              On The Road
            </p>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8">
              Tour Dates
            </h2>

            <div className="space-y-4">

              {hasShows ? (
                tourDates.map((show) => (
                  <div
                    key={`${show.date}-${show.venue}`}
                    className="
                      group

                      p-5

                      rounded-2xl

                      border border-white/10
                      bg-white/[0.03]

                      backdrop-blur-xl

                      hover:border-primary/40
                      hover:bg-white/[0.05]

                      transition-all duration-300
                    "
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                      <div className="flex gap-4">

                        <div className="flex items-center gap-2 text-primary">
                          <Calendar className="h-4 w-4" />
                          <span className="text-xs tracking-wide whitespace-nowrap">
                            {show.date}
                          </span>
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
                        size="sm"
                        variant={show.status === "Sold Out" ? "secondary" : "default"}
                        disabled={show.status !== "On Sale"}
                        asChild={show.status === "On Sale"}
                      >
                        {show.status === "On Sale" ? (
                          <Link href={show.link}>Tickets</Link>
                        ) : (
                          <span>{show.status}</span>
                        )}
                      </Button>

                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="
                    p-8
                    text-center

                    rounded-2xl

                    border border-white/10
                    bg-white/[0.03]

                    backdrop-blur-xl
                  "
                >
                  <p className="text-white/60">
                    No shows announced yet
                  </p>

                  <p className="text-xs text-primary/60 tracking-[0.2em] mt-2 uppercase">
                    No Tours Yet
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* NEWS */}
          <div>
            <p className="text-primary tracking-[0.35em] text-xs uppercase mb-3">
              Updates
            </p>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8">
              Latest News
            </h2>

            <div className="space-y-5">

              {news.map((item) => (
                <article
                  key={item.title}
                  className="
                    group

                    p-6

                    rounded-2xl

                    border border-white/10
                    bg-white/[0.03]

                    backdrop-blur-xl

                    hover:border-primary/40
                    hover:bg-white/[0.05]

                    transition-all duration-300
                  "
                >
                  <p className="text-primary text-xs tracking-wide mb-2">
                    {item.date}
                  </p>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.excerpt}
                  </p>
                </article>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
