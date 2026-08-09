import React, { useState, useEffect, useRef } from "react";
import { Factory } from "lucide-react";
import SeeMoreButton from "../../Components/SeeMoreButton";
import chemicalFactory1 from "../../assets/chemicalFactory1.jpg";
import factory1 from "../../assets/factory1.jpg";
import factory2 from "../../assets/factory2.jpg";
const slides = [
  {
    image: `${chemicalFactory1}`,
    alt: "Chemical production line",
  },
  {
    image: `${factory1}`,
    alt: "Industrial manufacturing",
  },
  {
    image: `${factory2}`,
    alt: "Production facility",
  },
];

const BusinessManufacturing = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
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
    <section className="biz-manufacturing" ref={sectionRef}>
      <div className="mfg-container">
        <h2 className={`mfg-heading ${visible ? "show" : ""}`}>
          Manufacturing
        </h2>

        <div className={`mfg-layout ${visible ? "show" : ""}`}>
          {/* Left card */}
          <div className="mfg-card">
            <div className="card-icon">
              <Factory size={22} />
            </div>
            <p className="card-text">
              Manufacturing and testing with chemical production line to access
              chemical production line process.
            </p>
            <SeeMoreButton to="/business/manufacturing" label="See more" />
          </div>

          {/* Right image – half screen, slideshow, rounded */}
          <div className="mfg-visual">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`visual-slide ${index === current ? "active" : ""}`}
                style={{ backgroundImage: `url('${slide.image}')` }}
                role="img"
                aria-label={slide.alt}
              />
            ))}

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
        .biz-manufacturing {
          padding: 4.5rem 1.5rem 5.5rem;
          background: #ffffff;
        }

        .mfg-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .mfg-heading {
          font-size: clamp(1.9rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2rem;
          letter-spacing: -0.4px;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .mfg-heading.show {
          opacity: 1;
          transform: translateY(0);
        }

        .mfg-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2rem;
          align-items: center;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .mfg-layout.show {
          opacity: 1;
          transform: translateY(0);
        }

        .mfg-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 24px;
          padding: 2rem 1.8rem;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 16px 40px rgba(46, 125, 50, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .mfg-card:hover {
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

        .mfg-visual {
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
          transition: opacity 2s ease, transform 6s ease;
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
          .mfg-layout {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .mfg-visual {
            min-height: 300px;
            height: 42vh;
            order: -1;
          }
        }

        @media (max-width: 520px) {
          .biz-manufacturing {
            padding: 3.5rem 1.2rem 4rem;
          }

          .mfg-card {
            padding: 1.6rem 1.4rem;
          }

          .mfg-visual {
            border-radius: 20px;
            min-height: 260px;
          }
        }
      `}</style>
    </section>
  );
};

export default BusinessManufacturing;
