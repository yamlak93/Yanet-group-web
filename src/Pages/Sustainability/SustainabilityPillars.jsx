import React, { useEffect, useState, useRef } from "react";
import { Sun, Users, Recycle } from "lucide-react";
import SeeMoreButton from "../../Components/SeeMoreButton";
import HorizontalCard from "../../Components/HorizontalCard";

const pillars = [
  {
    icon: <Sun size={36} />,
    title: "Our Commitment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    to: "/sustainability/environment",
  },
  {
    icon: <Users size={36} />,
    title: "Responsibilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    to: "/sustainability/responsibilities",
  },
  {
    icon: <Recycle size={36} />,
    title: "Enviromental impact",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    to: "/sustainability/commitment",
  },
];

const SustainabilityPillars = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sustain-pillars" ref={sectionRef}>
      <div className="sp-container">
        <h2 className={`sp-title ${visible ? "show" : ""}`}>
          Sustainability Pillars
        </h2>

        {/* Three pillar cards */}
        <div className={`sp-grid ${visible ? "show" : ""}`}>
          {pillars.map((item, index) => (
            <div
              key={item.title}
              className="sp-card"
              style={{
                transitionDelay: visible ? `${0.1 + index * 0.12}s` : "0s",
              }}
            >
              <div className="sp-icon">{item.icon}</div>
              <h3 className="sp-card-title">{item.title}</h3>
              <p className="sp-card-desc">{item.description}</p>
              <SeeMoreButton to={item.to} label="Explore More" />
            </div>
          ))}
        </div>

        {/* Bottom horizontal card – no image */}
        <div
          className={`sp-progress ${visible ? "show" : ""}`}
          style={{ transitionDelay: visible ? "0.45s" : "0s" }}
        >
          <HorizontalCard
            title="Governmental Responsibilities"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <div className="sp-progress-btn">
            <SeeMoreButton
              to="/sustainability/governmental"
              label="Explore More"
            />
          </div>
        </div>
      </div>

      <style>{`
        .sustain-pillars {
          padding: 5rem 1.5rem 6rem;
          background: #ffffff;
        }

        .sp-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .sp-title {
          text-align: center;
          font-size: clamp(1.9rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2.5rem;
          letter-spacing: -0.4px;
          opacity: 0;
          transform: translateY(22px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sp-title.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .sp-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 22px;
          padding: 2rem 1.5rem 1.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 14px 36px rgba(46, 125, 50, 0.08);
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease;
        }

        .sp-grid.show .sp-card {
          opacity: 1;
          transform: translateY(0);
        }

        .sp-card:hover {
          transform: translateY(-8px);
          box-shadow:
            0 8px 14px rgba(0, 0, 0, 0.04),
            0 22px 48px rgba(46, 125, 50, 0.14);
        }

        .sp-icon {
          width: 88px;
          height: 88px;
          border-radius: 20px;
          background: linear-gradient(145deg, #f0fdf4, #dcfce7);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2e7d32;
          margin-bottom: 1.3rem;
        }

        .sp-card-title {
          margin: 0 0 0.7rem;
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
        }

        .sp-card-desc {
          margin: 0 0 1.4rem;
          font-size: 0.92rem;
          line-height: 1.65;
          color: #475569;
          flex: 1;
        }

        .sp-progress {
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sp-progress.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sp-progress-btn {
          display: flex;
          justify-content: center;
          margin-top: 1.2rem;
        }

        @media (max-width: 900px) {
          .sp-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 520px) {
          .sustain-pillars {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .sp-card {
            padding: 1.6rem 1.3rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityPillars;
