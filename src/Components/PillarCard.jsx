import React from "react";

/**
 * Sustainability pillar card matching the target design:
 * - Inline header layout (Icon next to Title)
 * - Green circular icon badge
 * - Smooth single-curve wave mask sitting on top of the image
 * - Clean typography and card border radius
 */
const PillarCard = ({ icon, title, description, image, alt = "" }) => {
  return (
    <article className="pillar-card">
      <div className="pc-top">
        <div className="pc-header">
          <div className="pc-icon">{icon}</div>
          <h3 className="pc-title">{title}</h3>
        </div>
        <p className="pc-desc">{description}</p>
      </div>

      <div className="pc-image-wrap">
        {/* Smooth single-curve wave transitioning into the image */}
        <svg
          className="pc-wave"
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0 0 C 150 100, 350 -20, 500 80 L 500 0 L 0 0 Z"
            fill="#ffffff"
          />
        </svg>
        <img src={image} alt={alt || title} className="pc-img" />
      </div>

      <style>{`
        .pillar-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid #eaeaea;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
        }

        .pc-top {
          padding: 1.5rem 1.5rem 1rem 1.5rem;
          flex-shrink: 0;
          background: #ffffff;
          position: relative;
          z-index: 2;
        }

        .pc-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }

        .pc-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #34a835;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pc-icon svg {
          width: 26px;
          height: 26px;
          fill: currentColor;
        }

        .pc-title {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 800;
          color: #1e293b;
          line-height: 1.25;
        }

        .pc-desc {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.55;
          color: #475569;
          font-weight: 400;
        }

        .pc-image-wrap {
          position: relative;
          margin-top: -1px;
          height: 200px;
          flex-grow: 1;
          overflow: hidden;
          background: #f1f5f9;
        }

        .pc-wave {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          z-index: 2;
          display: block;
          pointer-events: none;
        }

        .pc-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.5s ease;
        }

        .pillar-card:hover .pc-img {
          transform: scale(1.04);
        }
      `}</style>
    </article>
  );
};

export default PillarCard;
