import React, { useEffect, useState, useRef } from "react";

/* -------------------------------------------------------------------------- */
/*  Map / region images – replace paths with your actual asset files          */
/* -------------------------------------------------------------------------- */
import ethiopiaMap from "../../assets/map/ethiopianMap.png";
import amharaMap from "../../assets/map/amharaRegionMap.png";
import oromiaMap from "../../assets/map/oromiaRegionMap.png";
import tigrayMap from "../../assets/map/TigrayRegionMap.png";
import snnpMap from "../../assets/map/sidamaRegionMap.png";
import afarMap from "../../assets/global-map.png";

/* -------------------------------------------------------------------------- */
/*  Region data                                                               */
/* -------------------------------------------------------------------------- */
const regions = [
  {
    id: "amhara",
    name: "Amhara Region",
    map: amharaMap,
    products: ["Green Mung Beans", "White Sesame Seeds", "Coffee"],
  },
  {
    id: "oromia",
    name: "Oromia Region",
    map: oromiaMap,
    products: ["Coffee", "Pulses & Oilseeds", "Castor Seeds"],
  },
  {
    id: "tigray",
    name: "Tigray Region",
    map: tigrayMap,
    products: ["Sesame Seeds", "Pulses"],
  },
  {
    id: "snnp",
    name: "Sidama Region",
    map: snnpMap,
    products: ["Coffee", "Pulses & Oilseeds"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Single region card                                                        */
/* -------------------------------------------------------------------------- */
const RegionCard = ({ name, map, products }) => (
  <article className="rmc-card">
    <div className="rmc-map-wrap">
      <img
        src={map}
        alt={`${name} map`}
        className="rmc-map-img"
        loading="lazy"
      />
    </div>
    <h3 className="rmc-title">{name}</h3>
    <ul className="rmc-products">
      {products.map((p) => (
        <li key={p}>
          <span className="rmc-check" aria-hidden="true">
            <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5.5" stroke="#22c55e" strokeWidth="1" />
              <path
                d="M3.5 6.2L5.2 7.9L8.5 4.3"
                stroke="#16a34a"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </article>
);

/* -------------------------------------------------------------------------- */
/*  Main section                                                              */
/* -------------------------------------------------------------------------- */
const GlobalSourcingEthiopia = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sre-section" ref={sectionRef}>
      <div className={`sre-card-wrapper ${visible ? "show" : ""}`}>
        {/* Left Column: Header + Cards Row */}
        <div className="sre-content-left">
          <div className="sre-header">
            <span className="sre-badge">OUR SOURCING REGIONS</span>
            <h2 className="sre-title">
              Sourcing Across <span className="highlight">Ethiopia</span>
            </h2>
            <p className="sre-subtitle">
              We source our premium commodities from productive regions known
              for their rich soil, ideal climate, and farming heritage.
            </p>
          </div>

          <div className="sre-cards-row">
            {regions.map((r) => (
              <RegionCard
                key={r.id}
                name={r.name}
                map={r.map}
                products={r.products}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Main Ethiopia Map */}
        <div className="sre-map-side">
          <img
            src={ethiopiaMap}
            alt="Ethiopia sourcing regions map"
            className="sre-big-map"
            loading="lazy"
          />
        </div>
      </div>

      <style>{`
        .sre-section {
          padding: 3rem 1.5rem;
          background: #ffffff;
          overflow: hidden;
        }

        /* Enclosing card structure to match design background */
        .sre-card-wrapper {
          max-width: 1240px;
          margin: 0 auto;
          background: #f4f7f5;
          border-radius: 24px;
          padding: 3rem 2.5rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }

        .sre-card-wrapper.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sre-content-left {
          flex: 1 1 62%;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        /* Header */
        .sre-header {
          margin-bottom: 2rem;
        }

        .sre-badge {
          display: inline-block;
          background: #e1f5eb;
          color: #15803d;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0.35rem 0.85rem;
          border-radius: 50px;
          margin-bottom: 0.8rem;
        }

        .sre-title {
          margin: 0 0 0.6rem;
          font-size: clamp(1.8rem, 2.5vw, 2.4rem);
          font-weight: 800;
          color: #1e293b;
          letter-spacing: -0.5px;
          line-height: 1.15;
        }

        .sre-title .highlight {
          color: #16a34a;
        }

        .sre-subtitle {
          margin: 0;
          max-width: 520px;
          font-size: 0.88rem;
          line-height: 1.5;
          color: #64748b;
        }

        /* Grid arrangement limited to 5 columns per row */
        .sre-cards-row {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0.75rem;
          width: 100%;
        }

        /* Map Side */
        .sre-map-side {
          flex: 1 1 38%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }

        .sre-big-map {
          width: 100%;
          max-width: 440px;
          height: auto;
          display: block;
          object-fit: contain;
        }

        /* ---------- Region Card ---------- */
        .rmc-card {
          width: 100%;
          background: #ffffff;
          border-radius: 16px;
          padding: 1rem 0.7rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          border: 1px solid #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-sizing: border-box;
        }

        .rmc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        }

        .rmc-map-wrap {
          width: 100%;
          height: 60px;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .rmc-map-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
        }

        .rmc-title {
          margin: 0 0 0.7rem;
          font-size: 0.9rem;
          font-weight: 800;
          color: #0f172a;
          text-align: center;
          line-height: 1.3;
          white-space: normal;
          word-break: break-word;
        }

        .rmc-products {
          list-style: none;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        .rmc-products li {
          display: flex;
          align-items: flex-start;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 600;
          line-height: 1.4;
          color: #334155;
          margin-bottom: 0.4rem;
        }

        .rmc-products li:last-child {
          margin-bottom: 0;
        }

        .rmc-products li span:last-child {
          flex: 1;
          min-width: 0;
        }

        .rmc-check {
          flex-shrink: 0;
          display: inline-flex;
          margin-top: 1px;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 1024px) {
          .sre-card-wrapper {
            flex-direction: column;
            padding: 2.5rem 1.5rem;
          }

          .sre-map-side {
            order: -1;
            width: 100%;
          }

          .sre-big-map {
            max-width: 320px;
          }

          .sre-cards-row {
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          }
        }

        @media (max-width: 580px) {
          .sre-cards-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ===================================================== */
        /* FORCE HEADER TEXTS TO BE VISIBLE (overrides globals) */
        /* ===================================================== */
        .sre-header {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          position: relative;
          z-index: 10;
        }

        .sre-badge {
          display: inline-block !important;
          visibility: visible !important;
          opacity: 1 !important;
          color: #15803d !important;
        }

        .sre-title {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          color: #1e293b !important;
        }

        .sre-title .highlight {
          color: #16a34a !important;
        }

        .sre-subtitle {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          color: #64748b !important;
        }
      `}</style>
    </section>
  );
};

export default GlobalSourcingEthiopia;
