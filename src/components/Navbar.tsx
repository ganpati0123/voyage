import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'THE TALE', id: 'about' },
  { label: 'THE WATERS', id: 'tracks' },
  { label: "CAPTAIN'S LOG", id: 'timeline' },
  { label: 'TREASURE', id: 'prizes' },
  { label: 'ALLIES', id: 'sponsors' },
  { label: 'CODEX', id: 'faq' },
  { label: 'PARLEY', id: 'contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px 24px',
        transition: 'padding 0.4s ease',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1180px',
          background: scrolled ? 'rgba(2,6,13,0.94)' : 'rgba(2,6,13,0.55)',
          backdropFilter: 'blur(26px)',
          border: `1px solid ${scrolled ? 'rgba(212,175,55,0.4)' : 'rgba(212,175,55,0.16)'}`,
          borderRadius: '16px',
          padding: '15px 34px',
          boxShadow: scrolled
            ? '0 16px 48px rgba(0,0,0,0.7), inset 0 1px 0 rgba(212,175,55,0.12)'
            : '0 6px 24px rgba(0,0,0,0.4)',
          transition: 'all 0.4s ease',
          position: 'relative',
        }}>
          {/* Corner ornaments */}
          {['tl','tr','bl','br'].map((c) => (
            <div key={c} className={`corner-orn ${c}`} />
          ))}

          {/* Logo — anchor crest */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 13, cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.5))' }}>
              <circle cx="12" cy="5" r="3" />
              <line x1="12" y1="22" x2="12" y2="8" />
              <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
            </svg>
            <span className="gold-glow" style={{
              fontFamily: 'var(--font-pirate)',
              fontSize: '24px',
              letterSpacing: '0.05em',
            }}>Voyage</span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              color: 'rgba(141,165,196,0.6)',
              letterSpacing: '0.18em',
              border: '1px solid rgba(212,175,55,0.32)',
              borderRadius: 5,
              padding: '3px 8px',
            }}>MMXXVI</span>
          </div>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(212,220,235,0.65)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  padding: '4px 0',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--gold-6)';
                  e.currentTarget.style.textShadow = '0 0 12px rgba(212,175,55,0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(212,220,235,0.65)';
                  e.currentTarget.style.textShadow = 'none';
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <button className="btn-treasure" onClick={() => scrollTo('register')} style={{ padding: '12px 24px', fontSize: '12px' }}>
              SET SAIL →
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', color: 'var(--gold-6)', cursor: 'pointer', display: 'none' }}
              className="mobile-menu-btn"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '84px', left: '16px', right: '16px',
          zIndex: 999,
          background: 'rgba(2,6,13,0.98)',
          border: '1px solid rgba(212,175,55,0.28)',
          borderRadius: '16px',
          padding: '26px',
          backdropFilter: 'blur(26px)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.7)',
        }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                color: 'rgba(212,220,235,0.78)',
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                letterSpacing: '0.18em',
                fontWeight: 600,
                padding: '17px 0',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-6)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(212,220,235,0.78)')}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
