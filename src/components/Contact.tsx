import React, { useEffect, useRef, useState } from 'react';

const contacts = [
  { name: 'Ganpati Raj', phone: '+91 9507542854', email: '', role: 'Organizing Team' },
  { name: 'Krishna Raj Barnwal', phone: '+91 7320000215', email: '', role: 'Organizing Team' },
  { name: 'Ritusree Chanda', phone: '+91 7362994375', email: '', role: 'Organizing Team' },
  { name: 'Aditya Gaurav', phone: '+91 70291 62093', email: '', role: 'Organizing Team' },
  { name: 'Neeraj Sahu', phone: '+91 9336345475', email: '', role: 'Organizing Team' },
  { name: 'Moumita Mandal', phone: '+91 9229726302', email: '', role: 'Organizing Team' },
  { name: 'Omkar Kumar', phone: '+91 9631922222', email: '', role: 'Organizing Team' },
  { name: 'Mayank Raj', phone: '+91 8969212216', email: '', role: 'Organizing Team' },
];

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ContactCard: React.FC<{ c: typeof contacts[0]; delay: number; visible: boolean }> = ({ c, delay, visible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(16,37,68,0.95)' : 'rgba(12,29,56,0.85)',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 14,
        padding: '24px 22px',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        animation: visible ? `fadeInUp 0.6s ease ${delay}ms both` : 'none',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '8px', letterSpacing: '0.18em',
        color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase',
        marginBottom: 12, display: 'block',
      }}>{c.role}</span>

      <h3 style={{
        fontFamily: 'var(--font-pixel)',
        fontSize: '11px', color: 'var(--text-white)',
        marginBottom: 16, lineHeight: 1.5,
      }}>{c.name}</h3>

      <a href={`tel:${c.phone.replace(/[-\s]/g, '')}`} style={{
        display: 'flex', alignItems: 'center', gap: 10,
        fontFamily: 'var(--font-sans)', fontSize: '13px',
        color: hovered ? 'var(--text-white)' : 'rgba(255,255,255,0.6)',
        textDecoration: 'none', transition: 'color 0.2s',
      }}>
        <span style={{
          width: 30, height: 30, borderRadius: 8,
          background: 'rgba(255,255,255,0.04)',
          border: `1px solid ${hovered ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.08)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: hovered ? 'var(--gold)' : 'rgba(255,255,255,0.5)',
          flexShrink: 0, transition: 'all 0.25s',
        }}><PhoneIcon /></span>
        {c.phone}
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
      background: 'var(--bg-dark)',
      padding: '100px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="section-label">CONTACTS</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(20px, 2.8vw, 36px)',
            marginTop: 12,
            color: 'var(--text-white)',
            animation: visible ? 'fadeInUp 0.8s ease' : 'none',
          }}>
            Connect <span style={{ color: 'var(--gold)' }}>With Us</span>
          </h2>
          <div style={{
            width: 56, height: 2,
            background: 'var(--gold)',
            margin: '20px auto 28px',
            animation: visible ? 'fadeInUp 0.8s ease 0.1s both' : 'none',
          }} />
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14, color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.8, maxWidth: 560, margin: '0 auto',
            animation: visible ? 'fadeInUp 0.8s ease 0.15s both' : 'none',
          }}>
            Have questions about Voyage 2026? Reach out to our organizing team — we're here to help you set sail.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
        }}>
          {contacts.map((c, i) => (
            <ContactCard key={i} c={c} delay={i * 80} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact > div:last-child > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          #contact > div:last-child > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
