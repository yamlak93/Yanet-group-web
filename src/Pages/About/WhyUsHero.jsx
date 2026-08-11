import React, { useEffect, useState } from "react";
import { ChevronDown, ShieldCheck, Globe2, Award } from "lucide-react";

const WhyUsHero = () => {
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
    <section className="why-hero">
      <div className="why-bg" />
      <div className="why-shapes">
        <div className="shape s1" />
        <div className="shape s2" />
      </div>

      <div className={`why-content ${loaded ? "show" : ""}`}>
        <span className="why-badge">Why Partner With Us</span>
        <h1 className="why-title">
          Built on Trust, <span className="highlight">Driven by Quality</span>
        </h1>

        <div className="why-desc-box">
          <p>
            For more than two decades, Yanet Industrials has supported Ethiopian
            manufacturers and global buyers with reliable agricultural
            commodities and industrial chemical solutions — delivered with
            integrity, consistency, and care.
          </p>
        </div>

        <div className="why-pills">
          <div className="pill">
            <Award size={18} />
            <span>20+ Years Experience</span>
          </div>
          <div className="pill">
            <Globe2 size={18} />
            <span>Global Trade Network</span>
          </div>
          <div className="pill">
            <ShieldCheck size={18} />
            <span>Quality Standards</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="why-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      <div className="why-wave">
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
        .why-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0f5d32;
          border-radius: 0 0 36px 36px;
        }

        .why-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(
            125deg,
            #0a3d24 0%,
            #0f5d32 40%,
            #15803d 70%,
            #16a34a 100%
          );
        }

        .why-shapes {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
        }

        .s1 {
          width: 420px;
          height: 420px;
          top: -100px;
          right: -80px;
        }

        .s2 {
          width: 260px;
          height: 260px;
          bottom: 12%;
          left: 8%;
        }

        .why-content {
          position: relative;
          z-index: 5;
          max-width: 680px;
          padding: 8rem 2rem 7rem 3.5rem;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.95s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .why-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .why-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.35rem 0.9rem;
          border-radius: 50px;
          letter-spacing: 0.3px;
          margin-bottom: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .why-title {
          margin: 0 0 1.4rem;
          font-size: clamp(2.2rem, 4.8vw, 3.3rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          line-height: 1.15;
        }

        .why-title .highlight {
          color: #bbf7d0;
        }

        .why-desc-box {
          border: 1.5px solid rgba(255, 255, 255, 0.28);
          border-radius: 16px;
          padding: 1.25rem 1.45rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          max-width: 540px;
          margin-bottom: 1.75rem;
        }

        .why-desc-box p {
          margin: 0;
          font-size: 1.02rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.92);
        }

        .why-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.5rem 0.95rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .why-scroll {
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
          animation: whyBounce 2s ease-in-out infinite;
        }

        .why-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes whyBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .why-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .why-wave svg {
          width: 100%;
          height: 80px;
          display: block;
        }

        @media (max-width: 900px) {
          .why-content {
            padding: 7rem 1.8rem 5.5rem;
            max-width: 100%;
          }

          .why-hero {
            border-radius: 0 0 28px 28px;
          }
        }

        @media (max-width: 560px) {
          .why-title {
            font-size: 2.05rem;
          }

          .why-content {
            padding: 6.5rem 1.3rem 5rem;
          }

          .why-desc-box p {
            font-size: 0.95rem;
          }

          .why-scroll {
            bottom: 85px;
          }

          .why-hero {
            border-radius: 0 0 22px 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyUsHero;
