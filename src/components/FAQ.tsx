import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'Who can participate in HackVerse 2.0?',
    a: "The hackathon is open to all undergraduate students (1st Year - 4th Year). You don't need prior hackathon experience — just a willingness to build.",
  },
  {
    q: 'Do I need a team, and how big should it be?',
    a: 'You can participate solo or as a team of up to 4 members. We encourage team participation to bring diverse skill sets together. Team matching sessions will also be hosted before the event.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'No, HackVerse 2.0 is completely free to participate in. There are no hidden charges. Just register, complete the IBM certification, and show up ready to build.',
  },
  {
    q: 'Is the hackathon online or in-person?',
    a: 'Phase 1 (screening and IBM certification) is completed online. The Grand Finale (Phase 2) will be conducted in-person at MIT Bengaluru campus. Exact venue and logistics details will be shared closer to the event.',
  },
  {
    q: 'What should I bring to the Grand Finale?',
    a: 'Bring your laptop, chargers, college ID, and your hacker mindset. Food, refreshments, and workspace will be provided. Cloud credits and API access will also be made available to participants.',
  },
  {
    q: 'Will there be mentors available?',
    a: 'Yes! Industry professionals from IBM, Celonis, and the broader 1M1B network will be available throughout the hackathon for guidance and mentorship sessions.',
  },
  {
    q: 'How will projects be judged?',
    a: 'Projects will be evaluated on innovation, technical depth, business impact, presentation quality, and feasibility. A panel of expert judges from our partner organizations will assess the final submissions.',
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
      {/* Subtle grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">QUESTIONS</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(24px, 3.5vw, 48px)',
            marginTop: 12,
            color: 'var(--text-white)',
            animation: visible ? 'fadeInUp 0.8s ease' : 'none',
          }}>
            Frequently{' '}
            <span style={{ color: 'var(--gold)' }}>Asked</span>
          </h2>
        </div>

        {/* Accordion */}
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
  const answerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isOpen
          ? 'rgba(16,26,46,0.95)'
          : hovered ? 'rgba(14,22,40,0.85)' : 'rgba(11,18,34,0.8)',
        border: `1px solid ${isOpen ? 'rgba(201,168,76,0.2)' : hovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)'}`,
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
        }}>
          {faq.q}
        </span>
        <span style={{
          flexShrink: 0,
          color: isOpen ? 'var(--gold)' : 'rgba(255,255,255,0.35)',
          transition: 'color 0.2s, transform 0.3s',
          display: 'flex',
          alignItems: 'center',
        }}>
          {isOpen
            ? <ChevronUp size={20} />
            : <ChevronDown size={20} />
          }
        </span>
      </button>

      <div
        ref={answerRef}
        style={{
          maxHeight: isOpen ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div style={{
          padding: '0 28px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 20,
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.8,
          }}>
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
