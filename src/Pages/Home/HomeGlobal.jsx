import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Anchor, Globe2, Handshake } from "lucide-react";

import globalConnectImg from "../../assets/globalConnect.png";

const stats = [
  {
    icon: <Anchor size={18} />,
    value: "1+",
    label: "Strategic Port Connection",
  },
  {
    icon: <Globe2 size={18} />,
    value: "20+",
    label: "Countries Reached",
  },
  {
    icon: <Handshake size={18} />,
    value: "100+",
    label: "Satisfied Partners",
  },
];

const HomeGlobal = () => {
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
    <section className="hg-section" ref={sectionRef}>
      <div className="hg-bg-glow" />

      <div className="hg-container">
        {/* Left content */}
        <div className={`hg-content ${visible ? "show" : ""}`}>
          <span className="hg-badge">GLOBAL REACH</span>

          <h2 className="hg-title">
            From Ethiopia
            <br />
            To The World
          </h2>

          <p className="hg-desc">
            Strategically connected through Djibouti Port, we reach global
            markets in Asia, the Middle East and beyond.
          </p>

          <Link to="/global-network" className="hg-btn">
            Our Global Network
            <ArrowRight size={16} />
          </Link>

          <div className="hg-stats">
            {stats.map((item) => (
              <div key={item.label} className="hg-stat">
                <div className="hg-stat-icon">{item.icon}</div>
                <div>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right map – fills available space */}
        <div className={`hg-visual ${visible ? "show" : ""}`}>
          <img
            src={globalConnectImg}
            alt="Global network connections from Ethiopia and Djibouti to Europe and Asia"
            className="hg-map"
          />
        </div>
      </div>

      <style>{`
        .hg-section {
          position: relative;
          padding: 4.5rem 1.5rem 5rem;
          background: linear-gradient(
            135deg,
            #06301c 0%,
            #0a3d24 40%,
            #0f5d32 75%,
            #0e6f35 100%
          );
          overflow: hidden;
          min-height: 480px;
          display: flex;
          align-items: center;
        }

        .hg-bg-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 70% at 78% 50%, rgba(46, 125, 50, 0.35) 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 15% 80%, rgba(22, 101, 52, 0.25) 0%, transparent 60%);
          pointer-events: none;
        }

        .hg-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 0.85fr 1.25fr;
          gap: 1.5rem 2rem;
          align-items: center;
        }

        .hg-content {
          opacity: 0;
          transform: translateX(-24px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hg-content.show {
          opacity: 1;
          transform: translateX(0);
        }

        .hg-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #e8b84a;
          margin-bottom: 0.9rem;
        }

        .hg-title {
          margin: 0 0 1rem;
          font-size: clamp(1.9rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.4px;
          line-height: 1.15;
        }

        .hg-desc {
          margin: 0 0 1.6rem;
          max-width: 380px;
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(232, 245, 233, 0.88);
        }

        .hg-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.75rem 1.4rem;
          border-radius: 50px;
          border: 1.5px solid #e8b84a;
          color: #e8b84a;
          font-size: 0.92rem;
          font-weight: 650;
          text-decoration: none;
          transition: all 0.25s ease;
          margin-bottom: 2.25rem;
        }

        .hg-btn:hover {
          background: rgba(232, 184, 74, 0.14);
          transform: translateY(-2px);
        }

        .hg-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 1.4rem 1.75rem;
        }

        .hg-stat {
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }

        .hg-stat-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(232, 184, 74, 0.14);
          border: 1px solid rgba(232, 184, 74, 0.3);
          color: #e8b84a;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hg-stat strong {
          display: block;
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .hg-stat span {
          display: block;
          font-size: 0.75rem;
          color: rgba(232, 245, 233, 0.75);
          line-height: 1.3;
          max-width: 100px;
        }

        .hg-visual {
          height: 100%;
          min-height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(20px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .hg-visual.show {
          opacity: 1;
          transform: translateX(0);
        }

        .hg-map {
          width: 100%;
          height: 100%;
          max-height: 420px;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        @media (max-width: 960px) {
          .hg-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hg-content {
            transform: translateY(20px);
          }

          .hg-content.show {
            transform: translateY(0);
          }

          .hg-desc {
            margin-left: auto;
            margin-right: auto;
          }

          .hg-stats {
            justify-content: center;
          }

          .hg-stat {
            text-align: left;
          }

          .hg-visual {
            min-height: 260px;
            transform: translateY(16px);
          }

          .hg-visual.show {
            transform: translateY(0);
          }

          .hg-map {
            max-height: 300px;
          }
        }

        @media (max-width: 520px) {
          .hg-section {
            padding: 3.5rem 1.2rem 4rem;
            min-height: auto;
          }

          .hg-stats {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .hg-stat span {
            max-width: none;
          }

          .hg-visual {
            min-height: 200px;
          }

          .hg-map {
            max-height: 220px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeGlobal;
