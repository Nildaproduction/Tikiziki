"use client"

import { useState } from "react"

export default function StorePage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen bg-[#111] flex items-center justify-center px-6">
      <div className="text-center max-w-lg w-full p-8 rounded-2xl bg-gradient-to-tr from-[#1c1c1c] to-[#111] shadow-2xl">

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#57f2cc] drop-shadow-lg mb-6">
          TIKI ZIKI STORE
        </h1>
        <p className="text-lg text-neutral-300 mb-4">
          Merchandise Coming Soon
        </p>
        <p className="text-neutral-400 mb-8">
          Sign up to be the first to know when the store opens!
        </p>

        {/* Form or Thank You Message */}
        {submitted ? (
          <p className="text-[#57f2cc] font-semibold text-lg">
            Thank you! We’ll keep you updated 🎵
          </p>
        ) : (
          <form
            action="https://formspree.io/f/mnjgbevy" // your Formspree URL
            method="POST"
            className="flex flex-col gap-4"
            onSubmit={() => setSubmitted(true)}
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg bg-[#222] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#57f2cc] transition"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone number (optional)"
              className="px-4 py-3 rounded-lg bg-[#222] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#57f2cc] transition"
            />

            <button
              type="submit"
              className="mt-2 py-3 bg-[#57f2cc] text-black font-bold rounded-lg hover:bg-[#45d9b8] transition"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
