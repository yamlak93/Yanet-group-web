import React, { useEffect, useState } from "react";
import { ChevronDown, Landmark, ShieldCheck, Award } from "lucide-react";

// Replace with your governance / ministry image
import governmentImg from "../../assets/law.jpg";

const pillars = [
  { icon: <Landmark size={18} />, label: "Law Abiding Organization" },
  { icon: <ShieldCheck size={18} />, label: "Economic Authorized Entity" },
  { icon: <Award size={18} />, label: "Responsible Corporate Citizen" },
];

const SustainabilityGovernmentHero = () => {
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
    <section className="sgh-hero">
      <div className="sgh-bg" />

      <div className="sgh-shapes">
        <div className="shape s1" />
        <div className="shape s2" />
      </div>

      {/* Left content */}
      <div className={`sgh-content ${loaded ? "show" : ""}`}>
        <span className="sgh-badge">SUSTAINABILITY & GOVERNANCE</span>

        <h1 className="sgh-title">
          Governed by Integrity.
          <br />
          Committed to <span className="highlight">Ethiopia.</span>
        </h1>

        <p className="sgh-desc">
          Yanet Industrial PLC upholds its responsibilities to the government,
          society, and the economy through full compliance, transparent
          operations, and valuable contributions that support national
          development.
        </p>

        <div className="sgh-pillars">
          {pillars.map((item) => (
            <div key={item.label} className="sgh-pillar">
              <div className="sgh-pillar-icon">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right visual + quote */}
      <div className={`sgh-visual ${loaded ? "show" : ""}`}>
        <div className="sgh-frame">
          <div
            className="sgh-frame-img"
            style={{ backgroundImage: `url('${governmentImg}')` }}
            role="img"
            aria-label="Ethiopian government institution and national flag"
          />
        </div>
      </div>

      <button
        type="button"
        className="sgh-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      <div className="sgh-wave">
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
        .sgh-hero {
          position: relative;
          min-height: 110vh;
          min-height: 110dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0a3d24;
        }

        .sgh-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(
            115deg,
            #06301c 0%,
            #0a3d24 38%,
            #0f5d32 72%,
            #0e6f35 100%
          );
        }

        .sgh-shapes {
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

        .sgh-content {
          position: relative;
          z-index: 5;
          max-width: 540px;
          padding: 8rem 2rem 7rem 3.5rem;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sgh-content.show {
          opacity: 1;
          transform: translateX(0);
        }

        .sgh-badge {
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

        .sgh-title {
          margin: 0 0 1.2rem;
          font-size: clamp(2.1rem, 4.5vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          line-height: 1.12;
        }

        .sgh-title .highlight {
          color: #86efac;
        }

        .sgh-desc {
          margin: 0 0 2rem;
          max-width: 430px;
          font-size: 1.02rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.9);
        }

        .sgh-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.9rem;
          max-width: 460px;
        }

        .sgh-pillar {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.45rem;
        }

        .sgh-pillar-icon {
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

        .sgh-pillar span {
          font-size: 0.78rem;
          font-weight: 600;
          line-height: 1.35;
          color: rgba(255, 255, 255, 0.88);
        }

        .sgh-visual {
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

        .sgh-visual.show {
          opacity: 1;
        }

        .sgh-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50% 0 0 50%;
          overflow: hidden;
          box-shadow: -16px 0 48px rgba(0, 0, 0, 0.25);
          border: 3px solid rgba(134, 239, 172, 0.25);
          border-right: none;
        }

        .sgh-frame-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .sgh-quote {
          position: absolute;
          right: 6%;
          bottom: 14%;
          z-index: 4;
          max-width: 240px;
          background: rgba(10, 48, 28, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 1.15rem 1.2rem 1.25rem;
          backdrop-filter: blur(8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
        }

        .sgh-quote-mark {
          display: block;
          font-size: 1.8rem;
          line-height: 1;
          color: #86efac;
          font-weight: 700;
          margin-bottom: 0.35rem;
        }

        .sgh-quote p {
          margin: 0;
          font-size: 0.88rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.92);
        }

        .sgh-scroll {
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
          animation: sghBounce 2s ease-in-out infinite;
        }

        .sgh-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes sghBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .sgh-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .sgh-wave svg {
          width: 100%;
          height: 90px;
          display: block;
        }

        @media (max-width: 960px) {
          .sgh-hero {
            min-height: 105vh;
            min-height: 105dvh;
          }

          .sgh-visual {
            width: min(55vw, 380px);
            top: auto;
            bottom: 130px;
            transform: none;
            right: -20px;
          }

          .sgh-visual.show {
            transform: none;
          }

          .sgh-quote {
            right: 8%;
            bottom: 8%;
            max-width: 190px;
            padding: 0.9rem 1rem;
          }

          .sgh-content {
            padding: 7rem 1.8rem 16rem;
            max-width: 100%;
          }

          .sgh-scroll {
            bottom: 100px;
          }
        }

        @media (max-width: 600px) {
          .sgh-hero {
            min-height: 100vh;
            min-height: 100dvh;
          }

          .sgh-visual {
            display: none;
          }

          .sgh-content {
            padding: 6.5rem 1.3rem 5.5rem;
            text-align: center;
          }

          .sgh-desc {
            margin-left: auto;
            margin-right: auto;
          }

          .sgh-pillars {
            grid-template-columns: 1fr;
            max-width: 260px;
            margin: 0 auto;
            text-align: left;
          }

          .sgh-title {
            font-size: 2rem;
          }

          .sgh-scroll {
            bottom: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityGovernmentHero;
