"use client"
import Link from "next/link"

export function StorePreview() {
  return (
    <section className="py-24 bg-neutral-950 text-center">

      <div className="container mx-auto px-6">

        <p className="text-primary tracking-[0.4em] text-sm mb-4">
          STORE
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Merchandise Coming Soon
        </h2>

        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Official apparel, vinyl and exclusive releases will be available in the store soon.
        </p>

        <Link
          href="/store"
          className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition"
        >
          Visit Store
        </Link>

      </div>

    </section>
  )
}
