'use client'
import { useEffect, useRef, useState } from 'react'

const ALL_TABS = [
  { color: '#818cf8', label: 'Jira · SPR-241' },
  { color: '#f97316', label: 'How does Jira work?' },
  { color: '#10b981', label: 'CRM pipeline' },
  { color: '#3b82f6', label: 'Workflow docs' },
  { color: '#ef4444', label: 'React tutorial 3/7' },
  { color: '#fb923c', label: 'Indeed — PM roles' },
  { color: '#a5b4fc', label: 'Gmail (14)' },
  { color: '#22d3ee', label: 'Notion — notes' },
  { color: '#ec4899', label: 'Slack — #design' },
  { color: '#f59e0b', label: 'Stack Overflow' },
  { color: '#818cf8', label: 'Figma — handoff v4' },
  { color: '#34d399', label: 'Calendar — 1:1' },
  { color: '#f97316', label: 'Sheets — budget' },
  { color: '#ef4444', label: 'YouTube — lo-fi mix' },
  { color: '#a5b4fc', label: 'LinkedIn — recruiter' },
  { color: '#22d3ee', label: 'Zoom — standup' },
  { color: '#ec4899', label: 'Medium — 12 min read' },
  { color: '#f59e0b', label: 'Amazon — cart (3)' },
  { color: '#818cf8', label: 'Jira · SPR-241' },
  { color: '#10b981', label: 'CRM pipeline' },
  { color: '#3b82f6', label: 'Docs — Q3 plan' },
  { color: '#fb923c', label: 'React tutorial 4/7' },
  { color: '#ef4444', label: 'Gmail — draft' },
  { color: '#34d399', label: 'Docs — retro' },
]

const BEATS = [
  'Morning. Six tabs, all of them load-bearing. This is fine.',
  'Lunch. Every question spawns three more tabs, and none of them get closed.',
  '4pm. The titles are gone. You have the same page open three times and you can\'t tell.',
]

export default function ChapterOne() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const tick = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const span = Math.max(rect.height - window.innerHeight, 1)
      setProgress(Math.min(Math.max(-rect.top / span, 0), 1))
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

  const tabCount = Math.round(6 + 41 * progress)
  const visibleChips = Math.round(6 + (ALL_TABS.length - 6) * progress)
  const barWidth = `${8 + 92 * progress}%`
  const beatIndex = progress < 0.33 ? 0 : progress < 0.66 ? 1 : 2
  const showDupes = progress > 0.8

  return (
    <section
      ref={sectionRef}
      id="ch1"
      style={{ position: 'relative', height: '340vh', background: 'linear-gradient(180deg,#0f172a 0%,#141033 60%,#0f172a 100%)' }}
    >
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 72, boxSizing: 'border-box' }}>
        {/* Big number watermark */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', fontSize: 'clamp(180px,28vw,340px)', fontWeight: 900, lineHeight: 1, color: '#818cf8', opacity: 0.055, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em' }}>
          01
        </div>

        <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '0 32px', width: '100%', boxSizing: 'border-box' }}>
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, marginBottom: 26, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#818cf8' }}>
                Chapter 01 — The pile
              </div>
              <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(28px,3.5vw,46px)', lineHeight: 1.06, letterSpacing: '-0.035em', fontWeight: 800, maxWidth: 640 }}>
                It starts with one tab you didn&apos;t want to lose.
              </h2>
            </div>
            <div style={{ textAlign: 'right', flex: '0 0 auto' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(48px,6vw,76px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', color: '#34d399' }}>
                {tabCount}
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginTop: 8 }}>
                Tabs open
              </div>
            </div>
          </div>

          {/* Browser mockup */}
          <div style={{ position: 'relative', border: '1px solid rgba(255,255,255,.10)', borderRadius: 18, background: 'rgba(255,255,255,.03)', boxShadow: '0 50px 90px -50px rgba(0,0,0,.9)', overflow: 'hidden' }}>
            {/* Browser chrome bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#ef4444', '#f59e0b', '#10b981'].map(c => (
                  <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.8, display: 'inline-block' }} />
                ))}
              </div>
              <div style={{ flex: 1, height: 24, borderRadius: 7, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', padding: '0 10px', fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: 'rgba(255,255,255,.35)' }}>
                chrome://tabs — you have too many
              </div>
              <div style={{ opacity: showDupes ? 1 : 0, transition: 'opacity 0.4s ease', display: 'flex', alignItems: 'center', gap: 7, border: '1px solid rgba(249,115,22,.4)', background: 'rgba(249,115,22,.14)', borderRadius: 9999, padding: '4px 11px', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fdba74', whiteSpace: 'nowrap' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#f97316', animation: 'blink 1.2s steps(1,end) infinite', display: 'inline-block' }} />
                3 duplicates
              </div>
            </div>

            {/* Tab chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'flex-start', minHeight: 160, alignContent: 'flex-start', padding: '14px 14px 0' }}>
              {ALL_TABS.map((tab, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden',
                    maxWidth: i < visibleChips ? 200 : 0,
                    background: i === 0 ? 'rgba(255,255,255,.10)' : 'rgba(255,255,255,.06)',
                    border: `1px solid ${i === 0 ? 'rgba(255,255,255,.10)' : 'rgba(255,255,255,.08)'}`,
                    borderRadius: 9,
                    padding: i < visibleChips ? '9px 11px' : '9px 0',
                    whiteSpace: 'nowrap',
                    opacity: i < visibleChips ? 1 : 0,
                    transition: 'opacity 0.35s ease, max-width 0.45s cubic-bezier(.22,1,.36,1), padding 0.35s ease',
                  }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: tab.color, flex: '0 0 auto', display: 'inline-block' }} />
                  <span style={{ fontSize: 11.5, color: i === 0 ? '#d8dbe7' : '#a6abc1' }}>{tab.label}</span>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div style={{ height: 3, background: 'linear-gradient(90deg,#34d399,#f97316)', width: barWidth, transition: 'width 0.3s ease' }} />
          </div>

          {/* Story beats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 26 }}>
            {BEATS.map((beat, i) => (
              <p key={i} style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,.55)', opacity: beatIndex >= i ? 1 : 0.18, transition: 'opacity 0.4s ease' }}>
                {beat}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
