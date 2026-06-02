export default function AboutUsSection() {
  return (
    <section className="section about-us">
      <div className="about-us-image" />
      <div className="wrapper">
        <div className="grid no-gap" style={{ gridTemplateColumns: "1fr" }}>
          <div className="about-us-card">
            <div className="margin-m">
              <h2 className="pretitle">
                <span className="text-color-secondary">Get to Know Us</span>
              </h2>
            </div>
            <div className="margin-xxl">
              <p className="header-xl acumen-pro-wide weight-300">
                By choosing AMECO Solar &amp; Roofing, you're not only investing in renewable energy
                solutions. You are also supporting a company committed to doing good for the planet by
                harnessing the power of clean and renewable energy.
              </p>
            </div>
            <div className="grid flex-grid gap-m" style={{ justifyContent: "flex-start", alignItems: "center" }}>
              <div className="button-wrapper">
                <a href="/about-us">
                  <div className="button sob bg-whitesmoke"><div>Learn More</div></div>
                  <div className="button-shadow sob-shadow" />
                </a>
              </div>
              <a href="/careers" className="large-text-link">Join our Team</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
