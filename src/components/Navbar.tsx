import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['ABOUT', 'TRACKS', 'TIMELINE', 'PRIZES', 'SPONSORS', 'FAQ', 'CONTACT'];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
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
        padding: '16px 24px',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1140px',
          background: scrolled ? 'rgba(6,18,38,0.95)' : 'rgba(6,18,38,0.75)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(201,168,76,0.22)',
          borderRadius: '12px',
          padding: '12px 28px',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.5)' : 'none',
          transition: 'all 0.3s ease',
        }}>
          {/* Logo */}
          <div
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '13px',
              color: 'var(--text-white)',
              letterSpacing: '2px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span style={{ color: 'var(--gold)' }}>VOYAGE</span>
            <span style={{ fontSize: '9px', color: 'var(--text-muted)' }}>2026</span>
          </div>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  padding: '4px 0',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                {link}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={() => scrollTo('register')}
              style={{
                background: 'var(--gold)',
                border: 'none',
                color: '#000',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                fontWeight: 700,
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--gold-light)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--gold)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              SET SAIL →
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none' }}
              className="mobile-menu-btn"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px', left: '16px', right: '16px',
          zIndex: 999,
          background: 'rgba(6,18,38,0.98)',
          border: '1px solid rgba(201,168,76,0.22)',
          borderRadius: '12px',
          padding: '20px',
          backdropFilter: 'blur(20px)',
        }}>
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                padding: '14px 0',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
