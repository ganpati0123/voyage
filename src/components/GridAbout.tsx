import React, { useEffect, useRef, useState } from 'react';
import { Users, Calendar, MapPin, Award, BookOpen, Rocket, Network } from 'lucide-react';

const stats = [
  { icon: <Users size={24} />, value: '2,000+', label: 'Community Members' },
  { icon: <Calendar size={24} />, value: '800+', label: 'Event Registrations' },
  { icon: <BookOpen size={24} />, value: 'AI/ML · Web3 · Cyber', label: 'Expert-Led Sessions' },
  { icon: <Network size={24} />, value: 'Pan-India', label: 'College Reach' },
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
    <section id="grid-about" ref={sectionRef} style={{
      background: 'var(--bg-dark)',
      padding: '100px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(45,184,166,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <span className="section-label">ABOUT US</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(20px, 2.8vw, 36px)',
            color: 'var(--text-white)',
            lineHeight: 1.4,
            marginTop: 8,
            animation: visible ? 'fadeInUp 0.8s ease' : 'none',
          }}>
            The <span style={{ color: 'var(--gold)' }}>GRID Community</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          {/* Left — description */}
          <div style={{ animation: visible ? 'slideInLeft 0.8s ease forwards' : 'none' }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px', color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.8, marginBottom: 20,
            }}>
              In a short span, GRID Community has grown into a thriving ecosystem of passionate learners and innovators. With 2,000+ community members, 800+ registrations across online events from colleges throughout India, and expert-led sessions spanning AI/ML, Blockchain, Web Development, Cybersecurity, and emerging technologies — GRID continues to empower students through meaningful learning, collaboration, and innovation.
            </p>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px', color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8, marginBottom: 28,
            }}>
              GRID Community is a student-led community of more than 2000 members dedicated to empowering students through collaboration, hands-on learning, and real-world opportunities. Our mission is to bridge the gap between academia and industry by organizing hackathons, workshops, bootcamps, webinars, networking events, and technical initiatives that inspire innovation, foster practical skills, and prepare students for future careers.
            </p>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '12px 20px',
              background: 'rgba(201,168,76,0.1)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: '10px',
            }}>
              <Rocket size={16} color="var(--gold)" />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px', color: 'var(--gold)',
                letterSpacing: '0.1em',
              }}>STUDENT-LED · 2000+ MEMBERS</span>
            </div>
          </div>

          {/* Right — stat grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
            animation: visible ? 'slideInRight 0.8s ease forwards' : 'none',
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(12,29,56,0.9)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '28px 22px',
                transition: 'all 0.3s ease',
                animation: visible ? `fadeInUp 0.6s ease ${i * 100}ms both` : 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '10px',
                  background: 'rgba(201,168,76,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)', marginBottom: 18,
                }}>{s.icon}</div>
                <div style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '16px', color: 'var(--text-white)',
                  marginBottom: 8, lineHeight: 1.3,
                }}>{s.value}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px', color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          #grid-about > div:last-child > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #grid-about > div:last-child > div:nth-child(2) > div:last-child { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default GridAbout;
