import React from 'react';

const MailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const InstaIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navItems = [
  { label: 'About Voyage', id: 'about' },
  { label: 'Voyage Arena', id: 'tracks' },
  { label: "Captain's Log", id: 'timeline' },
  { label: 'Treasure Cove', id: 'prizes' },
  { label: 'Our Sponsors', id: 'sponsors' },
  { label: 'Guidelines', id: 'guidelines' },
  { label: 'FAQs', id: 'faq' },
];

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const linkStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: 8,
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    color: 'rgba(255,255,255,0.5)',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none', border: 'none', padding: 0,
    textAlign: 'left' as const,
    transition: 'color 0.2s',
  };

  return (
    <footer style={{
      background: 'var(--bg-deep)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '64px 48px 48px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: '48px 64px',
      }}>
        {/* Brand */}
        <div>
          <p className="pixel-heading" style={{
            fontSize: 14, color: 'var(--gold)',
            marginBottom: 18, letterSpacing: '0.08em',
          }}>VOYAGE 2026</p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13, color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.8, maxWidth: 320, marginBottom: 16,
          }}>
            A 36-hour national hackathon by GRID Community. Sail beyond limits, build beyond horizons.
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10, color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.1em',
          }}>26 | 27 SEPTEMBER 2026</p>
        </div>

        {/* Navigation */}
        <div>
          <p className="pixel-heading" style={{
            fontSize: 9, color: 'var(--gold)',
            marginBottom: 24, letterSpacing: '0.1em',
          }}>NAVIGATION</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
            {navItems.map(item => (
              <li key={item.id}>
                <button onClick={() => scrollTo(item.id)} style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-white)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >{item.label}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="pixel-heading" style={{
            fontSize: 9, color: 'var(--gold)',
            marginBottom: 24, letterSpacing: '0.1em',
          }}>CONNECT</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
            <li>
              <a href="mailto:gridcommunity@example.com" target="_blank" rel="noreferrer" style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-white)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              ><MailIcon /> gridcommunity@example.com</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-white)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              ><InstaIcon /> Instagram Page →</a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-white)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              ><LinkedinIcon /> LinkedIn Profile →</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
        padding: '20px 24px',
        fontFamily: 'var(--font-mono)',
        fontSize: 11, color: 'rgba(255,255,255,0.25)',
        letterSpacing: '0.08em',
      }}>
        © 2026 GRID Community. All rights reserved.
      </div>

      <style>{`
        @media (max-width: 800px) {
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; }
          footer > div:first-child > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 500px) {
          footer > div:first-child { grid-template-columns: 1fr !important; padding: 40px 24px 32px !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
