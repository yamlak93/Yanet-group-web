import React, { useEffect, useState, useRef } from "react";
import { Globe2, Handshake, Ship } from "lucide-react";

// Replace with your presence / map image path
import presenceMapImg from "../../assets/global-map.png";

const stats = [
  {
    icon: <Globe2 size={26} />,
    value: "15+",
    label: "Countries",
    hint: "We export to",
  },
  {
    icon: <Handshake size={26} />,
    value: "50+",
    label: "Global Partners",
    hint: "Trusting our quality",
  },
  {
    icon: <Ship size={26} />,
    value: "20+",
    label: "Years of Experience",
    hint: "Serving global markets",
  },
];

const GlobalReachPresence = () => {
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
    <section className="grp-section" ref={sectionRef}>
      <div className="grp-container">
        {/* Left content */}
        <div className={`grp-left ${visible ? "show" : ""}`}>
          <span className="grp-badge">OUR GLOBAL PRESENCE</span>

          <h2 className="grp-title">
            Our <span className="highlight">Global</span> Presence
          </h2>

          <p className="grp-desc">
            Yanet Industrial PLC has established a reliable export network that
            spans across Asia, the Middle East, and beyond. Our commitment to
            quality and reliability has earned the trust of partners in many
            countries.
          </p>

          <div className="grp-stats">
            {stats.map((item, i) => (
              <article
                key={item.label}
                className="grp-stat-card"
                style={{
                  transitionDelay: visible ? `${0.12 + i * 0.08}s` : "0s",
                }}
              >
                <div className="grp-stat-icon">{item.icon}</div>
                <div className="grp-stat-value">{item.value}</div>
                <div className="grp-stat-label">{item.label}</div>
                <div className="grp-stat-hint">{item.hint}</div>
              </article>
            ))}
          </div>
        </div>

        {/* Right map */}
        <div className={`grp-right ${visible ? "show" : ""}`}>
          <div className="grp-map-card">
            <img
              src={presenceMapImg}
              alt="Yanet Industrial global presence map – Asia and Middle East"
              className="grp-map-img"
            />
          </div>
        </div>
      </div>

      <style>{`
        .grp-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #f4f7f5;
        }

        .grp-container {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 2.5rem;
          align-items: center;
        }

        .grp-left {
          opacity: 0;
          transform: translateX(-28px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .grp-left.show {
          opacity: 1;
          transform: translateX(0);
        }

        .grp-badge {
          display: inline-block;
          background: #e8f5e9;
          color: #1b5e20;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          border: 1px solid rgba(46, 125, 50, 0.18);
          margin-bottom: 1rem;
        }

        .grp-title {
          margin: 0 0 1rem;
          font-size: clamp(1.85rem, 3.4vw, 2.45rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          letter-spacing: -0.4px;
        }

        .grp-title .highlight {
          color: #16a34a;
        }

        .grp-desc {
          margin: 0 0 1.75rem;
          max-width: 460px;
          font-size: 1rem;
          line-height: 1.75;
          color: #64748b;
        }

        .grp-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.9rem;
        }

        .grp-stat-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 18px;
          padding: 1.25rem 1rem 1.3rem;
          text-align: center;
          box-shadow: 0 8px 24px rgba(46, 125, 50, 0.05);
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .grp-left.show .grp-stat-card {
          opacity: 1;
          transform: translateY(0);
        }

        .grp-stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(76, 175, 80, 0.4);
          box-shadow: 0 14px 32px rgba(46, 125, 50, 0.1);
        }

        .grp-stat-icon {
          width: 44px;
          height: 44px;
          margin: 0 auto 0.75rem;
          border-radius: 12px;
          background: linear-gradient(145deg, #f0fdf4, #dcfce7);
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .grp-stat-value {
          font-size: 1.55rem;
          font-weight: 800;
          color: #15803d;
          line-height: 1.15;
          margin-bottom: 0.2rem;
        }

        .grp-stat-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.15rem;
        }

        .grp-stat-hint {
          font-size: 0.78rem;
          color: #94a3b8;
          line-height: 1.35;
        }

        .grp-right {
          opacity: 0;
          transform: translateX(28px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .grp-right.show {
          opacity: 1;
          transform: translateX(0);
        }

        .grp-map-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 24px;
          padding: 1.25rem;
          box-shadow: 0 16px 40px rgba(46, 125, 50, 0.07);
          overflow: hidden;
        }

        .grp-map-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 16px;
          object-fit: contain;
          min-height: 280px;
          background: linear-gradient(160deg, #f0fdf4 0%, #ffffff 50%, #f8fafc 100%);
        }

        @media (max-width: 960px) {
          .grp-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .grp-left {
            transform: translateY(22px);
          }

          .grp-left.show {
            transform: translateY(0);
          }

          .grp-right {
            transform: translateY(22px);
            order: -1;
          }

          .grp-right.show {
            transform: translateY(0);
          }

          .grp-desc {
            max-width: 100%;
          }
        }

        @media (max-width: 600px) {
          .grp-section {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .grp-stats {
            grid-template-columns: 1fr;
            max-width: 280px;
          }

          .grp-map-card {
            padding: 0.9rem;
            border-radius: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalReachPresence;
