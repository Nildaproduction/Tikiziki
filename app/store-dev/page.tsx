"use client"

export default function StoreDev() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            MKURUGENZI
          </h1>

          <input
            type="text"
            placeholder="Enter key to search"
            className="border px-4 py-2 w-full md:w-96 mt-4 md:mt-0 outline-none"
          />
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Card */}
          {[1,2,3,4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="h-56 bg-gray-200 rounded-xl mb-4"></div>

              <h2 className="text-sm md:text-base font-medium text-center">
                Beanie Hat – Black
              </h2>

              <p className="text-center font-semibold mt-2">
                KSh 900.00
              </p>
            </div>
          ))}

        </div>

      </div>
    </main>
  )
}
