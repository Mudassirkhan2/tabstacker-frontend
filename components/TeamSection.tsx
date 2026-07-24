'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const TEAM = [
  { role: 'Product', name: 'Maria Dmitrieva', img: '/Maria.jpg', rotate: '-1deg', color: '#a5b4fc' },
  { role: 'Design', name: 'Lisa Weng', img: '/Lisa.jpg', rotate: '0.8deg', color: '#a5b4fc' },
  { role: 'Engineering', name: 'Mudassir Khan', img: '/Mudassir.jpg', rotate: '-0.6deg', color: '#a5b4fc' },
  { role: 'Engineering', name: 'Manas Verma', img: '/Manas.jpg', rotate: '1deg', color: '#a5b4fc' },
]

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return
      el.querySelectorAll('.reveal').forEach(r => r.classList.add('visible'))
      observer.unobserve(el)
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="team"
      style={{ background: '#0f172a', padding: '20px 0 110px' }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div className="reveal" style={{ maxWidth: 620 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#818cf8' }}>
            The crew
          </div>
          <h2 style={{ margin: '14px 0 0', fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: 1.08, letterSpacing: '-0.035em', fontWeight: 800 }}>
            <span style={{ fontWeight: 300, opacity: 0.7 }}>Four people,</span>{' '}
            <span style={{ fontWeight: 800 }}>one very full tab strip.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 44 }}>
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className="reveal lift"
              data-delay={String(Math.min(i, 3))}
              style={{
                border: '1px solid rgba(255,255,255,.10)',
                borderRadius: 18,
                background: 'rgba(255,255,255,.04)',
                padding: 20,
                transform: `rotate(${member.rotate})`,
                overflow: 'hidden',
              }}
            >
              <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
                <Image src={member.img} alt={member.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ marginTop: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: member.color }}>
                {member.role}
              </div>
              <h3 style={{ margin: '7px 0 0', fontSize: 15.5, fontWeight: 700, color: '#fff' }}>{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
