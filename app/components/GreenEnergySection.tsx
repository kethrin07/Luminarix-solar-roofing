'use client'
import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function GreenEnergySection() {
  const svgRef = useRef<SVGTextElement>(null)
  const imgRef = useReveal(0.2)
  const textRef = useReveal(0.3)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const text = svgRef.current
          if (text) {
            text.style.strokeDashoffset = '0'
            text.style.opacity = '1'
          }
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (svgRef.current) observer.observe(svgRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section green-energy-section">
      <div className="wrapper">

        <div className="green-energy-heading">
          <svg
            viewBox="0 0 1100 180"
            xmlns="http://www.w3.org/2000/svg"
            className="luminarix-svg"
            aria-label="LUMINARIX"
          >
            <text
              ref={svgRef}
              x="50%"
              y="155"
              textAnchor="middle"
              className="luminarix-text"
            >
              LUMINARIX
            </text>
          </svg>
        </div>

        <div className="green-energy-grid">

          <div ref={imgRef as any} className="green-energy-img-wrap reveal-drop">
            <img
              src="/green-energy-illustration.png"
              alt="Solar panel installation"
              className="green-energy-img"
            />
          </div>

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