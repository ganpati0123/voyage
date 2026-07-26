import { useEffect, useRef } from 'react'

function TrackCard({ icon, name, desc, num, delay }) {
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
    <div className="track-card" ref={ref}>
      <div className="track-num">{num}</div>
      <div className="track-icon">
        <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className="track-name">{name}</div>
      <p className="track-desc">{desc}</p>
    </div>
  )
}

export default function Tracks() {
  return (
    <section id="tracks">
      <div className="section-inner">
        <div className="tracks-head">
          <span className="s-label">⚔ Trade Routes</span>
          <h2 className="s-title">
            Chart Your <span className="px">Course</span>
          </h2>
          <p className="s-desc">
            Three ancient trade routes sail the digital seas. Each demands mastery,
            courage, and the spirit of a true corsair. Choose your waters wisely.
          </p>
        </div>
        <div className="tracks-grid">
          <TrackCard
            icon='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'
            name="AI for the Merchant Empire"
            desc="Integrate cognitive systems, intelligent predictive analytics, and automated decision engines to redefine corporate strategy, operations, and commercial dominion across the digital realm."
            num="⚓ Route I"
            delay="0s"
          />
          <TrackCard
            icon='<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'
            name="AI for Realm & People"
            desc="Build accessible, ethical, and impact-driven AI — targeting climate guardianship, environmental sovereignty, healthcare of the masses, and digital empowerment across uncharted territories."
            num="⚓ Route II"
            delay="0.12s"
          />
          <TrackCard
            icon='<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
            name="Open Seas of Innovation"
            desc="Sail into the unknown. Unleash raw ingenuity with unrestricted development — multi-agent frameworks, frontier AI concepts, and audacious creations that defy the boundaries of the possible."
            num="⚓ Route III"
            delay="0.24s"
          />
        </div>
      </div>
    </section>
  )
}
