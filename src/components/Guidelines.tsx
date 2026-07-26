import { useEffect, useRef, useState } from 'react';
import { Laptop, Lock, IdCard, BookOpen } from 'lucide-react';

const guidelines = [
  { icon: <Laptop size={22} />, text: 'Each voyager must bring their own laptop, charger, and power backup for the journey ahead.' },
  { icon: <Lock size={22} />, text: 'None shall depart the arena after registration until the voyage concludes and the tides recede.' },
  { icon: <IdCard size={22} />, text: 'Wear yer participant insignia at all times within the hackathon arena — it is yer mark of passage.' },
  { icon: <BookOpen size={22} />, text: 'Wield only permitted resources and APIs in accordance with the captain\'s code of conduct.' },
];

const captainLog = [
  { label: 'The Gathering Begins', value: 'To Be Decreed' },
  { label: 'The Gathering Ends', value: 'To Be Decreed' },
  { label: 'The Voyage Sets Sail', value: '26 September 2026' },
  { label: 'The Voyage Concludes', value: '27 September 2026' },
];

const Guidelines: React.FC = () => {
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
    <section id="guidelines" ref={sectionRef} className="noise-texture" style={{
      background: 'linear-gradient(180deg, #040c1a 0%, #02060d 100%)',
      padding: '130px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 68, textAlign: 'center' }}>
          <span className="section-label">The Captain's Code</span>
          <h2 style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            color: 'var(--text-white)',
            lineHeight: 0.95,
            marginTop: 18,
            animation: visible ? 'fadeInUp 0.9s ease' : 'none',
          }}>
            Rules of the <span className="gold-text">Voyage</span>
          </h2>
          <div className="ornament" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'start' }}>
          {/* Left — guidelines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {guidelines.map((g, i) => (
              <div key={i} className="glass-card" style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                padding: '26px 28px',
                transition: 'transform 0.3s ease',
                animation: visible ? `fadeInUp 0.6s ease ${i * 100}ms both` : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(8px)';
                e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: '14px',
                  background: 'rgba(212,175,55,0.12)',
                  border: '1px solid rgba(212,175,55,0.24)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold-6)', flexShrink: 0,
                }}>{g.icon}</div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14.5px', color: 'rgba(212,220,235,0.78)',
                  lineHeight: 1.75, paddingTop: 11,
                }}>{g.text}</p>
              </div>
            ))}
          </div>

          {/* Right — Captain's Log */}
          <div className="glass-card gold-frame" style={{
            padding: '44px 40px',
            animation: visible ? 'fadeInUp 0.8s ease 0.3s both' : 'none',
            position: 'relative',
          }}>
            <p className="gold-glow" style={{
              fontFamily: 'var(--font-pirate)',
              fontSize: '28px',
              marginBottom: 36, letterSpacing: '0.05em',
              textAlign: 'center',
            }}>CAPTAIN'S LOG</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {captainLog.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  paddingBottom: 18,
                  borderBottom: i < captainLog.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px', color: 'rgba(141,165,196,0.6)',
                    fontWeight: 600,
                  }}>{item.label}</span>
                  <span className="gold-glow" style={{
                    fontFamily: 'var(--font-pirate)',
                    fontSize: '17px',
                  }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          #guidelines > div:last-child > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Guidelines;
