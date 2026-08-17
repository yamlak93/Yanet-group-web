import React, { useEffect, useState, useRef } from "react";
import SeeMoreButton from "../../Components/SeeMoreButton.jsx";
import sesame1 from "../../assets/agri_products/coffee.png";
import chemical2 from "../../assets/chemicaltube1.jpg";

const WhoAreWe = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="who-are-we" ref={sectionRef}>
      <div className="who-container">
        <h2 className={`section-title ${visible ? "show" : ""}`}>Who are We</h2>

        <div className={`who-card ${visible ? "show" : ""}`}>
          <div className="who-content">
            <h3 className="card-title">Innovation in Industry</h3>
            <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Pass any route  */}
            <SeeMoreButton to="/about/our-story" label="See More" />
          </div>

          <div className="who-images">
            <div className="circle circle-back">
              <img src={sesame1} alt="Industrial facility" />
            </div>
            <div className="circle circle-front">
              <img src={chemical2} alt="Laboratory research" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .who-are-we {
          padding: 4.5rem 1.5rem 5.5rem;
          background: #ffffff;
        }

        .who-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: clamp(1.8rem, 3.5vw, 2.3rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2.2rem;
          letter-spacing: -0.4px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .section-title.show {
          opacity: 1;
          transform: translateY(0);
        }

        .who-card {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 2rem;
          align-items: center;
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 28px;
          padding: 2.4rem 2.2rem 2.4rem 2.8rem;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 16px 40px rgba(46, 125, 50, 0.07);
          opacity: 0;
          transform: translateY(32px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .who-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .who-content {
          max-width: 420px;
        }

        .card-title {
          margin: 0 0 1rem;
          font-size: clamp(1.5rem, 2.8vw, 1.9rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.3px;
          line-height: 1.25;
        }

        .card-desc {
          margin: 0 0 1.8rem;
          font-size: 1rem;
          line-height: 1.75;
          color: #475569;
        }

        .who-images {
          position: relative;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid #ffffff;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
          background: #e8f5e9;
        }

        .circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .circle:hover img {
          transform: scale(1.06);
        }

        .circle-back {
          width: 260px;
          height: 260px;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }

        .circle-front {
          width: 230px;
          height: 230px;
          left: 8%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.14);
        }

        @media (max-width: 900px) {
          .who-card {
            grid-template-columns: 1fr;
            padding: 2rem 1.6rem;
            text-align: center;
          }

          .who-content {
            max-width: 100%;
            order: 1;
          }

          .who-images {
            order: 0;
            height: 260px;
            margin-bottom: 0.5rem;
          }

          .circle-back {
            width: 210px;
            height: 210px;
            right: 10%;
          }

          .circle-front {
            width: 185px;
            height: 185px;
            left: 12%;
          }
        }

        @media (max-width: 520px) {
          .who-are-we {
            padding: 3.5rem 1.2rem 4rem;
          }

          .who-card {
            border-radius: 22px;
            padding: 1.6rem 1.3rem;
          }

          .who-images {
            height: 220px;
          }

          .circle-back {
            width: 170px;
            height: 170px;
          }

          .circle-front {
            width: 150px;
            height: 150px;
          }

          .card-desc {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoAreWe;
