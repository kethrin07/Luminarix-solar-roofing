'use client'
import { useEffect, useRef } from 'react'

export default function CtaBlock() {
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
    <section className="cta-block" ref={ref}>
      <div className="cta-block-inner">

        {/* Arrow sits above, centered on page */}
        <div className="cta-line-anim">
          <div className="cta-arrow-line" />
        </div>

        {/* Buttons row with "or" between them */}
        <div className="cta-block-btns">
          <a href="/solar-panels-costs-calculator" className="button-wrapper cta-btn-left">
            <div className="button sob bg-white"><div>Calculate Your Project</div></div>
            <div className="button-shadow sob-shadow" />
          </a>

          <span className="cta-block-or cta-or-anim">or</span>

          <a href="#"
          onClick={e => e.preventDefault()} className="button-wrapper cta-btn-right">
            <div className="button tob bg-white"><div>Schedule Virtual Consultation</div></div>
            <div className="button-shadow tob-shadow" />
          </a>
        </div>

      </div>
    </section>
  )
}