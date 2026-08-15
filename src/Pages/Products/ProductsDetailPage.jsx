import React, { useEffect, useMemo, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Award,
  Package,
  Truck,
  FileCheck,
  Layers,
  Globe2,
  CheckCircle2,
  Beaker,
  Droplets,
} from "lucide-react";
import productsData from "../../data/ProductsDetail";

const findProduct = (slug) => {
  const groups = [
    ...(productsData.agricultural || []),
    ...(productsData.chemical || []),
    ...(productsData.other || []),
  ];
  return groups.find((p) => p.slug === slug) || null;
};

const listPathForType = (type) => {
  if (type === "chemical") return "/products/chemicals";
  if (type === "other") return "/products/other";
  return "/products/agricultural";
};

const ProductsDetailPage = () => {
  const { slug } = useParams();
  const product = useMemo(() => findProduct(slug), [slug]);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [product]);

  if (!product) {
    return (
      <section className="pdp-missing">
        <h1>Product not found</h1>
        <p>The product you requested is not available.</p>
        <Link to="/products" className="pdp-back-link">
          ← Back to Products
        </Link>
        <style>{`
          .pdp-missing {
            min-height: 60vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            padding: 3rem 1.5rem;
            text-align: center;
          }
          .pdp-missing h1 { margin: 0; color: #0f172a; }
          .pdp-missing p { margin: 0; color: #64748b; }
          .pdp-back-link {
            margin-top: 1rem;
            color: #15803d;
            font-weight: 600;
            text-decoration: none;
          }
        `}</style>
      </section>
    );
  }

  const {
    name,
    heroImage,
    shortDescription,
    category,
    origin,
    originFlag,
    grade,
    casNumber,
    physicalForm,
    overview,
    keyCharacteristics = [],
    specifications = {},
    originAndSourcing,
    qualityAndProcessing,
    packagingAndHandling,
    exportAndLogistics,
    certifications = [],
    applications = [],
    exportMarkets = [],
    type = "agricultural",
  } = product;

  const isChemical = type === "chemical";
  const backTo = listPathForType(type);

  const hasOriginBlock =
    originAndSourcing &&
    (originAndSourcing.regions?.length ||
      originAndSourcing.sourcingModel ||
      originAndSourcing.seasonality ||
      originAndSourcing.traceability);

  return (
    <section className="pdp" ref={sectionRef}>
      {/* 01. Hero */}
      <div className={`pdp-hero ${visible ? "show" : ""}`}>
        <div className="pdp-hero-inner">
          <Link to={backTo} className="pdp-back">
            <ArrowLeft size={18} /> Back to products
          </Link>

          <div className="pdp-hero-grid">
            <div className="pdp-image-wrap">
              <img src={heroImage} alt={name} />
            </div>

            <div className="pdp-hero-content">
              {category && <span className="pdp-chip">{category}</span>}
              <h1>{name}</h1>
              {shortDescription && (
                <p className="pdp-positioning">{shortDescription}</p>
              )}

              <div className="pdp-hero-meta">
                {/* Agricultural: origin */}
                {!isChemical && (origin || originFlag) && (
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>
                      {originFlag ? `${originFlag} ` : ""}
                      {origin}
                    </span>
                  </div>
                )}

                {/* Chemical: CAS + form */}
                {isChemical && casNumber && (
                  <div className="meta-item meta-cas">
                    <Beaker size={16} />
                    <span>CAS {casNumber}</span>
                  </div>
                )}
                {isChemical && physicalForm && (
                  <div className="meta-item">
                    <Droplets size={16} />
                    <span>{physicalForm}</span>
                  </div>
                )}

                {/* Both: grade */}
                {grade && (
                  <div className="meta-item">
                    <Award size={16} />
                    <span>{grade}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pdp-body">
        {/* 02. Overview */}
        {overview && (
          <div className={`pdp-block ${visible ? "show" : ""}`}>
            <h2>Product Overview</h2>
            <p>{overview}</p>
          </div>
        )}

        {/* 03. Key Characteristics */}
        {keyCharacteristics.length > 0 && (
          <div
            className={`pdp-block ${visible ? "show" : ""}`}
            style={{ transitionDelay: "0.05s" }}
          >
            <h2>Key Characteristics</h2>
            <ul className="pdp-list">
              {keyCharacteristics.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 04. Specifications */}
        {Object.keys(specifications).length > 0 && (
          <div
            className={`pdp-block ${visible ? "show" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h2>Product Specifications</h2>
            <div className="pdp-table">
              {Object.entries(specifications).map(([key, value]) => (
                <div className="pdp-row" key={key}>
                  <span className="pdp-key">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (s) => s.toUpperCase())}
                  </span>
                  <span className="pdp-val">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 05. Origin & Sourcing / Supply */}
        {hasOriginBlock && (
          <div
            className={`pdp-block ${visible ? "show" : ""}`}
            style={{ transitionDelay: "0.12s" }}
          >
            <h2>
              <MapPin size={20} />{" "}
              {isChemical ? "Sourcing & Supply" : "Origin & Sourcing"}
            </h2>
            <div className="pdp-info-grid">
              {originAndSourcing.regions?.length > 0 && (
                <div>
                  <h4>{isChemical ? "Supply regions" : "Regions"}</h4>
                  <p>{originAndSourcing.regions.join(", ")}</p>
                </div>
              )}
              {originAndSourcing.sourcingModel && (
                <div>
                  <h4>Sourcing model</h4>
                  <p>{originAndSourcing.sourcingModel}</p>
                </div>
              )}
              {originAndSourcing.seasonality && (
                <div>
                  <h4>{isChemical ? "Availability" : "Seasonality"}</h4>
                  <p>{originAndSourcing.seasonality}</p>
                </div>
              )}
              {originAndSourcing.traceability && (
                <div>
                  <h4>Traceability</h4>
                  <p>{originAndSourcing.traceability}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 06. Quality & Processing */}
        {qualityAndProcessing &&
          (qualityAndProcessing.steps?.length > 0 ||
            qualityAndProcessing.qualityControl) && (
            <div
              className={`pdp-block ${visible ? "show" : ""}`}
              style={{ transitionDelay: "0.15s" }}
            >
              <h2>
                <Layers size={20} />{" "}
                {isChemical ? "Quality & Handling" : "Quality & Processing"}
              </h2>
              {qualityAndProcessing.steps?.length > 0 && (
                <ol className="pdp-steps">
                  {qualityAndProcessing.steps.map((step, i) => (
                    <li key={i}>
                      <span className="step-num">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              )}
              {qualityAndProcessing.qualityControl && (
                <p className="pdp-note">
                  <strong>Quality control:</strong>{" "}
                  {qualityAndProcessing.qualityControl}
                </p>
              )}
            </div>
          )}

        {/* 07. Packaging & Handling */}
        {packagingAndHandling && (
          <div
            className={`pdp-block ${visible ? "show" : ""}`}
            style={{ transitionDelay: "0.18s" }}
          >
            <h2>
              <Package size={20} /> Packaging & Handling
            </h2>
            <div className="pdp-info-grid">
              {packagingAndHandling.options && (
                <div>
                  <h4>Options</h4>
                  <p>{packagingAndHandling.options.join(" · ")}</p>
                </div>
              )}
              {packagingAndHandling.labeling && (
                <div>
                  <h4>Labeling</h4>
                  <p>{packagingAndHandling.labeling}</p>
                </div>
              )}
              {packagingAndHandling.storage && (
                <div>
                  <h4>Storage</h4>
                  <p>{packagingAndHandling.storage}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 08. Export & Logistics / Logistics */}
        {exportAndLogistics && (
          <div
            className={`pdp-block ${visible ? "show" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h2>
              <Truck size={20} />{" "}
              {isChemical ? "Logistics & Supply" : "Export & Logistics"}
            </h2>
            <div className="pdp-info-grid">
              {exportAndLogistics.incoterms && (
                <div>
                  <h4>Incoterms</h4>
                  <p>{exportAndLogistics.incoterms.join(", ")}</p>
                </div>
              )}
              {exportAndLogistics.ports && (
                <div>
                  <h4>Ports</h4>
                  <p>{exportAndLogistics.ports.join(", ")}</p>
                </div>
              )}
              {exportAndLogistics.leadTime && (
                <div>
                  <h4>Lead time</h4>
                  <p>{exportAndLogistics.leadTime}</p>
                </div>
              )}
              {exportAndLogistics.documentation && (
                <div>
                  <h4>Documentation</h4>
                  <p>{exportAndLogistics.documentation.join(", ")}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 09. Certifications */}
        {certifications.length > 0 && (
          <div
            className={`pdp-block ${visible ? "show" : ""}`}
            style={{ transitionDelay: "0.22s" }}
          >
            <h2>
              <FileCheck size={20} /> Certifications & Documents
            </h2>
            <div className="pdp-tags">
              {certifications.map((c) => (
                <span key={c} className="pdp-tag">
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 10. Applications */}
        {applications.length > 0 && (
          <div
            className={`pdp-block ${visible ? "show" : ""}`}
            style={{ transitionDelay: "0.25s" }}
          >
            <h2>Applications / Uses</h2>
            <div className="pdp-tags">
              {applications.map((a) => (
                <span key={a} className="pdp-tag green">
                  {a}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 11. Markets */}
        {exportMarkets.length > 0 && (
          <div
            className={`pdp-block ${visible ? "show" : ""}`}
            style={{ transitionDelay: "0.28s" }}
          >
            <h2>
              <Globe2 size={20} />{" "}
              {isChemical ? "Target Markets" : "Export Markets"}
            </h2>
            <div className="pdp-tags">
              {exportMarkets.map((m) => (
                <span key={m} className="pdp-tag blue">
                  {m}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="pdp-bottom-cta">
          <p>Interested in this product?</p>
          <Link to="/contact" className="pdp-cta">
            Contact sales team
          </Link>
        </div>
      </div>

      <style>{`
        .pdp {
          background: #f8fafc;
          padding-bottom: 4rem;
        }

        .pdp-hero {
          background: linear-gradient(135deg, #0f5d32 0%, #16a34a 55%, #22c55e 100%);
          padding: 6.5rem 1.5rem 3rem;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .pdp-hero.show {
          opacity: 1;
          transform: translateY(0);
        }

        .pdp-hero-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .pdp-back {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .pdp-back:hover {
          color: #fff;
        }

        .pdp-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 2rem;
          align-items: center;
        }

        .pdp-image-wrap {
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.12);
          aspect-ratio: 4 / 3;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .pdp-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .pdp-chip {
          display: inline-block;
          background: rgba(255, 255, 255, 0.18);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          margin-bottom: 0.75rem;
        }

        .pdp-hero-content h1 {
          margin: 0 0 0.75rem;
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
        }

        .pdp-positioning {
          margin: 0 0 1.2rem;
          font-size: 1.02rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.92);
          max-width: 520px;
        }

        .pdp-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin-bottom: 1.5rem;
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.14);
          color: #fff;
          font-size: 0.88rem;
          font-weight: 600;
          padding: 0.45rem 0.85rem;
          border-radius: 50px;
        }

        .meta-cas {
          font-family: ui-monospace, monospace;
          font-size: 0.85rem;
        }

        .pdp-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          background: #fff;
          color: #15803d;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .pdp-cta:hover {
          transform: translateY(-2px);
        }

        .pdp-body {
          max-width: 900px;
          margin: -1.5rem auto 0;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        .pdp-block {
          background: #fff;
          border: 1px solid #e8f0e9;
          border-radius: 18px;
          padding: 1.6rem 1.5rem;
          margin-bottom: 1.1rem;
          box-shadow: 0 8px 28px rgba(46, 125, 50, 0.05);
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .pdp-block.show {
          opacity: 1;
          transform: translateY(0);
        }

        .pdp-block h2 {
          margin: 0 0 1rem;
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pdp-block h2 svg {
          color: #16a34a;
        }

        .pdp-block > p {
          margin: 0;
          font-size: 0.98rem;
          line-height: 1.7;
          color: #475569;
        }

        .pdp-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .pdp-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.5;
        }

        .pdp-list svg {
          color: #16a34a;
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .pdp-table {
          display: flex;
          flex-direction: column;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
        }

        .pdp-row {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .pdp-row:last-child {
          border-bottom: none;
        }

        .pdp-row:nth-child(odd) {
          background: #f8fafc;
        }

        .pdp-key {
          font-size: 0.88rem;
          font-weight: 700;
          color: #166534;
        }

        .pdp-val {
          font-size: 0.9rem;
          color: #334155;
        }

        .pdp-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .pdp-info-grid h4 {
          margin: 0 0 0.3rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .pdp-info-grid p {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.55;
          color: #334155;
        }

        .pdp-steps {
          list-style: none;
          margin: 0 0 1rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .pdp-steps li {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 0.95rem;
          color: #334155;
        }

        .step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #dcfce7;
          color: #166534;
          font-size: 0.8rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pdp-note {
          margin: 0;
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.55;
        }

        .pdp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .pdp-tag {
          background: #f1f5f9;
          color: #334155;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.4rem 0.85rem;
          border-radius: 50px;
        }

        .pdp-tag.green {
          background: #dcfce7;
          color: #166534;
        }

        .pdp-tag.blue {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .pdp-bottom-cta {
          text-align: center;
          padding: 2rem 1rem 0.5rem;
        }

        .pdp-bottom-cta p {
          margin: 0 0 1rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: #0f172a;
        }

        .pdp-bottom-cta .pdp-cta {
          background: #16a34a;
          color: #fff;
        }

        @media (max-width: 800px) {
          .pdp-hero-grid {
            grid-template-columns: 1fr;
          }

          .pdp-hero {
            padding: 5.5rem 1.2rem 2.5rem;
          }

          .pdp-info-grid {
            grid-template-columns: 1fr;
          }

          .pdp-row {
            grid-template-columns: 1fr;
            gap: 0.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsDetailPage;
