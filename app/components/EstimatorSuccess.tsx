'use client'

interface Props {
  services: string[]
}

export default function EstimatorSuccess({ services }: Props) {
  const hasSolar = services.includes('solar')
  const hasRoofing = services.includes('roofing')

  return (
    <div className="success-page">
      <div className="success-inner">

        <h1 className="success-heading">
          Congratulations! Your proposal has been emailed to you!
        </h1>

        <div className="success-steps">

          <div className="success-step">
            <div className="success-step-num">1</div>
            <p className="success-step-text">
              Check your inbox for your custom estimate.
            </p>
          </div>

          <div className="success-step">
            <div className="success-step-num">2</div>
            <p className="success-step-text">
              Set up a meeting with one of our specialists to get started whenever you are ready!
            </p>
            {hasSolar && (
              <a href="#"
          onClick={e => e.preventDefault()} className="success-consult-btn">
                Schedule Your Solar Virtual Consultation
              </a>
            )}
            {hasRoofing && (
              <a href="#"
          onClick={e => e.preventDefault()} className="success-consult-btn">
                Schedule Your Roofing Virtual Consultation
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}