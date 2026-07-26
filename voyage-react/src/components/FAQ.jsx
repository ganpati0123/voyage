import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    q: "Who may board the Voyage 2026 expedition?",
    a: "The voyage is open to all undergraduate and postgraduate students (1st Year – Final Year) from any college across India. No prior hackathon experience required — only the courage to set sail.",
  },
  {
    q: "How large must a crew be?",
    a: "Crews of 2 to 4 corsairs are welcomed. Solo voyagers may seek alliance through our Community Docks during the registration period. Every corsair is stronger with a crew.",
  },
  {
    q: "Is there a toll to board?",
    a: "The expedition is entirely free of charge. No doubloons required to register. We believe great innovation should be accessible to every worthy corsair.",
  },
  {
    q: "What provisions are offered during the voyage?",
    a: "The Admiralty provides meals, refreshments, and essential provisions throughout the 36-hour journey. Crew members are also offered workspace, power stations, and high-speed winds (internet).",
  },
  {
    q: "May we chart our course before the storm begins?",
    a: "Yes — problem statements are revealed at the Opening Ceremony. However, general research, skill preparation, and strategy discussions beforehand are fully permitted and encouraged.",
  },
  {
    q: "What manner of treasure may be claimed?",
    a: "Beyond the gold (cash prizes), top crews receive internship opportunities with our partner empires, certification scrolls, mentorship from industry captains, and exclusive corsair swag.",
  },
  {
    q: "How is the Grand Council judging our work?",
    a: "The Council evaluates on innovation and originality, technical mastery, real-world impact potential, quality of the presentation, and whether the solution truly addresses the problem charter.",
  },
  {
    q: "Where does the expedition take place?",
    a: "Voyage 2026 is conducted in-person. The precise location and coordinates will be dispatched via the official communication channels once registration is confirmed.",
  },
]

function FaqItem({ faq, delay }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current; if (!el) return
    el.style.setProperty('--delay', delay || '0s')
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div className={`faq-item${open ? ' open' : ''}`} ref={ref}>
      <button className="faq-q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className="faq-chevron">
          <svg viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className="faq-a">
        <div className="faq-a-inner">{faq.a}</div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq">
      <div className="section-inner">
        <div className="faq-head">
          <span className="s-label">📜 The Captain's Scrolls</span>
          <h2 className="s-title">
            Frequently <span className="hl">Asked</span> of the Oracle
          </h2>
          <p className="s-desc">
            All that a corsair must know before they set sail. If your question
            remains unanswered, hail the Quartermaster directly.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <FaqItem key={i} faq={f} delay={`${i * 0.06}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
