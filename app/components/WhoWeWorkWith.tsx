'use client'
import { useEffect, useRef } from 'react'

export default function WhoWeWorkWith() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add('visible')
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section wwww-section" id="who-we-work-with" ref={ref}>
      <div className="wrapper">

        <div className="margin-m wwww-pretitle">
          <h2 className="pretitle">
            <span className="text-color-secondary">
              <strong>Driving the Change to A Clean Future</strong>
            </span>
          </h2>
        </div>

        <div className="margin-xxl wwww-statement-wrap">
          <p className="wwww-statement">
            Join the growing community of environmentally responsible homeowners and businesses
            by choosing PlanMySolar for your energy solutions. We provide expert
            guidance and one-on-one consultations to make the switch to solar seamless and hassle free.
          </p>
        </div>

        <div className="wwww-grid">
          <a  href="#"
  onClick={e => e.preventDefault()} className="wwww-card wwww-card--left">
            <div className="wwww-card-icon-wrap">
              <img
                src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6260108933e4cc29d1a0b928_Ameco-Residential.svg"
                alt="Residential house"
                className="wwww-card-icon"
              />
            </div>
            <div className="wwww-card-body">
              <h3 className="wwww-card-title">Residential<br />Customers</h3>
              <p className="wwww-card-text">
                We&apos;re the solar experts trusted by thousands of California homeowners. With nearly
                50 years of experience in solar installations we&apos;ve helped numerous happy Californians
                save money on their energy bills.
              </p>
              <div className="wwww-card-cta">
                <span>Learn More</span>
                <span className="wwww-card-arrow">→</span>
              </div>
            </div>
          </a>

          <a  href="#"
  onClick={e => e.preventDefault()} className="wwww-card wwww-card--right">
            <div className="wwww-card-icon-wrap">
              <img
                src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/626010890d256660baa42d98_Ameco-Commercial.svg"
                alt="Commercial building"
                className="wwww-card-icon"
              />
            </div>
            <div className="wwww-card-body">
              <h3 className="wwww-card-title">Commercial<br />Customers</h3>
              <p className="wwww-card-text">
                Our expert team of solar system installers and roofing contractors is dedicated to
                providing sustainable energy solutions to businesses while staying eco-conscious.
                We are the go-to people for the latest in solar technology.
              </p>
              <div className="wwww-card-cta">
                <span>Learn More</span>
                <span className="wwww-card-arrow">→</span>
              </div>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}