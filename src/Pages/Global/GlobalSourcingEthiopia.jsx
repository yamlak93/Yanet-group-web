import React, { useEffect, useState, useRef } from "react";
import { ShieldCheck, Leaf, Users, FileText } from "lucide-react";

/* Maps */
import ethiopiaMap from "../../assets/map/ethiopianMap.png";
import amharaMap from "../../assets/map/amharaRegionMap.png";
import oromiaMap from "../../assets/map/oromiaRegionMap.png";
import tigrayMap from "../../assets/map/TigrayRegionMap.png";
import snnpMap from "../../assets/map/sidamaRegionMap.png";

/* Category images – replace with your assets */
import chemImg from "../../assets/chemicaltube1.jpg";
import rawImg from "../../assets/chemicalFactory1.jpg";
import agriImg from "../../assets/agri_products/coffee.png";
import equipImg from "../../assets/chemicalFactory1.jpg";
import packImg from "../../assets/chemicaltube1.jpg";

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
    id: "sidama",
    name: "Sidama Region",
    map: snnpMap,
    products: ["Coffee", "Pulses & Oilseeds"],
  },
];

const categories = [
  {
    image: chemImg,
    title: "Industrial Chemicals",
    desc: "Bulk and specialty chemicals for industrial and manufacturing applications.",
  },
  {
    image: rawImg,
    title: "Raw Materials",
    desc: "High-quality raw materials for our manufacturing and production needs.",
  },
  {
    image: agriImg,
    title: "Agricultural Commodities",
    desc: "Coffee, sesame, mung beans, and other agricultural products from trusted origins.",
  },
  {
    image: equipImg,
    title: "Industrial & Equipment",
    desc: "Reliable equipment and spare parts to support industrial operations.",
  },
];

const standards = [
  {
    icon: <ShieldCheck size={26} strokeWidth={1.5} />,
    title: "Quality & Safety",
    desc: "Comply with international quality and safety standards.",
  },
  {
    icon: <Leaf size={26} strokeWidth={1.5} />,
    title: "Environment",
    desc: "Commit to reducing environmental impact and conserving resources.",
  },
  {
    icon: <Users size={26} strokeWidth={1.5} />,
    title: "Labor & Human Rights",
    desc: "Ensure fair labor practices and respect for human rights.",
  },
  {
    icon: <FileText size={26} strokeWidth={1.5} />,
    title: "Compliance",
    desc: "Operate with integrity and comply with all applicable laws.",
  },
];

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

const GlobalSourcingEthiopia = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sre-section" ref={sectionRef}>
      {/* ========== 1. Sourcing in Ethiopia ========== */}
      <div className={`sre-ethiopia ${visible ? "show" : ""}`}>
        <div className="sre-eth-inner">
          <div className="sre-eth-left">
            <span className="sre-badge">SOURCING IN ETHIOPIA</span>
            <h2 className="sre-title">
              Sourcing Across <span className="highlight">Ethiopia</span>
            </h2>
            <p className="sre-subtitle">
              We source our premium commodities from productive regions known
              for their rich soil, ideal climate, and farming heritage.
            </p>

            <div className="sre-regions">
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

          <div className="sre-map-side">
            <img
              src={ethiopiaMap}
              alt="Ethiopia sourcing regions map"
              className="sre-big-map"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ========== 2. What We Source ========== */}
      <div className={`sre-source ${visible ? "show" : ""}`}>
        <div className="sre-source-inner">
          <span className="sre-badge">WHAT WE SOURCE</span>
          <h2 className="sre-block-title">Sourcing for Diverse Industries</h2>

          <div className="sre-cats">
            {categories.map((c) => (
              <article key={c.title} className="sre-cat-card">
                <div className="sre-cat-img">
                  <img src={c.image} alt={c.title} loading="lazy" />
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ========== 3. Supplier Standards ========== */}
      <div className={`sre-standards ${visible ? "show" : ""}`}>
        <div className="sre-std-left">
          <span className="sre-badge">OUR SUPPLIER STANDARDS</span>
          <h2 className="sre-title">
            Building Strong,
            <br />
            Responsible Partnerships
          </h2>
          <p className="sre-subtitle">
            We work with suppliers who share our commitment to quality, safety,
            ethics and sustainability. All partners are expected to adhere to
            our Supplier Code of Conduct.
          </p>
        </div>

        <div className="sre-std-grid">
          {standards.map((s) => (
            <div key={s.title} className="sre-std-item">
              <div className="sre-std-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sre-section {
          background: #ffffff;
          overflow: hidden;
        }

        .sre-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #16a34a;
          margin-bottom: 0.7rem;
        }

        .sre-title {
          margin: 0 0 0.65rem;
          font-size: clamp(1.55rem, 2.6vw, 2rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          letter-spacing: -0.3px;
        }

        .sre-title .highlight {
          color: #16a34a;
        }

        .sre-subtitle {
          margin: 0;
          max-width: 420px;
          font-size: 0.9rem;
          line-height: 1.7;
          color: #64748b;
        }

        .sre-block-title {
          margin: 0 0 1.75rem;
          font-size: clamp(1.4rem, 2.4vw, 1.85rem);
          font-weight: 800;
          color: #0f172a;
        }

        /* —— Ethiopia —— */
        .sre-ethiopia {
          padding: 3.5rem 1.5rem 2rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sre-ethiopia.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sre-eth-inner {
          max-width: 1180px;
          margin: 0 auto;
          background: #f4f7f5;
          border-radius: 22px;
          padding: 2.5rem 2.25rem;
          display: grid;
          grid-template-columns: 1.2fr 0.9fr;
          gap: 2rem;
          align-items: center;
        }

        .sre-regions {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .sre-map-side {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sre-big-map {
          width: 100%;
          max-width: 380px;
          height: auto;
          object-fit: contain;
        }

        .rmc-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 0.95rem 0.7rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .rmc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        }

        .rmc-map-wrap {
          width: 100%;
          height: 56px;
          margin-bottom: 0.65rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rmc-map-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .rmc-title {
          margin: 0 0 0.55rem;
          font-size: 0.85rem;
          font-weight: 800;
          color: #0f172a;
          text-align: center;
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
          gap: 0.3rem;
          font-size: 0.74rem;
          font-weight: 600;
          line-height: 1.4;
          color: #334155;
          margin-bottom: 0.3rem;
        }

        .rmc-check {
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* —— What we source —— */
        .sre-source {
          padding: 2.5rem 1.5rem 3rem;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
        }

        .sre-source.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sre-source-inner {
          max-width: 1180px;
          margin: 0 auto;
        }

        .sre-cats {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.15rem;
        }

        .sre-cat-card {
          min-width: 0;
        }

        .sre-cat-img {
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 14px;
          overflow: hidden;
          background: #e8f5e9;
          margin-bottom: 0.75rem;
        }

        .sre-cat-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .sre-cat-card:hover .sre-cat-img img {
          transform: scale(1.05);
        }

        .sre-cat-card h3 {
          margin: 0 0 0.35rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
        }

        .sre-cat-card p {
          margin: 0;
          font-size: 0.82rem;
          line-height: 1.5;
          color: #64748b;
        }

        /* —— Standards —— */
        .sre-standards {
          max-width: 1180px;
          margin: 0 auto;
          padding: 1rem 1.5rem 4.5rem;
          display: grid;
          grid-template-columns: 0.9fr 1.3fr;
          gap: 2rem;
          align-items: center;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.12s;
        }

        .sre-standards.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sre-std-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .sre-std-item {
          text-align: center;
          padding: 0.5rem 1rem;
          border-left: 1px solid #eef2f0;
        }

        .sre-std-item:first-child {
          border-left: none;
        }

        .sre-std-icon {
          color: #0f172a;
          margin-bottom: 0.75rem;
          display: flex;
          justify-content: center;
        }

        .sre-std-item h3 {
          margin: 0 0 0.4rem;
          font-size: 0.92rem;
          font-weight: 700;
          color: #0f172a;
        }

        .sre-std-item p {
          margin: 0;
          font-size: 0.8rem;
          line-height: 1.5;
          color: #64748b;
        }

        @media (max-width: 1024px) {
          .sre-eth-inner {
            grid-template-columns: 1fr;
          }

          .sre-map-side {
            order: -1;
          }

          .sre-big-map {
            max-width: 300px;
          }

          .sre-regions {
            grid-template-columns: repeat(2, 1fr);
          }

          .sre-cats {
            grid-template-columns: repeat(3, 1fr);
          }

          .sre-standards {
            grid-template-columns: 1fr;
          }

          .sre-std-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem 0.5rem;
          }

          .sre-std-item {
            border-left: none;
          }
        }

        @media (max-width: 560px) {
          .sre-ethiopia {
            padding: 3rem 1.15rem 1.5rem;
          }

          .sre-eth-inner {
            padding: 1.75rem 1.2rem;
          }

          .sre-regions {
            grid-template-columns: 1fr 1fr;
          }

          .sre-cats {
            grid-template-columns: 1fr;
            max-width: 320px;
          }

          .sre-std-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalSourcingEthiopia;
