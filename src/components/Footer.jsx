import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Social Icons
import { NavLink } from 'react-router-dom';
import Auro from '../assets/Auro-logo.jpg'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li><NavLink to="/" className="block hover:text-blue-400">Home</NavLink></li>
              <li><NavLink to="/men" className="block hover:text-blue-400">Men</NavLink></li>
              <li><NavLink to="/women" className="block hover:text-blue-400">Women</NavLink></li>
              <li><NavLink to="/kids" className="block hover:text-blue-400">Kids</NavLink></li>
              <li><NavLink to="/bedroomsets" className="block hover:text-blue-400">Bedroom Sets</NavLink></li>

            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul>
              <li><NavLink to="/contact" className="block hover:text-blue-400">Contact Us</NavLink></li>
              <li><NavLink to="/returns" className="block hover:text-blue-400">Returns & Exchanges</NavLink></li>
              <li><NavLink to="/shipping" className="block hover:text-blue-400">Shipping Info</NavLink></li>
              <li><NavLink to="/faq" className="block hover:text-blue-400">FAQ</NavLink></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company Info</h3>
            <p className="mb-2">CK Textile, Your Fashion Destination</p>
            <p className="mb-2">Address: N.S Building,103-FArunachala Asari Street,Salem-636001</p>
            <p className="mb-2">Phone: +91 99528 00199</p>
            <p className="mb-2">Email: lglatha@gmail.com</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-blue-500" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">&copy; 2024 CK Textile. All Rights Reserved.</p>

          <p className="text-sm mt-2 md:mt-0">
            <NavLink to="/terms" className="hover:text-blue-400">Terms of Service</NavLink> |{' '}
            <NavLink to="/privacy" className="hover:text-blue-400">Privacy Policy</NavLink>
          </p>

          <p className="text-sm mt-4 md:mt-0 text-center md:text-right hover:text-orange">
            <a
              href="https://www.aurotechsolutions.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 flex items-center justify-center md:justify-end"
            >
              <img
                src={Auro}
                alt="Auro Tech Solutions Logo"
                className="w-6 h-6 mr-2"
              />
              Designed and developed by Auro Tech Solutions
            </a>
          </p>


        </div>

      </div>
    </footer>
  );
};

export default Footer;
