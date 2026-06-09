'use client'

interface Props {
  navSteps: string[]
  activeStep: string
  address: string
  setAddress: (v: string) => void
  services: string[]
  setServices: (v: string[]) => void
  onNext: () => void
}

export default function EstimatorAddress({ navSteps, activeStep, address, setAddress, services, setServices, onNext }: Props) {

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
        {navSteps.map(step => (
          <div key={step} className={`calc-subnav-step${step === activeStep ? ' active' : ''}`}>
            {step}
          </div>
        ))}
      </div>

      {/* rest of your JSX stays exactly the same */}

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
          <img
            src="/Address.png"
            alt="House illustration"
            className="calc-illustration"
          />
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