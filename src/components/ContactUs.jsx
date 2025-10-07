import React from "react";
import { FaAmazon, FaHome, FaInstagram, FaFacebook, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import meesho from '../assets/Meesho_logo.png';
import flipkart from '../assets/flipkart.png';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl w-full">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Connect With Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're available across multiple platforms to serve you better. Choose your preferred way to shop!
        </p>
      </div>

      {/* E-commerce Platforms */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Amazon */}
        <div className="group relative bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg border border-orange-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <FaAmazon className="text-5xl text-orange-500 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Amazon</h3>
            <p className="text-gray-600 text-sm mb-4">Shop with Prime benefits</p>
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Visit Store
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Flipkart */}
        <div className="group relative bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img
                src={flipkart}
                alt="Flipkart Logo"
                className="h-12 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Flipkart</h3>
            <p className="text-gray-600 text-sm mb-4">Great deals & offers</p>
            <a
              href="https://www.flipkart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Visit Store
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Meesho */}
        <div className="group relative bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-pink-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img
                src={meesho}
                alt="Meesho Logo"
                className="h-12 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Meesho</h3>
            <p className="text-gray-600 text-sm mb-4">Affordable shopping</p>
            <a
              href="https://www.meesho.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Visit Store
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Website Link */}
      <div className="text-center mb-16">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-1 rounded-2xl inline-block">
          <div className="bg-white rounded-xl p-8">
            <p className="text-gray-600 mb-4 text-lg font-medium">
              For the complete collection and exclusive offers:
            </p>
            <a
              href="https://www.cktextileszone.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <FaHome className="text-2xl transition-transform duration-300 group-hover:scale-125" />
              www.cktextileszone.in
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Follow Us On Social Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md opacity-20 group-hover:opacity-40"></div>
                <FaInstagram className="text-4xl text-pink-600 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="font-semibold text-gray-800">Instagram</span>
              <span className="text-sm text-gray-500 mt-1">@cktextiles</span>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-20 group-hover:opacity-40"></div>
                <FaWhatsapp className="text-4xl text-green-500 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="font-semibold text-gray-800">WhatsApp</span>
              <span className="text-sm text-gray-500 mt-1">Quick Support</span>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 group-hover:opacity-40"></div>
                <FaFacebook className="text-4xl text-blue-600 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="font-semibold text-gray-800">Facebook</span>
              <span className="text-sm text-gray-500 mt-1">CK Textiles</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;