// export default function Footer() {
//   const socials = [
//     { href: 'https://www.youtube.com/channel/UCf15qNUDGsH1VkEMKObqCxw', src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/628fa38bd98588bcbd20453c_Asset%20122.svg', alt: 'YouTube' },
//     { href: 'https://www.facebook.com/AmecoSolar/', src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/628fa38a2d7b35bef7fcda4f_Asset%20123.svg', alt: 'Facebook' },
//     { href: 'https://www.linkedin.com/company/ameco-solar/', src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/628fa38b2b35822b0804bb34_Asset%20124.svg', alt: 'LinkedIn' },
//     { href: 'https://www.yelp.com/biz/ameco-solar-and-roofing-valley-village', src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/63adc6ca6c21e695a3cf9197_yelp.svg', alt: 'Yelp' },
//     { href: 'https://twitter.com/AmecoSolar', src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/653fbfb4d7d2bfcd5fe88b7f_twitter%20(3).svg', alt: 'Twitter' },
//     { href: 'https://www.instagram.com/amecosolar/', src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/63adc714fc88fa6f428fd0b3_instagram.svg', alt: 'Instagram' },
//   ]

//   return (
//     <>
//       <footer className="footer">
//         <div className="footer-inner">
//           <div className="footer-layout">

//             {/* ── LEFT COLUMN ── */}
//             <div className="footer-left">
//               <a href="/" className="footer-logo-link">
//                 <img
//                   src="https://luminarix-media.com/lovable-uploads/9ae4ae4c-571a-4121-871c-67575f91198f.png"
//                   alt="Luminarix Solar & Roofing"
//                   className="footer-logo"
//                 />
//               </a>
//               <p className="footer-addr">
//                 4705 Laurel Canyon Blvd. Suite 205<br />
//                 Valley Village, CA 91607<br /><br />
//                 7623 Somerset Blvd<br />
//                 Paramount, CA 90723<br /><br />
//                 400 Capitol Mall, Suite 900<br />
//                 Sacramento, CA 95814
//               </p>
//               <div className="footer-hr" />
//               <a href="tel:8886951205" className="footer-contact">(888) 695-1205</a>
//               <div className="footer-hr" />
//               <a href="mailto:info@LuminarixSolar.com" className="footer-contact">info@LuminarixSolar.com</a>
//             </div>

//             {/* ── DIVIDER ── */}
//             <div className="footer-divider" />

//             {/* ── RIGHT COLUMN ── */}
//             <div className="footer-right">

//               {/* Social */}
//               <div className="footer-social-row">
//                 <div className="footer-section-label">Connect</div>
//                 <div className="footer-socials">
//                   {socials.map(s => (
//                     <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-soc-btn">
//                       <img src={s.src} alt={s.alt} className="footer-soc-icon" />
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* Resources buttons */}
//               <div className="footer-resources">
//                 <div className="footer-section-label footer-section-label--caps">Resources</div>
//                 <div className="footer-res-btns">
//                   <a href="/home-visualizer" className="footer-res-btn">3D Home Visualizer</a>
//                   <a href="/solar-panels-costs-calculator" className="footer-res-btn">Get An Estimate</a>
//                 </div>
//               </div>

//               {/* Link columns */}
//               <div className="footer-link-cols">
//                 <div className="footer-link-col">
//                   <div className="footer-col-title">Our Company</div>
//                   <a href="/about-us" className="footer-link">About Us</a>
//                   <a href="/our-work" className="footer-link">Our Work</a>
//                   <a href="/careers" className="footer-link">Careers</a>
//                   <a href="/blog" className="footer-link">Blog</a>
//                   <a href="/contact" className="footer-link">Contact Us</a>
//                   <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
//                   <a href="/terms-and-conditions" className="footer-link">Terms and Conditions</a>
//                 </div>
//                 <div className="footer-link-col">
//                   <div className="footer-col-title">What We Do</div>
//                   <a href="/our-approach" className="footer-link">Our Process</a>
//                   <a href="/solutions/roofing" className="footer-link">Roofing Services</a>
//                   <a href="/solutions/solar" className="footer-link">Solar Services</a>
//                 </div>
//                 <div className="footer-link-col">
//                   <div className="footer-col-title">Who We Work With</div>
//                   <a href="/customers/residential" className="footer-link">Residential Customers</a>
//                   <a href="/customers/commercial" className="footer-link">Commercial Customers</a>
//                 </div>
//               </div>

//               {/* Insights row */}
//               <div className="footer-link-col footer-insights">
//                 <div className="footer-col-title">Insights &amp; Resources</div>
//                 <a href="/articles-list" className="footer-link">Articles</a>
//                 <a href="/near-me/valley-village-roofing-company" className="footer-link">Valley Village Roofing Company</a>
//                 <a href="/blog/roofing-contractors-near-me" className="footer-link">Looking for Roofing Contractors Near you?</a>
//                 <a href="/blog/best-roofing-companies-near-you" className="footer-link">How do I find the best roofing companies near me?</a>
//               </div>

//             </div>
//           </div>

//           {/* Bottom bar */}
//           <div className="footer-bottom">
//             © {new Date().getFullYear()} Luminarix Solar &amp; Roofing. All rights reserved.
//           </div>
//         </div>
//       </footer>

//       {/* Consultation section below footer */}
//       <section className="consult-section">
//         <div className="consult-inner">
//           <div className="consult-left">
//             <h2 className="consult-title">Still have questions?</h2>
//             <p className="consult-body">
//               Schedule a call with one of our experienced sales managers to discuss the specifics
//               of solar panel installation at your residence.
//             </p>
//           </div>
//           <a
//             href="https://calendly.com/ameco-solar-roofing/solar-consultation"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="consult-card"
//           >
//             <img
//               src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bebe077352579b7f25_Calendar_1.png"
//               alt="Calendar"
//               className="consult-card-icon"
//             />
//           </a>
//         </div>
//       </section>
//     </>
//   )
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
        <div className="footer-layout">

          {/* ── COL 1: Logo + address ── */}
          <div className="footer-left">
            <a href="/" className="footer-logo-link">
              <img
                src="https://luminarix-media.com/lovable-uploads/9ae4ae4c-571a-4121-871c-67575f91198f.png"
                alt="Luminarix"
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
            <a href="mailto:info@LuminarixSolar.com" className="footer-contact">info@luminarixsolar.com</a>
          </div>

          {/* ── COL 2: Connect (vertical icons) ── */}
          <div className="footer-connect-col">
            <div className="footer-col-title">Connect</div>
            <div className="footer-socials">
              {socials.map(s => (
                <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-soc-btn">
                  <img src={s.src} alt={s.alt} className="footer-soc-icon" />
                </a>
              ))}
            </div>
          </div>

          {/* ── COL 3: Resources + links ── */}
          <div className="footer-main-col">

            {/* Resources */}
            <div className="footer-resources-row">
              <div className="footer-col-title">Resources</div>
              <div className="footer-res-btns">
                <a href="/home-visualizer" className="footer-res-btn">3D Home Visualizer</a>
                <a href="/solar-panels-costs-calculator" className="footer-res-btn">Get An Estimate</a>
              </div>
            </div>

            {/* 3-col link grid */}
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

            {/* Insights */}
            <div className="footer-link-col">
              <div className="footer-col-title">Insights &amp; Resources</div>
              <a href="/articles-list" className="footer-link">Articles</a>
              <a href="/near-me/valley-village-roofing-company" className="footer-link">Valley Village Roofing Company</a>
              <a href="/blog/roofing-contractors-near-me" className="footer-link">Looking for Roofing Contractors Near you?</a>
              <a href="/blog/best-roofing-companies-near-you" className="footer-link">How do I find the best roofing companies near me?</a>
            </div>

          </div>
        </div>
      </footer>

      {/* Consultation */}
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