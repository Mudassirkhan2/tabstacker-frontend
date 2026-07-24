const CHROME_URL = 'https://chrome.google.com/webstore/detail/tabstacker/mjlmgopdnpogajcjhgeppgbgnpdjnjgm'

export default function CTASection() {
  return (
    <section
      id="cta"
      style={{
        position: 'relative',
        background: 'linear-gradient(90deg,#4338ca 0%,#4f46e5 50%,#6366f1 100%)',
        padding: '96px 0',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.18) 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.35, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(36px,5vw,56px)', lineHeight: 1.04, letterSpacing: '-0.04em', color: '#fff', fontWeight: 800 }}>
          <span style={{ fontWeight: 300, opacity: 0.8 }}>Close 40 tabs.</span>{' '}
          <span style={{ fontWeight: 800 }}>Keep every thought.</span>
        </h2>
        <p style={{ margin: '18px auto 0', maxWidth: 520, fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,.8)' }}>
          Free, works with your Google account, about a minute to set up.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
          <a href={CHROME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-xl btn-accent">
            Add to Chrome — free
          </a>
          <a href="#ch4" className="btn btn-xl btn-dark-outline">
            Watch the demo
          </a>
        </div>
      </div>
    </section>
  )
}
