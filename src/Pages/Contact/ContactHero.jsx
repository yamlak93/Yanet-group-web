import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import contactImg from "../../assets/coffee1.jpg";

const ContactHero = () => {
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
    <section className="contact-hero">
      {/* Background image */}
      <div
        className="contact-bg"
        style={{ backgroundImage: `url('${contactImg}')` }}
      />

      {/* Green overlay */}
      <div className="contact-overlay" />

      <div className={`contact-content ${loaded ? "show" : ""}`}>
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-desc-box">
          <p>
            Ready to partner with us? Reach out to our team for product
            inquiries, quotations, partnership opportunities, or general
            information. We’re here to support your business across Ethiopia and
            global markets.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="contact-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      <div className="contact-wave">
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
        .contact-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #14532d;
          border-radius: 0 0 36px 36px;
        }

        .contact-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transform: scale(1.04);
          animation: contactZoom 14s ease-out forwards;
          border-radius: 0 0 36px 36px;
        }

        @keyframes contactZoom {
          from { transform: scale(1.08); }
          to { transform: scale(1); }
        }

        .contact-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            105deg,
            rgba(20, 83, 45, 0.94) 0%,
            rgba(22, 101, 52, 0.82) 40%,
            rgba(30, 120, 60, 0.55) 70%,
            rgba(46, 140, 70, 0.3) 100%
          );
          border-radius: 0 0 36px 36px;
          pointer-events: none;
        }

        .contact-content {
          position: relative;
          z-index: 5;
          max-width: 640px;
          padding: 8rem 2rem 6rem 3.5rem;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-label {
          margin: 0 0 0.4rem;
          font-size: 1.05rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
        }

        .contact-title {
          margin: 0 0 1.5rem;
          font-size: clamp(2.3rem, 5vw, 3.4rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
        }

        .contact-desc-box {
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          border-radius: 18px;
          padding: 1.4rem 1.6rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          max-width: 520px;
        }

        .contact-desc-box p {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.92);
        }

        .contact-scroll {
          position: absolute;
          bottom: 110px;
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
          box-shadow: 0 6px 20px rgba(22, 163, 74, 0.45);
          animation: contactBounce 2s ease-in-out infinite;
        }

        .contact-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes contactBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .contact-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .contact-wave svg {
          width: 100%;
          height: 80px;
          display: block;
        }

        @media (max-width: 900px) {
          .contact-content {
            padding: 7rem 1.8rem 5.5rem;
            max-width: 100%;
          }

          .contact-hero,
          .contact-bg,
          .contact-overlay {
            border-radius: 0 0 28px 28px;
          }
        }

        @media (max-width: 520px) {
          .contact-title {
            font-size: 2.15rem;
          }

          .contact-content {
            padding: 6.5rem 1.3rem 5rem;
          }

          .contact-desc-box {
            padding: 1.2rem 1.3rem;
          }

          .contact-desc-box p {
            font-size: 0.98rem;
          }

          .contact-scroll {
            bottom: 85px;
          }

          .contact-hero,
          .contact-bg,
          .contact-overlay {
            border-radius: 0 0 22px 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactHero;
