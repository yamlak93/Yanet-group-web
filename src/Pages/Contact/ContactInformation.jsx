import React, { useEffect, useState, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Copy,
  Check,
  Send,
  Headphones,
  Globe2,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  XCircle,
  X,
} from "lucide-react";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.572948113598!2d38.75955707426787!3d9.011383989265985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8500467df86d%3A0xce3ffe6d4d71aec6!2sFinfinne%20Building%20%7C%20Meskel%20Square!5e0!3m2!1sen!2set!4v1785692321290!5m2!1sen!2set";

const ContactInformation = () => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(null);
  const [status, setStatus] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
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

  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    const t = setTimeout(() => setStatus(null), 4500);
    return () => clearTimeout(t);
  }, [status]);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (form.email && form.email.includes("@")) resolve();
          else reject(new Error("Invalid"));
        }, 1200);
      });
      setStatus("success");
      setForm({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const features = [
    {
      icon: <Headphones size={22} />,
      title: "Quick Response",
      desc: "We aim to respond to all inquiries within 24 hours.",
    },
    {
      icon: <Globe2 size={22} />,
      title: "Global Connections",
      desc: "Connecting Ethiopia to global markets with reliability.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Trusted Partner",
      desc: "Over two decades of experience you can rely on.",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Grow Together",
      desc: "Building long-term partnerships for sustainable growth.",
    },
  ];

  return (
    <section className="ci-section" ref={sectionRef} id="contact-form">
      <div
        className={`ci-toast ${status === "success" || status === "error" ? "show" : ""} ${status || ""}`}
        role="status"
        aria-live="polite"
      >
        {status === "success" && (
          <>
            <CheckCircle2 size={22} />
            <div>
              <strong>Message sent</strong>
              <span>Thank you! We’ll get back to you soon.</span>
            </div>
          </>
        )}
        {status === "error" && (
          <>
            <XCircle size={22} />
            <div>
              <strong>Couldn’t send</strong>
              <span>Please check your details and try again.</span>
            </div>
          </>
        )}
        <button
          type="button"
          className="ci-toast-close"
          onClick={() => setStatus(null)}
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>

      <div className="ci-container">
        <div className={`ci-main ${visible ? "show" : ""}`}>
          {/* LEFT */}
          <div className="ci-left">
            <span className="ci-badge">Get In Touch</span>
            <h2 className="ci-title">
              We’d Love to Hear
              <br />
              From You
            </h2>
            <div className="ci-rule" />
            <p className="ci-lead">
              Whether you have a question about our business, partnerships,
              products or services, our team is here to assist you.
            </p>

            <ul className="ci-details">
              <li>
                <div className="ci-icon">
                  <MapPin size={16} />
                </div>
                <div className="ci-detail-body">
                  <strong>Our Office</strong>
                  <span>Addis Ababa, Ethiopia</span>
                  <span>Finfinne Building, Meskel Square</span>
                  <span>Bole Subcity, Woreda 03</span>
                  <span>House No. 1035</span>
                </div>
              </li>

              <li>
                <div className="ci-icon">
                  <Phone size={16} />
                </div>
                <div className="ci-detail-body">
                  <strong>Phone</strong>
                  <div className="ci-stack">
                    <button
                      type="button"
                      className="ci-copy-line"
                      onClick={() => handleCopy("+251 11 123 4567", "g-phone")}
                    >
                      +251 11 123 4567
                      {copied === "g-phone" ? (
                        <Check size={13} />
                      ) : (
                        <Copy size={13} />
                      )}
                    </button>
                    <button
                      type="button"
                      className="ci-copy-line"
                      onClick={() => handleCopy("+251 91 987 6543", "s-phone")}
                    >
                      +251 91 987 6543
                      {copied === "s-phone" ? (
                        <Check size={13} />
                      ) : (
                        <Copy size={13} />
                      )}
                    </button>
                    <button
                      type="button"
                      className="ci-copy-line"
                      onClick={() => handleCopy("+251 91 234 5678", "s-mobile")}
                    >
                      +251 91 234 5678
                      {copied === "s-mobile" ? (
                        <Check size={13} />
                      ) : (
                        <Copy size={13} />
                      )}
                    </button>
                  </div>
                </div>
              </li>

              <li>
                <div className="ci-icon">
                  <Mail size={16} />
                </div>
                <div className="ci-detail-body">
                  <strong>Email</strong>
                  <div className="ci-stack">
                    <button
                      type="button"
                      className="ci-copy-line"
                      onClick={() =>
                        handleCopy("info@yanetgroup.com", "g-email")
                      }
                    >
                      info@yanetgroup.com
                      {copied === "g-email" ? (
                        <Check size={13} />
                      ) : (
                        <Copy size={13} />
                      )}
                    </button>
                    <button
                      type="button"
                      className="ci-copy-line"
                      onClick={() =>
                        handleCopy("chemical.sales@yanetgroup.com", "s-email")
                      }
                    >
                      chemical.sales@yanetgroup.com
                      {copied === "s-email" ? (
                        <Check size={13} />
                      ) : (
                        <Copy size={13} />
                      )}
                    </button>
                    <button
                      type="button"
                      className="ci-copy-line"
                      onClick={() =>
                        handleCopy("export.sales@yanetgroup.com", "es-email")
                      }
                    >
                      export.sales@yanetgroup.com
                      {copied === "es-email" ? (
                        <Check size={13} />
                      ) : (
                        <Copy size={13} />
                      )}
                    </button>
                    <button
                      type="button"
                      className="ci-copy-line"
                      onClick={() =>
                        handleCopy("export@yanetgroup.com", "s-export")
                      }
                    >
                      export@yanetgroup.com
                      {copied === "s-export" ? (
                        <Check size={13} />
                      ) : (
                        <Copy size={13} />
                      )}
                    </button>
                  </div>
                </div>
              </li>

              <li>
                <div className="ci-icon">
                  <Clock size={16} />
                </div>
                <div className="ci-detail-body">
                  <strong>Business Hours</strong>
                  <span>Monday – Friday</span>
                  <span>8:30 AM – 5:30 PM (EAT)</span>
                  <span>Saturday: 8:30 AM – 12:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="ci-right">
            <form className="ci-form" onSubmit={onSubmit}>
              <h3>Send Us a Message</h3>
              <div className="ci-form-rule" />

              <div className="ci-row">
                <div className="ci-field">
                  <input
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={onChange}
                    placeholder="Full Name *"
                    disabled={status === "loading"}
                  />
                </div>
                <div className="ci-field">
                  <input
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="Company Name"
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              <div className="ci-row">
                <div className="ci-field">
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="Email Address *"
                    disabled={status === "loading"}
                  />
                </div>
                <div className="ci-field">
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="Phone Number"
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              <div className="ci-field">
                <input
                  name="subject"
                  required
                  value={form.subject}
                  onChange={onChange}
                  placeholder="Subject *"
                  disabled={status === "loading"}
                />
              </div>

              <div className="ci-field">
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Your Message *"
                  disabled={status === "loading"}
                />
              </div>

              <button
                type="submit"
                className={`ci-submit ${status === "loading" ? "loading" : ""}`}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span className="ci-spinner" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
              </button>
            </form>

            <div className="ci-map" id="locations">
              <iframe
                title="Yanet Group Location"
                src={MAP_SRC}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div className="ci-map-card">
                <strong>Yanet Group PLC</strong>
                <p>
                  Addis Ababa, Ethiopia
                  <br />
                  Finfinne Building, Meskel Square
                  <br />
                  Bole Subcity, Woreda 03
                  <br />
                  House No. 1035
                </p>
                <a
                  href="https://maps.google.com/?q=Finfinne+Building+Meskel+Square+Addis+Ababa"
                  target="_blank"
                  rel="noreferrer"
                  className="ci-map-link"
                >
                  View on Google Maps <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`ci-features ${visible ? "show" : ""}`}>
          {features.map((f) => (
            <div key={f.title} className="ci-feature">
              <div className="ci-feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ci-section {
          position: relative;
          padding: 4.25rem 1.5rem 4.75rem;
          background: #fafbfc;
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        .ci-toast {
          position: fixed;
          top: 1.35rem;
          right: 1.35rem;
          z-index: 1000;
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          min-width: 270px;
          max-width: 340px;
          padding: 0.95rem 1rem;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 14px 36px rgba(15, 23, 42, 0.12);
          opacity: 0;
          transform: translateY(-14px) scale(0.96);
          pointer-events: none;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ci-toast.show {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .ci-toast.success { border-left: 4px solid #16a34a; }
        .ci-toast.error { border-left: 4px solid #dc2626; }

        .ci-toast strong {
          display: block;
          font-size: 0.9rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.12rem;
        }

        .ci-toast span {
          display: block;
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.4;
        }

        .ci-toast-close {
          margin-left: auto;
          border: none;
          background: #f1f5f9;
          border-radius: 7px;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
          flex-shrink: 0;
        }

        .ci-container {
          max-width: 1120px;
          margin: 0 auto;
        }

        .ci-main {
          display: grid;
          grid-template-columns: 0.85fr 1.2fr;
          gap: 2.5rem;
          align-items: start;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ci-main.show {
          opacity: 1;
          transform: translateY(0);
        }

        .ci-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: none;
          color: #16a34a;
          margin-bottom: 0.55rem;
        }

        .ci-title {
          margin: 0 0 0.65rem;
          font-size: clamp(1.65rem, 2.8vw, 2.05rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          letter-spacing: -0.3px;
        }

        .ci-rule {
          width: 32px;
          height: 2.5px;
          background: #16a34a;
          border-radius: 2px;
          margin-bottom: 0.9rem;
        }

        .ci-lead {
          margin: 0 0 1.6rem;
          font-size: 0.9rem;
          line-height: 1.7;
          color: #64748b;
          max-width: 340px;
        }

        .ci-details {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .ci-details li {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .ci-icon {
          width: 34px;
          height: 34px;
          min-width: 34px;
          border-radius: 50%;
          background: #16a34a;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ci-detail-body {
          display: flex;
          flex-direction: column;
          gap: 0.12rem;
        }

        .ci-details strong {
          display: block;
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.12rem;
        }

        .ci-details span {
          display: block;
          font-size: 0.84rem;
          color: #64748b;
          line-height: 1.45;
        }

        .ci-stack {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.28rem;
        }

        .ci-copy-line {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          border: none;
          background: none;
          padding: 0;
          font-size: 0.84rem;
          color: #475569;
          cursor: pointer;
        }

        .ci-copy-line:hover {
          color: #16a34a;
        }

        /* Form */
        .ci-form {
          background: #fff;
          border: 1px solid #eef1f4;
          border-radius: 16px;
          padding: 1.5rem 1.4rem 1.55rem;
          box-shadow: 0 8px 28px rgba(15, 23, 42, 0.04);
          margin-bottom: 1.15rem;
        }

        .ci-form h3 {
          margin: 0 0 0.4rem;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
        }

        .ci-form-rule {
          width: 28px;
          height: 2.5px;
          background: #16a34a;
          border-radius: 2px;
          margin-bottom: 1.1rem;
        }

        .ci-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .ci-field {
          margin-bottom: 0.75rem;
        }

        .ci-field input,
        .ci-field textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #e5e9ef;
          border-radius: 8px;
          padding: 0.7rem 0.85rem;
          font-size: 0.88rem;
          color: #0f172a;
          background: #fff;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s ease;
        }

        .ci-field input::placeholder,
        .ci-field textarea::placeholder {
          color: #94a3b8;
        }

        .ci-field input:focus,
        .ci-field textarea:focus {
          border-color: #16a34a;
        }

        .ci-field textarea {
          resize: vertical;
          min-height: 110px;
        }

        .ci-submit {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.25rem;
          padding: 0.72rem 1.25rem;
          border: none;
          border-radius: 8px;
          background: #16a34a;
          color: #fff;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .ci-submit:hover:not(:disabled) {
          background: #15803d;
        }

        .ci-submit:disabled {
          cursor: wait;
        }

        .ci-spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: ciSpin 0.7s linear infinite;
        }

        @keyframes ciSpin {
          to { transform: rotate(360deg); }
        }

        .ci-map {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          height: 240px;
          border: 1px solid #eef1f4;
        }

        .ci-map iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        .ci-map-card {
          position: absolute;
          right: 0.9rem;
          top: 50%;
          transform: translateY(-50%);
          width: min(200px, 46%);
          background: #fff;
          border-radius: 10px;
          padding: 0.9rem 0.95rem;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);
        }

        .ci-map-card strong {
          display: block;
          font-size: 0.88rem;
          color: #0f172a;
          margin-bottom: 0.3rem;
        }

        .ci-map-card p {
          margin: 0 0 0.45rem;
          font-size: 0.78rem;
          line-height: 1.45;
          color: #64748b;
        }

        .ci-map-link {
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: #16a34a;
          text-decoration: none;
        }

        .ci-features {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 2.75rem;
          padding-top: 1.85rem;
          border-top: 1px solid #eef2f0;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .ci-features.show {
          opacity: 1;
          transform: translateY(0);
        }

        .ci-feature {
          text-align: center;
          padding: 0.4rem 0.6rem;
        }

        .ci-feature-icon {
          color: #16a34a;
          margin-bottom: 0.5rem;
          display: flex;
          justify-content: center;
        }

        .ci-feature h4 {
          margin: 0 0 0.3rem;
          font-size: 0.92rem;
          font-weight: 700;
          color: #0f172a;
        }

        .ci-feature p {
          margin: 0;
          font-size: 0.82rem;
          line-height: 1.5;
          color: #64748b;
        }

        @media (max-width: 960px) {
          .ci-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .ci-map-card {
            position: static;
            transform: none;
            width: auto;
            margin: 0.7rem;
          }

          .ci-map {
            height: auto;
            display: flex;
            flex-direction: column;
          }

          .ci-map iframe {
            height: 210px;
          }

          .ci-features {
            grid-template-columns: repeat(2, 1fr);
          }

          .ci-toast {
            left: 1rem;
            right: 1rem;
            max-width: none;
          }
        }

        @media (max-width: 560px) {
          .ci-section {
            padding: 3.25rem 1.15rem 3.75rem;
          }

          .ci-row {
            grid-template-columns: 1fr;
          }

          .ci-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactInformation;
