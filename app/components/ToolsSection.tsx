export default function ToolsSection() {
  return (
    <section className="section">
      <div className="wrapper">
        {/* Not Sure Where to Start */}
        <div className="margin-xxl">
          <div className="grid _12-col" style={{ alignItems: "center" }}>
            <div className="outline-heading">
              <strong>Not Sure Where <br />to Start?</strong>
            </div>
            <div>
              <div className="header-xxl weight-400">We've got you!</div>
              <div style={{ marginTop: 24 }}>
                <p>
                  Use our estimate calculator to see how a solar panel system would look on your roof and
                  estimate your potential savings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Estimate Calculator card */}
        <div className="margin-h">
          <div className="large-card estimate">
            <img
              src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625f4761b0163306605a3a6b_Ameco-Landing-EstimateCalculator.png"
              alt=""
              className="estimate-image"
            />
            <div>
              <div className="margin-s">
                <h2 className="header-l weight-300">Estimate<br />Calculator</h2>
              </div>
              <div className="margin-l">
                <p>Get an estimate of your panel or roofing project in minutes - no obligation or commitment necessary.</p>
              </div>
              <div className="button-wrapper">
                <a href="/solar-panels-costs-calculator">
                  <div className="button wob bg-dark-slate-grey"><div>Get An Estimate</div></div>
                  <div className="button-shadow" style={{ background: "#1a3a46" }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Home Visualizer card */}
        <div className="large-card" style={{ background: "#f0f4f6" }}>
          <div className="visualizer-content">
            <div className="margin-s">
              <h2 className="header-l weight-300">
                <span className="text-color-secondary">3D Home<br />Visualizer</span>
              </h2>
            </div>
            <div className="margin-l">
              <p>
                In partnership with Hover, our custom 3D home builder allows you to accurately visualize your
                construction project even before a single brick is laid. Simply take pictures of your property
                and get a bird's eye view of how different roofing or solar installations will look on your
                residential or commercial property.
              </p>
            </div>
            <div className="button-wrapper">
              <a href="/home-visualizer">
                <div className="button sob bg-whitesmoke"><div>Visualize Your Home</div></div>
                <div className="button-shadow sob-shadow" />
              </a>
            </div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/628d28e46845344e3da5b608_signup-contractor.2d325dea.png"
            alt="A 3D model of a home."
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
