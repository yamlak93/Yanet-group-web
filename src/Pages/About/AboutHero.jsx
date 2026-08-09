import React, { useEffect, useState } from "react";
import aboutHeroImage from "../../assets/coffee1.jpg";
const AboutHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="about-hero">
      {/* Background image */}
      <div
        className="about-bg"
        style={{
          backgroundImage: `url('${aboutHeroImage}')`,
        }}
      />

      {/* Green gradient overlay */}
      <div className="about-overlay" />

      {/* Content */}
      <div className={`about-content ${loaded ? "show" : ""}`}>
        <h1 className="about-headline">
          About Yanet Industrials:
          <br />
          Our Story & Impact
        </h1>

        <p className="about-label">Hero Paragraph</p>

        <p className="about-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim, quis commodo consequat.
        </p>
      </div>

      <style>{`
        .about-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #1a4d2e;
          border-radius: 0 0 36px 36px;
        }

        .about-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          transform: scale(1.04);
          animation: aboutZoom 12s ease-out forwards;
          border-radius: 0 0 36px 36px;
        }

        @keyframes aboutZoom {
          from { transform: scale(1.08); }
          to { transform: scale(1); }
        }

        .about-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            105deg,
            rgba(22, 90, 45, 0.96) 0%,
            rgba(27, 110, 55, 0.88) 30%,
            rgba(34, 130, 65, 0.5) 55%,
            rgba(40, 140, 70, 0.18) 75%,
            transparent 90%
          );
          pointer-events: none;
          border-radius: 0 0 36px 36px;
        }

        .about-content {
          position: relative;
          z-index: 5;
          max-width: 620px;
          padding: 8rem 2rem 5rem 4rem;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.12s;
        }

        .about-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .about-headline {
          margin: 0 0 1.3rem;
          font-size: clamp(2.2rem, 4.5vw, 3.3rem);
          font-weight: 800;
          line-height: 1.18;
          color: #ffffff;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 18px rgba(0, 0, 0, 0.15);
        }

        .about-label {
          margin: 0 0 0.7rem;
          font-size: 1.15rem;
          font-weight: 650;
          color: rgba(255, 255, 255, 0.95);
        }

        .about-desc {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.85);
          max-width: 440px;
        }

        @media (max-width: 900px) {
          .about-content {
            padding: 7rem 1.8rem 4rem 1.8rem;
            max-width: 100%;
          }

          .about-overlay {
            background: linear-gradient(
              180deg,
              rgba(22, 90, 45, 0.92) 0%,
              rgba(27, 110, 55, 0.78) 45%,
              rgba(30, 100, 50, 0.55) 100%
            );
          }

          .about-bg {
            background-position: center center;
          }

          .about-hero,
          .about-bg,
          .about-overlay {
            border-radius: 0 0 28px 28px;
          }
        }

        @media (max-width: 520px) {
          .about-headline {
            font-size: 2rem;
          }

          .about-content {
            padding: 6.5rem 1.3rem 3.5rem;
          }

          .about-desc {
            font-size: 0.98rem;
          }

          .about-hero,
          .about-bg,
          .about-overlay {
            border-radius: 0 0 22px 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;
