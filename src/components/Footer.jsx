import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Auro from '../assets/Auro-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="hover:text-blue-400">Home</NavLink></li>
              <li><NavLink to="/TshirtPage" className="hover:text-blue-400">Tshirt</NavLink></li>
              <li><NavLink to="/Towel" className="hover:text-blue-400">Women</NavLink></li>
              <li><NavLink to="/KidsPage" className="hover:text-blue-400">Kids</NavLink></li>
              <li><NavLink to="/BedroomPage" className="hover:text-blue-400">Bedroom Sets</NavLink></li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><NavLink to="/ContactUs" className="hover:text-blue-400">Contact Us</NavLink></li>
              <li><NavLink to="/returns" className="hover:text-blue-400">Returns & Exchanges</NavLink></li>
              <li><NavLink to="/shipping" className="hover:text-blue-400">Shipping Info</NavLink></li>
              <li><NavLink to="/faq" className="hover:text-blue-400">FAQ</NavLink></li>
            </ul>
          </div>

          {/* COMPANY INFO */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company Info</h3>
            <p className="text-gray-300">CK Textile — Your Fashion Destination</p>
            <p className="text-gray-300 mt-2">N.S Building, 103-F Arunachala Asari Street, Salem-636001</p>
            <p className="text-gray-300 mt-2">Phone: +91 99528 00199</p>
            <p className="text-gray-300 mt-2">Email: support@cktextile.in</p>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank"><FaFacebook className="text-2xl hover:text-blue-500" /></a>
              <a href="https://instagram.com" target="_blank"><FaInstagram className="text-2xl hover:text-pink-500" /></a>
              <a href="https://twitter.com" target="_blank"><FaTwitter className="text-2xl hover:text-blue-400" /></a>
              <a href="https://linkedin.com" target="_blank"><FaLinkedin className="text-2xl hover:text-blue-700" /></a>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 CK Textile. All Rights Reserved.</p>

          <div className="flex space-x-4 mt-2 md:mt-0">
            <NavLink to="/terms" className="hover:text-blue-400">Terms of Service</NavLink>
            <span>|</span>
            <NavLink to="/privacy" className="hover:text-blue-400">Privacy Policy</NavLink>
          </div>

          <a
            href="https://www.aurotechsolutions.in"
            target="_blank"
            className="flex items-center hover:text-blue-400 mt-3 md:mt-0"
          >
            <img src={Auro} alt="Auro Tech Solutions" className="w-6 h-6 mr-2" />
            Designed & Developed by Auro Tech Solutions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
