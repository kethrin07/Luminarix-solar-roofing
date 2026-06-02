// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div style={{ maxWidth: 1280, margin: "0 auto" }}>
//         <div className="footer-grid">
//           {/* Left */}
//           <div>
//             <div className="vfc">
//               <a href="/">
//                 <img
//                   src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee1045509ac7c74af2604_Ameco%20A%20Logomark%20White.svg"
//                   alt=""
//                   className="footer-logo"
//                 />
//               </a>
//               <div className="margin-s">
//                 <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.7 }}>
//                   4705 Laurel Canyon Blvd. Suite 205<br />
//                   Valley Village, CA 91607<br /><br />
//                   7623 Somerset Blvd<br />
//                   Paramount, CA 90723<br /><br />
//                   400 Capitol Mall, Suite 900<br />
//                   Sacramento, CA 95814<br />
//                 </p>
//               </div>
//               <div className="margin-s">
//                 <div className="horizontal-rule hr-small" />
//               </div>
//               <div className="margin-s">
//                 <a href="tel:8886951205" className="footer-link weight-600 antarctican-mono">
//                   (888) 695-1205
//                 </a>
//               </div>
//               <div className="margin-s">
//                 <div className="horizontal-rule hr-small" />
//               </div>
//               <a href="mailto:info@AmecoSolar.com" className="footer-link weight-600 antarctican-mono">
//                 info@AmecoSolar.com
//               </a>
//             </div>
//           </div>

//           {/* Right */}
//           <div>
//             {/* Connect / Social */}
//             <div className="margin-m">
//               <div className="header-xxs margin-s">
//                 <span style={{ color: "var(--color-tertiary)" }}>Connect</span>
//               </div>
//               <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
//                 {[
//                   { href: "https://www.youtube.com/channel/UCf15qNUDGsH1VkEMKObqCxw", src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/628fa38bd98588bcbd20453c_Asset%20122.svg", alt: "YouTube" },
//                   { href: "https://www.facebook.com/AmecoSolar/", src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/628fa38a2d7b35bef7fcda4f_Asset%20123.svg", alt: "Facebook" },
//                   { href: "https://www.linkedin.com/company/ameco-solar/", src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/628fa38b2b35822b0804bb34_Asset%20124.svg", alt: "LinkedIn" },
//                   { href: "https://www.yelp.com/biz/ameco-solar-and-roofing-valley-village", src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/63adc6ca6c21e695a3cf9197_yelp.svg", alt: "Yelp" },
//                   { href: "https://twitter.com/AmecoSolar", src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/653fbfb4d7d2bfcd5fe88b7f_twitter%20(3).svg", alt: "Twitter" },
//                   { href: "https://www.instagram.com/amecosolar/", src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/63adc714fc88fa6f428fd0b3_instagram.svg", alt: "Instagram" },
//                 ].map((s) => (
//                   <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon first-icon">
//                     <img src={s.src} alt={s.alt} />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Resources */}
//             <div className="margin-m">
//               <div className="header-xxs margin-s">
//                 <span style={{ color: "var(--color-tertiary)" }}>RESOURCES</span>
//               </div>
//               <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
//                 <div className="button-wrapper">
//                   <a href="/home-visualizer">
//                     <div className="button wob bg-dark-slate-grey"><div>3D Home Visualizer</div></div>
//                     <div className="button-shadow" style={{ background: "#1a3a46" }} />
//                   </a>
//                 </div>
//                 <div className="button-wrapper">
//                   <a href="/solar-panels-costs-calculator">
//                     <div className="button wob bg-dark-slate-grey"><div>Get An Estimate</div></div>
//                     <div className="button-shadow" style={{ background: "#1a3a46" }} />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Links */}
//             <div className="footer-links">
//               <ul className="footer-list">
//                 <li><div className="header-xxs"><span style={{ color: "var(--color-tertiary)" }}>Our Company</span></div></li>
//                 <li><a href="/about-us" className="footer-link">About Us</a></li>
//                 <li><a href="/our-work" className="footer-link">Our Work</a></li>
//                 <li><a href="/careers" className="footer-link">Careers</a></li>
//                 <li><a href="/blog" className="footer-link">Blog</a></li>
//                 <li><a href="/contact" className="footer-link">Contact Us</a></li>
//                 <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
//                 <li><a href="/terms-and-conditions" className="footer-link">Terms and Conditions</a></li>
//               </ul>
//               <ul className="footer-list">
//                 <li><div className="header-xxs"><span style={{ color: "var(--color-tertiary)" }}>What We Do</span></div></li>
//                 <li><a href="/our-approach" className="footer-link">Our Process</a></li>
//                 <li><a href="/solutions/roofing" className="footer-link">Roofing Services</a></li>
//                 <li><a href="/solutions/solar" className="footer-link">Solar Services</a></li>
//               </ul>
//               <ul className="footer-list">
//                 <li><div className="header-xxs"><span style={{ color: "var(--color-tertiary)" }}>Who We Work With</span></div></li>
//                 <li><a href="/customers/residential" className="footer-link">Residential Customers</a></li>
//                 <li><a href="/customers/commercial" className="footer-link">Commercial Customers</a></li>
//               </ul>
//             </div>

//             <div className="footer-links" style={{ marginTop: 8 }}>
//               <ul className="footer-list" style={{ width: "100%" }}>
//                 <li><div className="header-xxs"><span style={{ color: "var(--color-tertiary)" }}>Insights &amp; Resources</span></div></li>
//                 <li><a href="/articles-list" className="footer-link">Articles</a></li>
//                 <li><a href="/near-me/valley-village-roofing-company" className="footer-link">Valley Village Roofing Company</a></li>
//                 <li><a href="/blog/roofing-contractors-near-me" className="footer-link">Looking for Roofing Contractors Near you?</a></li>
//                 <li><a href="/blog/best-roofing-companies-near-you" className="footer-link">How do I find the best roofing companies near me?</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div style={{ marginTop: 60, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.1)", textAlign: "center", fontSize: 13, opacity: 0.5 }}>
//           © {new Date().getFullYear()} AMECO Solar &amp; Roofing. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  const socials = [
    { href: 'https://www.youtube.com/channel/UCf15qNUDGsH1VkEMKObqCxw', src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/628fa38bd98588bcbd20453c_Asset%20122.svg', alt: 'YouTube' },
    { href: 'https://www.facebook.com/AmecoSolar/', src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/628fa38a2d7b35bef7fcda4f_Asset%20123.svg', alt: 'Facebook' },
    { href: 'https://www.linkedin.com/company/ameco-solar/', src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/628fa38b2b35822b0804bb34_Asset%20124.svg', alt: 'LinkedIn' },
    { href: 'https://www.yelp.com/biz/ameco-solar-and-roofing-valley-village', src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/63adc6ca6c21e695a3cf9197_yelp.svg', alt: 'Yelp' },
    { href: 'https://twitter.com/AmecoSolar', src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/653fbfb4d7d2bfcd5fe88b7f_twitter%20(3).svg', alt: 'Twitter' },
    { href: 'https://www.instagram.com/amecosolar/', src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/63adc714fc88fa6f428fd0b3_instagram.svg', alt: 'Instagram' },
  ]

  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-layout">

            {/* ── LEFT COLUMN ── */}
            <div className="footer-left">
              <a href="/" className="footer-logo-link">
                <img
                  src="https://luminarix-media.com/lovable-uploads/9ae4ae4c-571a-4121-871c-67575f91198f.png"
                  alt="Luminarix Solar & Roofing"
                  className="footer-logo"
                />
              </a>
              <p className="footer-addr">
                4705 Laurel Canyon Blvd. Suite 205<br />
                Valley Village, CA 91607<br /><br />
                7623 Somerset Blvd<br />
                Paramount, CA 90723<br /><br />
                400 Capitol Mall, Suite 900<br />
                Sacramento, CA 95814
              </p>
              <div className="footer-hr" />
              <a href="tel:8886951205" className="footer-contact">(888) 695-1205</a>
              <div className="footer-hr" />
              <a href="mailto:info@LuminarixSolar.com" className="footer-contact">info@LuminarixSolar.com</a>
            </div>

            {/* ── DIVIDER ── */}
            <div className="footer-divider" />

            {/* ── RIGHT COLUMN ── */}
            <div className="footer-right">

              {/* Social */}
              <div className="footer-social-row">
                <div className="footer-section-label">Connect</div>
                <div className="footer-socials">
                  {socials.map(s => (
                    <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-soc-btn">
                      <img src={s.src} alt={s.alt} className="footer-soc-icon" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Resources buttons */}
              <div className="footer-resources">
                <div className="footer-section-label footer-section-label--caps">Resources</div>
                <div className="footer-res-btns">
                  <a href="/home-visualizer" className="footer-res-btn">3D Home Visualizer</a>
                  <a href="/solar-panels-costs-calculator" className="footer-res-btn">Get An Estimate</a>
                </div>
              </div>

              {/* Link columns */}
              <div className="footer-link-cols">
                <div className="footer-link-col">
                  <div className="footer-col-title">Our Company</div>
                  <a href="/about-us" className="footer-link">About Us</a>
                  <a href="/our-work" className="footer-link">Our Work</a>
                  <a href="/careers" className="footer-link">Careers</a>
                  <a href="/blog" className="footer-link">Blog</a>
                  <a href="/contact" className="footer-link">Contact Us</a>
                  <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                  <a href="/terms-and-conditions" className="footer-link">Terms and Conditions</a>
                </div>
                <div className="footer-link-col">
                  <div className="footer-col-title">What We Do</div>
                  <a href="/our-approach" className="footer-link">Our Process</a>
                  <a href="/solutions/roofing" className="footer-link">Roofing Services</a>
                  <a href="/solutions/solar" className="footer-link">Solar Services</a>
                </div>
                <div className="footer-link-col">
                  <div className="footer-col-title">Who We Work With</div>
                  <a href="/customers/residential" className="footer-link">Residential Customers</a>
                  <a href="/customers/commercial" className="footer-link">Commercial Customers</a>
                </div>
              </div>

              {/* Insights row */}
              <div className="footer-link-col footer-insights">
                <div className="footer-col-title">Insights &amp; Resources</div>
                <a href="/articles-list" className="footer-link">Articles</a>
                <a href="/near-me/valley-village-roofing-company" className="footer-link">Valley Village Roofing Company</a>
                <a href="/blog/roofing-contractors-near-me" className="footer-link">Looking for Roofing Contractors Near you?</a>
                <a href="/blog/best-roofing-companies-near-you" className="footer-link">How do I find the best roofing companies near me?</a>
              </div>

            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            © {new Date().getFullYear()} Luminarix Solar &amp; Roofing. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Consultation section below footer */}
      <section className="consult-section">
        <div className="consult-inner">
          <div className="consult-left">
            <h2 className="consult-title">Still have questions?</h2>
            <p className="consult-body">
              Schedule a call with one of our experienced sales managers to discuss the specifics
              of solar panel installation at your residence.
            </p>
          </div>
          <a
            href="https://calendly.com/ameco-solar-roofing/solar-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="consult-card"
          >
            <img
              src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bebe077352579b7f25_Calendar_1.png"
              alt="Calendar"
              className="consult-card-icon"
            />
          </a>
        </div>
      </section>
    </>
  )
}