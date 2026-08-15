import React, { useEffect, useState } from "react";
import { ChevronDown, Users, ShieldCheck, Leaf } from "lucide-react";

// Replace with your sourcing / farm image
import sourcingImg from "../../assets/coffee-farmer.png";

const highlights = [
  {
    icon: <Users size={20} />,
    title: "Ethically Sourced",
    desc: "Supporting local farmers and communities",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Quality Assured",
    desc: "Strict selection and quality control",
  },
  {
    icon: <Leaf size={20} />,
    title: "Sustainable Growth",
    desc: "Building long-term partnerships",
  },
];

const GlobalSourcingHero = () => {
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
    <section className="gs-hero">
      {/* Photo – full background, revealed on the right through the curve */}
      <div
        className="gs-photo"
        style={{ backgroundImage: `url('${sourcingImg}')` }}
        role="img"
        aria-label="Ethiopian farmers and agricultural sourcing network"
      />

      {/* Green panel with smooth vertical curve on the right edge */}
      <div className="gs-green">
        <svg
          className="gs-curve-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Left rectangle + right-side arc (matches the design curve) */}
          <path
            d="M0,0 H58 C78,18 78,82 58,100 H0 Z"
            fill="url(#gsGreenGrad)"
          />
          <defs>
            <linearGradient id="gsGreenGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06301c" />
              <stop offset="45%" stopColor="#0a3d24" />
              <stop offset="100%" stopColor="#0f5d32" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={`gs-content ${loaded ? "show" : ""}`}>
        <span className="gs-badge">SOURCING NETWORK</span>

        <h1 className="gs-title">
          Our Sourcing Network,
          <br />
          <span className="highlight">Rooted in Ethiopia</span>
        </h1>

        <p className="gs-desc">
          We work hand-in-hand with farmers, cooperatives, and suppliers across
          Ethiopia to source the finest agricultural commodities with
          consistency, integrity, and care.
        </p>

        <div className="gs-highlights">
          {highlights.map((item) => (
            <div key={item.title} className="gs-item">
              <div className="gs-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="gs-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      <div className="gs-wave">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C360,90 720,10 1080,45 C1260,65 1380,40 1440,50 L1440,90 L0,90 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <style>{`
        .gs-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0a3d24;
          border-radius: 0 0 36px 36px;
        }

        .gs-photo {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-size: cover;
          background-position: 70% center;
          background-repeat: no-repeat;
        }

        /* Full-size SVG that draws the curved green shape */
        .gs-green {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }

        .gs-curve-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .gs-content {
          position: relative;
          z-index: 5;
          max-width: 540px;
          padding: 8rem 2rem 7rem 3.5rem;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.95s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gs-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gs-badge {
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
          margin-bottom: 1.2rem;
        }

        .gs-title {
          margin: 0 0 1.15rem;
          font-size: clamp(2.15rem, 4.6vw, 3.15rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          line-height: 1.12;
        }

        .gs-title .highlight {
          color: #86efac;
        }

        .gs-desc {
          margin: 0 0 2rem;
          max-width: 430px;
          font-size: 1.02rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.88);
        }

        .gs-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          max-width: 480px;
        }

        .gs-item {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .gs-icon {
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

        .gs-item h3 {
          margin: 0;
          font-size: 0.92rem;
          font-weight: 700;
          color: #ffffff;
        }

        .gs-item p {
          margin: 0;
          font-size: 0.8rem;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.7);
        }

        .gs-scroll {
          position: absolute;
          bottom: 105px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 6;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: none;
          background: #16a34a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(22, 163, 74, 0.45);
          animation: gsBounce 2s ease-in-out infinite;
        }

        .gs-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes gsBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .gs-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .gs-wave svg {
          width: 100%;
          height: 80px;
          display: block;
        }

        @media (max-width: 960px) {
          .gs-curve-svg path {
            d: path("M0,0 H100 V100 H0 Z");
          }

          .gs-green {
            background: linear-gradient(
              180deg,
              rgba(6, 48, 28, 0.94) 0%,
              rgba(10, 61, 36, 0.9) 55%,
              rgba(10, 61, 36, 0.82) 100%
            );
          }

          .gs-curve-svg {
            display: none;
          }

          .gs-content {
            padding: 7rem 1.8rem 5.5rem;
            max-width: 100%;
          }

          .gs-photo {
            background-position: center center;
          }

          .gs-hero {
            border-radius: 0 0 28px 28px;
          }
        }

        @media (max-width: 600px) {
          .gs-title {
            font-size: 2rem;
          }

          .gs-content {
            padding: 6.5rem 1.3rem 5rem;
          }

          .gs-highlights {
            grid-template-columns: 1fr;
            gap: 1.1rem;
          }

          .gs-item {
            flex-direction: row;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .gs-scroll {
            bottom: 85px;
          }

          .gs-hero {
            border-radius: 0 0 22px 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalSourcingHero;
