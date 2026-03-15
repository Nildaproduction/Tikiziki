"use client"
import Image from "next/image"

export function StoreSection() {
  const items = [
    { name: "T-Shirt", price: "$25", image: "/merch/tshirt.jpg", link: "#" },
    { name: "Vinyl", price: "$40", image: "/merch/vinyl.jpg", link: "#" },
  ]

  return (
    <section className="py-24 container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Store</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.name} className="rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="relative aspect-square">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm">{item.price}</p>
              <a href={item.link} className="inline-block mt-2 px-4 py-2 bg-primary text-white rounded">
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
