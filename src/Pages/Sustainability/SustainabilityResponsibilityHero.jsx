import React, { useEffect, useState } from "react";
import { ChevronDown, Users, ShieldCheck, Leaf, Handshake } from "lucide-react";

// Replace with your image
import responsibilityImg from "../../assets/sustain.jpg";

const pillars = [
  { icon: <Users size={18} />, label: "People First" },
  { icon: <ShieldCheck size={18} />, label: "Ethical Business" },
  { icon: <Leaf size={18} />, label: "Environmental Care" },
  { icon: <Handshake size={18} />, label: "Community Commitment" },
];

const SustainabilityResponsibilityHero = () => {
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
    <section className="srg-hero">
      <div className="srg-bg" />

      <div className="srg-shapes">
        <div className="shape s1" />
        <div className="shape s2" />
      </div>

      {/* Left content */}
      <div className={`srg-content ${loaded ? "show" : ""}`}>
        <span className="srg-badge">SUSTAINABILITY</span>

        <h1 className="srg-title">
          Our Responsibilities,
          <br />
          <span className="highlight">Our Promise</span>
        </h1>

        <p className="srg-desc">
          At Yanet Industrial PLC, we believe that true growth comes with
          responsibility. We are committed to doing business the right way—for
          our people, our partners, our communities, and our planet.
        </p>

        <div className="srg-pillars">
          {pillars.map((item) => (
            <div key={item.label} className="srg-pillar">
              <div className="srg-pillar-icon">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right visual + quote */}
      <div className={`srg-visual ${loaded ? "show" : ""}`}>
        <div className="srg-frame">
          <div
            className="srg-frame-img"
            style={{ backgroundImage: `url('${responsibilityImg}')` }}
            role="img"
            aria-label="Hands holding a young plant"
          />
        </div>

        <div className="srg-quote">
          <span className="srg-quote-mark">“</span>
          <p>
            We accept our responsibility to act today for a sustainable and
            inclusive tomorrow.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="srg-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      <div className="srg-wave">
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
        .srg-hero {
          position: relative;
          min-height: 110vh;
          min-height: 110dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0a3d24;
        }

        .srg-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(
            115deg,
            #06301c 0%,
            #0a3d24 40%,
            #0f5d32 75%,
            #0e6f35 100%
          );
        }

        .srg-shapes {
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
          width: 400px;
          height: 400px;
          top: -80px;
          left: -100px;
        }

        .s2 {
          width: 260px;
          height: 260px;
          bottom: 80px;
          left: 26%;
        }

        .srg-content {
          position: relative;
          z-index: 5;
          max-width: 540px;
          padding: 8rem 2rem 7rem 3.5rem;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .srg-content.show {
          opacity: 1;
          transform: translateX(0);
        }

        .srg-badge {
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

        .srg-title {
          margin: 0 0 1.2rem;
          font-size: clamp(2.15rem, 4.6vw, 3.1rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          line-height: 1.12;
        }

        .srg-title .highlight {
          color: #86efac;
        }

        .srg-desc {
          margin: 0 0 2rem;
          max-width: 430px;
          font-size: 1.02rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.9);
        }

        .srg-pillars {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.85rem;
          max-width: 460px;
        }

        .srg-pillar {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.45rem;
        }

        .srg-pillar-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #bbf7d0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .srg-pillar span {
          font-size: 0.76rem;
          font-weight: 600;
          line-height: 1.35;
          color: rgba(255, 255, 255, 0.88);
        }

        .srg-visual {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-48%);
          z-index: 3;
          width: min(50vw, 580px);
          aspect-ratio: 1;
          opacity: 0;
          transition: opacity 1s ease 0.15s;
        }

        .srg-visual.show {
          opacity: 1;
        }

        .srg-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50% 0 0 50%;
          overflow: hidden;
          box-shadow: -16px 0 48px rgba(0, 0, 0, 0.25);
          border: 3px solid rgba(255, 255, 255, 0.12);
          border-right: none;
        }

        .srg-frame-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .srg-quote {
          position: absolute;
          right: 6%;
          bottom: 14%;
          z-index: 4;
          max-width: 220px;
          background: rgba(10, 48, 28, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 1.15rem 1.2rem 1.2rem;
          backdrop-filter: blur(8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
        }

        .srg-quote-mark {
          display: block;
          font-size: 1.8rem;
          line-height: 1;
          color: #86efac;
          font-weight: 700;
          margin-bottom: 0.35rem;
        }

        .srg-quote p {
          margin: 0;
          font-size: 0.88rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.92);
        }

        .srg-scroll {
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
          animation: srgBounce 2s ease-in-out infinite;
        }

        .srg-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes srgBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .srg-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .srg-wave svg {
          width: 100%;
          height: 90px;
          display: block;
        }

        @media (max-width: 960px) {
          .srg-hero {
            min-height: 105vh;
            min-height: 105dvh;
          }

          .srg-visual {
            width: min(55vw, 380px);
            top: auto;
            bottom: 130px;
            transform: none;
            right: -20px;
          }

          .srg-visual.show {
            transform: none;
          }

          .srg-quote {
            right: 8%;
            bottom: 8%;
            max-width: 180px;
            padding: 0.9rem 1rem;
          }

          .srg-content {
            padding: 7rem 1.8rem 16rem;
            max-width: 100%;
          }

          .srg-scroll {
            bottom: 100px;
          }
        }

        @media (max-width: 600px) {
          .srg-hero {
            min-height: 100vh;
            min-height: 100dvh;
          }

          .srg-visual {
            display: none;
          }

          .srg-content {
            padding: 6.5rem 1.3rem 5.5rem;
            text-align: center;
          }

          .srg-desc {
            margin-left: auto;
            margin-right: auto;
          }

          .srg-pillars {
            grid-template-columns: 1fr 1fr;
            max-width: 300px;
            margin: 0 auto;
            text-align: left;
          }

          .srg-title {
            font-size: 2.05rem;
          }

          .srg-scroll {
            bottom: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityResponsibilityHero;
