import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About/About";
import Business from "./Pages/Business/Business";
import Products from "./Pages/Products/Products";
import Global from "./Pages/Global/Global";
import Sustainability from "./Pages/Sustainability/Sustainability";
import Contact from "./Pages/Contact/Contact";
import AgriculturalProductsList from "./Pages/Products/AgriculturalProductsList";
import ProductsDetailPage from "./Pages/Products/ProductsDetailPage";
import ChemicalProductsLIst from "./Pages/Products/ChemicalProductsLIst";
import OurStory from "./Pages/About/OurStory";
import WhyUs from "./Pages/About/WhyUs";
import Export from "./Pages/Business/Export";
import Import from "./Pages/Business/Import";
import Manufacturing from "./Pages/Business/Manufacturing";
import ScrollToTop from "./ScrollToTop";
import GlobalReach from "./Pages/Global/GlobalReach";
import GlobalSourcing from "./Pages/Global/GlobalSourcing";

// Placeholder pages – replace with real components later

const Partners = () => <div style={{ padding: "120px 2rem" }}>Partners</div>;

const Commitment = () => (
  <div style={{ padding: "120px 2rem" }}>Our Commitment</div>
);
const Responsibilities = () => (
  <div style={{ padding: "120px 2rem" }}>Responsibilities</div>
);
const Environment = () => (
  <div style={{ padding: "120px 2rem" }}>Environment</div>
);
const Governmental = () => (
  <div style={{ padding: "120px 2rem" }}>Governmental</div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/why-us" element={<WhyUs />} />

        {/* Business */}
        <Route path="/business" element={<Business />} />
        <Route path="/business/export" element={<Export />} />
        <Route path="/business/import" element={<Import />} />
        <Route path="/business/manufacturing" element={<Manufacturing />} />

        {/* Products */}
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/agricultural"
          element={<AgriculturalProductsList />}
        />
        <Route path="/products/chemicals" element={<ChemicalProductsLIst />} />
        <Route
          path="/products/:category/:slug"
          element={<ProductsDetailPage />}
        />

        {/* Global Network */}
        <Route path="/global-network" element={<Global />} />
        <Route path="/global-network/reach" element={<GlobalReach />} />
        <Route path="/global-network/sourcing" element={<GlobalSourcing />} />
        <Route path="/global-network/partners" element={<Partners />} />

        {/* Sustainability */}
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/sustainability/commitment" element={<Commitment />} />
        <Route
          path="/sustainability/responsibilities"
          element={<Responsibilities />}
        />
        <Route path="/sustainability/environment" element={<Environment />} />
        <Route path="/sustainability/governmental" element={<Governmental />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
