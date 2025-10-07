import React from 'react';
import logo from '../assets/logo.png';
import { FaAward, FaShippingFast, FaHeadset, FaRecycle, FaHeart, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About CK Textile
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
        {/* Image Section */}
        <div className="flex-shrink-0 lg:w-1/3">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-lg opacity-20"></div>
            <img 
              src={logo} 
              alt="CK Textile Logo" 
              className="relative h-80 w-80 object-contain mx-auto transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl" 
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-2/3 space-y-8">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Welcome to <span className="font-bold text-blue-600">CK Textile</span>, your premier destination for high-quality clothing and fashion apparel online. We specialize in providing a wide range of clothing options for men, women, and kids, from everyday wear to premium designer pieces.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our mission is to bring you the best in textile craftsmanship while offering stylish and affordable choices for every occasion. With years of experience in the textile industry, we understand what makes great clothing.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              At CK Textile, we are committed to delivering the latest trends, comfortable fabrics, and exceptional quality. Our online store makes shopping for clothes a seamless experience, with easy navigation, secure payments, and fast shipping.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-500 transition-colors duration-300">
            <FaAward className="text-2xl text-blue-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
          <p className="text-gray-600">Finest materials and craftsmanship in every product</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-500 transition-colors duration-300">
            <FaShippingFast className="text-2xl text-green-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Quick and reliable shipping across India</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-500 transition-colors duration-300">
            <FaHeadset className="text-2xl text-purple-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Support</h3>
          <p className="text-gray-600">Always here to help with your queries</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 group-hover:bg-orange-500 transition-colors duration-300">
            <FaRecycle className="text-2xl text-orange-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Returns</h3>
          <p className="text-gray-600">Hassle-free return policy for your peace of mind</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4 group-hover:bg-pink-500 transition-colors duration-300">
            <FaHeart className="text-2xl text-pink-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Love</h3>
          <p className="text-gray-600">Loved by thousands of satisfied customers</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 group-hover:bg-red-500 transition-colors duration-300">
            <FaRocket className="text-2xl text-red-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Growth</h3>
          <p className="text-gray-600">Rapidly expanding to serve you better</p>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-3xl border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Promise to You</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Whether you're looking for casual wear, business attire, or trendy outfits for every season, 
          CK Textile has you covered. Our team is dedicated to bringing the best of textile fashion 
          to your door, ensuring you look and feel your best every day.
        </p>
        <div className="mt-8">
          <span className="text-2xl font-bold text-blue-600">Thank you for choosing CK Textile.</span>
          <p className="text-lg text-gray-600 mt-2">We look forward to being a part of your fashion journey.</p>
        </div>
      </div>
    </div>
  );
};

export default About;