"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const pressKitImages = [
  { src: "/images/gallery-1.jpg", alt: "Press photo 1" },
  { src: "/images/gallery-2.jpg", alt: "Press photo 2" },
  { src: "/images/gallery-3.jpg", alt: "Press photo 3" },
  { src: "/images/gallery-4.jpg", alt: "Press photo 4" },
  { src: "/images/gallery-5.jpg", alt: "Press photo 5" },
  { src: "/images/gallery-6.jpg", alt: "Press photo 6" },
]

export function PressKitSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="press-kit" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] text-sm mb-4">PRESS KIT</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Media</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {pressKitImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setSelectedImage(image.src)}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "aspect-square" : "aspect-square"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 hover:bg-secondary rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Press photo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
