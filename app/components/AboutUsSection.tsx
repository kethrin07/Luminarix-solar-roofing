'use client'
import { useEffect, useRef } from 'react'

export default function AboutUsSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add('visible')
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-split" id="about" ref={ref}>

      <div className="about-split-img">
        <img
          src="/solar-installation.png"
          alt="Solar installer at work"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to left, rgba(200,90,20,0.55) 0%, rgba(180,70,10,0.25) 50%, rgba(160,60,0,0.05) 100%)',
          pointerEvents: 'none',
        }} />
      </div>

      <div className="about-split-content">
        <div className="about-pretitle">
          <h2 className="pretitle text-color-secondary">Get to Know Us</h2>
        </div>
        <div className="about-text">
          <p className="about-statement">
            By choosing PlanMySolar, you&apos;re not only investing in renewable energy
            solutions. You are also supporting a company committed to doing good for the planet by
            harnessing the power of clean and renewable energy.
          </p>
          <br />
        </div>
        <div className="about-cta-row about-buttons">
          <div className="button-wrapper">
            <a href="#"
              onClick={e => e.preventDefault()}>
              <div className="button sob bg-whitesmoke"><div>Learn More</div></div>
              <div/>
            </a>
          </div>
          <a href="#"
          onClick={e => e.preventDefault()} className="large-text-link">Join our Team</a>
        </div>
      </div>

    </section>
  )
}