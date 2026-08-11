import React, { useEffect, useState } from "react";
import { ChevronDown, Sprout, Ship, Globe2 } from "lucide-react";

import coffeeImg from "../../assets/coffee1.jpg";
import mungbean from "../../assets/mungbean1.png";
import safflower from "../../assets/safflower1.png";
import sesame from "../../assets/sesame1.png";

const slides = [
  {
    image: coffeeImg,
    alt: "Ethiopian coffee and agricultural export",
  },
  {
    image: mungbean,
    alt: "Commodity processing and preparation",
  },
  {
    image: safflower,
    alt: "Quality agricultural commodities",
  },
  {
    image: sesame,
    alt: "Quality agricultural commodities",
  },
];

const ExportHero = () => {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 0.95,
      behavior: "smooth",
    });
  };

  return (
    <section className="export-hero">
      {/* Full background slideshow */}
      <div className="export-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`export-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
      </div>

      {/* About-style green gradient overlay */}
      <div className="export-overlay" />

      <div className="export-shapes">
        <div className="shape s1" />
        <div className="shape s2" />
      </div>

      <div className={`export-content ${loaded ? "show" : ""}`}>
        <span className="export-badge">Business · Export</span>
        <p className="export-label">Agricultural & Commodities</p>
        <h1 className="export-title">
          Exporting Ethiopia’s{" "}
          <span className="highlight">Finest Commodities</span>
        </h1>

        <div className="export-desc-box">
          <p>
            Yanet Industrials sources, prepares, and exports premium Ethiopian
            agricultural products — including sesame, mung beans, coffee, and
            oilseeds — to buyers across Asia, the Middle East, and beyond.
          </p>
        </div>

        <div className="export-pills">
          <div className="pill">
            <Sprout size={18} />
            <span>Origin quality</span>
          </div>
          <div className="pill">
            <Ship size={18} />
            <span>Djibouti logistics</span>
          </div>
          <div className="pill">
            <Globe2 size={18} />
            <span>Global markets</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="export-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      <div className="export-wave">
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
        .export-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0f5d32;
          border-radius: 0 0 36px 36px;
        }

        .export-slides {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
        }

        .export-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center center;
          opacity: 0;
          transform: scale(1.08);
          transition: opacity 1.25s ease-in-out, transform 7s ease;
        }

        .export-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        /* About-page style: strong green wash over photo */
        .export-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          border-radius: inherit;
          background: linear-gradient(
            105deg,
            rgba(10, 50, 30, 0.94) 0%,
            rgba(15, 93, 50, 0.88) 38%,
            rgba(22, 128, 61, 0.72) 68%,
            rgba(22, 163, 74, 0.55) 100%
          );
        }

        .export-shapes {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
        }

        .s1 {
          width: 440px;
          height: 440px;
          top: -110px;
          right: -90px;
        }

        .s2 {
          width: 240px;
          height: 240px;
          bottom: 14%;
          left: 6%;
        }

        .export-content {
          position: relative;
          z-index: 5;
          max-width: 680px;
          padding: 8rem 2rem 7rem 3.5rem;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.95s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .export-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .export-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.35rem 0.9rem;
          border-radius: 50px;
          letter-spacing: 0.3px;
          margin-bottom: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .export-label {
          margin: 0 0 0.4rem;
          font-size: 1.05rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.75);
        }

        .export-title {
          margin: 0 0 1.4rem;
          font-size: clamp(2.15rem, 4.6vw, 3.25rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          line-height: 1.15;
        }

        .export-title .highlight {
          color: #bbf7d0;
        }

        .export-desc-box {
          border: 1.5px solid rgba(255, 255, 255, 0.28);
          border-radius: 16px;
          padding: 1.25rem 1.45rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          max-width: 540px;
          margin-bottom: 1.75rem;
        }

        .export-desc-box p {
          margin: 0;
          font-size: 1.02rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.94);
        }

        .export-pills {
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

        .export-dots {
          position: absolute;
          left: 3.5rem;
          bottom: 130px;
          z-index: 6;
          display: flex;
          gap: 0.45rem;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.35);
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
        }

        .dot.active {
          background: #ffffff;
          width: 24px;
          border-radius: 8px;
        }

        .export-scroll {
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
          animation: exportBounce 2s ease-in-out infinite;
        }

        .export-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes exportBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .export-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .export-wave svg {
          width: 100%;
          height: 80px;
          display: block;
        }

        @media (max-width: 900px) {
          .export-content {
            padding: 7rem 1.8rem 5.5rem;
            max-width: 100%;
          }

          .export-overlay {
            background: linear-gradient(
              180deg,
              rgba(10, 50, 30, 0.94) 0%,
              rgba(15, 93, 50, 0.88) 50%,
              rgba(22, 128, 61, 0.78) 100%
            );
          }

          .export-dots {
            left: 1.8rem;
            bottom: 115px;
          }

          .export-hero {
            border-radius: 0 0 28px 28px;
          }
        }

        @media (max-width: 560px) {
          .export-title {
            font-size: 2rem;
          }

          .export-content {
            padding: 6.5rem 1.3rem 5rem;
          }

          .export-desc-box p {
            font-size: 0.95rem;
          }

          .export-dots {
            left: 1.3rem;
            bottom: 100px;
          }

          .export-scroll {
            bottom: 85px;
          }

          .export-hero {
            border-radius: 0 0 22px 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default ExportHero;
