import React, { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Globe2,
  Users,
  Package,
  ArrowRight,
} from "lucide-react";
import productsData from "../../data/productsDetail";

const stats = [
  { icon: <Calendar size={22} />, value: "20+", label: "Years of Experience" },
  { icon: <Globe2 size={22} />, value: "20+", label: "Countries We Serve" },
  { icon: <Users size={22} />, value: "100+", label: "Trusted Partners" },
  { icon: <Package size={22} />, value: "500+", label: "Quality Products" },
];

const HomeProducts = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const products = useMemo(() => {
    const agri = (productsData.agricultural || []).map((p) => ({
      ...p,
      type: p.type || "agricultural",
    }));
    const chem = (productsData.chemical || []).map((p) => ({
      ...p,
      type: p.type || "chemical",
    }));
    return [...agri, ...chem];
  }, []);

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

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.75;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const subtitleFor = (p) => {
    if (p.card?.specification) return p.card.specification;
    if (p.grade) return p.grade;
    if (p.card?.highlight) return p.card.highlight;
    if (p.shortDescription) return p.shortDescription;
    return p.category || "";
  };

  /** agricultural → /products/agriculture/:slug | chemical → /products/chemicals/:slug */
  const detailPath = (p) => {
    const type = (p.type || "").toLowerCase();
    if (type === "chemical") return `/products/chemicals/${p.slug}`;
    return `/products/agriculture/${p.slug}`;
  };

  return (
    <section className="hp-section" ref={sectionRef}>
      <div className="hp-container">
        <div className={`hp-header ${visible ? "show" : ""}`}>
          <span className="hp-badge">OUR PRODUCTS</span>
          <h2 className="hp-title">Quality Products. Global Demand.</h2>
        </div>

        <div className={`hp-carousel ${visible ? "show" : ""}`}>
          <button
            type="button"
            className="hp-nav hp-prev"
            onClick={() => scrollBy(-1)}
            aria-label="Previous products"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="hp-track" ref={trackRef}>
            {products.map((p) => (
              <Link key={p.id || p.slug} to={detailPath(p)} className="hp-card">
                <div className="hp-img-wrap">
                  <img
                    src={p.heroImage || p.card?.image}
                    alt={p.name}
                    loading="lazy"
                  />
                </div>
                <h3 className="hp-name">{p.name}</h3>
                <p className="hp-sub">{subtitleFor(p)}</p>
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="hp-nav hp-next"
            onClick={() => scrollBy(1)}
            aria-label="Next products"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className={`hp-why ${visible ? "show" : ""}`}>
          <div className="hp-why-left">
            <span className="hp-badge">WHY CHOOSE YANET</span>
            <h3 className="hp-why-title">
              Driven By Quality.
              <br />
              Built On Trust.
            </h3>
            <p className="hp-why-desc">
              Two decades of experience, a commitment to quality and a vision
              for sustainable growth in every partnership.
            </p>
            <Link to={"/about/why-us"} className="hb-link">
              Learn more <ArrowRight size={14} />
            </Link>
          </div>

          <div className="hp-stats">
            {stats.map((s) => (
              <div key={s.label} className="hp-stat">
                <div className="hp-stat-icon">{s.icon}</div>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hp-section {
          padding: 4.5rem 1.5rem 5rem;
          background: #f8faf9;
        }

        .hb-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.88rem;
          font-weight: 650;
          color: #16a34a;
          text-decoration: none;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .hb-link:hover {
          gap: 0.55rem;
          color: #f0c85c;
        }

        .hp-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .hp-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #16a34a;
          margin-bottom: 0.65rem;
        }

        .hp-header {
          margin-bottom: 1.75rem;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hp-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .hp-title {
          margin: 0;
          font-size: clamp(1.7rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.35px;
        }

        .hp-carousel {
          position: relative;
          margin-bottom: 3.25rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
        }

        .hp-carousel.show {
          opacity: 1;
          transform: translateY(0);
        }

        .hp-track {
          display: flex;
          gap: 1.15rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 0.35rem 2.5rem 0.75rem;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .hp-track::-webkit-scrollbar {
          display: none;
        }

        .hp-card {
          flex: 0 0 180px;
          scroll-snap-align: start;
          text-decoration: none;
          text-align: center;
          color: inherit;
          transition: transform 0.25s ease;
        }

        .hp-card:hover {
          transform: translateY(-4px);
        }

        .hp-img-wrap {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 14px;
          overflow: hidden;
          background: #e8f5e9;
          margin-bottom: 0.75rem;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
        }

        .hp-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .hp-card:hover .hp-img-wrap img {
          transform: scale(1.05);
        }

        .hp-name {
          margin: 0 0 0.25rem;
          font-size: 0.92rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
        }

        .hp-sub {
          margin: 0;
          font-size: 0.78rem;
          line-height: 1.4;
          color: #64748b;
        }

        .hp-nav {
          position: absolute;
          top: 38%;
          transform: translateY(-50%);
          z-index: 2;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #334155;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
          transition: all 0.2s ease;
        }

        .hp-nav:hover {
          border-color: #16a34a;
          color: #16a34a;
        }

        .hp-prev { left: 0; }
        .hp-next { right: 0; }

        .hp-why {
          display: grid;
          grid-template-columns: 0.95fr 1.35fr;
          gap: 2rem;
          align-items: center;
          padding-top: 0.5rem;
          border-top: 1px solid #eef2f0;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.12s;
        }

        .hp-why.show {
          opacity: 1;
          transform: translateY(0);
        }

        .hp-why-title {
          margin: 0 0 0.75rem;
          font-size: clamp(1.45rem, 2.5vw, 1.85rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
        }

        .hp-why-desc {
          margin: 0;
          max-width: 340px;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #64748b;
        }

        .hp-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .hp-stat {
          text-align: center;
          padding: 0.5rem 0.4rem;
          border-left: 1px solid #eef2f0;
        }

        .hp-stat:first-child {
          border-left: none;
        }

        .hp-stat-icon {
          color: #16a34a;
          margin-bottom: 0.45rem;
          display: flex;
          justify-content: center;
        }

        .hp-stat strong {
          display: block;
          font-size: 1.55rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          margin-bottom: 0.25rem;
        }

        .hp-stat span {
          display: block;
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.35;
        }

        @media (max-width: 900px) {
          .hp-why {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hp-why-desc {
            margin-left: auto;
            margin-right: auto;
          }
          .hp-stats {
            grid-template-columns: repeat(2, 1fr);
          }
          .hp-stat {
            border-left: none;
            border-top: 1px solid #eef2f0;
            padding-top: 1rem;
          }
        }

        @media (max-width: 560px) {
          .hp-section {
            padding: 3.5rem 1.15rem 4rem;
          }
          .hp-card {
            flex: 0 0 150px;
          }
          .hp-track {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .hp-nav {
            width: 34px;
            height: 34px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeProducts;
