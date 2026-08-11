import React, { useEffect, useState, useRef } from "react";
import { Globe2 } from "lucide-react";
import SeeMoreButton from "../../Components/SeeMoreButton";

const cards = [
  {
    title: "Regional Presence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Strategic Markets",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const GlobalReachOverview = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="global-reach" ref={sectionRef}>
      <div className="gr-container">
        <h2 className={`gr-title ${visible ? "show" : ""}`}>
          Our Global Reach
        </h2>

        <div className={`gr-layout ${visible ? "show" : ""}`}>
          {/* Left card */}
          <div
            className="gr-card left"
            style={{ transitionDelay: visible ? "0.1s" : "0s" }}
          >
            <h3>{cards[0].title}</h3>
            <p>{cards[0].description}</p>
          </div>

          {/* Center globe */}
          <div
            className="gr-globe"
            style={{ transitionDelay: visible ? "0.2s" : "0s" }}
          >
            <div className="globe-ring ring-1" />
            <div className="globe-ring ring-2" />
            <div className="globe-core">
              <Globe2 size={36} strokeWidth={1.5} />
            </div>
          </div>

          {/* Right card */}
          <div
            className="gr-card right"
            style={{ transitionDelay: visible ? "0.3s" : "0s" }}
          >
            <h3>{cards[1].title}</h3>
            <p>{cards[1].description}</p>
          </div>
        </div>

        {/* Explore button – between cards, bottom */}
        <div
          className={`gr-cta ${visible ? "show" : ""}`}
          style={{ transitionDelay: visible ? "0.4s" : "0s" }}
        >
          <SeeMoreButton to="/global-network/reach" label="Explore" />
        </div>
      </div>

      <style>{`
        .global-reach {
          padding: 5rem 1.5rem 6rem;
          background: #ffffff;
        }

        .gr-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .gr-title {
          text-align: center;
          font-size: clamp(1.9rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2.8rem;
          letter-spacing: -0.4px;
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gr-title.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gr-layout {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 1.5rem;
          align-items: center;
        }

        .gr-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 22px;
          padding: 1.8rem 1.6rem;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 14px 36px rgba(46, 125, 50, 0.08);
          opacity: 0;
          transition:
            opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.85s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease;
        }

        .gr-card.left {
          transform: translateX(-40px);
        }

        .gr-card.right {
          transform: translateX(40px);
        }

        .gr-layout.show .gr-card {
          opacity: 1;
          transform: translateX(0);
        }

        .gr-card:hover {
          transform: translateY(-6px) !important;
          box-shadow:
            0 8px 14px rgba(0, 0, 0, 0.04),
            0 22px 48px rgba(46, 125, 50, 0.14);
        }

        .gr-card h3 {
          margin: 0 0 0.7rem;
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
        }

        .gr-card p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.65;
          color: #475569;
        }

        /* Globe center */
        .gr-globe {
          position: relative;
          width: 110px;
          height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.7);
          transition:
            opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gr-layout.show .gr-globe {
          opacity: 1;
          transform: scale(1);
        }

        .globe-core {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(145deg, #f0fdf4, #dcfce7);
          border: 2px solid rgba(46, 125, 50, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2e7d32;
          box-shadow: 0 8px 24px rgba(46, 125, 50, 0.15);
          z-index: 2;
        }

        .globe-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px dashed rgba(46, 125, 50, 0.3);
          animation: spinRing 12s linear infinite;
        }

        .ring-1 {
          width: 90px;
          height: 90px;
        }

        .ring-2 {
          width: 110px;
          height: 110px;
          animation-direction: reverse;
          animation-duration: 18s;
          border-style: solid;
          border-color: rgba(46, 125, 50, 0.15);
        }

        @keyframes spinRing {
          to { transform: rotate(360deg); }
        }

        /* Explore button */
        .gr-cta {
          display: flex;
          justify-content: center;
          margin-top: 2.2rem;
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gr-cta.show {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 800px) {
          .gr-layout {
            grid-template-columns: 1fr;
            gap: 1.3rem;
            max-width: 420px;
            margin: 0 auto;
          }

          .gr-globe {
            order: -1;
            margin: 0 auto 0.5rem;
          }

          .gr-card.left,
          .gr-card.right {
            transform: translateY(28px);
          }

          .gr-layout.show .gr-card {
            transform: translateY(0);
          }

          .gr-card:hover {
            transform: translateY(-4px) !important;
          }
        }

        @media (max-width: 520px) {
          .global-reach {
            padding: 3.5rem 1.2rem 4.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalReachOverview;
