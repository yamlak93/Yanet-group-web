import React, { useEffect, useState, useRef } from "react";
import { Sprout, Droplets, Recycle, TreeDeciduous } from "lucide-react";
import ContactCard from "../../Components/ContactCard";

// Replace with your image
import impactImg from "../../assets/sustain.jpg";

const stats = [
  {
    icon: <Sprout size={22} />,
    value: "500+",
    label: "Farmers Empowered",
    desc: "Through training & partnerships",
  },
  {
    icon: <Droplets size={22} />,
    value: "30%",
    label: "Less Water Usage",
    desc: "Through efficient processing",
  },
  {
    icon: <Recycle size={22} />,
    value: "25%",
    label: "Waste Recycled",
    desc: "Across our operations and facilities",
  },
  {
    icon: <TreeDeciduous size={22} />,
    value: "100%",
    label: "Commitment",
    desc: "To a sustainable future",
  },
];

const SustainabilityCommitmentImpact = () => {
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
    <section className="sci-section" ref={sectionRef}>
      <div className="sci-container">
        {/* Left */}
        <div className={`sci-left ${visible ? "show" : ""}`}>
          <span className="sci-badge">OUR IMPACT</span>

          <h2 className="sci-title">
            Making a <span className="highlight">Positive Impact</span>
          </h2>

          <p className="sci-desc">
            We measure our progress and continuously strive to improve our
            impact across our operations and communities.
          </p>

          <div className="sci-stats">
            {stats.map((item, i) => (
              <article
                key={item.label}
                className="sci-stat"
                style={{
                  transitionDelay: visible ? `${0.1 + i * 0.07}s` : "0s",
                }}
              >
                <div className="sci-stat-icon">{item.icon}</div>
                <div className="sci-stat-value">{item.value}</div>
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Right – ContactCard */}
        <div className={`sci-right ${visible ? "show" : ""}`}>
          <ContactCard
            image={impactImg}
            alt="Hands holding a young plant"
            title="A Greener Future, Together"
            description="Sustainability is a journey we take together with our partners, customers, and communities. Together, we can build a resilient and prosperous future for all."
            to="/contact"
            label="Partner With Us"
          />
        </div>
      </div>

      <style>{`
        .sci-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #f7faf8;
        }

        .sci-container {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 2rem;
          align-items: center;
        }

        .sci-left {
          opacity: 0;
          transform: translateX(-22px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sci-left.show {
          opacity: 1;
          transform: translateX(0);
        }

        .sci-badge {
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
          margin-bottom: 0.85rem;
        }

        .sci-title {
          margin: 0 0 0.75rem;
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.35px;
        }

        .sci-title .highlight {
          color: #16a34a;
        }

        .sci-desc {
          margin: 0 0 1.6rem;
          max-width: 440px;
          font-size: 0.98rem;
          line-height: 1.7;
          color: #64748b;
        }

        .sci-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }

        .sci-stat {
          background: #ffffff;
          border: 1px solid #eef2f0;
          border-radius: 16px;
          padding: 1.15rem 0.85rem 1.2rem;
          text-align: center;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          opacity: 0;
          transform: translateY(14px);
          transition:
            opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.25s ease;
        }

        .sci-left.show .sci-stat {
          opacity: 1;
          transform: translateY(0);
        }

        .sci-stat:hover {
          box-shadow: 0 10px 24px rgba(46, 125, 50, 0.1);
        }

        .sci-stat-icon {
          width: 40px;
          height: 40px;
          margin: 0 auto 0.55rem;
          border-radius: 50%;
          background: #e8f8ee;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sci-stat-value {
          font-size: 1.45rem;
          font-weight: 800;
          color: #16a34a;
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }

        .sci-stat h3 {
          margin: 0 0 0.25rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
        }

        .sci-stat p {
          margin: 0;
          font-size: 0.74rem;
          line-height: 1.4;
          color: #64748b;
        }

        .sci-right {
          opacity: 0;
          transform: translateX(22px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .sci-right.show {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 1000px) {
          .sci-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .sci-left {
            transform: translateY(18px);
          }

          .sci-left.show {
            transform: translateY(0);
          }

          .sci-right {
            transform: translateY(18px);
          }

          .sci-right.show {
            transform: translateY(0);
          }

          .sci-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 520px) {
          .sci-section {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .sci-stats {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityCommitmentImpact;
