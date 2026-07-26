import React, { useEffect, useRef, useState } from 'react';
import { Brain, Shield, Anchor, Heart, Coins, Compass } from 'lucide-react';

const tracks = [
  {
    id: 1,
    number: '01',
    icon: <Brain size={26} />,
    title: "Devil's Triangle",
    subtitle: 'AI / Machine Learning',
    description: 'Harness the power of AI and Machine Learning to conquer the unknown.',
    tags: ['LLMs', 'RAG', 'Agents', 'ML'],
    color: 'rgba(201,168,76,0.12)',
    border: 'rgba(201,168,76,0.4)',
  },
  {
    id: 2,
    number: '02',
    icon: <Anchor size={26} />,
    title: 'Tortuga Market',
    subtitle: 'Blockchain / Web3',
    description: 'Navigate the future with Blockchain and decentralized technologies.',
    tags: ['Smart Contracts', 'DeFi', 'dApps', 'Web3'],
    color: 'rgba(60,140,220,0.1)',
    border: 'rgba(60,140,220,0.4)',
  },
  {
    id: 3,
    number: '03',
    icon: <Coins size={26} />,
    title: "Dead Men's Ledger",
    subtitle: 'FinTech',
    description: 'Redefine the world of Financial Technology through secure, scalable innovation.',
    tags: ['Payments', 'Banking', 'Fraud', 'Trading'],
    color: 'rgba(80,200,140,0.1)',
    border: 'rgba(80,200,140,0.4)',
  },
  {
    id: 4,
    number: '04',
    icon: <Heart size={26} />,
    title: 'Fountain of Youth',
    subtitle: 'Healthcare',
    description: 'Leverage technology to build smarter, more accessible Healthcare solutions.',
    tags: ['MedTech', 'Diagnostics', 'Telehealth', 'AI Health'],
    color: 'rgba(220,100,140,0.1)',
    border: 'rgba(220,100,140,0.4)',
  },
  {
    id: 5,
    number: '05',
    icon: <Shield size={26} />,
    title: "Davy Jones' Vault",
    subtitle: 'Cybersecurity',
    description: 'Build innovative solutions to secure the digital world against evolving cyber threats.',
    tags: ['AppSec', 'Crypto', 'Network', 'Forensics'],
    color: 'rgba(160,100,220,0.1)',
    border: 'rgba(160,100,220,0.4)',
  },
  {
    id: 6,
    number: '06',
    icon: <Compass size={26} />,
    title: 'Shipwreck Cove',
    subtitle: 'Open Innovation',
    description: 'Explore limitless possibilities and bring bold ideas to life across any domain.',
    tags: ['Any Domain', 'Creative', 'Bold Ideas'],
    color: 'rgba(45,184,166,0.1)',
    border: 'rgba(45,184,166,0.4)',
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
      background: 'var(--bg-deep)',
      padding: '100px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <span className="section-label">VOYAGE ARENA</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(20px, 2.8vw, 36px)',
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
            maxWidth: 540,
            margin: '16px auto 0',
            lineHeight: 1.7,
          }}>
            Six treasure-hunt themed tracks designed to challenge and inspire. Pick the one that aligns with your expertise and set sail.
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

      <style>{`
        @media (max-width: 900px) {
          #tracks > div:last-child > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #tracks > div:last-child > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
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
        background: hovered ? 'rgba(16,37,68,0.95)' : 'rgba(12,29,56,0.9)',
        border: `1px solid ${hovered ? track.border : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '18px',
        padding: '32px 26px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${track.border}` : 'none',
        animation: visible ? `fadeInUp 0.7s ease ${index * 100}ms both` : 'none',
        cursor: 'default',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 16, right: 24,
        fontFamily: 'var(--font-pixel)',
        fontSize: '42px',
        color: 'rgba(255,255,255,0.03)',
        lineHeight: 1, pointerEvents: 'none',
      }}>{track.number}</div>

      <div style={{
        width: 52, height: 52, borderRadius: '12px',
        background: track.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--gold)',
        marginBottom: 22,
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0)',
      }}>{track.icon}</div>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px', color: 'var(--gold)',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        marginBottom: 8,
      }}>{track.subtitle}</div>

      <h3 style={{
        fontFamily: 'var(--font-pixel)',
        fontSize: '13px', color: 'var(--text-white)',
        marginBottom: 16, lineHeight: 1.5,
      }}>{track.title}</h3>

      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '13px', color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.7, marginBottom: 22,
      }}>{track.description}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {track.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px', color: 'rgba(255,255,255,0.6)',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '5px 10px', borderRadius: '6px',
            letterSpacing: '0.05em',
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
