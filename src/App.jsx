import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Main Pages
import Home from "./pages/Home";
import CartPage from "./pages/Cart";
import PaymentSuccess from "./pages/PaymentSuccess";

// Product Pages
import WomenPage from "./pages/WomenPage";
import BedroomPage from "./pages/BedroomPage";
import KidsPage from "./pages/KidsPage";
import TshirtPage from "./pages/TshirtPage";
import TowelPage from "./pages/Towel";
import TraditionalWearPage from "./pages/TraditionalWearPage";

// Customer Service Pages
import ContactUs from "./pages/Customer/Contact";
import Returns from "./pages/Customer/Returns";
import Shipping from "./pages/Customer/Shipping";
import FAQ from "./pages/Customer/FAQ";
import Terms from "./pages/Customer/Terms";
import PrivacyPolicy from "./pages/Customer/PrivacyPolicy";

// Utilities
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll helper */}
      <ScrollToTop />

      {/* Navbar */}
      <NavBar />

      {/* MAIN CONTENT */}
      <main className="flex-grow pt-24">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Products */}
          <Route path="/TshirtPage" element={<TshirtPage />} />
          <Route path="/Towel" element={<TowelPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route
            path="/TraditionalWearPage"
            element={<TraditionalWearPage />}
          />
          <Route path="/KidsPage" element={<KidsPage />} />
          <Route path="/BedroomPage" element={<BedroomPage />} />

          {/* Cart & Payment */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />

          {/* Customer Service */}
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Legal Pages */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="text-center py-20 text-xl font-semibold">
                Page Not Found
              </div>
            }
          />
        </Routes>
      </main>

      {/* Floating utilities */}
      <ScrollToTopButton />
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
