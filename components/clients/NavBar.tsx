'use client'
import Link from 'next/link'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useRef, useState } from 'react'
import logoIcon from '../../app/assets/logoIcon.svg'

const CHROME_URL = 'https://chrome.google.com/webstore/detail/tabstacker/mjlmgopdnpogajcjhgeppgbgnpdjnjgm'

export default function NavBar() {
  const { status, data: session } = useSession()
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const update = () => {
      const y = window.scrollY
      setScrolled(y > 80)
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      setProgress(Math.min(y / max, 1) * 100)
    }
    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => { rafRef.current = 0; update() })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSignOut = () => {
    signOut()
    localStorage.removeItem('token')
  }

  return (
    <nav
      id="v2-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s ease, border-color 0.3s ease',
        background: scrolled ? 'rgba(15,23,42,.85)' : 'rgba(15,23,42,0)',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,0)'}`,
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      {/* Progress bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, height: 2, background: 'linear-gradient(90deg,#4f46e5,#f97316)', width: `${progress}%`, transition: 'width 0.1s linear' }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Image src={logoIcon} alt="TabStacker logo" width={32} height={32} />
          <span style={{ fontWeight: 700, color: '#fff', fontSize: 17, letterSpacing: '-0.01em' }}>TabStacker</span>
        </Link>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {status === 'authenticated' ? (
            <>
              {session?.user?.image && (
                <Image
                  src={session.user.image}
                  width={32}
                  height={32}
                  alt={session.user.name ?? 'user'}
                  style={{ borderRadius: '50%', border: '2px solid rgba(255,255,255,.2)' }}
                />
              )}
              <button
                onClick={handleSignOut}
                className="btn btn-md btn-dark-outline"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link href="/sign-in" className="btn btn-md btn-dark-outline">Sign in</Link>
              <a href={CHROME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-accent">
                Add to Chrome
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
