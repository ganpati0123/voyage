import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Who may join the Voyage?',
    a: "The Voyage is open to all undergraduate and postgraduate souls (1st Year — Final Year) from any college across the realm. Ye need no prior hackathon experience — only the will to build and sail beyond the horizon.",
  },
  {
    q: 'Must I sail with a crew, and how large?',
    a: 'Ye shall sail as a crew of 3–4 souls. We encourage crew participation to bring diverse skills aboard. Crew-matching gatherings may also be hosted before the Voyage sets sail.',
  },
  {
    q: 'Is there a toll to enlist?',
    a: 'Nay — Voyage is free to join. There are no hidden tolls. Simply enlist, arrive, and be ready to build.',
  },
  {
    q: 'Is the Voyage upon the seas or in person?',
    a: 'Voyage is a 36-hour in-person odyssey. The anchorage shall be announced closer to the tide. Voyagers are expected to remain in the arena for the full duration.',
  },
  {
    q: 'What must I bring to the arena?',
    a: 'Each voyager must bring their own laptop, charger, and power backup. Ye must also wear yer participant insignia at all times within the arena. Rations, refreshments, and workspace shall be provided.',
  },
  {
    q: 'Shall counsel be available?',
    a: 'Aye! Industry veterans from our allied fleets — Algorand, OSEN, and Mewayz Global Corporation — shall be available throughout the Voyage for counsel and mentorship sessions.',
  },
  {
    q: 'How shall the ventures be judged?',
    a: 'Ventures shall be evaluated on innovation, technical depth, impact, presentation, and feasibility. A panel of expert judges shall assess the final submissions during the Judgement Round.',
  },
  {
    q: 'What waters may I sail?',
    a: "Voyage features six themed domains: Devil's Triangle (AI/ML), Tortuga Market (Blockchain/Web3), Dead Men's Ledger (FinTech), Fountain of Youth (Healthcare), Davy Jones' Vault (Cybersecurity), and Shipwreck Cove (Open Innovation).",
  },
];

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="noise-texture" style={{
      background: 'linear-gradient(180deg, #040c1a 0%, #02060d 100%)',
      padding: '130px 48px',
      position: 'relative',
    }}>
      <div className="grid-texture" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 68 }}>
          <span className="section-label">The Codex of Queries</span>
          <h2 style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            color: 'var(--text-white)',
            lineHeight: 0.95,
            marginTop: 18,
            animation: visible ? 'fadeInUp 0.9s ease' : 'none',
          }}>
            Lore & <span className="gold-text">Answers</span>
          </h2>
          <div className="ornament" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  visible: boolean;
}> = ({ faq, isOpen, onToggle, index, visible }) => (
  <div
    className="glass-card"
    style={{
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      boxShadow: isOpen ? '0 14px 36px rgba(0,0,0,0.4)' : 'none',
      animation: visible ? `fadeInUp 0.6s ease ${index * 70}ms both` : 'none',
    }}
  >
    <button
      onClick={onToggle}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '26px 32px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        gap: 18,
      }}
    >
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '17px',
        fontWeight: isOpen ? 700 : 600,
        color: isOpen ? 'var(--text-white)' : 'rgba(212,220,235,0.78)',
        lineHeight: 1.5,
        transition: 'color 0.2s',
      }}>{faq.q}</span>
      <span style={{
        flexShrink: 0,
        width: 38, height: 38, borderRadius: '50%',
        background: isOpen ? 'rgba(212,175,55,0.16)' : 'rgba(255,255,255,0.04)',
        border: `1px solid ${isOpen ? 'rgba(212,175,55,0.32)' : 'rgba(255,255,255,0.08)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: isOpen ? 'var(--gold-6)' : 'rgba(141,165,196,0.5)',
        transition: 'all 0.3s ease',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
      }}>
        <ChevronDown size={20} />
      </span>
    </button>

    <div style={{
      maxHeight: isOpen ? '420px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
    }}>
      <div style={{
        padding: '0 32px 30px',
        borderTop: '1px solid rgba(212,175,55,0.12)',
        paddingTop: 24,
        marginLeft: 32,
        borderLeft: '2px solid rgba(212,175,55,0.25)',
        paddingLeft: 26,
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14.5px',
          color: 'rgba(141,165,196,0.68)',
          lineHeight: 1.9,
        }}>{faq.a}</p>
      </div>
    </div>
  </div>
);

export default FAQ;
