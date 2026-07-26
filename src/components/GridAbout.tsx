import { useEffect, useRef, useState } from 'react';
import { Users, Calendar, BookOpen, Network, Rocket } from 'lucide-react';

const stats = [
  { icon: <Users size={24} />, value: '2,000+', label: 'Souls of the Fleet' },
  { icon: <Calendar size={24} />, value: '800+', label: 'Voyagers Enlisted' },
  { icon: <BookOpen size={24} />, value: 'AI · Web3 · Cyber', label: "Captain's Sessions" },
  { icon: <Network size={24} />, value: 'Pan-India', label: 'Reach of the Tides' },
];

const GridAbout: React.FC = () => {
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
    <section id="grid-about" ref={sectionRef} className="noise-texture" style={{
      background: 'linear-gradient(180deg, #02060d 0%, #040c1a 100%)',
      padding: '130px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: 540, height: 540,
        background: 'radial-gradient(circle, rgba(45,184,166,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 68, textAlign: 'center' }}>
          <span className="section-label">The Brotherhood</span>
          <h2 style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            color: 'var(--text-white)',
            lineHeight: 0.95,
            marginTop: 18,
            animation: visible ? 'fadeInUp 0.9s ease' : 'none',
          }}>
            The <span className="gold-text">GRID Fleet</span>
          </h2>
          <div className="ornament" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          {/* Left — description */}
          <div style={{ animation: visible ? 'slideInLeft 0.9s ease forwards' : 'none' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px', color: 'rgba(212,220,235,0.82)',
              lineHeight: 1.95, marginBottom: 22,
            }}>
              In but a short span, GRID Community has swelled into a thriving fellowship of passionate
              learners and innovators. With 2,000+ souls aboard, 800+ enlistments across online voyages
              from colleges throughout the realm, and expert-led sessions spanning AI/ML, Blockchain,
              Web Development, Cybersecurity, and emerging arts — GRID continues to empower students
              through meaningful learning, collaboration, and the forging of innovation.
            </p>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px', color: 'rgba(141,165,196,0.6)',
              lineHeight: 1.95, marginBottom: 36,
            }}>
              GRID Community is a student-led fellowship of more than 2000 souls dedicated to empowering
              students through collaboration, hands-on learning, and real-world opportunities. Our mission
              is to bridge the gap between academy and industry by organizing hackathons, workshops,
              bootcamps, webinars, networking voyages, and technical initiatives that inspire innovation,
              forge practical skills, and prepare students for the careers of tomorrow.
            </p>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              padding: '15px 26px',
              background: 'rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.28)',
              borderRadius: 100,
            }}>
              <Rocket size={18} color="var(--gold-6)" />
              <span className="gold-glow" style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                letterSpacing: '0.12em', fontWeight: 700,
              }}>STUDENT-LED · 2000+ SOULS</span>
            </div>
          </div>

          {/* Right — stat grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22,
            animation: visible ? 'slideInRight 0.9s ease forwards' : 'none',
          }}>
            {stats.map((s, i) => (
              <div key={i} className="glass-card" style={{
                padding: '34px 26px',
                transition: 'transform 0.3s ease',
                animation: visible ? `fadeInUp 0.6s ease ${i * 100}ms both` : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: '14px',
                  background: 'rgba(212,175,55,0.12)',
                  border: '1px solid rgba(212,175,55,0.24)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold-6)', marginBottom: 22,
                  transition: 'all 0.3s ease',
                }}>{s.icon}</div>
                <div className="gold-text" style={{
                  fontFamily: 'var(--font-pirate)',
                  fontSize: '26px',
                  marginBottom: 9, lineHeight: 1.15,
                }}>{s.value}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px', color: 'rgba(141,165,196,0.55)',
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          #grid-about > div:last-child > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 48px !important; }
          #grid-about > div:last-child > div:nth-child(2) > div:last-child { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default GridAbout;
