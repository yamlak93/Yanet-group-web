import React, { useEffect, useState, useRef } from "react";
import {
  FlaskConical,
  ShieldCheck,
  Factory,
  BadgeCheck,
  Package,
} from "lucide-react";
import SourcingStepCard from "../../Components/SourcingStepCard";
import SourcingImageCard from "../../Components/SourcingImageCard";
import approachImg from "../../assets/chemicals1.jpg";

const steps = [
  {
    icon: <FlaskConical size={20} />,
    title: "Identify & Source",
    desc: "We identify and partner with trusted global suppliers of high-purity chemical raw materials.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Standards & Compliance",
    desc: "We uphold strict international quality standards, safety protocols, and regulatory compliance.",
  },
  {
    icon: <Factory size={20} />,
    title: "Import & Manufacture",
    desc: "Careful importing and in-house manufacturing to deliver only high-standard chemicals.",
  },
  {
    icon: <BadgeCheck size={20} />,
    title: "Quality Check",
    desc: "Rigorous lab testing and quality control at every stage before release to market.",
  },
  {
    icon: <Package size={20} />,
    title: "Reliable Supply",
    desc: "Consistent, on-time supply to meet the needs of our industrial and commercial partners.",
  },
];

const GlobalSouringChemical = () => {
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
    <section className="gsa-section" ref={sectionRef}>
      <div className="gsa-container">
        <div className={`gsa-header ${visible ? "show" : ""}`}>
          <span className="gsa-badge">OUR CHEMICAL SUPPLY APPROACH</span>
          <h2 className="gsa-title">
            From <span className="highlight">Global Sources</span> to Reliable
            Supply
          </h2>
          <p className="gsa-subtitle">
            Our strong network ensures a reliable supply of high-standard
            chemicals through careful importing and manufacturing. We focus on
            quality, safety, compliance, and delivering value to our industrial
            partners.
          </p>
        </div>

        <div className={`gsa-body ${visible ? "show" : ""}`}>
          <div className="gsa-steps-row">
            {steps.map((step, i) => (
              <React.Fragment key={step.title}>
                <SourcingStepCard
                  icon={step.icon}
                  title={step.title}
                  desc={step.desc}
                />
                {i < steps.length - 1 && (
                  <div className="gsa-arrow" aria-hidden="true">
                    <svg
                      width="20"
                      height="12"
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6H16M16 6L11 1M16 6L11 11"
                        stroke="#4ade80"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="gsa-side">
            <SourcingImageCard
              image={approachImg}
              title="High-Standard Chemicals"
              desc="We believe in delivering purity and reliability by combining global sourcing with controlled manufacturing."
              alt="High-standard chemical supply and manufacturing"
            />
          </div>
        </div>
      </div>

      <style>{`
        .gsa-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #f7faf8;
        }

        .gsa-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .gsa-header {
          margin-bottom: 2.25rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gsa-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gsa-badge {
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

        .gsa-title {
          margin: 0 0 0.7rem;
          font-size: clamp(1.7rem, 3vw, 2.25rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.35px;
        }

        .gsa-title .highlight {
          color: #16a34a;
        }

        .gsa-subtitle {
          margin: 0;
          max-width: 620px;
          font-size: 0.98rem;
          line-height: 1.7;
          color: #64748b;
        }

        .gsa-body {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 1.5rem;
          align-items: stretch;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
        }

        .gsa-body.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gsa-steps-row {
          display: flex;
          align-items: center;
          gap: 0.15rem;
          min-width: 0;
        }

        .gsa-arrow {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          color: #4ade80;
          padding: 0 0.1rem;
          margin-top: -1.5rem;
        }

        .gsa-side {
          min-width: 0;
        }

        @media (max-width: 1100px) {
          .gsa-body {
            grid-template-columns: 1fr;
          }

          .gsa-steps-row {
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.75rem;
          }

          .gsa-arrow {
            display: none;
          }

          .gsa-side {
            max-width: 360px;
            margin: 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 560px) {
          .gsa-section {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .gsa-steps-row .ssc-card {
            max-width: 100%;
            flex: 1 1 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalSouringChemical;
