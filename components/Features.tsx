'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import currentPng from '../app/assets/current.png'
import savedPng from '../app/assets/saved.png'
import analyticsPng from '../app/assets/analytics.png'
import setTimerPng from '../app/assets/setTimer.png'
import setLimitPng from '../app/assets/setLimit.png'
import darkModePng from '../app/assets/darkmode.png'

const CHROME_URL = 'https://chrome.google.com/webstore/detail/tabstacker/mjlmgopdnpogajcjhgeppgbgnpdjnjgm'

function Tag({ label }: { label: string }) {
  return (
    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, border: '1px solid #d8dbe7', borderRadius: 9999, padding: '6px 12px', color: '#5b6079' }}>
      {label}
    </span>
  )
}

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        if (e.target.classList.contains('reveal')) e.target.classList.add('visible')
        e.target.querySelectorAll('.reveal').forEach(r => r.classList.add('visible'))
      })
    }, { threshold: 0.01, rootMargin: '100px 0px 100px 0px' })

    el.querySelectorAll('.reveal-trigger').forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  const card = (extra?: React.CSSProperties): React.CSSProperties => ({
    border: '1px solid #d8dbe7',
    borderRadius: 26,
    overflow: 'hidden',
    background: '#fff',
    boxShadow: '0 30px 60px -45px rgba(15,18,34,.5)',
    ...extra,
  })

  return (
    <section
      ref={sectionRef}
      id="features"
      style={{ background: '#f6f7fb', color: '#0f172a', padding: '20px 0 40px' }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', display: 'flex', flexDirection: 'column', gap: 26 }}>

        {/* Feature 1 – full width, image right */}
        <div className="reveal reveal-trigger" style={card({ display: 'grid', gridTemplateColumns: '1.02fr .98fr' })}>
          <div style={{ padding: '52px 48px' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4f46e5' }}>01 · See everything</div>
            <h3 style={{ margin: '16px 0 0', fontSize: 36, lineHeight: 1.12, letterSpacing: '-0.03em', fontWeight: 800 }}>Every open tab, on one readable screen</h3>
            <p style={{ margin: '16px 0 0', fontSize: 16.5, lineHeight: 1.7, color: '#5b6079' }}>Favicons you can see, titles you can read, and a close button next to each one. Jump straight to a tab or kill the three duplicates you didn&apos;t know you had.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
              <Tag label="Favicon list" /><Tag label="One-click jump" /><Tag label="Close in place" />
            </div>
          </div>
          <div style={{ background: 'linear-gradient(135deg,#eef2ff,#e0e7ff)', padding: 36, display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 50px -28px rgba(15,18,34,.55)', position: 'relative' }}>
              <Image src={currentPng} alt="Tab management" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Features 2 & 3 in a 2-col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26 }}>
          <div className="reveal reveal-trigger" style={card()}>
            <div style={{ background: 'linear-gradient(135deg,#fff7ed,#ffedd5)', padding: '30px 30px 0' }}>
              <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: '14px 14px 0 0', overflow: 'hidden', position: 'relative' }}>
                <Image src={savedPng} alt="Save folders" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div style={{ padding: '34px 34px 38px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c2410c' }}>02 · Stack it</div>
              <h3 style={{ margin: '14px 0 0', fontSize: 28, lineHeight: 1.15, letterSpacing: '-0.025em', fontWeight: 800 }}>Save tabs into folders you&apos;ll actually reopen</h3>
              <p style={{ margin: '12px 0 0', fontSize: 15.5, lineHeight: 1.7, color: '#5b6079' }}>Work, Job hunt, Learning — group the related ones, close the window without fear, and restore the whole context in a click.</p>
            </div>
          </div>

          <div className="reveal reveal-trigger" style={card()}>
            <div style={{ background: 'linear-gradient(135deg,#ecfdf5,#d1fae5)', padding: '30px 30px 0' }}>
              <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: '14px 14px 0 0', overflow: 'hidden', position: 'relative' }}>
                <Image src={analyticsPng} alt="Analytics" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div style={{ padding: '34px 34px 38px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#047857' }}>03 · Know the truth</div>
              <h3 style={{ margin: '14px 0 0', fontSize: 28, lineHeight: 1.15, letterSpacing: '-0.025em', fontWeight: 800 }}>The tabs you keep going back to</h3>
              <p style={{ margin: '12px 0 0', fontSize: 15.5, lineHeight: 1.7, color: '#5b6079' }}>TabStacker counts clicks inside your folders and charts your most-visited tabs across all of them. Evidence, not vibes.</p>
            </div>
          </div>
        </div>

        {/* Feature 4 – timer, image left */}
        <div className="reveal reveal-trigger" style={card({ display: 'grid', gridTemplateColumns: '.98fr 1.02fr' })}>
          <div style={{ background: 'linear-gradient(135deg,#eef2ff,#f6f7fb)', padding: 36, display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 50px -28px rgba(15,18,34,.55)', position: 'relative' }}>
              <Image src={setTimerPng} alt="Tab timer" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div style={{ padding: '52px 48px' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4f46e5' }}>04 · Set the boundary</div>
            <h3 style={{ margin: '16px 0 0', fontSize: 36, lineHeight: 1.12, letterSpacing: '-0.03em', fontWeight: 800 }}>Time limits per tab. A hard cap on the total.</h3>
            <p style={{ margin: '16px 0 0', fontSize: 16.5, lineHeight: 1.7, color: '#5b6079' }}>Give a distraction twenty minutes and TabStacker holds you to it. Set a maximum tab count and the next one waits until you close something.</p>
            <div style={{ marginTop: 26, border: '1px solid #d8dbe7', borderRadius: 16, padding: '18px 20px', maxWidth: 380, background: '#f6f7fb' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#5b6079' }}>Tab limit</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 15, fontWeight: 700 }}>10 / 12</span>
              </div>
              <div style={{ marginTop: 12, height: 8, borderRadius: 9999, background: '#eceef5', overflow: 'hidden' }}>
                <div style={{ width: '83%', height: '100%', borderRadius: 9999, background: 'linear-gradient(90deg,#4f46e5,#818cf8)' }} />
              </div>
              <div style={{ marginTop: 9, fontSize: 12, color: '#7a8099' }}>Two left before the wall.</div>
            </div>
          </div>
        </div>

        {/* Feature 5 – dark mode */}
        <div className="reveal reveal-trigger" style={card({ display: 'grid', gridTemplateColumns: '1.02fr .98fr', background: '#0f172a', color: '#fff', border: '1px solid #0f172a' })}>
          <div style={{ padding: '52px 48px' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fdba74' }}>05 · After dark</div>
            <h3 style={{ margin: '16px 0 0', fontSize: 36, lineHeight: 1.12, letterSpacing: '-0.03em', fontWeight: 800 }}>Dark mode, for hour nine</h3>
            <p style={{ margin: '16px 0 0', fontSize: 16.5, lineHeight: 1.7, color: 'rgba(255,255,255,.62)' }}>Every screen ships in dark. Same stacks, same limits, same analytics — just easier on eyes that have been open since 9am.</p>
          </div>
          <div style={{ padding: 36, display: 'flex', alignItems: 'center', background: 'radial-gradient(ellipse 70% 60% at 70% 40%, rgba(79,70,229,.35), transparent 70%)' }}>
            <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 50px -28px rgba(0,0,0,.8)', position: 'relative' }}>
              <Image src={darkModePng} alt="Dark mode" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
