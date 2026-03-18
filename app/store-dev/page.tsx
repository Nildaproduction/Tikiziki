"use client"

import Link from "next/link"

export default function StoreDev() {
  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            TIKI ZIKI STORE
          </h1>
          <p className="text-gray-600 mt-2">
            Development Preview
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Product 1 */}
          <div className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <h2 className="font-bold text-lg">Tiki Ziki Hoodie</h2>
            <p className="text-gray-600 mb-3">€40</p>
            <button className="w-full bg-black text-white py-2 rounded-lg">
              Buy
            </button>
          </div>

          {/* Product 2 */}
          <div className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <h2 className="font-bold text-lg">Tiki Ziki T-Shirt</h2>
            <p className="text-gray-600 mb-3">€25</p>
            <button className="w-full bg-black text-white py-2 rounded-lg">
              Buy
            </button>
          </div>

          {/* Product 3 */}
          <div className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <h2 className="font-bold text-lg">Tiki Ziki Cap</h2>
            <p className="text-gray-600 mb-3">€15</p>
            <button className="w-full bg-black text-white py-2 rounded-lg">
              Buy
            </button>
          </div>

        </div>

        {/* Back link */}
        <div className="text-center mt-10">
          <Link href="/" className="underline text-gray-600">
            ← Back to Website
          </Link>
        </div>

      </div>
    </main>
  )
}
