import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'Who can participate in Voyage 2026?',
    a: 'Voyage is open to all undergraduate students (1st Year - 4th Year). You don\'t need prior hackathon experience — just a willingness to build and explore beyond the horizon.',
  },
  {
    q: 'Do I need a team, and how big should it be?',
    a: 'You can participate as a team of 3-4 students. We encourage team participation to bring diverse skill sets together. Team matching sessions may also be hosted before the event.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'No, Voyage is completely free to participate in. There are no hidden charges. Just register, show up, and be ready to build.',
  },
  {
    q: 'Is the hackathon online or in-person?',
    a: 'Voyage is a 36-hour in-person hackathon. The exact venue will be announced closer to the event. Participants are expected to stay in the arena for the full duration.',
  },
  {
    q: 'What should I bring to the hackathon?',
    a: 'Each participant must bring their own laptop, charger, and power backup. You must also wear your participant ID at all times inside the hackathon arena. Food, refreshments, and workspace will be provided.',
  },
  {
    q: 'Will there be mentors available?',
    a: 'Yes! Industry professionals from our partner organizations — Algorand, OSEN, and Mewayz Global Corporation — will be available throughout the hackathon for guidance and mentorship sessions.',
  },
  {
    q: 'How will projects be judged?',
    a: 'Projects will be evaluated on innovation, technical depth, business impact, presentation quality, and feasibility. A panel of expert judges will assess the final submissions during the judges round.',
  },
  {
    q: 'What are the tracks available?',
    a: 'Voyage features six themed tracks: Devil\'s Triangle (AI/ML), Tortuga Market (Blockchain/Web3), Dead Men\'s Ledger (FinTech), Fountain of Youth (Healthcare), Davy Jones\' Vault (Cybersecurity), and Shipwreck Cove (Open Innovation).',
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
    <section id="faq" ref={sectionRef} style={{
      background: 'var(--bg-deep)',
      padding: '100px 48px',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">QUESTIONS</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(20px, 2.8vw, 36px)',
            marginTop: 8,
            color: 'var(--text-white)',
            lineHeight: 1.4,
            animation: visible ? 'fadeInUp 0.8s ease' : 'none',
          }}>
            Frequently <span style={{ color: 'var(--gold)' }}>Asked</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
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
}> = ({ faq, isOpen, onToggle, index, visible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isOpen ? 'rgba(16,37,68,0.95)' : hovered ? 'rgba(14,32,60,0.9)' : 'rgba(12,29,56,0.8)',
        border: `1px solid ${isOpen ? 'rgba(201,168,76,0.25)' : hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '14px',
        overflow: 'hidden',
        transition: 'background 0.25s ease, border-color 0.25s ease',
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
          padding: '22px 28px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 16,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '15px',
          fontWeight: isOpen ? 500 : 400,
          color: isOpen ? 'var(--text-white)' : 'rgba(255,255,255,0.75)',
          lineHeight: 1.5,
          transition: 'color 0.2s',
        }}>{faq.q}</span>
        <span style={{
          flexShrink: 0,
          color: isOpen ? 'var(--gold)' : 'rgba(255,255,255,0.35)',
          transition: 'color 0.2s, transform 0.3s',
          display: 'flex', alignItems: 'center',
        }}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      <div style={{
        maxHeight: isOpen ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{
          padding: '0 28px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 20,
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.8,
          }}>{faq.a}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
