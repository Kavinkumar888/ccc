import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import WomenPage from './pages/WomenPage';
import BedroomPage from './pages/BedroomPage';
import KidsPage from './pages/KidsPage';
import CartPage from './pages/Cart';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';
import TshirtPage from './pages/TshirtPage';
import TowelPage from './pages/TowelPage';
import TraditionalWearPage from './pages/TraditionalWearPage';

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        {/* Navbar */}
        <NavBar />

        {/* Main Content with padding for fixed navbar */}
        <main className="flex-grow pt-24"> {/* Adjusted padding */}
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            <Route path="/TshirtPage" element={<TshirtPage />} />
            <Route path="/TowelPage" element={<TowelPage />}/>
            <Route path="/women" element={<WomenPage />} />
            <Route path="/TraditionalWearPage" element={<TraditionalWearPage />}/>
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/bedroomsets" element={<BedroomPage />} />
            <Route path="/cart" element={<CartPage />} />

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