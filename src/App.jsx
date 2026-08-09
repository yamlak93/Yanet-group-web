import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About/About";
import Business from "./Pages/Business/Business";
import Products from "./Pages/Products/Products";

// Placeholder pages – replace with real components later

const OurStory = () => <div style={{ padding: "120px 2rem" }}>Our Story</div>;

const WhyUs = () => <div style={{ padding: "120px 2rem" }}>Why Us</div>;
const Export = () => (
  <div style={{ padding: "120px 2rem" }}>Export Agricultural & Commodities</div>
);
const Import = () => (
  <div style={{ padding: "120px 2rem" }}>
    Import Chemical & Industrial Materials
  </div>
);
const Manufacturing = () => (
  <div style={{ padding: "120px 2rem" }}>Manufacturing Chemicals</div>
);
const Agricultural = () => (
  <div style={{ padding: "120px 2rem" }}>Agricultural Products</div>
);
const Chemicals = () => <div style={{ padding: "120px 2rem" }}>Chemicals</div>;
const GlobalNetwork = () => (
  <div style={{ padding: "120px 2rem" }}>Global Network</div>
);
const Reach = () => <div style={{ padding: "120px 2rem" }}>Global Reach</div>;
const Sourcing = () => (
  <div style={{ padding: "120px 2rem" }}>Sourcing Network</div>
);
const Partners = () => <div style={{ padding: "120px 2rem" }}>Partners</div>;
const Sustainability = () => (
  <div style={{ padding: "120px 2rem" }}>Sustainability</div>
);
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
const Contact = () => <div style={{ padding: "120px 2rem" }}>Contact</div>;

function App() {
  return (
    <>
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
        <Route path="/products/agricultural" element={<Agricultural />} />
        <Route path="/products/chemicals" element={<Chemicals />} />

        {/* Global Network */}
        <Route path="/global-network" element={<GlobalNetwork />} />
        <Route path="/global-network/reach" element={<Reach />} />
        <Route path="/global-network/sourcing" element={<Sourcing />} />
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
