'use client'
import { useReveal } from '../hooks/useReveal'

export default function GreenEnergySection() {
  const headingRef = useReveal(0.2)
  const imgRef = useReveal(0.2)
  const textRef = useReveal(0.3)

  return (
    <section className="section green-energy-section">
      <div className="wrapper">

        {/* LUMINARIX SVG draw */}
        <div className="green-energy-heading reveal" ref={headingRef as any}>
          <div className="luminarix-text-wrap">
            LUMINARIX
          </div>
        </div>

        <div className="green-energy-grid">

          {/* Left: image drops in from above */}
          <div ref={imgRef as any} className="green-energy-img-wrap reveal-drop">
            <img
              src="/green-energy-illustration.png"
              alt="Solar panel installation"
              className="green-energy-img"
            />
          </div>

          {/* Right: text slides up */}
          <div ref={textRef as any} className="green-energy-text reveal">
            <div className="margin-l">
              <div className="green-energy-line" />
              <h2 className="pretitle text-color-secondary">
                <strong>Driving Green Energy Solutions</strong>
              </h2>
            </div>
            <div className="margin-l">
              <p className="header-xl-copy weight-300-copy acumin-pro-wide">
                Luminarix Solar &amp; Roofing is the top solar panel company for home and business energy
                solutions. For the past over 50 years we have been offering our customers renewable and
                sustainable energy solutions through our professional roofing and solar services. Frustrated
                by blackouts and spikes in energy rates? Count on us to take you solar.
              </p>
            </div>
            <div className="button-wrapper">
              <a href="/our-approach">
                <div className="button sob bg-white"><div><span>Learn More</span></div></div>
                <div />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}