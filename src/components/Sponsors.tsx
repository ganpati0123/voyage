import { useEffect, useRef, useState } from 'react';

const sponsors = [
  {
    name: 'Algorand',
    tagline: 'The leading Layer-1 blockchain for the future of the decentralized seas',
    description: 'A high-performance Layer-1 blockchain forged for speed, security, and scalability. It empowers builders to craft decentralized applications, digital assets, and enterprise-grade blockchain solutions with near-instant finality and a pittance in transaction cost. Its energy-efficient Pure Proof-of-Stake consensus renders it a sustainable vessel for the next generation of Web3 voyages.',
    category: 'BLOCKCHAIN ALLY',
    accent: '#4a90d9',
    glow: 'rgba(74,144,217,0.32)',
  },
  {
    name: 'OSEN',
    tagline: 'Empowering hackathons & builder fleets across the realm',
    description: 'A technology-driven fellowship that champions hackathons, workshops, and developer crews by bestowing sponsorships, mentorship, speakers, swag, and growth opportunities. It allies with colleges, student communities, and ecosystem partners to help aspiring builders transform bold ideas into impactful treasures.',
    category: 'COMMUNITY ALLY',
    accent: '#d4af37',
    glow: 'rgba(212,175,55,0.32)',
  },
  {
    name: 'Mewayz Global Corporation',
    tagline: 'AI-powered business operating platform for the next wave of ventures',
    description: 'A part of Orcrys Technologies, Mewayz is an AI-powered Business Operating Platform helping ventures, creators, and enterprises scale through intelligent automation. With engineering and AI product crews in Kolkata, Mewayz forges advanced AI orchestration, Web3 solutions, CRM systems, website builders, payment management, and marketing tools within a unified deck. The company also collaborates with leading academies to nurture innovation, entrepreneurship, and venture development.',
    category: 'AI & TECH ALLY',
    accent: '#2db8a6',
    glow: 'rgba(45,184,166,0.32)',
  },
];

const Sponsors: React.FC = () => {
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
    <section id="sponsors" ref={sectionRef} className="noise-texture" style={{
      background: 'linear-gradient(180deg, #02060d 0%, #040c1a 100%)',
      padding: '130px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="grid-texture" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 68, textAlign: 'center' }}>
          <span className="section-label">The Brotherhood of Allies</span>
          <h2 style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            color: 'var(--text-white)',
            lineHeight: 0.95,
            marginTop: 18,
            animation: visible ? 'fadeInUp 0.9s ease' : 'none',
          }}>
            Backed by the <span className="gold-text">Finest</span>
          </h2>
          <div className="ornament" />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: 'rgba(141,165,196,0.62)',
            maxWidth: 540,
            margin: '0 auto',
            lineHeight: 1.9,
          }}>
            Industry titans powering Voyage with technology, counsel, and the resources to conquer
            the deep.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
          {sponsors.map((s, i) => (
            <SponsorCard key={i} sponsor={s} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SponsorCard: React.FC<{ sponsor: typeof sponsors[0]; index: number; visible: boolean }> = ({ sponsor, index, visible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card"
      style={{
        display: 'grid',
        gridTemplateColumns: '340px 1fr',
        gap: 0,
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? `0 24px 56px rgba(0,0,0,0.5), 0 0 0 1px ${sponsor.glow}` : 'none',
        animation: visible ? `fadeInUp 0.7s ease ${index * 120}ms both` : 'none',
      }}
    >
      {/* Left — logo area */}
      <div style={{
        background: `linear-gradient(135deg, ${sponsor.glow}, transparent)`,
        borderRight: `1px solid ${sponsor.accent}33`,
        padding: '48px 40px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -48, right: -48,
          width: 130, height: 130, borderRadius: '50%',
          background: `radial-gradient(circle, ${sponsor.glow} 0%, transparent 70%)`,
          opacity: hovered ? 0.7 : 0.22,
          transition: 'opacity 0.4s',
          pointerEvents: 'none',
        }} />
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px', color: sponsor.accent,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          marginBottom: 20,
          position: 'relative', zIndex: 1,
          fontWeight: 600,
        }}>{sponsor.category}</span>
        <h3 style={{
          fontFamily: 'var(--font-pirate)',
          fontSize: '30px', color: 'var(--text-white)',
          lineHeight: 1.15, marginBottom: 18,
          position: 'relative', zIndex: 1,
          textShadow: hovered ? `0 0 24px ${sponsor.glow}` : 'none',
          transition: 'text-shadow 0.3s',
        }}>{sponsor.name}</h3>
        <div style={{
          width: 54, height: 3,
          background: sponsor.accent,
          borderRadius: 2,
          boxShadow: `0 0 12px ${sponsor.glow}`,
        }} />
      </div>

      {/* Right — description */}
      <div style={{ padding: '44px 44px' }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '17px', color: 'rgba(240,244,250,0.9)',
          fontWeight: 600, lineHeight: 1.5,
          marginBottom: 18,
        }}>{sponsor.tagline}</p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13.5px', color: 'rgba(141,165,196,0.65)',
          lineHeight: 1.9,
        }}>{sponsor.description}</p>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .glass-card[style*="340px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Sponsors;
