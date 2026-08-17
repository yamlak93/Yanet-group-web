import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import aboutHeroImage from "../../assets/agri_products/coffee.png";

const AboutHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 0.95,
      behavior: "smooth",
    });
  };

  return (
    <section className="about-hero">
      {/* Background image */}
      <div
        className="about-bg"
        style={{ backgroundImage: `url('${aboutHeroImage}')` }}
        role="img"
        aria-label="About Yanet Industrials"
      />

      {/* Green gradient overlay */}
      <div className="about-overlay" />

      {/* Soft decorative shapes */}
      <div className="about-shapes">
        <div className="shape s1" />
        <div className="shape s2" />
      </div>

      {/* Content */}
      <div className={`about-content ${loaded ? "show" : ""}`}>
        <span className="about-badge">ABOUT US</span>

        <h1 className="about-headline">
          About Yanet Industrials:
          <br />
          Our Story & <span className="highlight">Impact</span>
        </h1>

        <p className="about-desc">
          Founded in Ethiopia, Yanet Industrial PLC connects local strength with
          global opportunity — trading agricultural commodities, supplying
          industrial materials, and building long-term partnerships with
          integrity and reliability.
        </p>
      </div>

      {/* Scroll button */}
      <button
        type="button"
        className="about-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      {/* Bottom wave curve */}
      <div className="about-wave">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C240,100 480,20 720,50 C960,80 1200,30 1440,55 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <style>{`
        .about-hero {
          position: relative;
          min-height: 110vh;
          min-height: 110dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0a3d24;
        }

        .about-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          transform: scale(1.06);
          animation: aboutZoom 14s ease-out forwards;
        }

        @keyframes aboutZoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }

        .about-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            105deg,
            rgba(6, 48, 28, 0.96) 0%,
            rgba(10, 61, 36, 0.9) 28%,
            rgba(15, 93, 50, 0.72) 52%,
            rgba(20, 100, 55, 0.35) 72%,
            rgba(20, 100, 55, 0.12) 88%,
            transparent 100%
          );
          pointer-events: none;
        }

        .about-shapes {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
        }

        .s1 {
          width: 380px;
          height: 380px;
          top: -90px;
          left: -80px;
        }

        .s2 {
          width: 240px;
          height: 240px;
          bottom: 120px;
          left: 30%;
        }

        .about-content {
          position: relative;
          z-index: 5;
          max-width: 600px;
          padding: 8rem 2rem 7rem 3.5rem;
          opacity: 0;
          transform: translateX(-28px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .about-content.show {
          opacity: 1;
          transform: translateX(0);
        }

        .about-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.12);
          color: #e8f5e9;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          margin-bottom: 1.15rem;
        }

        .about-headline {
          margin: 0 0 1.25rem;
          font-size: clamp(2.15rem, 4.5vw, 3.15rem);
          font-weight: 800;
          line-height: 1.15;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .about-headline .highlight {
          color: #86efac;
        }

        .about-desc {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.88);
          max-width: 460px;
        }

        .about-scroll {
          position: absolute;
          bottom: 120px;
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
          box-shadow: 0 6px 20px rgba(22, 163, 74, 0.4);
          animation: aboutBounce 2s ease-in-out infinite;
        }

        .about-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes aboutBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .about-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .about-wave svg {
          width: 100%;
          height: 90px;
          display: block;
        }

        @media (max-width: 900px) {
          .about-hero {
            min-height: 105vh;
            min-height: 105dvh;
          }

          .about-content {
            padding: 7rem 1.8rem 5.5rem;
            max-width: 100%;
          }

          .about-overlay {
            background: linear-gradient(
              180deg,
              rgba(6, 48, 28, 0.94) 0%,
              rgba(10, 61, 36, 0.85) 50%,
              rgba(15, 80, 45, 0.7) 100%
            );
          }

          .about-bg {
            background-position: center center;
          }

          .about-scroll {
            bottom: 100px;
          }
        }

        @media (max-width: 520px) {
          .about-hero {
            min-height: 100vh;
            min-height: 100dvh;
          }

          .about-headline {
            font-size: 2rem;
          }

          .about-content {
            padding: 6.5rem 1.3rem 5rem;
            text-align: center;
          }

          .about-desc {
            margin-left: auto;
            margin-right: auto;
            font-size: 0.98rem;
          }

          .about-scroll {
            bottom: 80px;
          }

          .about-wave svg {
            height: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;
