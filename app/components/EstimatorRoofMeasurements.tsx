'use client'
import { useState } from 'react'

interface Props {
  navSteps: string[]
  activeStep: string
  onBack: () => void
  onNext: (data: { roofPitch: string; stories: string; sqft: number }) => void
}

const PITCHES = [
  { id: 'flat', label: 'Flat', sub: '0/12', icon: (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
      <line x1="5" y1="20" x2="55" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="5" y1="26" x2="55" y2="26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )},
  { id: 'low', label: 'Low', sub: '1-2/12', icon: (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
      <polyline points="5,30 30,20 55,30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )},
  { id: 'conventional', label: 'Conventional', sub: '3-9/12', icon: (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
      <polyline points="5,32 30,10 55,32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )},
  { id: 'steep', label: 'Steep', sub: '9-12/12', icon: (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
      <polyline points="15,35 30,5 45,35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )},
]

function Tooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false)
  return (
    <span className="calc-tooltip-wrap">
      <button
        className="calc-tooltip-btn"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        type="button"
        aria-label="Info"
      >
        ℹ
      </button>
      {show && (
        <span className="calc-tooltip-box">{text}</span>
      )}
    </span>
  )
}

export default function EstimatorRoofMeasurements({ navSteps, activeStep, onBack, onNext }: Props) {
  const [pitch, setPitch] = useState('')
  const [stories, setStories] = useState('')
  const [sqft, setSqft] = useState(1450)

  const canProceed = pitch && stories

  return (
    <div className="calc-page">

      {/* Sub-nav */}
      <div className="calc-subnav">
        <div className="calc-subnav-tab active">Solar Estimate</div>
        {navSteps.map(step => (
          <div key={step} className={`calc-subnav-step${step === activeStep ? ' active' : ''}`}>
            {step}
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="calc-body">
        <div className="calc-form-col">

          <h1 className="calc-heading">Roof Measurements</h1>
          <p className="calc-subheading">
            We&apos;ll need some more details about your home&apos;s roof. Choose the roof pitch angle
            that most closely resembles your home&apos;s roof. If you&apos;re not sure, an approximation
            is fine. We&apos;ll confirm the details with you after.
          </p>

          {/* Roof Pitch */}
          <div className="calc-field">
            <label className="calc-label">
              Roof Pitch <Tooltip text="Roof pitch (or slope) tells you how many inches the roof rises for every 12 inches in depth." />
            </label>
            <div className="calc-pitch-grid">
              {PITCHES.map(p => (
                <button
                  key={p.id}
                  className={`calc-pitch-card${pitch === p.id ? ' calc-pitch-card--active' : ''}`}
                  onClick={() => setPitch(p.id)}
                  type="button"
                >
                  <div className="calc-pitch-icon">{p.icon}</div>
                  <div className="calc-pitch-label">{p.label}</div>
                  <div className="calc-pitch-sub">{p.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Stories + Sq Footage */}
          <div className="calc-fields-row">

            <div className="calc-field calc-field--half">
              <label className="calc-label">
                Number of Stories <Tooltip text="How many floors does your home have?" />
              </label>
              <div className="calc-select-wrap">
                <select
                  className="calc-select"
                  value={stories}
                  onChange={e => setStories(e.target.value)}
                >
                  <option value="">Property Stories</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span className="calc-select-arrow">▾</span>
              </div>
            </div>

            <div className="calc-field calc-field--half">
              <label className="calc-label">
                Home Square Footage <Tooltip text="Include the entire square footage of your home structure including any detached garage structure." />
              </label>
              <div className="calc-slider-row">
                <input
                  type="range"
                  className="calc-slider"
                  min={500}
                  max={8000}
                  step={50}
                  value={sqft}
                  onChange={e => setSqft(Number(e.target.value))}
                />
                <span className="calc-slider-val">{sqft.toLocaleString()} Sq Ft</span>
              </div>
            </div>

          </div>

        </div>

        {/* Right: image placeholder */}
        <div className="calc-illus-col">
          <img
            src="/RoofMeasurement.png"
            alt="Roof Measurement illustration"
            className="calc-illustration"
          />
        </div>

      </div>

      {/* Nav */}
      <div className="calc-footer-bar calc-footer-bar--split">
        <button className="calc-back-btn" onClick={onBack}>Back</button>
        <button
          className={`calc-next-btn${canProceed ? ' calc-next-btn--active' : ''}`}
          disabled={!canProceed}
          onClick={() => onNext({ roofPitch: pitch, stories, sqft })}
        >
          Next
        </button>
      </div>

    </div>
  )
}