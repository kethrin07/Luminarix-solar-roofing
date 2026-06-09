'use client'
import { useState } from 'react'

interface Props {
  navSteps: string[]
  activeStep: string
  onBack: () => void
  onNext: (data: {
    firstName: string
    lastName: string
    phone: string
    email: string
    hearAbout: string
    textConsent: boolean
    promoConsent: boolean
  }) => void
}

export default function EstimatorContactInfo({ navSteps, activeStep, onBack, onNext }: Props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [hearAbout, setHearAbout] = useState('')
  const [textConsent, setTextConsent] = useState(false)
  const [promoConsent, setPromoConsent] = useState(false)

  const canProceed = firstName && lastName && phone && email

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

          <h1 className="calc-heading">You&apos;re almost there!</h1>
          <p className="calc-subheading">
            Please finish up your cost estimate by filling out the contact information below.
          </p>

          {/* Name row */}
          <div className="calc-fields-row">
            <div className="calc-field calc-field--half">
              <label className="calc-label">First Name</label>
              <input
                type="text"
                className="calc-input"
                placeholder="Enter Your First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className="calc-field calc-field--half">
              <label className="calc-label">Last Name</label>
              <input
                type="text"
                className="calc-input"
                placeholder="Enter Your Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Phone + Email row */}
          <div className="calc-fields-row">
            <div className="calc-field calc-field--half">
              <label className="calc-label">Phone Number</label>
              <input
                type="tel"
                className="calc-input"
                placeholder="(343)-343-3434"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <div className="calc-field calc-field--half">
              <label className="calc-label">Email Address</label>
              <input
                type="email"
                className="calc-input"
                placeholder="Where can we send your estimate?"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* How did you hear */}
          <div className="calc-field">
            <label className="calc-label">How did you hear about us?</label>
            <div className="calc-radio-group">
              {['Referral', 'Social Media', 'Google Search'].map(opt => (
                <label key={opt} className="calc-radio-label">
                  <input
                    type="radio"
                    name="hearAbout"
                    value={opt}
                    checked={hearAbout === opt}
                    onChange={() => setHearAbout(opt)}
                    className="calc-radio"
                  />
                  <span className="calc-radio-custom" />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Consents */}
          <div className="calc-consents">
            <label className="calc-checkbox-label">
              <input
                type="checkbox"
                checked={textConsent}
                onChange={e => setTextConsent(e.target.checked)}
                className="calc-checkbox"
              />
              <span className="calc-checkbox-custom" />
              I agree to receive text messages about my project
            </label>
            <label className="calc-checkbox-label">
              <input
                type="checkbox"
                checked={promoConsent}
                onChange={e => setPromoConsent(e.target.checked)}
                className="calc-checkbox"
              />
              <span className="calc-checkbox-custom" />
              I agree to receive text messages with promotional offers
            </label>
          </div>

          {/* Legal text */}
          <p className="calc-legal">
            By submitting, you authorize PlanMySolar to reach out to you via calls or email for
            information about appointment setting and any other project needs. We will never share your
            personal information with third parties for marketing purposes. Messaging rates vary based on
            your project needs. You can opt out at any time. Message/data rates apply. Consent is not a
            condition of purchase.{' '}
            <a href="#"
              onClick={e => e.preventDefault()}className="calc-legal-link">Terms and conditions</a>
            {' '}|{' '}
            <a href="#"
              onClick={e => e.preventDefault()} className="calc-legal-link">Privacy Policy</a>
          </p>

        </div>

        {/* Right: illustration */}
        <div className="calc-illus-col">
          <img
            src="/Contact.png"
            alt="Sunlight illustration"
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
          onClick={() => onNext({ firstName, lastName, phone, email, hearAbout, textConsent, promoConsent })}
        >
          Next
        </button>
      </div>

    </div>
  )
}