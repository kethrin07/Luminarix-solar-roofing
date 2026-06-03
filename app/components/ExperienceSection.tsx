'use client'
import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const count = useCountUp(7000, 2500, visible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const LOGOS = [
    { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/68530ed940667cbcf6294973_1.svg' },
    { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69d65243cbf711fc949bdde3_Group%2010%20(1).png' },
    { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69d6369b153b59f1e045a3a3_T3_SolarRoof_CertifiedInstaller_B%201.png', wide: true },
    { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6853229eb7611ca37c7d4761_6%20(1).png' },
    { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/68532276e2cb2304696f13aa_5.png' },
    { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69d3eb51ccfc2b94f60e4a2a_Untitled-design-2-1024x1024%201%20(1).png' },
    { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6a06c31e78fcd323bb3c0ae5_RCSP_2026_GOLD%201.png' },
    { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/685321efbac9b840b2029e9c_4.png' },
    { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/685322b97fd1d7972c3f3fa9_7.png' },
    { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69d6389b4bb30d2e31bad5ba_T3_Powerwall-Certified-Installer_B-scaled%201.png', wide: true },
    { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/68e4a57c5ec2a3babad0f41c_Frame%2014.png' },
    { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69eb38b7b1ad520c7336e5b8_Emphase-logo%201.png' },
  ]

  return (
    <section className="section exp-section" ref={ref}>
      <div className="wrapper">

        <div className={`exp-pretitle${visible ? ' exp-visible' : ''}`}>
          <h2 className="pretitle text-color-secondary">Our Experience</h2>
        </div>

        <div className={`exp-counter-row${visible ? ' exp-visible' : ''}`}>
          <div className="exp-big-number">
            {count.toLocaleString()}+
          </div>
          <div className="exp-counter-label">
            <strong>Solar Systems</strong> Installed
          </div>
        </div>

        <div className={`exp-logo-grid${visible ? ' exp-visible' : ''}`}>
          {LOGOS.map((logo, i) => (
            <div key={i} className="exp-logo-cell">
              <img
                src={logo.src}
                alt=""
                loading="lazy"
                className={`exp-logo-img${logo.wide ? ' exp-logo-img--wide' : ''}`}
              />
            </div>
          ))}
        </div>

        <div className={`exp-body-text${visible ? ' exp-visible' : ''}`}>
          <p>
            What sets us apart from other solar panel installation companies is our focus on
            sustainability, quality, and customer satisfaction. Luminarix Solar &amp; Roofing has
            been at the forefront of providing quality{' '}
            <a href="/solutions/solar" style={{ textDecoration: 'underline', color: 'inherit' }}>
              solar panel services
            </a>
            , helping thousands of homes and businesses save on their energy bills while reducing
            their carbon footprint.
          </p>
          <br />
          <p>
            As a Certified Solar PROtect Installer through the Owens Corning Solar PROtect Roofing
            Program, we&apos;re proud to offer unmatched peace of mind. Our team is specially trained
            to install solar mounts without compromising the integrity of your roofing system, backed
            by the Owens Corning roofing warranty.
          </p>
          <br />
        </div>

        <div className={`exp-cta${visible ? ' exp-visible' : ''}`}>
          <div className="button-wrapper">
            <a href="/our-work">
              <div className="button sob bg-white"><div>Browse Our Work</div></div>
              <div className="button-shadow sob-shadow" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}