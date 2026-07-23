import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleLink = () => setOpen(false)

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">VOYAGE <span>2026</span></a>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        <li><a href="#about" onClick={handleLink}>About</a></li>
        <li><a href="#tracks" onClick={handleLink}>Tracks</a></li>
        <li><a href="#timeline" onClick={handleLink}>Timeline</a></li>
        <li><a href="#prizes" onClick={handleLink}>Prizes</a></li>
        <li><a href="#sponsors" onClick={handleLink}>Sponsors</a></li>
        <li><a href="#faq" onClick={handleLink}>FAQ</a></li>
        <li><a href="#contact" onClick={handleLink}>Contact</a></li>
      </ul>
      <a href="#register" className="nav-btn">REGISTER NOW →</a>
      <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
