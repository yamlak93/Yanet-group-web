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
import GlobalPartners from "./Pages/Global/GlobalPartners";
import SustainabilityCommitment from "./Pages/Sustainability/SustainabilityCommitment";
import SustainabilityResponsibility from "./Pages/Sustainability/SustainabilityResponsibility";
import SustainabilityGovernment from "./Pages/Sustainability/SustainabilityGovernment";

// Placeholder pages – replace with real components later

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
        <Route path="/global-network/partners" element={<GlobalPartners />} />

        {/* Sustainability */}
        <Route path="/sustainability" element={<Sustainability />} />
        <Route
          path="/sustainability/commitment"
          element={<SustainabilityCommitment />}
        />
        <Route
          path="/sustainability/responsibilities"
          element={<SustainabilityResponsibility />}
        />
        <Route
          path="/sustainability/governmental"
          element={<SustainabilityGovernment />}
        />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
