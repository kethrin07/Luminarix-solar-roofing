'use client'
import { useState } from 'react'

interface Props {
  navSteps: string[]
  activeStep: string
  onBack: () => void
  onNext: (data: { roofStyle: string }) => void
}

const ROOF_STYLES = [
  {
    id: 'shingles',
    name: 'Shingles',
    img: '/shingles.png',
  },
  {
    id: 'tile',
    name: 'Tile',
    img: '/tile.png',
  },
]

export default function EstimatorRoofStyle({ navSteps, activeStep, onBack, onNext }: Props) {
  const [selected, setSelected] = useState('')

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
        <div className="calc-form-col calc-form-col--full">

          <h1 className="calc-heading calc-heading--center">
            Which roof style is right for your project?
          </h1>

          <div className="calc-roof-grid">
            {ROOF_STYLES.map(roof => (
              <button
                key={roof.id}
                className={`calc-roof-card${selected === roof.id ? ' calc-roof-card--active' : ''}`}
                onClick={() => setSelected(roof.id)}
                type="button"
              >
                <div className="calc-roof-img-wrap">
                  <img
                    src={roof.img}
                    alt={roof.name}
                    className="calc-roof-img"
                  />
                </div>
                <div className="calc-roof-name">{roof.name}</div>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Nav buttons */}
      <div className="calc-footer-bar calc-footer-bar--split">
        <button className="calc-back-btn" onClick={onBack}>Back</button>
        <button
          className={`calc-next-btn${selected ? ' calc-next-btn--active' : ''}`}
          disabled={!selected}
          onClick={() => onNext({ roofStyle: selected })}
        >
          Next
        </button>
      </div>

    </div>
  )
}