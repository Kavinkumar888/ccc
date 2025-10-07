import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import BedroomPage from './pages/BedroomPage';
import KidsPage from './pages/KidsPage';
import CartPage from './pages/Cart';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';
import ShopAll from './pages/ShopAll';
import MyOrders from './pages/MyOrders';
import ContactUs from './components/ContactUs'; // Ithu add pannanum

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/bedroomsets" element={<BedroomPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/shopall" element={<ShopAll />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* 404 Page */}
            <Route path="*" element={<div className="text-center py-8 text-xl">Page Not Found</div>} />
          </Routes>

        </main>
        <ScrollToTopButton />
        <WhatsAppButton />
        <Footer />  
      </div>
    </>
  );
};

export default App;