import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/yanet_logo-PNG.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top curve */}
      <div className="footer-curve">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 L0,40 C200,10 400,70 720,35 C1040,0 1240,55 1440,25 L1440,80 Z"
            fill="#1b5e20"
          />
        </svg>
      </div>

      <div className="footer-body">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand + About */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <img src={logo} alt="Yanet Industrial" />
              </Link>
              <p>
                Ethiopian import, export, and industrial sourcing partner
                connecting agricultural producers, manufacturers, and global
                buyers with dependable trade execution.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/business">Business</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/global-network">Global Network</Link>
                </li>
                <li>
                  <Link to="/sustainability">Sustainability</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col footer-contact">
              <h4>Contact</h4>
              <ul>
                <li>
                  <MapPin size={16} />
                  <span>Finfinne Building, Meskel Square, Addis Ababa</span>
                </li>
                <li>
                  <Phone size={16} />
                  <span>+251 115 500 718</span>
                  <span>|</span>
                  <span>+251 115 540 670</span>
                </li>
                <li>
                  <Mail size={16} />
                  <span>info@yanetgroup.com.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Yanet Group. All rights reserved.
            </p>
            <p>Established 2002 · Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          margin-top: 2rem;
        }

        /* Curved top edge */
        .footer-curve {
          line-height: 0;
          background: transparent;
        }

        .footer-curve svg {
          width: 100%;
          height: 70px;
          display: block;
        }

        .footer-body {
          background: linear-gradient(180deg, #1b5e20 0%, #14532d 100%);
          color: #e8f5e9;
          padding: 1.5rem 1.5rem 2rem;
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.2fr;
          gap: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        /* Brand */
        .footer-logo {
          display: inline-block;
          margin-bottom: 0.9rem;
        }

        .footer-logo img {
          height: 48px;
          width: auto;
          object-fit: contain;
          filter: brightness(1.1);
        }

        .brand-label {
          margin: 0 0 0.5rem;
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .footer-brand p {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.7;
          color: rgba(232, 245, 233, 0.85);
          max-width: 320px;
        }

        /* Columns */
        .footer-col h4 {
          margin: 0 0 1rem;
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }

        .footer-col ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .footer-col a {
          color: rgba(232, 245, 233, 0.85);
          text-decoration: none;
          font-size: 0.92rem;
          transition: color 0.2s ease;
        }

        .footer-col a:hover {
          color: #ffffff;
        }

        .footer-col li {
          font-size: 0.92rem;
          color: rgba(232, 245, 233, 0.85);
        }

        /* Contact rows */
        .footer-contact ul li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
        }

        .footer-contact ul li svg {
          flex-shrink: 0;
          margin-top: 3px;
          color: #86efac;
        }

        .social-links {
          display: flex;
          gap: 0.6rem;
          margin-top: 1.2rem;
        }

        .social-links a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .social-links a:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        /* Bottom bar */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-top: 1.3rem;
        }

        .footer-bottom p {
          margin: 0;
          font-size: 0.85rem;
          color: rgba(232, 245, 233, 0.65);
        }

        @media (max-width: 800px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-brand p {
            max-width: 100%;
          }

          .footer-curve svg {
            height: 50px;
          }
        }

        @media (max-width: 500px) {
          .footer-body {
            padding: 1.2rem 1.2rem 1.8rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
