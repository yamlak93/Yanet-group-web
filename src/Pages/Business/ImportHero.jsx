import React, { useEffect, useState } from "react";
import { ChevronDown, FlaskConical, Factory, Truck } from "lucide-react";

import tubeImg from "../../assets/chemicaltube1.jpg";
import factoryImg from "../../assets/chemicals1.jpg";
import chemicalsImg from "../../assets/chemicals2.jpg";

const slides = [
  {
    image: tubeImg,
    alt: "Industrial chemical solutions",
  },
  {
    image: factoryImg,
    alt: "Chemical manufacturing and supply",
  },
  {
    image: chemicalsImg,
    alt: "Industrial raw materials",
  },
];

const ImportHero = () => {
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
    <section className="import-hero">
      {/* Background slideshow */}
      <div className="import-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`import-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
      </div>

      {/* About-style green overlay */}
      <div className="import-overlay" />

      <div className="import-shapes">
        <div className="shape s1" />
        <div className="shape s2" />
      </div>

      <div className={`import-content ${loaded ? "show" : ""}`}>
        <span className="import-badge">Business · Import</span>
        <p className="import-label">Chemical & Industrial Materials</p>
        <h1 className="import-title">
          Supplying Industry with{" "}
          <span className="highlight">Reliable Chemical Inputs</span>
        </h1>

        <div className="import-desc-box">
          <p>
            Yanet Industrials imports and distributes essential industrial
            chemicals and raw materials — supporting Ethiopian manufacturers in
            detergent, beverage, water treatment, and broader process industries
            with dependable quality and supply.
          </p>
        </div>

        <div className="import-pills">
          <div className="pill">
            <FlaskConical size={18} />
            <span>Industrial chemicals</span>
          </div>
          <div className="pill">
            <Factory size={18} />
            <span>Manufacturer-focused</span>
          </div>
          <div className="pill">
            <Truck size={18} />
            <span>Consistent supply</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="import-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      <div className="import-wave">
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
        .import-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0f5d32;
          border-radius: 0 0 36px 36px;
        }

        .import-slides {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
        }

        .import-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center center;
          opacity: 0;
          transform: scale(1.08);
          transition: opacity 1.25s ease-in-out, transform 7s ease;
        }

        .import-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .import-overlay {
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

        .import-shapes {
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

        .import-content {
          position: relative;
          z-index: 5;
          max-width: 700px;
          padding: 8rem 2rem 7rem 3.5rem;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.95s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .import-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .import-badge {
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

        .import-label {
          margin: 0 0 0.4rem;
          font-size: 1.05rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.75);
        }

        .import-title {
          margin: 0 0 1.4rem;
          font-size: clamp(2.1rem, 4.5vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          line-height: 1.15;
        }

        .import-title .highlight {
          color: #bbf7d0;
        }

        .import-desc-box {
          border: 1.5px solid rgba(255, 255, 255, 0.28);
          border-radius: 16px;
          padding: 1.25rem 1.45rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          max-width: 560px;
          margin-bottom: 1.75rem;
        }

        .import-desc-box p {
          margin: 0;
          font-size: 1.02rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.94);
        }

        .import-pills {
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

        .import-dots {
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

        .import-scroll {
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
          animation: importBounce 2s ease-in-out infinite;
        }

        .import-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes importBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .import-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .import-wave svg {
          width: 100%;
          height: 80px;
          display: block;
        }

        @media (max-width: 900px) {
          .import-content {
            padding: 7rem 1.8rem 5.5rem;
            max-width: 100%;
          }

          .import-overlay {
            background: linear-gradient(
              180deg,
              rgba(10, 50, 30, 0.94) 0%,
              rgba(15, 93, 50, 0.88) 50%,
              rgba(22, 128, 61, 0.78) 100%
            );
          }

          .import-dots {
            left: 1.8rem;
            bottom: 115px;
          }

          .import-hero {
            border-radius: 0 0 28px 28px;
          }
        }

        @media (max-width: 560px) {
          .import-title {
            font-size: 2rem;
          }

          .import-content {
            padding: 6.5rem 1.3rem 5rem;
          }

          .import-desc-box p {
            font-size: 0.95rem;
          }

          .import-dots {
            left: 1.3rem;
            bottom: 100px;
          }

          .import-scroll {
            bottom: 85px;
          }

          .import-hero {
            border-radius: 0 0 22px 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default ImportHero;
