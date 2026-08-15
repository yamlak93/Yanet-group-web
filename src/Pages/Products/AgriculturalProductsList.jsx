import React, { useEffect, useMemo, useState, useRef } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "../../Components/ProductCard";
import productsData from "../../data/ProductsDetail";

// Only agricultural products
const allProducts = productsData.agricultural || [];

const AgriculturalProductsList = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [origin, setOrigin] = useState("All");
  const [mobileFilters, setMobileFilters] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Build filter options from JSON
  const categories = useMemo(() => {
    const set = new Set(allProducts.map((p) => p.category).filter(Boolean));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const origins = useMemo(() => {
    const set = new Set(
      allProducts
        .map((p) => {
          // Normalize "Humera, Ethiopia" → keep full string for filter match
          return p.origin || "";
        })
        .filter(Boolean),
    );
    return ["All", ...Array.from(set).sort()];
  }, []);

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

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allProducts.filter((p) => {
      const highlight = p.card?.highlight || p.shortDescription || "";
      const spec = p.card?.specification || "";
      const matchSearch =
        !q ||
        p.name?.toLowerCase().includes(q) ||
        highlight.toLowerCase().includes(q) ||
        spec.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q) ||
        p.origin?.toLowerCase().includes(q) ||
        p.grade?.toLowerCase().includes(q);

      const matchCat = category === "All" || p.category === category;
      const matchOrigin =
        origin === "All" ||
        p.origin === origin ||
        (p.origin && p.origin.includes(origin));

      return matchSearch && matchCat && matchOrigin;
    });
  }, [search, category, origin]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setOrigin("All");
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section className="agri-list" ref={sectionRef}>
      <div className="apl-container">
        <div className={`apl-header ${visible ? "show" : ""}`}>
          <h1 className="apl-title">Agricultural Products</h1>
          <p className="apl-subtitle">
            Premium Ethiopian coffee, sesame, pulses, and oilseeds prepared for
            international markets.
          </p>
        </div>

        <button
          type="button"
          className="mobile-filter-btn"
          onClick={() => setMobileFilters(true)}
        >
          <SlidersHorizontal size={18} /> Filters
        </button>

        <div className={`apl-layout ${visible ? "show" : ""}`}>
          <aside className="apl-sidebar sidebar-desktop">
            <div className="sidebar-head">
              <h3>
                <SlidersHorizontal size={18} /> Filters
              </h3>
              <button
                type="button"
                className="clear-btn"
                onClick={clearFilters}
              >
                Clear
              </button>
            </div>

            <div className="filter-group">
              <label htmlFor="product-search">Search</label>
              <div className="search-wrap">
                <Search size={16} />
                <input
                  id="product-search"
                  type="search"
                  placeholder="Search products..."
                  value={search}
                  onChange={onSearchChange}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="filter-group">
              <label>Category</label>
              <div className="filter-options">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`filter-chip ${category === c ? "active" : ""}`}
                    onClick={() => setCategory(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label>Origin</label>
              <div className="filter-options">
                {origins.map((o) => (
                  <button
                    key={o}
                    type="button"
                    className={`filter-chip ${origin === o ? "active" : ""}`}
                    onClick={() => setOrigin(o)}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>

            <p className="result-count">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
            </p>
          </aside>

          <div className="apl-grid-wrap">
            {filtered.length === 0 ? (
              <div className="empty-state">
                <p>No products match your filters.</p>
                <button
                  type="button"
                  className="clear-btn"
                  onClick={clearFilters}
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="apl-grid">
                {filtered.map((product, i) => (
                  <div
                    key={product.id}
                    className="apl-card-wrap"
                    style={{
                      transitionDelay: visible ? `${0.05 + i * 0.04}s` : "0s",
                    }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFilters && (
        <div className="mobile-drawer">
          <div
            className="drawer-backdrop"
            onClick={() => setMobileFilters(false)}
          />
          <div className="drawer-panel">
            <div className="drawer-top">
              <h3>Filters</h3>
              <button
                type="button"
                className="drawer-close"
                onClick={() => setMobileFilters(false)}
              >
                <X size={20} />
              </button>
            </div>

            <aside className="apl-sidebar">
              <div className="sidebar-head">
                <h3>
                  <SlidersHorizontal size={18} /> Filters
                </h3>
                <button
                  type="button"
                  className="clear-btn"
                  onClick={clearFilters}
                >
                  Clear
                </button>
              </div>

              <div className="filter-group">
                <label htmlFor="product-search-mobile">Search</label>
                <div className="search-wrap">
                  <Search size={16} />
                  <input
                    id="product-search-mobile"
                    type="search"
                    placeholder="Search products..."
                    value={search}
                    onChange={onSearchChange}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="filter-group">
                <label>Category</label>
                <div className="filter-options">
                  {categories.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={`filter-chip ${category === c ? "active" : ""}`}
                      onClick={() => setCategory(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Origin</label>
                <div className="filter-options">
                  {origins.map((o) => (
                    <button
                      key={o}
                      type="button"
                      className={`filter-chip ${origin === o ? "active" : ""}`}
                      onClick={() => setOrigin(o)}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              <p className="result-count">
                {filtered.length} product{filtered.length !== 1 ? "s" : ""}{" "}
                found
              </p>
            </aside>

            <button
              type="button"
              className="drawer-apply"
              onClick={() => setMobileFilters(false)}
            >
              Show {filtered.length} results
            </button>
          </div>
        </div>
      )}

      <style>{`
        .agri-list {
          padding: 4.5rem 1.5rem 6rem;
          background: #f8fafc;
          min-height: 70vh;
        }

        .apl-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .apl-header {
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .apl-header.show {
          opacity: 1;
          transform: translateY(0);
        }

        .apl-title {
          margin: 0 0 0.5rem;
          font-size: clamp(1.75rem, 3.2vw, 2.2rem);
          font-weight: 800;
          color: #0f172a;
        }

        .apl-subtitle {
          margin: 0;
          max-width: 520px;
          font-size: 0.98rem;
          line-height: 1.65;
          color: #64748b;
        }

        .mobile-filter-btn {
          display: none;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.2rem;
          padding: 0.65rem 1.2rem;
          border: 1px solid #e8f0e9;
          border-radius: 12px;
          background: #fff;
          color: #1b5e20;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .apl-layout {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 1.5rem;
          align-items: start;
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
        }

        .apl-layout.show {
          opacity: 1;
          transform: translateY(0);
        }

        .apl-sidebar {
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 18px;
          padding: 1.25rem 1.1rem;
          box-shadow: 0 8px 28px rgba(46, 125, 50, 0.06);
          position: sticky;
          top: 100px;
        }

        .sidebar-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.2rem;
        }

        .sidebar-head h3 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .clear-btn {
          border: none;
          background: transparent;
          color: #15803d;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
        }

        .clear-btn:hover {
          text-decoration: underline;
        }

        .filter-group {
          margin-bottom: 1.2rem;
        }

        .filter-group label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          margin-bottom: 0.5rem;
        }

        .search-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.5rem 0.8rem;
          background: #f8fafc;
        }

        .search-wrap:focus-within {
          border-color: #86efac;
          box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.12);
        }

        .search-wrap svg {
          color: #94a3b8;
          flex-shrink: 0;
        }

        .search-wrap input {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          font-size: 0.88rem;
          color: #0f172a;
        }

        .filter-options {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .filter-chip {
          border: 1px solid #e2e8f0;
          background: #fff;
          color: #475569;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-chip:hover {
          border-color: #86efac;
          color: #15803d;
        }

        .filter-chip.active {
          background: #16a34a;
          border-color: #16a34a;
          color: #fff;
        }

        .result-count {
          margin: 0.4rem 0 0;
          font-size: 0.82rem;
          color: #64748b;
          font-weight: 500;
        }

        .apl-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .apl-card-wrap {
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.65s cubic-bezier(0.22, 1, 0.36, 1);
          min-width: 0;
        }

        .apl-layout.show .apl-card-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        .empty-state {
          background: #fff;
          border: 1px dashed #cbd5e1;
          border-radius: 18px;
          padding: 3rem 1.5rem;
          text-align: center;
          color: #64748b;
        }

        .mobile-drawer {
          position: fixed;
          inset: 0;
          z-index: 1000;
        }

        .drawer-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.45);
        }

        .drawer-panel {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: min(320px, 88vw);
          background: #fff;
          padding: 1.2rem;
          overflow-y: auto;
          box-shadow: 8px 0 30px rgba(0, 0, 0, 0.12);
        }

        .drawer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .drawer-top h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .drawer-close {
          border: none;
          background: #f1f5f9;
          border-radius: 8px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .drawer-apply {
          width: 100%;
          margin-top: 1rem;
          padding: 0.85rem;
          border: none;
          border-radius: 12px;
          background: #16a34a;
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
        }

        .drawer-panel .apl-sidebar {
          box-shadow: none;
          border: none;
          padding: 0;
          position: static;
        }

        @media (max-width: 1200px) {
          .apl-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 960px) {
          .sidebar-desktop {
            display: none;
          }

          .mobile-filter-btn {
            display: inline-flex;
          }

          .apl-layout {
            grid-template-columns: 1fr;
          }

          .apl-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .apl-grid {
            grid-template-columns: 1fr;
            max-width: 360px;
          }

          .agri-list {
            padding: 3.5rem 1.2rem 4.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AgriculturalProductsList;
