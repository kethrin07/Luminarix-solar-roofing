export default function ConsultationSection() {
  return (
    <section className="section consultation bg-whitesmoke">
      <div className="wrapper">
        <div className="grid gap-l consultation-grid">
          <div>
            <div className="margin-m">
              <h2 className="acumin-pro-wide weight-300">
                <span className="text-color-tertiary">Still have questions?</span>
              </h2>
            </div>
            <p>
              Schedule a call with one of our experienced sales managers to discuss the specifics of solar
              panel installation at your residence<strong>.</strong>
            </p>
          </div>
          <a
            href="https://calendly.com/ameco-solar-roofing/solar-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="calendly-link"
          >
            <div className="card calendly-card">
              <img
                src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bebe077352579b7f25_Calendar_1.png"
                alt=""
                className="icon-l"
              />
              <div className="header-m acumen-pro-wide weight-300">
                <span className="text-color-secondary">Schedule Your Virtual Consultation</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
