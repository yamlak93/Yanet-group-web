import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import contactImg from "../../assets/hand-shaking.jpg";

const ContactHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 0.92,
      behavior: "smooth",
    });
  };

  return (
    <section className="contact-hero">
      {/* Right-side photo */}
      <div
        className="contact-photo"
        style={{ backgroundImage: `url('${contactImg}')` }}
        role="img"
        aria-label="Business partners shaking hands"
      />

      {/* Left green panel + soft fade into photo */}
      <div className="contact-panel" />

      {/* Optional faint map texture on left */}
      <div className="contact-map-texture" aria-hidden="true" />

      <div className={`contact-content ${loaded ? "show" : ""}`}>
        <h1 className="contact-title">
          <span className="line-white">Let’s Grow</span>
          <span className="line-accent">Together</span>
        </h1>

        <p className="contact-desc">
          We are always ready to connect, collaborate
          <br />
          and create value together.
        </p>

        <div className="contact-rule" />

        <div className="contact-tags">
          <span>INQUIRIES</span>
          <span className="dot">•</span>
          <span>PARTNERSHIPS</span>
          <span className="dot">•</span>
          <span>OPPORTUNITIES</span>
        </div>
      </div>

      <button
        type="button"
        className="contact-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={20} />
      </button>

      <style>{`
        .contact-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #06301c;
        }

        .contact-photo {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 58%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
        }

        .contact-panel {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            90deg,
            #052618 0%,
            #06301c 28%,
            #0a3d24 42%,
            rgba(10, 61, 36, 0.92) 52%,
            rgba(10, 61, 36, 0.55) 62%,
            rgba(10, 61, 36, 0.15) 72%,
            transparent 82%
          );
          pointer-events: none;
        }

        .contact-map-texture {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 55%;
          z-index: 2;
          opacity: 0.12;
          background-image: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 1px, transparent 1px);
          background-size: 18px 18px;
          pointer-events: none;
          mask-image: linear-gradient(90deg, black 40%, transparent 90%);
          -webkit-mask-image: linear-gradient(90deg, black 40%, transparent 90%);
        }

        .contact-content {
          position: relative;
          z-index: 5;
          max-width: 520px;
          padding: 5rem 2rem 5rem 4rem;
          opacity: 0;
          transform: translateX(-24px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-content.show {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-title {
          margin: 0 0 1.25rem;
          font-size: clamp(2.6rem, 5.5vw, 3.75rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.5px;
        }

        .contact-title .line-white {
          display: block;
          color: #ffffff;
        }

        .contact-title .line-accent {
          display: block;
          color: #e8b84a;
        }

        .contact-desc {
          margin: 0 0 1.35rem;
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
          max-width: 380px;
        }

        .contact-rule {
          width: 48px;
          height: 3px;
          background: #e8b84a;
          border-radius: 2px;
          margin-bottom: 1.35rem;
        }

        .contact-tags {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.35rem 0.15rem;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8);
        }

        .contact-tags .dot {
          margin: 0 0.45rem;
          color: #e8b84a;
        }

        .contact-scroll {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 6;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: none;
          background: #16a34a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 18px rgba(22, 163, 74, 0.4);
          animation: contactBounce 2s ease-in-out infinite;
        }

        .contact-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes contactBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(5px); }
        }

        @media (max-width: 900px) {
          .contact-photo {
            width: 100%;
          }

          .contact-panel {
            background: linear-gradient(
              180deg,
              rgba(5, 38, 24, 0.94) 0%,
              rgba(6, 48, 28, 0.9) 55%,
              rgba(6, 48, 28, 0.82) 100%
            );
          }

          .contact-content {
            padding: 6.5rem 1.6rem 5rem;
            max-width: 100%;
          }

          .contact-map-texture {
            width: 100%;
            opacity: 0.06;
          }
        }

        @media (max-width: 520px) {
          .contact-title {
            font-size: 2.35rem;
          }

          .contact-content {
            padding: 6rem 1.25rem 4.5rem;
          }

          .contact-desc {
            font-size: 0.98rem;
          }

          .contact-tags {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactHero;
