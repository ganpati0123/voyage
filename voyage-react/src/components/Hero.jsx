import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, stars = [], dots = [], raf

    function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight }
    function init() {
      stars = Array.from({ length: 220 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.2 + 0.2, o: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.12 + 0.02
      }))
      dots = Array.from({ length: 20 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 2.5 + 1, o: Math.random() * 0.35 + 0.15,
        dx: (Math.random() - 0.5) * 0.35, dy: (Math.random() - 0.5) * 0.35
      }))
    }
    function draw() {
      ctx.clearRect(0, 0, W, H)
      stars.forEach(s => {
        s.o += s.speed * 0.01 * (Math.random() > 0.5 ? 1 : -1)
        s.o = Math.max(0.05, Math.min(0.75, s.o))
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,220,255,${s.o})`; ctx.fill()
      })
      dots.forEach(d => {
        d.x += d.dx; d.y += d.dy
        if (d.x < 0 || d.x > W) d.dx *= -1
        if (d.y < 0 || d.y > H) d.dy *= -1
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 3.5)
        g.addColorStop(0, `rgba(77,217,201,${d.o})`); g.addColorStop(1, 'rgba(77,217,201,0)')
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r * 3.5, 0, Math.PI * 2)
        ctx.fillStyle = g; ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    const onResize = () => { resize(); init() }
    window.addEventListener('resize', onResize)
    resize(); init(); draw()
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(raf) }
  }, [])

  useEffect(() => {
    const layers = document.querySelectorAll('#hero .float-obj')
    if (!layers.length) return
    const onMove = e => {
      const cx = window.innerWidth / 2, cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy
      layers.forEach((el, i) => {
        const d = (i + 1) * 9
        el.style.transform = `translate(${dx * d}px, ${dy * d}px)`
      })
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="hero">
      <canvas ref={canvasRef} id="starfield" />

      <div className="hero-body">
        <div className="hero-text">
          <h1 className="hero-title">
            VOYAGE <span>2026</span>
          </h1>
          <p className="hero-sub">
            Co-building the future of student innovation.<br />
            Collaborate with industry leaders to develop transformative<br />
            AI systems and real-world solutions.
          </p>
          <div className="hero-btns">
            <a href="#register" className="btn-gold">Register Now →</a>
            <a href="#tracks" className="btn-outline">Explore Tracks</a>
          </div>
        </div>

        <div className="hero-3d">
          {/* Hexagon */}
          <div className="float-obj obj-hex">
            <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a4a42" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0d2e28" stopOpacity="1" />
                </linearGradient>
              </defs>
              <polygon points="100,10 185,57 185,173 100,220 15,173 15,57" fill="url(#hg)" stroke="rgba(77,217,201,0.35)" strokeWidth="1.5" />
              <polygon points="100,30 170,70 170,160 100,200 30,160 30,70" fill="none" stroke="rgba(77,217,201,0.12)" strokeWidth="1" />
              <circle cx="100" cy="115" r="28" fill="none" stroke="rgba(77,217,201,0.25)" strokeWidth="1.5" />
              <line x1="100" y1="87" x2="100" y2="143" stroke="rgba(77,217,201,0.2)" strokeWidth="1" />
              <line x1="76" y1="101" x2="124" y2="129" stroke="rgba(77,217,201,0.2)" strokeWidth="1" />
              <line x1="76" y1="129" x2="124" y2="101" stroke="rgba(77,217,201,0.2)" strokeWidth="1" />
            </svg>
          </div>
          {/* Compass */}
          <div className="float-obj obj-compass">
            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="36" fill="rgba(8,16,30,0.85)" stroke="rgba(77,217,201,0.35)" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="28" fill="none" stroke="rgba(77,217,201,0.12)" strokeWidth="1" />
              <polygon points="40,12 44,40 40,34 36,40" fill="rgba(201,168,76,0.9)" />
              <polygon points="40,68 44,40 40,46 36,40" fill="rgba(77,217,201,0.5)" />
              <circle cx="40" cy="40" r="3" fill="rgba(77,217,201,0.8)" />
            </svg>
          </div>
          {/* Ring */}
          <div className="float-obj obj-ring">
            <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(77,217,201,0.3)" strokeWidth="2" />
              <circle cx="30" cy="30" r="18" fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="1" />
              <circle cx="30" cy="30" r="4" fill="rgba(77,217,201,0.45)" />
              <line x1="30" y1="4" x2="30" y2="56" stroke="rgba(77,217,201,0.12)" strokeWidth="1" />
              <line x1="4" y1="30" x2="56" y2="30" stroke="rgba(77,217,201,0.12)" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>

      {/* Partner strip */}
      <div className="hero-partners">
        <div>
          <div className="partner-label">Organised By</div>
          <div className="partner-logos">
            <span className="partner-logo-tag">GRID COMMUNITY</span>
          </div>
        </div>
        <div>
          <div className="partner-label">Title Sponsor</div>
          <div className="partner-logos">
            <span className="partner-logo-tag">Algorand</span>
            <span className="partner-logo-tag">OSEN</span>
          </div>
        </div>
        <div>
          <div className="partner-label">In Partnership With</div>
          <div className="partner-logos">
            <span className="partner-logo-tag">Mewayz Global</span>
          </div>
        </div>
      </div>
    </section>
  )
}
