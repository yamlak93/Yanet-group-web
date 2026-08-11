import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Sprout,
  ClipboardCheck,
  Package,
  Ship,
  FileCheck,
  Handshake,
  Globe2,
  ShieldCheck,
  Award,
  Truck,
  CheckCircle2,
} from "lucide-react";

const productsPreview = [
  "Green Mung Beans",
  "White Sesame Seeds (Humera type)",
  "Ethiopian Coffee",
  "Safflower Seeds",
  "Castor Seeds",
  "Chickpeas & other pulses",
];

const approachPoints = [
  {
    icon: <Sprout size={22} />,
    title: "Origin-focused sourcing",
    desc: "We work with producing regions in Ethiopia to secure consistent volumes of export-grade agricultural commodities.",
  },
  {
    icon: <ClipboardCheck size={22} />,
    title: "Quality preparation",
    desc: "Cleaning, grading, and sorting processes help products meet buyer and phytosanitary expectations.",
  },
  {
    icon: <FileCheck size={22} />,
    title: "Documentation readiness",
    desc: "Commercial and trade documents are coordinated carefully so shipments move with fewer delays.",
  },
  {
    icon: <Ship size={22} />,
    title: "Port & logistics support",
    desc: "Export movements are supported through established corridors, including logistics via Djibouti Port.",
  },
];

const whyPoints = [
  {
    icon: <Award size={22} />,
    title: "Two decades of trade experience",
    desc: "Since 2002, Yanet has built practical know-how in Ethiopian export commodities and international buyer requirements.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Quality-minded supply",
    desc: "We prioritize cleanliness, grading, and reliable presentation of lots for competitive export markets.",
  },
  {
    icon: <Handshake size={22} />,
    title: "Partnership approach",
    desc: "Clear communication and long-term relationships help buyers plan volumes and deliveries with confidence.",
  },
  {
    icon: <Truck size={22} />,
    title: "Execution support",
    desc: "From preparation to documentation and shipping coordination, we support a smoother export process.",
  },
];

const markets = [
  "Southeast Asia",
  "South Asia",
  "China",
  "Middle East",
  "Other international buyers by arrangement",
];

const processSteps = [
  {
    step: "01",
    title: "Inquiry & specification",
    desc: "Buyers share product type, grade preference, volume, packing, and destination requirements.",
    icon: <ClipboardCheck size={20} />,
  },
  {
    step: "02",
    title: "Sourcing & quality check",
    desc: "Lots are aligned with the agreed specification through sourcing, cleaning, and grading where applicable.",
    icon: <Sprout size={20} />,
  },
  {
    step: "03",
    title: "Packing & documentation",
    desc: "Goods are prepared for shipment with commercial documents and required certificates coordinated.",
    icon: <Package size={20} />,
  },
  {
    step: "04",
    title: "Logistics & dispatch",
    desc: "Shipment is arranged through the agreed logistics path, including port handling where required.",
    icon: <Ship size={20} />,
  },
  {
    step: "05",
    title: "Delivery support",
    desc: "We stay available through transit and arrival coordination to support a reliable buyer experience.",
    icon: <Globe2 size={20} />,
  },
];

const ExportDetail = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.06 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="export-detail" ref={sectionRef}>
      <div className="ed-container">
        {/* 1. Company perspective */}
        <div className={`ed-block ${visible ? "show" : ""}`}>
          <span className="ed-badge">Our Perspective</span>
          <h2>
            Exporting Ethiopian Quality to{" "}
            <span className="highlight">Global Buyers</span>
          </h2>
          <div className="ed-prose">
            <p>
              From Yanet Industrials’ perspective, agricultural export is more
              than moving commodities across borders. It is about representing
              Ethiopian origin with integrity — matching the right product grade
              to the right market, preparing lots carefully, and supporting
              buyers with dependable communication and documentation.
            </p>
            <p>
              We focus on products where Ethiopia has natural competitive
              strength, and we structure our export work around consistency,
              transparency, and long-term trade relationships rather than
              one-off transactions alone.
            </p>
          </div>
        </div>

        {/* 2. Products */}
        <div
          className={`ed-block ed-card ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.05s" }}
        >
          <div className="ed-card-head">
            <div>
              <span className="ed-badge">What We Export</span>
              <h2>Our Agricultural Export Products</h2>
              <p className="ed-lead">
                Premium commodities prepared for international food, processing,
                and wholesale channels.
              </p>
            </div>
            <Link to="/products/agricultural" className="ed-btn">
              See all products
            </Link>
          </div>

          <ul className="ed-product-list">
            {productsPreview.map((name) => (
              <li key={name}>
                <CheckCircle2 size={16} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Export approach */}
        <div
          className={`ed-block ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.08s" }}
        >
          <span className="ed-badge">How We Work</span>
          <h2>
            Our <span className="highlight">Export Approach</span>
          </h2>
          <p className="ed-lead wide">
            A practical process designed to protect quality, reduce friction,
            and support reliable delivery.
          </p>

          <div className="ed-grid-4">
            {approachPoints.map((item) => (
              <article key={item.title} className="ed-mini-card">
                <div className="ed-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* 4. Why choose Yanet */}
        <div
          className={`ed-block ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <span className="ed-badge">Why Yanet</span>
          <h2>
            Why Choose Yanet for{" "}
            <span className="highlight">Export Products</span>
          </h2>
          <p className="ed-lead wide">
            Buyers and partners work with us for origin access, preparation
            discipline, and dependable commercial follow-through.
          </p>

          <div className="ed-grid-4">
            {whyPoints.map((item) => (
              <article key={item.title} className="ed-mini-card">
                <div className="ed-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* 5. Export markets */}
        <div
          className={`ed-block ed-card ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.12s" }}
        >
          <span className="ed-badge">Where We Sell</span>
          <h2>
            Our <span className="highlight">Export Markets</span>
          </h2>
          <p className="ed-lead">
            We serve international buyers seeking Ethiopian agricultural
            commodities through established regional demand centers.
          </p>
          <div className="ed-tags">
            {markets.map((m) => (
              <span key={m} className="ed-tag">
                <Globe2 size={14} />
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* 6. Export process */}
        <div
          className={`ed-block ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.14s" }}
        >
          <span className="ed-badge">Step by Step</span>
          <h2>
            Our <span className="highlight">Export Process</span>
          </h2>
          <p className="ed-lead wide">
            A clear path from inquiry to dispatch — so both sides know what
            happens next.
          </p>

          <div className="ed-process">
            {processSteps.map((item, index) => (
              <div key={item.step} className="ed-step">
                <div className="ed-step-rail">
                  <div className="ed-step-num">{item.step}</div>
                  {index < processSteps.length - 1 && (
                    <div className="ed-step-line" />
                  )}
                </div>
                <div className="ed-step-body">
                  <div className="ed-step-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. CTA */}
        <div
          className={`ed-cta ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.16s" }}
        >
          <h3>Ready to explore our export range?</h3>
          <p>
            Review full product details, grades, and specifications in our
            agricultural catalog.
          </p>
          <Link to="/products/agricultural" className="ed-btn primary">
            See all our products
          </Link>
        </div>
      </div>

      <style>{`
        .export-detail {
          padding: 4.5rem 1.5rem 5.5rem;
          background: #f8fafc;
        }

        .ed-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .ed-block {
          margin-bottom: 2.75rem;
          opacity: 0;
          transform: translateY(22px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ed-block.show {
          opacity: 1;
          transform: translateY(0);
        }

        .ed-badge {
          display: inline-block;
          background: rgba(46, 125, 50, 0.12);
          color: #1b5e20;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.3rem 0.85rem;
          border-radius: 50px;
          margin-bottom: 0.7rem;
        }

        .ed-block h2 {
          margin: 0 0 0.75rem;
          font-size: clamp(1.55rem, 3vw, 2rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
        }

        .ed-block h2 .highlight {
          color: #15803d;
        }

        .ed-lead {
          margin: 0 0 1.25rem;
          font-size: 1rem;
          line-height: 1.65;
          color: #64748b;
          max-width: 560px;
        }

        .ed-lead.wide {
          max-width: 640px;
        }

        .ed-prose p {
          margin: 0 0 0.9rem;
          font-size: 1.02rem;
          line-height: 1.75;
          color: #475569;
          max-width: 820px;
        }

        .ed-prose p:last-child {
          margin-bottom: 0;
        }

        .ed-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 20px;
          padding: 1.7rem 1.6rem;
          box-shadow: 0 12px 32px rgba(46, 125, 50, 0.05);
        }

        .ed-card-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .ed-card-head h2 {
          margin-bottom: 0.5rem;
        }

        .ed-product-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.7rem 1.25rem;
        }

        .ed-product-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: #334155;
          font-weight: 500;
        }

        .ed-product-list svg {
          color: #16a34a;
          flex-shrink: 0;
        }

        .ed-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .ed-mini-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 18px;
          padding: 1.3rem 1.15rem 1.4rem;
          box-shadow: 0 8px 24px rgba(46, 125, 50, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .ed-mini-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 34px rgba(46, 125, 50, 0.1);
        }

        .ed-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(145deg, #f0fdf4, #dcfce7);
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.9rem;
        }

        .ed-mini-card h3 {
          margin: 0 0 0.45rem;
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
        }

        .ed-mini-card p {
          margin: 0;
          font-size: 0.88rem;
          line-height: 1.6;
          color: #64748b;
        }

        .ed-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .ed-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #f0fdf4;
          color: #166534;
          font-size: 0.88rem;
          font-weight: 600;
          padding: 0.45rem 0.9rem;
          border-radius: 50px;
        }

        .ed-process {
          margin-top: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .ed-step {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 1rem;
        }

        .ed-step-rail {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ed-step-num {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(145deg, #16a34a, #22c55e);
          color: #fff;
          font-size: 0.78rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(22, 163, 74, 0.3);
          flex-shrink: 0;
        }

        .ed-step-line {
          width: 3px;
          flex: 1;
          min-height: 28px;
          background: linear-gradient(
            180deg,
            rgba(22, 163, 74, 0.45),
            rgba(22, 163, 74, 0.12)
          );
          border-radius: 4px;
          margin: 0.35rem 0;
        }

        .ed-step-body {
          display: flex;
          gap: 0.9rem;
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 16px;
          padding: 1.1rem 1.2rem;
          margin-bottom: 0.85rem;
          box-shadow: 0 6px 20px rgba(46, 125, 50, 0.04);
        }

        .ed-step-icon {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          background: #f0fdf4;
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ed-step-body h3 {
          margin: 0 0 0.3rem;
          font-size: 1.02rem;
          font-weight: 800;
          color: #0f172a;
        }

        .ed-step-body p {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.6;
          color: #64748b;
        }

        .ed-cta {
          text-align: center;
          background: linear-gradient(135deg, #0f5d32, #16a34a);
          border-radius: 22px;
          padding: 2.4rem 1.5rem;
          color: #fff;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ed-cta.show {
          opacity: 1;
          transform: translateY(0);
        }

        .ed-cta h3 {
          margin: 0 0 0.5rem;
          font-size: 1.45rem;
          font-weight: 800;
        }

        .ed-cta p {
          margin: 0 0 1.3rem;
          font-size: 1rem;
          opacity: 0.92;
        }

        .ed-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.7rem 1.35rem;
          border-radius: 50px;
          background: #16a34a;
          color: #fff;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s ease, background 0.2s ease;
          white-space: nowrap;
        }

        .ed-btn:hover {
          background: #15803d;
          transform: translateY(-1px);
        }

        .ed-btn.primary {
          background: #ffffff;
          color: #15803d;
        }

        .ed-btn.primary:hover {
          background: #f0fdf4;
        }

        @media (max-width: 960px) {
          .ed-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .export-detail {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .ed-product-list {
            grid-template-columns: 1fr;
          }

          .ed-grid-4 {
            grid-template-columns: 1fr;
          }

          .ed-card-head {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default ExportDetail;
