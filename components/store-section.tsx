"use client"

export function StoreSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black opacity-90"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center">

        <p className="text-primary tracking-[0.4em] text-sm mb-6">
          OFFICIAL STORE
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Merchandise Coming Soon
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10">
          Official Tiki Ziki merchandise and vinyl releases will be available soon.
        </p>

        <div className="inline-block border border-neutral-700 px-8 py-4 rounded-lg text-sm tracking-wide">
          Store under preparation
        </div>

      </div>

    </section>
  )
}
