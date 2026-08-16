import React, { useEffect, useState, useRef } from "react";

/* -------------------------------------------------------------------------- */
/*  Country / partner images – replace paths with your actual asset files     */
/* -------------------------------------------------------------------------- */
import chinaMap from "../../assets/map/amharaRegionMap.png";
import uaeMap from "../../assets/map/amharaRegionMap.png";
import indiaMap from "../../assets/map/amharaRegionMap.png";
import kenyaMap from "../../assets/map/amharaRegionMap.png";
import southAfricaMap from "../../assets/map/amharaRegionMap.png";
import belgiumMap from "../../assets/map/amharaRegionMap.png";
import othersMap from "../../assets/map/amharaRegionMap.png";

/* -------------------------------------------------------------------------- */
/*  Country / partner data                                                    */
/* -------------------------------------------------------------------------- */
const partners = [
  {
    id: "china",
    name: "China",
    map: chinaMap,
    products: ["Top product manufacturer"],
  },
  {
    id: "uae",
    name: "UAE",
    map: uaeMap,
    products: ["Top product manufacturer"],
  },
  {
    id: "india",
    name: "India",
    map: indiaMap,
    products: ["Top product manufacturer"],
  },
  {
    id: "kenya",
    name: "Kenya",
    map: kenyaMap,
    products: ["Top product manufacturer"],
  },
  {
    id: "south-africa",
    name: "South Africa",
    map: southAfricaMap,
    products: ["Top product manufacturer"],
  },
  {
    id: "belgium",
    name: "Belgium",
    map: belgiumMap,
    products: ["Top product manufacturer"],
  },
  {
    id: "others",
    name: "Others",
    map: othersMap,
    products: ["Top product manufacturer"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Single partner / country card                                             */
/* -------------------------------------------------------------------------- */
const PartnerCard = ({ name, map, products }) => (
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
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5.5" stroke="#4ade80" strokeWidth="1" />
              <path
                d="M3.5 6.2L5.2 7.9L8.5 4.3"
                stroke="#16a34a"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {p}
        </li>
      ))}
    </ul>
  </article>
);

/* -------------------------------------------------------------------------- */
/*  Main section                                                              */
/* -------------------------------------------------------------------------- */
const GlobalSourcingChemicalRegions = () => {
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
      <div className="sre-container">
        {/* Header */}
        <div className={`sre-header ${visible ? "show" : ""}`}>
          <span className="sre-badge">OUR GLOBAL PARTNERS</span>
          <h2 className="sre-title">
            Sourcing Across <span className="highlight">the World</span>
          </h2>
          <p className="sre-subtitle">
            We import and manufacture high-standard chemicals through trusted
            partners in leading industrial markets,
            <br />
            ensuring purity, compliance, and reliable supply.
          </p>
        </div>

        {/* Body: country cards only (no big map) */}
        <div className={`sre-body ${visible ? "show" : ""}`}>
          <div className="sre-cards">
            {partners.map((p) => (
              <PartnerCard
                key={p.id}
                name={p.name}
                map={p.map}
                products={p.products}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .sre-section {
          padding: 4.75rem 1.5rem 5.25rem;
          background: #f7faf8;
          overflow: hidden;
        }

        .sre-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        /* Header */
        .sre-header {
          margin-bottom: 2.4rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sre-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sre-badge {
          display: inline-block;
          background: #e8f5e9;
          color: #2e7d32;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0.38rem 0.95rem;
          border-radius: 50px;
          border: 1px solid rgba(46, 125, 50, 0.16);
          margin-bottom: 0.95rem;
        }

        .sre-title {
          margin: 0 0 0.75rem;
          font-size: clamp(1.7rem, 3.1vw, 2.3rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.4px;
          line-height: 1.2;
        }

        .sre-title .highlight {
          color: #16a34a;
        }

        .sre-subtitle {
          margin: 0;
          max-width: 620px;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #64748b;
        }

        /* Body – full width cards, no map */
        .sre-body {
          opacity: 0;
          transform: translateY(22px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .sre-body.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sre-cards {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.9rem;
          min-width: 0;
        }

        /* Partner / country card */
        .rmc-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 1.2rem 0.9rem 1.3rem;
          text-align: center;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.05);
          border: 1px solid rgba(226, 232, 240, 0.95);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .rmc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(46, 125, 50, 0.1);
        }

        .rmc-map-wrap {
          width: 78px;
          height: 68px;
          margin-bottom: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          overflow: hidden;
          background: #f0fdf4;
        }

        .rmc-map-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          transition: transform 0.35s ease;
        }

        .rmc-card:hover .rmc-map-img {
          transform: scale(1.06);
        }

        .rmc-title {
          margin: 0 0 0.65rem;
          font-size: 0.88rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.3;
        }

        .rmc-products {
          list-style: none;
          margin: 0;
          padding: 0;
          width: 100%;
          text-align: left;
        }

        .rmc-products li {
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
          font-size: 0.72rem;
          line-height: 1.45;
          color: #64748b;
          margin-bottom: 0.35rem;
        }

        .rmc-products li:last-child {
          margin-bottom: 0;
        }

        .rmc-check {
          flex-shrink: 0;
          margin-top: 1px;
          display: inline-flex;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .sre-cards {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 900px) {
          .sre-cards {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 560px) {
          .sre-section {
            padding: 3.25rem 1.15rem 4rem;
          }

          .sre-cards {
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem;
          }

          .rmc-card {
            padding: 1rem 0.75rem 1.1rem;
          }

          .sre-subtitle br {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalSourcingChemicalRegions;
