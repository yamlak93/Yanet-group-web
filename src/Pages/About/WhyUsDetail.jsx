import React, { useEffect, useState, useRef } from "react";
import {
  Award,
  Globe2,
  ShieldCheck,
  Factory,
  Users,
  Leaf,
  Truck,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: <Award size={26} />,
    title: "20+ Years of Excellence",
    desc: "Established in 2002, Yanet Industrial PLC has built a strong reputation as a trusted Ethiopian trading and industrial partner.",
  },
  {
    icon: <Globe2 size={26} />,
    title: "Global Export Network",
    desc: "We supply premium agricultural commodities to Southeast Asia, South Asia, China, and the Middle East through reliable logistics via Djibouti Port.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Quality & Standards",
    desc: "Strict cleaning, grading, and sorting processes ensure our mung beans, sesame, coffee, and oilseeds meet international phytosanitary standards.",
  },
  {
    icon: <Factory size={26} />,
    title: "Industrial Solutions",
    desc: "Major supplier of caustic soda, soda ash, polymers, and industrial inputs serving Ethiopia’s manufacturing and detergent sectors.",
  },
  {
    icon: <Users size={26} />,
    title: "Local Industry Support",
    desc: "We work closely with Ethiopian breweries, beverage producers, and soap manufacturers to keep production lines running without interruption.",
  },
  {
    icon: <Leaf size={26} />,
    title: "Ethiopian Origin Strength",
    desc: "Deep roots in Ethiopian agriculture allow us to source authentic, high-quality commodities directly from producing regions.",
  },
  {
    icon: <Truck size={26} />,
    title: "Reliable Logistics",
    desc: "From documentation to port coordination, our supply chain support helps partners move goods smoothly and on time.",
  },
  {
    icon: <Handshake size={26} />,
    title: "Long-Term Partnerships",
    desc: "We focus on transparent communication, consistent delivery, and relationships that grow with our clients over years.",
  },
];

const WhyUsDetail = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState({});
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeaderVisible(entry.isIntersecting),
      { threshold: 0.1 },
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
          setVisibleItems((prev) => ({
            ...prev,
            [index]: entry.isIntersecting,
          }));
        },
        { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
      );
      obs.observe(node);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="why-detail" ref={sectionRef}>
      <div className="wd-container">
        <div className={`wd-header ${headerVisible ? "show" : ""}`}>
          <span className="wd-badge">Our Advantages</span>
          <h2 className="wd-title">
            Why Businesses Choose{" "}
            <span className="highlight">Yanet Industrials</span>
          </h2>
          <p className="wd-subtitle">
            Practical strengths that help manufacturers, exporters, and global
            buyers work with confidence.
          </p>
        </div>

        {/* Intro paragraph before cards */}
        <div className={`wd-intro ${headerVisible ? "show" : ""}`}>
          <p>
            Choosing a trading and industrial partner is about more than price.
            It is about consistency, documentation, and a team that understands
            both local production realities and international market
            requirements. Yanet Industrials combines Ethiopian origin strength
            with a dependable supply network so your operations stay on schedule
            and your buyers receive the quality they expect.
          </p>
          <p>
            Whether you need agricultural commodities for export or industrial
            chemical inputs for manufacturing, we focus on clear communication,
            careful quality control, and long-term working relationships.
          </p>
        </div>

        <div className="wd-grid">
          {features.map((item, index) => (
            <article
              key={item.title}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`wd-card ${visibleItems[index] ? "show" : ""}`}
              style={{
                transitionDelay: visibleItems[index]
                  ? `${(index % 4) * 0.06}s`
                  : "0s",
              }}
            >
              <div className="wd-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .why-detail {
          padding: 5rem 1.5rem 6rem;
          background: #f8fafc;
        }

        .wd-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .wd-header {
          text-align: center;
          margin-bottom: 1.75rem;
          opacity: 0;
          transform: translateY(22px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .wd-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .wd-badge {
          display: inline-block;
          background: rgba(46, 125, 50, 0.12);
          color: #1b5e20;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0.35rem 1rem;
          border-radius: 50px;
          margin-bottom: 0.85rem;
        }

        .wd-title {
          margin: 0 0 0.75rem;
          font-size: clamp(1.75rem, 3.2vw, 2.3rem);
          font-weight: 800;
          color: #0f172a;
        }

        .wd-title .highlight {
          color: #15803d;
        }

        .wd-subtitle {
          margin: 0 auto;
          max-width: 520px;
          font-size: 1rem;
          line-height: 1.65;
          color: #64748b;
        }

        .wd-intro {
          max-width: 820px;
          margin: 0 auto 2.75rem;
          padding: 1.6rem 1.8rem;
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(46, 125, 50, 0.05);
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
        }

        .wd-intro.show {
          opacity: 1;
          transform: translateY(0);
        }

        .wd-intro p {
          margin: 0 0 0.9rem;
          font-size: 1.02rem;
          line-height: 1.75;
          color: #475569;
        }

        .wd-intro p:last-child {
          margin-bottom: 0;
        }

        .wd-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.15rem;
        }

        .wd-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 20px;
          padding: 1.5rem 1.35rem 1.6rem;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 12px 32px rgba(46, 125, 50, 0.06);
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .wd-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .wd-card:hover {
          transform: translateY(-6px);
          border-color: rgba(76, 175, 80, 0.45);
          box-shadow:
            0 8px 14px rgba(0, 0, 0, 0.03),
            0 20px 44px rgba(46, 125, 50, 0.12);
        }

        .wd-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(145deg, #f0fdf4, #dcfce7);
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.1rem;
          transition: all 0.3s ease;
        }

        .wd-card:hover .wd-icon {
          background: linear-gradient(145deg, #16a34a, #22c55e);
          color: #ffffff;
          transform: scale(1.06);
        }

        .wd-card h3 {
          margin: 0 0 0.55rem;
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.35;
        }

        .wd-card p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.65;
          color: #64748b;
        }

        @media (max-width: 1100px) {
          .wd-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 800px) {
          .wd-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .wd-intro {
            padding: 1.35rem 1.3rem;
          }
        }

        @media (max-width: 520px) {
          .why-detail {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .wd-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyUsDetail;
