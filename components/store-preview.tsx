"use client"
import Link from "next/link"

export function StorePreview() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary tracking-[0.3em] text-sm mb-4">STORE</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Merchandise Coming Soon</h2>
        <p className="text-muted-foreground mb-6">
          Our official store is not ready yet. Stay tuned!
        </p>
        <Link
          href="/store"
          className="inline-block px-6 py-3 bg-primary text-white rounded hover:bg-secondary transition-colors"
        >
          Visit Store
        </Link>
      </div>
    </section>
  )
}
