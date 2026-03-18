"use client"

import Link from "next/link"
import { useState } from "react"
import { Product } from "./types"

export default function StoreDev() {
  const [cart, setCart] = useState<Product[]>([])

  const products: Product[] = [
    {
      id: "1",
      name: "Tiki Ziki – Let's Lose (MP3)",
      price: 200,
      category: "Music",
      images: ["https://via.placeholder.com/400x400.png?text=Music+Product+1"],
      stock: 100,
    },
    {
      id: "2",
      name: "Tiki Ziki – Acoustic Vibes (MP3)",
      price: 250,
      category: "Music",
      images: ["https://via.placeholder.com/400x400.png?text=Music+Product+2"],
      stock: 50,
    },
    {
      id: "3",
      name: "Tiki Ziki Black T-Shirt",
      price: 1500,
      category: "Merch",
      images: ["https://via.placeholder.com/400x400.png?text=T-Shirt+Product"],
      stock: 50,
    },
    {
      id: "4",
      name: "Tiki Ziki Hoodie",
      price: 3500,
      category: "Merch",
      images: ["https://via.placeholder.com/400x400.png?text=Hoodie+Product"],
      stock: 30,
    },
  ]

  const addToCart = (product: Product) => setCart([...cart, product])

  return (
    <main className="min-h-screen px-6 py-12 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
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

        {cart.length > 0 && (
          <div className="fixed bottom-6 right-6 bg-white p-4 rounded-2xl shadow-lg w-72">
            <h3 className="font-semibold text-black mb-2">Cart ({cart.length})</h3>
            <ul>
              {cart.map((item, idx) => (
                <li key={idx} className="text-black text-sm">
                  {item.name} – KSh {item.price}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  )
}
