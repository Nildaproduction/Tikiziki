"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function StorePage() {
  const [submitted, setSubmitted] = useState(false)
  const [typingText, setTypingText] = useState("")
  const [deleting, setDeleting] = useState(false)
  const fullText = "Merchandise Coming Soon"

  useEffect(() => {
    let index = 0
    const speed = 150
    const delay = 800
    let timeout: NodeJS.Timeout

    const type = () => {
      if (!deleting) {
        setTypingText(fullText.slice(0, index + 1))
        index++
        if (index === fullText.length) {
          timeout = setTimeout(() => setDeleting(true), delay)
          return
        }
      } else {
        setTypingText(fullText.slice(0, index - 1))
        index--
        if (index === 0) {
          setDeleting(false)
        }
      }
      timeout = setTimeout(type, speed)
    }

    type()
    return () => clearTimeout(timeout)
  }, [deleting])

  return (
    <main className="relative min-h-screen overflow-hidden font-sans flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1c1c1c] via-[#111] to-[#222] animate-gradient-background"></div>

      <div className="relative z-10 text-center max-w-lg w-full p-8 rounded-2xl bg-[#111]/90 shadow-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#57f2cc] drop-shadow-[0_0_15px_rgba(87,242,204,0.7)] animate-flicker mb-6">
          TIKI ZIKI STORE
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-[#fff] mb-4 min-h-[3rem]">
          {typingText}
          <span className="animate-blink">|</span>
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
            <label className="flex flex-col text-left text-white">
              Your email:
              <input
                type="email"
                name="email"
                required
                className="mt-1 px-4 py-3 rounded-lg bg-[#222] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#57f2cc] transition"
              />
            </label>

            <label className="flex flex-col text-left text-white">
              Your message:
              <textarea
                name="message"
                rows={4}
                className="mt-1 px-4 py-3 rounded-lg bg-[#222] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#57f2cc] transition"
              ></textarea>
            </label>

            <button
              type="submit"
              className="mt-2 py-3 bg-[#57f2cc] text-black font-bold rounded-lg hover:bg-[#45d9b8] shadow-[0_0_15px_rgba(87,242,204,0.7)] transition animate-glow"
            >
              Send
            </button>
          </form>
        )}

        <Link
          href="/"
          className="mt-6 inline-block text-[#57f2cc] hover:text-[#45d9b8] transition underline font-semibold"
        >
          ← Back to Website
        </Link>
      </div>

      <style jsx>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
          20%, 22%, 24%, 55% { opacity: 0.4; }
        }
        .animate-flicker { animation: flicker 1.5s infinite; }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px rgba(87,242,204,0.7); }
          50% { box-shadow: 0 0 30px rgba(87,242,204,1); }
        }
        .animate-glow { animation: glow 1.2s infinite; }

        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 1s ease forwards; }

        @keyframes gradient-background {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-background {
          background-size: 200% 200%;
          animation: gradient-background 15s ease infinite;
        }

        @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .animate-blink { animation: blink 1s step-start infinite; }
      `}</style>
    </main>
  )
}
