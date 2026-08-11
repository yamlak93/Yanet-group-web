import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const OurStoryHero = () => {
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
    <section className="story-hero">
      <div className="story-bg" />
      <div className="story-shapes">
        <div className="shape s1" />
        <div className="shape s2" />
        <div className="shape s3" />
      </div>

      <div className={`story-content ${loaded ? "show" : ""}`}>
        <span className="story-badge">Since 2002</span>
        <p className="story-label">Our Journey</p>
        <h1 className="story-title">
          The Story Behind <span className="highlight">Yanet Industrials</span>
        </h1>
        <div className="story-desc-box">
          <p>
            From a focused trading venture in Addis Ababa to a trusted partner
            in agricultural exports and industrial supply — our path has been
            built on integrity, quality, and lasting relationships across
            Ethiopia and the world.
          </p>
        </div>

        <div className="story-stats">
          <div className="stat">
            <strong>20+</strong>
            <span>Years of excellence</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>2002</strong>
            <span>Founded in Ethiopia</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>Global</strong>
            <span>Trade network</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="story-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      <div className="story-wave">
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
        .story-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0f5d32;
          border-radius: 0 0 36px 36px;
        }

        .story-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(
            125deg,
            #0a3d24 0%,
            #0f5d32 35%,
            #15803d 65%,
            #16a34a 100%
          );
        }

        .story-shapes {
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
          width: 480px;
          height: 480px;
          top: -120px;
          right: -100px;
        }

        .s2 {
          width: 280px;
          height: 280px;
          bottom: 10%;
          left: 5%;
        }

        .s3 {
          width: 160px;
          height: 160px;
          top: 40%;
          right: 20%;
          background: rgba(255, 255, 255, 0.06);
        }

        .story-content {
          position: relative;
          z-index: 5;
          max-width: 720px;
          padding: 8rem 2rem 7rem 3.5rem;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.95s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .story-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .story-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.35rem 0.9rem;
          border-radius: 50px;
          letter-spacing: 0.4px;
          margin-bottom: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .story-label {
          margin: 0 0 0.35rem;
          font-size: 1.05rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.75);
        }

        .story-title {
          margin: 0 0 1.4rem;
          font-size: clamp(2.2rem, 4.8vw, 3.4rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          line-height: 1.15;
        }

        .story-title .highlight {
          color: #bbf7d0;
        }

        .story-desc-box {
          border: 1.5px solid rgba(255, 255, 255, 0.28);
          border-radius: 16px;
          padding: 1.25rem 1.45rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          max-width: 540px;
          margin-bottom: 2rem;
        }

        .story-desc-box p {
          margin: 0;
          font-size: 1.02rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.92);
        }

        .story-stats {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.25rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .stat strong {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
        }

        .stat span {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.75);
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(255, 255, 255, 0.25);
        }

        .story-scroll {
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
          animation: storyBounce 2s ease-in-out infinite;
        }

        .story-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes storyBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .story-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .story-wave svg {
          width: 100%;
          height: 80px;
          display: block;
        }

        @media (max-width: 900px) {
          .story-content {
            padding: 7rem 1.8rem 5.5rem;
            max-width: 100%;
          }

          .story-hero {
            border-radius: 0 0 28px 28px;
          }
        }

        @media (max-width: 560px) {
          .story-title {
            font-size: 2.05rem;
          }

          .story-content {
            padding: 6.5rem 1.3rem 5rem;
          }

          .story-desc-box {
            padding: 1.1rem 1.2rem;
          }

          .story-desc-box p {
            font-size: 0.95rem;
          }

          .stat-divider {
            display: none;
          }

          .story-stats {
            gap: 1rem 1.5rem;
          }

          .story-scroll {
            bottom: 85px;
          }

          .story-hero {
            border-radius: 0 0 22px 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default OurStoryHero;
