import React, { useEffect, useState, useRef } from "react";
import { Ship, ShieldCheck, FileCheck, PackageCheck } from "lucide-react";

// Replace with your logistics / container image
import logisticsImg from "../../assets/container-img.jpg";

const points = [
  {
    icon: <Ship size={22} />,
    title: "Reliable Import Flow",
    desc: "Coordinated inbound shipping so industrial chemicals arrive on schedule for production planning.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Quality Assurance",
    desc: "Specification checks and documentation support so batches meet the grade your process requires.",
  },
  {
    icon: <FileCheck size={22} />,
    title: "Endless Supply",
    desc: "Smooth handling of import papers, analysis documents, and clearance for faster availability.",
  },
  {
    icon: <PackageCheck size={22} />,
    title: "On-Demand Availability",
    desc: "A continuous supply mindset — helping customers access materials when production needs them.",
  },
];

const GlobalLogistics = () => {
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
    <section className="gl-section" ref={sectionRef}>
      <div className={`gl-card ${visible ? "show" : ""}`}>
        <div className="gl-left">
          <span className="gl-badge">OUR GLOBAL LOGISTICS</span>

          <h2 className="gl-title">
            Seamless Logistics,{" "}
            <span className="highlight">Reliable Chemical Supply</span>
          </h2>

          <p className="gl-desc">
            Through efficient import logistics and strong supplier partnerships,
            we help Ethiopian manufacturers access quality industrial chemicals
            with consistent availability — so production stays continuous, not
            interrupted.
          </p>

          <div className="gl-points">
            {points.map((item, i) => (
              <article
                key={item.title}
                className="gl-point"
                style={{
                  transitionDelay: visible ? `${0.12 + i * 0.07}s` : "0s",
                }}
              >
                <div className="gl-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="gl-right">
          <div className="gl-image-wrap">
            <img
              src={logisticsImg}
              alt="Yanet Industrial chemical import and logistics"
              className="gl-image"
            />
          </div>
        </div>
      </div>

      <style>{`
        .gl-section {
          padding: 4.5rem 1.5rem 5rem;
          background: #f4f7f5;
        }

        .gl-card {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 2rem;
          align-items: center;
          background: linear-gradient(145deg, #f0fdf4 0%, #ffffff 45%, #f8fafc 100%);
          border: 1px solid #e8f0e9;
          border-radius: 28px;
          padding: 2.4rem 2.2rem;
          box-shadow: 0 16px 40px rgba(46, 125, 50, 0.06);
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gl-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .gl-badge {
          display: inline-block;
          background: #e8f5e9;
          color: #1b5e20;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          border: 1px solid rgba(46, 125, 50, 0.18);
          margin-bottom: 1rem;
        }

        .gl-title {
          margin: 0 0 0.9rem;
          font-size: clamp(1.65rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          letter-spacing: -0.35px;
        }

        .gl-title .highlight {
          color: #16a34a;
        }

        .gl-desc {
          margin: 0 0 1.75rem;
          max-width: 520px;
          font-size: 1rem;
          line-height: 1.75;
          color: #64748b;
        }

        .gl-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.15rem 1.25rem;
        }

        .gl-point {
          opacity: 0;
          transform: translateY(14px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gl-card.show .gl-point {
          opacity: 1;
          transform: translateY(0);
        }

        .gl-icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid #e8f0e9;
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.7rem;
          box-shadow: 0 4px 12px rgba(46, 125, 50, 0.06);
        }

        .gl-point h3 {
          margin: 0 0 0.35rem;
          font-size: 0.98rem;
          font-weight: 800;
          color: #0f172a;
        }

        .gl-point p {
          margin: 0;
          font-size: 0.86rem;
          line-height: 1.55;
          color: #64748b;
        }

        .gl-right {
          min-width: 0;
        }

        .gl-image-wrap {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: #e8f5e9;
          aspect-ratio: 4 / 3;
        }

        .gl-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .gl-card:hover .gl-image {
          transform: scale(1.03);
        }

        @media (max-width: 960px) {
          .gl-card {
            grid-template-columns: 1fr;
            padding: 1.8rem 1.5rem;
          }

          .gl-right {
            order: -1;
          }

          .gl-image-wrap {
            max-height: 320px;
          }
        }

        @media (max-width: 560px) {
          .gl-section {
            padding: 3.5rem 1.2rem 4rem;
          }

          .gl-points {
            grid-template-columns: 1fr;
          }

          .gl-card {
            border-radius: 22px;
            padding: 1.5rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalLogistics;
