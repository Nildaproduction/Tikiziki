'use client'

import Link from 'next/link'

export default function StorePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to TIKIZIKI Store</h1>
      <div className="flex gap-4">
        <Link href="/store/auth/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Login
        </Link>
        <Link href="/store/auth/sign-up" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Sign Up
        </Link>
      </div>
    </div>
  )
}
