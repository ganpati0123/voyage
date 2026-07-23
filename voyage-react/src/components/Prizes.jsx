export default function Prizes() {
  return (
    <section id="prizes">
      <div className="section-inner">
        <div className="prizes-header">
          <span className="section-label">Rewards</span>
          <h2 className="section-title">Prizes & <span className="accent">Recognition</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Win cash prizes, exclusive merchandise, mentorship sessions, and opportunities to showcase your innovation.</p>
        </div>
        <div className="prize-main">
          <div className="prize-amount">₹25,000</div>
          <p className="prize-label">Grand cash prize pool awarded to the top-performing teams demonstrating exceptional innovation and technical execution.</p>
        </div>
        <div className="prize-breakdown">
          <div className="prize-place first">
            <div className="prize-place-rank">🥇 1st Prize</div>
            <div className="prize-place-amt">₹10,000</div>
          </div>
          <div className="prize-place second">
            <div className="prize-place-rank">🥈 2nd Prize</div>
            <div className="prize-place-amt">₹7,000</div>
          </div>
          <div className="prize-place third">
            <div className="prize-place-rank">🥉 3rd Prize</div>
            <div className="prize-place-amt">₹5,000</div>
          </div>
        </div>
        <div className="perks-grid">
          {['Branded T-Shirts','Participation Certificates','Exclusive Sticker Collection','Mentorship Sessions','Participation Gifts','Expert Network Access'].map(p => (
            <div key={p} className="perk-item"><div className="perk-dot" />{p}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
