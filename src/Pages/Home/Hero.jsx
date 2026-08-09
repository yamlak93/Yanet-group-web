import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/src/assets/coffee1.jpg",
    alt: "Premium Ethiopian Coffee",
  },
  {
    image: "/src/assets/chemicaltube1.jpg",
    alt: "Industrial Chemical Solutions",
  },
  {
    image: "/src/assets/chemicalFactory1.jpg",
    alt: "Chemical Manufacturing",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="hero">
      {/* Background slideshow */}
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
      </div>

      {/* Green gradient overlay */}
      <div className="overlay" />

      {/* Content */}
      <div className={`hero-content ${loaded ? "show" : ""}`}>
        <h1 className="headline">
          Global Industrial
          <br />
          Excellence in Coffee
          <br />
          and Chemicals
        </h1>

        <p className="subheadline">
          Hero Paragraph
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim, quis commodo consequat.
        </p>

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

        <div className="cta-row">
          <Link to="/about" className="btn btn-white">
            Discover More
          </Link>
          <Link to="/business" className="btn btn-outline">
            Our Industries
          </Link>
        </div>
      </div>

      {/* Bottom curves – higher so visible on load */}
      <div className="wave">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Soft green edge */}
          <path
            d="M0,40 C200,95 380,15 560,50 C740,85 900,10 1080,45 C1260,80 1380,25 1440,50 L1440,180 L0,180 Z"
            fill="#c8e6c9"
          />
          {/* White main wave */}
          <path
            d="M0,58 C200,110 380,30 560,65 C740,100 900,25 1080,60 C1260,95 1380,40 1440,65 L1440,180 L0,180 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #1a4d2e;
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
          transition: opacity 1.2s ease, transform 6s ease;
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
            rgba(22, 90, 45, 0.97) 0%,
            rgba(27, 110, 55, 0.9) 28%,
            rgba(34, 130, 65, 0.55) 52%,
            rgba(40, 140, 70, 0.15) 72%,
            transparent 88%
          );
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 5;
          max-width: 640px;
          padding: 7rem 2rem 9rem 4rem;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }

        .hero-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .headline {
          margin: 0 0 1.4rem;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.15;
          color: #ffffff;
          letter-spacing: -0.6px;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
        }

        .subheadline {
          margin: 0 0 1.6rem;
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.88);
          max-width: 440px;
        }

        .indicators {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.6rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot.active {
          background: #ffffff;
          width: 28px;
          border-radius: 10px;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.75);
        }

        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1.7rem;
          border-radius: 50px;
          font-size: 0.98rem;
          font-weight: 650;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-white {
          background: #ffffff;
          color: #166534;
          border: 2px solid #ffffff;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
        }

        .btn-white:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
        }

        .btn-outline {
          background: transparent;
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.85);
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-3px);
        }

        /* Higher wave – more visible on load */
        .wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
          pointer-events: none;
        }

        .wave svg {
          width: 100%;
          height: 150px;
          display: block;
        }

        @media (max-width: 900px) {
          .hero-content {
            padding: 6.5rem 1.8rem 8rem 1.8rem;
            max-width: 100%;
          }

          .overlay {
            background: linear-gradient(
              180deg,
              rgba(22, 90, 45, 0.92) 0%,
              rgba(27, 110, 55, 0.75) 50%,
              rgba(30, 100, 50, 0.55) 100%
            );
          }

          .slide {
            background-position: center center;
          }

          .wave svg {
            height: 120px;
          }
        }

        @media (max-width: 520px) {
          .headline {
            font-size: 2.1rem;
          }

          .hero-content {
            padding: 6rem 1.3rem 7rem;
          }

          .subheadline {
            font-size: 0.98rem;
          }

          .btn {
            padding: 0.75rem 1.4rem;
            font-size: 0.92rem;
          }

          .wave svg {
            height: 95px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
