export default function CtaBlock() {
  return (
    <section className="section">
      <div className="wrapper">
        <div className="tac">
          <div className="margin-xl">
            <div className="monument-extended header-one weight-400">Ready to save more with solar?</div>
          </div>
          <div className="margin-m">
            <img
              src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/626029bc6c258dbf89b4373d_Down%20Arrow.svg"
              alt=""
            />
          </div>
          <div className="flex-center">
            <div>
              <div className="grid cta-grid">
                <a href="https://www.amecosolar.com/solar-panels-costs-calculator" className="button-wrapper">
                  <div className="button sob bg-white"><div>Calculate Your Project</div></div>
                  <div className="button-shadow sob-shadow" />
                </a>
                <div>or</div>
                <a href="https://calendly.com/ameco-solar-roofing/solar-consultation" className="button-wrapper">
                  <div className="button tob bg-white"><div>Schedule Virtual Consultation</div></div>
                  <div className="button-shadow tob-shadow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
