import React, { useEffect, useState, useRef } from "react";
import { Compass, Users, Leaf, Globe2 } from "lucide-react";

const principles = [
  {
    icon: <Compass size={22} />,
    title: "Act with Integrity",
    desc: "We uphold the highest standards of ethics, transparency, and legal compliance.",
  },
  {
    icon: <Users size={22} />,
    title: "Respect People",
    desc: "We ensure fair treatment, safe workplaces, and opportunities for growth and development.",
  },
  {
    icon: <Leaf size={22} />,
    title: "Protect the Planet",
    desc: "We minimize our environmental impact and promote responsible resource use.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "Strengthen Communities",
    desc: "We invest in the well-being of communities and support their sustainable development.",
  },
];

const SustainabilityResponsibilityApproach = () => {
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
    <section className="sra-section" ref={sectionRef}>
      <div className="sra-container">
        {/* Left – no policy button */}
        <div className={`sra-left ${visible ? "show" : ""}`}>
          <span className="sra-badge">OUR APPROACH</span>

          <h2 className="sra-title">
            Our Approach
            <br />
            to <span className="highlight">Responsibility</span>
          </h2>

          <p className="sra-desc">
            Responsibility is embedded in our values, strategy, and daily
            operations. We work with integrity, respect, and accountability to
            create long-term value for all our stakeholders.
          </p>
        </div>

        {/* Right cards */}
        <div className={`sra-grid ${visible ? "show" : ""}`}>
          {principles.map((item, i) => (
            <article
              key={item.title}
              className="sra-card"
              style={{
                transitionDelay: visible ? `${0.1 + i * 0.08}s` : "0s",
              }}
            >
              <div className="sra-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .sra-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #f7faf8;
        }

        .sra-container {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.85fr 1.25fr;
          gap: 2.5rem;
          align-items: center;
        }

        .sra-left {
          opacity: 0;
          transform: translateX(-24px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sra-left.show {
          opacity: 1;
          transform: translateX(0);
        }

        .sra-badge {
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

        .sra-title {
          margin: 0 0 1rem;
          font-size: clamp(1.85rem, 3.2vw, 2.4rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.4px;
          line-height: 1.15;
        }

        .sra-title .highlight {
          color: #16a34a;
        }

        .sra-desc {
          margin: 0;
          max-width: 400px;
          font-size: 1rem;
          line-height: 1.75;
          color: #64748b;
        }

        .sra-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .sra-card {
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

        .sra-grid.show .sra-card {
          opacity: 1;
          transform: translateY(0);
        }

        .sra-card:hover {
          transform: translateY(-4px);
          border-color: rgba(76, 175, 80, 0.35);
          box-shadow: 0 14px 32px rgba(46, 125, 50, 0.1);
        }

        .sra-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 0.9rem;
          border-radius: 50%;
          background: #e8f8ee;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sra-card h3 {
          margin: 0 0 0.45rem;
          font-size: 0.98rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
        }

        .sra-card p {
          margin: 0;
          font-size: 0.84rem;
          line-height: 1.55;
          color: #64748b;
        }

        @media (max-width: 1000px) {
          .sra-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .sra-left {
            text-align: center;
            transform: translateY(20px);
          }

          .sra-left.show {
            transform: translateY(0);
          }

          .sra-desc {
            margin-left: auto;
            margin-right: auto;
          }

          .sra-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 520px) {
          .sra-section {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .sra-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityResponsibilityApproach;
