import React, { useEffect, useRef, useState } from 'react';

const timeline = [
  { id: 1, date: '01', title: 'Registrations Open', time: 'March 2025', description: 'Sign up solo or assemble your dream team. Up to 4 members per squad.', done: true },
  { id: 2, date: '02', title: 'Pre-Hackathon Workshops', time: 'April 2025', description: 'Hands-on sessions on AI/ML, cloud deployment, and modern full-stack tooling.', done: true },
  { id: 3, date: '03', title: 'Hackathon Kickoff', time: 'May 10, 2025', description: 'Opening ceremony, problem statement reveals, and team matching.', done: false, active: true },
  { id: 4, date: '04', title: '36-Hour Build Sprint', time: 'May 10-11, 2025', description: 'Non-stop coding, mentorship, caffeine, and breakthrough moments.', done: false },
  { id: 5, date: '05', title: 'Final Submissions', time: 'May 11, 2025', description: 'Submit your repo, demo video, and pitch deck before the buzzer.', done: false },
  { id: 6, date: '06', title: 'Demo Day & Results', time: 'May 11, 2025', description: 'Live pitches to industry judges, prizes, and closing ceremony.', done: false },
];

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
    <section id="timeline" ref={sectionRef} style={{
      background: 'var(--bg-deep)',
      padding: '100px 48px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: 64, textAlign: 'center' }}>
          <span className="section-label">ROADMAP</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(22px, 3vw, 38px)',
            color: 'var(--text-white)',
            lineHeight: 1.4,
            marginTop: 8,
            animation: visible ? 'fadeInUp 0.8s ease' : 'none',
          }}>
            The <span style={{ color: 'var(--gold)' }}>Journey</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: 'rgba(255,255,255,0.5)',
            marginTop: 16,
            maxWidth: 480,
            margin: '16px auto 0',
          }}>
            From kickoff to demo day — every milestone on your HackVerse 2.0 path.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3) 10%, rgba(201,168,76,0.3) 90%, transparent)',
            transform: 'translateX(-50%)',
          }} />

          {timeline.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} visible={visible} side={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{
  item: typeof timeline[0];
  index: number;
  visible: boolean;
  side: 'left' | 'right';
}> = ({ item, index, visible, side }) => {
  return (
    <div style={{
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: side === 'left' ? '1fr auto 1fr' : '1fr auto 1fr',
      marginBottom: 48,
      animation: visible ? `fadeInUp 0.6s ease ${index * 100}ms both` : 'none',
    }}>
      {/* Left content */}
      <div style={{ textAlign: side === 'left' ? 'right' : 'left', paddingRight: side === 'left' ? 32 : 0, paddingLeft: side === 'right' ? 32 : 0 }}>
        {side === 'left' && <TimelineCard item={item} />}
      </div>

      {/* Node */}
      <div style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: item.active ? 'var(--gold)' : item.done ? 'rgba(80,200,140,0.2)' : 'rgba(13,21,37,0.95)',
        border: `2px solid ${item.active ? 'var(--gold-light)' : item.done ? 'rgba(80,200,140,0.6)' : 'rgba(255,255,255,0.15)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-pixel)',
        fontSize: '12px',
        color: item.active ? '#000' : item.done ? 'rgba(80,200,140,1)' : 'rgba(255,255,255,0.4)',
        boxShadow: item.active ? '0 0 24px rgba(201,168,76,0.6)' : 'none',
        position: 'relative',
        zIndex: 2,
        animation: item.active ? 'pulse-glow 2s ease-in-out infinite' : 'none',
        flexShrink: 0,
      }}>
        {item.date}
      </div>

      {/* Right content */}
      <div style={{ textAlign: side === 'right' ? 'left' : 'right', paddingLeft: side === 'right' ? 32 : 0, paddingRight: side === 'left' ? 32 : 0 }}>
        {side === 'right' && <TimelineCard item={item} />}
      </div>
    </div>
  );
};

const TimelineCard: React.FC<{ item: typeof timeline[0] }> = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(20,32,52,0.95)' : 'rgba(13,21,37,0.9)',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '14px',
        padding: '20px 24px',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        display: 'inline-block',
        textAlign: 'left',
        maxWidth: 380,
        cursor: 'default',
      }}
    >
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px',
        color: item.active ? 'var(--gold)' : 'rgba(255,255,255,0.4)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: 8,
      }}>
        {item.time}
      </div>
      <h4 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--text-white)',
        marginBottom: 8,
      }}>
        {item.title}
      </h4>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.6,
      }}>
        {item.description}
      </p>
    </div>
  );
};

export default Timeline;
