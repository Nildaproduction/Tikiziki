// /app/store-dev/page.tsx
"use client"

export default function StoreDev() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-black">
            TIKI ZIKI
          </h1>

          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 px-4 py-2 w-full md:w-96 mt-4 md:mt-0 rounded-xl outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1 text-black"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Example Product Cards */}
          {[1,2,3,4,5,6,7,8].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="h-56 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-black text-lg">
                Product Image
              </div>

              {/* Product Name */}
              <h2 className="text-base md:text-lg font-medium text-center text-black">
                Beanie Hat – Black
              </h2>

              {/* Product Price */}
              <p className="text-center font-semibold mt-2 text-black">
                KSh 900.00
              </p>
            </div>
          ))}

        </div>

      </div>
    </main>
  )
}
