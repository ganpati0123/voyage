import { useEffect, useRef } from 'react'

function TLCard({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return <div className="tl-card" ref={ref}>{children}</div>
}

export default function Timeline() {
  return (
    <section id="timeline" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-inner">
        <div className="timeline-header">
          <span className="section-label">Event Timeline</span>
          <h2 className="section-title">Hackathon <span className="accent">Roadmap</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Follow the journey from registration to the grand finale and valedictory.</p>
        </div>
        <div className="timeline-line">

          <div className="tl-item">
            <div className="tl-content">
              <TLCard>
                <div className="tl-card-date">Phase 1 — Opens: TBD</div>
                <div className="tl-card-title">Registration</div>
                <p className="tl-card-desc">Students register individually or as teams of 3–4 through the official Voyage portal to lock in their participation.</p>
              </TLCard>
            </div>
            <div className="tl-node">
              <div className="tl-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg></div>
              <div className="tl-phase-label">PHASE 1</div>
              <div className="tl-date-label">TBD</div>
            </div>
            <div className="tl-empty" />
          </div>

          <div className="tl-item">
            <div className="tl-empty" />
            <div className="tl-node">
              <div className="tl-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
              <div className="tl-phase-label">PHASE 2</div>
              <div className="tl-date-label">TBD</div>
            </div>
            <div className="tl-content">
              <TLCard>
                <div className="tl-card-date">Phase 2 — TBD</div>
                <div className="tl-card-title">Idea Submission & Evaluation</div>
                <p className="tl-card-desc">Teams submit a proposal covering their Problem Statement, Proposed Solution, Innovation Approach, and Technology Stack. Expert reviewers evaluate all submissions on innovation, feasibility, and impact.</p>
              </TLCard>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-content">
              <TLCard>
                <div className="tl-card-date">26 Sept – 27 Sept 2026</div>
                <div className="tl-card-title">Grand Prototype Challenge</div>
                <p className="tl-card-desc">Selected finalists participate in the high-intensity 36-hour hackathon. Teams build functional prototypes, receive mentorship, and tackle real-world problem statements in a collaborative environment.</p>
              </TLCard>
            </div>
            <div className="tl-node">
              <div className="tl-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
              <div className="tl-phase-label">PHASE 3</div>
              <div className="tl-date-label">26–27 SEPT</div>
            </div>
            <div className="tl-empty" />
          </div>

          <div className="tl-item">
            <div className="tl-empty" />
            <div className="tl-node">
              <div className="tl-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
              <div className="tl-phase-label">FINALE</div>
              <div className="tl-date-label">27 SEPT</div>
            </div>
            <div className="tl-content">
              <TLCard>
                <div className="tl-card-date">27 September 2026</div>
                <div className="tl-card-title">Jury Presentation & Showcase</div>
                <p className="tl-card-desc">Finalist teams present live prototype demonstrations and technical solutions before an eminent jury of Industry Leaders, Startup Founders, and domain experts.</p>
              </TLCard>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-content">
              <TLCard>
                <div className="tl-card-date">27 September 2026 | Closing</div>
                <div className="tl-card-title">Prize Distribution & Closing</div>
                <p className="tl-card-desc">Voyage concludes with winner announcements, cash prize distribution, certificates, jury remarks, mentorship network connections, and an exclusive closing ceremony.</p>
              </TLCard>
            </div>
            <div className="tl-node">
              <div className="tl-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
              <div className="tl-phase-label">VALEDICTORY</div>
              <div className="tl-date-label">27 SEPT</div>
            </div>
            <div className="tl-empty" />
          </div>

        </div>
      </div>
    </section>
  )
}
