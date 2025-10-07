import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX, FiFacebook, FiTwitter, FiInstagram, FiUser, FiSearch } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/men', label: 'Men' },
    { path: '/women', label: 'Women' },
    { path: '/kids', label: 'Kids' },
    { path: '/bedroomsets', label: 'Bedroom Sets' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl py-2' : 'bg-white shadow-lg py-4'
    }`}>
      <div className="container mx-auto px-4">
        {/* Main Navigation Bar */}
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <div className="transition-transform duration-500 hover:scale-105">
              <img 
                src={logo} 
                alt="CK Textiles" 
                className={`transition-all duration-500 ${
                  scrolled ? 'h-10' : 'h-12'
                } drop-shadow-lg`} 
              />
            </div>
            {/* Company Name Text */}
            <div className="ml-3 hidden sm:block">
              <h1 className="text-xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CK Textiles
              </h1>
              <p className="text-xs text-gray-500">Premium Fashion</p>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-700 text-2xl p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 ml-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2 rounded-lg mx-1 ${
                    isActive ? 'text-blue-600 bg-blue-50' : 'hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300">
              <FiSearch className="text-xl" />
            </button>

            {/* User Account */}
            <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300">
              <FiUser className="text-xl" />
              <span className="text-sm font-medium">Account</span>
            </button>

            {/* Cart Icon */}
            <NavLink
              to="/cart"
              className="relative flex items-center space-x-1 text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
              onClick={handleLinkClick}
            >
              <FiShoppingCart className="text-xl group-hover:scale-110 transition-transform duration-300" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {cartItems.length}
                </span>
              )}
              <span className="hidden md:block text-sm font-medium ml-1">Cart</span>
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200`}>
          <div className="space-y-2 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Social Media Icons in Mobile Menu */}
          <div className="flex justify-center space-x-6 py-6 border-t border-gray-200 mt-4">
            <a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-800 p-3 bg-blue-50 rounded-full hover:scale-110 transition-transform duration-300">
              <FiFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 p-3 bg-blue-50 rounded-full hover:scale-110 transition-transform duration-300">
              <FiTwitter size={20} />
            </a>
            <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700 p-3 bg-pink-50 rounded-full hover:scale-110 transition-transform duration-300">
              <FiInstagram size={20} />
            </a>
            <a href="https://www.whatsapp.com" className="text-green-500 hover:text-green-700 p-3 bg-green-50 rounded-full hover:scale-110 transition-transform duration-300">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Icons for Desktop */}
      <div className="hidden lg:flex justify-center space-x-6 bg-gradient-to-r from-blue-50 to-purple-50 py-2 border-t border-gray-200">
        <a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-110">
          <FiFacebook size={16} />
        </a>
        <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 transition-all duration-300 hover:scale-110">
          <FiTwitter size={16} />
        </a>
        <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700 transition-all duration-300 hover:scale-110">
          <FiInstagram size={16} />
        </a>
        <a href="https://www.whatsapp.com" className="text-green-500 hover:text-green-700 transition-all duration-300 hover:scale-110">
          <FaWhatsapp size={16} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;