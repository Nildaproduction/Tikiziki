"use client"
import Image from "next/image"
import Link from "next/link"

export function StorePreview() {
  const previewItem = {
    name: "Tiki Ziki T-Shirt",
    image: "/merch/tshirt.jpg",
  }

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary tracking-[0.3em] text-sm mb-4">STORE</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Merch Preview</h2>

        <Link href="/store" className="inline-block relative w-64 h-64 mx-auto cursor-pointer">
          <Image
            src={previewItem.image}
            alt={previewItem.name}
            fill
            className="object-cover rounded-lg hover:scale-105 transition-transform"
          />
        </Link>

        <p className="mt-4 text-sm text-muted-foreground">
          Click the image to visit our full store
        </p>
      </div>
    </section>
  )
}
