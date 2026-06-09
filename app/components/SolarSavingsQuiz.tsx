'use client'
import { useState, useEffect, useRef } from 'react'

type Step = 0 | 1 | 2 | 3 | 4 | 5

const CONFETTI_COLORS = ['#ff7e2f', '#86b7cc', '#ffffff', '#ffd166', '#4ade80']

function buildConfetti() {
  return Array.from({ length: 32 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    delay: `${(Math.random() * 0.6).toFixed(2)}s`,
    duration: `${(1.1 + Math.random() * 0.9).toFixed(2)}s`,
    size: `${6 + Math.floor(Math.random() * 8)}px`,
    round: Math.random() > 0.5,
  }))
}

function calcResult(homeType: string, bill: string, roof: string) {
  const billScore: Record<string, number> = { 'under-100': 1, '100-200': 2, '200-300': 3, '300plus': 4 }
  const score = billScore[bill] ?? 1
  const ranges: Record<string, [number, number]> = {
    'under-100': [700, 1200],
    '100-200': [1200, 1800],
    '200-300': [1800, 2800],
    '300plus': [2800, 4200],
  }
  let [lo, hi] = ranges[bill] ?? [800, 1400]
  if (homeType === 'commercial') { lo *= 3; hi *= 3 }

  if (roof === 'needs-work') {
    return { tier: 'Solar Starter', tagline: "Great potential — let's get your roof ready first", badge: '🌱', lo, hi, top: false }
  }
  if (homeType === 'commercial' || score >= 4) {
    return { tier: 'Solar Champion', tagline: 'Outstanding solar potential — highest ROI tier available', badge: '🏆', lo, hi, top: true }
  }
  if (score >= 3) {
    return { tier: 'Solar Ready', tagline: 'Strong candidate — excellent savings within reach', badge: '⚡', lo, hi, top: true }
  }
  if (score >= 2) {
    return { tier: 'Good Candidate', tagline: 'Solid solar potential — a smart long-term investment', badge: '☀️', lo, hi, top: false }
  }
  return { tier: 'Solar Explorer', tagline: "Every journey starts somewhere — let's explore your options", badge: '🔍', lo, hi, top: false }
}

export default function SolarSavingsQuiz() {
  const sectionRef = useRef<HTMLElement>(null)
  const [step, setStep] = useState<Step>(0)
  const [homeType, setHomeType] = useState('')
  const [bill, setBill] = useState('')
  const [roof, setRoof] = useState('')
  const [zip, setZip] = useState('')
  const [zipErr, setZipErr] = useState(false)
  const [confetti, setConfetti] = useState<ReturnType<typeof buildConfetti>>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) sectionRef.current?.classList.add('visible') },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  function advance() {
    if (step === 4) {
      if (!/^\d{5}$/.test(zip)) { setZipErr(true); return }
      setConfetti(buildConfetti())
      setStep(5)
    } else {
      setStep((s) => (s + 1) as Step)
    }
  }

  function back() {
    setStep((s) => (s - 1) as Step)
  }

  function reset() {
    setStep(0)
    setHomeType(''); setBill(''); setRoof(''); setZip('')
    setZipErr(false); setConfetti([])
  }

  const canNext =
    (step === 1 && !!homeType) ||
    (step === 2 && !!bill) ||
    (step === 3 && !!roof) ||
    (step === 4 && zip.length === 5)

  const progress = step >= 5 ? 100 : step === 0 ? 0 : (step / 4) * 100
  const result = step === 5 ? calcResult(homeType, bill, roof) : null

  return (
    <section className="section solar-quiz-section" ref={sectionRef}>

      {confetti.length > 0 && (
        <div className="sqz-confetti-layer" aria-hidden="true">
          {confetti.map(p => (
            <span
              key={p.id}
              className="sqz-confetti-piece"
              style={{
                left: p.left,
                backgroundColor: p.color,
                animationDelay: p.delay,
                animationDuration: p.duration,
                width: p.size,
                height: p.size,
                borderRadius: p.round ? '50%' : '2px',
              }}
            />
          ))}
        </div>
      )}

      <div className="wrapper">

        <div className="sqz-header sqz-header-anim">
          <div className="pretitle text-color-secondary" style={{ marginBottom: 16 }}>Solar Potential Quiz</div>
          <h2 className="sqz-headline monument-extended">
            What's Your<br />Solar Score?
          </h2>
          <p className="sqz-subline">
            4 quick questions — no page change, no account. Get your personalized savings estimate in 30 seconds.
          </p>
        </div>

        <div className="sqz-card sqz-card-anim">

          {step > 0 && step < 5 && (
            <div className="sqz-progress">
              <div className="sqz-step-dots">
                {[1, 2, 3, 4].map(n => (
                  <div key={n} className={`sqz-dot ${step > n ? 'done' : ''} ${step === n ? 'active' : ''}`}>
                    <span>{step > n ? '✓' : n}</span>
                  </div>
                ))}
              </div>
              <div className="sqz-bar-track">
                <div className="sqz-bar-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}

          <div className="sqz-body" key={step}>

            {step === 0 && (
              <div className="sqz-start">
                <div className="sqz-start-sun">☀️</div>
                <h3 className="sqz-start-title">Ready to find out how much you could save?</h3>
                <p className="sqz-start-hint">4 questions &nbsp;·&nbsp; 30 seconds &nbsp;·&nbsp; Personalized result</p>
                <button className="sqz-cta-btn" onClick={() => setStep(1)}>
                  Start the Quiz →
                </button>
              </div>
            )}

            {step === 1 && (
              <ChoiceStep
                question="What type of property do you own?"
                choices={[
                  { value: 'house', label: '🏠', caption: 'House' },
                  { value: 'condo', label: '🏢', caption: 'Condo / Townhome' },
                  { value: 'commercial', label: '🏭', caption: 'Commercial' },
                ]}
                selected={homeType}
                onSelect={setHomeType}
              />
            )}

            {step === 2 && (
              <ChoiceStep
                question="What's your average monthly electricity bill?"
                choices={[
                  { value: 'under-100', label: '💡', caption: 'Under $100' },
                  { value: '100-200', label: '⚡', caption: '$100 – $200' },
                  { value: '200-300', label: '🔥', caption: '$200 – $300' },
                  { value: '300plus', label: '📈', caption: '$300+' },
                ]}
                selected={bill}
                onSelect={setBill}
              />
            )}

            {step === 3 && (
              <ChoiceStep
                question="How would you describe your roof's condition?"
                choices={[
                  { value: 'great', label: '✅', caption: 'Great condition' },
                  { value: 'needs-work', label: '🔧', caption: 'Needs some work' },
                  { value: 'not-sure', label: '🤷', caption: "Not sure" },
                ]}
                selected={roof}
                onSelect={setRoof}
              />
            )}

            {step === 4 && (
              <div className="sqz-zip-step">
                <p className="sqz-question">Last one — what's your zip code?</p>
                <p className="sqz-zip-hint">We use this to factor in local sunlight hours and available incentives.</p>
                <input
                  className={`sqz-zip-input${zipErr ? ' sqz-zip-input--err' : ''}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  placeholder="e.g. 90210"
                  value={zip}
                  autoFocus
                  onChange={e => { setZip(e.target.value.replace(/\D/g, '')); setZipErr(false) }}
                />
                {zipErr && <p className="sqz-err-msg">Please enter a valid 5-digit zip code.</p>}
              </div>
            )}

            {step === 5 && result && (
              <div className="sqz-result">
                <div className="sqz-result-badge-wrap">
                  <div className={`sqz-result-badge ${result.top ? 'sqz-result-badge--top' : ''}`}>
                    <span className="sqz-result-badge-icon">{result.badge}</span>
                  </div>
                </div>
                <p className="sqz-result-label">Your Solar Tier</p>
                <h3 className="sqz-result-tier">{result.tier}</h3>
                <p className="sqz-result-tagline">{result.tagline}</p>

                <div className="sqz-savings-box">
                  <p className="sqz-savings-label">Estimated Annual Savings</p>
                  <p className="sqz-savings-amount">
                    ${result.lo.toLocaleString()} – ${result.hi.toLocaleString()}
                    <span className="sqz-savings-unit"> / yr</span>
                  </p>
                </div>

                <div className="sqz-result-actions">
                  <a
                    href="https://calendly.com/ameco-solar-roofing/solar-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-wrapper"
                  >
                    <div className="button sob bg-white"><div>Book Free Consultation</div></div>
                    <div className="button-shadow sob-shadow" />
                  </a>
                  <button className="sqz-retake" onClick={reset}>Retake Quiz</button>
                </div>
              </div>
            )}

          </div>

          {step > 0 && step < 5 && (
            <div className="sqz-nav">
              {step > 1 && (
                <button className="sqz-back" onClick={back}>← Back</button>
              )}
              <button
                className={`sqz-next${canNext ? '' : ' sqz-next--disabled'}`}
                onClick={canNext ? advance : undefined}
                disabled={!canNext}
              >
                {step === 4 ? 'See My Score →' : 'Continue →'}
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

function ChoiceStep({ question, choices, selected, onSelect }: {
  question: string
  choices: { value: string; label: string; caption: string }[]
  selected: string
  onSelect: (v: string) => void
}) {
  return (
    <div className="sqz-choice-step">
      <p className="sqz-question">{question}</p>
      <div className="sqz-choices">
        {choices.map(c => (
          <button
            key={c.value}
            className={`sqz-choice${selected === c.value ? ' sqz-choice--selected' : ''}`}
            onClick={() => onSelect(c.value)}
          >
            <span className="sqz-choice-icon">{c.label}</span>
            <span className="sqz-choice-caption">{c.caption}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
