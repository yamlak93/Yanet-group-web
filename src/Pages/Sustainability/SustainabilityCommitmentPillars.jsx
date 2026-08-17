import React, { useEffect, useState, useRef } from "react";
import { Leaf, Users, Globe2, ShieldCheck } from "lucide-react";
import PillarCard from "../../Components/PillarCard";

// Add your image paths
import sourcingImg from "../../assets/greenfarm.jpg";
import communityImg from "../../assets/community.jpg";
import environmentImg from "../../assets/landscape.jpg";
import ethicalImg from "../../assets/handshaking.jpg";

const pillars = [
  {
    icon: <Leaf size={20} />,
    title: "Responsible Sourcing",
    description:
      "We source high-quality agricultural commodities through ethical, traceable, and environmentally responsible practices.",
    image: sourcingImg,
    alt: "Farmer in agricultural field",
  },
  {
    icon: <Users size={20} />,
    title: "Community Empowerment",
    description:
      "We invest in local communities by supporting farmers, creating job opportunities, and promoting knowledge sharing.",
    image: communityImg,
    alt: "Local community working together",
  },
  {
    icon: <Globe2 size={20} />,
    title: "Environmental Stewardship",
    description:
      "We are committed to reducing our environmental footprint through efficient operations, responsible resource use, and waste reduction.",
    image: environmentImg,
    alt: "Forest and natural landscape",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Ethical & Transparent",
    description:
      "We uphold the highest standards of integrity, fairness, and transparency in all our business relationships and operations.",
    image: ethicalImg,
    alt: "Business handshake partnership",
  },
];

const SustainabilityCommitmentPillars = () => {
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
    <section className="scp-section" ref={sectionRef}>
      <div className="scp-container">
        <div className={`scp-header ${visible ? "show" : ""}`}>
          <span className="scp-badge">OUR COMMITMENT PILLARS</span>
          <h2 className="scp-title">
            Our Commitment <span className="highlight">in Action</span>
          </h2>
          <p className="scp-subtitle">
            We focus on the areas that matter most to build a sustainable
            business and a better world.
          </p>
        </div>

        <div className={`scp-grid ${visible ? "show" : ""}`}>
          {pillars.map((item, i) => (
            <div
              key={item.title}
              className="scp-item"
              style={{
                transitionDelay: visible ? `${0.08 + i * 0.08}s` : "0s",
              }}
            >
              <PillarCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                image={item.image}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scp-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #f4f7f5;
          position: relative;
          overflow: hidden;
        }

        .scp-container {
          max-width: 1180px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .scp-header {
          margin-bottom: 2.25rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scp-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .scp-badge {
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

        .scp-title {
          margin: 0 0 0.65rem;
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.35px;
        }

        .scp-title .highlight {
          color: #16a34a;
        }

        .scp-subtitle {
          margin: 0;
          max-width: 480px;
          font-size: 0.98rem;
          line-height: 1.7;
          color: #64748b;
        }

        .scp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.15rem;
        }

        .scp-item {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scp-grid.show .scp-item {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1000px) {
          .scp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .scp-section {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .scp-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityCommitmentPillars;
