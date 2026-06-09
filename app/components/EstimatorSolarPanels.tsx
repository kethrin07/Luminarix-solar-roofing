'use client'
import { useState } from 'react'

const PANELS = [
  { id: 'hyundai', name: 'Hyundai 440', watts: 440, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyATX0E0ld5lvQN1w1YTc0yLmN_XEmv-41Q&s' },
  { id: 'hanwha', name: 'Hanwha 430', watts: 430, img: 'https://cdn4.volusion.store/ylaas-yzxhw/v/vspfiles/photos/HQC-430-QTRON-BKM-G2-HPLUS-DCA-2T.png?v-cache=1749552260' },
  { id: 'rec', name: 'REC 460', watts: 460, img: 'https://www.solarelectricsupply.com/media/catalog/product/cache/a7b04c369a11f1759a10135521241284/r/e/rec-alpha-pure-rx-460w-solar-module.webp' },
]

interface Props {
  navSteps: string[]
  activeStep: string
  bill: string
  onBack: () => void
  onNext: (panel: string) => void
}

export default function EstimatorSolarPanels({ navSteps, activeStep, bill, onBack, onNext }: Props) {
  const [selected, setSelected] = useState('')

  // Calculate system size from monthly bill
  // avg CA electricity rate ~$0.25/kWh, avg 5.5 sun hours/day
  const monthlyBill = parseFloat(bill) || 150
  const monthlyKwh = monthlyBill / 0.25
  const systemKw = (monthlyKwh / 30 / 5.5 / 0.8).toFixed(1)

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
            Based on your average monthly utility bill,<br />
            we&apos;ve estimated your system size at:
          </h1>
          <div className="calc-system-size">{systemKw} kW</div>

          <p className="calc-subheading">
            Solar panels vary in efficiency, durability, and price. Choose below from our selection of top solar panels.
          </p>

          {/* Panel cards */}
          <div className="calc-panel-grid">
            {PANELS.map(panel => (
              <button
                key={panel.id}
                className={`calc-panel-card${selected === panel.id ? ' calc-panel-card--active' : ''}`}
                onClick={() => setSelected(panel.id)}
                type="button"
              >
                <div className="calc-panel-name-top">{panel.name}</div>
                <div className="calc-panel-img-wrap">
                  <img src={panel.img} alt={panel.name} className="calc-panel-img" />
                </div>
                <div className="calc-panel-name-bottom">{panel.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: image — add your own */}
        <div className="calc-illus-col">
          <img
            src="/SolarPanels.png"
            alt="Solar Panel illustration"
            className="calc-illustration"
          />
        </div>

      </div>

      {/* Nav buttons */}
      <div className="calc-footer-bar calc-footer-bar--split">
        <button className="calc-back-btn" onClick={onBack}>Back</button>
        <button
          className={`calc-next-btn${selected ? ' calc-next-btn--active' : ''}`}
          disabled={!selected}
          onClick={() => onNext(selected)}
        >
          Next
        </button>
      </div>

    </div>
  )
}