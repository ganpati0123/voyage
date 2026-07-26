import { useEffect, useRef, useState } from 'react';
import { Sunrise, Sun, Sunset, Utensils, Gamepad2, Users, Gavel, Flag } from 'lucide-react';

const schedule = [
  { time: 'Day the First', title: 'Orientation of the Fleet', icon: <Flag size={18} />, phase: 'start' },
  { time: 'Day the First', title: 'The Voyage Begins', icon: <Sunrise size={18} />, phase: 'start' },
  { time: 'Day the First', title: "Morning Watch — Session I", icon: <Sun size={18} />, phase: 'build' },
  { time: 'Day the First', title: 'The Midday Feast', icon: <Utensils size={18} />, phase: 'break' },
  { time: 'Day the First', title: "Evening Rations", icon: <Utensils size={18} />, phase: 'break' },
  { time: 'Day the First', title: 'Deck Games — Round I', icon: <Gamepad2 size={18} />, phase: 'fun' },
  { time: 'Day the First', title: 'The Night Feast', icon: <Utensils size={18} />, phase: 'break' },
  { time: 'Day the First', title: "Counsel of Captains — Session II", icon: <Users size={18} />, phase: 'mentor' },
  { time: 'Day the First', title: 'Deck Games — Round II', icon: <Gamepad2 size={18} />, phase: 'fun' },
  { time: 'Day the Second', title: "Counsel of Captains — Session III", icon: <Users size={18} />, phase: 'mentor' },
  { time: 'Day the Second', title: 'The Judgement & Submission Window', icon: <Gavel size={18} />, phase: 'judge' },
  { time: 'Day the Second', title: 'Dawn Meal', icon: <Utensils size={18} />, phase: 'break' },
  { time: 'Day the Second', title: 'The Midday Feast', icon: <Utensils size={18} />, phase: 'break' },
  { time: 'Day the Second', title: 'Closing Ceremony', icon: <Flag size={18} />, phase: 'end' },
  { time: 'Day the Second', title: 'The Voyage Concludes', icon: <Sunset size={18} />, phase: 'end' },
];

const phaseColors: Record<string, string> = {
  start: '#d4af37',
  build: '#2db8a6',
  break: '#8da5c4',
  fun: '#dc648c',
  mentor: '#4a90d9',
  judge: '#d4af37',
  end: '#d4af37',
};

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="noise-texture" style={{
      background: 'linear-gradient(180deg, #000206 0%, #01060f 100%)',
      padding: '130px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="grid-texture" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div className="section-container" style={{ maxWidth: '1040px', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 72, textAlign: 'center' }}>
          <span className="section-label">Captain's Log</span>
          <h2 style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            color: 'var(--text-white)',
            lineHeight: 0.95,
            marginTop: 18,
            animation: visible ? 'fadeInUp 0.9s ease' : 'none',
          }}>
            The 36-Hour <span className="gold-text">Odyssey</span>
          </h2>
          <div className="ornament" />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: 'rgba(141,165,196,0.62)',
            maxWidth: 540,
            margin: '0 auto',
            lineHeight: 1.9,
          }}>
            From the orientation of the fleet to the closing ceremony — here unfolds the chronicle
            of yer relentless 36-hour tide.
          </p>
        </div>

        <div style={{ position: 'relative', paddingLeft: 0 }}>
          <div style={{
            position: 'absolute',
            left: '50%', top: 0, bottom: 0,
            width: 2,
            background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.45) 8%, rgba(212,175,55,0.45) 92%, transparent)',
            transform: 'translateX(-50%)',
          }} />

          {schedule.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} style={{
                position: 'relative',
                display: 'flex',
                justifyContent: isLeft ? 'flex-end' : 'flex-start',
                marginBottom: 30,
                paddingRight: isLeft ? 'calc(50% + 44px)' : 0,
                paddingLeft: isLeft ? 0 : 'calc(50% + 44px)',
                animation: visible ? `fadeInUp 0.6s ease ${i * 55}ms both` : 'none',
              }}>
                <div style={{
                  position: 'absolute',
                  left: '50%', top: 16,
                  width: 18, height: 18,
                  borderRadius: '50%',
                  background: phaseColors[item.phase],
                  border: '3px solid #02060d',
                  transform: 'translateX(-50%)',
                  boxShadow: `0 0 18px ${phaseColors[item.phase]}`,
                  zIndex: 2,
                  animation: visible ? `glowPulse 2.2s ease ${i * 55}ms infinite` : 'none',
                }} />

                <div
                  className="glass-card"
                  style={{
                    padding: '22px 26px',
                    width: '100%',
                    transition: 'transform 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 14px 36px rgba(0,0,0,0.5), 0 0 0 1px ${phaseColors[item.phase]}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 9 }}>
                    <span style={{
                      width: 34, height: 34, borderRadius: 9,
                      background: `${phaseColors[item.phase]}22`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: phaseColors[item.phase],
                    }}>{item.icon}</span>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '9px', color: 'rgba(141,165,196,0.55)',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                    }}>{item.time}</span>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px', color: 'rgba(240,244,250,0.92)',
                    fontWeight: 600, lineHeight: 1.35,
                  }}>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #timeline .timeline-row { justify-content: flex-start !important; padding-right: 0 !important; padding-left: 46px !important; }
          #timeline .timeline-node { left: 9px !important; }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
