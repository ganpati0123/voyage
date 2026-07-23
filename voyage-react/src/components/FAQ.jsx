import { useState, useEffect, useRef } from 'react'

const faqs = [
  { q: 'Who can participate in Voyage 2026?', a: "Voyage is open to all undergraduate and postgraduate students from any college across India (1st Year – Final Year). You don't need prior hackathon experience — just a willingness to build and innovate!" },
  { q: 'Do I need a team, and how big should it be?', a: 'Teams must have 3–4 members. Individual or 2-member registrations are not accepted. Each team must nominate one Team Leader who will be the primary point of contact.' },
  { q: 'Is there a registration fee?', a: 'Registration details including any fee information will be announced soon. Stay tuned to our official channels for updates. Check the website or contact the organizing team for the latest information.' },
  { q: 'Is the hackathon online or in-person?', a: 'Voyage 2026 is an in-person hackathon. The venue will be announced soon. Participants must attend physically for the 36-hour sprint happening on 26–27 September 2026. Participants are required to bring their own laptop, charger, and power backup.' },
  { q: 'What should I bring to the Hackathon?', a: 'Each participant must bring their own laptop, charger, and power backup. Wear your participant ID at all times inside the hackathon arena. Use only permitted resources and APIs in accordance with hackathon rules.' },
  { q: 'Will there be mentors available?', a: 'Yes! Multiple mentorship sessions are scheduled throughout the hackathon. Industry experts and domain specialists will be available to guide your team, review your approach, and help you build better solutions.' },
  { q: 'How will projects be judged?', a: 'Projects will be evaluated on Innovation & Creativity, Technical Complexity, Problem-Solution Fit, Scalability, and Presentation Quality. An eminent jury of Industry Leaders, Startup Founders, and domain experts will judge all finalists.' },
]

function FAQItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <div className={`faq-item${open ? ' open' : ''}`} ref={ref}>
      <button className="faq-q" onClick={() => setOpen(o => !o)}>
        {q}
        <svg className="chevron" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div className="faq-a">{a}</div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq">
      <div className="section-inner">
        <div className="faq-header">
          <span className="section-label">Questions</span>
          <h2 className="section-title">Frequently <span className="accent">Asked</span></h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />)}
        </div>
      </div>
    </section>
  )
}
