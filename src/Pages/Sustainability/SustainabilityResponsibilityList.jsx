import React, { useEffect, useState, useRef } from "react";
import {
  Scale,
  Package,
  Leaf,
  Factory,
  Truck,
  UserCheck,
  HeartHandshake,
  Handshake,
  Sprout,
  FlaskConical,
  BadgeCheck,
  Globe2,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import treeImg from "../../assets/sunrise.jpg";

const sections = [
  {
    icon: <Scale size={22} />,
    title: "Responsible Business Practices",
    paragraphs: [
      "At Yanet Industrial PLC, integrity is the foundation of how we trade, source, and grow. We conduct business with honesty and transparency, ensuring every commercial relationship is built on clear expectations and fair dealing.",
      "We comply with applicable laws and regulations in Ethiopia and in the markets we serve, and we maintain accurate documentation and reporting across our operations. Our approach rejects corruption and bribery, prioritizes ethical decision-making, and respects international trade requirements so partners can work with us with confidence.",
      "From responsible sourcing choices to transparent commercial practices, we aim to create long-term value without compromising standards.",
    ],
  },
  {
    icon: <Package size={22} />,
    title: "Product Responsibility",
    paragraphs: [
      "Because we supply both agricultural commodities and industrial chemicals, product responsibility is central to our reputation. We focus on consistent quality, product safety, and clear information so customers receive materials they can rely on in production and trade.",
      "For chemicals, this includes proper labeling, packaging, storage, handling guidance, and the availability of Safety Data Sheets (SDS). For agricultural products, it means careful grading, cleaning, and preparation supported by batch and lot traceability, documentation, and certification where required.",
      "We also support customers with practical technical information and responsive communication, helping them use and receive products safely and efficiently from order through delivery.",
    ],
  },
  {
    icon: <Leaf size={22} />,
    title: "Environmental Responsibility",
    paragraphs: [
      "We recognize that trade and industrial activity carry environmental responsibilities. Our approach prioritizes efficient use of resources, reduced waste, and pollution prevention across operations, storage, and logistics.",
      "Where we handle chemicals, we emphasize controlled storage and responsible waste practices. Across the business, we work to improve energy efficiency, conserve water, and choose packaging and transport options that reduce unnecessary impact where practical.",
      "Environmental compliance is treated as a continuous process, not a one-time checkpoint. We aim to improve manufacturing and operational practices over time so growth remains aligned with stewardship of natural resources.",
    ],
  },
  {
    icon: <Factory size={22} />,
    title: "Responsible Manufacturing",
    paragraphs: [
      "Our manufacturing activities are guided by safety, quality control, and disciplined process management. We focus on safe production methods, responsible chemical handling, and workplace practices that protect people and product integrity.",
      "Facilities and equipment are managed to support reliable output, while quality assurance and testing help verify that products meet the standards expected by industrial customers. Waste management and resource efficiency are part of everyday production discipline.",
      "Through process improvement and adherence to applicable manufacturing standards, we work to deliver consistent materials while reducing operational risk and unnecessary waste.",
    ],
  },
  {
    icon: <Truck size={22} />,
    title: "Responsible Sourcing & Supply Chain",
    paragraphs: [
      "A dependable supply chain is essential to both export and industrial supply. We work with reliable suppliers, assess quality carefully, and prioritize ethical, transparent procurement practices that support long-term partnerships.",
      "For agricultural commodities, traceability and origin-level inspection are especially important. Products move through a structured flow — from farm and collection to quality inspection, processing or cleaning, storage, documentation, logistics, and finally export to the customer — so quality and accountability are maintained at each stage.",
      "By combining supplier relationships, proper transportation and storage, and clear supply-chain visibility, we help buyers receive consistent materials with fewer disruptions and stronger confidence in source integrity.",
    ],
  },
  {
    icon: <UserCheck size={22} />,
    title: "Employee Responsibility",
    paragraphs: [
      "Our employees are the people who protect quality, safety, and service every day. We are committed to providing a safe and healthy workplace, supported by occupational health practices and a culture of professional respect.",
      "Equal opportunity, skills development, and ongoing training help our teams grow with the business. We encourage professional conduct and a workplace culture where people can contribute with dignity and confidence.",
      "By investing in employee wellbeing and capability, we strengthen both individual opportunity and the reliability of the services we deliver to partners and customers.",
    ],
  },
  {
    icon: <HeartHandshake size={22} />,
    title: "Community Responsibility",
    paragraphs: [
      "Yanet’s role extends beyond commercial transactions. We support local communities by creating employment, working with farmers and suppliers, and contributing to skills and knowledge development connected to our value chains.",
      "Local economic development is strengthened when producers, workers, and service partners participate in stable, fair commercial relationships. We engage as a responsible corporate citizen, aiming for practical impact rather than short-term gestures.",
      "Through community-minded operations, we seek growth that supports livelihoods and reinforces trust where we work.",
    ],
  },
  {
    icon: <Handshake size={22} />,
    title: "Customer Responsibility",
    paragraphs: [
      "Customers — whether local manufacturers or international buyers — depend on reliability. We focus on consistent product quality, dependable supply, transparent product information, and delivery performance that respects commercial timelines.",
      "Responsive service and clear technical documentation help customers plan production and procurement with fewer uncertainties. When concerns arise, we treat them as opportunities to correct issues and improve processes.",
      "Feedback from the market guides continuous improvement, so our supply relationship becomes stronger with experience rather than static over time.",
    ],
  },
  {
    icon: <Sprout size={22} />,
    title: "Agricultural Producer & Farmer Responsibility",
    paragraphs: [
      "Agricultural exports depend on the skill and reliability of producers. We aim to build long-term relationships with farmers and suppliers, supporting quality improvement and proper post-harvest handling from the earliest stages of the chain.",
      "Encouraging traceability and maintaining quality standards from source to destination helps protect both farmer value and buyer confidence. A stable supply relationship also gives producers clearer expectations around quality, timing, and commercial reliability.",
      "By respecting the role of producers in the export chain, we strengthen the link between Ethiopian agricultural strength and international market demand.",
    ],
  },
  {
    icon: <FlaskConical size={22} />,
    title: "Chemical Safety & Stewardship",
    paragraphs: [
      "Industrial chemicals require disciplined stewardship. We emphasize safe handling, appropriate storage conditions, clear hazard identification, and the availability of Safety Data Sheets so users understand product risks and controls.",
      "Proper labeling, safe transportation, spill prevention, and response readiness are treated as core operational responsibilities. Employees involved in chemical handling receive safety-focused training, and regulatory compliance guides day-to-day practice.",
      "Our goal is not only to supply chemicals, but to support responsible use, storage, and disposal practices that protect people, facilities, and the surrounding environment.",
    ],
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "Quality & Compliance",
    paragraphs: [
      "Quality and compliance systems are essential for trust in international trade. We maintain internal quality controls, product inspection processes, and documentation practices that support export and industrial supply requirements.",
      "Where applicable, laboratory testing, certifications, and traceability records help verify that products meet agreed specifications. Regulatory compliance and export documentation are managed carefully so shipments move with fewer administrative risks.",
      "Continuous monitoring and improvement allow us to refine controls over time, strengthening consistency for customers who depend on predictable quality.",
    ],
  },
  {
    icon: <Globe2 size={22} />,
    title: "Trade & Export Responsibility",
    paragraphs: [
      "Cross-border trade carries specific obligations. We work to comply with customs requirements, prepare accurate export documentation, and follow international trade rules that protect both commercial integrity and regulatory standing.",
      "Proper product classification, transparent commercial documents, and shipment traceability support smoother logistics. We also choose logistics partners carefully and respect regulations in destination markets so goods arrive in line with local requirements.",
      "Through disciplined trade practices, we aim to make international supply more reliable for buyers and more accountable as a company.",
    ],
  },
];

const summaryChecks = [
  "Comply with all applicable laws and regulations",
  "Operate with honesty, transparency, and accountability",
  "Ensure health, safety, and well-being for all employees",
  "Source responsibly and support ethical supply chains",
  "Reduce our environmental footprint and promote resource efficiency",
  "Support local communities and promote inclusive growth",
  "Respect human rights and promote diversity and inclusion",
  "Continuously improve our sustainability performance and reporting",
];

const SustainabilityResponsibilityList = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="srl-section" ref={sectionRef}>
      <div className="srl-container">
        <div className={`srl-header ${visible ? "show" : ""}`}>
          <span className="srl-badge">OUR RESPONSIBILITIES</span>
          <h2 className="srl-title">
            Responsibility Across <span className="highlight">Every Area</span>
          </h2>
          <p className="srl-intro">
            Yanet Industrial PLC applies clear standards across business
            conduct, products, people, environment, and international trade so
            growth remains accountable, practical, and sustainable.
          </p>
        </div>

        <div className={`srl-list ${visible ? "show" : ""}`}>
          {sections.map((sec, i) => (
            <article
              key={sec.title}
              className="srl-block"
              style={{
                transitionDelay: visible ? `${0.05 + i * 0.04}s` : "0s",
              }}
            >
              <div className="srl-block-head">
                <div className="srl-icon">{sec.icon}</div>
                <h3>{sec.title}</h3>
              </div>
              <div className="srl-copy">
                {sec.paragraphs.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Final design block */}
        <div className={`srl-final ${visible ? "show" : ""}`}>
          <div className="srl-commitments">
            <span className="srl-badge">OUR RESPONSIBILITIES</span>
            <h3 className="srl-commit-title">
              Our <span className="highlight">Responsibilities</span>
            </h3>
            <div className="srl-check-grid">
              {summaryChecks.map((item) => (
                <div key={item} className="srl-check-item">
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="srl-cta-card"
            style={{
              backgroundImage: `linear-gradient(115deg, rgba(10,48,28,0.94) 0%, rgba(15,61,40,0.88) 55%, rgba(15,61,40,0.72) 100%), url('${treeImg}')`,
            }}
          >
            <h3>
              Together,
              <br />
              <span>We Make a Difference</span>
            </h3>
            <p>
              Our responsibilities guide our decisions today and shape a better,
              more sustainable future for generations to come.
            </p>
            <div className="srl-cta-pillars">
              <div>
                <div className="srl-cta-icon">
                  <Users size={18} />
                </div>
                <strong>For People</strong>
                <span>With care and respect</span>
              </div>
              <div>
                <div className="srl-cta-icon">
                  <Leaf size={18} />
                </div>
                <strong>For Planet</strong>
                <span>With action and responsibility</span>
              </div>
              <div>
                <div className="srl-cta-icon">
                  <Sparkles size={18} />
                </div>
                <strong>For Prosperity</strong>
                <span>With integrity and partnership</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .srl-section {
          padding: 5rem 1.5rem 5.5rem;
          background: #f7faf8;
        }

        .srl-container {
          max-width: 980px;
          margin: 0 auto;
        }

        .srl-header {
          margin-bottom: 2.4rem;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .srl-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .srl-badge {
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

        .srl-title {
          margin: 0 0 0.7rem;
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 800;
          color: #0f172a;
        }

        .srl-title .highlight,
        .srl-commit-title .highlight {
          color: #16a34a;
        }

        .srl-intro {
          margin: 0;
          max-width: 640px;
          font-size: 1.02rem;
          line-height: 1.75;
          color: #64748b;
        }

        .srl-list {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          margin-bottom: 2.75rem;
        }

        .srl-block {
          background: #ffffff;
          border: 1px solid #eef2f0;
          border-radius: 20px;
          padding: 1.55rem 1.55rem 1.45rem;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .srl-list.show .srl-block {
          opacity: 1;
          transform: translateY(0);
        }

        .srl-block-head {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 0.95rem;
        }

        .srl-icon {
          width: 46px;
          height: 46px;
          min-width: 46px;
          border-radius: 14px;
          background: #e8f8ee;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .srl-block h3 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f172a;
        }

        .srl-copy p {
          margin: 0 0 0.85rem;
          font-size: 0.98rem;
          line-height: 1.75;
          color: #475569;
        }

        .srl-copy p:last-child {
          margin-bottom: 0;
        }

        .srl-final {
          display: grid;
          grid-template-columns: 1.1fr 0.95fr;
          gap: 1.5rem;
          align-items: stretch;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.12s;
        }

        .srl-final.show {
          opacity: 1;
          transform: translateY(0);
        }

        .srl-commitments {
          background: #ffffff;
          border: 1px solid #eef2f0;
          border-radius: 22px;
          padding: 1.7rem 1.6rem 1.8rem;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
        }

        .srl-commit-title {
          margin: 0 0 1.2rem;
          font-size: 1.55rem;
          font-weight: 800;
          color: #0f172a;
        }

        .srl-check-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem 1.2rem;
        }

        .srl-check-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.9rem;
          line-height: 1.45;
          color: #334155;
        }

        .srl-check-item svg {
          color: #16a34a;
          margin-top: 0.1rem;
          flex-shrink: 0;
        }

        .srl-cta-card {
          border-radius: 22px;
          padding: 2rem 1.7rem;
          color: #ffffff;
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 16px 40px rgba(15, 61, 40, 0.22);
          min-height: 320px;
        }

        .srl-cta-card h3 {
          margin: 0 0 0.75rem;
          font-size: 1.55rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .srl-cta-card h3 span {
          color: #86efac;
        }

        .srl-cta-card > p {
          margin: 0 0 1.5rem;
          max-width: 340px;
          font-size: 0.95rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.9);
        }

        .srl-cta-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .srl-cta-pillars > div {
          text-align: center;
        }

        .srl-cta-icon {
          width: 40px;
          height: 40px;
          margin: 0 auto 0.45rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          color: #bbf7d0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .srl-cta-pillars strong {
          display: block;
          font-size: 0.85rem;
          margin-bottom: 0.15rem;
        }

        .srl-cta-pillars span {
          display: block;
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.35;
        }

        @media (max-width: 900px) {
          .srl-final {
            grid-template-columns: 1fr;
          }

          .srl-check-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 520px) {
          .srl-section {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .srl-cta-pillars {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityResponsibilityList;
