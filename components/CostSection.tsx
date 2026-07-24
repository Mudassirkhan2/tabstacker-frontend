'use client'
import { useEffect, useRef } from 'react'

const SLICES = [
  { color: '#818cf8', height: 100 },
  { color: '#a5b4fc', height: 82 },
  { color: '#f97316', height: 64 },
  { color: '#fb923c', height: 55 },
  { color: '#34d399', height: 78 },
  { color: '#10b981', height: 48 },
  { color: '#22d3ee', height: 66 },
  { color: '#ec4899', height: 44 },
  { color: '#f59e0b', height: 70 },
  { color: '#818cf8', height: 52 },
  { color: '#fb923c', height: 88 },
  { color: '#f97316', height: 35 },
]

const RECEIPT = [
  { label: 'Hours staring at a browser', value: '5–8h', color: '#fff' },
  { label: 'Tabs you can still read', value: '12', color: '#fff' },
  { label: 'Duplicates of the same page', value: '×3', color: '#fdba74' },
  { label: 'Tabs you\'ll actually return to', value: '9', color: '#fff' },
]

export default function CostSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.querySelectorAll('.reveal').forEach(r => r.classList.add('visible'))
        observer.unobserve(e.target)
      })
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="ch2"
      style={{ position: 'relative', background: 'linear-gradient(180deg,#0f172a 0%,#1a1040 100%)', padding: '120px 0 130px', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', left: '6%', top: 70, fontSize: 'clamp(150px,25vw,300px)', fontWeight: 900, lineHeight: 1, color: '#818cf8', opacity: 0.055, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em' }}>
        02
      </div>

      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div className="reveal" style={{ maxWidth: 640 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f97316' }}>
            Chapter 02 — The cost
          </div>
          <h2 style={{ margin: '14px 0 0', fontSize: 'clamp(32px,4vw,54px)', lineHeight: 1.05, letterSpacing: '-0.035em', fontWeight: 800 }}>
            <span style={{ fontWeight: 300, opacity: 0.7 }}>Every open tab</span>{' '}
            <span style={{ fontWeight: 800 }}>splits your attention.</span>
          </h2>
          <p style={{ margin: '18px 0 0', fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,.6)', maxWidth: 560 }}>
            Research shows a browser with 12 open tabs gives each task just 8% of your focus. The daily receipt below adds up.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, marginTop: 52, alignItems: 'start' }}>
          {/* Focus fragmentation chart */}
          <div className="reveal" style={{ border: '1px solid rgba(255,255,255,.10)', borderRadius: 22, background: 'rgba(255,255,255,.03)', overflow: 'hidden' }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,.08)', fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>
              Focus per task
            </div>
            <div style={{ padding: '24px', display: 'flex', alignItems: 'flex-end', gap: 8, height: 180 }}>
              {/* single full bar */}
              <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                <div style={{ background: 'linear-gradient(180deg,#818cf8,#4f46e5)', borderRadius: '4px 4px 0 0', height: '100%', position: 'relative' }}>
                  <span style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#a5b4fc', whiteSpace: 'nowrap' }}>100%</span>
                </div>
              </div>
              {/* 12 small bars */}
              {SLICES.map((s, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                  <div style={{ background: `linear-gradient(180deg,${s.color},${s.color}99)`, borderRadius: '3px 3px 0 0', height: `${s.height * 0.08}%`, opacity: 0.7 }} />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 24px 20px', fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: 'rgba(255,255,255,.35)' }}>
              <span>1 task · full attention</span>
              <span>12 tabs · a twelfth each</span>
            </div>
          </div>

          {/* Daily receipt */}
          <div className="reveal" data-delay="1" style={{ border: '1px solid rgba(255,255,255,.10)', borderRadius: 22, background: 'rgba(255,255,255,.03)', overflow: 'hidden' }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,.08)', fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>
              The daily receipt
            </div>
            {RECEIPT.map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '18px 24px', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                <span style={{ fontSize: 15, color: 'rgba(255,255,255,.7)' }}>{row.label}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 17, fontWeight: 700, color: row.color }}>{row.value}</span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '22px 24px', background: 'rgba(249,115,22,.10)' }}>
              <span style={{ fontSize: 15, fontWeight: 700 }}>Total, paid in focus</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 22, fontWeight: 800, color: '#fb923c' }}>a whole day</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
