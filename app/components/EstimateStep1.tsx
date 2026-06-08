'use client'

const STEPS = ['Address', 'Utilities', 'Solar Panels', 'Battery Storage', 'Contact Info', 'Cost Summary']


interface Props {
  navSteps: string[]
  activeStep: string
  address: string
  setAddress: (v: string) => void
  services: string[]
  setServices: (v: string[]) => void
  onNext: () => void
}

export default function EstimateStep1({ address, setAddress, services, setServices, onNext }: Props) {

  const toggle = (val: string) => {
    setServices(
      services.includes(val) ? services.filter(v => v !== val) : [...services, val]
    )
  }

  const canProceed = address.trim().length > 0 && services.length > 0

  return (
    <div className="calc-page">

      {/* Sub-nav */}
      <div className="calc-subnav">
        <div className="calc-subnav-tab active">Solar Estimate</div>
        {STEPS.map((step, i) => (
          <div key={step} className={`calc-subnav-step${i === 0 ? ' active' : ''}`}>
            {step}
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="calc-body">

        {/* Left: form */}
        <div className="calc-form-col">
          <h1 className="calc-heading">
            Energy efficiency starts<br />from the top, down
          </h1>
          <p className="calc-subheading">
            Get started on your path to energy independence by filling out the information below...
          </p>

          <div className="calc-field">
            <label className="calc-label">Property Address</label>
            <input
              type="text"
              className="calc-input"
              placeholder="What is the address of your project?"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>

          <p className="calc-choice-label">
            How may we help you? Choose one or more options below!
          </p>
          <div className="calc-options">
            <button
              className={`calc-option${services.includes('solar') ? ' calc-option--active' : ''}`}
              onClick={() => toggle('solar')}
              type="button"
            >
              <div className="calc-option-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.8"/>
                  <line x1="16" y1="1" x2="16" y2="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="16" y1="28" x2="16" y2="31" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="1" y1="16" x2="4" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="28" y1="16" x2="31" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="24.95" y1="24.95" x2="27.07" y2="27.07" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="27.07" y1="4.93" x2="24.95" y2="7.05" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="7.05" y1="24.95" x2="4.93" y2="27.07" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              Solar
            </button>
            <button
              className={`calc-option${services.includes('roofing') ? ' calc-option--active calc-option--teal' : ''}`}
              onClick={() => toggle('roofing')}
              type="button"
            >
              <div className="calc-option-icon">
                <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 14L16 2L31 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 11V26H27V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="12" y="18" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              Roofing
            </button>
          </div>
        </div>

        {/* Right: illustration */}
        <div className="calc-illus-col">
          <svg viewBox="0 0 520 500" xmlns="http://www.w3.org/2000/svg" className="calc-illustration">
            <defs>
              <style>{`
                .ci-panel { fill: #ff7e2f; opacity: 0.85; }
                .ci-panel-dark { fill: #e06010; opacity: 0.9; }
                .ci-house { fill: none; stroke: #86b7cc; stroke-width: 1.8; }
                .ci-fill-light { fill: #e8f4f9; opacity: 0.6; }
                .ci-fill-mid { fill: #c8dde8; opacity: 0.5; }
                .ci-fig { fill: #86b7cc; opacity: 0.5; font-family: monospace; font-size: 9px; }
              `}</style>
            </defs>
            <text x="280" y="95" className="ci-fig">Fig A.</text>
            <text x="218" y="335" className="ci-fig">Fig B.</text>
            <text x="295" y="325" className="ci-fig">Fig C.</text>
            <polygon points="130,220 260,140 390,220" className="ci-fill-light"/>
            <polygon points="130,220 260,140 390,220" className="ci-house"/>
            <line x1="260" y1="140" x2="260" y2="320" stroke="#86b7cc" strokeWidth="1" strokeOpacity="0.4"/>
            <polygon points="130,220 130,340 260,420 260,320 130,220" className="ci-fill-mid"/>
            <polygon points="130,220 130,340 260,420 260,320 130,220" className="ci-house"/>
            <polygon points="390,220 390,340 260,420 260,320 390,220" className="ci-house" fill="#e8f4f9" fillOpacity="0.3"/>
            <rect x="148" y="255" width="30" height="24" rx="1" className="ci-house" fill="#a8c8d8" fillOpacity="0.4"/>
            <rect x="190" y="265" width="30" height="24" rx="1" className="ci-house" fill="#a8c8d8" fillOpacity="0.4"/>
            <rect x="230" y="370" width="24" height="36" rx="1" className="ci-house"/>
            <rect x="290" y="255" width="30" height="24" rx="1" className="ci-house" fill="#a8c8d8" fillOpacity="0.3"/>
            <rect x="340" y="265" width="30" height="24" rx="1" className="ci-house" fill="#a8c8d8" fillOpacity="0.3"/>
            <g transform="translate(155, 152) rotate(-1)">
              <rect x="0" y="0" width="34" height="22" rx="2" className="ci-panel"/>
              <rect x="38" y="0" width="34" height="22" rx="2" className="ci-panel"/>
              <rect x="76" y="0" width="34" height="22" rx="2" className="ci-panel"/>
              <rect x="0" y="26" width="34" height="22" rx="2" className="ci-panel-dark"/>
              <rect x="38" y="26" width="34" height="22" rx="2" className="ci-panel-dark"/>
              <rect x="76" y="26" width="34" height="22" rx="2" className="ci-panel-dark"/>
              <rect x="0" y="52" width="34" height="22" rx="2" className="ci-panel"/>
              <rect x="38" y="52" width="34" height="22" rx="2" className="ci-panel"/>
              <rect x="76" y="52" width="34" height="22" rx="2" className="ci-panel"/>
            </g>
            <ellipse cx="100" cy="295" rx="28" ry="36" fill="#d8edf5" opacity="0.5" stroke="#86b7cc" strokeWidth="1.5"/>
            <ellipse cx="100" cy="272" rx="20" ry="26" fill="#e0f0f8" opacity="0.5" stroke="#86b7cc" strokeWidth="1.2"/>
            <line x1="100" y1="331" x2="100" y2="360" stroke="#86b7cc" strokeWidth="1.5"/>
            <polygon points="80,300 80,380 160,425 160,345" fill="#d0e8f2" opacity="0.4" stroke="#86b7cc" strokeWidth="1.5"/>
            <g transform="translate(290, 360)">
              <rect x="0" y="20" width="120" height="40" rx="6" fill="#d8edf5" opacity="0.5" stroke="#86b7cc" strokeWidth="1.5"/>
              <rect x="15" y="8" width="85" height="30" rx="5" fill="#e4f2f8" opacity="0.5" stroke="#86b7cc" strokeWidth="1.5"/>
              <circle cx="22" cy="62" r="10" fill="none" stroke="#86b7cc" strokeWidth="1.5"/>
              <circle cx="22" cy="62" r="4" fill="#86b7cc" opacity="0.4"/>
              <circle cx="98" cy="62" r="10" fill="none" stroke="#86b7cc" strokeWidth="1.5"/>
              <circle cx="98" cy="62" r="4" fill="#86b7cc" opacity="0.4"/>
            </g>
            <line x1="60" y1="435" x2="460" y2="435" stroke="#86b7cc" strokeWidth="0.8" opacity="0.3"/>
            <line x1="260" y1="140" x2="295" y2="88" stroke="#86b7cc" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.4"/>
            <line x1="155" y1="340" x2="225" y2="328" stroke="#86b7cc" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.4"/>
            <line x1="350" y1="390" x2="300" y2="318" stroke="#86b7cc" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.4"/>
          </svg>
        </div>

      </div>

      {/* Next button */}
      <div className="calc-footer-bar">
        <button
          className={`calc-next-btn${canProceed ? ' calc-next-btn--active' : ''}`}
          disabled={!canProceed}
          onClick={onNext}
        >
          Next
        </button>
      </div>

    </div>
  )
}