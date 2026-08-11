import React, { useEffect, useState, useRef } from "react";
import {
  Building2,
  Sprout,
  Globe2,
  Factory,
  Handshake,
  TrendingUp,
} from "lucide-react";

const milestones = [
  {
    year: "2002",
    title: "Foundation",
    desc: "Yanet Industrial PLC was established in Addis Ababa, laying the foundation for a trading and industrial supply company rooted in Ethiopia.",
    icon: <Building2 size={22} />,
  },
  {
    year: "2010",
    title: "Agricultural Export Growth",
    desc: "Expanded sourcing and export of premium commodities including sesame, mung beans, and coffee to international markets.",
    icon: <Sprout size={22} />,
  },
  {
    year: "2014",
    title: "Global Trade Links",
    desc: "Strengthened partnerships across Asia and the Middle East, with reliable logistics through Djibouti Port. Strengthened partnerships across Asia and the Middle East, with reliable logistics through Djibouti Port. Strengthened partnerships across Asia and the Middle East, with reliable logistics through Djibouti Port. ",
    icon: <Globe2 size={22} />,
  },
  {
    year: "2018",
    title: "Industrial Supply Focus",
    desc: "Grew industrial chemical supply to support Ethiopian manufacturers in detergent, beverage, and process industries.",
    icon: <Factory size={22} />,
  },
  {
    year: "2022",
    title: "Trusted Partnerships",
    desc: "Deepened long-term relationships with local producers, global suppliers, and institutional buyers built on quality and reliability.",
    icon: <Handshake size={22} />,
  },
  {
    year: "Today",
    title: "Looking Forward",
    desc: "Continuing to connect Ethiopian strength with global opportunity — in agriculture, chemicals, and industrial solutions.",
    icon: <TrendingUp size={22} />,
  },
];

const OurStoryPath = () => {
  const [visible, setVisible] = useState(false);
  const [activeItems, setActiveItems] = useState({});
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

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

  useEffect(() => {
    const observers = [];
    itemRefs.current.forEach((node, index) => {
      if (!node) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          setActiveItems((prev) => ({
            ...prev,
            [index]: entry.isIntersecting,
          }));
        },
        { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
      );
      obs.observe(node);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="story-path" ref={sectionRef}>
      <div className="sp-container">
        <div className={`sp-header ${visible ? "show" : ""}`}>
          <span className="sp-badge">Our Path</span>
          <h2 className="sp-title">
            A Journey of <span className="highlight">Growth & Trust</span>
          </h2>
          <p className="sp-subtitle">
            Key milestones that shaped Yanet Industrials from a local trading
            company into a bridge between Ethiopia and global markets.
          </p>
        </div>

        <div className="sp-timeline">
          <div className="sp-line" aria-hidden="true" />

          {milestones.map((item, index) => {
            const isLeft = index % 2 === 0;
            const show = activeItems[index];

            return (
              <div
                key={item.year + item.title}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`sp-item ${isLeft ? "left" : "right"} ${show ? "show" : ""}`}
              >
                <div className="sp-card">
                  <div className="sp-card-top">
                    <div className="sp-icon">{item.icon}</div>
                    <span className="sp-year">{item.year}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="sp-dot" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .story-path {
          padding: 5rem 1.5rem 6rem;
          background: #ffffff;
        }

        .sp-container {
          max-width: 960px;
          margin: 0 auto;
        }

        .sp-header {
          text-align: center;
          margin-bottom: 3.5rem;
          opacity: 0;
          transform: translateY(22px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sp-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sp-badge {
          display: inline-block;
          background: rgba(46, 125, 50, 0.12);
          color: #1b5e20;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0.35rem 1rem;
          border-radius: 50px;
          margin-bottom: 0.85rem;
        }

        .sp-title {
          margin: 0 0 0.75rem;
          font-size: clamp(1.75rem, 3.2vw, 2.3rem);
          font-weight: 800;
          color: #0f172a;
        }

        .sp-title .highlight {
          color: #15803d;
        }

        .sp-subtitle {
          margin: 0 auto;
          max-width: 520px;
          font-size: 1rem;
          line-height: 1.65;
          color: #64748b;
        }

        .sp-timeline {
          position: relative;
          padding: 0.5rem 0 1rem;
        }

        .sp-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          transform: translateX(-50%);
          background: linear-gradient(
            180deg,
            rgba(22, 163, 74, 0.15),
            rgba(22, 163, 74, 0.45),
            rgba(22, 163, 74, 0.15)
          );
          border-radius: 4px;
        }

        .sp-item {
          position: relative;
          width: 50%;
          padding: 0 2rem 2.5rem;
          opacity: 0;
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sp-item.left {
          left: 0;
          text-align: right;
          padding-right: 2.5rem;
          transform: translateX(-28px);
        }

        .sp-item.right {
          left: 50%;
          text-align: left;
          padding-left: 2.5rem;
          transform: translateX(28px);
        }

        .sp-item.show {
          opacity: 1;
          transform: translateX(0);
        }

        .sp-dot {
          position: absolute;
          top: 1.4rem;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #16a34a;
          border: 3px solid #dcfce7;
          box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.15);
          z-index: 2;
        }

        .sp-item.left .sp-dot {
          right: -8px;
        }

        .sp-item.right .sp-dot {
          left: -8px;
        }

        .sp-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 18px;
          padding: 1.35rem 1.35rem 1.45rem;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 14px 36px rgba(46, 125, 50, 0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: inline-block;
          text-align: left;
          max-width: 360px;
          width: 100%;
        }

        .sp-item.left .sp-card {
          margin-left: auto;
        }

        .sp-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 8px 14px rgba(0, 0, 0, 0.03),
            0 20px 44px rgba(46, 125, 50, 0.12);
        }

        .sp-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .sp-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(145deg, #f0fdf4, #dcfce7);
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sp-year {
          font-size: 0.9rem;
          font-weight: 800;
          color: #16a34a;
        }

        .sp-card h3 {
          margin: 0 0 0.45rem;
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
        }

        .sp-card p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.6;
          color: #64748b;
        }

        @media (max-width: 768px) {
          .sp-line {
            left: 20px;
          }

          .sp-item,
          .sp-item.left,
          .sp-item.right {
            width: 100%;
            left: 0;
            text-align: left;
            padding: 0 0 2rem 3rem;
            transform: translateY(24px);
          }

          .sp-item.show {
            transform: translateY(0);
          }

          .sp-item.left .sp-card,
          .sp-item.right .sp-card {
            margin-left: 0;
            max-width: 100%;
          }

          .sp-item.left .sp-dot,
          .sp-item.right .sp-dot {
            left: 13px;
            right: auto;
          }
        }

        @media (max-width: 520px) {
          .story-path {
            padding: 3.5rem 1.2rem 4.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default OurStoryPath;
