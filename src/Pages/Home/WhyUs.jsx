import React, { useEffect, useState, useRef } from "react";
import HorizontalCard from "../../Components/HorizontalCard";
import DisplayCard from "../../Components/DisplayCard";
import SeeMoreButton from "../../Components/SeeMoreButton";

import whyImg from "../../assets/Chemicaltube1.jpg";

const leftCards = [
  {
    title: "Experience & Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Sustainable Practices",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Sustainable Practices",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Sustainable Practices",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const WhyUs = () => {
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
    <section className="why-us" ref={sectionRef}>
      <div className="why-container">
        <h2 className={`section-title ${visible ? "show" : ""}`}>Why Us</h2>

        <div className={`why-layout ${visible ? "show" : ""}`}>
          {/* Left column */}
          <div className="left-col">
            <div className="h-cards">
              {leftCards.map((card, i) => (
                <div
                  key={card.title}
                  className="h-wrap"
                  style={{
                    transitionDelay: visible ? `${0.1 + i * 0.1}s` : "0s",
                  }}
                >
                  <HorizontalCard
                    title={card.title}
                    description={card.description}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right – DisplayCard */}
          <div
            className="right-col"
            style={{ transitionDelay: visible ? "0.2s" : "0s" }}
          >
            <DisplayCard
              image={whyImg}
              alt="Global Reach"
              title="Global Reach & Reliability"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              to="/about/why-us"
              label="See more"
            />
          </div>
        </div>
      </div>

      <style>{`
        .why-us {
          padding: 4.5rem 1.5rem 5.5rem;
          background: #ffffff;
        }

        .why-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: clamp(1.8rem, 3.5vw, 2.3rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2.5rem;
          letter-spacing: -0.4px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .section-title.show {
          opacity: 1;
          transform: translateY(0);
        }

        .why-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 1.8rem;
          align-items: stretch;
        }

        .left-col {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .h-cards {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          flex: 1;
        }

        .h-wrap,
        .btn-wrap,
        .right-col {
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .why-layout.show .h-wrap,
        .why-layout.show .btn-wrap,
        .why-layout.show .right-col {
          opacity: 1;
          transform: translateY(0);
        }

        /* Floating look for horizontal cards */
        .h-wrap :global(.horizontal-card),
        .why-us .horizontal-card {
          background: #ffffff !important;
          border: 1px solid #e8f0e9 !important;
          border-radius: 20px !important;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 12px 32px rgba(46, 125, 50, 0.1) !important;
        }

        .why-us .horizontal-card:hover {
          transform: translateY(-6px) !important;
          box-shadow:
            0 8px 12px rgba(0, 0, 0, 0.03),
            0 20px 44px rgba(46, 125, 50, 0.16) !important;
        }

        /* Floating look for DisplayCard on the right */
        .right-col :global(.display-card),
        .why-us .display-card {
          background: #ffffff !important;
          border: 1px solid #e8f0e9 !important;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 14px 36px rgba(46, 125, 50, 0.11) !important;
        }

        .why-us .display-card:hover {
          transform: translateY(-8px) !important;
          box-shadow:
            0 8px 14px rgba(0, 0, 0, 0.04),
            0 24px 50px rgba(46, 125, 50, 0.16) !important;
        }

        .btn-wrap {
          display: flex;
          justify-content: center;
          padding-top: 0.5rem;
        }

        .right-col {
          display: flex;
        }

        .right-col > div {
          width: 100%;
        }

        @media (max-width: 900px) {
          .why-layout {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin: 0 auto;
          }

          .right-col {
            order: -1;
          }
        }

        @media (max-width: 520px) {
          .why-us {
            padding: 3.5rem 1.2rem 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyUs;
