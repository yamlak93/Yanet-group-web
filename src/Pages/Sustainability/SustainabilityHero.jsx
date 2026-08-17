import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import sustainImg from "../../assets/sustain.jpg";

const SustainabilityHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 1.05,
      behavior: "smooth",
    });
  };

  return (
    <section className="sustain-hero">
      <div className="sustain-bg" />

      <div className="sustain-shapes">
        <div className="shape s1" />
        <div className="shape s2" />
      </div>

      {/* Single image on LEFT edge */}
      <div className={`sustain-visual ${loaded ? "show" : ""}`}>
        <div
          className="visual-frame"
          style={{ backgroundImage: `url('${sustainImg}')` }}
          role="img"
          aria-label="Sustainable energy landscape"
        />
      </div>

      {/* Content on the right */}
      <div className={`sustain-content ${loaded ? "show" : ""}`}>
        <h1 className="sustain-title">Our Sustainability Commitment</h1>

        <div className="sustain-desc-box">
          <h3>Sustainability Pillars</h3>
          <p>
            Yanet’s core sustainability principles and global sustainable
            responsibilities. We conform to standards in our commitment to
            ethical sourcing, sustainable products, and environmental
            responsibility.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="sustain-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      <div className="sustain-wave">
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
        .sustain-hero {
          position: relative;
          min-height: 110vh;
          min-height: 110dvh;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          overflow: hidden;
          background: #0e6f35;
        }

        .sustain-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(
            245deg,
            #0f5d32 0%,
            #1b934b 40%,
            #117738 70%,
            #17b34e 100%
          );
        }

        .sustain-shapes {
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
          top: -80px;
          right: -100px;
        }

        .s2 {
          width: 300px;
          height: 300px;
          bottom: 60px;
          right: 30%;
        }

        .sustain-content {
          position: relative;
          z-index: 5;
          max-width: 560px;
          padding: 8rem 3.5rem 7rem 2rem;
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          text-align: left;
        }

        .sustain-content.show {
          opacity: 1;
          transform: translateX(0);
        }

        .sustain-title {
          margin: 0 0 1.5rem;
          font-size: clamp(2.2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          line-height: 1.15;
        }

        .sustain-desc-box {
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          border-radius: 16px;
          padding: 1.3rem 1.5rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          max-width: 440px;
        }

        .sustain-desc-box h3 {
          margin: 0 0 0.5rem;
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .sustain-desc-box p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
        }

        .sustain-visual {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-48%);
          z-index: 3;
          width: min(48vw, 560px);
          aspect-ratio: 1;
          opacity: 0;
          transition: opacity 1s ease 0.15s;
        }

        .sustain-visual.show {
          opacity: 1;
        }

        .visual-frame {
          width: 100%;
          height: 100%;
          border-radius: 0 50% 50% 0;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          box-shadow: 16px 0 48px rgba(0, 0, 0, 0.25);
          border: 3px solid rgba(255, 255, 255, 0.12);
          border-left: none;
        }

        .sustain-scroll {
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
          animation: sustainBounce 2s ease-in-out infinite;
        }

        .sustain-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes sustainBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .sustain-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .sustain-wave svg {
          width: 100%;
          height: 90px;
          display: block;
        }

        @media (max-width: 960px) {
          .sustain-hero {
            min-height: 105vh;
            min-height: 105dvh;
            justify-content: center;
          }

          .sustain-visual {
            width: min(55vw, 380px);
            top: auto;
            bottom: 130px;
            transform: none;
            left: -20px;
          }

          .sustain-content {
            padding: 7rem 1.8rem 16rem;
            max-width: 100%;
          }

          .sustain-scroll {
            bottom: 100px;
          }
        }

        @media (max-width: 600px) {
          .sustain-hero {
            min-height: 100vh;
            min-height: 100dvh;
          }

          .sustain-visual {
            display: none;
          }

          .sustain-content {
            padding: 6.5rem 1.3rem 5.5rem;
            text-align: center;
          }

          .sustain-desc-box {
            margin: 0 auto;
          }

          .sustain-title {
            font-size: 2.1rem;
          }

          .sustain-scroll {
            bottom: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityHero;
