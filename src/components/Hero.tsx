import React, { useEffect, useRef, useState } from 'react';

// Animated starfield / constellation background
const Constellation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.3,
      a: Math.random() * 0.5 + 0.2,
      tw: Math.random() * 0.02 + 0.005,
      dir: Math.random() > 0.5 ? 1 : -1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.a += s.tw * s.dir;
        if (s.a > 0.8 || s.a < 0.1) s.dir *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${s.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

// Compass rose decorative SVG
const Compass: React.FC = () => (
  <div style={{
    position: 'relative',
    width: 'clamp(220px, 32vw, 380px)',
    height: 'clamp(220px, 32vw, 380px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {/* Outer ring */}
    <svg viewBox="0 0 200 200" style={{ position: 'absolute', width: '100%', height: '100%', animation: 'floatSlow 8s ease-in-out infinite' }}>
      <defs>
        <radialGradient id="compassGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(201,168,76,0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="needleN" x1="50%" y1="50%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#e4c060" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#compassGlow)" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(201,168,76,0.35)" strokeWidth="1" />
      <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" strokeDasharray="3 3" />
      {/* Cardinal points */}
      {['N', 'E', 'S', 'W'].map((d, i) => {
        const angle = (i * 90 * Math.PI) / 180;
        const x = 100 + Math.cos(angle - Math.PI / 2) * 80;
        const y = 100 + Math.sin(angle - Math.PI / 2) * 80;
        return (
          <text key={d} x={x} y={y + 4} textAnchor="middle" fill="rgba(201,168,76,0.8)" fontFamily="'Press Start 2P', monospace" fontSize="10">
            {d}
          </text>
        );
      })}
      {/* Diagonal points */}
      {['NE', 'SE', 'SW', 'NW'].map((d, i) => {
        const angle = (i * 90 + 45) * Math.PI / 180;
        const x = 100 + Math.cos(angle - Math.PI / 2) * 68;
        const y = 100 + Math.sin(angle - Math.PI / 2) * 68;
        return (
          <text key={d} x={x} y={y + 2} textAnchor="middle" fill="rgba(141,165,196,0.5)" fontFamily="'Space Mono', monospace" fontSize="6">
            {d}
          </text>
        );
      })}
      {/* Needle */}
      <g style={{ transformOrigin: '100px 100px', animation: 'compass-spin 30s linear infinite' }}>
        <polygon points="100,30 108,100 100,110 92,100" fill="url(#needleN)" />
        <polygon points="100,170 108,100 100,90 92,100" fill="rgba(45,184,166,0.6)" />
      </g>
      <circle cx="100" cy="100" r="6" fill="#c9a84c" />
      <circle cx="100" cy="100" r="3" fill="#050d1a" />
    </svg>
  </div>
);

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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 20% 50%, rgba(10,31,60,0.6) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(13,37,67,0.4) 0%, transparent 50%), var(--bg-deep)',
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
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: 'var(--gold)',
            marginBottom: 20,
            animation: 'fadeInUp 0.8s ease',
          }}>
            A 36-HOUR NATIONAL HACKATHON
          </p>

          <h1 ref={titleRef} className="pixel-heading" style={{
            fontSize: 'clamp(32px, 5vw, 58px)',
            lineHeight: 1.2,
            marginBottom: 24,
            color: 'var(--text-white)',
          }}>
            <span style={{ color: 'var(--gold)' }}>VOYAGE</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(15px, 1.8vw, 20px)',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.5,
            marginBottom: 16,
            maxWidth: 500,
            fontWeight: 500,
          }}>
            SAIL BEYOND LIMITS.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(15px, 1.8vw, 20px)',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.5,
            marginBottom: 36,
            maxWidth: 500,
            fontWeight: 300,
          }}>
            BUILD BEYOND HORIZONS.
          </p>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 480,
          }}>
            Voyage — Beyond the Horizon is a premier 36-hour innovation challenge.
            Collaborate with like-minded innovators, receive mentorship from industry experts,
            and transform ideas into impactful solutions.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollTo('register')}
              style={{
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
              Set Sail →
            </button>

            <button
              onClick={() => scrollTo('tracks')}
              style={{
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
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)';
                e.currentTarget.style.background = 'rgba(201,168,76,0.05)';
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

        {/* Right — Compass */}
        <div style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.95,
        }}>
          <Compass />
        </div>
      </div>

      {/* Stats strip */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '32px 48px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
      }}>
        {[
          { label: 'DURATION', value: '36 HRS' },
          { label: 'TEAM SIZE', value: '3-4' },
          { label: 'PRIZE POOL', value: '₹25,000' },
          { label: 'DATES', value: '26 | 27 SEP' },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(14px, 2vw, 20px)',
              color: 'var(--gold)',
              marginBottom: 8,
            }}>{s.value}</div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
            }}>{s.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 820px) {
          #home > div:first-of-type { flex-direction: column !important; text-align: center !important; padding-top: 100px !important; }
          #home > div:first-of-type > div:first-child { max-width: 100% !important; }
          #home > div:first-of-type > div:last-child { margin-top: 20px; }
          #home > div:last-of-type { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
