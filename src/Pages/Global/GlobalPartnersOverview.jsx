import React, { useState, useEffect, useRef } from "react";
import SeeMoreButton from "../../Components/SeeMoreButton";

// Import partner logos – replace with your real files
import logo1 from "../../assets/coffee1.jpg";
import logo2 from "../../assets/chemicaltube1.jpg";
import logo3 from "../../assets/chemicalFactory1.jpg";
import logo4 from "../../assets/coffee1.jpg";
import logo5 from "../../assets/chemicaltube1.jpg";
import logo6 from "../../assets/chemicalFactory1.jpg";
import logo7 from "../../assets/coffee1.jpg";
import logo8 from "../../assets/chemicaltube1.jpg";
import logo9 from "../../assets/chemicalFactory1.jpg";

const partners = [
  { image: logo1, name: "Partner One" },
  { image: logo2, name: "Partner Two" },
  { image: logo3, name: "Partner Three" },
  { image: logo4, name: "Partner Four" },
  { image: logo5, name: "Partner Five" },
  { image: logo6, name: "Partner Six" },
  { image: logo7, name: "Partner Seven" },
  { image: logo8, name: "Partner Eight" },
  { image: logo9, name: "Partner Nine" },
];

const PER_PAGE = 6;

const GlobalPartnersOverview = () => {
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const sectionRef = useRef(null);

  const totalPages = Math.ceil(partners.length / PER_PAGE);

  // Auto slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPage((prev) => (prev + 1) % totalPages);
        setFading(false);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalPages]);

  // Scroll in/out
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goToPage = (index) => {
    if (index === page) return;
    setFading(true);
    setTimeout(() => {
      setPage(index);
      setFading(false);
    }, 400);
  };

  const currentPartners = partners.slice(
    page * PER_PAGE,
    page * PER_PAGE + PER_PAGE,
  );

  return (
    <section className="global-partners" ref={sectionRef}>
      <div className="gp-container">
        <h2 className={`gp-title ${visible ? "show" : ""}`}>Our Partners</h2>

        <div className={`gp-shell ${visible ? "show" : ""}`}>
          <div className={`gp-grid ${fading ? "fade" : ""}`}>
            {currentPartners.map((partner, i) => (
              <div
                key={`${page}-${partner.name}-${i}`}
                className="partner-card"
                style={{
                  transitionDelay: fading ? "0s" : `${i * 0.06}s`,
                }}
              >
                <div className="partner-logo">
                  <img src={partner.image} alt={partner.name} />
                </div>
              </div>
            ))}
          </div>

          <div className="gp-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`gp-dot ${i === page ? "active" : ""}`}
                onClick={() => goToPage(i)}
                aria-label={`Partners page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={`gp-cta ${visible ? "show" : ""}`}>
          <SeeMoreButton to="/global-network/partners" label="See All" />
        </div>
      </div>

      <style>{`
        .global-partners {
          padding: 5rem 1.5rem 6rem;
          background: #ffffff;
        }

        .gp-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .gp-title {
          text-align: center;
          font-size: clamp(1.9rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2.4rem;
          letter-spacing: -0.4px;
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gp-title.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gp-shell {
          background: #f8faf8;
          border: 1px solid #e8f0e9;
          border-radius: 28px;
          padding: 2rem 1.8rem 1.8rem;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 18px 44px rgba(46, 125, 50, 0.08);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
        }

        .gp-shell.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          transition: opacity 0.4s ease;
        }

        .gp-grid.fade {
          opacity: 0;
        }

        /* Each partner – own card */
        .partner-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 18px;
          padding: 1.4rem 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 120px;
          box-shadow: 0 4px 14px rgba(46, 125, 50, 0.06);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .partner-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 28px rgba(46, 125, 50, 0.12);
        }

        .partner-logo {
          width: 100%;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .partner-logo img {
          max-width: 100%;
          max-height: 72px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          filter: grayscale(0.15);
          transition: filter 0.3s ease, transform 0.3s ease;
        }

        .partner-card:hover .partner-logo img {
          filter: grayscale(0);
          transform: scale(1.05);
        }

        .gp-dots {
          display: flex;
          justify-content: center;
          gap: 0.45rem;
          margin-top: 1.6rem;
        }

        .gp-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: none;
          background: rgba(46, 125, 50, 0.25);
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }

        .gp-dot.active {
          background: #16a34a;
          width: 24px;
          border-radius: 8px;
        }

        .gp-cta {
          display: flex;
          justify-content: center;
          margin-top: 1.8rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
        }

        .gp-cta.show {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 700px) {
          .gp-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .partner-card {
            min-height: 100px;
            padding: 1.1rem 0.9rem;
          }

          .partner-logo {
            height: 56px;
          }

          .partner-logo img {
            max-height: 56px;
          }
        }

        @media (max-width: 420px) {
          .global-partners {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .gp-shell {
            padding: 1.4rem 1rem 1.3rem;
            border-radius: 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalPartnersOverview;
