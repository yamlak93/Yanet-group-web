import React from "react";

const HorizontalCard = ({ title, description, className = "" }) => {
  return (
    <div className={`horizontal-card ${className}`.trim()}>
      <h3 className="h-title">{title}</h3>
      <p className="h-desc">{description}</p>

      <style>{`
        .horizontal-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 20px;
          padding: 1.4rem 1.55rem;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 12px 32px rgba(46, 125, 50, 0.1);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .horizontal-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 8px 12px rgba(0, 0, 0, 0.03),
            0 20px 44px rgba(46, 125, 50, 0.16);
        }

        .h-title {
          margin: 0 0 0.5rem;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
        }

        .h-desc {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.6;
          color: #475569;
        }
      `}</style>
    </div>
  );
};

export default HorizontalCard;
