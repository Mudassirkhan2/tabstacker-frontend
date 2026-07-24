'use client'
import { useEffect, useRef } from 'react'

const FOLDERS = [
  { label: 'Work', color: '#4f46e5', tabs: '9 tabs · 2h 14m', barColor: '#818cf8', barW: '72%', delay: 0 },
  { label: 'Job hunt', color: '#f97316', tabs: '6 tabs · 41m', barColor: '#fb923c', barW: '38%', delay: 600 },
  { label: 'Learning', color: '#10b981', tabs: '4 tabs · 1h 02m', barColor: '#34d399', barW: '54%', delay: 1200 },
]

export default function CalmSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return
      el.querySelectorAll('.reveal').forEach(r => r.classList.add('visible'))
      el.querySelectorAll<HTMLDivElement>('[data-bar]').forEach(b => {
        b.style.width = b.dataset.bar ?? '0%'
      })
      observer.unobserve(el)
    }, { threshold: 0.01, rootMargin: '100px 0px 100px 0px' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="ch5"
      style={{ position: 'relative', background: '#0f172a', padding: '90px 0 120px', overflow: 'hidden' }}
    >
      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
        <div className="reveal">
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#059669' }}>
            Chapter 05 — The calm
          </div>
          <h2 style={{ margin: '14px 0 0', fontSize: 'clamp(32px,4vw,56px)', lineHeight: 1.04, letterSpacing: '-0.035em', color: '#fff', fontWeight: 800 }}>
            <span style={{ fontWeight: 300, opacity: 0.7 }}>Six tabs open.</span>{' '}
            <span style={{ fontWeight: 800 }}>Everything else, stacked.</span>
          </h2>
        </div>

        {/* Folder cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, maxWidth: 840, margin: '52px auto 0' }}>
          {FOLDERS.map((f, i) => (
            <div
              key={f.label}
              className="reveal"
              data-delay={String(i)}
              style={{ border: '1px solid rgba(255,255,255,.12)', borderRadius: 18, background: 'rgba(255,255,255,.05)', padding: 22, textAlign: 'left', animation: `floaty 8s ease-in-out ${f.delay}ms infinite` }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <span style={{ width: 20, height: 15, borderRadius: 3, background: f.color, display: 'inline-block' }} />
                <span style={{ fontSize: 13.5, fontWeight: 700, color: '#fff' }}>{f.label}</span>
              </div>
              <div style={{ marginTop: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,.45)' }}>{f.tabs}</div>
              <div style={{ marginTop: 12, height: 4, borderRadius: 9999, background: 'rgba(255,255,255,.10)' }}>
                <div
                  data-bar={f.barW}
                  style={{ width: 0, height: '100%', borderRadius: 9999, background: f.barColor, transition: `width 1.1s ease ${f.delay}ms` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Before → After */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28, margin: '46px auto 0' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 54, fontWeight: 700, lineHeight: 1, color: 'rgba(255,255,255,.28)', textDecoration: 'line-through', textDecorationColor: 'rgba(249,115,22,.7)' }}>47</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginTop: 10 }}>Before</div>
          </div>
          <span style={{ fontSize: 24, color: 'rgba(255,255,255,.3)' }}>→</span>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 54, fontWeight: 700, lineHeight: 1, color: '#34d399' }}>6</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginTop: 10 }}>After</div>
          </div>
        </div>

        <p className="reveal" style={{ margin: '34px auto 0', maxWidth: 520, fontSize: 16.5, lineHeight: 1.7, color: 'rgba(255,255,255,.6)' }}>
          Nothing was lost. It&apos;s all one click away — just not all on screen at once.
        </p>
      </div>
    </section>
  )
}
