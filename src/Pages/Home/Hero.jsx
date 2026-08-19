import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import coffee1 from "../../assets/agri_products/coffee.png";
import chemicaltube1 from "../../assets/loadedShip.jpg";
import chemicalFactory1 from "../../assets/chemicalFactory1.jpg";

const slides = [
  {
    image: chemicaltube1,
    alt: "Industrial chemical import solutions",
    titleLines: ["CONNECTING", "ETHIOPIA", "TO GLOBAL MARKETS"],
    highlight: "TO GLOBAL MARKETS",
    subtitle:
      "Importing. Exporting. Manufacturing.\nBuilding sustainable partnerships\nand delivering value worldwide.",
    focus: "IMPORT",
    tagline: "Reliable chemical & industrial supply from global partners.",
  },
  {
    image: coffee1,
    alt: "Ethiopian agricultural export commodities",
    titleLines: ["CONNECTING", "ETHIOPIA", "TO GLOBAL MARKETS"],
    highlight: "TO GLOBAL MARKETS",
    subtitle:
      "Exporting premium Ethiopian commodities\nto international markets with quality,\ntraceability, and trusted logistics.",
    focus: "EXPORT",
    tagline: "Coffee, oilseeds, pulses — sourced and delivered with care.",
  },
  {
    image: chemicalFactory1,
    alt: "Chemical manufacturing operations",
    titleLines: ["CONNECTING", "ETHIOPIA", "TO GLOBAL MARKETS"],
    highlight: "TO GLOBAL MARKETS",
    subtitle:
      "Manufacturing quality industrial solutions\nwith process discipline, safety, and\nconsistent product standards.",
    focus: "MANUFACTURING",
    tagline: "Local production strength for industrial customers.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [textKey, setTextKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTextKey((k) => k + 1);
  }, [current]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const slide = slides[current];

  return (
    <section className="hero">
      {/* Background slideshow */}
      <div className="slides">
        {slides.map((s, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url('${s.image}')` }}
            role="img"
            aria-label={s.alt}
          />
        ))}
      </div>

      {/* Dark green gradient overlay */}
      <div className="overlay" />

      {/* Content – updates with each slide */}
      <div className={`hero-content ${loaded ? "show" : ""}`} key={textKey}>
        <h1 className="headline">
          <span className="line">CONNECTING</span>
          <span className="line">ETHIOPIA</span>
          <span className="line accent">TO GLOBAL MARKETS</span>
        </h1>

        <p className="subheadline">
          {slide.subtitle.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < slide.subtitle.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>

        <p className="focus-tag">{slide.tagline}</p>

        <div className="cta-row">
          <Link to="/business" className="btn btn-gold">
            Explore Our Business
            <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>

        <div className="focus-row">
          {["IMPORT", "EXPORT", "MANUFACTURING"].map((label) => (
            <button
              key={label}
              type="button"
              className={`focus-item ${slide.focus === label ? "active" : ""}`}
              onClick={() =>
                setCurrent(slides.findIndex((s) => s.focus === label))
              }
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0a2e1c;
        }

        .slides {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          opacity: 0;
          transform: scale(1.06);
          transition: opacity 1.2s ease, transform 7s ease;
        }

        .slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 1;
        }

        .overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            105deg,
            rgba(6, 40, 24, 0.96) 0%,
            rgba(8, 50, 30, 0.9) 32%,
            rgba(12, 60, 36, 0.55) 55%,
            rgba(15, 70, 40, 0.22) 72%,
            rgba(10, 40, 25, 0.35) 100%
          );
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 5;
          max-width: 620px;
          padding: 7rem 2rem 6rem 4rem;
          opacity: 0;
          transform: translateY(24px);
          animation: heroIn 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-content.show {
          opacity: 1;
        }

        @keyframes heroIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .headline {
          margin: 0 0 1.35rem;
          font-size: clamp(2.35rem, 5.2vw, 3.55rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .headline .line {
          display: block;
          color: #ffffff;
        }

        .headline .line.accent {
          color: #e8b84a;
        }

        .subheadline {
          margin: 0 0 0.75rem;
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          max-width: 400px;
        }

        .focus-tag {
          margin: 0 0 1.75rem;
          font-size: 0.9rem;
          color: rgba(232, 184, 74, 0.95);
          font-weight: 500;
          max-width: 400px;
        }

        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 2.25rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.85rem 1.55rem;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 650;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-gold {
          background: #e8b84a;
          color: #1a2e14;
          border: 2px solid #e8b84a;
          box-shadow: 0 6px 20px rgba(232, 184, 74, 0.28);
        }

        .btn-gold:hover {
          background: #f0c85c;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(232, 184, 74, 0.35);
        }

        .btn-outline {
          background: transparent;
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.75);
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #ffffff;
          transform: translateY(-2px);
        }

        .focus-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-wrap: wrap;
        }

        .focus-item {
          background: none;
          border: none;
          padding: 0.25rem 0.35rem;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
          cursor: pointer;
          transition: color 0.25s ease;
        }

        .focus-item:not(:last-child)::after {
          content: "•";
          margin-left: 0.55rem;
          color: rgba(255, 255, 255, 0.35);
        }

        .focus-item.active {
          color: #e8b84a;
        }

        .focus-item:hover {
          color: rgba(255, 255, 255, 0.85);
        }

        .indicators {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 6;
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.35);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot.active {
          background: #e8b84a;
          width: 28px;
          border-radius: 10px;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 900px) {
          .hero-content {
            padding: 6.5rem 1.8rem 5.5rem;
            max-width: 100%;
          }

          .overlay {
            background: linear-gradient(
              180deg,
              rgba(6, 40, 24, 0.94) 0%,
              rgba(8, 50, 30, 0.85) 45%,
              rgba(12, 55, 35, 0.75) 100%
            );
          }

          .slide {
            background-position: center center;
          }
        }

        @media (max-width: 520px) {
          .headline {
            font-size: 2rem;
          }

          .hero-content {
            padding: 6rem 1.3rem 5rem;
          }

          .subheadline {
            font-size: 0.95rem;
          }

          .btn {
            padding: 0.75rem 1.25rem;
            font-size: 0.9rem;
          }

          .indicators {
            bottom: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
