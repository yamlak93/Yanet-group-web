import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

// Replace this with your real image path/URL later
import benefitImage from "../../assets/grow.png";

const benefits = [
  {
    title: "Access to Quality Products",
    desc: "Source premium Ethiopian commodities that meet international standards.",
  },
  {
    title: "Global Market Access",
    desc: "Expand your reach with our strong global network and logistics.",
  },
  {
    title: "Reliable & Transparent Operations",
    desc: "We ensure clear communication, fair terms, and reliable processes.",
  },
  {
    title: "Sustainable Impact",
    desc: "Together, we support communities, promote sustainability, and create value.",
  },
];

const GlobalPartnersBenefit = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section className="gpb-section" ref={sectionRef}>
      <div className="gpb-container">
        {/* LEFT CONTENT */}
        <div className={`gpb-left ${visible ? "show" : ""}`}>
          <span className="gpb-badge">PARTNERSHIP BENEFITS</span>

          <h2 className="gpb-title">
            The Benefits of{" "}
            <span className="highlight">Partnering with Yanet</span>
          </h2>

          <div className="gpb-benefits">
            {benefits.map((item, index) => (
              <div className="gpb-benefit" key={index}>
                <div className="gpb-icon">
                  <CheckCircle2 size={20} strokeWidth={2.4} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className={`gpb-card ${visible ? "show" : ""}`}>
          <div className="gpb-card-bg">
            <img src={benefitImage} alt="Partnership with Yanet" />
            <div className="gpb-card-overlay" />
          </div>

          {/* decorative leaves */}
          <div className="gpb-leaf gpb-leaf-1" />
          <div className="gpb-leaf gpb-leaf-2" />

          <div className="gpb-card-content">
            <h3>Let's Grow Together</h3>
            <div className="gpb-underline" />
            <p>
              We are always open to new partnerships that create value, inspire
              trust, and drive sustainable growth.
            </p>
            <a href="/contact" className="gpb-btn">
              Contact Us
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .gpb-section {
          padding: 5.5rem 1.5rem;
          background: #ffffff;
        }

        .gpb-container {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 3.5rem;
          align-items: center;
        }

        /* LEFT SIDE */
        .gpb-left {
          opacity: 0;
          transform: translateY(22px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gpb-left.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gpb-badge {
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
          margin-bottom: 1.1rem;
        }

        .gpb-title {
          margin: 0 0 2.2rem;
          font-size: clamp(1.75rem, 3.2vw, 2.35rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
          letter-spacing: -0.4px;
        }

        .gpb-title .highlight {
          color: #16a34a;
        }

        .gpb-benefits {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.75rem 2rem;
        }

        .gpb-benefit {
          display: flex;
          gap: 0.85rem;
          align-items: flex-start;
        }

        .gpb-icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #e8f5e9;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
        }

        .gpb-benefit h3 {
          margin: 0 0 0.35rem;
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.35;
        }

        .gpb-benefit p {
          margin: 0;
          font-size: 0.88rem;
          line-height: 1.55;
          color: #64748b;
        }

        /* RIGHT CARD */
        .gpb-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          min-height: 420px;
          box-shadow:
            0 10px 30px rgba(15, 23, 42, 0.08),
            0 4px 12px rgba(22, 163, 74, 0.08);
          opacity: 0;
          transform: translateY(28px) scale(0.98);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .gpb-card.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .gpb-card-bg {
          position: absolute;
          inset: 0;
        }

        .gpb-card-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .gpb-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(6, 78, 59, 0.88) 0%,
            rgba(15, 90, 50, 0.82) 45%,
            rgba(20, 83, 45, 0.9) 100%
          );
        }

        /* decorative leaves */
        .gpb-leaf {
          position: absolute;
          width: 90px;
          height: 90px;
          background: rgba(255, 255, 255, 0.07);
          border-radius: 40% 60% 55% 45%;
          pointer-events: none;
        }

        .gpb-leaf-1 {
          bottom: 30px;
          right: 25px;
          transform: rotate(25deg);
        }

        .gpb-leaf-2 {
          bottom: 70px;
          right: 80px;
          width: 55px;
          height: 55px;
          background: rgba(255, 255, 255, 0.05);
          transform: rotate(-15deg);
        }

        .gpb-card-content {
          position: relative;
          z-index: 2;
          height: 100%;
          min-height: 420px;
          padding: 2.75rem 2.4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #ffffff;
        }

        .gpb-card-content h3 {
          margin: 0 0 0.85rem;
          font-size: 1.85rem;
          font-weight: 800;
          letter-spacing: -0.3px;
          line-height: 1.2;
        }

        .gpb-underline {
          width: 48px;
          height: 3px;
          background: #86efac;
          border-radius: 4px;
          margin-bottom: 1.35rem;
        }

        .gpb-card-content p {
          margin: 0 0 2rem;
          font-size: 0.98rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.9);
          max-width: 280px;
        }

        .gpb-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.45rem;
          background: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.85);
          border-radius: 50px;
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 600;
          text-decoration: none;
          width: fit-content;
          transition: all 0.25s ease;
        }

        .gpb-btn:hover {
          background: #ffffff;
          color: #166534;
          border-color: #ffffff;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .gpb-container {
            grid-template-columns: 1fr;
            gap: 2.75rem;
          }

          .gpb-card {
            min-height: 380px;
          }

          .gpb-card-content {
            min-height: 380px;
          }
        }

        @media (max-width: 600px) {
          .gpb-section {
            padding: 4rem 1.2rem;
          }

          .gpb-benefits {
            grid-template-columns: 1fr;
            gap: 1.4rem;
          }

          .gpb-title {
            margin-bottom: 1.75rem;
          }

          .gpb-card-content {
            padding: 2.2rem 1.75rem;
          }

          .gpb-card-content h3 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalPartnersBenefit;
