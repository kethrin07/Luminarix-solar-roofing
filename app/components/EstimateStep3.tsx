'use client'
import { useState } from 'react'

const STEPS = ['Address', 'Utilities', 'Solar Panels', 'Battery Storage', 'Contact Info', 'Cost Summary']

const UTILITY_PROVIDERS = [
  'Select Utility Provider',
  'Southern California Edison (SCE)',
  'Pacific Gas & Electric (PG&E)',
  'San Diego Gas & Electric (SDG&E)',
  'Los Angeles Department of Water & Power (LADWP)',
  'Sacramento Municipal Utility District (SMUD)',
  'Other',
]

interface Props {
  navSteps: string[]
  activeStep: string
  onBack: () => void
  onNext: (data: { bill: string; provider: string }) => void
}

export default function EstimateStep3({ onBack, onNext }: Props) {
  const [bill, setBill] = useState('')
  const [provider, setProvider] = useState('')

  const canProceed = bill.trim().length > 0 && provider && provider !== 'Select Utility Provider'

  return (
    <div className="calc-page">

      {/* Sub-nav */}
      <div className="calc-subnav">
        <div className="calc-subnav-tab active">Solar Estimate</div>
        {STEPS.map((step, i) => (
          <div key={step} className={`calc-subnav-step${i === 1 ? ' active' : ''}`}>
            {step}
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="calc-body">

        {/* Left: form */}
        <div className="calc-form-col">
          <h1 className="calc-heading">
            What do you currently spend<br />a month on electricity?
          </h1>
          <p className="calc-subheading">
            Don&apos;t be shy! You&apos;re well on our way to driving those bills down into negative!
          </p>

          <div className="calc-fields-row">

            {/* Average Electric Bill */}
            <div className="calc-field calc-field--half">
              <label className="calc-label">Average Electric Bill</label>
              <div className="calc-input-with-suffix">
                <span className="calc-input-prefix">$</span>
                <input
                  type="number"
                  className="calc-input calc-input--prefixed"
                  placeholder="Average Monthly Cost Of Electricity"
                  value={bill}
                  min="0"
                  onChange={e => setBill(e.target.value)}
                />
                <span className="calc-input-suffix">/ MO</span>
              </div>
            </div>

            {/* Utility Provider */}
            <div className="calc-field calc-field--half">
              <label className="calc-label">Utility Provider</label>
              <div className="calc-select-wrap">
                <select
                  className="calc-select"
                  value={provider}
                  onChange={e => setProvider(e.target.value)}
                >
                  {UTILITY_PROVIDERS.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <span className="calc-select-arrow">▾</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right: image placeholder */}
        <div className="calc-illus-col">
          {/* Add your image here */}
        </div>

      </div>

      {/* Nav buttons */}
      <div className="calc-footer-bar calc-footer-bar--split">
        <button className="calc-back-btn" onClick={onBack}>Back</button>
        <button
          className={`calc-next-btn${canProceed ? ' calc-next-btn--active' : ''}`}
          disabled={!canProceed}
          onClick={() => onNext({ bill, provider })}
        >
          Next
        </button>
      </div>

    </div>
  )
}