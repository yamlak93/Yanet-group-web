import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

// Replace with your world-map / network image path
import globalMapImg from "../../assets/global-connect.png";

const GlobalReachHero = () => {
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
    <section className="gr-hero">
      {/* Background gradient */}
      <div className="gr-bg" />

      {/* World map image – right side */}
      <div
        className={`gr-map ${loaded ? "show" : ""}`}
        style={{ backgroundImage: `url('${globalMapImg}')` }}
        role="img"
        aria-label="Global trade network map"
      />

      {/* Soft fade so text stays readable on the left */}
      <div className="gr-fade" />

      <div className={`gr-content ${loaded ? "show" : ""}`}>
        <span className="gr-badge">GLOBAL NETWORK</span>

        <h1 className="gr-title">Our Global Reach</h1>

        <p className="gr-subtitle">Connecting Ethiopia to the world</p>

        <p className="gr-desc">
          We are proud to supply high-quality Ethiopian commodities to
          international markets, building strong relationships and creating
          lasting value across the globe.
        </p>
      </div>

      <button
        type="button"
        className="gr-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      {/* Bottom curve into next section */}
      <div className="gr-wave">
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
        .gr-hero {
          position: relative;
          min-height: 92vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0a3d24;
          border-radius: 0 0 36px 36px;
        }

        .gr-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(
            105deg,
            #06301c 0%,
            #0a3d24 28%,
            #0f5d32 55%,
            #147a40 100%
          );
        }

        .gr-map {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 62%;
          z-index: 1;
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 1.1s ease, transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            rgba(0, 0, 0, 0.35) 18%,
            rgba(0, 0, 0, 0.85) 40%,
            #000 100%
          );
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            rgba(0, 0, 0, 0.35) 18%,
            rgba(0, 0, 0, 0.85) 40%,
            #000 100%
          );
        }

        .gr-map.show {
          opacity: 0.95;
          transform: translateX(0);
        }

        .gr-fade {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            rgba(6, 48, 28, 0.97) 0%,
            rgba(10, 61, 36, 0.88) 32%,
            rgba(15, 93, 50, 0.45) 55%,
            rgba(15, 93, 50, 0.15) 75%,
            transparent 100%
          );
        }

        .gr-content {
          position: relative;
          z-index: 5;
          max-width: 560px;
          padding: 7.5rem 2rem 6.5rem 3.5rem;
          opacity: 0;
          transform: translateY(26px);
          transition: all 0.95s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gr-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gr-badge {
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

        .gr-title {
          margin: 0 0 0.55rem;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.6px;
          line-height: 1.08;
        }

        .gr-subtitle {
          margin: 0 0 1.35rem;
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          font-weight: 500;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.4;
        }

        .gr-desc {
          margin: 0;
          max-width: 440px;
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.78);
        }

        .gr-scroll {
          position: absolute;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 6;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: none;
          background: #16a34a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(22, 163, 74, 0.45);
          animation: grBounce 2s ease-in-out infinite;
        }

        .gr-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes grBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .gr-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .gr-wave svg {
          width: 100%;
          height: 80px;
          display: block;
        }

        @media (max-width: 960px) {
          .gr-content {
            padding: 7rem 1.8rem 5.5rem;
            max-width: 100%;
          }

          .gr-map {
            width: 100%;
            opacity: 0.35;
            mask-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.5) 0%,
              rgba(0, 0, 0, 0.25) 60%,
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.5) 0%,
              rgba(0, 0, 0, 0.25) 60%,
              transparent 100%
            );
          }

          .gr-map.show {
            opacity: 0.4;
          }

          .gr-fade {
            background: linear-gradient(
              180deg,
              rgba(6, 48, 28, 0.92) 0%,
              rgba(10, 61, 36, 0.88) 45%,
              rgba(15, 93, 50, 0.75) 100%
            );
          }

          .gr-hero {
            border-radius: 0 0 28px 28px;
          }
        }

        @media (max-width: 560px) {
          .gr-title {
            font-size: 2.15rem;
          }

          .gr-content {
            padding: 6.5rem 1.3rem 5rem;
          }

          .gr-desc {
            font-size: 0.95rem;
          }

          .gr-scroll {
            bottom: 85px;
          }

          .gr-hero {
            border-radius: 0 0 22px 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalReachHero;
