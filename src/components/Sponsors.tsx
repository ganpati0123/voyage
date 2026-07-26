import React, { useEffect, useRef, useState } from 'react';

const sponsors = [
  {
    name: 'Algorand',
    tagline: 'Leading Layer-1 Blockchain for the Future of Web3',
    description: 'A high-performance Layer-1 blockchain platform designed for speed, security, and scalability. It enables developers to build decentralized applications, digital assets, and enterprise-grade blockchain solutions with near-instant finality and low transaction costs. Its energy-efficient Pure Proof-of-Stake consensus makes it a sustainable choice for the next generation of Web3 innovation.',
    category: 'BLOCKCHAIN PARTNER',
    accent: 'rgba(60,140,220,0.15)',
    border: 'rgba(60,140,220,0.3)',
  },
  {
    name: 'OSEN',
    tagline: 'Empowering Hackathons & Developer Communities Across India',
    description: 'A technology-driven organization that supports hackathons, workshops, and developer communities by providing sponsorships, mentorship, speakers, swags, and community growth opportunities. It collaborates with colleges, student communities, and ecosystem partners to help aspiring builders transform innovative ideas into impactful projects.',
    category: 'COMMUNITY PARTNER',
    accent: 'rgba(201,168,76,0.15)',
    border: 'rgba(201,168,76,0.3)',
  },
  {
    name: 'Mewayz Global Corporation',
    tagline: 'AI-Powered Business Operating Platform for the Next Generation of Startups',
    description: 'A part of Orcrys Technologies, Mewayz is an AI-powered Business Operating Platform helping startups, creators, and enterprises scale through intelligent automation. With engineering and AI product teams in Kolkata, Mewayz develops advanced AI orchestration, Web3 solutions, CRM systems, website builders, payment management, and marketing tools within a unified platform. The company also collaborates with leading academic institutions to foster innovation, entrepreneurship, and startup development.',
    category: 'AI & TECH PARTNER',
    accent: 'rgba(45,184,166,0.15)',
    border: 'rgba(45,184,166,0.3)',
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
    <section id="sponsors" ref={sectionRef} style={{
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

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <span className="section-label">OUR SPONSORS</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(20px, 2.8vw, 36px)',
            color: 'var(--text-white)',
            lineHeight: 1.4,
            marginTop: 8,
            animation: visible ? 'fadeInUp 0.8s ease' : 'none',
          }}>
            Backed by the <span style={{ color: 'var(--gold)' }}>Best</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: 'rgba(255,255,255,0.5)',
            marginTop: 16,
            maxWidth: 500,
            margin: '16px auto 0',
            lineHeight: 1.7,
          }}>
            Industry leaders powering Voyage 2026 with technology, mentorship, and resources.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
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
      style={{
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
        gap: 0,
        background: hovered ? 'rgba(16,37,68,0.95)' : 'rgba(12,29,56,0.9)',
        border: `1px solid ${hovered ? sponsor.border : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 48px rgba(0,0,0,0.4)` : 'none',
        animation: visible ? `fadeInUp 0.7s ease ${index * 120}ms both` : 'none',
      }}
    >
      {/* Left — logo area */}
      <div style={{
        background: sponsor.accent,
        borderRight: `1px solid ${sponsor.border}`,
        padding: '40px 32px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px', color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          marginBottom: 16,
        }}>{sponsor.category}</span>
        <h3 style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: '18px', color: 'var(--text-white)',
          lineHeight: 1.4, marginBottom: 12,
        }}>{sponsor.name}</h3>
        <div style={{
          width: 40, height: 2,
          background: sponsor.border,
          borderRadius: 2,
        }} />
      </div>

      {/* Right — description */}
      <div style={{ padding: '36px 36px' }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '15px', color: 'rgba(255,255,255,0.85)',
          fontWeight: 500, lineHeight: 1.5,
          marginBottom: 14,
        }}>{sponsor.tagline}</p>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px', color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.8,
        }}>{sponsor.description}</p>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .sponsor-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Sponsors;
