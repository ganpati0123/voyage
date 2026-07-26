import React, { useEffect, useRef, useState } from 'react';
import { Sunrise, Sun, Sunset, Moon, Utensils, Gamepad2, Users, Gavel, Flag } from 'lucide-react';

const schedule = [
  { time: 'Day 1', title: 'Orientation', icon: <Flag size={18} />, phase: 'start' },
  { time: 'Day 1', title: 'Hackathon Start', icon: <Sunrise size={18} />, phase: 'start' },
  { time: 'Day 1', title: 'Morning Session - 1', icon: <Sun size={18} />, phase: 'build' },
  { time: 'Day 1', title: 'Lunch', icon: <Utensils size={18} />, phase: 'break' },
  { time: 'Day 1', title: 'Evening Snacks - 1', icon: <Utensils size={18} />, phase: 'break' },
  { time: 'Day 1', title: 'Leisure Game - 1', icon: <Gamepad2 size={18} />, phase: 'fun' },
  { time: 'Day 1', title: 'Dinner', icon: <Utensils size={18} />, phase: 'break' },
  { time: 'Day 1', title: 'Mentoring Session - 2', icon: <Users size={18} />, phase: 'mentor' },
  { time: 'Day 1', title: 'Leisure Game - 2', icon: <Gamepad2 size={18} />, phase: 'fun' },
  { time: 'Day 2', title: 'Mentoring Session - 3', icon: <Users size={18} />, phase: 'mentor' },
  { time: 'Day 2', title: 'Judges Round + Submission Window Live', icon: <Gavel size={18} />, phase: 'judge' },
  { time: 'Day 2', title: 'Breakfast', icon: <Utensils size={18} />, phase: 'break' },
  { time: 'Day 2', title: 'Lunch', icon: <Utensils size={18} />, phase: 'break' },
  { time: 'Day 2', title: 'Closing Ceremony', icon: <Flag size={18} />, phase: 'end' },
  { time: 'Day 2', title: 'Hackathon Ends', icon: <Sunset size={18} />, phase: 'end' },
];

const phaseColors: Record<string, string> = {
  start: 'var(--gold)',
  build: 'var(--teal)',
  break: 'rgba(141,165,196,0.7)',
  fun: 'rgba(220,100,140,0.8)',
  mentor: 'rgba(60,140,220,0.8)',
  judge: 'var(--gold)',
  end: 'var(--gold)',
};

const Timeline: React.FC = () => {
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
    <section id="timeline" ref={sectionRef} style={{
      background: 'var(--bg-dark)',
      padding: '100px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <span className="section-label">CAPTAIN'S LOG</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(20px, 2.8vw, 36px)',
            color: 'var(--text-white)',
            lineHeight: 1.4,
            marginTop: 8,
            animation: visible ? 'fadeInUp 0.8s ease' : 'none',
          }}>
            The 36-Hour <span style={{ color: 'var(--gold)' }}>Journey</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: 'rgba(255,255,255,0.5)',
            marginTop: 16,
            maxWidth: 500,
            margin: '16px auto 0',
            lineHeight: 1.7,
          }}>
            From orientation to closing ceremony — here's how your 36 hours will unfold.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 0 }}>
          {/* Center line */}
          <div style={{
            position: 'absolute',
            left: '50%', top: 0, bottom: 0,
            width: 2,
            background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.3) 10%, rgba(201,168,76,0.3) 90%, transparent)',
            transform: 'translateX(-50%)',
          }} />

          {schedule.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} style={{
                position: 'relative',
                display: 'flex',
                justifyContent: isLeft ? 'flex-end' : 'flex-start',
                marginBottom: 24,
                paddingRight: isLeft ? 'calc(50% + 32px)' : 0,
                paddingLeft: isLeft ? 0 : 'calc(50% + 32px)',
                animation: visible ? `fadeInUp 0.6s ease ${i * 60}ms both` : 'none',
              }}>
                {/* Node */}
                <div style={{
                  position: 'absolute',
                  left: '50%', top: 14,
                  width: 14, height: 14,
                  borderRadius: '50%',
                  background: phaseColors[item.phase],
                  border: '2px solid var(--bg-dark)',
                  transform: 'translateX(-50%)',
                  boxShadow: `0 0 12px ${phaseColors[item.phase]}`,
                  zIndex: 2,
                }} />

                <div style={{
                  background: 'rgba(12,29,56,0.9)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '18px 22px',
                  width: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                  e.currentTarget.style.background = 'rgba(16,37,68,0.95)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.background = 'rgba(12,29,56,0.9)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span style={{ color: phaseColors[item.phase] }}>{item.icon}</span>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '9px', color: 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                    }}>{item.time}</span>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px', color: 'rgba(255,255,255,0.85)',
                    fontWeight: 500, lineHeight: 1.4,
                  }}>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #timeline > div:last-child > div:nth-child(3) { left: 0 !important; transform: none !important; }
          #timeline > div:last-child > div:nth-child(3) > div { left: 8px !important; }
          #timeline > div:last-child > div[style*="justify-content"] {
            justify-content: flex-start !important;
            padding-right: 0 !important;
            padding-left: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
