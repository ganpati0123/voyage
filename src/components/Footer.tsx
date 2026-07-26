import { useEffect, useRef } from 'react';

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const InstaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navItems = [
  { label: 'The Tale of Voyage', id: 'about' },
  { label: 'The Waters', id: 'tracks' },
  { label: "Captain's Log", id: 'timeline' },
  { label: 'The Treasure Cove', id: 'prizes' },
  { label: 'The Brotherhood', id: 'sponsors' },
  { label: "Captain's Code", id: 'guidelines' },
  { label: 'The Codex', id: 'faq' },
];

const Footer: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const linkStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: 9,
    fontFamily: 'var(--font-display)',
    fontSize: 13,
    fontWeight: 600,
    color: 'rgba(141,165,196,0.62)',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none', border: 'none', padding: 0,
    textAlign: 'left' as const,
    transition: 'color 0.2s',
  };

  return (
    <footer ref={ref} style={{
      background: 'linear-gradient(180deg, #02060d 0%, #01030a 100%)',
      borderTop: '1px solid rgba(212,175,55,0.12)',
      position: 'relative',
      overflow: 'hidden',
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'opacity 0.9s ease, transform 0.9s ease',
    }}>
      {/* Top decorative wave */}
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 44, opacity: 0.5 }}>
        <path d="M0,36 C360,56 720,16 1080,36 C1260,46 1380,26 1440,36 L1440,0 L0,0 Z" fill="rgba(212,175,55,0.04)" />
      </svg>

      <div className="section-container footer-grid" style={{
        padding: '84px 48px 52px',
        position: 'relative', zIndex: 1,
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 22 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.5))' }}>
              <circle cx="12" cy="5" r="3" />
              <line x1="12" y1="22" x2="12" y2="8" />
              <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
            </svg>
            <p className="gold-text" style={{
              fontFamily: 'var(--font-pirate)',
              fontSize: '30px',
              letterSpacing: '0.05em',
            }}>Voyage 2026</p>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px', color: 'rgba(141,165,196,0.6)',
            lineHeight: 1.9, maxWidth: 360, marginBottom: 22,
          }}>
            A 36-hour national odyssey by the GRID Fleet. Sail beyond limits, build beyond
            horizons, and plunder the depths of innovation.
          </p>
          <p className="gold-glow" style={{
            fontFamily: 'var(--font-display)',
            fontSize: '13px',
            letterSpacing: '0.16em', fontWeight: 700,
          }}>26 | 27 SEPTEMBER MMXXVI</p>
        </div>

        {/* Navigation */}
        <div>
          <p style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: '17px', color: 'var(--gold-6)',
            marginBottom: 26, letterSpacing: '0.05em',
          }}>NAVIGATE</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollTo(item.id)} style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-6)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(141,165,196,0.62)')}
                >{item.label}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: '17px', color: 'var(--gold-6)',
            marginBottom: 26, letterSpacing: '0.05em',
          }}>SEND A RAVEN</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 15 }}>
            <li>
              <a href="mailto:gridcommunity@example.com" target="_blank" rel="noreferrer" style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-6)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(141,165,196,0.62)')}
              ><MailIcon /> gridcommunity@example.com</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-6)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(141,165,196,0.62)')}
              ><InstaIcon /> The Instagram Tavern →</a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-6)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(141,165,196,0.62)')}
              ><LinkedinIcon /> The LinkedIn Guild →</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
        padding: '26px',
        fontFamily: 'var(--font-display)',
        fontSize: '12px', color: 'rgba(141,165,196,0.4)',
        letterSpacing: '0.12em', fontWeight: 600,
      }}>
        © MMXXVI GRID FLEET · ALL TREASURES RESERVED
      </div>

      <style>{`
        @media (max-width: 800px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; padding: 52px 26px 36px !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
