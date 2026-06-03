// 'use client'
// import { useEffect, useRef, useState } from 'react'

// export default function CtaBlock() {
//   const ref = useRef<HTMLElement>(null)
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true) },
//       { threshold: 0.3 }
//     )
//     if (ref.current) observer.observe(ref.current)
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section className="cta-block" ref={ref}>
//       <div className="cta-block-inner">

//         {/* Arrow */}
//         <div
//           className="cta-block-line"
//           style={{
//             opacity: visible ? 1 : 0,
//             transform: visible ? 'scaleY(1)' : 'scaleY(0)',
//             transformOrigin: 'top center',
//             transition: 'opacity 0.7s ease 0.1s, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s',
//           }}
//         >
//           <div className="cta-block-line-bar" />
//           <div className="cta-block-line-arrow">↓</div>
//         </div>

//         {/* Buttons */}
//         <div className="cta-block-btns">
          
//             <a href="/solar-panels-costs-calculator"
//             className="button-wrapper"
//             style={{
//               opacity: visible ? 1 : 0,
//               transform: visible ? 'translateY(0)' : 'translateY(30px)',
//               transition: 'opacity 0.7s ease 0.35s, transform 0.7s cubic-bezier(0.34,1.2,0.64,1) 0.35s',
//             }}
//           >
//             <div className="button sob bg-white"><div>Calculate Your Project</div></div>
//             <div className="button-shadow sob-shadow" />
//           </a>

//           <span
//             className="cta-block-or"
//             style={{
//               opacity: visible ? 1 : 0,
//               transition: 'opacity 0.6s ease 0.55s',
//             }}
//           >
//             or
//           </span>

          
//             <a href="https://calendly.com/ameco-solar-roofing/solar-consultation"
//             className="button-wrapper"
//             style={{
//               opacity: visible ? 1 : 0,
//               transform: visible ? 'translateY(0)' : 'translateY(30px)',
//               transition: 'opacity 0.7s ease 0.65s, transform 0.7s cubic-bezier(0.34,1.2,0.64,1) 0.65s',
//             }}
//           >
//             <div className="button tob bg-white"><div>Schedule Virtual Consultation</div></div>
//             <div className="button-shadow tob-shadow" />
//           </a>
//         </div>

//       </div>
//     </section>
//   )
// }
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

          <a href="https://calendly.com/ameco-solar-roofing/solar-consultation" className="button-wrapper cta-btn-right">
            <div className="button tob bg-white"><div>Schedule Virtual Consultation</div></div>
            <div className="button-shadow tob-shadow" />
          </a>
        </div>

      </div>
    </section>
  )
}