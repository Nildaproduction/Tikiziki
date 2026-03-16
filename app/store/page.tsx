"use client"

import { useState } from "react"

export default function StorePage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen bg-[#111] flex items-center justify-center px-6">
      <div className="text-center max-w-lg w-full p-8 rounded-2xl bg-gradient-to-tr from-[#1c1c1c] to-[#111] shadow-2xl">

        {/* Headline with neon flicker */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#57f2cc] drop-shadow-[0_0_15px_rgba(87,242,204,0.7)] animate-flicker mb-6">
          TIKI ZIKI STORE
        </h1>

        <p className="text-lg text-neutral-300 mb-4">
          Merchandise Coming Soon
        </p>
        <p className="text-neutral-400 mb-8">
          Sign up to be the first to know when the store opens!
        </p>

        {submitted ? (
          <p className="text-[#57f2cc] font-semibold text-lg animate-fade-in">
            Thank you! We’ll keep you updated 🎵
          </p>
        ) : (
          <form
            action="https://formspree.io/f/mnjgbevy"
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
              className="mt-2 py-3 bg-[#57f2cc] text-black font-bold rounded-lg hover:bg-[#45d9b8] shadow-[0_0_15px_rgba(87,242,204,0.7)] transition animate-glow"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
          20%, 22%, 24%, 55% { opacity: 0.4; }
        }
        .animate-flicker {
          animation: flicker 1.5s infinite;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px rgba(87,242,204,0.7); }
          50% { box-shadow: 0 0 30px rgba(87,242,204,1); }
        }
        .animate-glow {
          animation: glow 1.2s infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
      `}</style>
    </main>
  )
}
