"use client"

import { useState } from "react"

export default function StorePage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-900 via-pink-600 to-blue-500 px-6">
      <div className="text-center max-w-xl p-8 border border-neutral-700 rounded-xl backdrop-blur-sm shadow-lg">
        <h1 className="text-6xl font-extrabold mb-6 tracking-wide text-green-400 drop-shadow-lg">
          TIKI ZIKI STORE
        </h1>
        <p className="text-lg text-white mb-2">
          Merchandise Coming Soon
        </p>
        <p className="text-neutral-200 mb-8">
          Sign up to be notified when the store opens!
        </p>

        {submitted ? (
          <p className="text-green-300 font-bold text-lg">
            Thank you! We’ve received your info.
          </p>
        ) : (
          <form
            action="https://formspree.io/f/mnjgbevy"
            method="POST"
            className="flex flex-col sm:flex-row justify-center gap-4"
            onSubmit={() => setSubmitted(true)}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg w-full sm:w-auto flex-1 text-black"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone number (optional)"
              className="px-4 py-3 rounded-lg w-full sm:w-auto flex-1 text-black"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-green-400 hover:bg-green-500 text-black font-bold rounded-lg transition"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
