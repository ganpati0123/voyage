import { useEffect, useRef } from 'react'

function StatCard({ icon, val, label, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    el.style.setProperty('--delay', delay || '0s')
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-icon">
        <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div>
        <div className="stat-val">{val}</div>
        <div className="stat-lbl">{label}</div>
      </div>
    </div>
  )
}

export default function About() {
  const quoteRef = useRef(null)
  useEffect(() => {
    const el = quoteRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = 1; el.style.transform = 'translateY(0)'; obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about">
      <div className="about-inner">
        <span className="s-label">⚓ The Quest</span>
        <h2 className="s-title">
          Uncharted <span className="hl">Horizons</span> Await
        </h2>

        <div className="about-grid">
          {/* Left — text */}
          <div className="about-text">
            <p>
              Voyage 2026 is GRID Community's flagship <strong style={{color:'var(--gold)'}}>36-hour national hackathon</strong>,
              launched upon the high seas of innovation in alliance with Algorand, OSEN,
              and Mewayz Global Corporation. A fleet of the finest minds sets sail together.
            </p>
            <div className="about-divider" />
            <p>
              Over 36 hours, corsairs of code <strong style={{color:'var(--gold)'}}>design, build, and deploy</strong> production-ready
              galleons of technology — solving real enterprise and social challenges
              using modern cloud infrastructure, AI models, and collaborative arsenals.
            </p>
            <div className="about-divider" />
            <p>
              Whether your compass points toward AI, Blockchain, FinTech, Healthcare,
              or Open Innovation — Voyage provides the wind in your sails to learn,
              experiment, and conquer the unknown.
            </p>
          </div>

          {/* Right — stat cards */}
          <div className="stat-cards">
            <StatCard
              icon='<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'
              val="36 Hrs"
              label="Upon the High Seas"
              delay="0s"
            />
            <StatCard
              icon='<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
              val="160+"
              label="Corsairs of Code"
              delay="0.1s"
            />
            <StatCard
              icon='<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>'
              val="₹50K+"
              label="Treasure Awaits"
              delay="0.2s"
            />
            <StatCard
              icon='<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
              val="3"
              label="Trade Routes"
              delay="0.3s"
            />
          </div>
        </div>

        <blockquote
          className="about-quote"
          ref={quoteRef}
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          Forging <span className="hl">enterprise-grade galleons of technology</span> that
          create measurable real-world impact — from the depths of innovation to the shores of the future.
        </blockquote>
      </div>
    </section>
  )
}
