export default function CtaBlock() {
  return (
    <section className="cta-block">
      <div className="cta-block-inner">
        {/* Vertical line */}
        <div className="cta-block-line">
          <div className="cta-block-line-bar"/>
          <div className="cta-block-line-arrow">↓</div>
        </div>
        {/* Buttons */}
        <div className="cta-block-btns">
          <a href="/solar-panels-costs-calculator" className="button-wrapper">
            <div className="button sob bg-white"><div>Calculate Your Project</div></div>
            <div className="button-shadow sob-shadow"/>
          </a>
          <span className="cta-block-or">or</span>
          <a href="https://calendly.com/ameco-solar-roofing/solar-consultation" className="button-wrapper">
            <div className="button tob bg-white"><div>Schedule Virtual Consultation</div></div>
            <div className="button-shadow tob-shadow"/>
          </a>
        </div>
      </div>
    </section>
  )
}