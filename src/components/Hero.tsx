import { useEffect, useRef, useState } from 'react';

/* ═══════════════════════════════════════════════════════════
   STARFIELD + EMBER CANVAS — drifting stars & rising embers
   ═══════════════════════════════════════════════════════════ */
const ParticleField: React.FC = () => {
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

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.3,
      a: Math.random() * 0.7 + 0.2,
      tw: Math.random() * 0.012 + 0.003,
      dir: Math.random() > 0.5 ? 1 : -1,
    }));

    const embers = Array.from({ length: 32 }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 240,
      r: Math.random() * 2.2 + 0.6,
      vy: -(Math.random() * 0.6 + 0.25),
      vx: (Math.random() - 0.5) * 0.4,
      a: 0,
      life: Math.random() * 340 + 220,
      age: 0,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        s.a += s.tw * s.dir;
        if (s.a > 0.95 || s.a < 0.1) s.dir *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244,208,111,${s.a})`;
        ctx.fill();
      });

      embers.forEach((e) => {
        e.age++;
        e.y += e.vy;
        e.x += e.vx;
        e.vx += (Math.random() - 0.5) * 0.06;
        const lr = e.age / e.life;
        e.a = lr < 0.1 ? lr * 10 : lr > 0.8 ? (1 - lr) * 5 : 1;
        if (e.age >= e.life || e.y < -30) {
          e.x = Math.random() * canvas.width;
          e.y = canvas.height + 20;
          e.age = 0;
          e.vy = -(Math.random() * 0.6 + 0.25);
        }
        const grad = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r * 4);
        grad.addColorStop(0, `rgba(255,170,80,${e.a * 0.85})`);
        grad.addColorStop(0.5, `rgba(212,175,55,${e.a * 0.32})`);
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
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
        zIndex: 2,
      }}
    />
  );
};

/* ═══════════════════════════════════════════════════════════
   OCEAN WAVES — three layered animated swells
   ═══════════════════════════════════════════════════════════ */
const OceanWaves: React.FC = () => (
  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 240, zIndex: 3, pointerEvents: 'none', overflow: 'hidden' }}>
    <svg viewBox="0 0 1440 240" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, width: '200%', height: '100%', animation: 'waveMove 14s linear infinite' }}>
      <path d="M0,120 C320,180 420,50 720,120 C1020,180 1120,50 1440,120 L1440,240 L0,240 Z" fill="rgba(10,31,60,0.55)" />
    </svg>
    <svg viewBox="0 0 1440 240" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, width: '200%', height: '100%', animation: 'waveMove 10s linear infinite reverse' }}>
      <path d="M0,140 C240,80 540,200 720,140 C960,80 1260,200 1440,140 L1440,240 L0,240 Z" fill="rgba(6,18,38,0.7)" />
    </svg>
    <svg viewBox="0 0 1440 240" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, width: '200%', height: '100%', animation: 'waveMove 17s linear infinite' }}>
      <path d="M0,160 C360,120 480,200 720,160 C960,120 1080,200 1440,160 L1440,240 L0,240 Z" fill="rgba(2,6,13,0.92)" />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   GHOST SHIP — silhouette with glowing rigging
   ═══════════════════════════════════════════════════════════ */
const GhostShip: React.FC = () => (
  <svg viewBox="0 0 420 320" style={{ width: 'clamp(300px, 38vw, 500px)', height: 'auto', animation: 'floatShip 7s ease-in-out infinite', filter: 'drop-shadow(0 14px 36px rgba(0,0,0,0.7))' }}>
    <defs>
      <linearGradient id="hullGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0d1f38" />
        <stop offset="100%" stopColor="#040c1a" />
      </linearGradient>
      <linearGradient id="sailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(212,175,55,0.16)" />
        <stop offset="100%" stopColor="rgba(212,175,55,0.04)" />
      </linearGradient>
    </defs>
    {/* Hull */}
    <path d="M80,230 L340,230 L308,275 L112,275 Z" fill="url(#hullGrad)" stroke="rgba(212,175,55,0.32)" strokeWidth="1.5" />
    <path d="M80,230 L340,230 L333,218 L87,218 Z" fill="rgba(212,175,55,0.09)" />
    {/* Deck lines */}
    <line x1="125" y1="230" x2="125" y2="275" stroke="rgba(212,175,55,0.22)" strokeWidth="1" />
    <line x1="210" y1="230" x2="210" y2="275" stroke="rgba(212,175,55,0.22)" strokeWidth="1" />
    <line x1="295" y1="230" x2="295" y2="275" stroke="rgba(212,175,55,0.22)" strokeWidth="1" />
    {/* Main mast */}
    <line x1="210" y1="218" x2="210" y2="36" stroke="rgba(212,175,55,0.45)" strokeWidth="2.5" />
    {/* Crossbeam */}
    <line x1="145" y1="78" x2="275" y2="78" stroke="rgba(212,175,55,0.45)" strokeWidth="2" />
    {/* Main sail */}
    <path d="M155,80 L265,80 L254,168 L166,168 Z" fill="url(#sailGrad)" stroke="rgba(212,175,55,0.28)" strokeWidth="1" />
    {/* Skull emblem */}
    <circle cx="210" cy="118" r="11" fill="rgba(212,175,55,0.22)" />
    <circle cx="205" cy="116" r="1.6" fill="rgba(212,175,55,0.5)" />
    <circle cx="215" cy="116" r="1.6" fill="rgba(212,175,55,0.5)" />
    {/* Front mast */}
    <line x1="135" y1="218" x2="135" y2="100" stroke="rgba(212,175,55,0.32)" strokeWidth="2" />
    <line x1="103" y1="128" x2="167" y2="128" stroke="rgba(212,175,55,0.32)" strokeWidth="1.5" />
    <path d="M108,130 L162,130 L156,184 L114,184 Z" fill="url(#sailGrad)" stroke="rgba(212,175,55,0.22)" strokeWidth="0.8" />
    {/* Tattered flag */}
    <path d="M210,36 L210,12 L244,20 L232,28 L244,36 L210,42" fill="rgba(139,26,26,0.65)" stroke="rgba(212,175,55,0.32)" strokeWidth="0.5" />
    {/* Crow's nest */}
    <rect x="197" y="54" width="26" height="11" rx="2" fill="rgba(212,175,55,0.16)" stroke="rgba(212,175,55,0.32)" strokeWidth="1" />
    {/* Rope rigging */}
    <line x1="210" y1="65" x2="165" y2="218" stroke="rgba(212,175,55,0.16)" strokeWidth="0.8" />
    <line x1="210" y1="65" x2="255" y2="218" stroke="rgba(212,175,55,0.16)" strokeWidth="0.8" />
    <line x1="135" y1="100" x2="103" y2="218" stroke="rgba(212,175,55,0.16)" strokeWidth="0.8" />
    <line x1="135" y1="100" x2="167" y2="218" stroke="rgba(212,175,55,0.16)" strokeWidth="0.8" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   COMPASS ROSE — rotating, glowing navigation instrument
   ═══════════════════════════════════════════════════════════ */
const Compass: React.FC = () => (
  <div style={{
    position: 'relative',
    width: 'clamp(190px, 27vw, 320px)',
    height: 'clamp(190px, 27vw, 320px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <svg viewBox="0 0 200 200" style={{ position: 'absolute', width: '100%', height: '100%', animation: 'floatY 8s ease-in-out infinite' }}>
      <defs>
        <radialGradient id="compassGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(212,175,55,0.24)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="needleN" x1="50%" y1="50%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#ffe9a8" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="98" fill="url(#compassGlow)" />
      <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(212,175,55,0.42)" strokeWidth="1" />
      <circle cx="100" cy="100" r="74" fill="none" stroke="rgba(212,175,55,0.22)" strokeWidth="0.5" strokeDasharray="3 3" />
      {['N','E','S','W'].map((d, i) => {
        const angle = (i * 90 * Math.PI) / 180;
        const x = 100 + Math.cos(angle - Math.PI / 2) * 82;
        const y = 100 + Math.sin(angle - Math.PI / 2) * 82;
        return <text key={d} x={x} y={y + 5} textAnchor="middle" fill="rgba(244,208,111,0.95)" fontFamily="'Pirata One', serif" fontSize="20">{d}</text>;
      })}
      {['NE','SE','SW','NW'].map((d, i) => {
        const angle = (i * 90 + 45) * Math.PI / 180;
        const x = 100 + Math.cos(angle - Math.PI / 2) * 70;
        const y = 100 + Math.sin(angle - Math.PI / 2) * 70;
        return <text key={d} x={x} y={y + 3} textAnchor="middle" fill="rgba(141,165,196,0.55)" fontFamily="'Space Mono', monospace" fontSize="7">{d}</text>;
      })}
      <g style={{ transformOrigin: '100px 100px', animation: 'compassSpin 45s linear infinite' }}>
        <polygon points="100,22 112,100 100,112 88,100" fill="url(#needleN)" />
        <polygon points="100,178 112,100 100,88 88,100" fill="rgba(45,184,166,0.55)" />
      </g>
      <circle cx="100" cy="100" r="8" fill="#d4af37" />
      <circle cx="100" cy="100" r="3.5" fill="#02060d" />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   FOG — drifting volumetric haze
   ═══════════════════════════════════════════════════════════ */
const FogLayer: React.FC = () => (
  <>
    <div style={{ position: 'absolute', top: '22%', left: 0, width: '100%', height: 220, zIndex: 3, pointerEvents: 'none', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: '62%', height: '100%', background: 'radial-gradient(ellipse, rgba(141,165,196,0.09) 0%, transparent 70%)', animation: 'fogDrift 28s ease-in-out infinite' }} />
    </div>
    <div style={{ position: 'absolute', top: '52%', left: 0, width: '100%', height: 280, zIndex: 3, pointerEvents: 'none', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: '52%', height: '100%', background: 'radial-gradient(ellipse, rgba(141,165,196,0.06) 0%, transparent 70%)', animation: 'fogDrift 38s ease-in-out infinite reverse', animationDelay: '6s' }} />
    </div>
  </>
);

/* ═══════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════ */
const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px) scale(0.96)';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 1.4s cubic-bezier(0.16,1,0.3,1), transform 1.4s cubic-bezier(0.16,1,0.3,1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0) scale(1)';
    });
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      background:
        'radial-gradient(ellipse at 18% 28%, rgba(10,31,60,0.72) 0%, transparent 58%),' +
        'radial-gradient(ellipse at 82% 18%, rgba(13,37,67,0.52) 0%, transparent 50%),' +
        'radial-gradient(ellipse at 50% 100%, rgba(45,184,166,0.08) 0%, transparent 60%),' +
        'linear-gradient(180deg, #02060d 0%, #061226 55%, #0a1f3c 100%)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Lightning flash overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 4,
        background: 'radial-gradient(ellipse at 70% 15%, rgba(244,208,111,0.4) 0%, transparent 45%)',
        animation: 'lightningFlash 11s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      {/* Distant island parallax */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, transform: `translateY(${scrollY * 0.32}px)`, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 200, width: '100%', height: 320, opacity: 0.32 }}>
          <path d="M0,300 C200,250 300,200 450,230 C600,260 700,180 900,210 C1100,240 1200,200 1440,250 L1440,400 L0,400 Z" fill="rgba(6,18,38,0.85)" />
        </svg>
      </div>

      {/* Moon & glow parallax */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, transform: `translateY(${scrollY * 0.16}px)`, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '7%', right: '11%', width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,208,111,0.18) 0%, rgba(244,208,111,0.05) 40%, transparent 70%)', filter: 'blur(24px)' }} />
        <div style={{ position: 'absolute', top: '9%', right: '14%', width: 90, height: 90, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, rgba(255,233,168,0.7), rgba(212,175,55,0.22))', boxShadow: '0 0 70px rgba(244,208,111,0.35)' }} />
      </div>

      <ParticleField />
      <FogLayer />

      {/* Main content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1240px',
        margin: '0 auto',
        width: '100%',
        padding: '130px 48px 70px',
        position: 'relative',
        zIndex: 5,
        gap: 44,
      }}>
        {/* Left */}
        <div style={{ flex: 1, maxWidth: 660 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '9px 20px',
            background: 'rgba(212,175,55,0.09)',
            border: '1px solid rgba(212,175,55,0.28)',
            borderRadius: 100,
            marginBottom: 32,
            animation: 'fadeInUp 0.9s ease',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--gold-6)', boxShadow: '0 0 10px var(--gold-5)', animation: 'glowPulse 2s ease infinite' }} />
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '11px', letterSpacing: '0.32em', color: 'var(--gold-6)', textTransform: 'uppercase', fontWeight: 600 }}>
              A 36-Hour Plunder of Innovation
            </p>
          </div>

          <h1 ref={titleRef} style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: 'clamp(64px, 12vw, 160px)',
            lineHeight: 0.86,
            marginBottom: 26,
            letterSpacing: '0.02em',
            background: 'linear-gradient(180deg, #ffe9a8 0%, #f4d06f 30%, #d4af37 55%, #8a6f30 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 100px rgba(212,175,55,0.32)',
          }}>
            VOYAGE
          </h1>

          <div style={{ marginBottom: 30 }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px, 2.4vw, 26px)',
              color: 'var(--text-bright)',
              lineHeight: 1.35,
              fontWeight: 700,
              letterSpacing: '0.06em',
              marginBottom: 6,
            }}>
              SAIL BEYOND THE KNOWN WORLD.
            </p>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px, 2.4vw, 26px)',
              color: 'rgba(212,175,55,0.85)',
              lineHeight: 1.35,
              fontWeight: 400,
              letterSpacing: '0.06em',
              fontStyle: 'italic',
            }}>
              Plunder the Depths of Innovation.
            </p>
          </div>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: 'rgba(212,220,235,0.62)',
            lineHeight: 1.85,
            marginBottom: 44,
            maxWidth: 500,
            borderLeft: '2px solid rgba(212,175,55,0.35)',
            paddingLeft: 22,
          }}>
            Hoist the sails and chart a course through uncharted waters. Voyage beckons the boldest
            crews to forge legends across a relentless 36-hour tide — where ideas become treasure
            and innovators become captains of tomorrow.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button className="btn-treasure" onClick={() => scrollTo('register')}>
              HOIST THE SAILS →
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('tracks')}>
              CHART THE WATERS
            </button>
          </div>
        </div>

        {/* Right — Ship + Compass */}
        <div style={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          position: 'relative',
          transform: `translateY(${scrollY * -0.06}px)`,
        }}>
          <div style={{ position: 'relative' }}>
            <GhostShip />
            <div style={{
              position: 'absolute', bottom: -44, left: '50%',
              transform: 'translateX(-50%)',
              width: '62%', height: 34,
              background: 'radial-gradient(ellipse, rgba(212,175,55,0.12) 0%, transparent 70%)',
              filter: 'blur(10px)',
            }} />
          </div>
          <Compass />
        </div>
      </div>

      {/* Stats strip — the ship's ledger */}
      <div style={{
        position: 'relative',
        zIndex: 5,
        borderTop: '1px solid rgba(212,175,55,0.18)',
        background: 'rgba(2,6,13,0.65)',
        backdropFilter: 'blur(22px)',
        padding: '34px 48px',
        maxWidth: '1240px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
      }}>
        {[
          { label: 'THE TIDE', value: '36 HRS' },
          { label: 'CREW SIZE', value: '3 – 4' },
          { label: 'TREASURE', value: '₹25,000' },
          { label: 'SET SAIL', value: '26 | 27 SEP' },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
            <div className="gold-text" style={{
              fontFamily: 'var(--font-pirate)',
              fontSize: 'clamp(24px, 3.2vw, 40px)',
              marginBottom: 7,
              lineHeight: 1,
            }}>{s.value}</div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.28em',
              color: 'rgba(141,165,196,0.7)',
              textTransform: 'uppercase',
            }}>{s.label}</div>
            {i < 3 && <div style={{ position: 'absolute', right: -12, top: '18%', height: '64%', width: 1, background: 'rgba(212,175,55,0.18)' }} />}
          </div>
        ))}
      </div>

      <OceanWaves />

      <style>{`
        @media (max-width: 900px) {
          #home > div:nth-of-type(4) { flex-direction: column !important; text-align: center !important; padding-top: 110px !important; }
          #home > div:nth-of-type(4) > div:first-child { max-width: 100% !important; }
          #home > div:nth-of-type(4) > div:first-child p[style*="borderLeft"] { borderLeft: none !important; paddingLeft: 0 !important; }
          #home > div:nth-of-type(4) > div:last-child { margin-top: 24px; }
          #home > div:nth-of-type(5) { grid-template-columns: repeat(2, 1fr) !important; gap: 22px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
