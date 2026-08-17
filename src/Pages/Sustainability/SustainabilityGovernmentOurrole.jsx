import React, { useEffect, useState, useRef } from "react";
import {
  FileText,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Users,
} from "lucide-react";

const roles = [
  {
    icon: <FileText size={24} />,
    title: "Legally Registered",
    desc: "Operating with valid registrations, licenses, and permits.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Compliant Operations",
    desc: "Adhering to all national laws, directives, and regulations.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Economic Authorized Entity",
    desc: "Recognized as a legitimate economic operator by government.",
  },
  {
    icon: <Handshake size={24} />,
    title: "Government Partner",
    desc: "Working in partnership with government institutions for national development.",
  },
  {
    icon: <Users size={24} />,
    title: "Socially Responsible",
    desc: "Creating employment and supporting communities across Ethiopia.",
  },
];

const SustainabilityGovernmentOurrole = () => {
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
    <section className="sgor-section" ref={sectionRef}>
      <div className="sgor-container">
        <div className={`sgor-header ${visible ? "show" : ""}`}>
          <div className="sgor-header-left">
            <span className="sgor-badge">OUR ROLE</span>
            <h2 className="sgor-title">
              A Trusted Partner in
              <br />
              Ethiopia’s <span className="highlight">Economic Growth</span>
            </h2>
          </div>
          <p className="sgor-desc">
            Yanet Industrial PLC is a duly registered and licensed company
            operating in full compliance with the laws and regulations of the
            Federal Democratic Republic of Ethiopia.
          </p>
        </div>

        <div className={`sgor-grid ${visible ? "show" : ""}`}>
          {roles.map((item, i) => (
            <article
              key={item.title}
              className="sgor-card"
              style={{
                transitionDelay: visible ? `${0.08 + i * 0.07}s` : "0s",
              }}
            >
              <div className="sgor-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .sgor-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #f7faf8;
        }

        .sgor-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .sgor-header {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2rem;
          align-items: end;
          margin-bottom: 2.25rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sgor-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sgor-badge {
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

        .sgor-title {
          margin: 0;
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.35px;
          line-height: 1.15;
        }

        .sgor-title .highlight {
          color: #16a34a;
        }

        .sgor-desc {
          margin: 0;
          font-size: 0.98rem;
          line-height: 1.7;
          color: #64748b;
          padding-bottom: 0.25rem;
        }

        .sgor-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }

        .sgor-card {
          background: #ffffff;
          border: 1px solid #eef2f0;
          border-radius: 18px;
          padding: 1.5rem 1.15rem 1.55rem;
          text-align: center;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04);
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .sgor-grid.show .sgor-card {
          opacity: 1;
          transform: translateY(0);
        }

        .sgor-card:hover {
          transform: translateY(-4px);
          border-color: rgba(76, 175, 80, 0.35);
          box-shadow: 0 14px 32px rgba(46, 125, 50, 0.1);
        }

        .sgor-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          background: #e8f8ee;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sgor-card h3 {
          margin: 0 0 0.5rem;
          font-size: 0.98rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
        }

        .sgor-card p {
          margin: 0;
          font-size: 0.84rem;
          line-height: 1.55;
          color: #64748b;
        }

        @media (max-width: 1000px) {
          .sgor-header {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .sgor-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 700px) {
          .sgor-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .sgor-section {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .sgor-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityGovernmentOurrole;
