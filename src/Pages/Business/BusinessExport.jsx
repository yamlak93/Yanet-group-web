import React, { useState, useEffect, useRef } from "react";
import { Settings, Leaf } from "lucide-react";
import SeeMoreButton from "../../Components/SeeMoreButton";
import coffee2 from "../../assets/coffee2.png";
import sesame1 from "../../assets/sesame1.png";
import mungbean1 from "../../assets/mungbean1.png";
import safflower1 from "../../assets/safflower1.png";
import roastedcoffee from "../../assets/roastedcoffee.png";

const slides = [
  {
    image: `${coffee2}`,
    alt: "Coffee roasting and export",
  },
  {
    image: `${sesame1}`,
    alt: "Agricultural processing",
  },
  {
    image: `${mungbean1}`,
    alt: "Export logistics",
  },
  {
    image: `${safflower1}`,
    alt: "safflower processing",
  },
  {
    image: `${roastedcoffee}`,
    alt: "roasted coffee export",
  },
];

const BusinessExport = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="biz-export" ref={sectionRef}>
      <div className="export-container">
        <h2 className={`export-heading ${visible ? "show" : ""}`}>Export</h2>

        <div className={`export-layout ${visible ? "show" : ""}`}>
          {/* Left card */}
          <div className="export-card">
            <div className="card-icon">
              <Leaf size={22} />
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <SeeMoreButton to="/business/export" label="See more" />
          </div>

          {/* Right image – half screen, slideshow, rounded */}
          <div className="export-visual">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`visual-slide ${index === current ? "active" : ""}`}
                style={{ backgroundImage: `url('${slide.image}')` }}
                role="img"
                aria-label={slide.alt}
              />
            ))}

            {/* Dots */}
            <div className="visual-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`v-dot ${index === current ? "active" : ""}`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .biz-export {
          padding: 4.5rem 1.5rem 5.5rem;
          background: #ffffff;
        }

        .export-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .export-heading {
          font-size: clamp(1.9rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2rem;
          letter-spacing: -0.4px;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .export-heading.show {
          opacity: 1;
          transform: translateY(0);
        }

        .export-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2rem;
          align-items: center;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .export-layout.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* Left card */
        .export-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 24px;
          padding: 2rem 1.8rem;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 16px 40px rgba(46, 125, 50, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .export-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 8px 12px rgba(0, 0, 0, 0.03),
            0 22px 48px rgba(46, 125, 50, 0.12);
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2e7d32;
          margin-bottom: 1.2rem;
        }

        .card-text {
          margin: 0 0 1.6rem;
          font-size: 1rem;
          line-height: 1.7;
          color: #475569;
        }

        /* Right visual – half width, rounded, slideshow */
        .export-visual {
          position: relative;
          width: 100%;
          min-height: 380px;
          height: 52vh;
          max-height: 520px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 8px 16px rgba(0, 0, 0, 0.06),
            0 20px 48px rgba(0, 0, 0, 0.1);
          background: #e8f5e9;
        }

        .visual-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.06);
          transition: opacity 1.1s ease, transform 6s ease;
        }

        .visual-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .visual-dots {
          position: absolute;
          bottom: 1.2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.45rem;
          z-index: 5;
        }

        .v-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.45);
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }

        .v-dot.active {
          background: #ffffff;
          width: 24px;
          border-radius: 8px;
        }

        @media (max-width: 900px) {
          .export-layout {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .export-visual {
            min-height: 300px;
            height: 42vh;
            order: -1;
          }
        }

        @media (max-width: 520px) {
          .biz-export {
            padding: 3.5rem 1.2rem 4rem;
          }

          .export-card {
            padding: 1.6rem 1.4rem;
          }

          .export-visual {
            border-radius: 20px;
            min-height: 260px;
          }
        }
      `}</style>
    </section>
  );
};

export default BusinessExport;
