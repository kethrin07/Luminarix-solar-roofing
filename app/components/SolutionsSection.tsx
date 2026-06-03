// 'use client'
// import { useEffect, useRef, useState } from 'react'

// export default function SolutionsSection() {
//   const ref = useRef<HTMLElement>(null)
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true) },
//       { threshold: 0.15 }
//     )
//     if (ref.current) observer.observe(ref.current)
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section
//       className="section solutions"
//       ref={ref}
//       style={{
//         background: visible
//           ? undefined
//           : 'linear-gradient(160deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)',
//         transition: 'background 1.4s ease',
//       }}
//     >
//       <div className="wrapper">
//         <div
//           className="solutions-grid"
//           style={{
//             transition: 'background 1.4s ease',
//           }}
//         >

//           {/* Solar */}
//           <div
//             className="solution-card"
//             style={{
//               opacity: visible ? 1 : 0,
//               transform: visible ? 'translateY(0)' : 'translateY(60px)',
//               transition: 'opacity 0.9s ease 0.4s, transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94) 0.4s',
//             }}
//           >
//             <div className="solution-img-wrap">
//               <img
//                 src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625f4169c7cd3284b6d076ea_Landing-SolarSolutions.svg"
//                 alt="Graphic of solar panels."
//                 className="solution-img"
//               />
//             </div>
//             <div className="margin-l">
//               <div className="solar-solutions">Solar<br />Solutions</div>
//             </div>
//             <div className="margin-l">
//               <p>
//                 We understand going solar can be complicated. That&apos;s where we come in. From designing your{' '}
//                 <strong>solar system</strong> to acquiring permits and getting your{' '}
//                 <strong>solar panel installation</strong> rolling, Luminarix Solar &amp; Roofing has you covered!
//               </p>
//             </div>
//             <div className="button-wrapper">
//               <a href="/solutions/solar">
//                 <div className="button sob bg-primary"><div>Learn More</div></div>
//                 <div />
//               </a>
//             </div>
//           </div>

//           {/* Roofing */}
//           <div
//             className="solution-card solution-card--right"
//             style={{
//               opacity: visible ? 1 : 0,
//               transform: visible ? 'translateY(0)' : 'translateY(60px)',
//               transition: 'opacity 0.9s ease 0.65s, transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94) 0.65s',
//             }}
//           >
//             <div className="solution-img-wrap">
//               <img
//                 src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625f417e5424f164c4204c0f_Landing-RoofingSolutions.svg"
//                 alt="Graphic of roofing tiles."
//                 className="solution-img"
//               />
//             </div>
//             <div className="margin-l">
//               <div className="roofing-solutions">Roofing<br />Solutions</div>
//             </div>
//             <div className="margin-l">
//               <p>
//                 By upgrading to a quality roofing installation, you ensure your home is energy-efficient and
//                 weatherproof. In other words, clean, green, and smart. And we customize our solutions to fit
//                 your home&apos;s unique energy profile.
//               </p>
//             </div>
//             <div className="button-wrapper">
//               <a href="/solutions/roofing">
//                 <div className="button tob bg-primary"><div>Learn More</div></div>
//                 <div />
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

'use client'
import { useEffect, useRef } from 'react'

export default function SolutionsSection() {
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
    <section className="section solutions" ref={ref}>
      <div className="wrapper">
        <div className="solutions-grid">

          <div className="solution-card sol-card--left">
            <div className="solution-img-wrap">
              <img
                src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625f4169c7cd3284b6d076ea_Landing-SolarSolutions.svg"
                alt="Graphic of solar panels."
                className="solution-img"
              />
            </div>
            <div className="margin-l">
              <div className="solar-solutions">Solar<br />Solutions</div>
            </div>
            <div className="margin-l">
              <p>
                We understand going solar can be complicated. That&apos;s where we come in. From designing your{' '}
                <strong>solar system</strong> to acquiring permits and getting your{' '}
                <strong>solar panel installation</strong> {' '} rolling, Luminarix Solar &amp; Roofing has you covered!
              </p>
            </div>
            <div className="button-wrapper">
              <a href="/solutions/solar">
                <div className="button sob bg-primary"><div>Learn More</div></div>
                <div/>
              </a>
            </div>
          </div>

          <div className="solution-card solution-card--right sol-card--right">
            <div className="solution-img-wrap">
              <img
                src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625f417e5424f164c4204c0f_Landing-RoofingSolutions.svg"
                alt="Graphic of roofing tiles."
                className="solution-img"
              />
            </div>
            <div className="margin-l">
              <div className="roofing-solutions">Roofing<br />Solutions</div>
            </div>
            <div className="margin-l">
              <p>
                By upgrading to a quality roofing installation, you ensure your home is energy-efficient and
                weatherproof. In other words, clean, green, and smart. And we customize our solutions to fit
                your home&apos;s unique energy profile.
              </p>
            </div>
            <div className="button-wrapper">
              <a href="/solutions/roofing">
                <div className="button tob bg-primary"><div>Learn More</div></div>
                <div />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}