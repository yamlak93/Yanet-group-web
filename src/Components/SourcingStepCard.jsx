import React from "react";

const SourcingStepCard = ({ icon, title, desc, className = "", style }) => {
  return (
    <article className={`ssc-card ${className}`} style={style}>
      <div className="ssc-icon">{icon}</div>
      <h3 className="ssc-title">{title}</h3>
      <p className="ssc-desc">{desc}</p>

      <style>{`
        .ssc-card {
          flex: 1 1 0;
          min-width: 120px;
          max-width: 160px;
          background: #ffffff;
          border-radius: 16px;
          padding: 1.2rem 0.85rem 1.25rem;
          text-align: center;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.05);
          border: 1px solid rgba(232, 240, 233, 0.9);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .ssc-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(46, 125, 50, 0.1);
        }

        .ssc-icon {
          width: 44px;
          height: 44px;
          margin: 0 auto 0.85rem;
          border-radius: 12px;
          background: #e8f8ee;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ssc-title {
          margin: 0 0 0.4rem;
          font-size: 0.88rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.3;
        }

        .ssc-desc {
          margin: 0;
          font-size: 0.75rem;
          line-height: 1.5;
          color: #64748b;
        }
      `}</style>
    </article>
  );
};

export default SourcingStepCard;
