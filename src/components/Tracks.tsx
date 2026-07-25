import React, { useEffect, useRef, useState } from 'react';
import { Brain, Cloud, Code } from 'lucide-react';

const tracks = [
  {
    id: 1,
    number: '01',
    icon: <Brain size={28} />,
    title: 'AI Application Track',
    subtitle: 'Cognitive Intelligence',
    description: 'Build next-gen enterprise AI agents. Leverage LLMs, RAG systems, and autonomous multi-agent architectures to solve real business problems.',
    tags: ['LLMs', 'RAG', 'Agents', 'Fine-tuning'],
    color: 'rgba(201,168,76,0.12)',
    border: 'rgba(201,168,76,0.4)',
  },
  {
    id: 2,
    number: '02',
    icon: <Cloud size={28} />,
    title: 'Cloud Infrastructure Track',
    subtitle: 'Scalable Systems',
    description: 'Design and deploy resilient cloud-native systems. Master containerization, orchestration, serverless compute, and observability at enterprise scale.',
    tags: ['Kubernetes', 'Serverless', 'Terraform', 'Edge'],
    color: 'rgba(60,140,220,0.1)',
    border: 'rgba(60,140,220,0.4)',
  },
  {
    id: 3,
    number: '03',
    icon: <Code size={28} />,
    title: 'Full Stack Development Track',
    subtitle: 'End-to-End Engineering',
    description: 'Craft production-grade applications. From modern frontend frameworks to distributed backends and robust APIs, build software that scales.',
    tags: ['React', 'Node', 'PostgreSQL', 'GraphQL'],
    color: 'rgba(80,200,140,0.1)',
    border: 'rgba(80,200,140,0.4)',
  },
];

const Tracks: React.FC = () => {
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
    <section id="tracks" ref={sectionRef} style={{
      background: 'var(--bg-dark)',
      padding: '100px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative side accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <span className="section-label">EXPLORE TRACKS</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(22px, 3vw, 38px)',
            color: 'var(--text-white)',
            lineHeight: 1.4,
            marginTop: 8,
            animation: visible ? 'fadeInUp 0.8s ease' : 'none',
          }}>
            Choose Your <span style={{ color: 'var(--gold)' }}>Domain</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: 'rgba(255,255,255,0.5)',
            marginTop: 16,
            maxWidth: 500,
            margin: '16px auto 0',
          }}>
            Three specialized tracks designed to challenge and inspire. Pick the one that aligns with your expertise.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {tracks.map((track, i) => (
            <TrackCard key={track.id} track={track} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TrackCard: React.FC<{ track: typeof tracks[0]; index: number; visible: boolean }> = ({ track, index, visible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? 'rgba(20,32,52,0.95)' : 'rgba(13,21,37,0.9)',
        border: `1px solid ${hovered ? track.border : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '18px',
        padding: '36px 28px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${track.border}` : 'none',
        animation: visible ? `fadeInUp 0.7s ease ${index * 150}ms both` : 'none',
        cursor: 'default',
        overflow: 'hidden',
      }}
    >
      {/* Number watermark */}
      <div style={{
        position: 'absolute',
        top: 16,
        right: 24,
        fontFamily: 'var(--font-pixel)',
        fontSize: '48px',
        color: 'rgba(255,255,255,0.03)',
        lineHeight: 1,
        pointerEvents: 'none',
      }}>
        {track.number}
      </div>

      {/* Icon */}
      <div style={{
        width: 56,
        height: 56,
        borderRadius: '14px',
        background: track.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--gold)',
        marginBottom: 24,
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0)',
      }}>
        {track.icon}
      </div>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px',
        color: 'var(--gold)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: 8,
      }}>
        {track.subtitle}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 19,
        fontWeight: 600,
        color: 'var(--text-white)',
        marginBottom: 16,
        lineHeight: 1.3,
      }}>
        {track.title}
      </h3>

      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.7,
        marginBottom: 24,
      }}>
        {track.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {track.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            color: 'rgba(255,255,255,0.6)',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '5px 10px',
            borderRadius: '6px',
            letterSpacing: '0.05em',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
