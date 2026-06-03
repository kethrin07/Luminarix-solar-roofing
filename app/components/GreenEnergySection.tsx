// 'use client'
// import { useEffect, useRef, useState } from 'react'

// export default function GreenEnergySection() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true) },
//       { threshold: 0.2 }
//     )
//     if (sectionRef.current) observer.observe(sectionRef.current)
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section className="section green-energy-section" ref={sectionRef}>
//       <div className="wrapper">

//         {/* Big LUMINARIX outline — drawn via SVG stroke animation */}
//         <div className="green-energy-heading" aria-hidden="true">
//           <svg
//             viewBox="0 0 1100 130"
//             xmlns="http://www.w3.org/2000/svg"
//             className="luminarix-svg"
//           >
//             <text
//               x="50%"
//               y="105"
//               textAnchor="middle"
//               className="luminarix-text"
//               style={{
//                 strokeDashoffset: visible ? 0 : 3000,
//                 opacity: visible ? 1 : 0,
//               }}
//             >
//               LUMINARIX
//             </text>
//           </svg>
//         </div>

//         <div className="green-energy-grid">

//           {/* ── LEFT: Animated SVG illustration ── */}
//           <div className="green-energy-img-wrap">
//             <svg
//               viewBox="0 0 520 560"
//               xmlns="http://www.w3.org/2000/svg"
//               className="green-energy-svg"
//               aria-hidden="true"
//             >
//               <defs>
//                 <radialGradient id="glow2" cx="50%" cy="60%" r="50%">
//                   <stop offset="0%" stopColor="#86b7cc" stopOpacity="0.35" />
//                   <stop offset="100%" stopColor="#86b7cc" stopOpacity="0" />
//                 </radialGradient>
//                 <radialGradient id="panelGlow2" cx="50%" cy="40%" r="60%">
//                   <stop offset="0%" stopColor="#ff7e2f" stopOpacity="0.18" />
//                   <stop offset="100%" stopColor="#ff7e2f" stopOpacity="0" />
//                 </radialGradient>
//               </defs>

//               {/* Glow */}
//               <ellipse cx="260" cy="340" rx="220" ry="160" fill="url(#glow2)" />

//               {/* Roof structure — always visible base */}
//               <g transform="translate(60, 180) rotate(-15, 200, 180)">
//                 <polygon points="60,200 240,120 380,160 200,240" fill="none" stroke="rgba(134,183,204,0.6)" strokeWidth="1.2"/>
//                 <polygon points="60,200 60,260 200,180 200,120" fill="none" stroke="rgba(134,183,204,0.4)" strokeWidth="1.2"/>
//                 <line x1="120" y1="180" x2="120" y2="240" stroke="rgba(134,183,204,0.5)" strokeWidth="1" opacity="0.5"/>
//                 <line x1="180" y1="155" x2="180" y2="215" stroke="rgba(134,183,204,0.5)" strokeWidth="1" opacity="0.5"/>
//                 <line x1="240" y1="138" x2="240" y2="198" stroke="rgba(134,183,204,0.5)" strokeWidth="1" opacity="0.5"/>
//                 <line x1="300" y1="148" x2="300" y2="208" stroke="rgba(134,183,204,0.5)" strokeWidth="1" opacity="0.5"/>
//                 <line x1="60" y1="200" x2="380" y2="160" stroke="rgba(134,183,204,0.4)" strokeWidth="0.8" opacity="0.4"/>
//                 <line x1="60" y1="220" x2="380" y2="180" stroke="rgba(134,183,204,0.4)" strokeWidth="0.8" opacity="0.4"/>
//               </g>

//               {/* Mounting bracket — drops in first (delay 0.3s) */}
//               <g style={{
//                 transform: visible ? 'translateY(0)' : 'translateY(-60px)',
//                 opacity: visible ? 1 : 0,
//                 transition: 'transform 1.2s cubic-bezier(0.34,1.2,0.64,1) 0.6s, opacity 0.8s ease 0.6s',
//               }}>
//                 <line x1="220" y1="340" x2="260" y2="400" stroke="#86b7cc" strokeWidth="2" opacity="0.7"/>
//                 <line x1="280" y1="340" x2="260" y2="400" stroke="#86b7cc" strokeWidth="2" opacity="0.7"/>
//                 <circle cx="260" cy="400" r="5" fill="#86b7cc" opacity="0.8"/>
//                 <line x1="200" y1="310" x2="320" y2="310" stroke="#86b7cc" strokeWidth="1.5" opacity="0.5"/>
//               </g>

//               {/* Solar panel — drops in second (delay 0.7s) */}
//               <g style={{
//                 transform: visible ? 'translateY(0)' : 'translateY(-120px)',
//                 opacity: visible ? 1 : 0,
//                 transition: 'transform 1.4s cubic-bezier(0.34,1.1,0.64,1) 1.2s, opacity 0.8s ease 1.2s',
//               }}>
//                 <g transform="translate(140, 60) rotate(-12)">
//                   <rect x="8" y="8" width="200" height="280" rx="6" fill="rgba(0,0,0,0.12)" />
//                   <rect x="0" y="0" width="200" height="280" rx="6" fill="#1a2f3a" />
//                   <rect x="0" y="0" width="200" height="280" rx="6" fill="none" stroke="#86b7cc" strokeWidth="2" />
//                   {[0,1,2,3].map(col =>
//                     [0,1,2,3,4,5,6].map(row => (
//                       <rect
//                         key={`${col}-${row}`}
//                         x={12 + col * 46}
//                         y={12 + row * 38}
//                         width="40"
//                         height="32"
//                         rx="3"
//                         fill={row < 3 ? '#3d1a00' : '#0f1f2a'}
//                         stroke="#86b7cc"
//                         strokeWidth="0.6"
//                         opacity="0.9"
//                       />
//                     ))
//                   )}
//                   <rect x="0" y="0" width="200" height="280" rx="6" fill="url(#panelGlow2)" opacity="0.6"/>
//                   <line x1="20" y1="10" x2="80" y2="270" stroke="rgba(255,255,255,0.06)" strokeWidth="30"/>
//                 </g>
//               </g>

//               {/* Sun rays */}
//               {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
//                 <line
//                   key={i}
//                   x1={430 + Math.cos(angle * Math.PI / 180) * 18}
//                   y1={80 + Math.sin(angle * Math.PI / 180) * 18}
//                   x2={430 + Math.cos(angle * Math.PI / 180) * 28}
//                   y2={80 + Math.sin(angle * Math.PI / 180) * 28}
//                   stroke="#ff7e2f"
//                   strokeWidth="1.5"
//                   opacity="0.7"
//                 />
//               ))}
//               <circle cx="430" cy="80" r="12" fill="none" stroke="#ff7e2f" strokeWidth="1.5" opacity="0.7"/>
//               <circle cx="430" cy="80" r="6" fill="#ff7e2f" opacity="0.5"/>

//               {/* Energy flow dots */}
//               <circle cx="310" cy="200" r="3" fill="#ff7e2f" opacity="0.8"/>
//               <circle cx="330" cy="215" r="2" fill="#ff7e2f" opacity="0.5"/>
//               <circle cx="350" cy="230" r="2" fill="#ff7e2f" opacity="0.3"/>

//               {/* Fig label */}
//               <text x="90" y="490" fill="#86b7cc" fontSize="11" fontFamily="monospace" opacity="0.7" letterSpacing="2">
//                 Fig 001.
//               </text>

//               {/* Connector line */}
//               <line x1="200" y1="240" x2="380" y2="290" stroke="#ff7e2f" strokeWidth="1" opacity="0.5"/>
//               <circle cx="200" cy="240" r="3" fill="#ff7e2f" opacity="0.6"/>
//             </svg>
//           </div>

//           {/* ── RIGHT: Text slides up from below ── */}
//           <div
//             className="green-energy-text"
//             style={{
//               transform: visible ? 'translateY(0)' : 'translateY(60px)',
//               opacity: visible ? 1 : 0,
//               transition: 'transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 1.8s, opacity 1s ease 1.8s',
//             }}
//           >
//             <div className="margin-l">
//               <div className="green-energy-line" />
//               <h2 className="pretitle text-color-secondary">
//                 <strong>Driving Green Energy Solutions</strong>
//               </h2>
//             </div>
//             <div className="margin-l">
//               <p className="header-xl-copy weight-300-copy acumin-pro-wide">
//                 Luminarix Solar &amp; Roofing is the top solar panel company for home and business energy
//                 solutions. For the past over 50 years we have been offering our customers renewable and
//                 sustainable energy solutions through our professional roofing and solar services. Frustrated
//                 by blackouts and spikes in energy rates? Count on us to take you solar.
//               </p>
//             </div>
//             <div className="button-wrapper">
//               <a href="/our-approach">
//                 <div className="button sob bg-white">
//                   <div><span>Learn More</span></div>
//                 </div>
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

export default function GreenEnergySection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add('visible')
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section green-energy-section" ref={ref}>
      <div className="wrapper">

        {/* LUMINARIX SVG draw */}
        <div className="green-energy-heading" aria-hidden="true">
          <svg viewBox="0 0 1100 200" xmlns="http://www.w3.org/2000/svg" className="luminarix-svg">
            <text x="50%" y="170" textAnchor="middle" className="luminarix-text">
              LUMINARIX
            </text>
          </svg>
        </div>

        <div className="green-energy-grid">

          {/* Left SVG illustration */}
          <div className="green-energy-img-wrap">
            <svg viewBox="0 0 520 560" xmlns="http://www.w3.org/2000/svg" className="green-energy-svg" aria-hidden="true">
              <defs>
                <radialGradient id="glow2" cx="50%" cy="60%" r="50%">
                  <stop offset="0%" stopColor="#86b7cc" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#86b7cc" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="panelGlow2" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#ff7e2f" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#ff7e2f" stopOpacity="0" />
                </radialGradient>
              </defs>
              <ellipse cx="260" cy="340" rx="220" ry="160" fill="url(#glow2)" />
              <g transform="translate(60, 180) rotate(-15, 200, 180)">
                <polygon points="60,200 240,120 380,160 200,240" fill="none" stroke="rgba(134,183,204,0.6)" strokeWidth="1.2"/>
                <polygon points="60,200 60,260 200,180 200,120" fill="none" stroke="rgba(134,183,204,0.4)" strokeWidth="1.2"/>
                <line x1="120" y1="180" x2="120" y2="240" stroke="rgba(134,183,204,0.5)" strokeWidth="1" opacity="0.5"/>
                <line x1="180" y1="155" x2="180" y2="215" stroke="rgba(134,183,204,0.5)" strokeWidth="1" opacity="0.5"/>
                <line x1="240" y1="138" x2="240" y2="198" stroke="rgba(134,183,204,0.5)" strokeWidth="1" opacity="0.5"/>
                <line x1="300" y1="148" x2="300" y2="208" stroke="rgba(134,183,204,0.5)" strokeWidth="1" opacity="0.5"/>
                <line x1="60" y1="200" x2="380" y2="160" stroke="rgba(134,183,204,0.4)" strokeWidth="0.8" opacity="0.4"/>
                <line x1="60" y1="220" x2="380" y2="180" stroke="rgba(134,183,204,0.4)" strokeWidth="0.8" opacity="0.4"/>
              </g>
              {/* Bracket — class controlled */}
              <g className="ge-bracket">
                <line x1="220" y1="340" x2="260" y2="400" stroke="#86b7cc" strokeWidth="2" opacity="0.7"/>
                <line x1="280" y1="340" x2="260" y2="400" stroke="#86b7cc" strokeWidth="2" opacity="0.7"/>
                <circle cx="260" cy="400" r="5" fill="#86b7cc" opacity="0.8"/>
                <line x1="200" y1="310" x2="320" y2="310" stroke="#86b7cc" strokeWidth="1.5" opacity="0.5"/>
              </g>
              {/* Panel — class controlled */}
              <g className="ge-panel">
                <g transform="translate(140, 60) rotate(-12)">
                  <rect x="8" y="8" width="200" height="280" rx="6" fill="rgba(0,0,0,0.12)" />
                  <rect x="0" y="0" width="200" height="280" rx="6" fill="#1a2f3a" />
                  <rect x="0" y="0" width="200" height="280" rx="6" fill="none" stroke="#86b7cc" strokeWidth="2" />
                  {[0,1,2,3].map(col =>
                    [0,1,2,3,4,5,6].map(row => (
                      <rect key={`${col}-${row}`} x={12+col*46} y={12+row*38} width="40" height="32" rx="3"
                        fill={row < 3 ? '#3d1a00' : '#0f1f2a'} stroke="#86b7cc" strokeWidth="0.6" opacity="0.9"/>
                    ))
                  )}
                  <rect x="0" y="0" width="200" height="280" rx="6" fill="url(#panelGlow2)" opacity="0.6"/>
                </g>
              </g>
              {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
                <line key={i}
                  x1={430 + Math.cos(angle * Math.PI / 180) * 18}
                  y1={80 + Math.sin(angle * Math.PI / 180) * 18}
                  x2={430 + Math.cos(angle * Math.PI / 180) * 28}
                  y2={80 + Math.sin(angle * Math.PI / 180) * 28}
                  stroke="#ff7e2f" strokeWidth="1.5" opacity="0.7"
                />
              ))}
              <circle cx="430" cy="80" r="12" fill="none" stroke="#ff7e2f" strokeWidth="1.5" opacity="0.7"/>
              <circle cx="430" cy="80" r="6" fill="#ff7e2f" opacity="0.5"/>
              <text x="90" y="490" fill="#86b7cc" fontSize="11" fontFamily="monospace" opacity="0.7" letterSpacing="2">Fig 001.</text>
              <line x1="200" y1="240" x2="380" y2="290" stroke="#ff7e2f" strokeWidth="1" opacity="0.5"/>
              <circle cx="200" cy="240" r="3" fill="#ff7e2f" opacity="0.6"/>
            </svg>
          </div>

          {/* Right text */}
          <div className="green-energy-text ge-text">
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