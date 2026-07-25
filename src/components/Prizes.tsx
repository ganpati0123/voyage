import React, { useEffect, useRef, useState } from 'react';

const Prizes: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="prizes" ref={sectionRef} style={{
      background: 'var(--bg-deep)',
      padding: '100px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 400,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">REWARDS</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(28px, 4vw, 52px)',
            marginTop: 12,
            color: 'var(--text-white)',
            animation: visible ? 'fadeInUp 0.8s ease' : 'none',
          }}>
            Prizes &amp;{' '}
            <span style={{ color: 'var(--gold)' }}>Recognition</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 15,
            color: 'rgba(255,255,255,0.5)',
            marginTop: 20,
            maxWidth: 580,
            margin: '20px auto 0',
            lineHeight: 1.7,
          }}>
            Win cash prizes, exclusive mentorship, cloud credits and opportunities to showcase your innovation.
          </p>
        </div>

        {/* Prize pool card */}
        <div style={{
          background: 'rgba(13,21,37,0.9)',
          border: '1px solid rgba(201,168,76,0.18)',
          borderRadius: '20px',
          padding: '72px 48px',
          textAlign: 'center',
          maxWidth: 700,
          margin: '0 auto',
          animation: visible ? 'fadeInUp 0.8s ease 0.2s both' : 'none',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Corner accents */}
          <div style={{
            position: 'absolute', top: 20, left: 20,
            width: 32, height: 32,
            borderTop: '2px solid rgba(201,168,76,0.4)',
            borderLeft: '2px solid rgba(201,168,76,0.4)',
          }} />
          <div style={{
            position: 'absolute', top: 20, right: 20,
            width: 32, height: 32,
            borderTop: '2px solid rgba(201,168,76,0.4)',
            borderRight: '2px solid rgba(201,168,76,0.4)',
          }} />
          <div style={{
            position: 'absolute', bottom: 20, left: 20,
            width: 32, height: 32,
            borderBottom: '2px solid rgba(201,168,76,0.4)',
            borderLeft: '2px solid rgba(201,168,76,0.4)',
          }} />
          <div style={{
            position: 'absolute', bottom: 20, right: 20,
            width: 32, height: 32,
            borderBottom: '2px solid rgba(201,168,76,0.4)',
            borderRight: '2px solid rgba(201,168,76,0.4)',
          }} />

          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 700,
            color: 'var(--gold)',
            letterSpacing: '0.03em',
            lineHeight: 1,
            marginBottom: 28,
            animation: visible ? 'fadeInUp 0.9s ease 0.4s both' : 'none',
          }}>
            INR 1,00,000
          </div>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.8,
            maxWidth: 480,
            margin: '0 auto',
          }}>
            Grand cash prize pool awarded to the top-performing teams demonstrating exceptional innovation and technical execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
