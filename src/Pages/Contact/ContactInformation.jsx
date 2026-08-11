import React, { useEffect, useState, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Copy,
  Check,
  Building2,
  Briefcase,
} from "lucide-react";

const ContactInformation = () => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const general = [
    {
      id: "g-address",
      icon: <MapPin size={20} />,
      label: "Address",
      value: "Finfinne Building, Meskel Square, Addis Ababa, Ethiopia",
      copyable: false,
    },
    {
      id: "g-phone",
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+251 11 123 4567",
      copyable: true,
    },
    {
      id: "g-email",
      icon: <Mail size={20} />,
      label: "Email",
      value: "info@yanetindustrial.com",
      copyable: true,
    },
    {
      id: "g-hours",
      icon: <Clock size={20} />,
      label: "Working Hours",
      value: "Mon – Fri: 8:30 AM – 5:30 PM",
      copyable: false,
    },
    {
      id: "gs-hours",
      icon: <Clock size={20} />,
      label: "",
      value: "Sat: 8:30 AM – 12:00 PM",
      copyable: false,
    },
  ];

  const sales = [
    {
      id: "s-phone",
      icon: <Phone size={20} />,
      label: "Chemical Sales Phone",
      value: "+251 91 987 6543",
      copyable: true,
    },
    {
      id: "s-mobile",
      icon: <Phone size={20} />,
      label: "Agricultural products Sales Phone",
      value: "+251 91 234 5678",
      copyable: true,
    },
    {
      id: "s-email",
      icon: <Mail size={20} />,
      label: "Chemical Sales Email",
      value: "chemical.sales@yanetindustrial.com",
      copyable: true,
    },
    {
      id: "es-email",
      icon: <Mail size={20} />,
      label: "Agricultural Products Sales Email",
      value: "export.sales@yanetindustrial.com",
      copyable: true,
    },
    {
      id: "s-export",
      icon: <Mail size={20} />,
      label: "Export Inquiries",
      value: "export@yanetindustrial.com",
      copyable: true,
    },
  ];

  const InfoRow = ({ item }) => (
    <div className="info-row">
      <div className="info-icon">{item.icon}</div>
      <div className="info-text">
        <span className="info-label">{item.label}</span>
        <span className="info-value">{item.value}</span>
      </div>
      {item.copyable && (
        <button
          type="button"
          className="copy-btn"
          onClick={() => handleCopy(item.value, item.id)}
          aria-label={`Copy ${item.label}`}
        >
          {copied === item.id ? <Check size={16} /> : <Copy size={16} />}
        </button>
      )}
    </div>
  );

  return (
    <section className="contact-info" ref={sectionRef}>
      <div className="ci-container">
        <div className={`ci-header ${visible ? "show" : ""}`}>
          <span className="ci-badge">Contact Details</span>
          <h2 className="ci-title">
            Contact <span className="highlight">Information</span>
          </h2>
          <p className="ci-subtitle">
            Reach our general office or sales team. Tap the copy icon to copy
            phone numbers and emails.
          </p>
        </div>

        <div className={`ci-grid ${visible ? "show" : ""}`}>
          {/* General */}
          <div
            className="ci-card"
            style={{ transitionDelay: visible ? "0.1s" : "0s" }}
          >
            <div className="ci-card-head">
              <div className="ci-card-icon general">
                <Building2 size={22} />
              </div>
              <div>
                <h3>General Contact</h3>
                <p>Office & main inquiries</p>
              </div>
            </div>
            <div className="ci-list">
              {general.map((item) => (
                <InfoRow key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Sales */}
          <div
            className="ci-card"
            style={{ transitionDelay: visible ? "0.22s" : "0s" }}
          >
            <div className="ci-card-head">
              <div className="ci-card-icon sales">
                <Briefcase size={22} />
              </div>
              <div>
                <h3>Sales Contact</h3>
                <p>Quotes, orders & partnerships</p>
              </div>
            </div>
            <div className="ci-list">
              {sales.map((item) => (
                <InfoRow key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div
          className={`ci-map ${visible ? "show" : ""}`}
          style={{ transitionDelay: visible ? "0.35s" : "0s" }}
        >
          <div className="map-card">
            <iframe
              title="Yanet Industrial Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.572948113598!2d38.75955707426787!3d9.011383989265985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8500467df86d%3A0xce3ffe6d4d71aec6!2sFinfinne%20Building%20%7C%20Meskel%20Square!5e0!3m2!1sen!2set!4v1785692321290!5m2!1sen!2set"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>

      <style>{`
        .contact-info {
          padding: 5rem 1.5rem 6rem;
          background: #ffffff;
        }

        .ci-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .ci-header {
          text-align: center;
          margin-bottom: 2.8rem;
          opacity: 0;
          transform: translateY(22px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ci-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .ci-badge {
          display: inline-block;
          background: rgba(46, 125, 50, 0.12);
          color: #1b5e20;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.4rem 1.1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .ci-title {
          margin: 0 0 0.75rem;
          font-size: clamp(1.85rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #0f172a;
        }

        .ci-title .highlight {
          color: #15803d;
        }

        .ci-subtitle {
          margin: 0 auto;
          max-width: 480px;
          font-size: 1rem;
          line-height: 1.65;
          color: #64748b;
        }

        .ci-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.6rem;
          margin-bottom: 2rem;
        }

        .ci-card {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 22px;
          padding: 1.8rem 1.6rem;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.02),
            0 14px 36px rgba(46, 125, 50, 0.08);
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease;
        }

        .ci-grid.show .ci-card {
          opacity: 1;
          transform: translateY(0);
        }

        .ci-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 8px 14px rgba(0, 0, 0, 0.03),
            0 20px 44px rgba(46, 125, 50, 0.12);
        }

        .ci-card-head {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.4rem;
          padding-bottom: 1.1rem;
          border-bottom: 1px solid #eef2ee;
        }

        .ci-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .ci-card-icon.general {
          background: linear-gradient(135deg, #2e7d32, #43a047);
        }

        .ci-card-icon.sales {
          background: linear-gradient(135deg, #1565c0, #42a5f5);
        }

        .ci-card-head h3 {
          margin: 0 0 0.15rem;
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
        }

        .ci-card-head p {
          margin: 0;
          font-size: 0.85rem;
          color: #64748b;
        }

        .ci-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .info-icon {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 10px;
          background: #f0fdf4;
          color: #2e7d32;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-text {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .info-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .info-value {
          font-size: 0.95rem;
          font-weight: 500;
          color: #0f172a;
          word-break: break-word;
        }

        .copy-btn {
          width: 34px;
          height: 34px;
          min-width: 34px;
          border: none;
          border-radius: 8px;
          background: #f0fdf4;
          color: #2e7d32;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .copy-btn:hover {
          background: #16a34a;
          color: white;
        }

        .ci-map {
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ci-map.show {
          opacity: 1;
          transform: translateY(0);
        }

        .map-card {
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid #e8f0e9;
          box-shadow: 0 12px 35px rgba(46, 125, 50, 0.08);
          height: 380px;
        }

        .map-card iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        @media (max-width: 800px) {
          .ci-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 520px) {
          .contact-info {
            padding: 3.5rem 1.2rem 4.5rem;
          }

          .map-card {
            height: 280px;
            border-radius: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactInformation;
