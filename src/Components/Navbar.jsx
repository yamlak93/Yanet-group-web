import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/yanet_logo-PNG.png";

const navItems = [
  {
    label: "About",
    path: "/about",
    submenu: [
      { label: "Our Story", path: "/about/our-story" },
      { label: "Why Us", path: "/about/why-us" },
    ],
  },
  {
    label: "Business",
    path: "/business",
    submenu: [
      {
        label: "Export Agricultural & Commodities",
        path: "/business/export",
      },
      {
        label: "Import Chemical & Industrial Materials",
        path: "/business/import",
      },
      {
        label: "Manufacturing Chemicals",
        path: "/business/manufacturing",
      },
    ],
  },
  {
    label: "Products",
    path: "/products",
    submenu: [
      { label: "Agricultural", path: "/products/agricultural" },
      { label: "Chemicals", path: "/products/chemicals" },
    ],
  },
  {
    label: "Global Network",
    path: "/global-network",
    submenu: [
      { label: "Global Reach", path: "/global-network/reach" },
      { label: "Sourcing Network", path: "/global-network/sourcing" },
      { label: "Partners", path: "/global-network/partners" },
    ],
  },
  {
    label: "Sustainability",
    path: "/sustainability",
    submenu: [
      { label: "Our Commitment", path: "/sustainability/commitment" },
      { label: "Responsibilities", path: "/sustainability/responsibilities" },
      { label: "Environment", path: "/sustainability/environment" },
      { label: "Governmental", path: "/sustainability/governmental" },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
    submenu: null,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenMobile(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
        setOpenMobile(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleMobileSub = (label) => {
    setOpenMobile((prev) => (prev === label ? null : label));
  };

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header
      className={`navbar-wrap ${scrolled ? "scrolled" : ""}`}
      ref={navRef}
    >
      <nav className="navbar">
        <Link to="/" className="logo-badge" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Yanet Industrial" className="logo-img" />
        </Link>

        <ul className="nav-menu desktop">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`nav-item ${item.submenu ? "has-sub" : ""} ${
                isActive(item.path) ? "active" : ""
              }`}
            >
              <Link to={item.path} className="nav-link">
                {item.label}
                {item.submenu && <ChevronDown size={14} className="chevron" />}
              </Link>

              {item.submenu && (
                <ul className="dropdown">
                  {item.submenu.map((sub) => (
                    <li key={sub.path}>
                      <Link
                        to={sub.path}
                        className={`dropdown-link ${
                          location.pathname === sub.path ? "active" : ""
                        }`}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="mobile-list">
          {navItems.map((item) => (
            <li key={item.label} className="mobile-item">
              <div className="mobile-row">
                <Link
                  to={item.path}
                  className={`mobile-link ${
                    isActive(item.path) ? "active" : ""
                  }`}
                  onClick={() => {
                    if (!item.submenu) setIsOpen(false);
                  }}
                >
                  {item.label}
                </Link>

                {item.submenu && (
                  <button
                    type="button"
                    className={`sub-toggle ${
                      openMobile === item.label ? "open" : ""
                    }`}
                    onClick={() => toggleMobileSub(item.label)}
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <ChevronDown size={18} />
                  </button>
                )}
              </div>

              {item.submenu && (
                <ul
                  className={`mobile-sub ${
                    openMobile === item.label ? "open" : ""
                  }`}
                >
                  {item.submenu.map((sub) => (
                    <li key={sub.path}>
                      <Link
                        to={sub.path}
                        className={`mobile-sub-link ${
                          location.pathname === sub.path ? "active" : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .navbar-wrap {
          position: fixed;
          top: 16px;
          left: 16px;
          right: 16px;
          z-index: 1000;
          transition: top 0.3s ease;
        }

        .navbar-wrap.scrolled {
          top: 10px;
        }

        .navbar {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 0.4rem 1.1rem 0.4rem 0.4rem;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.55);
          border-radius: 60px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .navbar-wrap.scrolled .navbar {
          background: rgba(255, 255, 255, 0.63);
          box-shadow: 0 10px 36px rgba(0, 0, 0, 0.1);
        }

        .logo-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          flex-shrink: 0;
          background: linear-gradient(145deg, #f0fdf4 0%, #e8f5e9 50%, #dcfce7 100%);
          border-radius: 40px;
          padding: 0.35rem 1.1rem 0.35rem 0.7rem;
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            0 2px 8px rgba(22, 163, 74, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .logo-badge:hover {
          transform: scale(1.03);
          box-shadow:
            0 4px 14px rgba(22, 163, 74, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .logo-img {
          height: 40px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .nav-menu.desktop {
          display: flex;
          align-items: center;
          gap: 0.15rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.55rem 0.95rem;
          font-size: 0.92rem;
          font-weight: 550;
          color: #1e293b;
          text-decoration: none;
          border-radius: 40px;
          transition: color 0.2s ease, background 0.2s ease;
          white-space: nowrap;
        }

        .nav-link:hover,
        .nav-item.active > .nav-link {
          color: #15803d;
          background: rgba(22, 163, 74, 0.08);
        }

        .chevron {
          transition: transform 0.25s ease;
          opacity: 0.7;
        }

        .nav-item.has-sub:hover .chevron {
          transform: rotate(180deg);
        }

        /* ===== FIXED DROPDOWN – no gap, stays open while moving to it ===== */
        .dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(6px);
          min-width: 260px;
          list-style: none;
          margin: 0;
          /* invisible bridge so mouse can travel from link → menu */
          padding: 12px 0.5rem 0.5rem;
          background: transparent;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
          z-index: 50;
        }

        /* visible panel inside the bridge */
        .dropdown::before {
          content: "";
          position: absolute;
          top: 12px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
          z-index: -1;
        }

        .nav-item.has-sub:hover .dropdown {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-link {
          display: block;
          padding: 0.7rem 1rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: #334155;
          text-decoration: none;
          border-radius: 10px;
          transition: background 0.2s ease, color 0.2s ease;
          position: relative;
          z-index: 1;
        }

        .dropdown-link:hover,
        .dropdown-link.active {
          background: rgba(22, 163, 74, 0.1);
          color: #15803d;
        }

        .hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border: none;
          background: rgba(22, 163, 74, 0.1);
          color: #15803d;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .hamburger:hover {
          background: rgba(22, 163, 74, 0.18);
        }

        .mobile-menu {
          max-width: 1200px;
          margin: 0.6rem auto 0;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 24px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease;
        }

        .mobile-menu.open {
          max-height: 80vh;
          opacity: 1;
          overflow-y: auto;
          padding: 0.6rem 0;
        }

        .mobile-list {
          list-style: none;
          margin: 0;
          padding: 0.4rem 0.8rem;
        }

        .mobile-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .mobile-item:last-child {
          border-bottom: none;
        }

        .mobile-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .mobile-link {
          flex: 1;
          padding: 0.95rem 0.6rem;
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .mobile-link.active,
        .mobile-link:hover {
          color: #15803d;
        }

        .sub-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: none;
          background: rgba(22, 163, 74, 0.08);
          color: #15803d;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.25s ease, background 0.2s ease;
          flex-shrink: 0;
        }

        .sub-toggle.open {
          transform: rotate(180deg);
          background: rgba(22, 163, 74, 0.16);
        }

        .mobile-sub {
          list-style: none;
          margin: 0;
          padding: 0 0.4rem 0.5rem 1rem;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.35s ease, opacity 0.25s ease;
        }

        .mobile-sub.open {
          max-height: 400px;
          opacity: 1;
        }

        .mobile-sub-link {
          display: block;
          padding: 0.65rem 0.8rem;
          font-size: 0.92rem;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          border-radius: 10px;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .mobile-sub-link:hover,
        .mobile-sub-link.active {
          background: rgba(22, 163, 74, 0.1);
          color: #15803d;
        }

        @media (max-width: 980px) {
          .nav-menu.desktop {
            display: none;
          }

          .hamburger {
            display: flex;
          }
        }

        @media (max-width: 520px) {
          .navbar-wrap {
            top: 10px;
            left: 10px;
            right: 10px;
          }

          .logo-img {
            height: 34px;
          }

          .logo-badge {
            padding: 0.3rem 0.9rem 0.3rem 0.55rem;
          }

          .navbar {
            padding: 0.35rem 0.75rem 0.35rem 0.35rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
