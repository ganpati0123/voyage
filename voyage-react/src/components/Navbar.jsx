import { useState, useEffect } from 'react'

const links = [
  { href: '#about',   label: 'The Quest' },
  { href: '#tracks',  label: 'Routes' },
  { href: '#timeline',label: 'Charts' },
  { href: '#prizes',  label: 'Plunder' },
  { href: '#faq',     label: 'Scrolls' },
  { href: '#contact', label: 'Quartermaster' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Track screen width — if ≤768px, it's mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <a href="#hero" className="nav-logo">
          <span className="logo-anchor">⚓</span>
          VOYAGE <span>2026</span>
        </a>

        {/* Desktop: nav links (hidden on mobile via CSS) */}
        {!isMobile && (
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        )}

        {/* Desktop only: Set Sail button — not rendered at all on mobile */}
        {!isMobile && (
          <a href="#register" className="nav-btn">Set Sail</a>
        )}

        {/* Mobile only: hamburger — not rendered on desktop */}
        {isMobile && (
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        )}
      </nav>

      {/* Mobile slide-down menu — only rendered on mobile */}
      {isMobile && (
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          {/* Set Sail lives here on mobile */}
          <a href="#register" className="mobile-menu-btn" onClick={close}>
            ⚓ Set Sail
          </a>
        </div>
      )}
    </>
  )
}
