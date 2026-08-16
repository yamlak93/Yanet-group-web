import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

// Replace with your handshake / partnership image
import partnersHeroImg from "../../assets/hand-shaking.png";

const GlobalPartnersHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <section className="gph-hero">
      {/* Background image */}
      <div
        className="gph-bg"
        style={{ backgroundImage: `url('${partnersHeroImg}')` }}
        role="img"
        aria-label="Partnership handshake"
      />

      {/* Dark overlay for readability */}
      <div className="gph-overlay" />

      {/* Soft vignette */}
      <div className="gph-vignette" />

      <div className={`gph-content ${loaded ? "show" : ""}`}>
        <span className="gph-badge">OUR PARTNERS</span>

        <h1 className="gph-title">
          Building Strong <span className="highlight">Partnerships</span>
        </h1>

        <p className="gph-desc">
          We collaborate with trusted local and international partners to create
          lasting value, ensure quality, and expand global opportunities.
        </p>
      </div>

      <button
        type="button"
        className="gph-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      <div className="gph-wave">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C360,90 720,10 1080,45 C1260,65 1380,40 1440,50 L1440,90 L0,90 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <style>{`
        .gph-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #0b1220;
          border-radius: 0 0 36px 36px;
        }

        .gph-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          transform: scale(1.04);
        }

        .gph-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(8, 14, 28, 0.72) 0%,
            rgba(10, 18, 36, 0.78) 45%,
            rgba(8, 14, 28, 0.88) 100%
          );
        }

        .gph-vignette {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          background: radial-gradient(
            ellipse 70% 60% at 50% 45%,
            transparent 0%,
            rgba(5, 10, 20, 0.35) 100%
          );
        }

        .gph-content {
          position: relative;
          z-index: 5;
          max-width: 720px;
          padding: 7rem 1.5rem 6rem;
          text-align: center;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.95s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gph-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gph-badge {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(226, 232, 240, 0.7);
          margin-bottom: 1.25rem;
        }

        .gph-title {
          margin: 0 0 1.2rem;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.6px;
          line-height: 1.12;
        }

        .gph-title .highlight {
          color: #4ade80;
        }

        .gph-desc {
          margin: 0 auto;
          max-width: 540px;
          font-size: clamp(1rem, 1.6vw, 1.12rem);
          line-height: 1.75;
          color: rgba(226, 232, 240, 0.82);
        }

        .gph-scroll {
          position: absolute;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 6;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: #16a34a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 22px rgba(22, 163, 74, 0.45);
          animation: gphBounce 2s ease-in-out infinite;
        }

        .gph-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes gphBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .gph-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .gph-wave svg {
          width: 100%;
          height: 80px;
          display: block;
        }

        @media (max-width: 700px) {
          .gph-content {
            padding: 6.5rem 1.3rem 5rem;
          }

          .gph-title {
            font-size: 2.1rem;
          }

          .gph-scroll {
            bottom: 85px;
          }

          .gph-hero {
            border-radius: 0 0 24px 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalPartnersHero;
