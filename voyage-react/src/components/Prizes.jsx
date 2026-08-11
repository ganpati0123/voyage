import { useEffect, useRef } from 'react'

const podium = [
  {
    rank: 'Second Prize',
    medal: '🥈',
    amount: '₹15,000',
    title: 'The Silver Doubloon',
    cls: 'second',
    delay: '0.1s',
  },
  {
    rank: 'Grand Prize',
    medal: '👑',
    amount: '₹25,000',
    title: 'The Golden Chalice',
    cls: 'first',
    delay: '0s',
  },
  {
    rank: 'Third Prize',
    medal: '🥉',
    amount: '₹10,000',
    title: 'The Bronze Anchor',
    cls: 'third',
    delay: '0.2s',
  },
]

const perks = [
  { icon: '🧭', title: 'Internship Opportunities', val: 'Industry Partners' },
  { icon: '📜', title: 'Certifications', val: 'All Participants' },
  { icon: '⚙️', title: 'Goodies & Swag', val: 'Top Crews' },
  { icon: '🌐', title: 'Networking', val: 'Global Mentors' },
  { icon: '🚀', title: 'Startup Support', val: 'Top Innovators' },
  { icon: '🏆', title: 'Special Track Awards', val: 'Each Route' },
]

function PrizeCard({ p }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    el.style.setProperty('--delay', p.delay)
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [p.delay])

  return (
    <div className={`prize-card ${p.cls}`} ref={ref}>
      <div className="prize-rank">{p.rank}</div>
      <span className="prize-medal">{p.medal}</span>
      <div className="prize-amount">{p.amount}</div>
      <div className="prize-title">{p.title}</div>
    </div>
  )
}

export default function Prizes() {
  return (
    <section id="prizes" className="scene forest-diorama">
      <div className="section-inner">
        <div className="prizes-head">
          <span className="s-label">🌲 Bounty &amp; Beauty</span>
          <h2 className="s-title">
            Claim Your <span className="hl">Bounty</span>
          </h2>
          <p className="s-desc">
            The greatest corsairs sail not merely for glory — but for the riches
            that await the bold at the end of the voyage.
          </p>
        </div>

        <div className="prizes-podium">
          {podium.map((p, i) => <PrizeCard key={i} p={p} />)}
        </div>

        <div className="prize-breakdown">
          {perks.map((p, i) => (
            <div className="perk-card" key={i}>
              <div className="perk-icon">{p.icon}</div>
              <div className="perk-title">{p.title}</div>
              <div className="perk-val">{p.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
