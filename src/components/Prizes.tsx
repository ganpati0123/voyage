import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Shirt, Award, Gift, Sticker, Network, Users, MessageSquare } from 'lucide-react';

const prizes = [
  {
    rank: '1ST PRIZE',
    amount: '₹10,000',
    icon: <Trophy size={28} />,
    accent: 'linear-gradient(135deg, #e4c060, #c9a84c)',
    glow: 'rgba(228,192,96,0.4)',
    place: 'GOLD',
  },
  {
    rank: '2ND PRIZE',
    amount: '₹7,000',
    icon: <Award size={28} />,
    accent: 'linear-gradient(135deg, #c0c0c0, #8a8a8a)',
    glow: 'rgba(192,192,192,0.3)',
    place: 'SILVER',
  },
  {
    rank: '3RD PRIZE',
    amount: '₹5,000',
    icon: <Award size={28} />,
    accent: 'linear-gradient(135deg, #cd7f32, #8a4f15)',
    glow: 'rgba(205,127,50,0.3)',
    place: 'BRONZE',
  },
];

const perks = [
  { icon: <Shirt size={20} />, label: 'Branded T-Shirts' },
  { icon: <Award size={20} />, label: 'Participation Certificates' },
  { icon: <Gift size={20} />, label: 'Participation Gifts' },
  { icon: <Sticker size={20} />, label: 'Exclusive Sticker Collection' },
  { icon: <Network size={20} />, label: 'Expand Your Professional Network' },
  { icon: <Users size={20} />, label: 'Mentorship Sessions' },
  { icon: <MessageSquare size={20} />, label: 'Interaction with Experts' },
];

const Prizes: React.FC = () => {
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
    <section id="prizes" ref={sectionRef} style={{
      background: 'var(--bg-deep)',
      padding: '100px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '10%', right: '5%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <span className="section-label">TREASURE COVE</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(20px, 2.8vw, 36px)',
            color: 'var(--text-white)',
            lineHeight: 1.4,
            marginTop: 8,
            animation: visible ? 'fadeInUp 0.8s ease' : 'none',
          }}>
            Prizes & <span style={{ color: 'var(--gold)' }}>Rewards</span>
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
            A total prize pool of <span style={{ color: 'var(--gold)', fontWeight: 600 }}>₹25,000</span> plus exclusive perks for every participant.
          </p>
        </div>

        {/* Prize podium */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 24,
          marginBottom: 60,
          alignItems: 'end',
        }}>
          {prizes.map((prize, i) => (
            <PrizeCard key={i} prize={prize} index={i} visible={visible} />
          ))}
        </div>

        {/* Perks */}
        <div style={{
          background: 'rgba(12,29,56,0.5)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '20px',
          padding: '40px 32px',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px', color: 'var(--gold)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            textAlign: 'center', marginBottom: 28,
          }}>EVERYONE WINS</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}>
            {perks.map((perk, i) => (
              <div key={i} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                gap: 12,
                animation: visible ? `fadeInUp 0.6s ease ${i * 80}ms both` : 'none',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '12px',
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(201,168,76,0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(201,168,76,0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                >{perk.icon}</div>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px', color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.4,
                }}>{perk.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          #prizes > div:last-child > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #prizes > div:last-child > div:last-child > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

const PrizeCard: React.FC<{ prize: typeof prizes[0]; index: number; visible: boolean }> = ({ prize, index, visible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? 'rgba(16,37,68,0.95)' : 'rgba(12,29,56,0.9)',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '20px',
        padding: '36px 24px',
        textAlign: 'center',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: hovered ? `0 24px 60px rgba(0,0,0,0.5), 0 0 40px ${prize.glow}` : 'none',
        animation: visible ? `fadeInUp 0.7s ease ${index * 150}ms both` : 'none',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: prize.accent,
        opacity: hovered ? 1 : 0.5,
        transition: 'opacity 0.3s',
      }} />

      <div style={{
        width: 64, height: 64, borderRadius: '50%',
        background: hovered ? prize.accent : 'rgba(201,168,76,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 24px',
        color: hovered ? '#000' : 'var(--gold)',
        transition: 'all 0.4s ease',
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
      }}>{prize.icon}</div>

      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px', color: 'rgba(255,255,255,0.4)',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        marginBottom: 12,
      }}>{prize.rank}</p>

      <p style={{
        fontFamily: 'var(--font-pixel)',
        fontSize: '22px',
        background: prize.accent,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: 8,
      }}>{prize.amount}</p>

      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px', color: 'rgba(255,255,255,0.3)',
        letterSpacing: '0.15em', textTransform: 'uppercase',
      }}>{prize.place}</p>
    </div>
  );
};

export default Prizes;
