import React, { useEffect, useState, useRef } from "react";
import DisplayCard from "../../Components/DisplayCard";

import coffeeImg from "../../assets/coffee1.jpg";
import chemicalImg from "../../assets/Chemicaltube1.jpg";
import logisticsImg from "../../assets/chemicalFactory1.jpg";

const businesses = [
  {
    image: coffeeImg,
    alt: "Export Agricultural Products ",
    title: "Premium Agriculutral Products Processing & Export",
    description:
      "Sourcing, processing and exporting high-grade Ethiopian coffee beans to international markets with consistent quality.",
    to: "/business/export",
  },
  {
    image: chemicalImg,
    alt: "Import speciality Chemicals",
    title: "Innovative Solutions for Industry",
    description:
      "Supplying industrial chemicals and raw materials that power manufacturing, beverage and detergent industries.",
    to: "/business/import",
  },
  {
    image: logisticsImg,
    alt: "Manufacturing Chemicals for Industry",
    title: "Manufacturing Chemicals for Industry",
    description:
      "End-to-end logistics and distribution connecting Ethiopian producers with reliable global supply chains.",
    to: "/business/manufacturing",
  },
];

const HomeBussiness = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="business-section" ref={sectionRef}>
      <div className="business-container">
        <h2 className={`section-title ${visible ? "show" : ""}`}>
          Our Businesses
        </h2>

        <div className={`cards-grid ${visible ? "show" : ""}`}>
          {businesses.map((item, index) => (
            <div
              key={item.to}
              className="card-wrap"
              style={{
                transitionDelay: visible ? `${index * 0.1}s` : "0s",
              }}
            >
              <DisplayCard
                image={item.image}
                alt={item.alt}
                title={item.title}
                description={item.description}
                to={item.to}
                label="See more"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .business-section {
          padding: 4.5rem 1.5rem 5.5rem;
          background: #ffffff;
        }

        .business-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: clamp(1.8rem, 3.5vw, 2.3rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2.5rem;
          letter-spacing: -0.4px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .section-title.show {
          opacity: 1;
          transform: translateY(0);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.6rem;
        }

        .card-wrap {
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .cards-grid.show .card-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 900px) {
          .cards-grid {
            grid-template-columns: 1fr;
            max-width: 380px;
            margin: 0 auto;
            gap: 1.4rem;
          }
        }

        @media (max-width: 520px) {
          .business-section {
            padding: 3.5rem 1.2rem 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeBussiness;
