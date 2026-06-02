"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  return (
    <section className="section home-hero">
      {/* Background video */}
      <video
        className="hero-bg-video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6410cce6b5fdaf0f9d1f04ab_optimized-poster-00001.jpg"
      >
        <source
          src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6410cce6b5fdaf0f9d1f04ab_optimized-transcode.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/6410cce6b5fdaf0f9d1f04ab_optimized-transcode.webm"
          type="video/webm"
        />
      </video>
      <div className="hero-overlay" />

      {/* Hero text content */}
      <div className="hero-content" style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
        <div className="margin-xh">
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end" }}>
            <div>
              <div className="margin-s">
                <div className="pretitle" style={{ color: "transparent" }}>&nbsp;</div>
              </div>
              <div className="margin-s">
                <h1 className="header-h weight-300 monument-extended" style={{ color: "#fff" }}>
                  The Leading Solar &amp; Roofing Company in California -
                </h1>
              </div>
              <div className="margin-s">
                <div className="header-m weight-300 acumen-pro-wide" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Sustainable Solar and Roofing Solutions Since 1974
                </div>
              </div>
            </div>

            {/* Play button — lightbox trigger */}
            <a
              href="https://www.youtube.com/watch?v=TpzN3qF0Zi0"
              target="_blank"
              rel="noopener noreferrer"
              className="hide-tablet w-lightbox"
              style={{ alignSelf: "flex-end", paddingBottom: 8 }}
            >
              <div className="vfc">
                <div style={{ marginBottom: 8 }}>
                  <div className="play-button home-play-button">
                    <img
                      src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/626c6a18e14c396ceb5926f2_White%20Triangle.svg"
                      alt=""
                      className="play-button-icon"
                      style={{ margin: 0 }}
                    />
                  </div>
                </div>
                <div className="pretitle" style={{ color: "#fff" }}>Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* "Our Impact" label */}
        <div style={{ textAlign: "center", marginBottom: 0 }}>
          <div
            style={{
              display: "inline-block",
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "8px 24px",
              marginBottom: 0,
            }}
          >
            <div className="pretitle" style={{ color: "#fff" }}>Our Impact</div>
          </div>
        </div>
      </div>

      {/* Impact stats bar */}
      <div className="impact-bar">
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {/* CO2 */}
          <div className="impact-item">
            <img
              src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bd23049552aa60c5ca_C02%20Emissions%20Eliminated.svg"
              alt="CO2 Offset icon"
              className="impact-icon"
            />
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span
                  className="acumen-pro-wide"
                  style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, color: "var(--color-primary)" }}
                >
                  256
                </span>
                <span className="header-m weight-300">K</span>
              </div>
              <div className="pretitle" style={{ color: "var(--color-primary)", opacity: 0.6 }}>CO2 Offset</div>
            </div>
          </div>
          {/* Lifetime Energy */}
          <div className="impact-item">
            <img
              src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bef2460fbb5539e168_Lifetime%20Energy.svg"
              alt="Lifetime Energy icon"
              className="impact-icon"
            />
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span
                  className="acumen-pro-wide"
                  style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300 }}
                >
                  90
                </span>
                <span className="header-m weight-300">MW+</span>
              </div>
              <div className="pretitle" style={{ opacity: 0.6 }}>Lifetime Energy</div>
            </div>
          </div>
          {/* Savings */}
          <div className="impact-item">
            <img
              src="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/625ee0bd66edf9757df050f1_Avg%20Utility%20Savings.svg"
              alt="Savings icon"
              className="impact-icon"
            />
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span
                  className="acumen-pro-wide"
                  style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300 }}
                >
                  $24.8
                </span>
                <span className="header-m weight-300">M</span>
              </div>
              <div className="pretitle" style={{ opacity: 0.6 }}>Saved to Date</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
