import React, { useEffect, useState, useRef, useCallback } from "react";
import { Sprout, Cog } from "lucide-react";
import SeeMoreButton from "../../Components/SeeMoreButton";

import agriImg from "../../assets/agri_products/coffee.png";
import industrialImg from "../../assets/chemicalFactory1.jpg";

const categories = [
  {
    icon: <Sprout size={22} />,
    image: agriImg,
    alt: "Agricultural products – coffee cherries",
    title: "Agricultural Products",
    description:
      "Sourcing and processing premium Ethiopian coffee and diversified agricultural commodities for global markets.",
    to: "/products/agricultural",
    label: "Explore products",
  },
  {
    icon: <Cog size={22} />,
    image: industrialImg,
    alt: "Industrial products – production line",
    title: "Industrial Products",
    description:
      "Providing essential chemical compounds, laboratory equipment, and industrial raw materials with international standards.",
    to: "/products/chemicals",
    label: "Explore products",
  },
];

const ProductsOverview = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState({});
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  // Header in/out
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeaderVisible(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Per-card in/out with side slide
  const setCardRef = useCallback(
    (index) => (el) => {
      cardRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const observers = [];

    const setup = () => {
      cardRefs.current.forEach((el, index) => {
        if (!el) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            setVisibleCards((prev) => ({
              ...prev,
              [index]: entry.isIntersecting,
            }));
          },
          { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
        );

        observer.observe(el);
        observers.push(observer);
      });
    };

    const raf = requestAnimationFrame(setup);
    return () => {
      cancelAnimationFrame(raf);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <section className="products-overview" ref={sectionRef}>
      <div className="po-container">
        <div className={`po-header ${headerVisible ? "show" : ""}`}>
          <span className="po-badge">What We Offer</span>
          <h2 className="po-title">
            Explore Our <span className="highlight">Product Categories</span>
          </h2>
          <p className="po-subtitle">
            From premium agricultural commodities to industrial chemical
            solutions — quality products trusted by partners worldwide.
          </p>
        </div>

        <div className="po-grid">
          {categories.map((item, index) => {
            const isVisible = !!visibleCards[index];
            const fromLeft = index % 2 === 0;

            return (
              <div
                key={item.title}
                ref={setCardRef(index)}
                className={`po-card ${fromLeft ? "from-left" : "from-right"} ${
                  isVisible ? "show" : ""
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 0.12}s` : "0s",
                }}
              >
                <div className="po-image">
                  <img src={item.image} alt={item.alt} />
                </div>

                <div className="po-body">
                  <div className="po-icon-sm">{item.icon}</div>
                  <h3 className="po-card-title">{item.title}</h3>
                  <p className="po-card-desc">{item.description}</p>
                  <SeeMoreButton to={item.to} label={item.label} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .products-overview {
          padding: 5rem 1.5rem 6rem;
          background: #ffffff;
        }

        .po-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Header – smooth in/out */
        .po-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .po-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .po-badge {
          display: inline-block;
          background: rgba(46, 125, 50, 0.12);
          color: #1b5e20;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.4rem 1.1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .po-title {
          margin: 0 0 0.85rem;
          font-size: clamp(1.85rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.4px;
        }

        .po-title .highlight {
          color: #15803d;
        }

        .po-subtitle {
          margin: 0 auto;
          max-width: 520px;
          font-size: 1.02rem;
          line-height: 1.7;
          color: #64748b;
        }

        .po-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.8rem;
        }

        /* Cards – slide in from sides, out on scroll away */
        .po-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 24px;
          overflow: hidden;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 16px 40px rgba(46, 125, 50, 0.08);
          display: flex;
          flex-direction: column;
          opacity: 0;
          transition:
            opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.85s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease;
          will-change: opacity, transform;
        }

        .po-card.from-left {
          transform: translateX(-48px) translateY(16px);
        }

        .po-card.from-right {
          transform: translateX(48px) translateY(16px);
        }

        .po-card.show {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        .po-card.show:hover {
          transform: translateY(-8px);
          box-shadow:
            0 8px 14px rgba(0, 0, 0, 0.04),
            0 24px 50px rgba(46, 125, 50, 0.14);
        }

        .po-image {
          margin: 1.1rem 1.1rem 0;
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          background: #e8f5e9;
        }

        .po-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .po-card:hover .po-image img {
          transform: scale(1.05);
        }

        .po-body {
          padding: 1.3rem 1.4rem 1.7rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.55rem;
          flex: 1;
        }

        .po-icon-sm {
          color: #2e7d32;
          margin-bottom: 0.15rem;
        }

        .po-card-title {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
        }

        .po-card-desc {
          margin: 0 0 0.6rem;
          font-size: 0.95rem;
          line-height: 1.65;
          color: #475569;
          flex: 1;
        }

        @media (max-width: 800px) {
          .po-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin: 0 auto;
          }

          .po-card.from-left,
          .po-card.from-right {
            transform: translateY(36px);
          }

          .po-card.show {
            transform: translateY(0);
          }

          .po-card.show:hover {
            transform: translateY(-6px);
          }
        }

        @media (max-width: 520px) {
          .products-overview {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .po-image {
            margin: 0.9rem 0.9rem 0;
          }

          .po-body {
            padding: 1.15rem 1.2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsOverview;
