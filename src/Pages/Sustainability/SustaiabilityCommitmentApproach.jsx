import React, { useEffect, useState, useRef } from "react";
import { Leaf, Target, Users, Globe2 } from "lucide-react";

const stats = [
  {
    icon: <Leaf size={22} />,
    value: "4",
    title: "Sustainability Pillars",
    desc: "Guiding our commitment",
  },
  {
    icon: <Target size={22} />,
    value: "100%",
    title: "Responsible Sourcing",
    desc: "From trusted & ethical partners",
  },
  {
    icon: <Users size={22} />,
    value: null,
    title: "Communities First",
    desc: "Supporting farmers & local livelihoods",
  },
  {
    icon: <Globe2 size={22} />,
    value: null,
    title: "Cleaner Planet",
    desc: "Reducing impact for a greener future",
  },
];

const SustainabilityCommitmentApproach = () => {
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
    <section className="sca-section" ref={sectionRef}>
      <div className="sca-container">
        {/* Left content – no policy button */}
        <div className={`sca-left ${visible ? "show" : ""}`}>
          <span className="sca-badge">OUR APPROACH</span>

          <h2 className="sca-title">
            Sustainable Today,
            <br />
            <span className="highlight">Stronger Tomorrow</span>
          </h2>

          <p className="sca-desc">
            We integrate sustainability into every step of our value chain —
            from sourcing and processing to logistics and partnerships. Our goal
            is to create lasting value for people, the planet, and future
            generations.
          </p>
        </div>

        {/* Right stats cards */}
        <div className={`sca-grid ${visible ? "show" : ""}`}>
          {stats.map((item, i) => (
            <article
              key={item.title}
              className="sca-card"
              style={{
                transitionDelay: visible ? `${0.1 + i * 0.08}s` : "0s",
              }}
            >
              <div className="sca-icon">{item.icon}</div>
              {item.value && <div className="sca-value">{item.value}</div>}
              <h3 className={!item.value ? "sca-title-only" : ""}>
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .sca-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #f7faf8;
        }

        .sca-container {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.85fr 1.25fr;
          gap: 2.5rem;
          align-items: center;
        }

        .sca-left {
          opacity: 0;
          transform: translateX(-24px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sca-left.show {
          opacity: 1;
          transform: translateX(0);
        }

        .sca-badge {
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

        .sca-title {
          margin: 0 0 1rem;
          font-size: clamp(1.85rem, 3.2vw, 2.4rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.4px;
          line-height: 1.15;
        }

        .sca-title .highlight {
          color: #16a34a;
        }

        .sca-desc {
          margin: 0;
          max-width: 400px;
          font-size: 1rem;
          line-height: 1.75;
          color: #64748b;
        }

        .sca-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .sca-card {
          background: #ffffff;
          border: 1px solid #eef2f0;
          border-radius: 18px;
          padding: 1.5rem 1.1rem 1.55rem;
          text-align: center;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04);
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .sca-grid.show .sca-card {
          opacity: 1;
          transform: translateY(0);
        }

        .sca-card:hover {
          transform: translateY(-4px);
          border-color: rgba(76, 175, 80, 0.35);
          box-shadow: 0 14px 32px rgba(46, 125, 50, 0.1);
        }

        .sca-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 0.85rem;
          border-radius: 50%;
          background: #e8f8ee;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sca-value {
          font-size: 1.65rem;
          font-weight: 800;
          color: #16a34a;
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }

        .sca-card h3 {
          margin: 0 0 0.4rem;
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
        }

        .sca-card h3.sca-title-only {
          font-size: 1.05rem;
          margin-top: 0.15rem;
        }

        .sca-card p {
          margin: 0;
          font-size: 0.82rem;
          line-height: 1.5;
          color: #64748b;
        }

        @media (max-width: 1000px) {
          .sca-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .sca-left {
            text-align: center;
            transform: translateY(20px);
          }

          .sca-left.show {
            transform: translateY(0);
          }

          .sca-desc {
            margin-left: auto;
            margin-right: auto;
          }

          .sca-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 520px) {
          .sca-section {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .sca-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityCommitmentApproach;
