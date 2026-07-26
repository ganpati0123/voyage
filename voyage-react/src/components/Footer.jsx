export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-anchor">⚓</span>
            VOYAGE <span style={{ color: 'var(--gold)' }}>2026</span>
          </div>
          <p className="footer-tagline">
            Sail beyond the horizon. A 36-hour national hackathon by GRID Community —
            where corsairs of code conquer the uncharted digital seas.
          </p>
          <div className="footer-social">
            {/* Twitter/X */}
            <button className="social-btn" aria-label="Twitter">
              <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </button>
            {/* Instagram */}
            <button className="social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </button>
            {/* LinkedIn */}
            <button className="social-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </button>
            {/* Discord */}
            <button className="social-btn" aria-label="Discord">
              <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.133 18.114a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div className="footer-col-title">Navigate</div>
          <ul className="footer-links">
            <li><a href="#about">The Quest</a></li>
            <li><a href="#tracks">Trade Routes</a></li>
            <li><a href="#timeline">Expedition Log</a></li>
            <li><a href="#rounds">Battle Rounds</a></li>
            <li><a href="#prizes">The Plunder</a></li>
          </ul>
        </div>

        {/* More */}
        <div>
          <div className="footer-col-title">The Fleet</div>
          <ul className="footer-links">
            <li><a href="#sponsors">Allied Guilds</a></li>
            <li><a href="#faq">Captain's Scrolls</a></li>
            <li><a href="#contact">Quartermaster</a></li>
            <li><a href="#register">Set Sail</a></li>
            <li><a href="mailto:contact@gridcommunity.in">Send a Missive</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          © {year} <span>GRID Community</span> — All rights reserved. Voyage 2026.
        </span>
        <span className="footer-grid-by">
          Crafted by the <span style={{ color: 'var(--gold)', opacity: 0.7 }}>GRID Armada</span>
        </span>
      </div>
    </footer>
  )
}
