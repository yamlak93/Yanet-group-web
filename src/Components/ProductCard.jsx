import React from "react";
import { Link } from "react-router-dom";

/**
 * Product card for list pages
 * Pass full product object from ProductsDetailInfo.json:
 *   <ProductCard product={product} />
 *
 * Agricultural: image, name, description, category, origin, grade, keySpec
 * Chemical: image, name, description, category, CAS, physicalForm, grade
 */
const ProductCard = ({ product, basePath = "/products/agricultural" }) => {
  if (!product) return null;

  const {
    name,
    heroImage,
    shortDescription,
    category,
    origin,
    originFlag,
    grade,
    keySpec,
    card,
    slug,
    type = "agricultural",
    casNumber,
    physicalForm,
  } = product;

  const isChemical = type === "chemical";
  const description = card?.highlight || shortDescription || "";

  const pathBase =
    type === "chemical"
      ? "/products/chemicals"
      : type === "other"
        ? "/products/other"
        : basePath;

  const to = `${pathBase}/${slug}`;

  const specEntries = keySpec ? Object.entries(keySpec).slice(0, 2) : [];

  const formatSpecLabel = (key) =>
    key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (s) => s.toUpperCase())
      .trim();

  return (
    <article className="product-card">
      {/* 1. Product Image */}
      <div className="pc-image">
        <img src={heroImage} alt={name} />
        {category && <span className="pc-badge">{category}</span>}
      </div>

      <div className="pc-body">
        {/* 2. Name */}
        <h3 className="pc-name">{name}</h3>

        {/* 3. Short description */}
        {description && <p className="pc-desc">{description}</p>}

        {/* —— CHEMICAL fields —— */}
        {isChemical ? (
          <>
            {/* 5. CAS Number + 6. Physical form + 7. Grade */}
            <div className="pc-meta">
              {casNumber && <span className="pc-cas">CAS {casNumber}</span>}
              {physicalForm && <span className="pc-form">{physicalForm}</span>}
              {grade && <span className="pc-grade">{grade}</span>}
            </div>
          </>
        ) : (
          <>
            {/* —— AGRICULTURAL fields —— */}
            <div className="pc-meta">
              {(origin || originFlag) && (
                <span className="pc-origin">
                  {originFlag ? `${originFlag} ` : ""}
                  {origin}
                </span>
              )}
              {grade && <span className="pc-grade">{grade}</span>}
            </div>

            {specEntries.length > 0 && (
              <ul className="pc-specs">
                {specEntries.map(([key, value]) => (
                  <li key={key}>
                    <strong>{formatSpecLabel(key)}:</strong> {value}
                  </li>
                ))}
              </ul>
            )}

            {!specEntries.length && card?.specification && (
              <p className="pc-spec-fallback">
                <span>Spec:</span> {card.specification}
              </p>
            )}
          </>
        )}

        <Link to={to} className="pc-btn">
          See detail
        </Link>
      </div>

      <style>{`
        .product-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 12px 32px rgba(46, 125, 50, 0.07);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .product-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 8px 14px rgba(0, 0, 0, 0.04),
            0 22px 48px rgba(46, 125, 50, 0.13);
        }

        .pc-image {
          position: relative;
          width: 100%;
          aspect-ratio: 5 / 4;
          overflow: hidden;
          background: #e8f5e9;
        }

        .pc-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .product-card:hover .pc-image img {
          transform: scale(1.05);
        }

        .pc-badge {
          position: absolute;
          top: 0.6rem;
          left: 0.6rem;
          background: rgba(255, 255, 255, 0.94);
          color: #1b5e20;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          max-width: calc(100% - 1.2rem);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .pc-body {
          padding: 0.9rem 0.95rem 1.05rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          flex: 1;
        }

        .pc-name {
          margin: 0;
          font-size: 0.98rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
        }

        .pc-desc {
          margin: 0;
          font-size: 0.8rem;
          line-height: 1.5;
          color: #475569;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .pc-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-top: 0.1rem;
        }

        .pc-origin,
        .pc-grade,
        .pc-cas,
        .pc-form {
          display: inline-flex;
          align-items: center;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.22rem 0.55rem;
          border-radius: 50px;
          line-height: 1.2;
        }

        .pc-origin {
          background: #f0fdf4;
          color: #166534;
        }

        .pc-grade {
          background: #eff6ff;
          color: #1d4ed8;
        }

        .pc-cas {
          background: #fef3c7;
          color: #92400e;
          font-family: ui-monospace, monospace;
          font-size: 0.7rem;
        }

        .pc-form {
          background: #f3e8ff;
          color: #6b21a8;
        }

        .pc-specs {
          list-style: none;
          margin: 0.15rem 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .pc-specs li {
          font-size: 0.74rem;
          color: #64748b;
          line-height: 1.4;
        }

        .pc-specs strong {
          color: #2e7d32;
          font-weight: 700;
        }

        .pc-spec-fallback {
          margin: 0;
          font-size: 0.74rem;
          color: #64748b;
        }

        .pc-spec-fallback span {
          font-weight: 700;
          color: #2e7d32;
        }

        .pc-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          margin-top: auto;
          padding: 0.45rem 1rem;
          border-radius: 50px;
          background: #16a34a;
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .pc-btn:hover {
          background: #15803d;
          transform: translateY(-1px);
        }
      `}</style>
    </article>
  );
};

export default ProductCard;
