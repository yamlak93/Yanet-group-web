import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    image: "/src/assets/coffee1.jpg",
    alt: "Premium coffee processing",
  },
  {
    image: "/src/assets/Chemicaltube1.jpg",
    alt: "Industrial chemical solutions",
  },
  {
    image: "/src/assets/ChemicalFactory1.jpg",
    alt: "Chemical manufacturing",
  },
];

const Businesshero = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
    <section className="biz-hero">
      <div className="biz-bg" />

      <div className="biz-shapes">
        <div className="shape s1" />
        <div className="shape s2" />
      </div>

      <div className={`biz-content ${loaded ? "show" : ""}`}>
        <h1 className="biz-title">Our Businesses</h1>

        <div className="biz-desc-box">
          <p>
            A diversified industrial group, Yanet Industrials operates across
            several key sectors, driving economic development and international
            trade. Our expertise spans three core pillars:
          </p>
        </div>
      </div>

      <div className={`biz-visual ${loaded ? "show" : ""}`}>
        <div className="visual-frame">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`frame-slide ${index === current ? "active" : ""}`}
              style={{ backgroundImage: `url('${slide.image}')` }}
              role="img"
              aria-label={slide.alt}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        className="scroll-down"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      <div className="biz-wave">
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
        .biz-hero {
          position: relative;
          min-height: 110vh;
          min-height: 110dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0e6f35;
        }

        .biz-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(
            115deg,
            #0f5d32 0%,
            #1b934b 40%,
            #117738 70%,
            #17b34e 100%
          );
        }

        .biz-shapes {
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
          left: -100px;
        }

        .s2 {
          width: 300px;
          height: 300px;
          bottom: 60px;
          left: 30%;
        }

        .biz-content {
          position: relative;
          z-index: 5;
          max-width: 560px;
          padding: 8rem 2rem 7rem 3.5rem;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .biz-content.show {
          opacity: 1;
          transform: translateX(0);
        }

        .biz-title {
          margin: 0 0 1.6rem;
          font-size: clamp(2.4rem, 5vw, 3.4rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .biz-desc-box {
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          border-radius: 16px;
          padding: 1.3rem 1.5rem;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(6px);
          max-width: 420px;
        }

        .biz-desc-box p {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.92);
        }

        .biz-visual {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-48%);
          z-index: 3;
          width: min(48vw, 560px);
          aspect-ratio: 1;
          opacity: 0;
          transition: opacity 1s ease 0.15s;
        }

        .biz-visual.show {
          opacity: 1;
        }

        .visual-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50% 0 0 50%;
          overflow: hidden;
          box-shadow: -16px 0 48px rgba(0, 0, 0, 0.25);
          border: 3px solid rgba(255, 255, 255, 0.12);
          border-right: none;
        }

        .frame-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 1.1s ease-in-out, transform 6s ease;
        }

        .frame-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .scroll-down {
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
          animation: bounceDown 2s ease-in-out infinite;
        }

        .scroll-down:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .biz-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .biz-wave svg {
          width: 100%;
          height: 90px;
          display: block;
        }

        @media (max-width: 960px) {
          .biz-hero {
            min-height: 105vh;
            min-height: 105dvh;
          }

          .biz-visual {
            width: min(55vw, 380px);
            top: auto;
            bottom: 130px;
            transform: none;
            right: -20px;
          }

          .biz-visual.show {
            transform: none;
          }

          .biz-content {
            padding: 7rem 1.8rem 16rem;
            max-width: 100%;
          }

          .scroll-down {
            bottom: 100px;
          }
        }

        @media (max-width: 600px) {
          .biz-hero {
            min-height: 100vh;
            min-height: 100dvh;
          }

          .biz-visual {
            display: none;
          }

          .biz-content {
            padding: 6.5rem 1.3rem 5.5rem;
            text-align: center;
          }

          .biz-desc-box {
            margin: 0 auto;
          }

          .biz-title {
            font-size: 2.2rem;
          }

          .scroll-down {
            bottom: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default Businesshero;
