'use client'
import { useEffect, useRef, useState } from 'react'

const CHROME_URL = 'https://chrome.google.com/webstore/detail/tabstacker/mjlmgopdnpogajcjhgeppgbgnpdjnjgm'

const DRIFT_ROW_1 = [
  'jira.atlassian.com — SPR-241',
  'how does jira actually work',
  'youtube.com — react tutorial 3/7',
  'indeed.com — product roles',
  'figma.com — handoff v4',
  'github.com — PR review',
  'notion.so — sprint planning',
]

const DRIFT_ROW_2 = [
  'mail.google.com (14)',
  'notion.so — meeting notes',
  'stackoverflow — cors error',
  'crm — pipeline Q3',
  'amazon.in — cart (3)',
  'slack.com — #design',
  'calendar — 1:1 tomorrow',
]

function DriftChip({ label }: { label: string }) {
  return (
    <span style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      color: 'rgba(255,255,255,.45)',
      border: '1px solid rgba(255,255,255,.10)',
      background: 'rgba(255,255,255,.04)',
      borderRadius: 8,
      padding: '7px 12px',
      whiteSpace: 'nowrap',
      flexShrink: 0,
    }}>
      {label}
    </span>
  )
}

export default function HeroSection() {
  const numRef = useRef<HTMLSpanElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Animate number from 6 to 47
    const el = numRef.current
    if (!el) return
    const start = performance.now()
    const dur = 1900
    const step = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      el.textContent = String(Math.round(6 + 41 * eased))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)

    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const driftX = -(scrollY * 0.12)
  const driftY = scrollY * 0.18

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 90% 70% at 50% -20%, #241a52 0%, #16173a 38%, #0f172a 78%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 0 80px',
      }}
    >
      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(129,140,248,.16) 1px, transparent 1px)', backgroundSize: '22px 22px', opacity: 0.5, pointerEvents: 'none' }} />

      {/* Orange glow */}
      <div style={{ position: 'absolute', right: -160, top: -80, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,.22), transparent 62%)', animation: 'glowPulse 9s ease-in-out infinite', pointerEvents: 'none' }} />

      {/* Center vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 46% 42% at 50% 52%, rgba(15,23,42,.94) 0%, rgba(15,23,42,.65) 45%, transparent 78%)', zIndex: 1, pointerEvents: 'none' }} />

      {/* Drifting tabs background */}
      <div
        style={{
          position: 'absolute',
          left: '-6%',
          right: '-6%',
          top: 84,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          opacity: 0.42,
          pointerEvents: 'none',
          willChange: 'transform',
          transform: `translate3d(${driftX.toFixed(1)}px, ${driftY.toFixed(1)}px, 0)`,
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)',
          maskImage: 'linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)',
        }}
      >
        <div style={{ display: 'flex', gap: 12, whiteSpace: 'nowrap', transform: 'translateX(-40px)' }}>
          {[...DRIFT_ROW_1, ...DRIFT_ROW_1].map((l, i) => <DriftChip key={i} label={l} />)}
        </div>
        <div style={{ display: 'flex', gap: 12, whiteSpace: 'nowrap', transform: 'translateX(-220px)' }}>
          {[...DRIFT_ROW_2, ...DRIFT_ROW_2].map((l, i) => <DriftChip key={i} label={l} />)}
        </div>
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1240, margin: '0 auto', padding: '0 32px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 900, margin: '56px auto 0', textAlign: 'center' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fdba74', border: '1px solid rgba(249,115,22,.35)', background: 'rgba(249,115,22,.10)', borderRadius: 9999, padding: '7px 14px' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f97316', animation: 'blink 1.6s steps(1,end) infinite', display: 'inline-block' }} />
            A tab-overload story
          </div>

          {/* Headline */}
          <h1 style={{ margin: '26px 0 0', fontSize: 'clamp(52px, 7vw, 88px)', lineHeight: 0.98, letterSpacing: '-0.045em' }}>
            <span style={{ fontWeight: 300, color: '#fff', opacity: 0.7 }}>You didn&apos;t open</span>
            <br />
            <span style={{ fontWeight: 800, color: '#fff' }}>
              <span ref={numRef} style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, letterSpacing: '-0.05em', color: '#fb923c' }}>6</span>
              {' '}tabs on purpose.
            </span>
          </h1>

          {/* Subtext */}
          <p style={{ margin: '26px auto 0', maxWidth: 600, fontSize: 19, lineHeight: 1.65, color: 'rgba(255,255,255,.62)' }}>
            It happened one <em style={{ fontStyle: 'normal', color: '#fdba74' }}>&ldquo;I&apos;ll read this later&rdquo;</em> at a time. TabStacker is the extension that stacks the pile back into folders — and keeps it there. Chrome, Edge, Brave, Arc, any Chromium browser.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginTop: 34 }}>
            <a href={CHROME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-xl btn-accent">
              Add to Chrome — free
            </a>
            <a href="#ch4" className="btn btn-xl btn-dark-outline">
              Watch the 2-min demo
            </a>
          </div>
        </div>

        {/* Scroll nudge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 64 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)' }}>
              Scroll to open the story
            </span>
            <span style={{ width: 1, height: 36, background: 'linear-gradient(180deg, rgba(255,255,255,.5), transparent)', animation: 'scrollNudge 2.2s ease-in-out infinite', transformOrigin: 'top center', display: 'block' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
