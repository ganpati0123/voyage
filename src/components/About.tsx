import { useEffect, useRef, useState } from 'react';
import { Calendar, Users, MapPin, Trophy } from 'lucide-react';
import SketchfabEmbed from './SketchfabEmbed';

const useCountUp = (target: number, duration = 2000, start = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
};

const About: React.FC = () => {
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

  const hours = useCountUp(36, 1800, visible);
  const members = useCountUp(2000, 2200, visible);
  const registrations = useCountUp(800, 2000, visible);

  return (
    <section id="about" ref={sectionRef} className="noise-texture" style={{
      background: 'linear-gradient(180deg, #000206 0%, #01060f 100%)',
      padding: '130px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="grid-texture" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      <div style={{
        position: 'absolute', top: '12%', left: '4%',
        width: 480, height: 480,
        background: 'radial-gradient(circle, rgba(201,162,46,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '8%', right: '6%',
        width: 360, height: 360,
        background: 'radial-gradient(circle, rgba(31,157,140,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <SketchfabEmbed
        modelId="b1e28eeec0fd48799155c24ab0e07a56"
        title="Cursed Gold — Pirate Tale"
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-label">The Tale of Voyage</span>
        </div>

        <div className="split-2">
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-pirate)',
              fontSize: 'clamp(44px, 6.5vw, 80px)',
              color: 'var(--text-white)',
              lineHeight: 0.95,
              marginBottom: 10,
              animation: visible ? 'slideInLeft 0.9s ease forwards' : 'none',
            }}>
              Beyond the
            </h2>
            <h2 className="gold-text" style={{
              fontFamily: 'var(--font-pirate)',
              fontSize: 'clamp(52px, 7.5vw, 96px)',
              lineHeight: 0.95,
              marginBottom: 40,
              animation: visible ? 'slideInLeft 0.9s ease 0.12s forwards' : 'none',
              opacity: 0,
            }}>
              Horizon's Edge
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'rgba(212,220,235,0.82)',
              lineHeight: 1.95,
              marginBottom: 22,
            }}>
              Voyage — Beyond the Horizon is a premier 36-hour odyssey that gathers the fiercest
              minds, dreamers, and builders to conquer real-world storms through the craft of code.
            </p>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'rgba(141,165,196,0.7)',
              lineHeight: 1.95,
              marginBottom: 22,
            }}>
              Across a relentless tide of continuous brainstorming, collaboration, and technical daring,
              crews shall transform raw ideas into treasure — pushing the very boundaries of what is possible.
              Whether ye hail from the isles of AI, the coves of Blockchain, the shoals of FinTech, the
              springs of Healthcare, or the open seas of Innovation, Voyage offers the proving ground to
              learn, experiment, and rise.
            </p>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'rgba(141,165,196,0.55)',
              lineHeight: 1.95,
              marginBottom: 40,
            }}>
              Forge alliances with kindred innovators, heed the counsel of seasoned captains of industry,
              and earn yer stripes building solutions under the pressure of the deep.
            </p>

            <div className="ornament" style={{ justifyContent: 'flex-start', margin: '32px 0 0' }}>
              <div className="ornament-line" />
              <div className="ornament-dot" />
              <div className="ornament-line" />
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid-stats">
            <StatCard icon={<Calendar size={22} color="var(--gold-6)" />} value={`${hours} Hrs`} label="The Relentless Tide" visible={visible} delay={0} />
            <StatCard icon={<Users size={22} color="var(--gold-6)" />} value={`${members}+`} label="Souls of the Fleet" visible={visible} delay={200} />
            <StatCard icon={<Trophy size={22} color="var(--gold-6)" />} value="₹25K" label="The Treasure Hoard" visible={visible} delay={400} />
            <StatCard icon={<MapPin size={22} color="var(--gold-6)" />} value="TBD" label="The Anchorage" visible={visible} delay={600} />
          </div>
        </div>

        {/* Quote */}
        <div style={{
          marginTop: 92,
          textAlign: 'center',
          animation: visible ? 'fadeInUp 1s ease 0.5s both' : 'none',
        }}>
          <p style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: 'clamp(30px, 4.5vw, 54px)',
            color: 'rgba(240,244,250,0.92)',
            lineHeight: 1.35,
            letterSpacing: '0.06em',
          }}>
            <span className="gold-text">EXPLORE.</span>{' '}
            <span className="gold-text">CONQUER.</span>{' '}
            <span className="gold-text">TRANSFORM.</span>
          </p>
        </div>

      </div>

    </section>
  );
};

const StatCard: React.FC<{
  icon: React.ReactNode;
  value: string;
  label: string;
  visible: boolean;
  delay: number;
}> = ({ icon, value, label, visible, delay }) => {
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
        boxShadow: hovered ? '0 24px 56px rgba(0,0,0,0.6)' : 'none',
        animation: visible ? `fadeInUp 0.7s ease ${delay}ms both` : 'none',
        cursor: 'default',
      }}
    >
      <div style={{
        width: 52, height: 52,
        borderRadius: '14px',
        background: 'rgba(201,162,46,0.1)',
        border: '1px solid rgba(201,162,46,0.22)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 22,
        transition: 'all 0.35s ease',
        transform: hovered ? 'scale(1.12) rotate(-6deg)' : 'scale(1) rotate(0)',
        boxShadow: hovered ? '0 0 22px rgba(201,162,46,0.3)' : 'none',
      }}>{icon}</div>
      <div className="gold-text" style={{
        fontFamily: 'var(--font-pirate)',
        fontSize: '30px',
        marginBottom: 9,
        lineHeight: 1,
      }}>{value}</div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px',
        color: 'rgba(141,165,196,0.55)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
      }}>{label}</div>
    </div>
  );
};

export default About;
