import React, { useEffect, useState, useRef } from "react";
import {
  Award,
  Leaf,
  Scale,
  ShieldCheck,
  Search,
  ClipboardList,
  Handshake,
  FileCheck,
  Truck,
} from "lucide-react";

const pillars = [
  {
    icon: <Award size={28} strokeWidth={1.5} />,
    title: "Quality First",
    desc: "We source only products that meet international quality standards.",
  },
  {
    icon: <Leaf size={28} strokeWidth={1.5} />,
    title: "Sustainability",
    desc: "We prioritize suppliers who are committed to sustainable practices.",
  },
  {
    icon: <Scale size={28} strokeWidth={1.5} />,
    title: "Ethical Business",
    desc: "We ensure fair practices, compliance and respect across our supply chain.",
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "Reliability",
    desc: "We build resilient supply networks for consistent and timely delivery.",
  },
];

const processSteps = [
  {
    num: "01",
    icon: <Search size={22} strokeWidth={1.75} />,
    title: "Market Research",
    desc: "We identify global markets and potential suppliers based on quality and reliability.",
  },
  {
    num: "02",
    icon: <ClipboardList size={22} strokeWidth={1.75} />,
    title: "Supplier Evaluation",
    desc: "Suppliers are assessed on quality, capacity, certifications and compliance.",
  },
  {
    num: "03",
    icon: <Handshake size={22} strokeWidth={1.75} />,
    title: "Sampling & Testing",
    desc: "Products and materials are tested to ensure they meet our standards.",
  },
  {
    num: "04",
    icon: <FileCheck size={22} strokeWidth={1.75} />,
    title: "Contract & Compliance",
    desc: "We establish clear agreements and require compliance with our policies and standards.",
  },
  {
    num: "05",
    icon: <Truck size={22} strokeWidth={1.75} />,
    title: "Order & Delivery",
    desc: "We manage logistics and ensure timely delivery with continuous quality monitoring.",
  },
];

const GlobalSourcingApproach = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gsa-section" ref={sectionRef}>
      <div className="gsa-container">
        {/* —— Philosophy —— */}
        <div className={`gsa-philosophy ${visible ? "show" : ""}`}>
          <div className="gsa-philo-left">
            <span className="gsa-badge">OUR SOURCING PHILOSOPHY</span>
            <h2 className="gsa-title">
              Responsible Sourcing,
              <br />
              Sustainable Growth
            </h2>
            <div className="gsa-rule" />
            <p className="gsa-lead">
              Our sourcing approach is based on integrity, transparency and
              long-term value creation. We work closely with carefully selected
              suppliers who share our commitment to quality, ethical business
              and sustainability.
            </p>
          </div>

          <div className="gsa-pillars">
            {pillars.map((item) => (
              <div key={item.title} className="gsa-pillar">
                <div className="gsa-pillar-icon">{item.icon}</div>
                <h3 className="gsa-pillar-title">{item.title}</h3>
                <p className="gsa-pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* —— Process —— */}
        <div className={`gsa-process ${visible ? "show" : ""}`}>
          <span className="gsa-badge gsa-badge-center">
            OUR SOURCING PROCESS
          </span>
          <h3 className="gsa-process-title">
            A Rigorous Process. Consistent Results.
          </h3>

          <div className="gsa-timeline">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="gsa-step"
                style={{
                  transitionDelay: visible ? `${0.08 + i * 0.07}s` : "0s",
                }}
              >
                {/* Icon circle + connector */}
                <div className="gsa-step-top">
                  <div className="gsa-dot">{step.icon}</div>
                  {i < processSteps.length - 1 && (
                    <div className="gsa-connector" aria-hidden="true">
                      <span className="gsa-dash" />
                      <span className="gsa-arrow">›</span>
                    </div>
                  )}
                </div>

                <span className="gsa-num">{step.num}</span>
                <h4 className="gsa-step-title">{step.title}</h4>
                <p className="gsa-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .gsa-section {
          padding: 4.75rem 1.5rem 5.25rem;
          background: #f8faf9;
        }

        .gsa-container {
          max-width: 1140px;
          margin: 0 auto;
        }

        .gsa-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #16a34a;
          margin-bottom: 0.75rem;
        }

        .gsa-badge-center {
          display: block;
          text-align: center;
        }

        /* ========== Philosophy ========== */
        .gsa-philosophy {
          display: grid;
          grid-template-columns: minmax(240px, 0.85fr) 1.3fr;
          gap: 2.25rem 2.5rem;
          align-items: center;
          margin-bottom: 4.25rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gsa-philosophy.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gsa-title {
          margin: 0 0 0.85rem;
          font-size: clamp(1.6rem, 2.8vw, 2.05rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          letter-spacing: -0.3px;
        }

        .gsa-rule {
          width: 36px;
          height: 3px;
          background: #16a34a;
          border-radius: 2px;
          margin-bottom: 1rem;
        }

        .gsa-lead {
          margin: 0;
          max-width: 380px;
          font-size: 0.92rem;
          line-height: 1.75;
          color: #64748b;
        }

        /* 4 equal columns – icon → title → text */
        .gsa-pillars {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #ffffff;
          border: 1px solid #e8eef0;
          border-radius: 16px;
          box-shadow: 0 8px 28px rgba(15, 23, 42, 0.04);
        }

        .gsa-pillar {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.75rem 1.1rem 1.6rem;
          border-right: 1px solid #eef2f0;
        }

        .gsa-pillar:last-child {
          border-right: none;
        }

        .gsa-pillar-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          margin-bottom: 0.95rem;
          color: #0f172a;
        }

        .gsa-pillar-title {
          margin: 0 0 0.5rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
        }

        .gsa-pillar-desc {
          margin: 0;
          font-size: 0.8rem;
          line-height: 1.55;
          color: #64748b;
          max-width: 150px;
        }

        /* ========== Process ========== */
        .gsa-process {
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
        }

        .gsa-process.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gsa-process-title {
          margin: 0 0 2.75rem;
          text-align: center;
          font-size: clamp(1.35rem, 2.4vw, 1.75rem);
          font-weight: 800;
          color: #0f172a;
        }

        .gsa-timeline {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
        }

        .gsa-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 0.5rem;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gsa-process.show .gsa-step {
          opacity: 1;
          transform: translateY(0);
        }

        /* Circle row with dashed connector to the right */
        .gsa-step-top {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0.85rem;
          min-height: 56px;
        }

        .gsa-dot {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #16a34a;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 1;
          box-shadow: 0 6px 16px rgba(22, 163, 74, 0.25);
        }

        .gsa-connector {
          position: absolute;
          left: calc(50% + 32px);
          right: -50%;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          z-index: 0;
          pointer-events: none;
        }

        .gsa-dash {
          flex: 1;
          height: 0;
          border-top: 2px dashed #86efac;
        }

        .gsa-arrow {
          color: #4ade80;
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1;
          margin-left: 1px;
        }

        /* Text stack under circle: number → title → description */
        .gsa-num {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          color: #16a34a;
          margin-bottom: 0.35rem;
          letter-spacing: 0.02em;
        }

        .gsa-step-title {
          margin: 0 0 0.45rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
        }

        .gsa-step-desc {
          margin: 0;
          max-width: 160px;
          font-size: 0.8rem;
          line-height: 1.55;
          color: #64748b;
        }

        @media (max-width: 960px) {
          .gsa-philosophy {
            grid-template-columns: 1fr;
          }

          .gsa-pillars {
            grid-template-columns: repeat(2, 1fr);
          }

          .gsa-pillar {
            border-right: none;
            border-bottom: 1px solid #eef2f0;
          }

          .gsa-pillar:nth-child(odd) {
            border-right: 1px solid #eef2f0;
          }

          .gsa-pillar:nth-last-child(-n + 2) {
            border-bottom: none;
          }

          .gsa-timeline {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.75rem 0.5rem;
          }

          .gsa-connector {
            display: none;
          }
        }

        @media (max-width: 560px) {
          .gsa-section {
            padding: 3.5rem 1.2rem 4rem;
          }

          .gsa-pillars {
            grid-template-columns: 1fr;
          }

          .gsa-pillar {
            border-right: none !important;
            border-bottom: 1px solid #eef2f0;
          }

          .gsa-pillar:last-child {
            border-bottom: none;
          }

          .gsa-timeline {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .gsa-step-desc {
            max-width: 240px;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalSourcingApproach;
