import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Users, TrendingUp, Award, Globe2, ArrowRight } from "lucide-react";

const principles = [
  {
    icon: <Users size={24} />,
    title: "Trust & Integrity",
    desc: "We build relationships based on honesty, fairness, and respect.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Shared Growth",
    desc: "We grow together by creating opportunities and delivering value.",
  },
  {
    icon: <Award size={24} />,
    title: "Quality Commitment",
    desc: "We work with partners who share our dedication to quality and standards.",
  },
  {
    icon: <Globe2 size={24} />,
    title: "Global Collaboration",
    desc: "Working across borders to connect markets and communities.",
  },
];

const GlobalPartnersPhilosophy = () => {
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
    <section className="gpp-section" ref={sectionRef}>
      <div className="gpp-container">
        {/* Left content */}
        <div className={`gpp-left ${visible ? "show" : ""}`}>
          <span className="gpp-badge">OUR PARTNERSHIP PHILOSOPHY</span>

          <h2 className="gpp-title">
            Building Partnerships
            <br />
            <span className="highlight">That Last</span>
          </h2>

          <p className="gpp-desc">
            We believe in collaboration, transparency, and shared growth. Our
            partnerships are built on mutual respect, reliability, and a
            commitment to excellence.
          </p>

          <Link to="/contact" className="gpp-btn">
            Partner With Us
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right cards */}
        <div className={`gpp-grid ${visible ? "show" : ""}`}>
          {principles.map((item, i) => (
            <article
              key={item.title}
              className="gpp-card"
              style={{
                transitionDelay: visible ? `${0.1 + i * 0.08}s` : "0s",
              }}
            >
              <div className="gpp-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .gpp-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #ffffff;
        }

        .gpp-container {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.2fr;
          gap: 2.5rem;
          align-items: center;
        }

        .gpp-left {
          opacity: 0;
          transform: translateX(-24px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gpp-left.show {
          opacity: 1;
          transform: translateX(0);
        }

        .gpp-badge {
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
          margin-bottom: 1rem;
        }

        .gpp-title {
          margin: 0 0 1rem;
          font-size: clamp(1.85rem, 3.2vw, 2.45rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.4px;
          line-height: 1.15;
        }

        .gpp-title .highlight {
          color: #16a34a;
        }

        .gpp-desc {
          margin: 0 0 1.6rem;
          max-width: 380px;
          font-size: 1rem;
          line-height: 1.75;
          color: #64748b;
        }

        .gpp-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.7rem 1.35rem;
          border-radius: 50px;
          border: 1.5px solid #16a34a;
          background: transparent;
          color: #15803d;
          font-size: 0.92rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .gpp-btn:hover {
          background: #16a34a;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(22, 163, 74, 0.25);
        }

        .gpp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .gpp-card {
          background: #ffffff;
          border: 1px solid #eef2f0;
          border-radius: 18px;
          padding: 1.5rem 1.3rem 1.55rem;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04);
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .gpp-grid.show .gpp-card {
          opacity: 1;
          transform: translateY(0);
        }

        .gpp-card:hover {
          transform: translateY(-4px);
          border-color: rgba(76, 175, 80, 0.35);
          box-shadow: 0 14px 32px rgba(46, 125, 50, 0.1);
        }

        .gpp-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #e8f8ee;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .gpp-card h3 {
          margin: 0 0 0.45rem;
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
        }

        .gpp-card p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.6;
          color: #64748b;
        }

        @media (max-width: 900px) {
          .gpp-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .gpp-left {
            text-align: center;
            transform: translateY(20px);
          }

          .gpp-left.show {
            transform: translateY(0);
          }

          .gpp-desc {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 560px) {
          .gpp-section {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .gpp-grid {
            grid-template-columns: 1fr;
          }

          .gpp-title {
            font-size: 1.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalPartnersPhilosophy;
