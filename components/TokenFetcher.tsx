'use client'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

export default function TokenFetcher() {
  const { data: session } = useSession()
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    if (session?.user?.email) setEmail(session.user.email)
  }, [session?.user?.email])

  useEffect(() => {
    if (!email) return
    fetch(`https://tabstacker-backend.onrender.com/user/googletoken/${email}`)
      .then(r => r.json())
      .then(data => {
        if (data?.token && !localStorage.getItem('token')) {
          localStorage.setItem('token', data.token)
          window.location.reload()
        }
      })
      .catch(() => {})
  }, [email])

  return null
}
