import React from "react";
import SeeMoreButton from "./SeeMoreButton";

/**
 * Reusable display card
 *
 * Props:
 *  - image       {string}  optional image src
 *  - alt         {string}  image alt text
 *  - title       {string}  card title
 *  - description {string}  short paragraph
 *  - to          {string}  optional route for See More
 *  - label       {string}  button label (default: "See more")
 *  - icon        {node}    optional icon when no image
 */
const DisplayCard = ({
  image,
  alt = "",
  title,
  description,
  to,
  label = "See more",
  icon,
}) => {
  return (
    <div className={`display-card ${image ? "has-image" : "no-image"}`}>
      {image ? (
        <div className="card-image">
          <img src={image} alt={alt || title} />
        </div>
      ) : icon ? (
        <div className="card-icon">{icon}</div>
      ) : null}

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-desc">{description}</p>}
        {to && <SeeMoreButton to={to} label={label} />}
      </div>

      <style>{`
        .display-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 22px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 14px 36px rgba(46, 125, 50, 0.1);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          height: 100%;
        }

        .display-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 8px 14px rgba(0, 0, 0, 0.04),
            0 24px 50px rgba(46, 125, 50, 0.16);
        }

        /* Fixed image area – size does not change with the image */
        .card-image {
          width: 100%;
          aspect-ratio: 4 / 3;
          height: auto;
          max-height: 220px;
          overflow: hidden;
          background: #f0fdf4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Fit image inside the area (no crop, no container growth) */
        .card-image img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          object-position: center;
          display: block;
          transition: transform 0.5s ease;
        }

        .display-card:hover .card-image img {
          transform: scale(1.04);
        }

        .card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          margin: 1.5rem auto 0;
          border-radius: 14px;
          background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
          color: #2e7d32;
        }

        .display-card.no-image .card-body {
          padding-top: 1.5rem;
        }

        .card-body {
          padding: 1.4rem 1.3rem 1.6rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
          flex: 1;
        }

        .card-title {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.4;
        }

        .card-desc {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.6;
          color: #475569;
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default DisplayCard;
