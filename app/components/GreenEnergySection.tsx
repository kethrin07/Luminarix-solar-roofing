export default function GreenEnergySection() {
  return (
    <section className="section">
      <div className="wrapper">
        <div className="grid _12-col">
          {/* Left: Lottie placeholder (static image fallback) */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625f4169c7cd3284b6d076ea_Landing-SolarSolutions.svg"
              alt="Solar installation"
              style={{ width: "100%", maxWidth: 420, height: "auto", opacity: 0.85 }}
            />
          </div>

          {/* Right: text */}
          <div>
            <div className="margin-l">
              <h2 className="pretitle text-color-secondary">
                <strong>Driving Green Energy Solutions</strong>
              </h2>
            </div>
            <div className="margin-l">
              <p className="header-xl-copy weight-300-copy acumen-pro-wide">
                AMECO Solar &amp; Roofing is the top solar panel company for home and business energy
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
  );
}
