import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  ClipboardCheck,
  Package,
  Truck,
  FileCheck,
  Handshake,
  Globe2,
  ShieldCheck,
  Award,
  Factory,
  CheckCircle2,
  Droplets,
  Beaker,
  Boxes,
} from "lucide-react";

const productsPreview = [
  "Sodium Hydroxide (Caustic Soda)",
  "Soda Ash",
  "Polyaluminium Chloride",
  "Chlorine Tablets",
  "Citric Acid",
  "Phosphoric Acid",
  "Industrial Polymers",
  "Industrial Resins",
];

const categories = [
  {
    icon: <Beaker size={22} />,
    title: "Basic chemicals",
    desc: "Core industrial inputs such as caustic soda and soda ash for manufacturing and process use.",
  },
  {
    icon: <Droplets size={22} />,
    title: "Water treatment chemicals",
    desc: "Coagulants, disinfectants, and related products supporting water and wastewater applications.",
  },
  {
    icon: <FlaskConical size={22} />,
    title: "Food and beverage chemicals",
    desc: "Food-oriented process inputs including acids used in beverage and food manufacturing.",
  },
  {
    icon: <Boxes size={22} />,
    title: "Raw materials",
    desc: "Polymers, resins, and related materials that support broader industrial production.",
  },
];

const approachPoints = [
  {
    icon: <ClipboardCheck size={22} />,
    title: "Specification matching",
    desc: "We align product grade, form, and documentation with the requirements of industrial customers.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "Global supplier network",
    desc: "Materials are sourced through qualified international partners selected for reliability and consistency.",
  },
  {
    icon: <FileCheck size={22} />,
    title: "Import documentation",
    desc: "Commercial papers, analysis documents, and handling information are coordinated for smoother clearance and use.",
  },
  {
    icon: <Truck size={22} />,
    title: "Local distribution support",
    desc: "Once landed, products are directed to manufacturing customers with practical logistics follow-through.",
  },
];

const whyPoints = [
  {
    icon: <Award size={22} />,
    title: "Industrial market experience",
    desc: "Years of serving Ethiopian manufacturers help us understand production needs and supply realities.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Quality-minded sourcing",
    desc: "We prioritize dependable grades and supplier documentation suited to industrial and process applications.",
  },
  {
    icon: <Factory size={22} />,
    title: "Manufacturer-focused service",
    desc: "From detergent to beverage and water treatment users, we support operational continuity—not only transactions.",
  },
  {
    icon: <Handshake size={22} />,
    title: "Long-term supply relationships",
    desc: "Clear communication and repeatable delivery help plants plan purchasing with greater confidence.",
  },
];

const markets = [
  "Detergent & soap manufacturers",
  "Beverage & brewery industry",
  "Water treatment users",
  "General industrial processors",
  "Distributors & institutional buyers",
];

const supplyNetwork = [
  {
    title: "Qualified global suppliers",
    desc: "Partner producers and traders selected for product consistency and commercial reliability.",
  },
  {
    title: "Multi-category coverage",
    desc: "Basic chemicals, water treatment, food & beverage inputs, and industrial raw materials under one supply relationship.",
  },
  {
    title: "Import corridor experience",
    desc: "Practical familiarity with international shipping, documentation, and inbound logistics into Ethiopia.",
  },
  {
    title: "Customer-aligned delivery",
    desc: "Supply planning oriented around manufacturer demand, packaging needs, and operational timing.",
  },
];

const ImportDetail = () => {
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
    <section className="import-detail" ref={sectionRef}>
      <div className="id-container">
        {/* 1. Company perspective */}
        <div className={`id-block ${visible ? "show" : ""}`}>
          <span className="id-badge">Our Perspective</span>
          <h2>
            Importing Industrial Inputs that{" "}
            <span className="highlight">Keep Production Moving</span>
          </h2>
          <div className="id-prose">
            <p>
              From Yanet Industrials’ perspective, chemical import is a
              responsibility to local industry. Manufacturers depend on the
              right grade, form, and timing — not only on availability. We treat
              import supply as a continuity service: matching specifications,
              coordinating documentation, and supporting reliable inbound
              delivery.
            </p>
            <p>
              Our role is to connect Ethiopian producers with international
              chemical sources in a practical, transparent way, so factories and
              process plants can plan with greater confidence.
            </p>
          </div>
        </div>

        {/* 2. Products */}
        <div
          className={`id-block id-card ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.05s" }}
        >
          <div className="id-card-head">
            <div>
              <span className="id-badge">What We Import</span>
              <h2>Our Chemical & Industrial Products</h2>
              <p className="id-lead">
                Essential materials for manufacturing, water treatment, and
                process applications.
              </p>
            </div>
            <Link to="/products/chemicals" className="id-btn">
              See all products
            </Link>
          </div>

          <ul className="id-product-list">
            {productsPreview.map((name) => (
              <li key={name}>
                <CheckCircle2 size={16} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Categories */}
        <div
          className={`id-block ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.07s" }}
        >
          <span className="id-badge">Product Categories</span>
          <h2>
            Categories of <span className="highlight">Chemicals</span>
          </h2>
          <p className="id-lead wide">
            Organized supply across the main industrial needs we serve.
          </p>

          <div className="id-grid-4">
            {categories.map((item) => (
              <article key={item.title} className="id-mini-card">
                <div className="id-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* 4. Import approach */}
        <div
          className={`id-block ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.09s" }}
        >
          <span className="id-badge">How We Work</span>
          <h2>
            Our <span className="highlight">Import Approach</span>
          </h2>
          <p className="id-lead wide">
            A structured path from international supply to local industrial use.
          </p>

          <div className="id-grid-4">
            {approachPoints.map((item) => (
              <article key={item.title} className="id-mini-card">
                <div className="id-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* 5. Why Yanet */}
        <div
          className={`id-block ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.11s" }}
        >
          <span className="id-badge">Why Yanet</span>
          <h2>
            Why Choose Yanet for{" "}
            <span className="highlight">Imported Products</span>
          </h2>
          <p className="id-lead wide">
            Industrial buyers work with us for specification fit, supply
            reliability, and responsive commercial support.
          </p>

          <div className="id-grid-4">
            {whyPoints.map((item) => (
              <article key={item.title} className="id-mini-card">
                <div className="id-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* 6. Import market */}
        <div
          className={`id-block id-card ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.13s" }}
        >
          <span className="id-badge">Who We Serve</span>
          <h2>
            Our <span className="highlight">Import Market</span>
          </h2>
          <p className="id-lead">
            We support Ethiopian industrial and institutional users that depend
            on consistent chemical and raw-material supply.
          </p>
          <div className="id-tags">
            {markets.map((m) => (
              <span key={m} className="id-tag">
                <Factory size={14} />
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* 7. Global supply network */}
        <div
          className={`id-block ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.15s" }}
        >
          <span className="id-badge">Supply Network</span>
          <h2>
            Global <span className="highlight">Supplies Network</span>
          </h2>
          <p className="id-lead wide">
            An international sourcing base combined with local market
            understanding.
          </p>

          <div className="id-grid-4">
            {supplyNetwork.map((item) => (
              <article key={item.title} className="id-mini-card">
                <div className="id-icon">
                  <Globe2 size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* 8. CTA */}
        <div
          className={`id-cta ${visible ? "show" : ""}`}
          style={{ transitionDelay: "0.17s" }}
        >
          <h3>Explore our full chemical catalog</h3>
          <p>
            Review product names, categories, CAS details, grades, and forms in
            one place.
          </p>
          <Link to="/products/chemicals" className="id-btn primary">
            See all our products
          </Link>
        </div>
      </div>

      <style>{`
        .import-detail {
          padding: 4.5rem 1.5rem 5.5rem;
          background: #f8fafc;
        }

        .id-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .id-block {
          margin-bottom: 2.75rem;
          opacity: 0;
          transform: translateY(22px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .id-block.show {
          opacity: 1;
          transform: translateY(0);
        }

        .id-badge {
          display: inline-block;
          background: rgba(46, 125, 50, 0.12);
          color: #1b5e20;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.3rem 0.85rem;
          border-radius: 50px;
          margin-bottom: 0.7rem;
        }

        .id-block h2 {
          margin: 0 0 0.75rem;
          font-size: clamp(1.55rem, 3vw, 2rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
        }

        .id-block h2 .highlight {
          color: #15803d;
        }

        .id-lead {
          margin: 0 0 1.25rem;
          font-size: 1rem;
          line-height: 1.65;
          color: #64748b;
          max-width: 560px;
        }

        .id-lead.wide {
          max-width: 640px;
        }

        .id-prose p {
          margin: 0 0 0.9rem;
          font-size: 1.02rem;
          line-height: 1.75;
          color: #475569;
          max-width: 820px;
        }

        .id-prose p:last-child {
          margin-bottom: 0;
        }

        .id-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 20px;
          padding: 1.7rem 1.6rem;
          box-shadow: 0 12px 32px rgba(46, 125, 50, 0.05);
        }

        .id-card-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .id-card-head h2 {
          margin-bottom: 0.5rem;
        }

        .id-product-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.7rem 1.25rem;
        }

        .id-product-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: #334155;
          font-weight: 500;
        }

        .id-product-list svg {
          color: #16a34a;
          flex-shrink: 0;
        }

        .id-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .id-mini-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 18px;
          padding: 1.3rem 1.15rem 1.4rem;
          box-shadow: 0 8px 24px rgba(46, 125, 50, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .id-mini-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 34px rgba(46, 125, 50, 0.1);
        }

        .id-icon {
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

        .id-mini-card h3 {
          margin: 0 0 0.45rem;
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
        }

        .id-mini-card p {
          margin: 0;
          font-size: 0.88rem;
          line-height: 1.6;
          color: #64748b;
        }

        .id-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .id-tag {
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

        .id-cta {
          text-align: center;
          background: linear-gradient(135deg, #0f5d32, #16a34a);
          border-radius: 22px;
          padding: 2.4rem 1.5rem;
          color: #fff;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .id-cta.show {
          opacity: 1;
          transform: translateY(0);
        }

        .id-cta h3 {
          margin: 0 0 0.5rem;
          font-size: 1.45rem;
          font-weight: 800;
        }

        .id-cta p {
          margin: 0 0 1.3rem;
          font-size: 1rem;
          opacity: 0.92;
        }

        .id-btn {
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

        .id-btn:hover {
          background: #15803d;
          transform: translateY(-1px);
        }

        .id-btn.primary {
          background: #ffffff;
          color: #15803d;
        }

        .id-btn.primary:hover {
          background: #f0fdf4;
        }

        @media (max-width: 960px) {
          .id-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .import-detail {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .id-product-list {
            grid-template-columns: 1fr;
          }

          .id-grid-4 {
            grid-template-columns: 1fr;
          }

          .id-card-head {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default ImportDetail;
