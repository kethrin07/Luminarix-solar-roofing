// "use client";
// import { useEffect, useRef } from "react";

// const LOGOS = [
//   { src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/68530ed940667cbcf6294973_1.svg", cls: "image-448" },
//   { src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69d65243cbf711fc949bdde3_Group%2010%20(1).png", cls: "image-448" },
//   { src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69d6369b153b59f1e045a3a3_T3_SolarRoof_CertifiedInstaller_B%201.png", cls: "image-453" },
//   { src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6853229eb7611ca37c7d4761_6%20(1).png", cls: "image-451" },
//   { src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/68532276e2cb2304696f13aa_5.png", cls: "image-450" },
//   { src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69d3eb51ccfc2b94f60e4a2a_Untitled-design-2-1024x1024%201%20(1).png", cls: "image-448" },
//   { src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6a06c31e78fcd323bb3c0ae5_RCSP_2026_GOLD%201.png", cls: "image-448" },
//   { src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/685321efbac9b840b2029e9c_4.png", cls: "image-449" },
//   { src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/685322b97fd1d7972c3f3fa9_7.png", cls: "image-452" },
//   { src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69d6389b4bb30d2e31bad5ba_T3_Powerwall-Certified-Installer_B-scaled%201.png", cls: "image-453" },
//   { src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/68e4a57c5ec2a3babad0f41c_Frame%2014.png", cls: "image-448" },
//   { src: "https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69eb38b7b1ad520c7336e5b8_Emphase-logo%201.png", cls: "image-450" },
// ];

// export default function ExperienceSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const trackRef = useRef<HTMLDivElement>(null);
//   const xRef = useRef(0);
//   const rafRef = useRef<number>(0);

//   useEffect(() => {
//     const container = containerRef.current;
//     const track = trackRef.current;
//     if (!container || !track) return;
//     const speed = 1.5;

//     function animate() {
//       if (!track) return;
//       xRef.current -= speed;
//       const first = track.firstElementChild as HTMLElement;
//       if (first) {
//         const w = first.offsetWidth + parseInt(getComputedStyle(first).marginRight || "0");
//         if (first.offsetLeft + xRef.current + first.offsetWidth < 0) {
//           track.appendChild(first);
//           xRef.current += w;
//         }
//       }
//       track.style.transform = `translateX(${xRef.current}px)`;
//       rafRef.current = requestAnimationFrame(animate);
//     }
//     rafRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, []);

//   return (
//     <section className="section">
//       <div className="wrapper">
//         <h2 className="pretitle">
//           <span className="text-color-secondary">Our Experience</span>
//         </h2>

//         <div style={{ marginTop: 16 }}>
//           <div className="margin-s">
//             <div className="installations-outline">7,000+</div>
//           </div>
//           <div className="margin-l">
//             <div className="grid _12-col">
//               <div className="impact-label">
//                 <div><strong>Solar Systems</strong> Installed</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Logo slider */}
//         <div id="slider-custom" ref={containerRef}>
//           <div ref={trackRef}>
//             {[...LOGOS, ...LOGOS].map((logo, i) => (
//               <img key={i} src={logo.src} alt="" className={logo.cls} loading="lazy" />
//             ))}
//           </div>
//         </div>

//         {/* Big featured image */}
//         <div className="div-block-26">
//           <img
//             src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6a056bb07447d6cf69f07811_Group%2012%20(3)%20(1).png"
//             alt=""
//             sizes="(max-width:479px) 100vw, 100vw"
//             srcSet="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6a056bb07447d6cf69f07811_Group%2012%20(3)%20(1)-p-800.png 800w, https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6a056bb07447d6cf69f07811_Group%2012%20(3)%20(1)-p-1080.png 1080w, https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6a056bb07447d6cf69f07811_Group%2012%20(3)%20(1).png 3235w"
//           />
//         </div>

//         <div className="margin-xxl">
//           <p className="header-xl acumen-pro-wide weight-300">
//             What sets us apart from other solar panel installation companies is our focus on sustainability,
//             quality, and customer satisfaction. AMECO Solar &amp; Roofing has been at the forefront of
//             providing quality{" "}
//             <a href="https://www.amecosolar.com/solutions/solar" style={{ textDecoration: "underline" }}>
//               solar panel services
//             </a>
//             , helping thousands of homes and businesses save on their energy bills while reducing their carbon
//             footprint.
//             <br /><br />
//             As a Certified Solar PROtect Installer through the Owens Corning Solar PROtect Roofing Program,
//             we're proud to offer unmatched peace of mind. Our team is specially trained to install solar
//             mounts without compromising the integrity of your roofing system, backed by the Owens Corning
//             roofing warranty.
//           </p>
//         </div>

//         <div>
//           <div className="button-wrapper">
//             <a href="/our-work">
//               <div className="button sob bg-white"><div>Browse Our Work</div></div>
//               <div className="button-shadow sob-shadow" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client'
import { useEffect, useRef } from 'react'

const LOGOS = [
  { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/68530ed940667cbcf6294973_1.svg' },
  { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69d65243cbf711fc949bdde3_Group%2010%20(1).png' },
  { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69d6369b153b59f1e045a3a3_T3_SolarRoof_CertifiedInstaller_B%201.png', wide: true },
  { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6853229eb7611ca37c7d4761_6%20(1).png' },
  { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/68532276e2cb2304696f13aa_5.png' },
  { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69d3eb51ccfc2b94f60e4a2a_Untitled-design-2-1024x1024%201%20(1).png' },
  { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6a06c31e78fcd323bb3c0ae5_RCSP_2026_GOLD%201.png' },
  { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/685321efbac9b840b2029e9c_4.png' },
  { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/685322b97fd1d7972c3f3fa9_7.png' },
  { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69d6389b4bb30d2e31bad5ba_T3_Powerwall-Certified-Installer_B-scaled%201.png', wide: true },
  { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/68e4a57c5ec2a3babad0f41c_Frame%2014.png' },
  { src: 'https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/69eb38b7b1ad520c7336e5b8_Emphase-logo%201.png' },
]

export default function ExperienceSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const xRef = useRef(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const speed = 1.5
    function animate() {
      if (!track) return
      xRef.current -= speed
      const first = track.firstElementChild as HTMLElement
      if (first) {
        const w = first.offsetWidth + parseInt(getComputedStyle(first).marginRight || '0')
        if (first.offsetLeft + xRef.current + first.offsetWidth < 0) {
          track.appendChild(first)
          xRef.current += w
        }
      }
      track.style.transform = `translateX(${xRef.current}px)`
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section className="section exp-section">
      <div className="wrapper">

        {/* Pretitle */}
        <div className="margin-m">
          <h2 className="pretitle text-color-secondary">Our Experience</h2>
        </div>

        {/* 7,000+ counter */}
        <div className="exp-counter-row">
          <div className="exp-big-number">7,000+</div>
          <div className="exp-counter-label">
            <strong>Solar Systems</strong> Installed
          </div>
        </div>

        {/* Logo grid — static, matching screenshot layout */}
        <div className="exp-logo-grid">
          {LOGOS.map((logo, i) => (
            <div key={i} className="exp-logo-cell">
              <img
                src={logo.src}
                alt=""
                loading="lazy"
                className={`exp-logo-img${logo.wide ? ' exp-logo-img--wide' : ''}`}
              />
            </div>
          ))}
        </div>

        {/* Body text */}
        <div className="margin-xxl exp-body-text">
          <p>
            What sets us apart from other solar panel installation companies is our focus on sustainability,
            quality, and customer satisfaction. Luminarix Solar &amp; Roofing has been at the forefront of
            providing quality{' '}
            <a href="/solutions/solar" style={{ textDecoration: 'underline', color: 'inherit' }}>
              solar panel services
            </a>
            , helping thousands of homes and businesses save on their energy bills while reducing their
            carbon footprint.
          </p>
          <br />
          <p>
            As a Certified Solar PROtect Installer through the Owens Corning Solar PROtect Roofing Program,
            we&apos;re proud to offer unmatched peace of mind. Our team is specially trained to install solar
            mounts without compromising the integrity of your roofing system, backed by the Owens Corning
            roofing warranty.
          </p>
        </div>

        {/* CTA */}
        <div className="button-wrapper">
          <a href="/our-work">
            <div className="button sob bg-white"><div>Browse Our Work</div></div>
            <div className="button-shadow sob-shadow" />
          </a>
        </div>

      </div>
    </section>
  )
}