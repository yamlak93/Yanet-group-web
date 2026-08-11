import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Factory,
  FlaskConical,
  Settings,
  ShieldCheck,
  Award,
  Handshake,
  CheckCircle2,
  Beaker,
  Droplets,
  Boxes,
  ClipboardCheck,
  Gauge,
} from "lucide-react";

const productsPreview = [
  "Process cleaning solutions",
  "Industrial specialty blends",
  "Water-treatment oriented formulations",
  "Manufacturing support chemicals",
  "Application-specific chemical products",
];

const approachPoints = [
  {
    icon: <ClipboardCheck size={22} />,
    title: "Need-driven development",
    desc: "Products are shaped around real industrial requirements in Ethiopia’s manufacturing environment.",
  },
  {
    icon: <Settings size={22} />,
    title: "Controlled production",
    desc: "Manufacturing steps are organized for repeatable output, clear batch identity, and practical handling.",
  },
  {
    icon: <Gauge size={22} />,
    title: "Performance focus",
    desc: "Formulations and process choices prioritize usable performance on the plant floor—not only catalog claims.",
  },
  {
    icon: <Factory size={22} />,
    title: "Local responsiveness",
    desc: "In-country production capacity supports faster alignment with customer demand and operating conditions.",
  },
];

const industries = [
  {
    icon: <Droplets size={22} />,
    title: "Soap & detergent",
    desc: "Supporting cleaning and process needs in detergent and related manufacturing lines.",
  },
  {
    icon: <Beaker size={22} />,
    title: "Beverage & process industry",
    desc: "Serving plants that require reliable process chemicals and operational support products.",
  },
  {
    icon: <Boxes size={22} />,
    title: "General manufacturing",
    desc: "Industrial users seeking consistent chemical solutions for day-to-day production requirements.",
  },
  {
    icon: <FlaskConical size={22} />,
    title: "Water-related applications",
    desc: "Where applicable, products aligned with treatment and process-water related industrial needs.",
  },
];

const qualityPoints = [
  {
    title: "Specification discipline",
    desc: "Production aims to hold agreed product characteristics so customers receive consistent material over time.",
  },
  {
    title: "Batch accountability",
    desc: "Manufactured lots are handled with clear identification to support traceability and quality follow-up.",
  },
  {
    title: "Practical documentation",
    desc: "Handling guidance and commercial documents are prepared to support safe use and professional procurement.",
  },
  {
    title: "Continuous improvement",
    desc: "Feedback from industrial users informs adjustments in formulation, packing, and process control.",
  },
];

const whyPoints = [
  {
    icon: <Award size={22} />,
    title: "Made for local industry",
    desc: "Products are developed with Ethiopian manufacturing conditions and operating realities in mind.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Quality-minded output",
    desc: "Consistency, handling practicality, and application performance guide what we put into the market.",
  },
  {
    icon: <Handshake size={22} />,
    title: "Direct manufacturer relationship",
    desc: "Working with the producer enables clearer communication on specifications, supply, and improvement.",
  },
  {
    icon: <Factory size={22} />,
    title: "Complement to trading strength",
    desc: "Manufacturing sits alongside our import and export capabilities for a broader industrial partnership.",
  },
];

const ManufacturingDetail = () => {
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
    <section className="mfg-detail" ref={sectionRef}>
      <div className="md-container">
        {/* 1. Company perspective */}
        <div className={`md-block ${visible ? "show" : ""}`}>
          <span className="md-badge">Our Perspective</span>
          <h2>
            Manufacturing Chemicals Built for{" "}
            <span className="highlight">Real Industrial Use</span>
          </h2>
          <div className="md-prose">
            <p>
              From Yanet Industrials’ perspective, manufacturing is about
              closing the gap between what local industries need and what is
              reliably available. We produce selected chemical solutions with an
              emphasis on practical performance, consistent quality, and supply
              that supports continuous plant operations.
            </p>
            <p>
              Our manufacturing work complements our trading strengths — giving
              customers a partner that understands both international material
              flows and on-the-ground industrial requirements in Ethiopia.
            </p>
          </div>
        </div>

        {/* 2. Products */}
        <div
          className={`md-block md-card ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.05s" }}
        >
          <div className="md-card-head">
            <div>
              <span className="md-badge">What We Manufacture</span>
              <h2>Our Manufactured Chemical Products</h2>
              <p className="md-lead">
                Application-oriented chemical solutions developed and produced
                to support industrial customers.
              </p>
            </div>
            <Link to="/products/chemicals" className="md-btn">
              See all products
            </Link>
          </div>

          <ul className="md-product-list">
            {productsPreview.map((name) => (
              <li key={name}>
                <CheckCircle2 size={16} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
          <p className="md-note">
            Product names and technical details are listed in the chemicals
            catalog. Update this list as your manufactured SKUs are finalized.
          </p>
        </div>

        {/* 3. Manufacturing approach */}
        <div
          className={`md-block ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.08s" }}
        >
          <span className="md-badge">How We Produce</span>
          <h2>
            Our <span className="highlight">Manufacturing Approach</span>
          </h2>
          <p className="md-lead wide">
            A production mindset centered on industrial usefulness, control, and
            responsiveness.
          </p>

          <div className="md-grid-4">
            {approachPoints.map((item) => (
              <article key={item.title} className="md-mini-card">
                <div className="md-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* 4. Industries we serve */}
        <div
          className={`md-block ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <span className="md-badge">Who Benefits</span>
          <h2>
            Industries <span className="highlight">We Serve</span>
          </h2>
          <p className="md-lead wide">
            Manufactured products are directed toward sectors where reliability
            and process fit matter every day.
          </p>

          <div className="md-grid-4">
            {industries.map((item) => (
              <article key={item.title} className="md-mini-card">
                <div className="md-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* 5. Quality perspective */}
        <div
          className={`md-block md-card ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.12s" }}
        >
          <span className="md-badge">Quality</span>
          <h2>
            Our <span className="highlight">Quality Perspective</span>
          </h2>
          <p className="md-lead">
            Quality is treated as consistency in use — so production teams can
            rely on what arrives.
          </p>

          <div className="md-quality-grid">
            {qualityPoints.map((item) => (
              <div key={item.title} className="md-quality-item">
                <ShieldCheck size={18} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Why our products */}
        <div
          className={`md-block ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.14s" }}
        >
          <span className="md-badge">Why Yanet</span>
          <h2>
            Why <span className="highlight">Our Products</span>
          </h2>
          <p className="md-lead wide">
            Customers choose manufactured solutions from Yanet for relevance,
            control, and partnership depth.
          </p>

          <div className="md-grid-4">
            {whyPoints.map((item) => (
              <article key={item.title} className="md-mini-card">
                <div className="md-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* 7. CTA */}
        <div
          className={`md-cta ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.16s" }}
        >
          <h3>See our chemical product range</h3>
          <p>
            Browse categories, grades, and product details in the chemicals
            catalog.
          </p>
          <Link to="/products/chemicals" className="md-btn primary">
            See all our products
          </Link>
        </div>
      </div>

      <style>{`
        .mfg-detail {
          padding: 4.5rem 1.5rem 5.5rem;
          background: #f8fafc;
        }

        .md-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .md-block {
          margin-bottom: 2.75rem;
          opacity: 0;
          transform: translateY(22px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .md-block.show {
          opacity: 1;
          transform: translateY(0);
        }

        .md-badge {
          display: inline-block;
          background: rgba(46, 125, 50, 0.12);
          color: #1b5e20;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.3rem 0.85rem;
          border-radius: 50px;
          margin-bottom: 0.7rem;
        }

        .md-block h2 {
          margin: 0 0 0.75rem;
          font-size: clamp(1.55rem, 3vw, 2rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
        }

        .md-block h2 .highlight {
          color: #15803d;
        }

        .md-lead {
          margin: 0 0 1.25rem;
          font-size: 1rem;
          line-height: 1.65;
          color: #64748b;
          max-width: 560px;
        }

        .md-lead.wide {
          max-width: 640px;
        }

        .md-prose p {
          margin: 0 0 0.9rem;
          font-size: 1.02rem;
          line-height: 1.75;
          color: #475569;
          max-width: 820px;
        }

        .md-prose p:last-child {
          margin-bottom: 0;
        }

        .md-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 20px;
          padding: 1.7rem 1.6rem;
          box-shadow: 0 12px 32px rgba(46, 125, 50, 0.05);
        }

        .md-card-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .md-card-head h2 {
          margin-bottom: 0.5rem;
        }

        .md-product-list {
          list-style: none;
          margin: 0 0 1rem;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.7rem 1.25rem;
        }

        .md-product-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: #334155;
          font-weight: 500;
        }

        .md-product-list svg {
          color: #16a34a;
          flex-shrink: 0;
        }

        .md-note {
          margin: 0;
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .md-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .md-mini-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 18px;
          padding: 1.3rem 1.15rem 1.4rem;
          box-shadow: 0 8px 24px rgba(46, 125, 50, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .md-mini-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 34px rgba(46, 125, 50, 0.1);
        }

        .md-icon {
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

        .md-mini-card h3 {
          margin: 0 0 0.45rem;
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
        }

        .md-mini-card p {
          margin: 0;
          font-size: 0.88rem;
          line-height: 1.6;
          color: #64748b;
        }

        .md-quality-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .md-quality-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          padding: 1rem 1.05rem;
          background: #f8fafc;
          border-radius: 14px;
          border: 1px solid #eef2f7;
        }

        .md-quality-item svg {
          color: #16a34a;
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .md-quality-item h3 {
          margin: 0 0 0.3rem;
          font-size: 0.98rem;
          font-weight: 800;
          color: #0f172a;
        }

        .md-quality-item p {
          margin: 0;
          font-size: 0.88rem;
          line-height: 1.55;
          color: #64748b;
        }

        .md-cta {
          text-align: center;
          background: linear-gradient(135deg, #0f5d32, #16a34a);
          border-radius: 22px;
          padding: 2.4rem 1.5rem;
          color: #fff;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .md-cta.show {
          opacity: 1;
          transform: translateY(0);
        }

        .md-cta h3 {
          margin: 0 0 0.5rem;
          font-size: 1.45rem;
          font-weight: 800;
        }

        .md-cta p {
          margin: 0 0 1.3rem;
          font-size: 1rem;
          opacity: 0.92;
        }

        .md-btn {
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

        .md-btn:hover {
          background: #15803d;
          transform: translateY(-1px);
        }

        .md-btn.primary {
          background: #ffffff;
          color: #15803d;
        }

        .md-btn.primary:hover {
          background: #f0fdf4;
        }

        @media (max-width: 960px) {
          .md-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .mfg-detail {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .md-product-list {
            grid-template-columns: 1fr;
          }

          .md-grid-4,
          .md-quality-grid {
            grid-template-columns: 1fr;
          }

          .md-card-head {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default ManufacturingDetail;
