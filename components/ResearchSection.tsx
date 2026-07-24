'use client'
import { useEffect, useRef } from 'react'

const SURVEY_BARS = [
  { label: '9–12 hours', pct: 39.1, color: 'linear-gradient(90deg,#f97316,#fb923c)', suffix: '%', decimals: 1, delay: 0 },
  { label: '5–8 hours', pct: 32.6, color: 'linear-gradient(90deg,#4f46e5,#818cf8)', suffix: '%', decimals: 1, delay: 100 },
  { label: 'Feel only "somewhat productive"', pct: 54, color: 'linear-gradient(90deg,#059669,#34d399)', suffix: '%', decimals: 0, delay: 200 },
]

function SurveyBar({ label, pct, color, suffix, decimals, delay }: (typeof SURVEY_BARS)[0]) {
  const barRef = useRef<HTMLDivElement>(null)
  const numRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const bar = barRef.current
    const num = numRef.current
    if (!bar || !num) return
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return
      setTimeout(() => {
        bar.style.width = `${pct}%`
        const start = performance.now()
        const step = (now: number) => {
          const p = Math.min((now - start) / 1300, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          num.textContent = (pct * eased).toFixed(decimals) + suffix
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }, delay)
      observer.disconnect()
    }, { threshold: 0.3 })
    observer.observe(bar)
    return () => observer.disconnect()
  }, [pct, suffix, decimals, delay])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 9 }}>
        <span style={{ fontSize: 14.5, fontWeight: 600 }}>{label}</span>
        <span ref={numRef} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16, fontWeight: 700, color: '#fb923c' }}>0{suffix}</span>
      </div>
      <div style={{ height: 10, borderRadius: 9999, background: 'rgba(255,255,255,.08)', overflow: 'hidden' }}>
        <div
          ref={barRef}
          style={{ width: 0, height: '100%', borderRadius: 9999, background: color, transition: `width 1.3s cubic-bezier(.22,1,.36,1) ${delay}ms` }}
        />
      </div>
    </div>
  )
}

export default function ResearchSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return
      el.querySelectorAll('.reveal').forEach(r => r.classList.add('visible'))
      if (countRef.current) {
        const num = countRef.current
        const start = performance.now()
        const step = (now: number) => {
          const p = Math.min((now - start) / 1100, 1)
          num.textContent = String(Math.round(48 * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
      observer.unobserve(el)
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="ch3"
      style={{ position: 'relative', background: 'linear-gradient(180deg,#0f172a 0%,#1e1b4b 100%)', padding: '120px 0 130px', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', right: '6%', top: 70, fontSize: 'clamp(150px,25vw,300px)', fontWeight: 900, lineHeight: 1, color: '#f97316', opacity: 0.055, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em' }}>
        03
      </div>

      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div className="reveal" style={{ maxWidth: 720 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a5b4fc' }}>
            Chapter 03 — The evidence
          </div>
          <h2 style={{ margin: '14px 0 0', fontSize: 'clamp(32px,4vw,54px)', lineHeight: 1.05, letterSpacing: '-0.035em', fontWeight: 800 }}>
            <span style={{ fontWeight: 300, color: '#fff', opacity: 0.7 }}>We stopped guessing</span>{' '}
            <span style={{ fontWeight: 800, color: '#fff' }}>and asked 48 people.</span>
          </h2>
          <p style={{ margin: '18px 0 0', fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,.6)', maxWidth: 560 }}>
            Maria ran three long interviews. Lisa turned the stories into a survey. What came back split the audience into two personas — and gave us the feature list.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, marginTop: 52, alignItems: 'start' }}>
          {/* Interview cards */}
          <div>
            <div className="reveal" style={{ transform: 'rotate(-1.1deg)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 4, background: '#fffdf7', color: '#0f172a', padding: '32px 34px', boxShadow: '0 40px 70px -40px rgba(0,0,0,.8)' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a8099' }}>
                Interview 02 · tech industry · 6–8h/day
              </div>
              <p style={{ margin: '18px 0 0', fontSize: 22, lineHeight: 1.55, fontWeight: 500 }}>
                &ldquo;When switching between tabs, I found myself having three of the same tabs open at once. This was an indication for me that I overworked.&rdquo;
              </p>
              <div style={{ marginTop: 22, height: 1, background: 'repeating-linear-gradient(90deg,#d8dbe7 0 6px,transparent 6px 12px)' }} />
              <div style={{ marginTop: 14, fontSize: 13, color: '#5b6079' }}>
                She needs several related tabs at once — a CRM pipeline, two workflows — and loses her place between them.
              </div>
            </div>

            <div className="reveal" data-delay="2" style={{ marginTop: 20, transform: 'rotate(1.4deg)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 4, background: '#f6f7fb', color: '#0f172a', padding: '22px 26px', boxShadow: '0 30px 60px -40px rgba(0,0,0,.8)' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a8099' }}>
                Field notes
              </div>
              <div style={{ display: 'flex', gap: 26, marginTop: 14, flexWrap: 'wrap' }}>
                {[{ n: '3', label: 'interviews', c: '#4f46e5' }, { n: '48', label: 'survey responses', c: '#4f46e5' }, { n: '2', label: 'personas', c: '#4f46e5' }, { n: '4', label: 'core features shipped', c: '#f97316' }].map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 26, fontWeight: 700, color: s.c }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: '#5b6079', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Survey chart */}
          <div className="reveal" data-delay="1" style={{ border: '1px solid rgba(255,255,255,.12)', borderRadius: 20, background: 'rgba(15,23,42,.55)', padding: '32px 34px', backdropFilter: 'blur(6px)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' }}>
                Survey · daily screen time
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'rgba(255,255,255,.45)' }}>
                n = <span ref={countRef} style={{ color: '#fff', fontWeight: 700 }}>0</span>
              </span>
            </div>

            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 24 }}>
              {SURVEY_BARS.map(bar => (
                <SurveyBar key={bar.label} {...bar} />
              ))}
            </div>

            <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
              <div style={{ flex: 1, border: '1px solid rgba(255,255,255,.10)', borderRadius: 14, padding: '16px', background: 'rgba(129,140,248,.08)' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#a5b4fc' }}>Persona 01</div>
                <div style={{ marginTop: 7, fontSize: 14.5, fontWeight: 700 }}>Needs a tool, today</div>
              </div>
              <div style={{ flex: 1, border: '1px solid rgba(255,255,255,.10)', borderRadius: 14, padding: '16px', background: 'rgba(249,115,22,.08)' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#fdba74' }}>Persona 02</div>
                <div style={{ marginTop: 7, fontSize: 14.5, fontWeight: 700 }}>Will try one, if it earns it</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
