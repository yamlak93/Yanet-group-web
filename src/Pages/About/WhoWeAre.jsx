import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Users,
  Globe2,
  Handshake,
  Flag,
  Ship,
  Factory,
  TrendingUp,
} from "lucide-react";

import warehouseImg from "../../assets/warehouse.jpg";
import handshakeImg from "../../assets/handshaking.jpg";
import labImg from "../../assets/flask.jpg";

const stats = [
  { icon: <Calendar size={20} />, value: "2002", label: "Year Established" },
  { icon: <Users size={20} />, value: "20+", label: "Years of Experience" },
  { icon: <Globe2 size={20} />, value: "20+", label: "Countries Reached" },
  { icon: <Handshake size={20} />, value: "100+", label: "Trusted Partners" },
];

const WhoWeAre = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wwa-section" ref={sectionRef}>
      <div className="wwa-container">
        {/* Top: intro + images + stats */}
        <div className={`wwa-top ${visible ? "show" : ""}`}>
          <div className="wwa-intro">
            <span className="wwa-badge">WHO WE ARE</span>
            <h2 className="wwa-title">
              A Diversified Ethiopian
              <br />
              Business Group
            </h2>
            <p>
              Yanet Group is a privately held company established in 2002. We
              operate in import, export and manufacturing, providing products
              and services that support industries, businesses and communities
              across Ethiopia and beyond.
            </p>
            <p>
              Our commitment to quality, reliability and long-term partnerships
              has helped us grow into a diversified group with a strong presence
              in local and international markets.
            </p>
            <Link to="/about/our-story" className="wwa-btn">
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="wwa-right">
            <div className="wwa-images">
              <div className="wwa-img">
                <img src={warehouseImg} alt="Warehouse operations" />
              </div>
              <div className="wwa-img">
                <img src={handshakeImg} alt="Business partnership" />
              </div>
              <div className="wwa-img">
                <img src={labImg} alt="Industrial laboratory" />
              </div>
            </div>

            <div className="wwa-stats">
              {stats.map((s) => (
                <div key={s.label} className="wwa-stat">
                  <div className="wwa-stat-icon">{s.icon}</div>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .wwa-section {
          padding: 4.5rem 1.5rem 5rem;
          background: #f8faf9;
        }

        .wwa-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .wwa-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #16a34a;
          margin-bottom: 0.7rem;
        }

        .wwa-badge.center {
          display: block;
          text-align: center;
        }

        /* Top */
        .wwa-top {
          display: grid;
          grid-template-columns: 0.95fr 1.2fr;
          gap: 2.25rem;
          align-items: start;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .wwa-top.show {
          opacity: 1;
          transform: translateY(0);
        }

        .wwa-title {
          margin: 0 0 1.1rem;
          font-size: clamp(1.75rem, 3vw, 2.35rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -0.35px;
        }

        .wwa-intro p {
          margin: 0 0 0.9rem;
          max-width: 420px;
          font-size: 0.98rem;
          line-height: 1.75;
          color: #64748b;
        }

        .wwa-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          margin-top: 0.6rem;
          padding: 0.8rem 1.4rem;
          border-radius: 8px;
          background: #16a34a;
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 650;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .wwa-btn:hover {
          background: #1e293b;
          transform: translateY(-2px);
        }

        .wwa-right {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .wwa-images {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.65rem;
        }

        .wwa-img {
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          background: #e2e8f0;
        }

        .wwa-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }

        .wwa-img:hover img {
          transform: scale(1.05);
        }

        .wwa-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #0b1f17;
          border-radius: 14px;
          padding: 1.25rem 0.75rem;
          gap: 0.25rem;
        }

        .wwa-stat {
          text-align: center;
          color: #ffffff;
          padding: 0.35rem 0.4rem;
        }

        .wwa-stat-icon {
          color: #86efac;
          margin-bottom: 0.35rem;
          display: flex;
          justify-content: center;
        }

        .wwa-stat strong {
          display: block;
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 0.2rem;
        }

        .wwa-stat span {
          display: block;
          font-size: 0.72rem;
          color: rgba(232, 245, 233, 0.75);
          line-height: 1.3;
        }

        /* Journey */
        .wwa-journey {
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .wwa-journey.show {
          opacity: 1;
          transform: translateY(0);
        }

        .wwa-journey-title {
          margin: 0 0 2.5rem;
          text-align: center;
          font-size: clamp(1.45rem, 2.5vw, 1.9rem);
          font-weight: 800;
          color: #0f172a;
        }

        .wwa-timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0.75rem;
        }

        .wwa-line {
          position: absolute;
          top: 24px;
          left: 8%;
          right: 8%;
          height: 2px;
          background: linear-gradient(90deg, #bbf7d0, #86efac, #bbf7d0);
          z-index: 0;
        }

        .wwa-step {
          position: relative;
          z-index: 1;
          text-align: center;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .wwa-journey.show .wwa-step {
          opacity: 1;
          transform: translateY(0);
        }

        .wwa-dot {
          width: 48px;
          height: 48px;
          margin: 0 auto 0.75rem;
          border-radius: 50%;
          background: #0b1f17;
          color: #86efac;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.12);
        }

        .wwa-y-mark {
          font-size: 1rem;
          font-weight: 800;
          color: #86efac;
        }

        .wwa-year {
          display: block;
          font-size: 0.95rem;
          font-weight: 800;
          color: #16a34a;
          margin-bottom: 0.45rem;
        }

        .wwa-step p {
          margin: 0;
          font-size: 0.8rem;
          line-height: 1.5;
          color: #64748b;
          max-width: 150px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 960px) {
          .wwa-top {
            grid-template-columns: 1fr;
          }

          .wwa-intro p {
            max-width: 100%;
          }

          .wwa-timeline {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem 0.75rem;
          }

          .wwa-line {
            display: none;
          }
        }

        @media (max-width: 560px) {
          .wwa-section {
            padding: 3.5rem 1.2rem 4rem;
          }

          .wwa-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }

          .wwa-timeline {
            grid-template-columns: 1fr 1fr;
          }

          .wwa-images {
            gap: 0.45rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;
