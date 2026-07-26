import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'The Quest' },
  { href: '#tracks', label: 'Routes' },
  { href: '#timeline', label: 'Charts' },
  { href: '#prizes', label: 'Plunder' },
  { href: '#faq', label: 'Scrolls' },
  { href: '#contact', label: 'Quartermaster' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className="navbar">
        <a href="#hero" className="nav-logo">
          <span className="logo-anchor">⚓</span>
          VOYAGE <span>2026</span>
        </a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <a href="#register" className="nav-btn">Set Sail</a>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href="#register" className="mobile-menu-btn" onClick={close}>⚓ Set Sail</a>
      </div>
    </>
  )
}
