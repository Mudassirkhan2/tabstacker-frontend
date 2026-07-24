'use client'
import { useEffect, useRef, useState } from 'react'

const YOUTUBE_ID = 'l1haotflosI'
const BROWSERS = ['Chrome', 'Edge', 'Brave', 'Arc', 'Opera', 'Vivaldi']

export default function DemoSection() {
  const demoRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.65)
  const [playing, setPlaying] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return
      el.querySelectorAll('.reveal').forEach(r => r.classList.add('visible'))
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Auto-play as soon as the video enters the viewport
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) setPlaying(true)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const tick = () => {
      if (!demoRef.current) return
      const rect = demoRef.current.getBoundingClientRect()
      const span = Math.max(rect.height - window.innerHeight, 1)
      const p = Math.min(Math.max(-rect.top / span, 0), 1)
      setScale(0.65 + 0.35 * p)
    }
    const raf = { id: 0 }
    const onScroll = () => {
      if (raf.id) return
      raf.id = requestAnimationFrame(() => { raf.id = 0; tick() })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    tick()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="ch4"
      style={{ position: 'relative', background: 'linear-gradient(180deg,#1e1b4b 0%,#0f172a 100%)', padding: '120px 0 0', overflow: 'hidden' }}
    >
      <div ref={contentRef} style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
        <div className="reveal" style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#34d399' }}>
            Chapter 04 — The fix
          </div>
          <h2 style={{ margin: '14px 0 0', fontSize: 'clamp(32px,4vw,56px)', lineHeight: 1.04, letterSpacing: '-0.035em', fontWeight: 800 }}>
            <span style={{ fontWeight: 300, color: '#fff', opacity: 0.7 }}>Everyone we asked lived in the browser.</span>{' '}
            <span style={{ fontWeight: 800, color: '#fff' }}>So we built it into the browser.</span>
          </h2>
          <p style={{ margin: '20px auto 0', maxWidth: 580, fontSize: 17.5, lineHeight: 1.7, color: 'rgba(255,255,255,.6)' }}>
            TabStacker installs from the Chrome Web Store and runs on any Chromium browser. Sign in with Google, and the pile becomes stacks: folders, click analytics, tab timers and a hard limit you set yourself.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8, marginTop: 22 }}>
            {BROWSERS.map(b => (
              <span key={b} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.06em', border: '1px solid rgba(255,255,255,.16)', background: 'rgba(255,255,255,.05)', borderRadius: 9999, padding: '6px 13px', color: 'rgba(255,255,255,.62)' }}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll-zoom video */}
      <div ref={demoRef} style={{ position: 'relative', height: '110vh', marginTop: 70 }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 26, overflow: 'hidden', padding: '0 32px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#818cf8' }}>
              The two-minute version
            </div>
            <h3 style={{ margin: '10px 0 0', fontSize: 38, lineHeight: 1.1, letterSpacing: '-0.03em', fontWeight: 800, color: '#fff' }}>
              <span style={{ fontWeight: 300, opacity: 0.7 }}>Watch it</span>{' '}
              <span style={{ fontWeight: 800 }}>stack.</span>
            </h3>
          </div>

          <div
            ref={videoRef}
            style={{
              width: 'min(1080px, 90vw)',
              aspectRatio: '16/9',
              transform: `scale(${scale.toFixed(3)})`,
              transformOrigin: 'center center',
              willChange: 'transform',
              borderRadius: 22,
              overflow: 'hidden',
              background: '#0f172a',
              boxShadow: '0 50px 100px -50px rgba(15,18,34,.7)',
              position: 'relative',
            }}
          >
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                title="TabStacker demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
              />
            ) : (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, background: 'linear-gradient(135deg,#1e1b4b,#0f172a)' }}>
                <div style={{ width: 78, height: 78, borderRadius: '50%', border: '1px solid rgba(255,255,255,.35)', background: 'rgba(255,255,255,.14)', color: '#fff', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ▶
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', color: 'rgba(255,255,255,.85)' }}>
                  Scroll to play
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
