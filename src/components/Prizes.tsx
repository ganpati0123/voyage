import { useEffect, useRef, useState } from 'react';
import { Trophy, Shirt, Award, Gift, Sticker, Network, Users, MessageSquare } from 'lucide-react';

const prizes = [
  {
    rank: 'FIRST BOUNTY',
    amount: '₹10,000',
    icon: <Trophy size={34} />,
    accent: 'linear-gradient(135deg, #ffe9a8, #d4af37)',
    glow: 'rgba(255,233,168,0.55)',
    place: 'GOLD HOARD',
  },
  {
    rank: 'SECOND BOUNTY',
    amount: '₹7,000',
    icon: <Award size={34} />,
    accent: 'linear-gradient(135deg, #d8d8d8, #8a8a8a)',
    glow: 'rgba(192,192,192,0.42)',
    place: 'SILVER CACHE',
  },
  {
    rank: 'THIRD BOUNTY',
    amount: '₹5,000',
    icon: <Award size={34} />,
    accent: 'linear-gradient(135deg, #cd7f32, #8a4f15)',
    glow: 'rgba(205,127,50,0.42)',
    place: 'BRONZE COFFER',
  },
];

const perks = [
  { icon: <Shirt size={20} />, label: 'Crew Garb & T-Shirts' },
  { icon: <Award size={20} />, label: 'Voyager Certificates' },
  { icon: <Gift size={20} />, label: "Captain's Bounty" },
  { icon: <Sticker size={20} />, label: 'Crew Insignia Stickers' },
  { icon: <Network size={20} />, label: 'The Brotherhood Network' },
  { icon: <Users size={20} />, label: 'Counsel of Mentors' },
  { icon: <MessageSquare size={20} />, label: 'Audience with Veterans' },
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
    <section id="prizes" ref={sectionRef} className="noise-texture" style={{
      background: 'linear-gradient(180deg, #040c1a 0%, #02060d 100%)',
      padding: '130px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '6%', right: '4%',
        width: 640, height: 640,
        background: 'radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 68, textAlign: 'center' }}>
          <span className="section-label">The Treasure Cove</span>
          <h2 style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            color: 'var(--text-white)',
            lineHeight: 0.95,
            marginTop: 18,
            animation: visible ? 'fadeInUp 0.9s ease' : 'none',
          }}>
            Bounties & <span className="gold-text">Booty</span>
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
            A treasure hoard of <span className="gold-glow" style={{ fontWeight: 700 }}>₹25,000</span> awaits the
            finest crews, plus exclusive bounty for every soul who dares set sail.
          </p>
        </div>

        {/* Prize podium */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 26,
          marginBottom: 64,
          alignItems: 'end',
        }}>
          {prizes.map((prize, i) => (
            <PrizeCard key={i} prize={prize} index={i} visible={visible} />
          ))}
        </div>

        {/* Perks */}
        <div className="glass-card gold-frame" style={{ padding: '52px 40px' }}>
          <p className="gold-glow" style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: '24px',
            letterSpacing: '0.1em',
            textAlign: 'center', marginBottom: 40,
          }}>EVERY SOUL CLAIMS A SHARE</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 26 }}>
            {perks.map((perk, i) => (
              <div key={i} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                gap: 16,
                animation: visible ? `fadeInUp 0.6s ease ${i * 80}ms both` : 'none',
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '16px',
                  background: 'rgba(212,175,55,0.12)',
                  border: '1px solid rgba(212,175,55,0.24)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold-6)',
                  transition: 'all 0.35s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(212,175,55,0.22)';
                  e.currentTarget.style.transform = 'scale(1.14) rotate(-6deg)';
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(212,175,55,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(212,175,55,0.12)';
                  e.currentTarget.style.transform = 'scale(1) rotate(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >{perk.icon}</div>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '13.5px', color: 'rgba(212,220,235,0.78)',
                  lineHeight: 1.4, fontWeight: 600,
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
      className="glass-card"
      style={{
        padding: '48px 30px',
        textAlign: 'center',
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-14px) scale(1.04)' : 'translateY(0)',
        boxShadow: hovered ? `0 32px 80px rgba(0,0,0,0.55), 0 0 56px ${prize.glow}` : 'none',
        animation: visible ? `fadeInUp 0.7s ease ${index * 150}ms both` : 'none',
        overflow: 'hidden',
        marginTop: index === 0 ? 0 : index === 1 ? 22 : 44,
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: prize.accent,
        opacity: hovered ? 1 : 0.55,
        transition: 'opacity 0.3s',
      }} />

      <div style={{
        position: 'absolute', top: -70, left: '50%',
        transform: 'translateX(-50%)',
        width: 220, height: 220, borderRadius: '50%',
        background: `radial-gradient(circle, ${prize.glow} 0%, transparent 70%)`,
        opacity: hovered ? 0.65 : 0.22,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
      }} />

      <div style={{
        width: 78, height: 78, borderRadius: '50%',
        background: hovered ? prize.accent : 'rgba(212,175,55,0.12)',
        border: `1px solid ${hovered ? 'transparent' : 'rgba(212,175,55,0.24)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 30px',
        color: hovered ? '#000' : 'var(--gold-6)',
        transition: 'all 0.4s ease',
        transform: hovered ? 'scale(1.18)' : 'scale(1)',
        boxShadow: hovered ? `0 0 34px ${prize.glow}` : 'none',
      }}>{prize.icon}</div>

      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px', color: 'rgba(141,165,196,0.55)',
        letterSpacing: '0.22em', textTransform: 'uppercase',
        marginBottom: 16,
      }}>{prize.rank}</p>

      <p style={{
        fontFamily: 'var(--font-pirate)',
        fontSize: '36px',
        background: prize.accent,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: 12,
        lineHeight: 1,
      }}>{prize.amount}</p>

      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: '11px', color: 'rgba(212,175,55,0.7)',
        letterSpacing: '0.22em', textTransform: 'uppercase',
        fontWeight: 700,
      }}>{prize.place}</p>
    </div>
  );
};

export default Prizes;
