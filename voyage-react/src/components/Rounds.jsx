import { useEffect, useRef } from 'react'

const rounds = [
  {
    num: '01',
    title: 'The Preliminary Skirmish',
    desc: 'Submit your vessel\'s blueprint — a detailed plan of attack. The Admiralty reviews all scrolls and selects crews worthy of the main expedition.',
    perks: ['Idea Submission Form', 'Problem Statement Alignment', 'Team Verification', 'Mentor Q&A Session'],
  },
  {
    num: '02',
    title: 'The 36-Hour Siege',
    desc: 'The grand battle commences. Corsairs forge their solutions in real time — coding, designing, testing under the relentless tide of the 36-hour countdown.',
    perks: ['Live Mentorship Rounds', 'Midnight Checkpoints', 'Resource Provisions', 'Progress Evaluations'],
  },
  {
    num: '03',
    title: 'Before the Grand Council',
    desc: "The finest crews present their galleons before the Grand Council of judges. Five minutes to prove your worth — then the council deliberates and the treasure is awarded.",
    perks: ['5-Min Demo Presentation', 'Technical Deep-Dive', 'Impact Assessment', 'Council Deliberation'],
  },
]

function RoundCard({ round, delay }) {
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
    <div className="round-card" ref={ref}>
      <div className="round-num">{round.num}</div>
      <div className="round-title">{round.title}</div>
      <p className="round-desc">{round.desc}</p>
      <ul className="round-perks">
        {round.perks.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  )
}

export default function Rounds() {
  return (
    <section id="rounds">
      <div className="section-inner">
        <div className="rounds-head">
          <span className="s-label">⚔ Battle Rounds</span>
          <h2 className="s-title">
            The <span className="hl">Armada's</span> Gauntlet
          </h2>
          <p className="s-desc">
            Three trials of fire and sea stand between a corsair and glory.
            Only the boldest crews survive all three.
          </p>
        </div>
        <div className="rounds-grid">
          {rounds.map((r, i) => (
            <RoundCard key={i} round={r} delay={`${i * 0.12}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
