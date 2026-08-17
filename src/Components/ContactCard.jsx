import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * Dark contact / CTA card
 * Props:
 *  - image       {string}
 *  - alt         {string}
 *  - title       {string}
 *  - description {string}
 *  - to          {string}  route for button (default: /contact)
 *  - label       {string}  button label (default: Partner With Us)
 */
const ContactCard = ({
  image,
  alt = "",
  title,
  description,
  to = "/contact",
  label = "Partner With Us",
}) => {
  return (
    <div className="contact-card">
      <div className="cc-image">
        <img src={image} alt={alt || title} />
      </div>

      <div className="cc-body">
        <h3 className="cc-title">{title}</h3>
        <p className="cc-desc">{description}</p>
        <Link to={to} className="cc-btn">
          {label}
          <ArrowRight size={16} />
        </Link>
      </div>

      <style>{`
        .contact-card {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          align-items: stretch;
          background: #0f3d28;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(15, 61, 40, 0.25);
          min-height: 280px;
        }

        .cc-image {
          min-height: 220px;
          overflow: hidden;
        }

        .cc-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cc-body {
          padding: 1.8rem 1.6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #ffffff;
        }

        .cc-title {
          margin: 0 0 0.75rem;
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1.25;
          color: #ffffff;
        }

        .cc-desc {
          margin: 0 0 1.4rem;
          font-size: 0.92rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.88);
        }

        .cc-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          align-self: flex-start;
          padding: 0.7rem 1.3rem;
          border-radius: 50px;
          background: #ffffff;
          color: #0f3d28;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .cc-btn:hover {
          background: #e8f5e9;
          transform: translateY(-1px);
        }

        @media (max-width: 700px) {
          .contact-card {
            grid-template-columns: 1fr;
          }

          .cc-image {
            min-height: 180px;
            max-height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactCard;
