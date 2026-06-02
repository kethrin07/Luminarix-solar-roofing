export default function SolutionsSection() {
  return (
    <section className="section solutions">
      <div className="wrapper">
        <div className="solutions-grid">

          {/* Solar */}
          <div className="solution-card">
            <div className="solution-img-wrap">
              <img
                src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625f4169c7cd3284b6d076ea_Landing-SolarSolutions.svg"
                alt="Graphic of solar panels."
                className="solution-img"
              />
            </div>
            <div className="margin-l">
              <div className="solar-solutions">Solar<br />Solutions</div>
            </div>
            <div className="margin-l">
              <p>
                We understand going solar can be complicated. That&apos;s where we come in. From designing your{' '}
                <strong>solar system</strong> to acquiring permits and getting your{' '}
                <strong>solar panel installation</strong> rolling, Luminarix Solar &amp; Roofing has you covered!
              </p>
            </div>
            <div className="button-wrapper">
              <a href="/solutions/solar">
                <div className="button sob bg-primary"><div>Learn More</div></div>
                <div className="button-shadow sob-shadow" />
              </a>
            </div>
          </div>

          {/* Roofing */}
          <div className="solution-card solution-card--right">
            <div className="solution-img-wrap">
              <img
                src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625f417e5424f164c4204c0f_Landing-RoofingSolutions.svg"
                alt="Graphic of roofing tiles."
                className="solution-img"
              />
            </div>
            <div className="margin-l">
              <div className="roofing-solutions">Roofing<br />Solutions</div>
            </div>
            <div className="margin-l">
              <p>
                By upgrading to a quality roofing installation, you ensure your home is energy-efficient and
                weatherproof. In other words, clean, green, and smart. And we customize our solutions to fit
                your home&apos;s unique energy profile.
              </p>
            </div>
            <div className="button-wrapper">
              <a href="/solutions/roofing">
                <div className="button tob bg-primary"><div>Learn More</div></div>
                <div className="button-shadow tob-shadow" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
