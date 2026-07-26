import { useEffect, useRef } from 'react'

const events = [
  {
    date: 'JUL 2026',
    tag: '⚓ Embarkation',
    title: 'Registrations Open',
    desc: "The harbourmaster opens the ledger. Corsairs from across the realm may inscribe their names and declare their crew's allegiance.",
    active: true,
  },
  {
    date: 'AUG 2026',
    tag: '⚔ The Muster',
    title: 'Team Formation Deadline',
    desc: 'All crews must be assembled and accounted for. Solo voyagers may seek alliance at the Community Docks.',
    active: true,
  },
  {
    date: 'SEP 2026',
    tag: '🗺 The Briefing',
    title: 'Problem Statements Released',
    desc: "The Admiralty reveals the mission scrolls. Study the challenges, chart your strategy, and sharpen your crew's edge.",
    active: false,
  },
  {
    date: 'SEP 2026',
    tag: '⚡ The Storm Begins',
    title: 'Hackathon Kick-Off',
    desc: 'Cannons fire, sails unfurl. 36 hours on the high seas of innovation commence. May fortune favour the bold.',
    active: false,
  },
  {
    date: 'SEP 2026',
    tag: '🏆 The Reckoning',
    title: 'Final Presentations & Judging',
    desc: 'Crews present their galleons of technology before the Grand Council. The mightiest vessel claims the treasure.',
    active: false,
  },
]

function TlItem({ event, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    el.style.setProperty('--delay', delay || '0s')
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div className="tl-item" ref={ref}>
      <div className="tl-date">{event.date}</div>
      <div className="tl-spine">
        <div className={`tl-dot${event.active ? '' : ' dim'}`} />
        <div className="tl-connector" />
      </div>
      <div className="tl-content">
        <div className="tl-tag">{event.tag}</div>
        <div className="tl-title">{event.title}</div>
        <p className="tl-desc">{event.desc}</p>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="section-inner">
        <div className="timeline-head">
          <span className="s-label">🗺 Navigation Charts</span>
          <h2 className="s-title">
            The <span className="hl">Expedition Log</span>
          </h2>
          <p className="s-desc">
            Every great voyage follows a chart. Mark these waypoints — miss one and
            your ship sails without a crew.
          </p>
        </div>
        <div className="tl-container">
          {events.map((e, i) => (
            <TlItem key={i} event={e} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
