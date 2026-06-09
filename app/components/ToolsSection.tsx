// export default function ToolsSection() {
//   return (
//     <section className="section tools-section">
//       <div className="wrapper">

//         {/* ── NOT SURE WHERE TO START ── */}
//         <div className="margin-xxl tools-header">
//           <div className="tools-outline-heading">
//             Not Sure<br />Where<br />to Start?
//           </div>
//           <div className="tools-header-right">
//             <div className="tools-gotyou">We&apos;ve got you!</div>
//             <p className="tools-gotyou-body">
//               Use our estimate calculator to see how a solar panel system would look
//               on your roof and estimate your potential savings.
//             </p>
//           </div>
//         </div>

//         {/* ── ESTIMATE CALCULATOR CARD ── */}
//         <div className="margin-h">
//           <div className="tool-card tool-card--dark">

//             {/* Left: house image */}
//             <div className="tool-card-img tool-card-img--overflow">
//               <img
//                 src="/image1_house.png"
//                 alt="House with solar panels"
//                 className="tool-svg"
//               />
//             </div>

//             {/* Right: text */}
//             <div className="tool-card-content">
//               <div className="margin-s">
//                 <h2 className="tool-card-title">Estimate<br />Calculator</h2>
//               </div>
//               <div className="margin-l">
//                 <p className="tool-card-body">
//                   Get an estimate of your panel or roofing project in minutes — no obligation or commitment necessary.
//                 </p>
//               </div>
//               <div className="button-wrapper">
//                 <a href="/solar-panels-costs-calculator">
//                   <div className="button wob" style={{background:'transparent', borderColor:'rgba(255,255,255,0.5)', color:'#fff'}}>
//                     <div>Get An Estimate</div>
//                   </div>
//                   <div style={{background:'rgba(255,255,255,0.12)'}}/>
//                 </a>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* ── 3D HOME VISUALIZER CARD ── */}
//         <div className="tool-card tool-card--light">

//           {/* Left: text */}
//           <div className="tool-card-content">
//             <div className="margin-s">
//               <h2 className="tool-card-title tool-card-title--orange">
//                 3D Home<br />Visualizer
//               </h2>
//             </div>
//             <div className="margin-l">
//               <p className="tool-card-body tool-card-body--dark">
//                 In partnership with Hover, our custom 3D home builder allows you to accurately visualize your
//                 construction project even before a single brick is laid. Simply take pictures of your property
//                 and get a bird&apos;s eye view of how different roofing or solar installations will look on your
//                 residential or commercial property.
//               </p>
//             </div>
//             <div className="button-wrapper">
//               <a href="/home-visualizer">
//                 <div className="button sob bg-whitesmoke"><div>Visualize Your Home</div></div>
//                 <div/>
//               </a>
//             </div>
//           </div>

//           {/* Right: custom SVG house with measurements */}
//           <div className="tool-card-img">
//           <img
//             src="https://static.wixstatic.com/media/117722_97dc6b11b2924637b211b2f894a1df84~mv2.gif"
//             alt="Roofing calculator"
//             className="tool-image"
//             />
//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }
'use client'
import { useReveal } from '../hooks/useReveal'

export default function ToolsSection() {
  const headingRef = useReveal()
  const rightRef = useReveal()
  const estimateRef = useReveal()
  const visualizerRef = useReveal()

  return (
    <section className="section tools-section">
      <div className="wrapper">

        <div className="margin-xxl tools-header">
          <div ref={headingRef} className="tools-outline-heading reveal-left">
            Not Sure<br />Where<br />to Start?
          </div>
          <div ref={rightRef} className="tools-header-right reveal">
            <div className="tools-gotyou">We&apos;ve got you!</div>
            <p className="tools-gotyou-body">
              Use our estimate calculator to see how a solar panel system would look
              on your roof and estimate your potential savings.
            </p>
          </div>
        </div>

        <div ref={estimateRef} className="margin-h tools-estimate-card reveal">
          <div className="tool-card tool-card--dark">
            <div className="tool-card-img tool-card-img--overflow">
              <img src="/image1_house.png" alt="House with solar panels" className="tool-svg" />
            </div>
            <div className="tool-card-content">
              <div className="margin-s">
                <h2 className="tool-card-title">Estimate<br />Calculator</h2>
              </div>
              <div className="margin-l">
                <p className="tool-card-body">
                  Get an estimate of your panel or roofing project in minutes — no obligation or commitment necessary.
                </p>
              </div>
              <div className="button-wrapper">
                <a href="/solar-panels-costs-calculator">
                  <div className="button wob" style={{background:'transparent', borderColor:'rgba(255,255,255,0.5)', color:'#fff'}}>
                    <div>Get An Estimate</div>
                  </div>
                  <div style={{background:'rgba(255,255,255,0.12)'}}/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div ref={visualizerRef} className="tools-visualizer-card reveal">
          <div className="tool-card tool-card--light">
            <div className="tool-card-content">
              <div className="margin-s">
                <h2 className="tool-card-title tool-card-title--orange">
                  3D Home<br />Visualizer
                </h2>
              </div>
              <div className="margin-l">
                <p className="tool-card-body tool-card-body--dark">
                  In partnership with Hover, our custom 3D home builder allows you to accurately visualize your
                  construction project even before a single brick is laid. Simply take pictures of your property
                  and get a bird&apos;s eye view of how different roofing or solar installations will look on your
                  residential or commercial property.
                </p>
              </div>
              <div className="button-wrapper">
                <a  href="#"
  onClick={e => e.preventDefault()}>
                  <div className="button sob bg-whitesmoke"><div>Visualize Your Home</div></div>
                  <div/>
                </a>
              </div>
            </div>
            <div className="tool-card-img">
              <img
                src="https://static.wixstatic.com/media/117722_97dc6b11b2924637b211b2f894a1df84~mv2.gif"
                alt="Roofing calculator"
                className="tool-image"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}