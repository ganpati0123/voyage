export default function Glimpses() {
  const placeholders = [
    { label: 'Corsairs at Work', sub: 'Building in the dark hours' },
    { label: 'The Armada Assembles', sub: 'Teams forging alliances' },
    { label: 'The Prize Ceremony', sub: 'Claiming the treasure' },
    { label: 'Mentors & Captains', sub: 'Guiding the fleet' },
    { label: 'The Code Forge', sub: 'Where ideas become reality' },
    { label: 'Victory at Dawn', sub: 'After 36 hours on the seas' },
  ]

  return (
    <section id="glimpses">
      <div className="glimpses-head">
        <span className="s-label">⚔ From Past Voyages</span>
        <h2 className="s-title">
          Glimpses of <span className="hl">The Fleet</span>
        </h2>
        <p className="s-desc">
          Chronicles from previous expeditions — moments captured as corsairs of code
          charted new waters and claimed their spoils.
        </p>
      </div>
      <div className="gallery-wrap">
        <div className="gallery-track">
          {placeholders.map((p, i) => (
            <div className="gallery-item" key={i}>
              <div className="gallery-placeholder">
                <div style={{ fontSize: '28px', marginBottom: '12px', opacity: 0.4 }}>⚓</div>
                <div style={{ fontFamily: 'var(--cinzel)', fontSize: '11px', letterSpacing: '1.5px', color: 'var(--text2)', marginBottom: '6px' }}>{p.label}</div>
                <div style={{ fontSize: '11px', color: 'var(--text3)', letterSpacing: '1px' }}>{p.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
