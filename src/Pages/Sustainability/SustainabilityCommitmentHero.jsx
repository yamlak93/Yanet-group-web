import React, { useEffect, useState } from "react";
import { ChevronDown, Leaf, Users, Globe2, ShieldCheck } from "lucide-react";

// Replace with your sustainability image
import commitmentImg from "../../assets/commitment.jpg";

const pillars = [
  { icon: <Leaf size={20} />, label: "Responsible Sourcing" },
  { icon: <Users size={20} />, label: "Community Empowerment" },
  { icon: <Globe2 size={20} />, label: "Environmental Stewardship" },
  { icon: <ShieldCheck size={20} />, label: "Ethical & Transparent" },
];

const SustainabilityCommitmentHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 0.95,
      behavior: "smooth",
    });
  };

  return (
    <section className="sch-hero">
      <div className="sch-bg" />

      <div className="sch-shapes">
        <div className="shape s1" />
        <div className="shape s2" />
      </div>

      {/* Left content */}
      <div className={`sch-content ${loaded ? "show" : ""}`}>
        <span className="sch-badge">SUSTAINABILITY</span>

        <h1 className="sch-title">
          Our Commitment
          <br />
          for a <span className="highlight">Better Tomorrow</span>
        </h1>

        <p className="sch-desc">
          At Yanet Industrial PLC, sustainability is at the heart of our
          business. We are committed to responsible sourcing, ethical practices,
          environmental stewardship, and empowering communities across Ethiopia
          and beyond.
        </p>

        <div className="sch-pillars">
          {pillars.map((item) => (
            <div key={item.label} className="sch-pillar">
              <div className="sch-pillar-icon">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right circular image – same curve style as Business / Sourcing heroes */}
      <div className={`sch-visual ${loaded ? "show" : ""}`}>
        <div className="sch-frame">
          <div
            className="sch-frame-img"
            style={{ backgroundImage: `url('${commitmentImg}')` }}
            role="img"
            aria-label="Hands holding a young plant – sustainability commitment"
          />
        </div>
      </div>

      <button
        type="button"
        className="sch-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      <div className="sch-wave">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C240,100 480,20 720,50 C960,80 1200,30 1440,55 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <style>{`
        .sch-hero {
          position: relative;
          min-height: 110vh;
          min-height: 110dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0a3d24;
        }

        .sch-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(
            115deg,
            #06301c 0%,
            #0a3d24 35%,
            #0f5d32 70%,
            #0e6f35 100%
          );
        }

        .sch-shapes {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
        }

        .s1 {
          width: 420px;
          height: 420px;
          top: -80px;
          left: -100px;
        }

        .s2 {
          width: 280px;
          height: 280px;
          bottom: 80px;
          left: 28%;
        }

        .sch-content {
          position: relative;
          z-index: 5;
          max-width: 560px;
          padding: 8rem 2rem 7rem 3.5rem;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sch-content.show {
          opacity: 1;
          transform: translateX(0);
        }

        .sch-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.12);
          color: #e8f5e9;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          margin-bottom: 1.15rem;
        }

        .sch-title {
          margin: 0 0 1.2rem;
          font-size: clamp(2.2rem, 4.8vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          line-height: 1.12;
        }

        .sch-title .highlight {
          color: #86efac;
        }

        .sch-desc {
          margin: 0 0 2rem;
          max-width: 440px;
          font-size: 1.02rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.9);
        }

        .sch-pillars {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.85rem;
          max-width: 480px;
        }

        .sch-pillar {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .sch-pillar-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #bbf7d0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sch-pillar span {
          font-size: 0.78rem;
          font-weight: 600;
          line-height: 1.35;
          color: rgba(255, 255, 255, 0.88);
        }

        .sch-visual {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-48%);
          z-index: 3;
          width: min(48vw, 560px);
          aspect-ratio: 1;
          opacity: 0;
          transition: opacity 1s ease 0.15s;
        }

        .sch-visual.show {
          opacity: 1;
        }

        .sch-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50% 0 0 50%;
          overflow: hidden;
          box-shadow: -16px 0 48px rgba(0, 0, 0, 0.25);
          border: 3px solid rgba(255, 255, 255, 0.12);
          border-right: none;
        }

        .sch-frame-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .sch-scroll {
          position: absolute;
          bottom: 120px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 6;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: #16a34a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(22, 163, 74, 0.4);
          animation: schBounce 2s ease-in-out infinite;
        }

        .sch-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes schBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .sch-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .sch-wave svg {
          width: 100%;
          height: 90px;
          display: block;
        }

        @media (max-width: 960px) {
          .sch-hero {
            min-height: 105vh;
            min-height: 105dvh;
          }

          .sch-visual {
            width: min(55vw, 380px);
            top: auto;
            bottom: 130px;
            transform: none;
            right: -20px;
          }

          .sch-visual.show {
            transform: none;
          }

          .sch-content {
            padding: 7rem 1.8rem 16rem;
            max-width: 100%;
          }

          .sch-scroll {
            bottom: 100px;
          }
        }

        @media (max-width: 600px) {
          .sch-hero {
            min-height: 100vh;
            min-height: 100dvh;
          }

          .sch-visual {
            display: none;
          }

          .sch-content {
            padding: 6.5rem 1.3rem 5.5rem;
            text-align: center;
          }

          .sch-desc {
            margin-left: auto;
            margin-right: auto;
          }

          .sch-pillars {
            grid-template-columns: 1fr 1fr;
            max-width: 320px;
            margin: 0 auto;
            text-align: left;
          }

          .sch-title {
            font-size: 2.1rem;
          }

          .sch-scroll {
            bottom: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityCommitmentHero;
