import React, { useEffect, useState, useRef } from "react";
import { Target, Users, Globe2, TrendingUp } from "lucide-react";

const goals = [
  {
    icon: <Target size={24} />,
    title: "Expand Responsible Sourcing",
    desc: "Strengthen our network of ethical suppliers and support sustainable farming practices.",
  },
  {
    icon: <Users size={24} />,
    title: "Empower More Communities",
    desc: "Invest in education, healthcare, and livelihoods to create lasting positive change.",
  },
  {
    icon: <Globe2 size={24} />,
    title: "Reduce Environmental Impact",
    desc: "Adopt cleaner technologies and innovative solutions to protect our environment.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Build a Sustainable Business",
    desc: "Drive long-term growth while staying true to our sustainability commitments.",
  },
];

const SustainabilityCommitmentGoals = () => {
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
    <section className="scg-section" ref={sectionRef}>
      <div className="scg-container">
        <div className={`scg-header ${visible ? "show" : ""}`}>
          <span className="scg-badge">OUR GOALS FOR TOMORROW</span>
          <h2 className="scg-title">
            Our Goals for a <span className="highlight">Sustainable</span>{" "}
            Future
          </h2>
        </div>

        <div className={`scg-row ${visible ? "show" : ""}`}>
          {goals.map((item, i) => (
            <article
              key={item.title}
              className="scg-item"
              style={{
                transitionDelay: visible ? `${0.08 + i * 0.07}s` : "0s",
              }}
            >
              <div className="scg-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .scg-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #ffffff;
        }

        .scg-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .scg-header {
          margin-bottom: 2.4rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scg-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .scg-badge {
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

        .scg-title {
          margin: 0;
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.35px;
        }

        .scg-title .highlight {
          color: #16a34a;
        }

        .scg-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .scg-item {
          position: relative;
          padding: 0.5rem 1.4rem;
          text-align: left;
          opacity: 0;
          transform: translateY(16px);
          transition:
            opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scg-row.show .scg-item {
          opacity: 1;
          transform: translateY(0);
        }

        .scg-item:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 10%;
          right: 0;
          bottom: 10%;
          width: 1px;
          background: #e8eef0;
        }

        .scg-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #e8f8ee;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: transform 0.25s ease;
        }

        .scg-item:hover .scg-icon {
          transform: scale(1.08);
        }

        .scg-item h3 {
          margin: 0 0 0.45rem;
          font-size: 0.98rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
        }

        .scg-item p {
          margin: 0;
          font-size: 0.88rem;
          line-height: 1.6;
          color: #64748b;
        }

        @media (max-width: 900px) {
          .scg-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem 0.5rem;
          }

          .scg-item:not(:last-child)::after {
            display: none;
          }

          .scg-item {
            padding: 0.75rem 1rem;
          }
        }

        @media (max-width: 520px) {
          .scg-section {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .scg-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityCommitmentGoals;
