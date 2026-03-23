'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AccountPage() {
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()
    if (!supabase) return

    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (!data.user) {
        router.push('/store/auth/login')
      } else {
        setUserEmail(data.user.email)
      }
    }

    fetchUser()
  }, [router])

  const handleLogout = async () => {
    const supabase = createClient()
    if (!supabase) return

    await supabase.auth.signOut()
    router.push('/store/auth/login')
  }

  if (!userEmail) return <div>Loading...</div>

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      <h1 className="text-2xl font-bold mb-4">Account</h1>
      <p className="mb-4">Logged in as: {userEmail}</p>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  )
}
