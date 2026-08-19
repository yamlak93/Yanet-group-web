import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Ship, Globe2, Factory, ArrowRight } from "lucide-react";

import importImg from "../../assets/loadedShip.jpg";
import exportImg from "../../assets/roastedCoffee.jpg";
import manufacturingImg from "../../assets/chemicalFactory1.jpg";

const businesses = [
  {
    image: importImg,
    alt: "Import of industrial chemicals",
    icon: <Ship size={22} />,
    title: "IMPORT",
    description:
      "We source and supply a wide range of industrial raw materials and chemicals from trusted global manufacturers to power local industries.",
    to: "/business/import",
    tone: "import",
  },
  {
    image: exportImg,
    alt: "Export of agricultural commodities",
    icon: <Globe2 size={22} />,
    title: "EXPORT",
    description:
      "We export premium agricultural commodities from Ethiopia to international markets with consistent quality and reliability.",
    to: "/business/export",
    tone: "export",
  },
  {
    image: manufacturingImg,
    alt: "Chemical manufacturing",
    icon: <Factory size={22} />,
    title: "MANUFACTURING",
    description:
      "We manufacture high-quality industrial chemicals meeting international standards for diverse industries.",
    to: "/business/manufacturing",
    tone: "manufacturing",
  },
];

const HomeBusiness = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hb-section" ref={sectionRef}>
      <div className="hb-container">
        <div className={`hb-header ${visible ? "show" : ""}`}>
          <span className="hb-badge">WHAT WE DO</span>
          <h2 className="hb-title">Integrated Solutions. Global Standards.</h2>
        </div>

        <div className={`hb-grid ${visible ? "show" : ""}`}>
          {businesses.map((item, index) => (
            <article
              key={item.to}
              className={`hb-card tone-${item.tone}`}
              style={{
                transitionDelay: visible ? `${index * 0.1}s` : "0s",
              }}
            >
              <div
                className="hb-bg"
                style={{ backgroundImage: `url('${item.image}')` }}
                role="img"
                aria-label={item.alt}
              />
              <div className="hb-overlay" />

              <div className="hb-body">
                <div className="hb-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={item.to} className="hb-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .hb-section {
          padding: 4.75rem 1.5rem 5.5rem;
          background: #f8faf9;
        }

        .hb-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .hb-header {
          text-align: center;
          margin-bottom: 2.25rem;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hb-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .hb-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #16a34a;
          margin-bottom: 0.7rem;
        }

        .hb-title {
          margin: 0;
          font-size: clamp(1.7rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.35px;
        }

        .hb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .hb-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          min-height: 340px;
          display: flex;
          align-items: flex-end;
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.1);
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.3s ease;
        }

        .hb-grid.show .hb-card {
          opacity: 1;
          transform: translateY(0);
        }

        .hb-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.16);
        }

        .hb-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s ease;
        }

        .hb-card:hover .hb-bg {
          transform: scale(1.06);
        }

        .hb-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .tone-import .hb-overlay {
          background: linear-gradient(
            180deg,
            rgba(15, 40, 70, 0.35) 0%,
            rgba(10, 30, 55, 0.88) 100%
          );
        }

        .tone-export .hb-overlay {
          background: linear-gradient(
            180deg,
            rgba(20, 70, 40, 0.35) 0%,
            rgba(12, 55, 32, 0.9) 100%
          );
        }

        .tone-manufacturing .hb-overlay {
          background: linear-gradient(
            180deg,
            rgba(70, 50, 20, 0.35) 0%,
            rgba(50, 35, 12, 0.9) 100%
          );
        }

        .hb-body {
          position: relative;
          z-index: 2;
          padding: 1.6rem 1.45rem 1.55rem;
          color: #ffffff;
        }

        .hb-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .hb-body h3 {
          margin: 0 0 0.55rem;
          font-size: 1.2rem;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .hb-body p {
          margin: 0 0 1rem;
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.88);
          max-width: 300px;
        }

        .hb-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.88rem;
          font-weight: 650;
          color: #e8b84a;
          text-decoration: none;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .hb-link:hover {
          gap: 0.55rem;
          color: #f0c85c;
        }

        @media (max-width: 900px) {
          .hb-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin: 0 auto;
          }

          .hb-card {
            min-height: 300px;
          }
        }

        @media (max-width: 520px) {
          .hb-section {
            padding: 3.5rem 1.2rem 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeBusiness;
