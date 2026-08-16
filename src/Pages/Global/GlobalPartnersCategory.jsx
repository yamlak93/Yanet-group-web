import React, { useEffect, useState, useRef } from "react";
import {
  Sprout,
  Package,
  Ship,
  Landmark,
  FileBadge,
  Users,
  BottleWine,
} from "lucide-react";
import { FaSoap } from "react-icons/fa";

const categories = [
  {
    icon: <Sprout size={26} />,
    title: "Farmers & Cooperatives",
    desc: "Partnering with local farmers and cooperatives to source quality commodities.",
  },
  {
    icon: <Package size={26} />,
    title: "Suppliers & Manufacturers",
    desc: "Reliable suppliers and manufacturers who meet our quality standards.",
  },
  {
    icon: <Ship size={26} />,
    title: "Logistics & Shipping",
    desc: "Logistics partners ensuring safe, timely, and efficient global delivery.",
  },
  {
    icon: <BottleWine size={26} />,
    title: "Food and Beverage Manufactures",
    desc: "Working with beverage manufacturers to ensure quality and consistency.",
  },
  {
    icon: <FaSoap size={26} />,
    title: "Detergent Manufacturing",
    desc: "Partnering with trusted manufacturers for quality, safety, and compliance.",
  },
  {
    icon: <Users size={26} />,
    title: "Distributors & Buyers",
    desc: "Building long-term relations with distributors and buyers worldwide.",
  },
];

const GlobalPartnersCategory = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gpc-section" ref={sectionRef}>
      <div className="gpc-container">
        <div className={`gpc-header ${visible ? "show" : ""}`}>
          <span className="gpc-badge">OUR PARTNER CATEGORIES</span>
          <h2 className="gpc-title">
            Our Global <span className="highlight">Partner</span> Network
          </h2>
        </div>

        <div className={`gpc-row ${visible ? "show" : ""}`}>
          {categories.map((item, i) => (
            <article
              key={item.title}
              className="gpc-item"
              style={{
                transitionDelay: visible ? `${0.08 + i * 0.06}s` : "0s",
              }}
            >
              <div className="gpc-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .gpc-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #ffffff;
        }

        .gpc-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .gpc-header {
          margin-bottom: 2.5rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gpc-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gpc-badge {
          display: inline-block;
          background: #e8f5e9;
          color: #1b5e20;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0.38rem 0.95rem;
          border-radius: 50px;
          border: 1px solid rgba(46, 125, 50, 0.15);
          margin-bottom: 0.85rem;
        }

        .gpc-title {
          margin: 0;
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.35px;
        }

        .gpc-title .highlight {
          color: #16a34a;
        }

        .gpc-row {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0;
        }

        .gpc-item {
          position: relative;
          padding: 0.5rem 1.15rem 0.5rem;
          text-align: center;
          opacity: 0;
          transform: translateY(16px);
          transition:
            opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gpc-row.show .gpc-item {
          opacity: 1;
          transform: translateY(0);
        }

        /* Vertical dividers between items */
        .gpc-item:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 12%;
          right: 0;
          bottom: 12%;
          width: 1px;
          background: #e8eef0;
        }

        .gpc-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 1rem;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gpc-item h3 {
          margin: 0 0 0.5rem;
          font-size: 0.92rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
        }

        .gpc-item p {
          margin: 0;
          font-size: 0.82rem;
          line-height: 1.55;
          color: #64748b;
        }

        .gpc-item:hover .gpc-icon {
          transform: scale(1.08);
        }

        .gpc-icon {
          transition: transform 0.25s ease;
        }

        @media (max-width: 1000px) {
          .gpc-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem 0.5rem;
          }

          .gpc-item:not(:last-child)::after {
            display: none;
          }

          .gpc-item {
            padding: 1rem;
          }
        }

        @media (max-width: 600px) {
          .gpc-section {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .gpc-row {
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem 0.75rem;
          }
        }

        @media (max-width: 420px) {
          .gpc-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalPartnersCategory;
