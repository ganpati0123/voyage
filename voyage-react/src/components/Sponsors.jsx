import { useEffect, useRef } from 'react'

const tiers = [
  {
    label: '⚓ Grand Admiral — Title Sponsors',
    sponsors: ['Algorand', 'OSEN', 'Mewayz Global Corporation'],
    large: true,
  },
  {
    label: '⚔ Fleet Commanders — Co-Sponsors',
    sponsors: ['GRID Community', 'Partner Guild I', 'Partner Guild II', 'Partner Guild III'],
    large: false,
  },
  {
    label: '🧭 Corsair Allies — Community Partners',
    sponsors: ['Tech Community I', 'Open Source Collective', 'Dev Guild', 'Innovators Circle', 'Hackerspace'],
    large: false,
  },
]

export default function Sponsors() {
  const headRef = useRef(null)
  useEffect(() => {
    const el = headRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = 1; el.style.transform = 'translateY(0)'; obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="sponsors">
      <div className="section-inner">
        <div
          className="sponsors-head"
          ref={headRef}
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <span className="s-label">🤝 The Allied Fleet</span>
          <h2 className="s-title">
            Our <span className="hl">Patrons</span> & Allies
          </h2>
          <p className="s-desc" style={{ margin: '0 auto', textAlign: 'center' }}>
            Powerful guilds and merchant empires who have pledged their resources
            to make this voyage possible. Together, we conquer the seas.
          </p>
        </div>

        {tiers.map((tier, i) => (
          <div className="sponsors-tier" key={i}>
            <div className="tier-label">{tier.label}</div>
            <div className="sponsors-row">
              {tier.sponsors.map((s, j) => (
                <div className={`sponsor-chip${tier.large ? ' large' : ''}`} key={j}>{s}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
