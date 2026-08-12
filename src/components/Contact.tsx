import { useEffect, useRef, useState } from 'react';
import SketchfabEmbed from './SketchfabEmbed';

const contacts = [
  { name: 'Ganpati Raj', phone: '+91 9507542854', role: 'The Organizing Crew' },
  { name: 'Krishna Raj Barnwal', phone: '+91 7320000215', role: 'The Organizing Crew' },
  { name: 'Ritusree Chanda', phone: '+91 7362994375', role: 'The Organizing Crew' },
  { name: 'Aditya Gaurav', phone: '+91 70291 62093', role: 'The Organizing Crew' },
  { name: 'Neeraj Sahu', phone: '+91 9336345475', role: 'The Organizing Crew' },
  { name: 'Moumita Mandal', phone: '+91 9229726302', role: 'The Organizing Crew' },
  { name: 'Omkar Kumar', phone: '+91 9631922222', role: 'The Organizing Crew' },
  { name: 'Mayank Raj', phone: '+91 8969212216', role: 'The Organizing Crew' },
];

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ContactCard: React.FC<{ c: typeof contacts[0]; delay: number; visible: boolean }> = ({ c, delay, visible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card"
      style={{
        padding: '30px 26px',
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-8px) scale(1.03)' : 'translateY(0)',
        boxShadow: hovered ? '0 22px 52px rgba(0,0,0,0.45)' : 'none',
        animation: visible ? `fadeInUp 0.6s ease ${delay}ms both` : 'none',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '8px', letterSpacing: '0.22em',
        color: 'rgba(141,165,196,0.5)', textTransform: 'uppercase',
        marginBottom: 16, display: 'block', fontWeight: 600,
      }}>{c.role}</span>

      <h3 style={{
        fontFamily: 'var(--font-pirate)',
        fontSize: '22px', color: 'var(--text-white)',
        marginBottom: 20, lineHeight: 1.2,
      }}>{c.name}</h3>

      <a href={`tel:${c.phone.replace(/[-\s]/g, '')}`} style={{
        display: 'flex', alignItems: 'center', gap: 13,
        fontFamily: 'var(--font-body)', fontSize: '14px',
        color: hovered ? 'var(--text-white)' : 'rgba(212,220,235,0.68)',
        textDecoration: 'none', transition: 'color 0.2s',
      }}>
        <span style={{
          width: 36, height: 36, borderRadius: 11,
          background: hovered ? 'rgba(212,175,55,0.2)' : 'rgba(255,255,255,0.04)',
          border: `1px solid ${hovered ? 'rgba(212,175,55,0.32)' : 'rgba(255,255,255,0.08)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: hovered ? 'var(--gold-6)' : 'rgba(141,165,196,0.55)',
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
    <section id="contact" ref={sectionRef} className="noise-texture" style={{
      background: 'linear-gradient(180deg, #01060f 0%, #000206 100%)',
      padding: '130px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="grid-texture" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div className="section-container" style={{ maxWidth: '1140px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 68 }}>
          <span className="section-label">Parley with the Crew</span>
          <h2 style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            color: 'var(--text-white)',
            lineHeight: 0.95,
            marginTop: 18,
            animation: visible ? 'fadeInUp 0.9s ease' : 'none',
          }}>
            Send a <span className="gold-text">Raven</span>
          </h2>
          <div className="ornament" />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15, color: 'rgba(141,165,196,0.62)',
            lineHeight: 1.85, maxWidth: 580, margin: '0 auto',
            animation: visible ? 'fadeInUp 0.9s ease 0.15s both' : 'none',
          }}>
            Have questions about the Voyage? Send word to our organizing crew — we stand ready to
            help ye set sail.
          </p>
        </div>

        <div className="grid-contact">
          {contacts.map((c, i) => (
            <ContactCard key={i} c={c} delay={i * 80} visible={visible} />
          ))}
        </div>

        {/* 3D Sketchfab model — Mobile Home (foreground visual) */}
        <div style={{
          maxWidth: 600,
          margin: '80px auto 0',
          animation: visible ? 'fadeInUp 1s ease 0.6s both' : 'none',
        }}>
          <SketchfabEmbed
            modelId="5240b1dbc29c4ea28be7f91b3638951a"
            title="Mobile Home"
          />
        </div>
      </div>

    </section>
  );
};

export default Contact;
