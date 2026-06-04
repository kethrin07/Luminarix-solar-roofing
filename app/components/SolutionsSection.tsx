'use client'
import { useReveal } from '../hooks/useReveal'

export default function SolutionsSection() {
  const card1Ref = useReveal(0.2)
  const card2Ref = useReveal(0.2)

  return (
    <section className="section solutions">
      <div className="wrapper">
        <div className="solutions-grid">

          <div ref={card1Ref as any} className="solution-card reveal">
            <div className="solution-img-wrap">
              <img
                src="/solar-solutions.png"
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
                <strong>solar panel installation</strong>{' '}rolling, Solara has you covered!
              </p>
            </div>
            <div className="button-wrapper">
              <a href="/solutions/solar">
                <div className="button sob bg-primary"><div>Learn More</div></div>
                <div/>
              </a>
            </div>
          </div>

          <div ref={card2Ref as any} className="solution-card solution-card--right reveal">
            <div className="solution-img-wrap">
              <img
                src="/roofing-solutions.png"
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
                <div />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}