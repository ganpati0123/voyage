import { useState } from 'react'

function MemberBlock({ num }) {
  return (
    <div className="member-block">
      <div className="member-title">MEMBER {num}</div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Full Name <span className="req">*</span></label>
          <input className="form-input" type="text" placeholder="Full Name" required />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address <span className="req">*</span></label>
          <input className="form-input" type="email" placeholder="email@example.com" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">College / University</label>
          <input className="form-input" type="text" placeholder="College name" />
        </div>
        <div className="form-group">
          <label className="form-label">Year of Study</label>
          <select className="form-select">
            <option value="">Select Year...</option>
            {['1st Year','2nd Year','3rd Year','4th Year','Postgraduate'].map(y => <option key={y}>{y}</option>)}
          </select>
        </div>
      </div>
    </div>
  )
}

export default function Register() {
  const [members, setMembers] = useState([1])
  const [submitted, setSubmitted] = useState(false)

  const addMember = () => {
    if (members.length >= 3) return
    setMembers(m => [...m, m.length + 1])
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="register" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-inner">
        <div className="register-header">
          <span className="section-label">Registration Portal</span>
          <h2 className="section-title" style={{ textTransform: 'uppercase' }}>Ready to Sail Beyond the Horizon?</h2>
        </div>
        <p className="register-sub">Secure your team's spot and compete against India's top innovation talent. Build with cutting-edge technology in an intensive 36-hour sprint.</p>

        <div className="reg-form-wrap">
          <form onSubmit={handleSubmit}>
            <div className="form-section-title">Team Information</div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Team Name <span className="req">*</span></label>
                <input className="form-input" type="text" placeholder="e.g. Stellar Crew" required />
              </div>
              <div className="form-group">
                <label className="form-label">Target Track <span className="req">*</span></label>
                <select className="form-select" required>
                  <option value="">Select a track...</option>
                  <option value="devil">Devil's Triangle — AI & ML</option>
                  <option value="fountain">Fountain of Youth — HealthTech</option>
                  <option value="open">Open Seas — Open Innovation</option>
                </select>
              </div>
            </div>

            <div className="form-section-title">Team Leader Information</div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name <span className="req">*</span></label>
                <input className="form-input" type="text" placeholder="Leader Name" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address <span className="req">*</span></label>
                <input className="form-input" type="email" placeholder="leader@example.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Mobile Number <span className="req">*</span></label>
                <input className="form-input" type="tel" placeholder="10-digit number" required />
              </div>
              <div className="form-group">
                <label className="form-label">College / University <span className="req">*</span></label>
                <input className="form-input" type="text" placeholder="e.g. NIT Patna" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Year of Study <span className="req">*</span></label>
                <select className="form-select" required>
                  <option value="">Select Year...</option>
                  {['1st Year','2nd Year','3rd Year','4th Year','Postgraduate'].map(y => <option key={y}>{y}</option>)}
                </select>
              </div>
            </div>

            <div className="form-section-title">Team Members (2–3 Additional)</div>
            {members.map(n => <MemberBlock key={n} num={n} />)}

            {members.length < 3 && (
              <button type="button" className="add-member-btn" onClick={addMember}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                <span>+ ADD MEMBER ({members.length}/3 ADDITIONAL)</span>
              </button>
            )}

            <button type="submit" className={`submit-btn${submitted ? ' success' : ''}`}>
              {submitted ? '✓ REGISTRATION SUBMITTED!' : 'SUBMIT REGISTRATION →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
