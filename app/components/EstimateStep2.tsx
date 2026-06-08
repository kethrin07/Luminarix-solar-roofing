'use client'

const STEPS = ['Address', 'Utilities', 'Solar Panels', 'Battery Storage', 'Contact Info', 'Cost Summary']

interface Props {
  navSteps: string[]
  activeStep: string
  address: string
  onBack: () => void
  onNext: () => void
}

export default function EstimateStep2({ address, onBack, onNext }: Props) {
  // Encode address for Google Maps embed
  const encodedAddress = encodeURIComponent(address)
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}&zoom=18&maptype=satellite`

  return (
    <div className="calc-page calc-page--map">

      {/* Sub-nav */}
      <div className="calc-subnav">
        <div className="calc-subnav-tab active">Solar Estimate</div>
        {STEPS.map((step, i) => (
          <div
            key={step}
            className={`calc-subnav-step${i === 0 ? ' active' : ''}`}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Full screen map */}
      <div className="calc-map-wrap">
        <iframe
          src={mapSrc}
          className="calc-map-iframe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Property location"
        />

        {/* Address label at bottom center */}
        <div className="calc-map-address-label">
          {address}
        </div>

        {/* Back button */}
        <button className="calc-map-back" onClick={onBack}>
          Back
        </button>

        {/* Next button */}
        <button className="calc-map-next" onClick={onNext}>
          Next
        </button>
      </div>

    </div>
  )
}