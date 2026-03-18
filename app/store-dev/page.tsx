// /app/store-dev/page.tsx
"use client"

export default function StoreDev() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-wide text-black">
            TIKI ZIKI
          </h1>

          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 px-5 py-3 w-full md:w-96 mt-6 md:mt-0 rounded-2xl outline-none text-black placeholder-black focus:ring-2 focus:ring-gray-300 focus:ring-offset-1 transition"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {[1,2,3,4,5,6,7,8].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              {/* Product Image */}
              <div className="h-60 bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl mb-4 flex items-center justify-center text-black font-medium text-lg">
                Product Image
              </div>

              {/* Product Name */}
              <h2 className="text-base md:text-lg font-medium text-center text-black mb-2">
                Beanie Hat – Black
              </h2>

              {/* Product Price */}
              <p className="text-center font-semibold text-black mb-4">
                KSh 900.00
              </p>

              {/* Buy Button */}
              <button className="w-full py-2 rounded-xl bg-black text-white font-medium hover:bg-gray-900 transition">
                Buy Now
              </button>
            </div>
          ))}

        </div>

      </div>
    </main>
  )
}
