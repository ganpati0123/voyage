import { useEffect, useRef, useState } from 'react';
import { Brain, Shield, Anchor, Heart, Coins, Compass } from 'lucide-react';

const tracks = [
  {
    id: 1,
    number: 'I',
    icon: <Brain size={26} />,
    title: "Devil's Triangle",
    subtitle: 'AI / Machine Learning',
    description: 'Harness the dark arts of AI and Machine Learning to conquer the unknown. Forge cognitive systems, predictive charting, and intelligent automation that bend the rules of the known world.',
    tags: ['LLMs', 'RAG', 'Agents', 'Neural Nets'],
    accent: '#d4af37',
    glow: 'rgba(212,175,55,0.45)',
  },
  {
    id: 2,
    number: 'II',
    icon: <Anchor size={26} />,
    title: 'Tortuga Market',
    subtitle: 'Blockchain / Web3',
    description: 'Navigate the future through Blockchain and decentralized waters. Build immutable contracts, token economies, and dApps that answer to no king.',
    tags: ['Smart Contracts', 'DeFi', 'dApps', 'Web3'],
    accent: '#4a90d9',
    glow: 'rgba(74,144,217,0.45)',
  },
  {
    id: 3,
    number: 'III',
    icon: <Coins size={26} />,
    title: "Dead Men's Ledger",
    subtitle: 'FinTech',
    description: 'Redefine the world of gold and ledgers through secure, scalable financial instruments. Where every transaction tells a tale of trust.',
    tags: ['Payments', 'Banking', 'Fraud', 'Trading'],
    accent: '#50c88c',
    glow: 'rgba(80,200,140,0.45)',
  },
  {
    id: 4,
    number: 'IV',
    icon: <Heart size={26} />,
    title: 'Fountain of Youth',
    subtitle: 'Healthcare',
    description: 'Leverage the healing arts to build smarter, more accessible Healthcare. Tackle diagnostics, patient experience, and medical lore — making care more human.',
    tags: ['MedTech', 'Diagnostics', 'Telehealth', 'AI Health'],
    accent: '#dc648c',
    glow: 'rgba(220,100,140,0.45)',
  },
  {
    id: 5,
    number: 'V',
    icon: <Shield size={26} />,
    title: "Davy Jones' Vault",
    subtitle: 'Cybersecurity',
    description: 'Fortify the digital realm against the ever-shifting tides of cyber threat. Build armored systems that guard treasure from raiders.',
    tags: ['AppSec', 'Crypto', 'Network', 'Forensics'],
    accent: '#a064dc',
    glow: 'rgba(160,100,220,0.45)',
  },
  {
    id: 6,
    number: 'VI',
    icon: <Compass size={26} />,
    title: 'Shipwreck Cove',
    subtitle: 'Open Innovation',
    description: 'Explore limitless waters and bring bold ideas to life across any domain. The cove rewards the daring, the creative, and the relentless.',
    tags: ['Any Domain', 'Creative', 'Bold Ideas'],
    accent: '#2db8a6',
    glow: 'rgba(45,184,166,0.45)',
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
    <section id="tracks" ref={sectionRef} className="noise-texture" style={{
      background: 'linear-gradient(180deg, #01060f 0%, #000206 100%)',
      padding: '130px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '6%', left: '0', width: 560, height: 560,
        background: 'radial-gradient(circle, rgba(201,162,46,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 72, textAlign: 'center' }}>
          <span className="section-label">The Waters Ye Shall Sail</span>
          <h2 style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            color: 'var(--text-white)',
            lineHeight: 0.95,
            marginTop: 18,
            animation: visible ? 'fadeInUp 0.9s ease' : 'none',
          }}>
            Choose Thy <span className="gold-text">Domain</span>
          </h2>
          <div className="ornament" />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: 'rgba(141,165,196,0.62)',
            maxWidth: 580,
            margin: '0 auto',
            lineHeight: 1.9,
          }}>
            Six treasure-hunt domains forged to test the boldest crews. Pick the waters that match
            yer expertise, weigh anchor, and set sail toward glory.
          </p>
        </div>

        <div className="grid-3">
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
      className="glass-card"
      style={{
        padding: '40px 30px',
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-12px) scale(1.03)' : 'translateY(0)',
        boxShadow: hovered ? `0 28px 70px rgba(0,0,0,0.55), 0 0 44px ${track.glow}` : 'none',
        animation: visible ? `fadeInUp 0.7s ease ${index * 100}ms both` : 'none',
        cursor: 'default',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: -60, right: -60,
        width: 170, height: 170, borderRadius: '50%',
        background: `radial-gradient(circle, ${track.glow} 0%, transparent 70%)`,
        opacity: hovered ? 0.7 : 0.22,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute', top: 22, right: 32,
        fontFamily: 'var(--font-pirate)',
        fontSize: '58px',
        color: 'rgba(212,175,55,0.06)',
        lineHeight: 1, pointerEvents: 'none',
      }}>{track.number}</div>

      <div style={{
        width: 60, height: 60, borderRadius: '16px',
        background: `linear-gradient(135deg, ${track.glow}, transparent)`,
        border: `1px solid ${track.accent}50`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: track.accent,
        marginBottom: 26,
        transition: 'all 0.4s ease',
        transform: hovered ? 'scale(1.15) rotate(-8deg)' : 'scale(1) rotate(0)',
        boxShadow: hovered ? `0 0 24px ${track.glow}` : 'none',
      }}>{track.icon}</div>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px', color: track.accent,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        marginBottom: 11,
      }}>{track.subtitle}</div>

      <h3 style={{
        fontFamily: 'var(--font-pirate)',
        fontSize: '28px', color: 'var(--text-white)',
        marginBottom: 18, lineHeight: 1.15,
      }}>{track.title}</h3>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '13.5px', color: 'rgba(141,165,196,0.68)',
        lineHeight: 1.85, marginBottom: 26,
      }}>{track.description}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {track.tags.map((tag) => (
          <span key={tag} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px', color: 'rgba(212,220,235,0.7)',
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${track.accent}40`,
            padding: '5px 12px', borderRadius: '6px',
            letterSpacing: '0.05em',
            transition: 'all 0.2s',
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
