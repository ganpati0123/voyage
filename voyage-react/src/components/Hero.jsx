import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, stars = [], orbs = [], raf

    function resize() {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    function init() {
      stars = Array.from({ length: 280 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        o: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.008 + 0.002,
        gold: Math.random() > 0.82,
      }))
      orbs = Array.from({ length: 14 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 60 + 30,
        o: Math.random() * 0.12 + 0.04,
        dx: (Math.random() - 0.5) * 0.25,
        dy: (Math.random() - 0.5) * 0.25,
        gold: Math.random() > 0.5,
      }))
    }
    function draw() {
      ctx.clearRect(0, 0, W, H)
      // Orb glows
      orbs.forEach(d => {
        d.x += d.dx; d.y += d.dy
        if (d.x < -d.r) d.x = W + d.r
        if (d.x > W + d.r) d.x = -d.r
        if (d.y < -d.r) d.y = H + d.r
        if (d.y > H + d.r) d.y = -d.r
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r)
        if (d.gold) {
          g.addColorStop(0, `rgba(212,168,67,${d.o})`)
          g.addColorStop(1, 'rgba(212,168,67,0)')
        } else {
          g.addColorStop(0, `rgba(0,196,164,${d.o * 0.7})`)
          g.addColorStop(1, 'rgba(0,196,164,0)')
        }
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = g; ctx.fill()
      })
      // Stars
      stars.forEach(s => {
        s.o += s.speed * (Math.random() > 0.5 ? 1 : -1)
        s.o = Math.max(0.05, Math.min(0.85, s.o))
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.gold
          ? `rgba(212,168,67,${s.o})`
          : `rgba(200,220,255,${s.o})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    const onResize = () => { resize(); init() }
    window.addEventListener('resize', onResize)
    resize(); init(); draw()
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(raf) }
  }, [])

  return (
    <section id="hero">
      <canvas ref={canvasRef} id="starfield" />

      <div className="hero-body">
        <div className="hero-text">
          <div className="hero-eyebrow">⚔ 36-Hour National Hackathon &mdash; GRID Community</div>

          <h1 className="hero-title">
            VOYAGE
            <span>2026</span>
          </h1>

          <p className="hero-tagline">⚓ Sail Beyond the Horizon ⚓</p>

          <p className="hero-sub">
            The high seas of innovation await. Navigate uncharted digital waters,
            forge alliances with fellow corsairs, and build enterprise-grade
            solutions that conquer real-world challenges.
          </p>

          <div className="hero-btns">
            <a href="#register" className="btn-gold">
              ⚓ Set Sail Now
            </a>
            <a href="#tracks" className="btn-outline">
              Explore Routes →
            </a>
          </div>
        </div>

        {/* Decorative compass + rings */}
        <div className="hero-3d">
          {/* Outer rotating ring */}
          <div className="float-obj obj-ring1">
            <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
              <circle cx="140" cy="140" r="136" fill="none" stroke="rgba(212,168,67,0.15)" strokeWidth="1" strokeDasharray="8 6"/>
              <circle cx="140" cy="14" r="4" fill="rgba(212,168,67,0.6)"/>
              <circle cx="140" cy="266" r="4" fill="rgba(212,168,67,0.6)"/>
              <circle cx="14" cy="140" r="4" fill="rgba(212,168,67,0.4)"/>
              <circle cx="266" cy="140" r="4" fill="rgba(212,168,67,0.4)"/>
              {[0,30,60,90,120,150,180,210,240,270,300,330].map(deg => {
                const rad = deg * Math.PI / 180
                const x1 = 140 + 125 * Math.cos(rad)
                const y1 = 140 + 125 * Math.sin(rad)
                const x2 = 140 + 136 * Math.cos(rad)
                const y2 = 140 + 136 * Math.sin(rad)
                return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(212,168,67,0.3)" strokeWidth="1"/>
              })}
            </svg>
          </div>

          {/* Inner counter-rotating ring */}
          <div className="float-obj obj-ring2">
            <svg viewBox="0 0 230 230" xmlns="http://www.w3.org/2000/svg">
              <circle cx="115" cy="115" r="110" fill="none" stroke="rgba(0,196,164,0.12)" strokeWidth="1" strokeDasharray="4 8"/>
              <circle cx="115" cy="115" r="90" fill="none" stroke="rgba(212,168,67,0.08)" strokeWidth="1"/>
            </svg>
          </div>

          {/* Central compass */}
          <div className="float-obj obj-compass">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="cg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0d1830"/>
                  <stop offset="100%" stopColor="#060d1a"/>
                </radialGradient>
                <linearGradient id="ng" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#d4a843"/>
                  <stop offset="100%" stopColor="#8a6520"/>
                </linearGradient>
                <linearGradient id="sg" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00c4a4"/>
                  <stop offset="100%" stopColor="#006655"/>
                </linearGradient>
              </defs>
              {/* Outer bezel */}
              <circle cx="100" cy="100" r="98" fill="url(#cg)" stroke="rgba(212,168,67,0.5)" strokeWidth="1.5"/>
              <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(212,168,67,0.15)" strokeWidth="1"/>
              {/* Cardinal ticks */}
              {[0,45,90,135,180,225,270,315].map(deg => {
                const rad = deg * Math.PI / 180
                const r1 = deg % 90 === 0 ? 76 : 82
                const r2 = 88
                const x1 = 100 + r1 * Math.sin(rad), y1 = 100 - r1 * Math.cos(rad)
                const x2 = 100 + r2 * Math.sin(rad), y2 = 100 - r2 * Math.cos(rad)
                return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={deg % 90 === 0 ? 'rgba(212,168,67,0.7)' : 'rgba(212,168,67,0.3)'} strokeWidth={deg % 90 === 0 ? 1.5 : 0.8}/>
              })}
              {/* N label */}
              <text x="100" y="22" textAnchor="middle" fontSize="10" fontFamily="'Cinzel',serif" fill="rgba(212,168,67,0.9)" fontWeight="700">N</text>
              <text x="100" y="186" textAnchor="middle" fontSize="10" fontFamily="'Cinzel',serif" fill="rgba(212,168,67,0.5)">S</text>
              <text x="183" y="104" textAnchor="middle" fontSize="10" fontFamily="'Cinzel',serif" fill="rgba(212,168,67,0.5)">E</text>
              <text x="17" y="104" textAnchor="middle" fontSize="10" fontFamily="'Cinzel',serif" fill="rgba(212,168,67,0.5)">W</text>
              {/* Inner circle */}
              <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(212,168,67,0.1)" strokeWidth="0.8"/>
              {/* North needle */}
              <polygon points="100,34 106,100 100,90 94,100" fill="url(#ng)"/>
              {/* South needle */}
              <polygon points="100,166 106,100 100,110 94,100" fill="url(#sg)" opacity="0.8"/>
              {/* Center */}
              <circle cx="100" cy="100" r="7" fill="#0d1830" stroke="rgba(212,168,67,0.7)" strokeWidth="1.5"/>
              <circle cx="100" cy="100" r="3" fill="var(--gold, #d4a843)"/>
            </svg>
          </div>

          {/* Anchor accent */}
          <div className="float-obj obj-anchor">
            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="18" r="7" fill="none" stroke="rgba(0,196,164,0.6)" strokeWidth="2"/>
              <line x1="40" y1="25" x2="40" y2="62" stroke="rgba(0,196,164,0.6)" strokeWidth="2"/>
              <line x1="20" y1="38" x2="60" y2="38" stroke="rgba(0,196,164,0.6)" strokeWidth="2"/>
              <path d="M28,62 Q20,58 22,52" fill="none" stroke="rgba(0,196,164,0.6)" strokeWidth="2"/>
              <path d="M52,62 Q60,58 58,52" fill="none" stroke="rgba(0,196,164,0.6)" strokeWidth="2"/>
              <path d="M22,62 Q32,68 40,62 Q48,68 58,62" fill="none" stroke="rgba(0,196,164,0.5)" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Chart the Course</span>
      </div>

      {/* Partner strip */}
      <div className="hero-partners">
        <div className="partner-group">
          <div className="partner-label">Organised By</div>
          <div className="partner-logos">
            <span className="partner-logo-tag">GRID Community</span>
          </div>
        </div>
        <div className="partner-group">
          <div className="partner-label">Title Sponsor</div>
          <div className="partner-logos">
            <span className="partner-logo-tag">Algorand</span>
            <span className="partner-logo-tag">OSEN</span>
          </div>
        </div>
        <div className="partner-group">
          <div className="partner-label">In Partnership With</div>
          <div className="partner-logos">
            <span className="partner-logo-tag">Mewayz Global</span>
          </div>
        </div>
      </div>
    </section>
  )
}
