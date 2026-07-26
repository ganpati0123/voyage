import { useState } from 'react'

export default function Register() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="register">
      <div className="section-inner">
        <div className="reg-card">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '56px', marginBottom: '20px' }}>⚓</div>
              <h3 className="reg-title" style={{ marginBottom: '14px' }}>Your Ship Has Departed!</h3>
              <p className="reg-sub">
                Your registration scroll has been received. The Admiralty will send
                your confirmation to the provided coordinates. Prepare your crew —
                the storm approaches.
              </p>
            </div>
          ) : (
            <>
              <span className="s-label" style={{ marginBottom: '20px' }}>⚓ Man the Deck</span>
              <h2 className="reg-title">Set Sail for <span style={{ color: 'var(--gold)' }}>Voyage 2026</span></h2>
              <p className="reg-sub">
                Inscribe your name in the Fleet Ledger. Secure your berth aboard the
                greatest digital expedition of the year.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Captain's Name *</label>
                    <input className="form-input" type="text" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Fleet Signal (Email) *</label>
                    <input className="form-input" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Communication Crystal (Phone)</label>
                    <input className="form-input" type="tel" placeholder="+91 00000 00000" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Academy / College *</label>
                    <input className="form-input" type="text" placeholder="College / University name" required />
                  </div>
                </div>

                <div className="form-row triple">
                  <div className="form-group">
                    <label className="form-label">Crew Name (Team) *</label>
                    <input className="form-input" type="text" placeholder="Your team's name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Crew Size</label>
                    <select className="form-select">
                      <option value="">Select size</option>
                      <option>Solo Corsair (1)</option>
                      <option>First Mate Pair (2)</option>
                      <option>Crew of Three (3)</option>
                      <option>Full Crew (4)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Chosen Trade Route *</label>
                    <select className="form-select" required>
                      <option value="">Select your route</option>
                      <option>Route I — AI for the Merchant Empire</option>
                      <option>Route II — AI for Realm & People</option>
                      <option>Route III — Open Seas of Innovation</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="form-submit">
                  ⚓ &nbsp; Register for Voyage 2026
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
