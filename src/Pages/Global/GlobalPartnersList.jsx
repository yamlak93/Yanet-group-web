import React, { useEffect, useState, useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DisplayCard from "../../Components/DisplayCard";

import olamLogo from "../../assets/coffee2.png";
import etgLogo from "../../assets/coffee2.png";
import maerskLogo from "../../assets/coffee2.png";
import sgsLogo from "../../assets/coffee2.png";
import bungeLogo from "../../assets/coffee2.png";
import dpWorldLogo from "../../assets/coffee2.png";

const partners = [
  {
    id: "olam",
    name: "Olam Agri",
    logo: olamLogo,
    desc: "Global agri-business leader in sourcing and supply chain.",
  },
  {
    id: "etg",
    name: "ETG",
    logo: etgLogo,
    desc: "Connecting global markets with quality Ethiopian commodities.",
  },
  {
    id: "maersk",
    name: "Maersk",
    logo: maerskLogo,
    desc: "Global leader in logistics and supply chain solutions.",
  },
  {
    id: "sgs",
    name: "SGS",
    logo: sgsLogo,
    desc: "International inspection, verification, testing and certification.",
  },
  {
    id: "bunge",
    name: "Bunge",
    logo: bungeLogo,
    desc: "Connecting farmers to global food, feed, and fuel markets.",
  },
  {
    id: "dp-world",
    name: "DP World",
    logo: dpWorldLogo,
    desc: "Enabling smarter trade through world-class port and logistics solutions.",
  },
];

const PER_PAGE = 4;

const GlobalPartnersList = () => {
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const totalPages = Math.max(1, Math.ceil(partners.length / PER_PAGE));

  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < partners.length; i += PER_PAGE) {
      result.push(partners.slice(i, i + PER_PAGE));
    }
    return result;
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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

  const scrollToPage = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, totalPages - 1));
    setPage(clamped);
    track.scrollTo({
      left: clamped * track.clientWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || !track.clientWidth) return;
    const next = Math.round(track.scrollLeft / track.clientWidth);
    setPage(Math.max(0, Math.min(next, totalPages - 1)));
  };

  return (
    <section className="gpl-section" ref={sectionRef}>
      <div className="gpl-container">
        <div className={`gpl-header ${visible ? "show" : ""}`}>
          <span className="gpl-badge">OUR FEATURED PARTNERS</span>
          <h2 className="gpl-title">
            Our Featured <span className="highlight">Partners</span>
          </h2>
        </div>

        {/* Mobile: vertical column of all partners */}
        {isMobile ? (
          <div className={`gpl-mobile-list ${visible ? "show" : ""}`}>
            {partners.map((p) => (
              <DisplayCard
                key={p.id}
                image={p.logo}
                alt={`${p.name} logo`}
                title={p.name}
                description={p.desc}
              />
            ))}
          </div>
        ) : (
          /* Desktop / tablet: paginated horizontal slider */
          <>
            <div className={`gpl-slider ${visible ? "show" : ""}`}>
              <button
                type="button"
                className="gpl-nav gpl-prev"
                onClick={() => scrollToPage(page - 1)}
                aria-label="Previous partners"
                disabled={page === 0}
              >
                <ChevronLeft size={20} />
              </button>

              <div className="gpl-track" ref={trackRef} onScroll={handleScroll}>
                {pages.map((group, pageIndex) => (
                  <div className="gpl-page" key={`page-${pageIndex}`}>
                    {group.map((p) => (
                      <DisplayCard
                        key={p.id}
                        image={p.logo}
                        alt={`${p.name} logo`}
                        title={p.name}
                        description={p.desc}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="gpl-nav gpl-next"
                onClick={() => scrollToPage(page + 1)}
                aria-label="Next partners"
                disabled={page >= totalPages - 1}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {totalPages > 1 && (
              <div className="gpl-dots">
                {pages.map((_, i) => (
                  <button
                    key={`dot-${i}`}
                    type="button"
                    className={`gpl-dot ${i === page ? "active" : ""}`}
                    onClick={() => scrollToPage(i)}
                    aria-label={`Partners page ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <style>{`
        .gpl-section {
          padding: 5rem 1.5rem 5rem;
          background: #f4f7f5;
        }

        .gpl-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .gpl-header {
          margin-bottom: 1.75rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gpl-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gpl-badge {
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
          margin-bottom: 0.75rem;
        }

        .gpl-title {
          margin: 0;
          font-size: clamp(1.7rem, 3vw, 2.25rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.35px;
        }

        .gpl-title .highlight {
          color: #16a34a;
        }

        .gpl-slider {
          position: relative;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
        }

        .gpl-slider.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gpl-track {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 0.35rem 2.7rem 0.75rem;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .gpl-track::-webkit-scrollbar {
          display: none;
        }

        .gpl-page {
          flex: 0 0 100%;
          scroll-snap-align: start;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          min-width: 100%;
        }

        .gpl-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-60%);
          z-index: 3;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
          transition: all 0.2s ease;
        }

        .gpl-nav:hover:not(:disabled) {
          background: #16a34a;
          border-color: #16a34a;
          color: #ffffff;
        }

        .gpl-nav:disabled {
          opacity: 0.35;
          cursor: default;
        }

        .gpl-prev { left: 0; }
        .gpl-next { right: 0; }

        .gpl-dots {
          display: flex;
          justify-content: center;
          gap: 0.45rem;
          margin-top: 1.15rem;
        }

        .gpl-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          padding: 0;
          background: #c5e1c8;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .gpl-dot.active {
          background: #16a34a;
          transform: scale(1.15);
        }

        /* Mobile column list */
        .gpl-mobile-list {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
        }

        .gpl-mobile-list.show {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 960px) {
          .gpl-page {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .gpl-section {
            padding: 3.5rem 1.2rem 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalPartnersList;
