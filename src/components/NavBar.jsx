import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FiShoppingCart, FiMenu, FiX, FiFacebook,
  FiTwitter, FiInstagram, FiUser, FiSearch
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/TshirtPage', label: 'T-shirt' },
    { path: '/TowelPage', label: 'Towels' },
    { path: '/TraditionalWearPage', label: 'Dhothie' },
    { path: '/women', label: 'Sarees' },
    { path: '/kids', label: 'Baby Bed' },
    { path: '/bedroomsets', label: 'Bedroom Sets' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
      ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-3 shadow-sm'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-700 text-3xl p-2"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Center Logo */}
        <NavLink to="/" onClick={handleLinkClick}>
          <img
            src={logo}
            alt="CK Textiles"
            className={`h-12 sm:h-14 transition-all duration-300 mx-auto ${
              scrolled ? 'scale-95' : 'scale-100'
            }`}
          />
        </NavLink>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-3">
          {/* Cart Icon */}
          <NavLink
            to="/cart"
            onClick={handleLinkClick}
            className="relative text-gray-700 hover:text-blue-600 transition-all"
          >
            <FiShoppingCart className="text-2xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {cartItems.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `w-[90%] text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Social Icons */}
        <div className="flex justify-center space-x-6 py-4 border-t border-gray-200">
          <a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-800">
            <FiFacebook size={20} />
          </a>
          <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">
            <FiTwitter size={20} />
          </a>
          <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700">
            <FiInstagram size={20} />
          </a>
          <a href="https://www.whatsapp.com" className="text-green-500 hover:text-green-700">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-center items-center space-x-4 mt-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `font-semibold text-gray-700 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'hover:bg-gray-50 hover:text-blue-600'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
