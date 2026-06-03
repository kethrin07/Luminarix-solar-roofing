export default function AboutUsSection() {
  return (
    <section className="about-split">

      {/* Left — full-height photo */}
      <div className="about-split-img">
        <img
          src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/626024eba6dfb0c6b48b4431_About%20Us.jpg"
          alt="Solar installer at work"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* Right — content on whitesmoke bg */}
      <div className="about-split-content">
        <div className="margin-m">
          <h2 className="pretitle text-color-secondary">Get to Know Us</h2>
        </div>
        <div className="margin-xxl">
          <p className="about-statement">
            By choosing Luminarix Solar &amp; Roofing, you&apos;re not only investing in renewable energy
            solutions. You are also supporting a company committed to doing good for the planet by
            harnessing the power of clean and renewable energy.
          </p>
        </div>
        <div className="about-cta-row">
          <div className="button-wrapper">
            <a href="/about-us">
              <div className="button sob bg-whitesmoke"><div>Learn More</div></div>
              <div/>
            </a>
          </div>
          <a href="/careers" className="large-text-link">Join our Team</a>
        </div>
      </div>

    </section>
  )
}