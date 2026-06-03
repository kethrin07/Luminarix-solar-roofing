// 'use client'
// import { useEffect, useRef, useState } from 'react'

// function useCountUp(target: number, duration: number = 3000, start: boolean = false) {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     if (!start) return
//     let startTime: number | null = null
//     const step = (timestamp: number) => {
//       if (!startTime) startTime = timestamp
//       const progress = Math.min((timestamp - startTime) / duration, 1)
//       const eased = 1 - Math.pow(1 - progress, 3)
//       setCount(Math.floor(eased * target))
//       if (progress < 1) requestAnimationFrame(step)
//       else setCount(target)
//     }
//     requestAnimationFrame(step)
//   }, [start, target, duration])
//   return count
// }

// export default function HeroSection() {
//   const [textVisible, setTextVisible] = useState(false)
//   const [statsVisible, setStatsVisible] = useState(false)
//   const statsRef = useRef<HTMLDivElement>(null)

//   const co2 = useCountUp(256, 2200, statsVisible)
//   const mw = useCountUp(90, 1800, statsVisible)
//   const savings = useCountUp(248, 2400, statsVisible) // 24.8 = 248 / 10

//   useEffect(() => {
//     // Text slide-in on load
//     const t = setTimeout(() => setTextVisible(true), 100)

//     // Stats count-up when scrolled into view
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
//       { threshold: 0.3 }
//     )
//     if (statsRef.current) observer.observe(statsRef.current)

//     return () => {
//       clearTimeout(t)
//       observer.disconnect()
//     }
//   }, [])

//   return (
//     <section className="section home-hero">

//       {/* Background video */}
//       <video
//         className="hero-bg-video"
//         autoPlay muted loop playsInline
//         poster="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6410cce6b5fdaf0f9d1f04ab_optimized-poster-00001.jpg"
//       >
//         <source src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6410cce6b5fdaf0f9d1f04ab_optimized-transcode.mp4" type="video/mp4" />
//         <source src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6410cce6b5fdaf0f9d1f04ab_optimized-transcode.webm" type="video/webm" />
//       </video>

//       {/* Dark base overlay */}
//       <div className="hero-overlay" />

//       {/* Orange tint overlay */}
//       <div style={{
//         position: 'absolute', inset: 0, zIndex: 1,
//         background: 'linear-gradient(120deg, rgba(200,90,20,0.55) 0%, rgba(180,70,10,0.3) 50%, rgba(10,25,35,0.2) 100%)',
//         pointerEvents: 'none',
//       }} />

//       {/* Hero content */}
//       <div className="hero-content">
//         <div className="hero-inner">

//           {/* Text + Play — slides in from right */}
//           <div
//             className="hero-top-row"
//             style={{
//               transform: textVisible ? 'translateX(0)' : 'translateX(80px)',
//               opacity: textVisible ? 1 : 0,
//               transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.9s ease',
//             }}
//           >
//             <div className="hero-text">
//               <div className="margin-s">
//                 <h1 className="header-h weight-300 monument-extended" style={{ color: '#fff' }}>
//                   The Leading Solar &amp; Roofing Company in California -
//                 </h1>
//               </div>
//               <div className="margin-s">
//                 <div
//                   className="header-m weight-300"
//                   style={{
//                     color: 'rgba(255,255,255,0.85)',
//                     transform: textVisible ? 'translateX(0)' : 'translateX(80px)',
//                     opacity: textVisible ? 1 : 0,
//                     transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s, opacity 0.9s ease 0.15s',
//                   }}
//                 >
//                   Sustainable Solar and Roofing Solutions Since 1974
//                 </div>
//               </div>
//             </div>

//             {/* Play button */}
//             <a
//               href="https://www.youtube.com/watch?v=TpzN3qF0Zi0"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hero-play-btn"
//             >
//               <div className="hero-play-circle">
//                 <img
//                   src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/626c6a18e14c396ceb5926f2_White%20Triangle.svg"
//                   alt="Play"
//                   style={{ width: 18, marginLeft: 3 }}
//                 />
//               </div>
//               <div className="pretitle" style={{ color: '#fff', marginTop: 8 }}>Play</div>
//             </a>
//           </div>

//           {/* Our Impact label */}
//           <div
//             className="hero-impact-label"
//             style={{ display: 'inline-flex', alignSelf: 'flex-start' }}
//           >
//             <div className="pretitle" style={{ color: '#fff' }}>Our Impact</div>
//           </div>

//         </div>
//       </div>

//       {/* Impact stats bar */}
//       <div className="impact-bar" ref={statsRef}>
//         <div className="impact-grid">

//           <div className="impact-item" style={{
//             opacity: statsVisible ? 1 : 0,
//             transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
//             transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
//           }}>
//             <img src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bd23049552aa60c5ca_C02%20Emissions%20Eliminated.svg" alt="" className="impact-icon" />
//             <div>
//               <div className="impact-num">
//                 {co2} <span className="impact-unit">K</span>
//               </div>
//               <div className="impact-label">CO2 Offset</div>
//             </div>
//           </div>

//           <div className="impact-item" style={{
//             opacity: statsVisible ? 1 : 0,
//             transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
//             transition: 'opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s',
//           }}>
//             <img src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bef2460fbb5539e168_Lifetime%20Energy.svg" alt="" className="impact-icon" />
//             <div>
//               <div className="impact-num">
//                 {mw} <span className="impact-unit">MW+</span>
//               </div>
//               <div className="impact-label">Lifetime Energy</div>
//             </div>
//           </div>

//           <div className="impact-item" style={{
//             opacity: statsVisible ? 1 : 0,
//             transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
//             transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
//           }}>
//             <img src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bd66edf9757df050f1_Avg%20Utility%20Savings.svg" alt="" className="impact-icon" />
//             <div>
//               <div className="impact-num">
//                 ${(savings / 10).toFixed(1)} <span className="impact-unit">M</span>
//               </div>
//               <div className="impact-label">Saved to Date</div>
//             </div>
//           </div>

//         </div>
//       </div>

//     </section>
//   )
// }

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

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  const co2 = useCountUp(256, 2200, statsVisible)
  const mw = useCountUp(90, 1800, statsVisible)
  const savings = useCountUp(248, 2400, statsVisible)

  useEffect(() => {
    // Text slide-in — CSS class toggle
    const t = setTimeout(() => {
      sectionRef.current?.classList.add('hero-loaded')
    }, 100)

    // Stats count-up — needs useState so stays Method 1
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)

    return () => {
      clearTimeout(t)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="section home-hero" ref={sectionRef}>

      <video
        className="hero-bg-video"
        autoPlay muted loop playsInline
        poster="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6410cce6b5fdaf0f9d1f04ab_optimized-poster-00001.jpg"
      >
        <source src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6410cce6b5fdaf0f9d1f04ab_optimized-transcode.mp4" type="video/mp4" />
        <source src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6410cce6b5fdaf0f9d1f04ab_optimized-transcode.webm" type="video/webm" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-tint" />

      <div className="hero-content">
        <div className="hero-inner">

          <div className="hero-top-row">
            <div className="hero-text">
              <div className="margin-s">
                <h1 className="header-h weight-300 monument-extended hero-title-anim" style={{ color: '#fff' }}>
                  The Leading Solar &amp; Roofing Company in California -
                </h1>
              </div>
              <div className="margin-s">
                <div className="header-m weight-300 hero-subtitle-anim" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Sustainable Solar and Roofing Solutions Since 1974
                </div>
              </div>
            </div>

            <a
              href="https://www.youtube.com/watch?v=TpzN3qF0Zi0"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-play-btn"
            >
              <div className="hero-play-circle">
                <img src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/626c6a18e14c396ceb5926f2_White%20Triangle.svg" alt="Play" style={{ width: 18, marginLeft: 3 }} />
              </div>
              <div className="pretitle" style={{ color: '#fff', marginTop: 8 }}>Play</div>
            </a>
          </div>

          <div className="hero-impact-label" style={{ display: 'inline-flex', alignSelf: 'flex-start' }}>
            <div className="pretitle" style={{ color: '#fff' }}>Our Impact</div>
          </div>

        </div>
      </div>

      <div className="impact-bar" ref={statsRef}>
        <div className="impact-grid">
          <div className="impact-item">
            <img src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bd23049552aa60c5ca_C02%20Emissions%20Eliminated.svg" alt="" className="impact-icon" />
            <div>
              <div className="impact-num">{co2} <span className="impact-unit">K</span></div>
              <div className="impact-label">CO2 Offset</div>
            </div>
          </div>
          <div className="impact-item">
            <img src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bef2460fbb5539e168_Lifetime%20Energy.svg" alt="" className="impact-icon" />
            <div>
              <div className="impact-num">{mw} <span className="impact-unit">MW+</span></div>
              <div className="impact-label">Lifetime Energy</div>
            </div>
          </div>
          <div className="impact-item">
            <img src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bd66edf9757df050f1_Avg%20Utility%20Savings.svg" alt="" className="impact-icon" />
            <div>
              <div className="impact-num">${(savings / 10).toFixed(1)} <span className="impact-unit">M</span></div>
              <div className="impact-label">Saved to Date</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}