'use client'
import Link from 'next/link'
import Image from 'next/image'
import logoIcon from '../app/assets/logoIcon.svg'

const CHROME_URL = 'https://chrome.google.com/webstore/detail/tabstacker/mjlmgopdnpogajcjhgeppgbgnpdjnjgm'
const COLAB_URL = 'https://www.joincolab.io/product/tabstacker'

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: 'rgba(255,255,255,.5)', padding: '44px 0', borderTop: '1px solid rgba(255,255,255,.06)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image src={logoIcon} alt="TabStacker logo" width={28} height={28} />
          <span style={{ fontWeight: 700, color: '#fff', fontSize: 15 }}>TabStacker</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>© {new Date().getFullYear()}</span>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 13.5, flexWrap: 'wrap' }}>
          <a href={COLAB_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none', transition: 'color 0.2s' }}
             onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
             onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.5)')}>
            Team
          </a>
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none', transition: 'color 0.2s' }}>
            Privacy &amp; policy
          </Link>
          <a href={CHROME_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none', transition: 'color 0.2s' }}
             onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
             onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.5)')}>
            Chrome Web Store
          </a>
        </div>
      </div>
    </footer>
  )
}
