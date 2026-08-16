import React from "react";

/**
 * Two-part card: image on top, solid green text panel below (matches design)
 */
const SourcingImageCard = ({
  image,
  title,
  desc,
  alt = "",
  className = "",
}) => {
  return (
    <div className={`sic-card ${className}`}>
      <div className="sic-image-wrap">
        <img src={image} alt={alt} className="sic-img" />
      </div>
      <div className="sic-panel">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

      <style>{`
        .sic-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 340px;
          border-radius: 20px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
          border: 1px solid #e8f0e9;
        }

        .sic-image-wrap {
          flex: 1 1 auto;
          min-height: 200px;
          overflow: hidden;
          background: #e8f5e9;
        }

        .sic-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          min-height: 200px;
          transition: transform 0.5s ease;
        }

        .sic-card:hover .sic-img {
          transform: scale(1.04);
        }

        .sic-panel {
          flex-shrink: 0;
          background: #0f3d28;
          color: #ffffff;
          padding: 1.15rem 1.25rem 1.3rem;
        }

        .sic-panel h3 {
          margin: 0 0 0.4rem;
          font-size: 1rem;
          font-weight: 800;
          color: #ffffff;
        }

        .sic-panel p {
          margin: 0;
          font-size: 0.84rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.88);
        }
      `}</style>
    </div>
  );
};

export default SourcingImageCard;
