import React, { useEffect, useRef, useState } from 'react';
import { Laptop, Lock, IdCard, BookOpen } from 'lucide-react';

const guidelines = [
  { icon: <Laptop size={22} />, text: 'Each participant must bring their own laptop, charger, and power backup.' },
  { icon: <Lock size={22} />, text: 'No one will be allowed to go out of the arena after registration until the conclusion of the hackathon.' },
  { icon: <IdCard size={22} />, text: 'Wear your participant ID at all times inside the hackathon arena.' },
  { icon: <BookOpen size={22} />, text: 'Use only permitted resources and APIs in accordance with the hackathon rules.' },
];

const captainLog = [
  { label: 'Registration starts', value: 'To Be Decided' },
  { label: 'Registration ends', value: 'To Be Decided' },
  { label: 'Hackathon starts', value: '26 September 2026' },
  { label: 'Hackathon ends', value: '27 September 2026' },
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
    <section id="guidelines" ref={sectionRef} style={{
      background: 'var(--bg-deep)',
      padding: '100px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <span className="section-label">GENERAL GUIDELINES</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(20px, 2.8vw, 36px)',
            color: 'var(--text-white)',
            lineHeight: 1.4,
            marginTop: 8,
            animation: visible ? 'fadeInUp 0.8s ease' : 'none',
          }}>
            Rules of the <span style={{ color: 'var(--gold)' }}>Voyage</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
          {/* Left — guidelines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {guidelines.map((g, i) => (
              <div key={i} style={{
                display: 'flex', gap: 18, alignItems: 'flex-start',
                background: 'rgba(12,29,56,0.9)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px',
                padding: '22px 24px',
                transition: 'all 0.3s ease',
                animation: visible ? `fadeInUp 0.6s ease ${i * 100}ms both` : 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: '10px',
                  background: 'rgba(201,168,76,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)', flexShrink: 0,
                }}>{g.icon}</div>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px', color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.7, paddingTop: 8,
                }}>{g.text}</p>
              </div>
            ))}
          </div>

          {/* Right — Captain's Log */}
          <div style={{
            background: 'rgba(12,29,56,0.9)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '18px',
            padding: '36px 32px',
            animation: visible ? 'fadeInUp 0.8s ease 0.3s both' : 'none',
          }}>
            <p style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '13px', color: 'var(--gold)',
              marginBottom: 28, letterSpacing: '0.05em',
            }}>CAPTAIN'S LOG</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {captainLog.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  paddingBottom: 14,
                  borderBottom: i < captainLog.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px', color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.05em',
                  }}>{item.label}</span>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px', color: 'var(--gold)',
                    fontWeight: 500,
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
