import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Flag images from flagcdn.com (no package needed)
 * Codes: https://flagcdn.com
 * Example: https://flagcdn.com/w80/id.png
 *
 * Or import local files:
 *   import flagId from "../../assets/flags/id.png";
 *   and set flagImg: flagId
 */
const markets = [
  {
    id: "indonesia",
    name: "Indonesia",
    flagCode: "id",
    desc: "Supplying quality agricultural commodities to support Indonesia's growing market.",
  },
  {
    id: "malaysia",
    name: "Malaysia",
    flagCode: "my",
    desc: "Trusted partner in delivering premium Ethiopian products across Malaysia.",
  },
  {
    id: "bangladesh",
    name: "Bangladesh",
    flagCode: "bd",
    desc: "Building long-term relationships through consistent quality and reliable supply.",
  },
  {
    id: "china",
    name: "China",
    flagCode: "cn",
    desc: "Meeting the demands of China's dynamic market with excellence and reliability.",
  },
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    flagCode: "sa",
    desc: "Proud to contribute to the food industry and trade requirements in Saudi Arabia.",
  },
  {
    id: "uae",
    name: "UAE",
    flagCode: "ae",
    desc: "Delivering the finest commodities to the UAE market with trusted service.",
  },
  // Add more:
  // { id: "india", name: "India", flagCode: "in", desc: "..." },
];

const flagUrl = (code) => `https://flagcdn.com/w160/${code}.png`;

const GlobalMarket = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".gm-card");
    if (!card) return;
    const amount = card.offsetWidth + 16;
    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="gm-section" ref={sectionRef}>
      <div className="gm-container">
        <div className={`gm-header ${visible ? "show" : ""}`}>
          <div className="gm-header-text">
            <span className="gm-badge">OUR KEY MARKETS</span>
            <h2 className="gm-title">
              Our Key <span className="highlight">Markets</span>
            </h2>
            <p className="gm-subtitle">
              Our products are trusted and preferred in diverse international
              markets. We continue to expand our footprint and build strong
              partnerships.
            </p>
          </div>

          <div className="gm-nav">
            <button
              type="button"
              className="gm-nav-btn"
              onClick={() => scrollByCard("prev")}
              aria-label="Previous markets"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="gm-nav-btn"
              onClick={() => scrollByCard("next")}
              aria-label="Next markets"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className={`gm-track-wrap ${visible ? "show" : ""}`}>
          <div className="gm-track" ref={trackRef}>
            {markets.map((market, i) => (
              <article
                key={market.id}
                className="gm-card"
                style={{
                  transitionDelay: visible ? `${0.06 + i * 0.05}s` : "0s",
                }}
              >
                <div className="gm-flag">
                  <img
                    src={market.flagImg || flagUrl(market.flagCode)}
                    alt={`${market.name} flag`}
                    width={64}
                    height={64}
                    loading="lazy"
                  />
                </div>
                <h3 className="gm-name">{market.name}</h3>
                <div className="gm-line" />
                <p className="gm-desc">{market.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .gm-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #f4f7f5;
        }

        .gm-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .gm-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gm-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gm-badge {
          display: inline-block;
          background: #e8f5e9;
          color: #1b5e20;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          border: 1px solid rgba(46, 125, 50, 0.18);
          margin-bottom: 0.85rem;
        }

        .gm-title {
          margin: 0 0 0.65rem;
          font-size: clamp(1.75rem, 3.2vw, 2.35rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.4px;
        }

        .gm-title .highlight {
          color: #16a34a;
        }

        .gm-subtitle {
          margin: 0;
          max-width: 520px;
          font-size: 0.98rem;
          line-height: 1.7;
          color: #64748b;
        }

        .gm-nav {
          display: flex;
          gap: 0.5rem;
          flex-shrink: 0;
          padding-bottom: 0.25rem;
        }

        .gm-nav-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
          transition: all 0.2s ease;
        }

        .gm-nav-btn:hover {
          background: #16a34a;
          border-color: #16a34a;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 8px 18px rgba(22, 163, 74, 0.25);
        }

        .gm-track-wrap {
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
        }

        .gm-track-wrap.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gm-track {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 0.35rem 0.15rem 0.85rem;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .gm-track::-webkit-scrollbar {
          display: none;
        }

        .gm-card {
          flex: 0 0 min(200px, 78vw);
          scroll-snap-align: start;
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 20px;
          padding: 1.5rem 1.2rem 1.55rem;
          text-align: center;
          box-shadow: 0 8px 24px rgba(46, 125, 50, 0.05);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .gm-card:hover {
          transform: translateY(-5px);
          border-color: rgba(76, 175, 80, 0.4);
          box-shadow: 0 16px 36px rgba(46, 125, 50, 0.1);
        }

        .gm-flag {
          width: 64px;
          height: 64px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          overflow: hidden;
          background: #f8fafc;
          border: 1px solid #eef2f7;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
        }

        .gm-flag img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .gm-name {
          margin: 0 0 0.55rem;
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
        }

        .gm-line {
          width: 36px;
          height: 3px;
          border-radius: 4px;
          background: #86efac;
          margin: 0 auto 0.85rem;
        }

        .gm-desc {
          margin: 0;
          font-size: 0.86rem;
          line-height: 1.6;
          color: #64748b;
        }

        @media (max-width: 720px) {
          .gm-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .gm-nav {
            align-self: flex-end;
          }
        }

        @media (max-width: 560px) {
          .gm-section {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .gm-card {
            flex-basis: min(180px, 82vw);
            padding: 1.3rem 1rem 1.4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalMarket;
