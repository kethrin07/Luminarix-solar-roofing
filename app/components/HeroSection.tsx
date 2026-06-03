// 'use client'

// export default function HeroSection() {
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
//       <div className="hero-overlay" />

//       {/* Hero content */}
//       <div className="hero-content">
//         <div className="hero-inner">

//           {/* Text + Play */}
//           <div className="hero-top-row">
//             <div className="hero-text">
//               <div className="margin-s">
//                 <h1 className="header-h weight-300 monument-extended" style={{ color: '#fff' }}>
//                   The Leading Solar &amp; Roofing Company in California -
//                 </h1>
//               </div>
//               <div className="margin-s">
//                 <div className="header-m weight-300" style={{ color: 'rgba(255,255,255,0.85)' }}>
//                   Sustainable Solar and Roofing Solutions Since 1974
//                 </div>
//               </div>
//             </div>

//             {/* Play button */}
            
//               <a href="https://www.youtube.com/watch?v=TpzN3qF0Zi0"
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
//           <div className="hero-impact-label">
//             <div className="pretitle" style={{ color: '#fff' }}>Our Impact</div>
//           </div>

//         </div>
//       </div>

//       {/* Impact stats bar — white, sits at the bottom */}
//       <div className="impact-bar">
//         <div className="impact-grid">
//           <div className="impact-item">
//             <img src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bd23049552aa60c5ca_C02%20Emissions%20Eliminated.svg" alt="" className="impact-icon" />
//             <div>
//               <div className="impact-num">256 <span className="impact-unit">K</span></div>
//               <div className="impact-label">CO2 Offset</div>
//             </div>
//           </div>
//           <div className="impact-item">
//             <img src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bef2460fbb5539e168_Lifetime%20Energy.svg" alt="" className="impact-icon" />
//             <div>
//               <div className="impact-num">90 <span className="impact-unit">MW+</span></div>
//               <div className="impact-label">Lifetime Energy</div>
//             </div>
//           </div>
//           <div className="impact-item">
//             <img src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bd66edf9757df050f1_Avg%20Utility%20Savings.svg" alt="" className="impact-icon" />
//             <div>
//               <div className="impact-num">$24.8 <span className="impact-unit">M</span></div>
//               <div className="impact-label">Saved to Date</div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </section>
//   )
// }

'use client'

export default function HeroSection() {
  return (
    <section className="section home-hero">

      {/* Background video */}
      <video
        className="hero-bg-video"
        autoPlay muted loop playsInline
        poster="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6410cce6b5fdaf0f9d1f04ab_optimized-poster-00001.jpg"
      >
        <source src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6410cce6b5fdaf0f9d1f04ab_optimized-transcode.mp4" type="video/mp4" />
        <source src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6410cce6b5fdaf0f9d1f04ab_optimized-transcode.webm" type="video/webm" />
      </video>

      {/* Dark base overlay */}
      <div className="hero-overlay" />

      {/* Orange tint overlay — gives the warm golden grade */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(120deg, rgba(200,90,20,0.55) 0%, rgba(180,70,10,0.3) 50%, rgba(10,25,35,0.2) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Hero content */}
      <div className="hero-content">
        <div className="hero-inner">

          {/* Text + Play */}
          <div className="hero-top-row">
            <div className="hero-text">
              <div className="margin-s">
                <h1 className="header-h weight-300 monument-extended" style={{ color: '#fff' }}>
                  The Leading Solar &amp; Roofing Company in California -
                </h1>
              </div>
              <div className="margin-s">
                <div className="header-m weight-300" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Sustainable Solar and Roofing Solutions Since 1974
                </div>
              </div>
            </div>

            {/* Play button */}
            
              <a href="https://www.youtube.com/watch?v=TpzN3qF0Zi0"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-play-btn"
            >
              <div className="hero-play-circle">
                <img
                  src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/626c6a18e14c396ceb5926f2_White%20Triangle.svg"
                  alt="Play"
                  style={{ width: 18, marginLeft: 3 }}
                />
              </div>
              <div className="pretitle" style={{ color: '#fff', marginTop: 8 }}>Play</div>
            </a>
          </div>

          {/* Our Impact label — inline-block so it only wraps the text */}
          <div
            className="hero-impact-label"
            style={{ display: 'inline-block', alignSelf: 'flex-start' }}
          >
            <div className="pretitle" style={{ color: '#fff' }}>Our Impact</div>
          </div>

        </div>
      </div>

      {/* Impact stats bar */}
      <div className="impact-bar">
        <div className="impact-grid">
          <div className="impact-item">
            <img src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bd23049552aa60c5ca_C02%20Emissions%20Eliminated.svg" alt="" className="impact-icon" />
            <div>
              <div className="impact-num">256 <span className="impact-unit">K</span></div>
              <div className="impact-label">CO2 Offset</div>
            </div>
          </div>
          <div className="impact-item">
            <img src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bef2460fbb5539e168_Lifetime%20Energy.svg" alt="" className="impact-icon" />
            <div>
              <div className="impact-num">90 <span className="impact-unit">MW+</span></div>
              <div className="impact-label">Lifetime Energy</div>
            </div>
          </div>
          <div className="impact-item">
            <img src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bd66edf9757df050f1_Avg%20Utility%20Savings.svg" alt="" className="impact-icon" />
            <div>
              <div className="impact-num">$24.8 <span className="impact-unit">M</span></div>
              <div className="impact-label">Saved to Date</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}