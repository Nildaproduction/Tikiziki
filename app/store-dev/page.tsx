// Tikiziki/app/store-dev/page.tsx
"use client"

import { useState } from "react"
import { Product } from "./types"

export default function StoreDev() {
  const [cart, setCart] = useState<Product[]>([])

  const products: Product[] = [
    { id: "1", name: "Vinyl Album", price: 2500, category: "Vinyl", images: ["/artist-hero.jpg.jpg"], stock: 10 },
    { id: "2", name: "T-Shirt", price: 1500, category: "TShirt", images: ["/artist-hero.jpg.jpg"], stock: 15 },
    { id: "3", name: "Merch Hoodie", price: 3500, category: "Merch", images: ["/artist-hero.jpg.jpg"], stock: 5 },
    { id: "4", name: "Vinyl Album – Deluxe", price: 4000, category: "Vinyl", images: ["/artist-hero.jpg.jpg"], stock: 7 },
  ]

  const addToCart = (product: Product) => {
    setCart([...cart, product])
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-wide text-black">
            TIKI ZIKI STORE
          </h1>
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 px-5 py-3 w-full md:w-96 mt-6 md:mt-0 rounded-2xl outline-none text-black placeholder-black focus:ring-2 focus:ring-gray-300 focus:ring-offset-1 transition"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
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
              <button
                onClick={() => addToCart(product)}
                className="w-full py-2 rounded-xl bg-black text-white font-medium hover:bg-gray-900 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Preview */}
        {cart.length > 0 && (
          <div className="fixed bottom-6 right-6 bg-white p-4 rounded-2xl shadow-lg w-72">
            <h3 className="font-semibold text-black mb-2">Cart ({cart.length})</h3>
            <ul>
              {cart.map((item, idx) => (
                <li key={idx} className="text-black text-sm">{item.name} – KSh {item.price}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  )
}
