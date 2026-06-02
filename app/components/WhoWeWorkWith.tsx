// export default function WhoWeWorkWith() {
//   return (
//     <section className="section who-we-work-with">
//       <div className="wrapper">
//         <div className="margin-m">
//           <h2 className="pretitle">
//             <span className="text-color-secondary">
//               <strong>Driving the Change to A Clean Future<br /></strong>
//             </span>
//           </h2>
//         </div>
//         <div className="margin-xxl">
//           <p className="header-xl acumen-pro-wide weight-300">
//             Join the growing community of environmentally responsible homeowners and businesses by choosing
//             AMECO Solar &amp; Roofing for your energy solutions. We provide expert guidance and one-on-one
//             consultations to make the switch to solar seamless and hassle free.
//           </p>
//         </div>
//         <div className="margin-xl">
//           <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 0 }}>
//             <a href="/customers/residential" className="work-card">
//               <div className="margin-s">
//                 <img
//                   src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6260108933e4cc29d1a0b928_Ameco-Residential.svg"
//                   alt="Graphic of a residential house."
//                   className="work-icon"
//                 />
//               </div>
//               <div>
//                 <div className="margin-s">
//                   <h3 className="header-m weight-300 acumen-pro-wide">Residential Customers</h3>
//                 </div>
//                 <p>
//                   We're the solar experts trusted by thousands of California homeowners. With nearly 40 years
//                   of experience in solar installations we've helped numerous happy Californians save money on
//                   their energy bills.
//                 </p>
//               </div>
//             </a>
//             <a href="/customers/commercial" className="work-card wc-commercial">
//               <div className="margin-s">
//                 <img
//                   src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/626010890d256660baa42d98_Ameco-Commercial.svg"
//                   alt="Graphic of a commercial building."
//                   className="work-icon"
//                 />
//               </div>
//               <div>
//                 <div className="margin-s">
//                   <h3 className="header-m weight-300 acumen-pro-wide">Commercial Customers</h3>
//                 </div>
//                 <p>
//                   Our expert team of solar system installers and roofing contractors is dedicated to providing
//                   sustainable energy solutions to businesses while always staying eco-conscious. We are the
//                   go-to people for the latest in solar technology.
//                 </p>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function WhoWeWorkWith() {
  return (
    <section className="section wwww-section">
      <div className="wrapper">

        {/* Pretitle */}
        <div className="margin-m">
          <h2 className="pretitle">
            <span className="text-color-secondary">
              <strong>Driving the Change to A Clean Future</strong>
            </span>
          </h2>
        </div>

        {/* Large statement text */}
        <div className="margin-xxl">
          <p className="wwww-statement">
            Join the growing community of environmentally responsible homeowners and businesses
            by choosing Luminarix Solar &amp; Roofing for your energy solutions. We provide expert
            guidance and one-on-one consultations to make the switch to solar seamless and hassle free.
          </p>
        </div>

        {/* Work cards */}
        <div className="wwww-grid">

          <a href="/customers/residential" className="wwww-card">
            <div className="wwww-card-icon-wrap">
              <img
                src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6260108933e4cc29d1a0b928_Ameco-Residential.svg"
                alt="Residential house"
                className="wwww-card-icon"
              />
            </div>
            <div className="wwww-card-body">
              <h3 className="wwww-card-title">Residential<br />Customers</h3>
              <p className="wwww-card-text">
                We&apos;re the solar experts trusted by thousands of California homeowners. With nearly
                50 years of experience in solar installations we&apos;ve helped numerous happy Californians
                save money on their energy bills.
              </p>
              <div className="wwww-card-cta">
                <span>Learn More</span>
                <span className="wwww-card-arrow">→</span>
              </div>
            </div>
          </a>

          <a href="/customers/commercial" className="wwww-card wwww-card--right">
            <div className="wwww-card-icon-wrap">
              <img
                src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/626010890d256660baa42d98_Ameco-Commercial.svg"
                alt="Commercial building"
                className="wwww-card-icon"
              />
            </div>
            <div className="wwww-card-body">
              <h3 className="wwww-card-title">Commercial<br />Customers</h3>
              <p className="wwww-card-text">
                Our expert team of solar system installers and roofing contractors is dedicated to
                providing sustainable energy solutions to businesses while staying eco-conscious.
                We are the go-to people for the latest in solar technology.
              </p>
              <div className="wwww-card-cta">
                <span>Learn More</span>
                <span className="wwww-card-arrow">→</span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}