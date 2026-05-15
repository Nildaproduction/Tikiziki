"use client"

import Image from "next/image"
import { useState } from "react"
import { X, Download } from "lucide-react"

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

  const handleDownload = async (src: string) => {
    const response = await fetch(src)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = src.split("/").pop() || "press-image.jpg"
    document.body.appendChild(a)
    a.click()
    a.remove()

    window.URL.revokeObjectURL(url)
  }

  return (
    <section id="press-kit" className="py-28 bg-background relative overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/10 blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 relative">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-primary tracking-[0.35em] text-xs uppercase mb-3">
            Press Kit
          </p>

          <h2 className="text-3xl md:text-6xl font-black tracking-tight">
            Media Gallery
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {pressKitImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setSelectedImage(image.src)}
              className={`
                group relative overflow-hidden

                rounded-2xl

                border border-white/10
                bg-white/[0.03]

                backdrop-blur-xl

                transition-all duration-500

                hover:-translate-y-1
                hover:border-primary/40
              `}
            >
              <div className={`relative ${index === 0 ? "aspect-square md:col-span-2 md:row-span-2" : "aspect-square"}`}>

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                {/* hint */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/70">
                    Click to view
                  </p>
                </div>

              </div>
            </button>
          ))}

        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >

          {/* close */}
          <button
            className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* download */}
          <button
            className="absolute top-6 right-20 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-primary/20 transition"
            onClick={(e) => {
              e.stopPropagation()
              handleDownload(selectedImage)
            }}
          >
            <Download className="h-6 w-6 text-primary" />
          </button>

          {/* image */}
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Press image"
              fill
              className="object-contain"
            />
          </div>

        </div>
      )}

    </section>
  )
}
