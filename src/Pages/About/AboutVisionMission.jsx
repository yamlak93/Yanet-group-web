import React, { useEffect, useState, useRef } from "react";
import {
  Target,
  Eye,
  ShieldCheck,
  TrendingUp,
  Users,
  Heart,
} from "lucide-react";
import HorizontalCard from "../../Components/HorizontalCard";

const AboutVisionMission = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const missionPoints = [
    "Deliver premium agricultural commodities and industrial raw materials with consistent quality",
    "Provide reliable logistics and supply chain solutions for local and international partners",
    "Support Ethiopian manufacturers with high-grade chemical inputs and technical reliability",
    "Build long-term relationships based on trust, transparency, and mutual growth",
  ];

  const visionPoints = [
    "Become a leading Ethiopian trading and industrial company recognized across global markets",
    "Expand our reach in agricultural exports and industrial chemical solutions",
    "Create lasting value for partners, employees, and the national economy",
    "Set the standard for quality, service, and integrity in the industry",
  ];

  const coreValues = [
    {
      title: "Integrity",
      description: "Honesty and transparency in every partnership we build.",
      icon: <ShieldCheck size={22} />,
    },
    {
      title: "Excellence",
      description:
        "Consistent quality and continuous improvement in all we do.",
      icon: <TrendingUp size={22} />,
    },
    {
      title: "Partnership",
      description: "Long-term relationships based on trust and shared success.",
      icon: <Users size={22} />,
    },
    {
      title: "Responsibility",
      description: "Accountable to our partners, community, and industry.",
      icon: <Heart size={22} />,
    },
  ];

  return (
    <section className={`about-vm ${visible ? "show" : ""}`} ref={sectionRef}>
      <div className="about-vm-container">
        <div className="vm-header">
          <span className="badge">Purpose & Direction</span>
          <h2 className="title">
            Mission, Vision & <span className="highlight">Core Values</span>
          </h2>
        </div>

        {/* Mission & Vision – side by side */}
        <div className="vm-grid">
          <div className="vm-card mission">
            <div className="vm-icon">
              <Target size={26} />
            </div>
            <h3>Our Mission</h3>
            <ul className="vm-list">
              {missionPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="vm-card vision">
            <div className="vm-icon">
              <Eye size={26} />
            </div>
            <h3>Our Vision</h3>
            <ul className="vm-list">
              {visionPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Values – one HorizontalCard each */}
        <div className="values-block">
          <h3 className="values-title">Our Core Values</h3>
          <div className="values-list">
            {coreValues.map((value) => (
              <HorizontalCard
                key={value.title}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-vm {
          padding: 5rem 1.5rem 6rem;
          background: #f8fafc;
        }

        .about-vm-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .vm-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .about-vm.show .vm-header {
          opacity: 1;
          transform: translateY(0);
        }

        .badge {
          display: inline-block;
          background: rgba(46, 125, 50, 0.12);
          color: #1b5e20;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.4rem 1.1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .title {
          font-size: clamp(1.9rem, 3.8vw, 2.5rem);
          font-weight: 800;
          color: #111827;
          margin: 0;
        }

        .highlight {
          color: #15803d;
        }

        .vm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.8rem;
          margin-bottom: 3rem;
        }

        .vm-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 22px;
          padding: 2rem 1.8rem;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 14px 36px rgba(46, 125, 50, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .vm-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 44px rgba(46, 125, 50, 0.12);
        }

        .vm-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1rem;
        }

        .vm-card.mission .vm-icon {
          background: linear-gradient(135deg, #2e7d32, #43a047);
        }

        .vm-card.vision .vm-icon {
          background: linear-gradient(135deg, #1565c0, #42a5f5);
        }

        .vm-card h3 {
          margin: 0 0 1rem;
          font-size: 1.35rem;
          font-weight: 700;
          color: #1b5e20;
        }

        .vm-list {
          margin: 0;
          padding-left: 1.2rem;
          color: #33691e;
          line-height: 1.7;
        }

        .vm-list li {
          margin-bottom: 0.55rem;
        }

        .values-block {
          margin-top: 0.5rem;
        }

        .values-title {
          text-align: center;
          font-size: 1.4rem;
          font-weight: 700;
          color: #1b5e20;
          margin: 0 0 1.5rem;
        }

        .values-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (max-width: 900px) {
          .vm-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .about-vm {
            padding: 3.5rem 1.2rem 4.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutVisionMission;
