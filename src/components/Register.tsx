import React, { useEffect, useRef, useState } from 'react';

type Member = { fullName: string; email: string; college: string; year: string };
const emptyMember = (): Member => ({ fullName: '', email: '', college: '', year: '' });

const tracks = [
  { value: 'ai', label: "Devil's Triangle — AI / ML" },
  { value: 'web3', label: 'Tortuga Market — Blockchain / Web3' },
  { value: 'fintech', label: "Dead Men's Ledger — FinTech" },
  { value: 'health', label: 'Fountain of Youth — Healthcare' },
  { value: 'security', label: "Davy Jones' Vault — Cybersecurity" },
  { value: 'open', label: 'Shipwreck Cove — Open Innovation' },
];

const inputBase: React.CSSProperties = {
  width: '100%',
  background: 'rgba(6,18,38,0.8)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 8,
  padding: '12px 14px',
  color: '#fff',
  fontFamily: 'var(--font-sans)',
  fontSize: 13,
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div>
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      letterSpacing: '0.18em',
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase' as const,
      marginBottom: 8,
      display: 'block',
    }}>
      {label} <span style={{ color: '#e44' }}>*</span>
    </span>
    {children}
  </div>
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

  const focusStyle = (focused: boolean): React.CSSProperties => ({
    ...inputBase,
    borderColor: focused ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.08)',
    boxShadow: focused ? '0 0 0 3px rgba(201,168,76,0.1)' : 'none',
  });

  const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const [focused, setFocused] = useState(false);
    return <input {...props} style={focusStyle(focused)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />;
  };

  const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
    const [focused, setFocused] = useState(false);
    return <select {...props} style={{ ...focusStyle(focused), appearance: 'none' as const, cursor: 'pointer' }} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />;
  };

  const row = (children: React.ReactNode, cols = 2): React.CSSProperties => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: 14,
    marginBottom: 14,
  });

  return (
    <section id="register" ref={sectionRef} style={{
      background: 'var(--bg-deep)',
      padding: '100px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 920, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="section-label">REGISTRATION PORTAL</span>
          <h2 className="pixel-heading" style={{
            fontSize: 'clamp(18px, 2.8vw, 34px)',
            marginTop: 12,
            color: 'var(--text-white)',
            animation: visible ? 'fadeInUp 0.8s ease' : 'none',
          }}>
            Ready to Set <span style={{ color: 'var(--gold)' }}>Sail?</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: 'rgba(255,255,255,0.5)',
            marginTop: 16,
            maxWidth: 500,
            margin: '16px auto 0',
            lineHeight: 1.7,
          }}>
            Secure your team's spot and compete against India's top engineering talent. Build with modern technology in an intensive 36-hour sprint.
          </p>
        </div>

        {submitted ? (
          <div style={{
            background: 'rgba(12,29,56,0.9)',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: 16,
            padding: '48px 40px',
            textAlign: 'center',
            animation: visible ? 'fadeInUp 0.6s ease' : 'none',
          }}>
            <p style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 14, color: 'var(--gold)',
              marginBottom: 16,
            }}>ANCHORS AWEIGH!</p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14, color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
            }}>
              Your registration has been received. We'll be in touch with you soon with further details about Voyage 2026.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate style={{
            background: 'rgba(11,18,34,0.85)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 16,
            padding: '40px 40px 36px',
            animation: visible ? 'fadeInUp 0.8s ease 0.2s both' : 'none',
          }}>
            <p className="pixel-heading" style={{
              fontSize: 13, color: 'var(--text-white)',
              marginBottom: 28, letterSpacing: '0.08em',
            }}>REGISTRATION FORM</p>

            {/* Team Name + Track */}
            <div style={row(
              <>
                <Field label="TEAM NAME">
                  <Input placeholder="e.g. The Black Pearl" value={teamName} onChange={e => setTeamName(e.target.value)} required />
                </Field>
                <Field label="TARGET TRACK">
                  <Select value={track} onChange={e => setTrack(e.target.value)} required>
                    <option value="">Select a track...</option>
                    {tracks.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </Select>
                </Field>
              </>
            )}>
            </div>

            {/* Team Leader */}
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px', letterSpacing: '0.2em',
              color: 'rgba(201,168,76,0.8)',
              textTransform: 'uppercase', fontWeight: 700,
              marginBottom: 14, marginTop: 8,
            }}>TEAM LEADER INFORMATION</p>

            <div style={row(
              <>
                <Field label="FULL NAME">
                  <Input placeholder="Captain Name" value={leaderName} onChange={e => setLeaderName(e.target.value)} required />
                </Field>
                <Field label="EMAIL ADDRESS">
                  <Input type="email" placeholder="captain@example.com" value={leaderEmail} onChange={e => setLeaderEmail(e.target.value)} required />
                </Field>
                <Field label="MOBILE NUMBER">
                  <Input placeholder="10-digit number" value={leaderMobile} onChange={e => setLeaderMobile(e.target.value)} required />
                </Field>
              </>, 3
            )}>
            </div>

            <div style={row(
              <>
                <Field label="COLLEGE / UNIVERSITY NAME">
                  <Input placeholder="e.g. Haldia Institute of Technology" value={leaderCollege} onChange={e => setLeaderCollege(e.target.value)} required />
                </Field>
                <Field label="YEAR OF STUDY">
                  <Select value={leaderYear} onChange={e => setLeaderYear(e.target.value)} required>
                    <option value="">Select Year...</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </Select>
                </Field>
              </>
            )}>
            </div>

            {/* Team Members */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, marginTop: 8 }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px', letterSpacing: '0.2em',
                color: 'rgba(201,168,76,0.8)',
                textTransform: 'uppercase', fontWeight: 700,
              }}>
                CREW MEMBERS ({members.length}/3 ADDITIONAL)
              </p>
              {members.length < 3 && (
                <button type="button" onClick={addMember} style={{
                  background: 'none', border: 'none',
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px', letterSpacing: '0.15em',
                  cursor: 'pointer', transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--gold)')}
                >+ ADD CREW</button>
              )}
            </div>

            {members.map((m, idx) => (
              <div key={idx} style={{
                background: 'rgba(6,18,38,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 10,
                padding: 20,
                marginBottom: 12,
              }}>
                <p className="pixel-heading" style={{
                  fontSize: 9, color: 'var(--text-white)',
                  marginBottom: 16, letterSpacing: '0.08em',
                }}>CREW {idx + 1}</p>
                <div style={row(
                  <>
                    <Field label="FULL NAME">
                      <Input placeholder="Full Name" value={m.fullName} onChange={e => updateMember(idx, 'fullName', e.target.value)} required />
                    </Field>
                    <Field label="EMAIL ADDRESS">
                      <Input type="email" placeholder="email@example.com" value={m.email} onChange={e => updateMember(idx, 'email', e.target.value)} required />
                    </Field>
                  </>
                )}>
                </div>
                <div style={row(
                  <>
                    <Field label="COLLEGE / UNIVERSITY NAME">
                      <Input placeholder="e.g. Haldia Institute of Technology" value={m.college} onChange={e => updateMember(idx, 'college', e.target.value)} required />
                    </Field>
                    <Field label="YEAR OF STUDY">
                      <Select value={m.year} onChange={e => updateMember(idx, 'year', e.target.value)} required>
                        <option value="">Select Year...</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                      </Select>
                    </Field>
                  </>
                )}>
                </div>
              </div>
            ))}

            {/* Captcha */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '28px 0 24px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 4, padding: '14px 20px',
                minWidth: 270, maxWidth: 310,
              }}>
                <input type="checkbox" id="captcha" checked={captcha} onChange={e => setCaptcha(e.target.checked)}
                  style={{ width: 18, height: 18, accentColor: 'var(--gold)', cursor: 'pointer', flexShrink: 0 }} />
                <label htmlFor="captcha" style={{ flex: 1, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>
                  I'm not a robot
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  <svg viewBox="0 0 64 64" width="32" height="32" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="#4a90d9" strokeWidth="3" />
                    <path d="M20 32 Q32 14 44 32 Q32 50 20 32Z" fill="#4a90d9" opacity="0.55" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 8, color: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>reCAPTCHA</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 7, color: 'rgba(255,255,255,0.2)', whiteSpace: 'nowrap' }}>Privacy · Terms</span>
                </div>
              </div>
            </div>

            <button type="submit" style={{
              display: 'block', width: '100%',
              background: 'rgba(201,168,76,0.25)',
              border: '1px solid rgba(201,168,76,0.4)',
              borderRadius: 10,
              padding: 18,
              color: 'var(--gold)',
              fontFamily: 'var(--font-mono)',
              fontSize: 11, letterSpacing: '0.2em',
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
            >SET SAIL — SUBMIT REGISTRATION</button>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 700px) {
          #register form > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Register;
