'use client'
import { useState } from 'react'

const BATTERIES = [
  { id: 'powerwall', name: 'Powerwall 3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNoQXkXqk_AE4atkC6Uo4uUuSMR7rqNtveQ&s' },
  { id: 'enphase', name: 'Enphase 10C', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZNcKJH9srZ84tPmelibruVQja8XrlLUtig&s' },
]

interface Props {
  navSteps: string[]
  activeStep: string
  onBack: () => void
  onNext: (batteries: Record<string, number>) => void
}

export default function EstimatorBattery({ navSteps, activeStep, onBack, onNext }: Props) {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    powerwall: 0,
    enphase: 0,
  })

  const adjust = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }))
  }

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

        {/* Left: form */}
        <div className="calc-form-col">
          <h1 className="calc-heading">
            Will you require battery storage?
          </h1>
          <p className="calc-subheading">
            A power storage system will help you store the sun&apos;s energy and use it during emergencies
            or to reduce your power consumption during peak hours.
          </p>

          {/* Battery cards */}
          <div className="calc-battery-grid">
            {BATTERIES.map(battery => (
              <div key={battery.id} className="calc-battery-card">
                {/* Image area */}
                <div className="calc-battery-img-wrap">
                  <img
                    src={battery.img}
                    alt={battery.name}
                    className="calc-battery-img"
                  />
                </div>

                {/* Name */}
                <div className="calc-battery-name">{battery.name}</div>

                {/* Quantity stepper */}
                <div className="calc-battery-stepper">
                  <button
                    className="calc-stepper-btn"
                    onClick={() => adjust(battery.id, -1)}
                    type="button"
                    disabled={quantities[battery.id] === 0}
                  >
                    −
                  </button>
                  <span className="calc-stepper-val">{quantities[battery.id]}</span>
                  <button
                    className="calc-stepper-btn"
                    onClick={() => adjust(battery.id, 1)}
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image — add your own */}
        <div className="calc-illus-col">
          <img
            src="/Battery.png"
            alt="Battery illustration"
            className="calc-illustration"
          />
        </div>

      </div>

      {/* Nav buttons — Next always active (battery is optional) */}
      <div className="calc-footer-bar calc-footer-bar--split">
        <button className="calc-back-btn" onClick={onBack}>Back</button>
        <button
          className="calc-next-btn calc-next-btn--active"
          onClick={() => onNext(quantities)}
        >
          Next
        </button>
      </div>

    </div>
  )
}