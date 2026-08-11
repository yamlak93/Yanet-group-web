import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import globalBg from "../../assets/global-network.jpg";

const GlobalHero = () => {
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
    <section className="global-hero">
      {/* Background image */}
      <div
        className="global-bg"
        style={{
          backgroundImage: `url('${globalBg}')`,
        }}
      />

      {/* Dark teal overlay */}
      <div className="global-overlay" />

      {/* Soft animated glow dots */}
      <div className="global-glow">
        <span className="glow g1" />
        <span className="glow g2" />
        <span className="glow g3" />
      </div>

      <div className={`global-content ${loaded ? "show" : ""}`}>
        <h1 className="global-title">Our Global Network</h1>

        <div className="global-desc-box">
          <p>
            We offer a wide range of specialized industrial and commercial
            products, meticulously sourced and processed. From high-purity
            chemical compounds to essential commodities, Yanet Industrials
            ensures quality and reliability. Below is a detailed view of our key
            product categories.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="global-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      <div className="global-wave">
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
        .global-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0a1628;
          border-radius: 0 0 36px 36px;
        }

        .global-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transform: scale(1.05);
          animation: globalZoom 16s ease-out forwards;
          border-radius: 0 0 36px 36px;
        }

        @keyframes globalZoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }

        .global-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            115deg,
            rgba(8, 28, 48, 0.88) 0%,
            rgba(12, 45, 70, 0.72) 40%,
            rgba(16, 70, 90, 0.55) 70%,
            rgba(20, 90, 100, 0.4) 100%
          );
          border-radius: 0 0 36px 36px;
          pointer-events: none;
        }

        .global-glow {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
        }

        .glow {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(74, 222, 128, 0.35) 0%,
            transparent 70%
          );
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .g1 {
          width: 180px;
          height: 180px;
          top: 18%;
          right: 22%;
          animation-delay: 0s;
        }

        .g2 {
          width: 120px;
          height: 120px;
          top: 45%;
          right: 38%;
          animation-delay: 1.2s;
        }

        .g3 {
          width: 90px;
          height: 90px;
          bottom: 28%;
          right: 15%;
          animation-delay: 2.2s;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.15); }
        }

        .global-content {
          position: relative;
          z-index: 5;
          max-width: 680px;
          padding: 8rem 2rem 6rem 3.5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.95s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .global-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .global-label {
          margin: 0 0 0.4rem;
          font-size: 1.05rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.75);
        }

        .global-title {
          margin: 0 0 1.5rem;
          font-size: clamp(2.4rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .global-desc-box {
          border: 1.5px solid rgba(255, 255, 255, 0.22);
          border-radius: 18px;
          padding: 1.4rem 1.6rem;
          background: rgba(15, 40, 60, 0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
          max-width: 560px;
        }

        .global-desc-box p {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.9);
        }

        .global-scroll {
          position: absolute;
          bottom: 110px;
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
          box-shadow: 0 6px 20px rgba(22, 163, 74, 0.45);
          animation: globalBounce 2s ease-in-out infinite;
        }

        .global-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes globalBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .global-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .global-wave svg {
          width: 100%;
          height: 80px;
          display: block;
        }

        @media (max-width: 900px) {
          .global-content {
            padding: 7rem 1.8rem 5.5rem;
            max-width: 100%;
          }

          .global-hero,
          .global-bg,
          .global-overlay {
            border-radius: 0 0 28px 28px;
          }
        }

        @media (max-width: 520px) {
          .global-title {
            font-size: 2.15rem;
          }

          .global-content {
            padding: 6.5rem 1.3rem 5rem;
          }

          .global-desc-box {
            padding: 1.2rem 1.3rem;
          }

          .global-desc-box p {
            font-size: 0.98rem;
          }

          .global-scroll {
            bottom: 85px;
          }

          .global-hero,
          .global-bg,
          .global-overlay {
            border-radius: 0 0 22px 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalHero;
