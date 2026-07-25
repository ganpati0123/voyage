import React, { useEffect, useRef, useState } from 'react';

type Member = { fullName: string; email: string; college: string; year: string };
const emptyMember = (): Member => ({ fullName: '', email: '', college: '', year: '' });

const field = (label: string, required = true) => (
  <span style={{
    fontFamily: 'var(--font-mono)',
    fontSize: '9px',
    letterSpacing: '0.18em',
    color: 'var(--text-muted)',
    textTransform: 'uppercase' as const,
    marginBottom: 6,
    display: 'block',
  }}>
    {label} {required && <span style={{ color: '#e44' }}>*</span>}
  </span>
);

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(6,11,18,0.8)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 8,
  padding: '11px 14px',
  color: '#fff',
  fontFamily: 'var(--font-sans)',
  fontSize: 13,
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      style={{
        ...inputStyle,
        borderColor: focused ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.08)',
        boxShadow: focused ? '0 0 0 3px rgba(201,168,76,0.1)' : 'none',
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
  const [focused, setFocused] = useState(false);
  return (
    <select
      {...props}
      style={{
        ...inputStyle,
        appearance: 'none' as const,
        cursor: 'pointer',
        borderColor: focused ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.08)',
        boxShadow: focused ? '0 0 0 3px rgba(201,168,76,0.1)' : 'none',
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

const sectionLabel = (text: string) => (
  <p style={{
    fontFamily: 'var(--font-mono)',
    fontSize: '9px',
    letterSpacing: '0.2em',
    color: 'rgba(201,168,76,0.8)',
    textTransform: 'uppercase',
    marginBottom: 14,
    marginTop: 8,
    fontWeight: 700,
  }}>{text}</p>
);

const Register: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const [teamName, setTeamName] = useState('');
  const [track, setTrack] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');
  const [leaderMobile, setLeaderMobile] = useState('');
  const [leaderCollege, setLeaderCollege] = useState('');
  const [leaderYear, setLeaderYear] = useState('');
  const [members, setMembers] = useState<Member[]>([emptyMember()]);
  const [captcha, setCaptcha] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const addMember = () => {
    if (members.length < 3) setMembers([...members, emptyMember()]);
  };

  const updateMember = (idx: number, key: keyof Member, val: string) =>
    setMembers(members.map((m, i) => i === idx ? { ...m, [key]: val } : m));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captcha) return;
    setSubmitted(true);
  };

  const cardStyle: React.CSSProperties = {
    background: 'rgba(11,18,34,0.8)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: 16,
    padding: '40px 40px 36px',
    textAlign: 'left',
    animation: visible ? 'fadeInUp 0.8s ease 0.2s both' : 'none',
  };

  const row = (children: React.ReactNode, cols = 2) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: 14,
      marginBottom: 14,
    }}>
      {children}
    </div>
  );

  return (
    <section id="register" ref={sectionRef} style={{
      background: 'var(--bg-deep)',
      padding: '100px 48px',
      position: 'relative',
    }}>
      {/* grid bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.01) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: 920, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="section-label">REGISTRATION PORTAL</span>
          <h2
            className="pixel-heading"
            style={{
              fontSize: 'clamp(20px,3vw,38px)',
              marginTop: 12,
              color: 'var(--text-white)',
              animation: visible ? 'fadeInUp 0.8s ease' : 'none',
            }}
          >
            READY TO BUILD THE
          </h2>
          <h2
            className="pixel-heading"
            style={{
              fontSize: 'clamp(20px,3vw,38px)',
              color: 'var(--gold)',
              animation: visible ? 'fadeInUp 0.8s ease 0.1s both' : 'none',
              marginTop: 6,
            }}
          >
            FUTURE OF AI?
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: 'var(--text-muted)',
            marginTop: 20,
            lineHeight: 1.8,
            animation: visible ? 'fadeInUp 0.8s ease 0.15s both' : 'none',
          }}>
            Secure your team's spot and compete against India's top engineering talent. Build with
            <br />modern technology and cloud platforms in an intensive 36-hour sprint.
          </p>
        </div>

        {submitted ? (
          <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 180 }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--gold)', textAlign: 'center', letterSpacing: '0.05em' }}>
              Registration submitted successfully!<br />We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate style={cardStyle}>
            <p className="pixel-heading" style={{ fontSize: 13, color: 'var(--text-white)', marginBottom: 28, letterSpacing: '0.08em' }}>
              REGISTRATION FORM
            </p>

            {/* Team Name + Track */}
            {row(
              <>
                <div>
                  {field('TEAM NAME')}
                  <Input placeholder="e.g. Neural Nexus" value={teamName} onChange={e => setTeamName(e.target.value)} required />
                </div>
                <div>
                  {field('TARGET FOCUS TRACK')}
                  <Select value={track} onChange={e => setTrack(e.target.value)} required>
                    <option value="">Select a track...</option>
                    <option value="ai">AI / Machine Learning</option>
                    <option value="web3">Web3 / Blockchain</option>
                    <option value="cloud">Cloud / DevOps</option>
                    <option value="open">Open Innovation</option>
                  </Select>
                </div>
              </>
            )}

            {/* Team Leader */}
            {sectionLabel('TEAM LEADER INFORMATION')}
            {row(
              <>
                <div>
                  {field('FULL NAME')}
                  <Input placeholder="Leader Name" value={leaderName} onChange={e => setLeaderName(e.target.value)} required />
                </div>
                <div>
                  {field('EMAIL ADDRESS')}
                  <Input type="email" placeholder="leader@example.com" value={leaderEmail} onChange={e => setLeaderEmail(e.target.value)} required />
                </div>
                <div>
                  {field('MOBILE NUMBER')}
                  <Input placeholder="10-digit number" value={leaderMobile} onChange={e => setLeaderMobile(e.target.value)} required />
                </div>
              </>, 3
            )}
            {row(
              <>
                <div style={{ gridColumn: '1 / 2' }}>
                  {field('COLLEGE / UNIVERSITY NAME')}
                  <Input placeholder="e.g. MIT Bengaluru" value={leaderCollege} onChange={e => setLeaderCollege(e.target.value)} required />
                </div>
                <div>
                  {field('YEAR OF STUDY')}
                  <Select value={leaderYear} onChange={e => setLeaderYear(e.target.value)} required>
                    <option value="">Select Year...</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </Select>
                </div>
              </>
            )}

            {/* Team Members */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, marginTop: 8 }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                letterSpacing: '0.2em',
                color: 'rgba(201,168,76,0.8)',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}>
                TEAM MEMBERS ({members.length}/3 ADDITIONAL)
              </p>
              {members.length < 3 && (
                <button
                  type="button"
                  onClick={addMember}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--gold)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    letterSpacing: '0.15em',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--gold)')}
                >
                  + ADD MEMBER
                </button>
              )}
            </div>

            {members.map((m, idx) => (
              <div key={idx} style={{
                background: 'rgba(6,11,18,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 10,
                padding: 20,
                marginBottom: 12,
              }}>
                <p className="pixel-heading" style={{ fontSize: 9, color: 'var(--text-white)', marginBottom: 16, letterSpacing: '0.08em' }}>
                  MEMBER {idx + 1}
                </p>
                {row(
                  <>
                    <div>
                      {field('FULL NAME')}
                      <Input placeholder="Full Name" value={m.fullName} onChange={e => updateMember(idx, 'fullName', e.target.value)} required />
                    </div>
                    <div>
                      {field('EMAIL ADDRESS')}
                      <Input type="email" placeholder="email@example.com" value={m.email} onChange={e => updateMember(idx, 'email', e.target.value)} required />
                    </div>
                  </>
                )}
                {row(
                  <>
                    <div>
                      {field('COLLEGE / UNIVERSITY NAME')}
                      <Input placeholder="e.g. MIT Bengaluru" value={m.college} onChange={e => updateMember(idx, 'college', e.target.value)} required />
                    </div>
                    <div>
                      {field('YEAR OF STUDY')}
                      <Select value={m.year} onChange={e => updateMember(idx, 'year', e.target.value)} required>
                        <option value="">Select Year...</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                      </Select>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* reCAPTCHA mock */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '28px 0 24px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 4, padding: '14px 20px',
                minWidth: 270, maxWidth: 310,
              }}>
                <input
                  type="checkbox"
                  id="captcha"
                  checked={captcha}
                  onChange={e => setCaptcha(e.target.checked)}
                  style={{ width: 18, height: 18, accentColor: 'var(--gold)', cursor: 'pointer', flexShrink: 0 }}
                />
                <label htmlFor="captcha" style={{ flex: 1, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', cursor: 'pointer' }}>
                  I'm not a robot
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  <svg viewBox="0 0 64 64" width="32" height="32" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="#4a90d9" strokeWidth="3" />
                    <path d="M20 32 Q32 14 44 32 Q32 50 20 32Z" fill="#4a90d9" opacity="0.55" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 8, color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>reCAPTCHA</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 7, color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>Privacy · Terms</span>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                display: 'block', width: '100%',
                background: 'rgba(201,168,76,0.25)',
                border: '1px solid rgba(201,168,76,0.4)',
                borderRadius: 10,
                padding: 18,
                color: 'var(--gold)',
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.2em',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--gold)';
                e.currentTarget.style.color = '#000';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(201,168,76,0.25)';
                e.currentTarget.style.color = 'var(--gold)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              SUBMIT REGISTRATION
            </button>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 700px) {
          #register .reg-grid-3 { grid-template-columns: 1fr !important; }
          #register .reg-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Register;
