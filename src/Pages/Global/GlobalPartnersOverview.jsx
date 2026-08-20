import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SeeMoreButton from "../../Components/SeeMoreButton";

import BGI from "../../assets/partners/BGI.png";
import Dashn from "../../assets/partners/DASHN.jpg";
import Habesha from "../../assets/partners/HABESHA.webp";
import Heniken from "../../assets/partners/HENIKEN.png";
import Komari from "../../assets/partners/KOMARI.png";
import UB from "../../assets/partners/UB.jpg";
import HBFuller from "../../assets/partners/HBFULLER.png";
import Kersia from "../../assets/partners/KERSIA.jpg";
import Kurita from "../../assets/partners/KURITA.png";

const partners = [
  { image: BGI, name: "BGI Ethiopia" },
  { image: Dashn, name: "Dashen Brewery" },
  { image: Habesha, name: "Habesha Breweries" },
  { image: Heniken, name: "Heineken" },
  { image: Komari, name: "Komari Beverage" },
  { image: UB, name: "United Beverages" },
  { image: HBFuller, name: "H.B. Fuller" },
  { image: Kersia, name: "Kersia" },
  { image: Kurita, name: "Kurita" },
];

const GlobalPartnersOverview = () => {
  const [visible, setVisible] = useState(false);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
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

  const updateArrows = () => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanLeft(scrollLeft > 8);
    setCanRight(scrollLeft < scrollWidth - clientWidth - 8);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateArrows();
    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      track.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <section className="gpo-section" ref={sectionRef}>
      <div className="gpo-container">
        <div className={`gpo-header ${visible ? "show" : ""}`}>
          <span className="gpo-badge">OUR NETWORK</span>
          <h2 className="gpo-title">Trusted Partners</h2>
          <p className="gpo-lead">
            We collaborate with leading local and international organizations
            across beverage, chemical, and industrial sectors.
          </p>
        </div>

        <div className={`gpo-carousel ${visible ? "show" : ""}`}>
          <button
            type="button"
            className="gpo-nav gpo-prev"
            onClick={() => scrollBy(-1)}
            disabled={!canLeft}
            aria-label="Previous partners"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="gpo-track" ref={trackRef}>
            {partners.map((partner, i) => (
              <article
                key={partner.name}
                className="gpo-card"
                style={{
                  transitionDelay: visible ? `${0.06 + i * 0.04}s` : "0s",
                }}
              >
                <div className="gpo-logo">
                  <img src={partner.image} alt={partner.name} loading="lazy" />
                </div>
                <h3>{partner.name}</h3>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="gpo-nav gpo-next"
            onClick={() => scrollBy(1)}
            disabled={!canRight}
            aria-label="Next partners"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className={`gpo-cta ${visible ? "show" : ""}`}>
          <SeeMoreButton
            to="/global-network/partners"
            label="See All Partners"
          />
        </div>
      </div>

      <style>{`
        .gpo-section {
          padding: 4.75rem 1.5rem 5.25rem;
          background: #ffffff;
        }

        .gpo-container {
          max-width: 1120px;
          margin: 0 auto;
        }

        .gpo-header {
          text-align: center;
          margin-bottom: 2.25rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gpo-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gpo-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #16a34a;
          margin-bottom: 0.6rem;
        }

        .gpo-title {
          margin: 0 0 0.65rem;
          font-size: clamp(1.7rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.35px;
        }

        .gpo-lead {
          margin: 0 auto;
          max-width: 520px;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #64748b;
        }

        .gpo-carousel {
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
        }

        .gpo-carousel.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gpo-track {
          display: flex;
          gap: 1.1rem;
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          padding: 0.5rem 2.75rem 1rem;
          scrollbar-width: none;
        }

        .gpo-track::-webkit-scrollbar {
          display: none;
        }

        .gpo-card {
          flex: 0 0 180px;
          scroll-snap-align: start;
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 16px;
          padding: 1.35rem 1rem 1.15rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            opacity 0.6s ease;
          opacity: 0;
          transform: translateY(12px);
        }

        .gpo-carousel.show .gpo-card {
          opacity: 1;
          transform: translateY(0);
        }

        .gpo-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 32px rgba(22, 163, 74, 0.12);
          border-color: rgba(22, 163, 74, 0.25);
        }

        .gpo-logo {
          width: 100%;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8faf9;
          border-radius: 12px;
          padding: 0.65rem;
        }

        .gpo-logo img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
        }

        .gpo-card h3 {
          margin: 0;
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
          text-align: center;
          line-height: 1.35;
        }

        .gpo-nav {
          position: absolute;
          top: 42%;
          transform: translateY(-50%);
          z-index: 3;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid #e8f0e9;
          background: #ffffff;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);
          transition: background 0.2s ease, color 0.2s ease, opacity 0.2s ease;
        }

        .gpo-nav:hover:not(:disabled) {
          background: #16a34a;
          color: #ffffff;
          border-color: #16a34a;
        }

        .gpo-nav:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .gpo-prev {
          left: 0;
        }

        .gpo-next {
          right: 0;
        }

        .gpo-cta {
          display: flex;
          justify-content: center;
          margin-top: 1.75rem;
          opacity: 0;
          transform: translateY(14px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }

        .gpo-cta.show {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .gpo-section {
            padding: 3.5rem 1.15rem 4rem;
          }

          .gpo-card {
            flex: 0 0 150px;
          }

          .gpo-track {
            padding-left: 2.4rem;
            padding-right: 2.4rem;
          }

          .gpo-nav {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalPartnersOverview;
