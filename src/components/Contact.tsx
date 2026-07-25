import React, { useEffect, useRef, useState } from 'react';

const contacts = [
  {
    name: 'Mr. Ashwin Gupta',
    role: 'EXECUTIVE MEMBER, ACM SIG SOFT',
    phone: '+91-7994360429',
    email: 'ashwin2.mitblr2024@learner.manipal.edu',
  },
  {
    name: 'Mr. Sai Tej Badiyaram',
    role: 'GENERAL SECRETARY, ACM SIG SOFT',
    phone: '+91-7396029151',
    email: 'saitej.mitblr2024@learner.manipal.edu',
  },
  {
    name: 'Mr. Thushar Maiya',
    role: 'EXECUTIVE SECRETARY, ACM SIG SOFT',
    phone: '+91-8095734514',
    email: 'thushar.mitblr2024@learner.manipal.edu',
  },
];

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ContactCard: React.FC<{ c: typeof contacts[0]; delay: number; visible: boolean }> = ({ c, delay, visible }) => {
  const [hovered, setHovered] = useState(false);

  const iconBox: React.CSSProperties = {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 32, height: 32, flexShrink: 0,
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${hovered ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: 8,
    color: hovered ? 'var(--gold)' : 'var(--text-muted)',
    transition: 'border-color 0.25s, color 0.25s',
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(16,26,46,0.95)' : 'rgba(11,18,34,0.8)',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 16,
        padding: '28px 24px',
        display: 'flex', flexDirection: 'column', gap: 0,
        transition: 'background 0.25s, border-color 0.25s, transform 0.25s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        animation: visible ? `fadeInUp 0.7s ease ${delay}ms both` : 'none',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '8px',
        letterSpacing: '0.18em',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        marginBottom: 14,
      }}>
        CONTACT PERSON
      </span>

      <h3 className="pixel-heading" style={{
        fontSize: 12,
        color: 'var(--text-white)',
        marginBottom: 10,
        lineHeight: 1.6,
      }}>
        {c.name}
      </h3>

      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px',
        letterSpacing: '0.1em',
        color: 'var(--text-dim)',
        textTransform: 'uppercase',
        marginBottom: 22,
        lineHeight: 1.6,
      }}>
        {c.role}
      </p>

      <a
        href={`tel:${c.phone.replace(/[-\s]/g, '')}`}
        style={{
          display: 'flex', alignItems: 'center', gap: 12,
          fontFamily: 'var(--font-sans)', fontSize: 13,
          color: 'var(--text-muted)', textDecoration: 'none',
          marginBottom: 10, transition: 'color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-white)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        <span style={iconBox}><PhoneIcon /></span>
        {c.phone}
      </a>

      <a
        href={`mailto:${c.email}`}
        style={{
          display: 'flex', alignItems: 'center', gap: 12,
          fontFamily: 'var(--font-sans)', fontSize: 12,
          color: 'var(--text-muted)', textDecoration: 'none',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-white)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        <span style={iconBox}><MailIcon /></span>
        {c.email}
      </a>
    </div>
  );
};

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} style={{
      background: 'var(--bg-deep)',
      padding: '100px 48px',
      position: 'relative',
    }}>
      {/* grid bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.01) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="section-label">GET IN TOUCH</span>
          <h2
            className="pixel-heading"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 42px)',
              marginTop: 12,
              color: 'var(--text-white)',
              animation: visible ? 'fadeInUp 0.8s ease' : 'none',
            }}
          >
            CONNECT{' '}
            <span style={{ color: 'var(--gold)' }}>WITH US</span>
          </h2>

          {/* Gold divider */}
          <div style={{
            width: 56, height: 2,
            background: 'var(--gold)',
            margin: '20px auto 28px',
            animation: visible ? 'fadeInUp 0.8s ease 0.1s both' : 'none',
          }} />

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            maxWidth: 580,
            margin: '0 auto',
            animation: visible ? 'fadeInUp 0.8s ease 0.15s both' : 'none',
          }}>
            Have questions regarding HackVerse 2.0? Reach out to our organizing team or connect with
            MITB ACM through our official channels.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {contacts.map((c, i) => (
            <ContactCard key={i} c={c} delay={i * 100} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
