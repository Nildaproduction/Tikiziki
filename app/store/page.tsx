'use client'

import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function StorePage() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const countries = [
    'France',
    'Kenya',
    'United States',
    'United Kingdom',
    'Canada',
    'Germany',
    'South Africa',
    'Nigeria',
    'Tanzania',
    'Uganda',
    'Japan',
    'China',
    'Brazil',
    'Australia',
    'India',
    'Italy',
    'Spain',
    'Belgium',
    'Netherlands',
    'Switzerland',
    'Sweden',
    'Norway',
    'Denmark',
    'Finland',
    'Mexico',
    'Argentina',
    'Ghana',
    'Rwanda',
    'Cameroon',
    'Senegal',
    'Morocco',
    'UAE',
    'Saudi Arabia',
    'Qatar',
    'Turkey',
    'Russia'
  ]

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)

    const response = await fetch('/api/store-waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        phone,
        country,
      }),
    })

    if (response.ok) {
      setSuccess(true)
      setEmail('')
      setPhone('')
      setCountry('')
    }

    setLoading(false)
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-90" />

      {/* Blur Circles */}
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 top-10 left-10" />
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 bottom-10 right-10" />

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-lg p-8 border shadow-2xl bg-white/10 backdrop-blur-xl rounded-3xl border-white/20">
        <h1 className="mb-3 text-4xl font-bold text-center text-white">
          Tiki ziki STORE
        </h1>

        <p className="mb-8 text-center text-gray-300">
          Store Under Construction 🚧
          <br />
          Sign up to be notified when we launch.
        </p>

        {success ? (
          <div className="p-4 text-center text-white border rounded-2xl bg-green-500/20 border-green-400/30">
            You have successfully joined the waitlist.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              required
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 text-white placeholder-gray-300 border outline-none bg-white/10 rounded-2xl border-white/20"
            />

            <PhoneInput
              international
              defaultCountry="KE"
              value={phone}
              onChange={setPhone}
              className="w-full p-4 text-white border outline-none bg-white/10 rounded-2xl border-white/20"
            />

            <select
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-4 text-gold border outline-none bg-white/10 rounded-2xl border-white/20"
            >
              <option value="">Select Country</option>

              {countries.map((country) => (
                <option
                  key={country}
                  value={country}
                  className="text-black"
                >
                  {country}
                </option>
              ))}
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full p-4 font-semibold text-white transition-all duration-300 bg-white/20 rounded-2xl hover:bg-white/30"
            >
              {loading ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
