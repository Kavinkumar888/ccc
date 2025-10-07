import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../assets/data';
import { FaArrowRight, FaShoppingBag, FaStar, FaTruck, FaShieldAlt, FaSmile } from 'react-icons/fa';

const HomeCatalog = () => {
  const categories = Object.keys(productsData);

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Explore Our Collections
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the perfect blend of style, comfort, and quality across all our categories
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {categories.map((categoryKey) => {
          const categoryProducts = productsData[categoryKey];
          const previewProducts = categoryProducts.slice(0, 4);

          return (
            <div key={categoryKey} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
                <h2 className="text-xl font-bold text-center flex items-center justify-center gap-2">
                  <FaShoppingBag className="text-white" />
                  {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
                </h2>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  {previewProducts.map((product) => (
                    <div key={product.id} className="group/item overflow-hidden rounded-lg bg-gray-50 hover:bg-white transition-all duration-300">
                      <Link to={`/${categoryKey}`}>
                        <div className="relative overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-28 w-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                          />
                          <div className="absolute inset-0 bg-black opacity-0 group-hover/item:opacity-10 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-2">
                          <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
                          <p className="text-xs text-gray-600 line-clamp-1 mb-1">{product.description}</p>
                          <p className="text-sm font-bold text-blue-600">₹{product.price}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* View All Button */}
                <div className="mt-4 text-center">
                  <Link
                    to={`/${categoryKey}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group/link transition-all duration-300"
                  >
                    View All {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
                    <FaArrowRight className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3 group-hover:bg-blue-500 transition-colors duration-300">
            <FaShoppingBag className="text-xl text-blue-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
          <div className="text-gray-600 text-sm">Products</div>
        </div>

        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3 group-hover:bg-green-500 transition-colors duration-300">
            <FaSmile className="text-xl text-green-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="text-2xl font-bold text-green-600 mb-1">10K+</div>
          <div className="text-gray-600 text-sm">Happy Customers</div>
        </div>

        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3 group-hover:bg-purple-500 transition-colors duration-300">
            <FaTruck className="text-xl text-purple-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
          <div className="text-gray-600 text-sm">Cities Served</div>
        </div>

        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-3 group-hover:bg-orange-500 transition-colors duration-300">
            <FaStar className="text-xl text-orange-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="text-2xl font-bold text-orange-600 mb-1">5+</div>
          <div className="text-gray-600 text-sm">Years Experience</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Wardrobe?</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Explore our exclusive collections and discover fashion that speaks to you
        </p>
        <Link
          to="/men"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
        >
          Start Shopping Now
          <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default HomeCatalog;