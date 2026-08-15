import React, { useEffect, useMemo, useState, useRef } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "../../Components/ProductCard";
import productsData from "../../data/ProductsDetail";

const allProducts = productsData.chemical || [];

const CATEGORY_ORDER = [
  "Basic chemicals",
  "Water treatment chemicals",
  "Food and beverage chemicals",
  "Raw materials",
];

const isOurProduct = (p) => {
  const v = p?.isOurs;
  return v === "yes" || v === "Yes" || v === true || v === "true";
};

const ChemicalProductsList = () => {
  const [sourceTab, setSourceTab] = useState("ours"); // "ours" | "imported"
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [form, setForm] = useState("All");
  const [mobileFilters, setMobileFilters] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Products for the active tab
  const tabProducts = useMemo(() => {
    if (sourceTab === "ours") {
      return allProducts.filter(isOurProduct);
    }
    return allProducts.filter((p) => !isOurProduct(p));
  }, [sourceTab]);

  const categories = useMemo(() => {
    const found = new Set(tabProducts.map((p) => p.category).filter(Boolean));
    const ordered = CATEGORY_ORDER.filter((c) => found.has(c));
    const extras = Array.from(found)
      .filter((c) => !CATEGORY_ORDER.includes(c))
      .sort();
    return ["All", ...ordered, ...extras];
  }, [tabProducts]);

  const forms = useMemo(() => {
    const set = new Set(tabProducts.map((p) => p.physicalForm).filter(Boolean));
    return ["All", ...Array.from(set).sort()];
  }, [tabProducts]);

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

  // Reset filters when switching tab
  useEffect(() => {
    setSearch("");
    setCategory("All");
    setForm("All");
  }, [sourceTab]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tabProducts.filter((p) => {
      const highlight = p.card?.highlight || p.shortDescription || "";
      const matchSearch =
        !q ||
        p.name?.toLowerCase().includes(q) ||
        highlight.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q) ||
        (p.casNumber && p.casNumber.toLowerCase().includes(q)) ||
        p.physicalForm?.toLowerCase().includes(q) ||
        p.grade?.toLowerCase().includes(q);

      const matchCat = category === "All" || p.category === category;
      const matchForm = form === "All" || p.physicalForm === form;

      return matchSearch && matchCat && matchForm;
    });
  }, [tabProducts, search, category, form]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setForm("All");
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const oursCount = useMemo(() => allProducts.filter(isOurProduct).length, []);
  const importedCount = useMemo(
    () => allProducts.filter((p) => !isOurProduct(p)).length,
    [],
  );

  return (
    <section className="chem-list" ref={sectionRef}>
      <div className="cpl-container">
        <div className={`cpl-header ${visible ? "show" : ""}`}>
          <h1 className="cpl-title">Chemical & Industrial Products</h1>
          <p className="cpl-subtitle">
            Basic chemicals, water treatment, food & beverage inputs, and
            industrial raw materials for Ethiopian manufacturers.
          </p>

          {/* Source tabs */}
          <div className="source-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={sourceTab === "ours"}
              className={`source-tab ${sourceTab === "ours" ? "active" : ""}`}
              onClick={() => setSourceTab("ours")}
            >
              Our Products
              <span className="tab-count">{oursCount}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={sourceTab === "imported"}
              className={`source-tab ${sourceTab === "imported" ? "active" : ""}`}
              onClick={() => setSourceTab("imported")}
            >
              Imported Products
              <span className="tab-count">{importedCount}</span>
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mobile-filter-btn"
          onClick={() => setMobileFilters(true)}
        >
          <SlidersHorizontal size={18} /> Filters
        </button>

        <div className={`cpl-layout ${visible ? "show" : ""}`}>
          <aside className="cpl-sidebar sidebar-desktop">
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
              <label htmlFor="chem-search">Search</label>
              <div className="search-wrap">
                <Search size={16} />
                <input
                  id="chem-search"
                  type="search"
                  placeholder="Name, CAS, grade..."
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
              <label>Physical form</label>
              <div className="filter-options">
                {forms.map((f) => (
                  <button
                    key={f}
                    type="button"
                    className={`filter-chip ${form === f ? "active" : ""}`}
                    onClick={() => setForm(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <p className="result-count">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
            </p>
          </aside>

          <div className="cpl-grid-wrap">
            {tabProducts.length === 0 ? (
              <div className="empty-state">
                <p>
                  {sourceTab === "ours"
                    ? 'No manufactured products yet. Set "isOurs": "yes" on items in ProductsDetailInfo.json.'
                    : "No imported products in this list yet."}
                </p>
              </div>
            ) : filtered.length === 0 ? (
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
              <div className="cpl-grid">
                {filtered.map((product, i) => (
                  <div
                    key={product.id}
                    className="cpl-card-wrap"
                    style={{
                      transitionDelay: visible ? `${0.05 + i * 0.04}s` : "0s",
                    }}
                  >
                    <ProductCard
                      product={product}
                      basePath="/products/chemicals"
                    />
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

            <aside className="cpl-sidebar">
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
                <label htmlFor="chem-search-mobile">Search</label>
                <div className="search-wrap">
                  <Search size={16} />
                  <input
                    id="chem-search-mobile"
                    type="search"
                    placeholder="Name, CAS, grade..."
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
                <label>Physical form</label>
                <div className="filter-options">
                  {forms.map((f) => (
                    <button
                      key={f}
                      type="button"
                      className={`filter-chip ${form === f ? "active" : ""}`}
                      onClick={() => setForm(f)}
                    >
                      {f}
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
        .chem-list {
          padding: 4.5rem 1.5rem 6rem;
          background: #f8fafc;
          min-height: 70vh;
        }
        .cpl-container { max-width: 1280px; margin: 0 auto; }
        .cpl-header {
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cpl-header.show { opacity: 1; transform: translateY(0); }
        .cpl-title {
          margin: 0 0 0.5rem;
          font-size: clamp(1.75rem, 3.2vw, 2.2rem);
          font-weight: 800;
          color: #0f172a;
        }
        .cpl-subtitle {
          margin: 0 0 1.25rem;
          max-width: 560px;
          font-size: 0.98rem;
          line-height: 1.65;
          color: #64748b;
        }

        .source-tabs {
          display: inline-flex;
          gap: 0.4rem;
          padding: 0.3rem;
          background: #ffffff;
          border: 1px solid #e8f0e9;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(46, 125, 50, 0.05);
        }

        .source-tab {
          border: none;
          background: transparent;
          color: #475569;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.55rem 1.1rem;
          border-radius: 10px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          transition: all 0.2s ease;
        }

        .source-tab:hover {
          color: #15803d;
          background: #f0fdf4;
        }

        .source-tab.active {
          background: #16a34a;
          color: #ffffff;
        }

        .tab-count {
          font-size: 0.72rem;
          font-weight: 700;
          min-width: 1.35rem;
          height: 1.35rem;
          padding: 0 0.35rem;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(15, 23, 42, 0.08);
        }

        .source-tab.active .tab-count {
          background: rgba(255, 255, 255, 0.25);
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
        .cpl-layout {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 1.5rem;
          align-items: start;
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
        }
        .cpl-layout.show { opacity: 1; transform: translateY(0); }
        .cpl-sidebar {
          background: #fff;
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
        .clear-btn:hover { text-decoration: underline; }
        .filter-group { margin-bottom: 1.2rem; }
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
        .search-wrap svg { color: #94a3b8; flex-shrink: 0; }
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
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.7rem;
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
        .cpl-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .cpl-card-wrap {
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.65s cubic-bezier(0.22, 1, 0.36, 1);
          min-width: 0;
        }
        .cpl-layout.show .cpl-card-wrap {
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
        .mobile-drawer { position: fixed; inset: 0; z-index: 1000; }
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
        .drawer-top h3 { margin: 0; font-size: 1.1rem; font-weight: 700; }
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
        .drawer-panel .cpl-sidebar {
          box-shadow: none;
          border: none;
          padding: 0;
          position: static;
        }
        @media (max-width: 1200px) {
          .cpl-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 960px) {
          .sidebar-desktop { display: none; }
          .mobile-filter-btn { display: inline-flex; }
          .cpl-layout { grid-template-columns: 1fr; }
          .cpl-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .cpl-grid { grid-template-columns: 1fr; max-width: 360px; }
          .chem-list { padding: 3.5rem 1.2rem 4.5rem; }
          .source-tabs { width: 100%; }
          .source-tab { flex: 1; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default ChemicalProductsList;
