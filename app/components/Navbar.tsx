"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="nav-wrapper">
        {/* Brand */}
        <Link href="/" className="brand" style={{ display: "flex", alignItems: "center" }}>
          <span className="brand-text">
            PlanMy<span style={{ color: 'var(--color-secondary)' }}>Solar</span>
          </span>
        </Link>

        <div className="flex-right">
          {/* Hamburger */}
          <button
            className="hamburger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none",  color: "#1f3943"  }}
          >
            <div>Menu</div>
            <div className="burger-bun">
              <div className="burger-bar top-bun" />
              <div className="burger-bar patty" />
              <div className="burger-bar bottom-bun" />
            </div>
          </button>

          {/* Schedule Now Dropdown */}
          <div className="schedule-now-dropdown" style={{ display: "none" }}>
            {/* hidden on mobile — shown below in desktop */}
          </div>

          {/* Desktop nav items — hidden on mobile via CSS */}
          <div style={{ display: "flex", alignItems: "stretch" }} className="desktop-nav">
            {/* Schedule Now */}
            <div className="schedule-now-dropdown">
              <div className="dropdown-toggle-2">
                <div className="nav-link-button">Schedule Now</div>
                <span style={{ fontSize: 10 }}>▾</span>
              </div>
              <nav className="dropdown-list">
                <a
                  href="#"
  onClick={e => e.preventDefault()}
                  className="dropdown-link-w-icon"
                >
                  <img
                    src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/63c0b740a8036c6e34ac1c28_sunicon.png"
                    alt=""
                    className="dropdown-link-icon"
                  />
                  <div className="dropdown-link-text">Solar Consultation</div>
                </a>
                <a
                  href="#"
  onClick={e => e.preventDefault()}
                  className="dropdown-link-w-icon"
                >
                  <img
                    src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/63c0b7e8ce1b4bce880cb795_rooficon.png"
                    alt=""
                    className="dropdown-link-icon"
                  />
                  <div className="dropdown-link-text">Roofing Consultation</div>
                </a>
              </nav>
            </div>

            {/* Instant Quote */}
            <a href="/solar-panels-costs-calculator" className="nav-estimate">
              <div className="nav-link-button">Instant Quote</div>
              <img
                src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/638e4c3ab3ed341657e70b08_quote.svg"
                alt=""
                style={{ width: 18, height: 18 }}
              />
            </a>

            {/* Phone */}
            <div className="phone-widget">
              <a href="tel:8886951205">
                <span>(888) 695-1205</span>
                <img
                  className="phone-icon"
                  src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/68949697c3f25efc3fe65756_Vector.png"
                  alt="Call Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#fff",
            zIndex: 199,
            overflowY: "auto",
            padding: "90px 30px 40px",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "none",
              border: "none",
              fontSize: 24,
              cursor: "pointer",
              color: "var(--color-primary)",
            }}
          >
            ✕
          </button>

          <div className="pretitle-mobile">WHO WE WORK WITH</div>
          <a href="#"
  onClick={e => e.preventDefault()}>Residential Customers</a>
          <a href="#"
  onClick={e => e.preventDefault()}>Commercial Customers</a>

          <div className="pretitle-mobile">WHAT WE DO</div>
          <a href="#"
  onClick={e => e.preventDefault()} className="nav-link">Our Approach</a>
          <a href="#"
  onClick={e => e.preventDefault()} className="nav-link">Roofing Solutions</a>
          <a href="#"
  onClick={e => e.preventDefault()} className="nav-link">Solar Solutions</a>
          <a href="#"
  onClick={e => e.preventDefault()} className="nav-link">Battery Backup</a>

          <div className="pretitle-mobile">OUR COMPANY</div>
          <a href="/about-us" className="nav-link">About Us</a>
          <a href="/our-work" className="nav-link">Our Work</a>
          <a href="/careers" className="nav-link">Careers</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/contact" className="nav-link">Contact Us</a>

          <div className="pretitle-mobile">RESOURCES</div>
          <a href="/solar-panels-costs-calculator" className="nav-link">Estimate Calculator</a>
          <a href="/home-visualizer" className="nav-link">3D Home Visualizer</a>

          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href="https://calendly.com/ameco-solar-roofing/solar-consultation"
              style={{
                background: "var(--color-primary)",
                color: "#fff",
                padding: "14px 24px",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Schedule Now
            </a>
            <a
              href="tel:8886951205"
              style={{
                background: "var(--color-dark-slate)",
                color: "#fff",
                padding: "14px 24px",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              (888) 695-1205
            </a>
          </div>
        </div>
      )}

      <style>{`
      @media (max-width: 991px) {
        .desktop-nav { display: none !important; }
        .hamburger-menu { display: flex !important; }
      }
      @media (min-width: 992px) {
        .desktop-nav { display: flex !important; align-items: stretch; }
        .hamburger-menu { display: none !important; }
      }
    `}</style>
    </>
  );
}
