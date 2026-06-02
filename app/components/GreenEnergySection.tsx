export default function GreenEnergySection() {
  return (
    <section className="section green-energy-section">
      <div className="wrapper">

        {/* Big outline LUMINARIX heading */}
        <div className="green-energy-heading">
          <span className="luminarix-outline">LUMINARIX</span>
        </div>

        <div className="grid _12-col green-energy-grid">

          {/* Left: SVG illustration */}
          <div className="green-energy-img-wrap">
            <svg
              viewBox="0 0 520 560"
              xmlns="http://www.w3.org/2000/svg"
              className="green-energy-svg"
              aria-hidden="true"
            >
              {/* Glow base */}
              <defs>
                <radialGradient id="glow" cx="50%" cy="60%" r="50%">
                  <stop offset="0%" stopColor="#86b7cc" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#86b7cc" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="panelGlow" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#ff7e2f" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#ff7e2f" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background glow */}
              <ellipse cx="260" cy="340" rx="220" ry="160" fill="url(#glow)" />

              {/* Roof structure — isometric */}
              {/* Main roof plane */}
              <g transform="translate(60, 180) rotate(-15, 200, 180)">
                {/* Roof base */}
                <polygon points="60,200 200,120 380,160 240,240" fill="#e8f4f9" stroke="#86b7cc" strokeWidth="1.5" opacity="0.9"/>
                {/* Roof left face */}
                <polygon points="60,200 60,260 200,180 200,120" fill="#d0e8f2" stroke="#86b7cc" strokeWidth="1.5" opacity="0.9"/>
                {/* Structural lines */}
                <line x1="120" y1="180" x2="120" y2="240" stroke="#86b7cc" strokeWidth="1" opacity="0.5"/>
                <line x1="180" y1="155" x2="180" y2="215" stroke="#86b7cc" strokeWidth="1" opacity="0.5"/>
                <line x1="240" y1="138" x2="240" y2="198" stroke="#86b7cc" strokeWidth="1" opacity="0.5"/>
                <line x1="300" y1="148" x2="300" y2="208" stroke="#86b7cc" strokeWidth="1" opacity="0.5"/>
                {/* Cross struts */}
                <line x1="60" y1="200" x2="380" y2="160" stroke="#86b7cc" strokeWidth="0.8" opacity="0.4"/>
                <line x1="60" y1="220" x2="380" y2="180" stroke="#86b7cc" strokeWidth="0.8" opacity="0.4"/>
              </g>

              {/* Solar panel — tilted, floating above roof */}
              <g transform="translate(140, 60) rotate(-12)">
                {/* Panel shadow */}
                <rect x="8" y="8" width="200" height="280" rx="6" fill="rgba(0,0,0,0.12)" />
                {/* Panel back */}
                <rect x="0" y="0" width="200" height="280" rx="6" fill="#1a2f3a" />
                {/* Panel frame */}
                <rect x="0" y="0" width="200" height="280" rx="6" fill="none" stroke="#86b7cc" strokeWidth="2" />
                {/* Cell grid */}
                {[0,1,2,3].map(col =>
                  [0,1,2,3,4,5,6].map(row => (
                    <rect
                      key={`${col}-${row}`}
                      x={12 + col * 46}
                      y={12 + row * 38}
                      width="40"
                      height="32"
                      rx="3"
                      fill={row < 3 ? '#3d1a00' : '#0f1f2a'}
                      stroke="#86b7cc"
                      strokeWidth="0.6"
                      opacity="0.9"
                    />
                  ))
                )}
                {/* Sunlight glare */}
                <rect x="0" y="0" width="200" height="280" rx="6"
                  fill="url(#panelGlow)" opacity="0.6"
                />
                {/* Sheen line */}
                <line x1="20" y1="10" x2="80" y2="270" stroke="rgba(255,255,255,0.06)" strokeWidth="30"/>
              </g>

              {/* Mounting bracket line */}
              <line x1="220" y1="340" x2="260" y2="400" stroke="#86b7cc" strokeWidth="2" opacity="0.7"/>
              <line x1="280" y1="340" x2="260" y2="400" stroke="#86b7cc" strokeWidth="2" opacity="0.7"/>
              <circle cx="260" cy="400" r="5" fill="#86b7cc" opacity="0.8"/>

              {/* Sun rays */}
              {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
                <line
                  key={i}
                  x1={430 + Math.cos(angle * Math.PI / 180) * 18}
                  y1={80 + Math.sin(angle * Math.PI / 180) * 18}
                  x2={430 + Math.cos(angle * Math.PI / 180) * 28}
                  y2={80 + Math.sin(angle * Math.PI / 180) * 28}
                  stroke="#ff7e2f"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
              ))}
              <circle cx="430" cy="80" r="12" fill="none" stroke="#ff7e2f" strokeWidth="1.5" opacity="0.7"/>
              <circle cx="430" cy="80" r="6" fill="#ff7e2f" opacity="0.5"/>

              {/* Energy flow dots */}
              <circle cx="310" cy="200" r="3" fill="#ff7e2f" opacity="0.8"/>
              <circle cx="330" cy="215" r="2" fill="#ff7e2f" opacity="0.5"/>
              <circle cx="350" cy="230" r="2" fill="#ff7e2f" opacity="0.3"/>

              {/* Fig label */}
              <text x="90" y="490" fill="#86b7cc" fontSize="11" fontFamily="monospace" opacity="0.7" letterSpacing="2">
                Fig 001.
              </text>

              {/* Connector line to label */}
              <line x1="200" y1="240" x2="380" y2="290" stroke="#ff7e2f" strokeWidth="1" opacity="0.5"/>
              <circle cx="200" cy="240" r="3" fill="#ff7e2f" opacity="0.6"/>
            </svg>
          </div>

          {/* Right: text */}
          <div className="green-energy-text">
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
                <div className="button sob bg-white">
                  <div><span>Learn More</span></div>
                </div>
                <div className="button-shadow sob-shadow" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
