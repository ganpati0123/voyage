import { useEffect, useRef } from 'react'

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() }
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
}

function StatCard({ icon, val, label }) {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-icon"><svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: icon }} /></div>
      <div><div className="stat-val">{val}</div><div className="stat-key">{label}</div></div>
    </div>
  )
}

export default function About() {
  return (
    <>
      <section id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-left">
              <span className="section-label">About Voyage 2026</span>
              <h2 className="about-title">Sail Beyond Limits.<br />Build Beyond <span className="accent">Horizons.</span></h2>
              <div className="about-body">
                <p>Voyage – Beyond the Horizon is a premier 36-hour innovation challenge that brings together students, developers, designers, and innovators to solve real-world problems through technology.</p>
                <p>Over 36 hours of continuous brainstorming, collaboration, and technical creativity, participants will transform ideas into impactful solutions while pushing the boundaries of innovation.</p>
                <p>Whether you're passionate about AI, Blockchain, FinTech, Healthcare, or Open Innovation, Voyage provides the perfect environment to learn, experiment, and grow.</p>
              </div>
              <div className="about-divider" />
            </div>
            <div className="about-right">
              <StatCard icon='<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' val="36 Hrs" label="Hackathon Duration" />
              <StatCard icon='<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' val="40 Teams" label="3–4 Members Each" />
              <StatCard icon='<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>' val="₹25,000" label="Total Prize Pool" />
              <StatCard icon='<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>' val="26–27 Sept" label="September 2026" />
            </div>
          </div>
          <p className="about-quote">
            Building <span className="hl">real-world solutions</span> that create measurable impact across AI, Blockchain, and Healthcare.
          </p>
        </div>
      </section>

      <section id="grid-about" style={{ padding: '60px 0', background: '#020b18' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">About <span className="accent">GRID Community</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: 14, padding: 36 }}>
              <div style={{ fontFamily: 'var(--pixel-font)', fontSize: 28, color: 'var(--gold)', marginBottom: 8 }}>2000+</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16, fontFamily: 'var(--mono-font)', letterSpacing: 2, textTransform: 'uppercase' }}>Community Members</div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.8 }}>GRID Community is a student-led community of more than 2000 members dedicated to empowering students through collaboration, hands-on learning, and real-world opportunities.</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: 14, padding: 36 }}>
              <div style={{ fontFamily: 'var(--pixel-font)', fontSize: 28, color: 'var(--gold)', marginBottom: 8 }}>800+</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16, fontFamily: 'var(--mono-font)', letterSpacing: 2, textTransform: 'uppercase' }}>Event Registrations</div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.8 }}>Our mission is to bridge the gap between academia and industry by organizing hackathons, workshops, bootcamps, webinars, networking events, and technical initiatives.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
