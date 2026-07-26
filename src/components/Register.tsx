import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Anchor } from 'lucide-react';

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

const steps = ['THE SHIP', 'THE CAPTAIN', 'THE CREW', 'SET SAIL'];

const Register: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const [step, setStep] = useState(0);
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
    setMembers(members.map((m, i) => (i === idx ? { ...m, [key]: val } : m)));

  const canProceed = () => {
    if (step === 0) return teamName && track;
    if (step === 1) return leaderName && leaderEmail && leaderMobile && leaderCollege && leaderYear;
    if (step === 2) return true;
    if (step === 3) return captcha;
    return false;
  };

  const next = () => { if (canProceed() && step < 3) setStep(step + 1); };
  const back = () => { if (step > 0) setStep(step - 1); };

  const handleSubmit = () => {
    if (!captcha) return;
    setSubmitted(true);
  };

  const inputBase: React.CSSProperties = {
    width: '100%',
    background: 'rgba(2,6,13,0.85)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 11,
    padding: '15px 17px',
    color: '#fff',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const Field: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '11px',
        letterSpacing: '0.14em',
        color: 'rgba(141,165,196,0.6)',
        marginBottom: 9,
        display: 'block',
        fontWeight: 600,
      }}>
        {label} <span style={{ color: '#c0392b' }}>*</span>
      </span>
      {children}
    </div>
  );

  const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const [focused, setFocused] = useState(false);
    return (
      <input {...props} style={{
        ...inputBase,
        borderColor: focused ? 'rgba(212,175,55,0.55)' : 'rgba(255,255,255,0.08)',
        boxShadow: focused ? '0 0 0 3px rgba(212,175,55,0.12)' : 'none',
      }} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
    );
  };

  const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
    const [focused, setFocused] = useState(false);
    return (
      <select {...props} style={{
        ...inputBase,
        borderColor: focused ? 'rgba(212,175,55,0.55)' : 'rgba(255,255,255,0.08)',
        boxShadow: focused ? '0 0 0 3px rgba(212,175,55,0.12)' : 'none',
        appearance: 'none' as const,
        cursor: 'pointer',
      }} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
        {props.children}
      </select>
    );
  };

  const row = (cols: number): React.CSSProperties => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: 16,
    marginBottom: 16,
  });

  return (
    <section id="register" ref={sectionRef} className="noise-texture" style={{
      background: 'linear-gradient(180deg, #040c1a 0%, #02060d 100%)',
      padding: '130px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '12%', left: '4%',
        width: 540, height: 540,
        background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '940px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-label">The Enlistment Portal</span>
          <h2 style={{
            fontFamily: 'var(--font-pirate)',
            fontSize: 'clamp(40px, 5.5vw, 64px)',
            marginTop: 18,
            color: 'var(--text-white)',
            lineHeight: 0.95,
            animation: visible ? 'fadeInUp 0.9s ease' : 'none',
          }}>
            Ready to Hoist the <span className="gold-text">Sails?</span>
          </h2>
          <div className="ornament" />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            color: 'rgba(141,165,196,0.62)',
            maxWidth: 540,
            margin: '0 auto',
            lineHeight: 1.85,
          }}>
            Claim yer crew's place and stand against the realm's boldest innovators. Forge with
            modern arms in a relentless 36-hour tide.
          </p>
        </div>

        {submitted ? (
          <div className="glass-card gold-frame" style={{
            padding: '68px 48px',
            textAlign: 'center',
            animation: visible ? 'scaleIn 0.6s ease' : 'none',
          }}>
            <div style={{
              width: 86, height: 86, borderRadius: '50%',
              background: 'linear-gradient(135deg, #d4af37, #8a6f30)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 30px',
              boxShadow: '0 0 48px rgba(212,175,55,0.45)',
            }}>
              <Check size={38} color="#000" />
            </div>
            <p className="gold-glow" style={{
              fontFamily: 'var(--font-pirate)',
              fontSize: '32px',
              marginBottom: 18, letterSpacing: '0.05em',
            }}>ANCHORS AWEIGH!</p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px', color: 'rgba(141,165,196,0.68)',
              lineHeight: 1.85, maxWidth: 420, margin: '0 auto',
            }}>
              Yer enlistment has been received. We shall send a raven soon with further tidings
              about the Voyage 2026.
            </p>
          </div>
        ) : (
          <div className="glass-card" style={{
            padding: '52px 46px',
            animation: visible ? 'fadeInUp 0.9s ease 0.2s both' : 'none',
          }}>
            {/* Step indicator */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0,
              marginBottom: 44,
            }}>
              {steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 11 }}>
                    <div style={{
                      width: 46, height: 46, borderRadius: '50%',
                      background: i < step ? 'linear-gradient(135deg, #d4af37, #8a6f30)' : i === step ? 'rgba(212,175,55,0.16)' : 'rgba(255,255,255,0.04)',
                      border: `2px solid ${i < step ? 'transparent' : i === step ? 'var(--gold-5)' : 'rgba(255,255,255,0.1)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: i < step ? '#000' : i === step ? 'var(--gold-6)' : 'rgba(141,165,196,0.35)',
                      fontFamily: 'var(--font-pirate)',
                      fontSize: '19px',
                      transition: 'all 0.3s ease',
                      boxShadow: i === step ? '0 0 22px rgba(212,175,55,0.35)' : 'none',
                    }}>
                      {i < step ? <Check size={22} /> : i + 1}
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '10px',
                      letterSpacing: '0.16em',
                      color: i <= step ? 'var(--gold-6)' : 'rgba(141,165,196,0.35)',
                      fontWeight: 700,
                      transition: 'color 0.3s',
                    }}>{s}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{
                      width: 64, height: 2,
                      background: i < step ? 'linear-gradient(90deg, #d4af37, #8a6f30)' : 'rgba(255,255,255,0.08)',
                      margin: '0 14px',
                      marginBottom: 30,
                      transition: 'background 0.3s',
                    }} />
                  )}
                </div>
              ))}
            </div>

            <div style={{ minHeight: 280, animation: 'fadeInUp 0.4s ease' }} key={step}>
              {/* Step 0 — The Ship */}
              {step === 0 && (
                <>
                  <p style={{
                    fontFamily: 'var(--font-pirate)',
                    fontSize: '24px', color: 'var(--text-white)',
                    marginBottom: 30, textAlign: 'center',
                  }}>Name Yer Vessel</p>
                  <div style={row(2)}>
                    <Field label="VESSEL NAME">
                      <Input placeholder="e.g. The Black Pearl" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                    </Field>
                    <Field label="THE WATERS YE SHALL SAIL">
                      <Select value={track} onChange={(e) => setTrack(e.target.value)}>
                        <option value="">Choose a domain...</option>
                        {tracks.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                      </Select>
                    </Field>
                  </div>
                </>
              )}

              {/* Step 1 — The Captain */}
              {step === 1 && (
                <>
                  <p style={{
                    fontFamily: 'var(--font-pirate)',
                    fontSize: '24px', color: 'var(--text-white)',
                    marginBottom: 30, textAlign: 'center',
                  }}>The Captain's Seal</p>
                  <div style={row(2)}>
                    <Field label="FULL NAME">
                      <Input placeholder="Captain's Name" value={leaderName} onChange={(e) => setLeaderName(e.target.value)} />
                    </Field>
                    <Field label="RAVEN'S ADDRESS">
                      <Input type="email" placeholder="captain@example.com" value={leaderEmail} onChange={(e) => setLeaderEmail(e.target.value)} />
                    </Field>
                  </div>
                  <div style={row(2)}>
                    <Field label="SIGNAL HORN (MOBILE)">
                      <Input placeholder="10-digit number" value={leaderMobile} onChange={(e) => setLeaderMobile(e.target.value)} />
                    </Field>
                    <Field label="YEAR OF STUDY">
                      <Select value={leaderYear} onChange={(e) => setLeaderYear(e.target.value)}>
                        <option value="">Select Year...</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                      </Select>
                    </Field>
                  </div>
                  <div style={row(1)}>
                    <Field label="ACADEMY / UNIVERSITY">
                      <Input placeholder="e.g. Haldia Institute of Technology" value={leaderCollege} onChange={(e) => setLeaderCollege(e.target.value)} />
                    </Field>
                  </div>
                </>
              )}

              {/* Step 2 — The Crew */}
              {step === 2 && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 26 }}>
                    <p style={{
                      fontFamily: 'var(--font-pirate)',
                      fontSize: '24px', color: 'var(--text-white)',
                    }}>Assemble Yer Crew</p>
                    {members.length < 3 && (
                      <button type="button" onClick={addMember} style={{
                        background: 'rgba(212,175,55,0.1)',
                        border: '1px solid rgba(212,175,55,0.32)',
                        color: 'var(--gold-6)',
                        fontFamily: 'var(--font-display)',
                        fontSize: '11px', letterSpacing: '0.12em',
                        padding: '9px 19px', borderRadius: 9,
                        cursor: 'pointer', transition: 'all 0.2s',
                        fontWeight: 700,
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.2)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; }}
                      >+ ADD CREW</button>
                    )}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px', color: 'rgba(141,165,196,0.5)',
                    marginBottom: 22,
                  }}>
                    Add up to 3 additional crew souls (yer crew may be 3–4 total, captain included).
                  </p>

                  {members.map((m, idx) => (
                    <div key={idx} style={{
                      background: 'rgba(2,6,13,0.6)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 13,
                      padding: 24,
                      marginBottom: 18,
                    }}>
                      <p className="gold-glow" style={{
                        fontFamily: 'var(--font-pirate)',
                        fontSize: '15px',
                        marginBottom: 20, letterSpacing: '0.05em',
                      }}>CREW {idx + 1}</p>
                      <div style={row(2)}>
                        <Field label="FULL NAME">
                          <Input placeholder="Full Name" value={m.fullName} onChange={(e) => updateMember(idx, 'fullName', e.target.value)} />
                        </Field>
                        <Field label="RAVEN'S ADDRESS">
                          <Input type="email" placeholder="email@example.com" value={m.email} onChange={(e) => updateMember(idx, 'email', e.target.value)} />
                        </Field>
                      </div>
                      <div style={row(2)}>
                        <Field label="ACADEMY / UNIVERSITY">
                          <Input placeholder="e.g. Haldia Institute of Technology" value={m.college} onChange={(e) => updateMember(idx, 'college', e.target.value)} />
                        </Field>
                        <Field label="YEAR OF STUDY">
                          <Select value={m.year} onChange={(e) => updateMember(idx, 'year', e.target.value)}>
                            <option value="">Select Year...</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                          </Select>
                        </Field>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* Step 3 — Set Sail */}
              {step === 3 && (
                <>
                  <p style={{
                    fontFamily: 'var(--font-pirate)',
                    fontSize: '24px', color: 'var(--text-white)',
                    marginBottom: 30, textAlign: 'center',
                  }}>Confirm & Set Sail</p>

                  <div style={{
                    background: 'rgba(2,6,13,0.6)',
                    border: '1px solid rgba(212,175,55,0.18)',
                    borderRadius: 15,
                    padding: '30px 30px',
                    marginBottom: 30,
                  }}>
                    <SummaryRow label="Vessel Name" value={teamName} />
                    <SummaryRow label="Domain" value={tracks.find((t) => t.value === track)?.label || ''} />
                    <SummaryRow label="Captain" value={leaderName} />
                    <SummaryRow label="Raven's Address" value={leaderEmail} />
                    <SummaryRow label="Signal Horn" value={leaderMobile} />
                    <SummaryRow label="Academy" value={leaderCollege} />
                    <SummaryRow label="Crew Souls" value={`${members.length} additional`} last />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      background: 'rgba(255,255,255,0.04)',
                      border: `1px solid ${captcha ? 'rgba(212,175,55,0.32)' : 'rgba(255,255,255,0.1)'}`,
                      borderRadius: 7, padding: '15px 22px',
                      minWidth: 290, maxWidth: 330,
                      transition: 'border-color 0.2s',
                    }}>
                      <input type="checkbox" id="captcha" checked={captcha} onChange={(e) => setCaptcha(e.target.checked)}
                        style={{ width: 20, height: 20, accentColor: 'var(--gold-5)', cursor: 'pointer', flexShrink: 0 }} />
                      <label htmlFor="captcha" style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(212,220,235,0.68)', cursor: 'pointer' }}>
                        I be no phantom of the deep
                      </label>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <Anchor size={26} color="var(--gold-6)" />
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 8, color: 'rgba(141,165,196,0.4)', whiteSpace: 'nowrap' }}>Voyage Guard</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Navigation buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginTop: 14 }}>
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: step === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  border: `1px solid ${step === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.15)'}`,
                  color: step === 0 ? 'rgba(141,165,196,0.25)' : 'rgba(212,220,235,0.75)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '13px', letterSpacing: '0.12em',
                  fontWeight: 700,
                  padding: '15px 26px',
                  borderRadius: 11,
                  cursor: step === 0 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <ChevronLeft size={18} /> AFT
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canProceed()}
                  className="btn-treasure"
                  style={{
                    opacity: canProceed() ? 1 : 0.4,
                    cursor: canProceed() ? 'pointer' : 'not-allowed',
                    transform: canProceed() ? undefined : 'none',
                    padding: '15px 30px',
                    fontSize: '13px',
                  }}
                >
                  FORWARD <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!captcha}
                  className="btn-treasure"
                  style={{
                    opacity: captcha ? 1 : 0.4,
                    cursor: captcha ? 'pointer' : 'not-allowed',
                    transform: captcha ? undefined : 'none',
                    padding: '15px 30px',
                    fontSize: '13px',
                  }}
                >
                  SET SAIL <Anchor size={18} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 700px) {
          #register form > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
          #register > div:last-child > div:last-child > div:nth-child(3) > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const SummaryRow: React.FC<{ label: string; value: string; last?: boolean }> = ({ label, value, last }) => (
  <div style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '13px 0',
    borderBottom: last ? 'none' : '1px solid rgba(255,255,255,0.05)',
  }}>
    <span style={{
      fontFamily: 'var(--font-display)',
      fontSize: '14px', color: 'rgba(141,165,196,0.6)',
      fontWeight: 600,
    }}>{label}</span>
    <span className="gold-glow" style={{
      fontFamily: 'var(--font-body)',
      fontSize: '14.5px', fontWeight: 600,
    }}>{value}</span>
  </div>
);

export default Register;
