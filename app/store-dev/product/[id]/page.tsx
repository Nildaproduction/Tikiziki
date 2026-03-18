"use client"

import { useRouter } from "next/router"
import { useState } from "react"
import { FaWhatsapp, FaShareAlt, FaCreditCard, FaGift, FaUndo } from "react-icons/fa"

type Product = {
  id: string
  name: string
  price: number
  category: string
  images: string[]
  description: string
  type: "digital" | "physical"
}

const products: Product[] = [
  {
    id: "1",
    name: "Tiki Ziki – Let's Lose (MP3)",
    price: 200,
    category: "Music",
    images: ["/artist-hero.jpg.jpg"],
    description: "High-quality MP3 download of Tiki Ziki's hit song 'Let's Lose'.",
    type: "digital",
  },
  {
    id: "2",
    name: "Tiki Ziki Black T-Shirt",
    price: 1500,
    category: "Merch",
    images: ["/artist-hero.jpg.jpg"],
    description: "Comfortable black Tiki Ziki T-Shirt, 100% cotton.",
    type: "physical",
  },
]

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const product = products.find((p) => p.id === id)
  const [quantity, setQuantity] = useState(1)

  if (!product) return <p className="text-black text-center mt-20">Product not found.</p>

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">

        {/* Left: Product Image */}
        <div className="flex-1">
          <img src={product.images[0]} alt={product.name} className="w-full h-96 object-cover rounded-3xl mb-6" />
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-black mb-4">{product.name}</h1>
            <p className="text-black mb-4">{product.description}</p>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-6">
              <button className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
                <FaWhatsapp /> Share WhatsApp
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-gray-200 text-black rounded-xl hover:bg-gray-300 transition">
                <FaShareAlt /> Share
              </button>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <button className="px-4 py-2 bg-gray-200 rounded-xl" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span className="font-semibold text-black">{quantity}</span>
              <button className="px-4 py-2 bg-gray-200 rounded-xl" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            {/* Add to Cart + Buy Now */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <button className="flex-1 py-3 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition flex items-center justify-center gap-2">
                Add to Cart
              </button>
              <button className="flex-1 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-900 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="flex flex-col items-center bg-gray-100 p-4 rounded-2xl">
              <FaCreditCard className="text-3xl text-black mb-2"/>
              <span className="text-black font-medium">Convenient Payment</span>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-4 rounded-2xl">
              <FaGift className="text-3xl text-black mb-2"/>
              <span className="text-black font-medium">Free Discount Code</span>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-4 rounded-2xl">
              <FaUndo className="text-3xl text-black mb-2"/>
              <span className="text-black font-medium">7-Day Return</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
