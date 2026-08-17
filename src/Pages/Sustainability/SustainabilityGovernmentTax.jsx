import React, { useEffect, useState, useRef } from "react";
import {
  Landmark,
  FileText,
  ShieldCheck,
  TrendingUp,
  Scale,
  Building2,
  Users,
  Package,
  Globe2,
  RefreshCw,
  Factory,
  HeartHandshake,
} from "lucide-react";

// Replace with your assets
import taxDeskImg from "../../assets/tax.png";
import cityBgImg from "../../assets/city.jpg";
import cityMonumentImg from "../../assets/city.jpg";

const taxItems = [
  {
    icon: <Landmark size={20} />,
    title: "Direct Taxes",
    desc: "Income Tax, Withholding Tax, Payroll Tax and other applicable taxes.",
  },
  {
    icon: <FileText size={20} />,
    title: "Indirect Taxes",
    desc: "VAT, Excise Tax, Import Duties, and other statutory obligations.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Customs Compliance",
    desc: "Full compliance with customs regulations and trade requirements.",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Timely & Transparent",
    desc: "Timely filing and payment ensuring transparency and accountability.",
  },
];

const keyResponsibilities = [
  {
    icon: <Scale size={22} />,
    title: "Tax Compliance",
    desc: "We comply with all tax laws and contribute to national revenue.",
  },
  {
    icon: <Building2 size={22} />,
    title: "Regulatory Compliance",
    desc: "We comply with sectoral regulations, standards, and government policies.",
  },
  {
    icon: <Users size={22} />,
    title: "Employment Creation",
    desc: "We create job opportunities and develop skills for Ethiopian citizens.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Economic Contribution",
    desc: "Our operations support economic growth and strengthen value chains.",
  },
  {
    icon: <Package size={22} />,
    title: "Import & Export Compliance",
    desc: "We follow all trade laws, procedures, and reporting requirements.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "Anti-Corruption",
    desc: "We operate with integrity, zero tolerance for fraud, corruption, or bribery.",
  },
];

const nationalPoints = [
  {
    icon: <RefreshCw size={18} />,
    title: "Strengthening the national economy",
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Earning and saving foreign currency",
  },
  {
    icon: <Factory size={18} />,
    title: "Supporting industrial development",
  },
  {
    icon: <HeartHandshake size={18} />,
    title: "Empowering communities",
  },
];

const SustainabilityGovernmentTax = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sgt-section" ref={sectionRef}>
      {/* TOP: Taxes & Compliance */}
      <div className="sgt-container">
        <div className={`sgt-top ${visible ? "show" : ""}`}>
          <div className="sgt-top-left">
            <span className="sgt-badge">TAXES & COMPLIANCE</span>
            <h2 className="sgt-title">
              Fulfilling Our <span className="highlight">Tax Obligations.</span>
              <br />
              Building Our Nation.
            </h2>
            <p className="sgt-desc">
              We are committed to paying our fair share of taxes and duties,
              which directly contribute to Ethiopia’s infrastructure, education,
              health, security, and other national priorities.
            </p>

            <div className="sgt-tax-grid">
              {taxItems.map((item) => (
                <article key={item.title} className="sgt-tax-card">
                  <div className="sgt-tax-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="sgt-top-image">
            <img
              src={taxDeskImg}
              alt="Tax compliance documentation and tools"
            />
          </div>
        </div>
      </div>

      {/* MIDDLE: Key Responsibilities */}
      <div
        className={`sgt-middle ${visible ? "show" : ""}`}
        style={{ backgroundImage: `url('${cityBgImg}')` }}
      >
        <div className="sgt-middle-overlay">
          <div className="sgt-container">
            <h3 className="sgt-middle-title">
              Our Key <span className="highlight">Responsibilities</span> to
              Government & Society
            </h3>
            <div className="sgt-key-grid">
              {keyResponsibilities.map((item, i) => (
                <article
                  key={item.title}
                  className="sgt-key-card"
                  style={{
                    transitionDelay: visible ? `${0.1 + i * 0.05}s` : "0s",
                  }}
                >
                  <div className="sgt-key-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: National Contribution */}
      <div className="sgt-container">
        <div className={`sgt-bottom ${visible ? "show" : ""}`}>
          <div className="sgt-bottom-image">
            <img
              src={cityMonumentImg}
              alt="Addis Ababa cityscape and national monument"
            />
          </div>

          <div className="sgt-bottom-content">
            <span className="sgt-badge">NATIONAL CONTRIBUTION</span>
            <h3 className="sgt-bottom-title">
              Proud to Be Part of Ethiopia’s Journey{" "}
              <span className="highlight">Towards Prosperity</span>
            </h3>
            <p>
              As an industrial company engaged in manufacturing, import, export,
              and trade, we are proud to contribute to the country’s
              industrialization, foreign currency earnings, and self-reliance.
            </p>

            <div className="sgt-national-grid">
              {nationalPoints.map((item) => (
                <div key={item.title} className="sgt-national-item">
                  <div className="sgt-national-icon">{item.icon}</div>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sgt-section {
          background: #f7faf8;
          padding-bottom: 4.5rem;
        }

        .sgt-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .sgt-badge {
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

        .highlight {
          color: #16a34a;
        }

        /* TOP */
        .sgt-top {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2rem;
          align-items: center;
          padding: 5rem 0 3.5rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sgt-top.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sgt-title {
          margin: 0 0 0.85rem;
          font-size: clamp(1.75rem, 3vw, 2.3rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -0.35px;
        }

        .sgt-desc {
          margin: 0 0 1.5rem;
          max-width: 520px;
          font-size: 0.98rem;
          line-height: 1.7;
          color: #64748b;
        }

        .sgt-tax-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }

        .sgt-tax-card {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          background: #ffffff;
          border: 1px solid #eef2f0;
          border-radius: 14px;
          padding: 1rem 0.95rem;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
        }

        .sgt-tax-icon {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 10px;
          background: #e8f8ee;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sgt-tax-card h3 {
          margin: 0 0 0.25rem;
          font-size: 0.9rem;
          font-weight: 800;
          color: #0f172a;
        }

        .sgt-tax-card p {
          margin: 0;
          font-size: 0.8rem;
          line-height: 1.45;
          color: #64748b;
        }

        .sgt-top-image {
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.1);
          height: 100%;
          min-height: 320px;
        }

        .sgt-top-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* MIDDLE */
        .sgt-middle {
          position: relative;
          background-size: cover;
          background-position: center;
          margin: 1rem 0 3rem;
        }

        .sgt-middle-overlay {
          background: linear-gradient(
            180deg,
            rgba(247, 250, 248, 0.82) 0%,
            rgba(247, 250, 248, 0.9) 100%
          );
          padding: 3.5rem 0;
        }

        .sgt-middle.show .sgt-middle-title,
        .sgt-middle.show .sgt-key-card {
          opacity: 1;
          transform: translateY(0);
        }

        .sgt-middle-title {
          margin: 0 0 1.75rem;
          text-align: center;
          font-size: clamp(1.45rem, 2.5vw, 1.85rem);
          font-weight: 800;
          color: #0f172a;
          opacity: 0;
          transform: translateY(14px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sgt-key-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0.85rem;
        }

        .sgt-key-card {
          background: #ffffff;
          border: 1px solid #eef2f0;
          border-radius: 16px;
          padding: 1.25rem 0.95rem 1.3rem;
          text-align: center;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sgt-key-icon {
          width: 46px;
          height: 46px;
          margin: 0 auto 0.85rem;
          border-radius: 50%;
          background: #e8f8ee;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sgt-key-card h4 {
          margin: 0 0 0.4rem;
          font-size: 0.9rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
        }

        .sgt-key-card p {
          margin: 0;
          font-size: 0.78rem;
          line-height: 1.5;
          color: #64748b;
        }

        /* BOTTOM */
        .sgt-bottom {
          display: grid;
          grid-template-columns: 0.95fr 1.15fr;
          gap: 2rem;
          align-items: center;
          padding: 1rem 0 1rem;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .sgt-bottom.show {
          opacity: 1;
          transform: translateY(0);
        }

        .sgt-bottom-image {
          border-radius: 22px;
          overflow: hidden;
          min-height: 280px;
          box-shadow: 0 14px 36px rgba(15, 23, 42, 0.1);
        }

        .sgt-bottom-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          min-height: 280px;
        }

        .sgt-bottom-title {
          margin: 0 0 0.85rem;
          font-size: clamp(1.45rem, 2.5vw, 1.9rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
        }

        .sgt-bottom-content > p {
          margin: 0 0 1.4rem;
          font-size: 0.98rem;
          line-height: 1.7;
          color: #64748b;
        }

        .sgt-national-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.9rem 1.1rem;
        }

        .sgt-national-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .sgt-national-icon {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 50%;
          background: #e8f8ee;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sgt-national-item span {
          font-size: 0.88rem;
          font-weight: 600;
          color: #334155;
          line-height: 1.35;
        }

        @media (max-width: 1000px) {
          .sgt-top {
            grid-template-columns: 1fr;
          }

          .sgt-top-image {
            min-height: 240px;
            max-height: 300px;
          }

          .sgt-key-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .sgt-bottom {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .sgt-tax-grid {
            grid-template-columns: 1fr;
          }

          .sgt-key-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .sgt-national-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .sgt-key-grid {
            grid-template-columns: 1fr;
          }

          .sgt-top {
            padding-top: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityGovernmentTax;
