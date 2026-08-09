import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import productheroimage from "../../assets/chemicals2.jpg";

const ProductsHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <section className="products-hero">
      {/* Background image */}
      <div
        className="products-bg"
        style={{
          backgroundImage: `url('${productheroimage}')`,
        }}
      />

      {/* Dark soft overlay for readability */}
      <div className="products-overlay" />

      <div className={`products-content ${loaded ? "show" : ""}`}>
        <h1 className="products-title">Our Products</h1>

        <div className="products-desc-box">
          <p>
            We offer a wide range of specialized industrial and commercial
            products, meticulously sourced and processed. From high-purity
            chemical compounds to essential commodities, Yanet Industrials
            ensures quality and reliability. Below is a detailed view of our key
            product categories.
          </p>
        </div>
      </div>

      {/* Scroll down */}
      <button
        type="button"
        className="products-scroll"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>

      {/* Bottom curve */}
      <div className="products-wave">
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
        .products-hero {
          position: relative;
          min-height: 88vh;
          min-height: 88dvh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0f172a;
          border-radius: 0 0 36px 36px;
        }

        .products-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transform: scale(1.04);
          animation: productsZoom 14s ease-out forwards;
          border-radius: 0 0 36px 36px;
        }

        @keyframes productsZoom {
          from { transform: scale(1.08); }
          to { transform: scale(1); }
        }

        .products-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            105deg,
            rgba(15, 23, 42, 0.75) 0%,
            rgba(15, 23, 42, 0.55) 45%,
            rgba(15, 23, 42, 0.35) 100%
          );
          border-radius: 0 0 36px 36px;
          pointer-events: none;
        }

        .products-content {
          position: relative;
          z-index: 5;
          max-width: 720px;
          padding: 7rem 2rem 5rem 3.5rem;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .products-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .products-title {
          margin: 0 0 1.5rem;
          font-size: clamp(2.4rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
        }

        .products-desc-box {
          border: 1.5px solid rgba(255, 255, 255, 0.28);
          border-radius: 18px;
          padding: 1.4rem 1.6rem;
          background: rgba(30, 41, 59, 0.55);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
          max-width: 560px;
        }

        .products-desc-box p {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.92);
        }

        .products-scroll {
          position: absolute;
          bottom: 100px;
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
          animation: productsBounce 2s ease-in-out infinite;
        }

        .products-scroll:hover {
          transform: translateX(-50%) scale(1.08);
        }

        @keyframes productsBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .products-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 4;
          line-height: 0;
        }

        .products-wave svg {
          width: 100%;
          height: 80px;
          display: block;
        }

        @media (max-width: 900px) {
          .products-content {
            padding: 6.5rem 1.8rem 5rem;
            max-width: 100%;
          }

          .products-hero,
          .products-bg,
          .products-overlay {
            border-radius: 0 0 28px 28px;
          }
        }

        @media (max-width: 520px) {
          .products-title {
            font-size: 2.2rem;
          }

          .products-content {
            padding: 6rem 1.3rem 4.5rem;
          }

          .products-desc-box {
            padding: 1.2rem 1.3rem;
          }

          .products-desc-box p {
            font-size: 0.98rem;
          }

          .products-scroll {
            bottom: 75px;
          }

          .products-hero,
          .products-bg,
          .products-overlay {
            border-radius: 0 0 22px 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsHero;
