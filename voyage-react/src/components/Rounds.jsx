import { useEffect, useRef } from 'react'

function RoundCard({ children, active }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return <div className={`round-card${active ? ' active' : ''}`} ref={ref}>{children}</div>
}

export default function Rounds() {
  return (
    <section id="rounds">
      <div className="section-inner">
        <div className="rounds-header">
          <span className="section-label">Structure</span>
          <h2 className="section-title">Round <span className="accent">Details</span></h2>
          <p className="section-desc">Understand the phase requirements, eligibility criteria, and progression steps for Voyage.</p>
        </div>
        <div className="rounds-grid">
          <RoundCard active>
            <div className="round-tag">PHASE 01</div>
            <div className="round-lock">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <div className="round-title">Round 1: Registration & Idea Submission</div>
            <p className="round-desc">Register your team and submit your idea proposal covering the problem statement, solution approach, and technology stack. Shortlisted teams will be notified via email.</p>
            <a href="#register" className="btn-primary" style={{ display: 'inline-flex', marginTop: 8 }}>Register Now →</a>
          </RoundCard>
          <RoundCard>
            <div className="round-tag">PHASE 02</div>
            <div className="round-lock">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <div className="round-title">Round 2: Hackathon Finale</div>
            <div className="round-reveal">
              <svg viewBox="0 0 24 24" width="20" height="20" style={{ display: 'inline', verticalAlign: 'middle', stroke: 'var(--text-muted)', fill: 'none', strokeWidth: 1.5 }}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              {' '}Details will be revealed soon.<br />
              <span style={{ fontSize: 11 }}>Stay tuned as challenge timelines and tasks are unlocked.</span>
            </div>
          </RoundCard>
        </div>
      </div>
    </section>
  )
}
