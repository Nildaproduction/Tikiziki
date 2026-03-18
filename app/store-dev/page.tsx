"use client"

import Link from "next/link"
import { Product } from "./types"

export default function StoreDev() {
  const products: Product[] = [
    {
      id: "1",
      name: "Tiki Ziki – Let's Lose (MP3)",
      price: 200,
      category: "Music",
      images: ["https://via.placeholder.com/400x400.png?text=Music+1"],
      stock: 100,
    },
    {
      id: "2",
      name: "Tiki Ziki – Acoustic Vibes (MP3)",
      price: 250,
      category: "Music",
      images: ["https://via.placeholder.com/400x400.png?text=Music+2"],
      stock: 50,
    },
    {
      id: "3",
      name: "Tiki Ziki Black T-Shirt",
      price: 1500,
      category: "TShirt",
      images: ["https://via.placeholder.com/400x400.png?text=T-Shirt"],
      stock: 50,
    },
    {
      id: "4",
      name: "Tiki Ziki Hoodie",
      price: 3500,
      category: "Merch",
      images: ["https://via.placeholder.com/400x400.png?text=Hoodie"],
      stock: 30,
    },
  ]

  return (
    <main className="min-h-screen px-6 py-12 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide text-black mb-10">
          TIKI ZIKI STORE
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/store-dev/product/${product.id}`}>
              <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 cursor-pointer">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-56 w-full object-cover rounded-2xl mb-4"
                />
                <h2 className="text-base md:text-lg font-medium text-center text-black mb-2">
                  {product.name}
                </h2>
                <p className="text-center font-semibold text-black mb-4">
                  KSh {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
