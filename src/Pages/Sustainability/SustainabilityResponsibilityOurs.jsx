import React, { useEffect, useState, useRef } from "react";
import {
  Users,
  Handshake,
  Leaf,
  UsersRound,
  ClipboardCheck,
} from "lucide-react";
import PillarCard from "../../Components/PillarCard";

// Add your image paths
import peopleImg from "../../assets/people.jpg";
import partnersImg from "../../assets/handshaking.jpg";
import environmentImg from "../../assets/landscape.jpg";
import communitiesImg from "../../assets/community.jpg";
import governanceImg from "../../assets/law.jpg";

const items = [
  {
    icon: <Users size={22} />,
    title: "To Our People",
    description:
      "We provide a safe, inclusive, and respectful workplace where our people can thrive and grow.",
    image: peopleImg,
    alt: "Yanet team members",
  },
  {
    icon: <Handshake size={22} />,
    title: "To Our Partners",
    description:
      "We build strong, honest, and long-term relationships based on trust, fairness, and mutual success.",
    image: partnersImg,
    alt: "Business partnership handshake",
  },
  {
    icon: <Leaf size={22} />,
    title: "To the Environment",
    description:
      "We are committed to reducing emissions, conserving natural resources, and protecting biodiversity.",
    image: environmentImg,
    alt: "Green landscape and river",
  },
  {
    icon: <UsersRound size={22} />,
    title: "To Our Communities",
    description:
      "We support education, health, and livelihood programs that create positive and lasting impact.",
    image: communitiesImg,
    alt: "Community members planting",
  },
  {
    icon: <ClipboardCheck size={22} />,
    title: "To Good Governance",
    description:
      "We ensure accountability, responsible decision-making, and compliance in everything we do.",
    image: governanceImg,
    alt: "Gavel representing good governance",
  },
];

const SustainabilityResponsibilityOurs = () => {
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
    <section className="sro-section" ref={sectionRef}>
      <div className="sro-container">
        <div className={`sro-header ${visible ? "show" : ""}`}>
          <span className="sro-badge">OUR RESPONSIBILITIES</span>
          <h2 className="sro-title">
            Our Responsibilities <span className="highlight">in Action</span>
          </h2>
          <p className="sro-subtitle">
            We take action every day to uphold our responsibility across all
            areas of our business.
          </p>
        </div>

        <div className={`sro-grid ${visible ? "show" : ""}`}>
          {items.map((item, i) => (
            <div
              key={item.title}
              className="sro-item"
              style={{
                transitionDelay: visible ? `${0.08 + i * 0.07}s` : "0s",
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
        .sro-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #f4f7f5;
        }

        .sro-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .sro-header {
          margin-bottom: 2.25rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sro-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sro-badge {
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

        .sro-title {
          margin: 0 0 0.65rem;
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.35px;
        }

        .sro-title .highlight {
          color: #16a34a;
        }

        .sro-subtitle {
          margin: 0;
          max-width: 520px;
          font-size: 0.98rem;
          line-height: 1.7;
          color: #64748b;
        }

        .sro-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }

        .sro-item {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
          min-width: 0;
        }

        .sro-grid.show .sro-item {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1100px) {
          .sro-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 720px) {
          .sro-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 520px) {
          .sro-section {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .sro-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityResponsibilityOurs;
