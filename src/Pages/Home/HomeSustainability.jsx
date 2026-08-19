import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Users, Boxes, ChevronRight } from "lucide-react";

// Sustainability banner image
import sustainImg from "../../assets/sustain.jpg";

// Partner logos – replace with your real logo files
import bgiLogo from "../../assets/partners/BGI.png";
import dashenLogo from "../../assets/partners/DASHN.jpg";
import habeshaLogo from "../../assets/partners/HABESHA.webp";
import heinekenLogo from "../../assets/partners/HENIKEN.png";
import komariLogo from "../../assets/partners/KOMARI.png";
import unitedLogo from "../../assets/partners/UB.jpg";
import hbFullerLogo from "../../assets/partners/HBFULLER.png";
import kuritaLogo from "../../assets/partners/KURITA.png";
import kersiaLogo from "../../assets/partners/KERSIA.jpg";

const pillars = [
  {
    icon: <Leaf size={22} />,
    title: "Environmental Care",
    desc: "Minimizing our impact and promoting a greener future.",
  },
  {
    icon: <Users size={22} />,
    title: "Community Impact",
    desc: "Supporting local communities and creating opportunities.",
  },
  {
    icon: <Boxes size={22} />,
    title: "Ethical Business",
    desc: "Operating with integrity, transparency and responsibility.",
  },
];

const partners = [
  { name: "BGI Ethiopia", logo: bgiLogo },
  { name: "Dashen Bank", logo: dashenLogo },
  { name: "Habesha Breweries", logo: habeshaLogo },
  { name: "Heineken Ethiopia", logo: heinekenLogo },
  { name: "Komari Trading", logo: komariLogo },
  { name: "United Beverages", logo: unitedLogo },
  { name: "HB Fuller", logo: hbFullerLogo },
  { name: "Kersia", logo: kersiaLogo },
  { name: "Kurita", logo: kuritaLogo },
];

const HomeSustainability = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const logosRef = useRef(null);

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

  const scrollLogos = (dir) => {
    const el = logosRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  return (
    <section className="hs-section" ref={sectionRef}>
      {/* Top banner */}
      <div className="hs-banner">
        <div
          className="hs-banner-img"
          style={{ backgroundImage: `url('${sustainImg}')` }}
          role="img"
          aria-label="Hands holding a young plant"
        />
        <div className="hs-banner-overlay" />

        <div className={`hs-banner-inner ${visible ? "show" : ""}`}>
          <div className="hs-copy">
            <span className="hs-badge">SUSTAINABILITY</span>
            <h2 className="hs-title">
              A Responsible Future,
              <br />
              For Generations
            </h2>
            <p className="hs-desc">
              We are committed to sustainable practices that protect our
              environment, empower communities and create long-term value.
            </p>
            <Link to="/sustainability" className="hs-btn">
              Our Commitment
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="hs-pillars">
            {pillars.map((item) => (
              <div key={item.title} className="hs-pillar">
                <div className="hs-pillar-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners strip */}
      <div className={`hs-partners ${visible ? "show" : ""}`}>
        <div className="hs-partners-left">
          <span className="hs-trusted">TRUSTED BY</span>
          <h3 className="hs-partners-title">Our Valued Partners</h3>
        </div>

        <div className="hs-logos-wrap">
          <div className="hs-logos" ref={logosRef}>
            {partners.map((p) => (
              <div key={p.name} className="hs-logo-item" title={p.name}>
                <img src={p.logo} alt={p.name} />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="hs-logo-next"
            onClick={() => scrollLogos(1)}
            aria-label="Next partners"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .hs-section {
          background: #ffffff;
        }

        /* Banner */
        .hs-banner {
          position: relative;
          min-height: 340px;
          overflow: hidden;
          background: #0a3d24;
        }

        .hs-banner-img {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 42%;
          background-size: cover;
          background-position: center left;
        }

        .hs-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(10, 61, 36, 0.15) 0%,
            rgba(10, 61, 36, 0.55) 28%,
            rgba(8, 45, 28, 0.96) 48%,
            rgba(6, 40, 24, 0.98) 100%
          );
          pointer-events: none;
        }

        .hs-banner-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 3.25rem 1.5rem 3.25rem;
          display: grid;
          grid-template-columns: 1.05fr 1.1fr;
          gap: 2rem;
          align-items: center;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hs-banner-inner.show {
          opacity: 1;
          transform: translateY(0);
        }

        .hs-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #16a34a;
          margin-bottom: 0.75rem;
        }

        .hs-title {
          margin: 0 0 0.85rem;
          font-size: clamp(1.65rem, 3vw, 2.15rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.3px;
        }

        .hs-desc {
          margin: 0 0 1.4rem;
          max-width: 360px;
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(232, 245, 233, 0.88);
        }

        .hs-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.7rem 1.3rem;
          border-radius: 8px;
          border: 1.5px solid #e8b84a;
          color: #e8b84a;
          font-size: 0.9rem;
          font-weight: 650;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .hs-btn:hover {
          background: rgba(232, 184, 74, 0.12);
          transform: translateY(-2px);
        }

        .hs-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .hs-pillar {
          text-align: center;
          color: #ffffff;
        }

        .hs-pillar-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 0.75rem;
          border-radius: 12px;
          background: rgba(134, 239, 172, 0.12);
          border: 1px solid rgba(134, 239, 172, 0.25);
          color: #86efac;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hs-pillar h3 {
          margin: 0 0 0.4rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
        }

        .hs-pillar p {
          margin: 0;
          font-size: 0.8rem;
          line-height: 1.5;
          color: rgba(232, 245, 233, 0.75);
        }

        /* Partners strip */
        .hs-partners {
          max-width: 1180px;
          margin: 0 auto;
          padding: 1.75rem 1.5rem;
          display: grid;
          grid-template-columns: 0.7fr 1.5fr;
          gap: 1.5rem;
          align-items: center;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .hs-partners.show {
          opacity: 1;
          transform: translateY(0);
        }

        .hs-trusted {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #16a34a;
          margin-bottom: 0.25rem;
        }

        .hs-partners-title {
          margin: 0;
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
        }

        .hs-logos-wrap {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 0;
        }

        .hs-logos {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding-right: 2.5rem;
          scrollbar-width: none;
        }

        .hs-logos::-webkit-scrollbar {
          display: none;
        }

        .hs-logo-item {
          flex-shrink: 0;
          height: 40px;
          display: flex;
          align-items: center;
          opacity: 0.85;
          transition: opacity 0.2s ease;
        }

        .hs-logo-item:hover {
          opacity: 1;
        }

        .hs-logo-item img {
          height: 32px;
          width: auto;
          max-width: 110px;
          object-fit: contain;
          display: block;
          filter: grayscale(0.15);
        }

        .hs-logo-next {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
        }

        .hs-logo-next:hover {
          border-color: #16a34a;
          color: #16a34a;
        }

        @media (max-width: 960px) {
          .hs-banner-img {
            width: 100%;
            opacity: 0.35;
          }

          .hs-banner-overlay {
            background: linear-gradient(
              180deg,
              rgba(6, 40, 24, 0.88) 0%,
              rgba(8, 50, 30, 0.94) 100%
            );
          }

          .hs-banner-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .hs-desc {
            margin-left: auto;
            margin-right: auto;
          }

          .hs-pillars {
            max-width: 520px;
            margin: 0 auto;
          }

          .hs-partners {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        @media (max-width: 560px) {
          .hs-pillars {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .hs-banner-inner {
            padding: 2.75rem 1.2rem;
          }

          .hs-partners {
            padding: 1.4rem 1.2rem 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSustainability;
