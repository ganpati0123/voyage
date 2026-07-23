import { useEffect, useRef } from 'react'

function TrackCard({ icon, name, desc, num }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <div className="track-card" ref={ref}>
      <div className="track-icon"><svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: icon }} /></div>
      <div className="track-name">{name}</div>
      <p className="track-desc">{desc}</p>
      <div className="track-num">{num}</div>
    </div>
  )
}

export default function Tracks() {
  return (
    <section id="tracks">
      <div className="section-inner">
        <div className="tracks-header">
          <span className="section-label">Innovation Domains</span>
          <h2 className="section-title">Choose Your <span className="accent">Track</span></h2>
          <p className="section-desc">Navigate the Voyage Arena and pick your domain. Every track is designed around real-world challenges and cutting-edge technology.</p>
        </div>
        <div className="tracks-grid">
          <TrackCard
            icon='<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'
            name="Devil's Triangle"
            desc="Harness the power of Artificial Intelligence and Machine Learning to conquer the unknown. Build cognitive systems, predictive analytics, and intelligent automation that redefine possibilities."
            num="Track 01 — AI & ML"
          />
          <TrackCard
            icon='<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'
            name="Fountain of Youth"
            desc="Leverage technology to build smarter, more accessible Healthcare solutions. Tackle challenges in digital health, diagnostics, patient experience, and medical data — making care more human."
            num="Track 02 — HealthTech"
          />
          <TrackCard
            icon='<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
            name="Open Seas"
            desc="Explore uncharted waters with unrestricted innovation — FinTech, Blockchain, Web3, and beyond. Build creative solutions using Algorand or tackle any challenge that drives real-world impact."
            num="Track 03 — Open Innovation"
          />
        </div>
      </div>
    </section>
  )
}
