import React, { useEffect, useRef } from 'react';
import Constellation from './Constellation';
import HexShape from './HexShape';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200);
  }, []);

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 20% 50%, rgba(0,40,60,0.6) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,30,50,0.4) 0%, transparent 50%), var(--bg-deep)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <Constellation />

      {/* Main content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        padding: '120px 48px 60px',
        position: 'relative',
        zIndex: 2,
        gap: 40,
      }}>
        {/* Left */}
        <div style={{ flex: 1, maxWidth: 640 }}>
          <h1 ref={titleRef} className="pixel-heading" style={{
            fontSize: 'clamp(32px, 5vw, 58px)',
            lineHeight: 1.2,
            marginBottom: 28,
            color: 'var(--text-white)',
          }}>
            <span style={{ color: 'var(--gold)' }}>HackVerse</span>{' '}
            <span style={{ color: 'var(--text-white)' }}>2.0</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '17px',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 480,
          }}>
            Co-building the future of enterprise intelligence.<br />
            Collaborate with industry leaders to develop transformative AI systems.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button style={{
              background: 'var(--gold)',
              border: 'none',
              color: '#000',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              padding: '14px 28px',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--gold-light)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,168,76,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--gold)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Register Now →
            </button>

            <button style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'rgba(255,255,255,0.85)',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.05em',
              padding: '14px 28px',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Explore Tracks
            </button>
          </div>
        </div>

        {/* Right — 3D hex */}
        <div style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.95,
        }}>
          <HexShape />
        </div>
      </div>

      {/* Sponsors strip */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '32px 48px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 32,
      }}>
        {[
          {
            label: 'ORGANISED BY',
            logos: [
              <div key="1m1b" style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', flexShrink: 0,
              }}>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '6px', color: '#fff', textAlign: 'center', lineHeight: 1.3 }}>1M<br />1B</div>
              </div>
            ]
          },
          {
            label: 'IN SUPPORT WITH',
            logos: [
              <SponsorLogo key="manipal" text="MANIPAL" />,
              <SponsorLogo key="bigsoft" text="BIGSOFT" />,
              <SponsorLogo key="acmmit" text="ACM MIT" />,
            ]
          },
          {
            label: 'IN COLLABORATION WITH',
            logos: [
              <SponsorLogo key="ibm" text="IBM" bold />,
              <SponsorLogo key="celonis" text="celonis" />,
            ]
          },
        ].map(group => (
          <div key={group.label} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.3em',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: 16,
              textTransform: 'uppercase',
            }}>
              {group.label}
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
              {group.logos}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SponsorLogo: React.FC<{ text: string; bold?: boolean }> = ({ text, bold }) => (
  <div style={{
    fontFamily: bold ? 'var(--font-mono)' : 'var(--font-sans)',
    fontSize: bold ? '16px' : '12px',
    fontWeight: bold ? 700 : 400,
    color: 'rgba(255,255,255,0.55)',
    letterSpacing: bold ? '0.1em' : '0.05em',
    padding: '6px 12px',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '6px',
    transition: 'all 0.2s',
    cursor: 'default',
  }}
    onMouseEnter={e => {
      e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
      e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
    }}
  >
    {text}
  </div>
);

export default Hero;
