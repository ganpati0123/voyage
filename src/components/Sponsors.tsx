import React, { useEffect, useRef, useState } from 'react';

const sponsors = [
  {
    id: 'ibm',
    name: 'IBM Company',
    description: 'IBM (International Business Machines Corporation) is a global technology and innovation company. It offers cloud computing, software, artificial intelligence, and enterprise solutions to clients worldwide.',
    tags: ['#IBM', '#Technology', '#Enterprise'],
    logo: <IbmLogo />,
  },
  {
    id: '1m1b',
    name: '1M1B Foundation',
    description: '1M1B (1 Million for 1 Billion) is a social impact organization created to mobilize youth to solve real-world problems. It focuses on digital empowerment, entrepreneurship education, and social innovation.',
    tags: ['#1M1BInitiative', '#SocialImpact', '#Mentorship'],
    logo: <FoundationLogo />,
  },
  {
    id: 'celonis',
    name: 'Celonis',
    description: 'Celonis is the global leader in execution management and process mining technology, enabling companies to unlock massive value from their business processes.',
    tags: ['#Celonis', '#ProcessMining', '#TechPartner'],
    logo: <CelonisLogo />,
  },
];

function IbmLogo() {
  return (
    <div style={{
      width: 140,
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
    }}>
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{
          height: 6,
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 1,
          // IBM stripe style — gaps at letter positions
          clipPath: i % 2 === 0
            ? 'inset(0 0 0 0)'
            : 'polygon(0 0, 25% 0, 25% 100%, 0 100%, 0 0, 0 0, 33% 0, 33% 100%, 25% 100%, 25% 0, 58% 0, 58% 100%, 50% 100%, 50% 0, 75% 0, 75% 100%, 66% 100%, 66% 0)',
        }} />
      ))}
    </div>
  );
}

function FoundationLogo() {
  return (
    <div style={{
      width: 90,
      height: 90,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #ff6b2b 0%, #f7931e 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(247,147,30,0.35)',
    }}>
      <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '11px', color: '#fff', lineHeight: 1.1, textAlign: 'center', marginBottom: 3 }}>
        1M<br />1B
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '6px', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.05em', textAlign: 'center', lineHeight: 1.3 }}>
        1 MILLION<br />1 BILLION
      </div>
    </div>
  );
}

function CelonisLogo() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    }}>
      {/* Celonis "c" circle mark */}
      <div style={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: '3px solid rgba(255,255,255,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          right: -2,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 12,
          height: 12,
          background: 'var(--bg-card)',
          borderRadius: '50%',
        }} />
      </div>
      <span style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '24px',
        fontWeight: 300,
        color: 'rgba(255,255,255,0.85)',
        letterSpacing: '-0.02em',
        fontStyle: 'italic',
      }}>
        celonis
      </span>
    </div>
  );
}

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
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">BACKED BY</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(28px, 4vw, 52px)',
            marginTop: 12,
            color: 'var(--text-white)',
            animation: visible ? 'fadeInUp 0.8s ease' : 'none',
          }}>
            Sponsors &amp;{' '}
            <span style={{ color: 'var(--gold)' }}>Partners</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 15,
            color: 'rgba(255,255,255,0.5)',
            marginTop: 20,
            maxWidth: 560,
            margin: '20px auto 0',
            lineHeight: 1.7,
          }}>
            Partnering with world-leading technology organizations and social impact initiatives to empower student innovation.
          </p>
        </div>

        {/* Sponsor cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {sponsors.map((s, i) => (
            <SponsorCard key={s.id} sponsor={s} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SponsorCard: React.FC<{
  sponsor: typeof sponsors[0];
  index: number;
  visible: boolean;
}> = ({ sponsor, index, visible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        background: hovered ? 'rgba(18,30,52,0.95)' : 'rgba(13,21,37,0.85)',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        animation: visible ? `fadeInUp 0.7s ease ${index * 150}ms both` : 'none',
        cursor: 'default',
      }}
    >
      {/* Logo panel */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 40px',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(8,14,26,0.5)',
        minHeight: 160,
      }}>
        {sponsor.logo}
      </div>

      {/* Info panel */}
      <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 className="pixel-heading" style={{
          fontSize: 'clamp(14px, 1.5vw, 18px)',
          color: 'var(--text-white)',
          marginBottom: 16,
          lineHeight: 1.4,
        }}>
          {sponsor.name}
        </h3>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.75,
          marginBottom: 24,
          maxWidth: 560,
        }}>
          {sponsor.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {sponsor.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.5)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '6px 14px',
                borderRadius: '999px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'rgba(201,168,76,0.9)';
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
