export default function ToolsSection() {
  return (
    <section className="section tools-section">
      <div className="wrapper">

        {/* ── NOT SURE WHERE TO START ── */}
        <div className="margin-xxl tools-header">
          <div className="tools-outline-heading">
            Not Sure<br />Where<br />to Start?
          </div>
          <div className="tools-header-right">
            <div className="tools-gotyou">We&apos;ve got you!</div>
            <p className="tools-gotyou-body">
              Use our estimate calculator to see how a solar panel system would look
              on your roof and estimate your potential savings.
            </p>
          </div>
        </div>

        {/* ── ESTIMATE CALCULATOR CARD ── */}
        <div className="margin-h">
          <div className="tool-card tool-card--dark">

            {/* Left: custom SVG illustration — house with solar panels */}
            <div className="tool-card-img tool-card-img--overflow">
              <svg viewBox="0 0 480 420" xmlns="http://www.w3.org/2000/svg" className="tool-svg">
                <defs>
                  <radialGradient id="houseGlow" cx="50%" cy="60%" r="50%">
                    <stop offset="0%" stopColor="#86b7cc" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#86b7cc" stopOpacity="0"/>
                  </radialGradient>
                </defs>

                {/* Glow */}
                <ellipse cx="240" cy="320" rx="180" ry="80" fill="url(#houseGlow)"/>

                {/* House body — isometric */}
                {/* Front face */}
                <polygon points="120,260 240,200 360,260 360,360 120,360" fill="none" stroke="rgba(134,183,204,0.6)" strokeWidth="1.2"/>
                {/* Left face shading */}
                <polygon points="60,300 120,260 120,360 60,400" fill="none" stroke="rgba(134,183,204,0.4)" strokeWidth="1.2"/>
                {/* Roof left */}
                <polygon points="60,300 120,260 240,200 180,240" fill="none" stroke="rgba(134,183,204,0.5)" strokeWidth="1.2"/>
                {/* Roof right */}
                <polygon points="240,200 360,260 300,220 240,200" fill="none" stroke="rgba(134,183,204,0.5)" strokeWidth="1.2"/>

                {/* Windows — front */}
                <rect x="150" y="270" width="40" height="35" rx="2" fill="none" stroke="rgba(134,183,204,0.5)" strokeWidth="1"/>
                <line x1="170" y1="270" x2="170" y2="305" stroke="rgba(134,183,204,0.4)" strokeWidth="0.8"/>
                <line x1="150" y1="287" x2="190" y2="287" stroke="rgba(134,183,204,0.4)" strokeWidth="0.8"/>
                <rect x="210" y="270" width="40" height="35" rx="2" fill="none" stroke="rgba(134,183,204,0.5)" strokeWidth="1"/>
                <line x1="230" y1="270" x2="230" y2="305" stroke="rgba(134,183,204,0.4)" strokeWidth="0.8"/>
                <line x1="210" y1="287" x2="250" y2="287" stroke="rgba(134,183,204,0.4)" strokeWidth="0.8"/>
                {/* Door */}
                <rect x="215" y="320" width="30" height="40" rx="2" fill="none" stroke="rgba(134,183,204,0.5)" strokeWidth="1"/>

                {/* Tree */}
                <ellipse cx="390" cy="310" rx="22" ry="28" fill="none" stroke="rgba(134,183,204,0.35)" strokeWidth="1"/>
                <ellipse cx="390" cy="295" rx="16" ry="20" fill="none" stroke="rgba(134,183,204,0.3)" strokeWidth="1"/>
                <line x1="390" y1="338" x2="390" y2="360" stroke="rgba(134,183,204,0.3)" strokeWidth="1.5"/>

                {/* Solar panels — tilted, floating above roof with dashed connectors */}
                {/* Panel 1 — large, top */}
                <g transform="translate(185, 60) rotate(-25)">
                  <rect width="90" height="65" rx="3" fill="#1a2f3a" stroke="#ff7e2f" strokeWidth="1.2"/>
                  {[0,1,2].map(c => [0,1].map(r => (
                    <rect key={`p1-${c}-${r}`} x={6+c*28} y={5+r*28} width="22" height="22" rx="2"
                      fill={r===0 ? '#3d1a00' : '#0f2030'} stroke="#ff7e2f" strokeWidth="0.5" opacity="0.9"/>
                  )))}
                </g>
                {/* Dashed connector 1 */}
                <line x1="220" y1="130" x2="210" y2="210" stroke="#ff7e2f" strokeWidth="1" strokeDasharray="4,3" opacity="0.6"/>

                {/* Panel 2 — medium, middle */}
                <g transform="translate(148, 110) rotate(-25)">
                  <rect width="80" height="58" rx="3" fill="#1a2f3a" stroke="#ff7e2f" strokeWidth="1.2"/>
                  {[0,1,2].map(c => [0,1].map(r => (
                    <rect key={`p2-${c}-${r}`} x={5+c*25} y={4+r*25} width="19" height="19" rx="2"
                      fill={r===0 ? '#4a2000' : '#0f2030'} stroke="#ff7e2f" strokeWidth="0.5" opacity="0.9"/>
                  )))}
                </g>
                {/* Dashed connector 2 */}
                <line x1="183" y1="172" x2="180" y2="230" stroke="#ff7e2f" strokeWidth="1" strokeDasharray="4,3" opacity="0.6"/>

                {/* Panel 3 — small, bottom */}
                <g transform="translate(118, 155) rotate(-25)">
                  <rect width="68" height="50" rx="3" fill="#1a2f3a" stroke="#ff7e2f" strokeWidth="1.2"/>
                  {[0,1,2].map(c => [0,1].map(r => (
                    <rect key={`p3-${c}-${r}`} x={4+c*21} y={4+r*21} width="16" height="16" rx="2"
                      fill={r===0 ? '#5a2800' : '#0f2030'} stroke="#ff7e2f" strokeWidth="0.5" opacity="0.9"/>
                  )))}
                </g>
                {/* Dashed connector 3 */}
                <line x1="147" y1="208" x2="155" y2="248" stroke="#ff7e2f" strokeWidth="1" strokeDasharray="4,3" opacity="0.6"/>

                {/* Ground line */}
                <line x1="40" y1="370" x2="440" y2="370" stroke="rgba(134,183,204,0.2)" strokeWidth="1"/>
              </svg>
            </div>

            {/* Right: text */}
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

        {/* ── 3D HOME VISUALIZER CARD ── */}
        <div className="tool-card tool-card--light">

          {/* Left: text */}
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
              <a href="/home-visualizer">
                <div className="button sob bg-whitesmoke"><div>Visualize Your Home</div></div>
                <div/>
              </a>
            </div>
          </div>

          {/* Right: custom SVG house with measurements */}
          <div className="tool-card-img">
          <img
            src="https://static.wixstatic.com/media/117722_97dc6b11b2924637b211b2f894a1df84~mv2.gif"
            alt="Roofing calculator"
            className="tool-image"
            />
          </div>

        </div>

      </div>
    </section>
  )
}