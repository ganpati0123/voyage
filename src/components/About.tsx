import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Users } from 'lucide-react';

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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const hours = useCountUp(36, 1800, visible);
  const participants = useCountUp(300, 2000, visible);

  return (
    <section id="about" ref={sectionRef} style={{
      background: 'var(--bg-dark)',
      padding: '100px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 12 }}>
          <span className="section-label">ABOUT HACKVERSE 2.0</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* Left */}
          <div>
            <h2 className="pixel-heading" style={{
              fontSize: 'clamp(24px, 3.5vw, 44px)',
              color: 'var(--text-white)',
              lineHeight: 1.4,
              marginBottom: 32,
              animation: visible ? 'slideInLeft 0.8s ease forwards' : 'none',
            }}>
              Building the<br />
              <span style={{ color: 'var(--gold)' }}>Future of</span><br />
              Enterprise AI
            </h2>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.8,
              marginBottom: 20,
            }}>
              HackVerse 2.0 is MIT Bengaluru's flagship AI hackathon, organised in collaboration with IBM and 1M1B.
            </p>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.8,
              marginBottom: 32,
            }}>
              Over 36 hours, participants design, build and deploy production-ready AI systems solving real enterprise challenges using modern cloud infrastructure, AI models, and collaborative development tools.
            </p>

            <div style={{
              width: 80,
              height: 2,
              background: 'linear-gradient(90deg, var(--gold), transparent)',
              borderRadius: 2,
            }} />
          </div>

          {/* Right — stat cards */}
          <div style={{ display: 'flex', gap: 20, flexDirection: 'column' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <StatCard
                icon={<Calendar size={22} color="var(--gold)" />}
                value={`${hours} Hrs`}
                label="Build Duration"
                visible={visible}
                delay={0}
              />
              <StatCard
                icon={<Users size={22} color="var(--gold)" />}
                value={`${participants}+`}
                label="Participants"
                visible={visible}
                delay={200}
              />
            </div>
          </div>
        </div>

        {/* Quote */}
        <div style={{
          marginTop: 80,
          textAlign: 'center',
          animation: visible ? 'fadeInUp 1s ease 0.5s both' : 'none',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.6,
            maxWidth: 800,
            margin: '0 auto',
          }}>
            Building{' '}
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>enterprise-grade AI solutions</span>
            {' '}that create measurable real-world impact.
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
      style={{
        background: hovered ? 'rgba(20,35,60,0.95)' : 'rgba(13,21,37,0.9)',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.35)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '16px',
        padding: '28px 24px',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.4)' : 'none',
        animation: visible ? `fadeInUp 0.7s ease ${delay}ms both` : 'none',
        cursor: 'default',
      }}
    >
      <div style={{
        width: 44,
        height: 44,
        borderRadius: '10px',
        background: 'rgba(201,168,76,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      }}>
        {icon}
      </div>
      <div style={{
        fontFamily: 'var(--font-pixel)',
        fontSize: '22px',
        color: 'var(--text-white)',
        marginBottom: 8,
        lineHeight: 1,
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'rgba(255,255,255,0.4)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        {label}
      </div>
    </div>
  );
};

export default About;
