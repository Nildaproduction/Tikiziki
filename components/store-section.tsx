"use client"
import Image from "next/image"

export function StoreSection() {
  const merchItems = [
    { name: "Tiki Ziki T-Shirt", price: "$25", image: "/merch/tshirt.jpg", link: "#" },
    { name: "Hoodie", price: "$50", image: "/merch/hoodie.jpg", link: "#" },
    { name: "Vinyl - Latest Album", price: "$40", image: "/merch/vinyl.jpg", link: "#" },
  ]

  const musicItems = [
    { name: "Digital Album - EP 2026", price: "$10", image: "/merch/digital-album.jpg", link: "#" },
    { name: "Single - Let's Lose", price: "$2", image: "/merch/single.jpg", link: "#" },
  ]

  const renderCard = (item: typeof merchItems[0]) => (
    <div
      key={item.name}
      className="group relative rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-square">
        <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 bg-background">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">{item.price}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
        >
          Buy Now
        </a>
      </div>
    </div>
  )

  return (
    <section className="py-24 container mx-auto px-6">
      {/* Title */}
      <div className="text-center mb-16">
        <p className="text-primary tracking-[0.3em] text-sm mb-4">STORE</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Merch & Music</h2>
      </div>

      {/* Merchandise */}
      <h3 className="text-2xl font-semibold mb-6">Merchandise</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {merchItems.map(renderCard)}
      </div>

      {/* Digital Music */}
      <h3 className="text-2xl font-semibold mb-6">Digital Music</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {musicItems.map(renderCard)}
      </div>
    </section>
  )
}
