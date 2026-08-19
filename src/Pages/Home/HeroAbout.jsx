import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Replace with your assets
import warehouseImg from "../../assets/warehouse.jpg";
import handshakeImg from "../../assets/hand-shaking.jpg";
import labImg from "../../assets/flask.jpg";

const HeroAbout = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ha-section" ref={sectionRef}>
      <div className="ha-container">
        {/* Left content */}
        <div className={`ha-content ${visible ? "show" : ""}`}>
          <span className="ha-badge">ABOUT YANET GROUP</span>

          <h2 className="ha-title">
            A Diversified Ethiopian
            <br />
            Business Group
          </h2>

          <p className="ha-desc">
            Established in 2002, Yanet Group is a leading Ethiopian company
            engaged in import, export and manufacturing. We connect local
            potential with global opportunities through quality, reliability and
            long-term partnerships.
          </p>

          <Link to="/about" className="ha-btn">
            About Us
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right image strip */}
        <div className={`ha-images ${visible ? "show" : ""}`}>
          <div className="ha-img-wrap">
            <img src={warehouseImg} alt="Warehouse and logistics operations" />
          </div>
          <div className="ha-img-wrap">
            <img src={handshakeImg} alt="Business partnership handshake" />
          </div>
          <div className="ha-img-wrap">
            <img src={labImg} alt="Laboratory and industrial chemicals" />
          </div>
        </div>
      </div>

      <style>{`
        .ha-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #f8faf9;
        }

        .ha-container {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 2.5rem;
          align-items: center;
        }

        .ha-content {
          opacity: 0;
          transform: translateX(-24px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ha-content.show {
          opacity: 1;
          transform: translateX(0);
        }

        .ha-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #16a34a;
          margin-bottom: 0.9rem;
        }

        .ha-title {
          margin: 0 0 1.1rem;
          font-size: clamp(1.85rem, 3.2vw, 2.45rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.4px;
          line-height: 1.15;
        }

        .ha-desc {
          margin: 0 0 1.75rem;
          max-width: 420px;
          font-size: 1rem;
          line-height: 1.75;
          color: #64748b;
        }

        .ha-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.8rem 1.45rem;
          border-radius: 8px;
          background: #16a34a;;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 650;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .ha-btn:hover {
          background: #1e293b;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.18);
        }

        .ha-images {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          opacity: 0;
          transform: translateX(24px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .ha-images.show {
          opacity: 1;
          transform: translateX(0);
        }

        .ha-img-wrap {
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          min-height: 280px;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.08);
          background: #e2e8f0;
        }

        .ha-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .ha-img-wrap:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 900px) {
          .ha-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .ha-content {
            transform: translateY(20px);
            text-align: center;
          }

          .ha-content.show {
            transform: translateY(0);
          }

          .ha-desc {
            margin-left: auto;
            margin-right: auto;
          }

          .ha-images {
            transform: translateY(20px);
          }

          .ha-images.show {
            transform: translateY(0);
          }

          .ha-img-wrap {
            min-height: 200px;
            aspect-ratio: 1 / 1;
          }
        }

        @media (max-width: 520px) {
          .ha-section {
            padding: 3.5rem 1.2rem 4rem;
          }

          .ha-images {
            gap: 0.5rem;
          }

          .ha-img-wrap {
            min-height: 140px;
            border-radius: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroAbout;
