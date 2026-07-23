export default function Glimpses() {
  const items = [
    { bg: 'linear-gradient(135deg,#0d2e28,#091a30)', emoji: '⛵', label: 'VOYAGE 2026', sub: 'First Edition' },
    { bg: 'linear-gradient(135deg,#1a2e0d,#091a30)', emoji: '🏆', label: 'GRID HACKATHON', sub: 'Workshop Series' },
    { bg: 'linear-gradient(135deg,#1a1a0d,#091a30)', emoji: '💡', label: 'BOOTCAMPS', sub: 'AI/ML & Blockchain' },
    { bg: 'linear-gradient(135deg,#2e0d1a,#091a30)', emoji: '🌐', label: 'WEBINARS', sub: 'Expert-Led Sessions' },
    { bg: 'linear-gradient(135deg,#0d1a2e,#1a0d2e)', emoji: '🤝', label: 'NETWORKING', sub: 'Industry Connect' },
  ]
  return (
    <section id="glimpses">
      <div className="section-inner glimpses-heading">
        <span className="section-label">Past Events</span>
        <h2 className="section-title">Glimpses From <span className="accent">GRID Events</span></h2>
      </div>
      <div className="gallery-track">
        {items.map((item, i) => (
          <div key={i} className="gallery-item" style={{ background: item.bg }}>
            <div style={{ textAlign: 'center', padding: 20 }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{item.emoji}</div>
              <div style={{ fontFamily: 'var(--mono-font)', fontSize: 10, color: 'var(--teal-light)', letterSpacing: 2 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
