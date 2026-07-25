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
  { label: 'About the Event', id: 'about' },
  { label: 'Focus Areas & Tracks', id: 'tracks' },
  { label: 'Schedule & Timeline', id: 'timeline' },
  { label: 'Prizes & Tracks', id: 'prizes' },
  { label: 'Inquiry & FAQs', id: 'faq' },
];

const FooterLink: React.FC<{ href?: string; onClick?: () => void; children: React.ReactNode }> = ({ href, onClick, children }) => {
  const style: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: 8,
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    color: 'var(--text-muted)',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    textAlign: 'left' as const,
    transition: 'color 0.2s',
  };
  const hover = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.color = 'var(--text-white)');
  const leave = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.color = 'var(--text-muted)');

  if (href) {
    return <a href={href} style={style} target="_blank" rel="noreferrer" onMouseEnter={hover} onMouseLeave={leave}>{children}</a>;
  }
  return <button onClick={onClick} style={style} onMouseEnter={hover} onMouseLeave={leave}>{children}</button>;
};

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const colTitle = (text: string) => (
    <p className="pixel-heading" style={{
      fontSize: 9, color: 'var(--gold)',
      marginBottom: 24, letterSpacing: '0.1em',
    }}>
      {text}
    </p>
  );

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
          <p className="pixel-heading" style={{ fontSize: 14, color: 'var(--gold)', marginBottom: 18, letterSpacing: '0.08em' }}>
            HACKVERSE 2.0
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            maxWidth: 320,
          }}>
            Pan-India AI Hackathon hosted by Manipal Institute of Technology
            Bengaluru in partnership with IBM and 1M1B.
          </p>
        </div>

        {/* Navigation */}
        <div>
          {colTitle('NAVIGATION')}
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
            {navItems.map(item => (
              <li key={item.id}>
                <FooterLink onClick={() => scrollTo(item.id)}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          {colTitle('CONTACT & HELP')}
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
            <li>
              <FooterLink href="mailto:hackversemitb@gmail.com">
                <MailIcon /> hackversemitb@gmail.com
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://instagram.com">
                <InstaIcon /> Instagram Page →
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://linkedin.com">
                <LinkedinIcon /> LinkedIn Profile →
              </FooterLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
        padding: '20px 24px',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-dim)',
        letterSpacing: '0.08em',
      }}>
        © 2026 Manipal Institute of Technology Bengaluru. All rights reserved.
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; }
          footer > div:first-child > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 600px) {
          footer > div:first-child { grid-template-columns: 1fr !important; padding: 40px 24px 32px !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
