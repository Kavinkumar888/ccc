import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { productsData } from '../assets/data';
import { FaBed, FaStar, FaCube } from 'react-icons/fa';
import { FiTag, FiZoomIn, FiPackage, FiImage } from 'react-icons/fi';

const BedroomPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [notification, setNotification] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'All'
    ? productsData.bedroomsets
    : productsData.bedroomsets.filter(product => product.category === selectedCategory);

  const subcategories = [
    { name: 'All', icon: <FiTag size={18} /> },
    { name: 'Bedding', icon: <FaBed size={18} /> },
    { name: 'Super King Size Bedding', icon: <FaStar size={18} /> },
    { name: 'Bedsheet', icon: <FiPackage size={18} /> },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} has been added to the cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  // Function to handle image error
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x300/8B5CF6/FFFFFF?text=Bedroom+Set';
    e.target.alt = 'Bedroom Set Image';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 w-full">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Bedroom Categories</h2>
              <ul className="space-y-3">
                {subcategories.map((subcategory) => (
                  <li
                    key={subcategory.name}
                    onClick={() => setSelectedCategory(subcategory.name)}
                    className={`flex items-center cursor-pointer px-4 py-3 rounded-xl transition-all duration-300 ${
                      selectedCategory === subcategory.name
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg transform scale-105'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:shadow-md'
                    }`}
                  >
                    <span className="mr-3">{subcategory.icon}</span>
                    <span className="font-medium">{subcategory.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4 w-full">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {selectedCategory === 'All' ? 'All Bedroom Products' : selectedCategory}
              </h1>
              <p className="text-gray-600">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                    <div className="relative overflow-hidden bg-gray-100 h-64">
                      {/* Product Image with Error Handling */}
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={handleImageError}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100">
                          <FiImage className="text-4xl text-purple-400 mb-2" />
                          <span className="text-purple-600 font-medium">No Image</span>
                        </div>
                      )}
                      
                      {/* Piece Number Badge */}
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                        <FaCube className="text-xs" />
                        Piece {index + 1}
                      </div>
                      
                      {/* Zoom Overlay */}
                      <div 
                        className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 cursor-pointer flex items-center justify-center"
                        onClick={() => setSelectedImage(product.image)}
                      >
                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white bg-opacity-90 rounded-full p-3">
                          <FiZoomIn className="text-gray-800 text-xl" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                      
                      {/* Product Details */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FiPackage className="text-purple-500" />
                          <span>1 Piece </span>
                        </div>
                        <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium">
                          In Stock
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-purple-600">₹{product.price}</span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🛏️</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500">Try selecting a different category</p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Bedroom Sets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaCube className="text-purple-600 text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Single Piece Sets</h3>
                <p className="text-sm text-gray-600">Each product is a complete 1-piece set ready to use</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FiPackage className="text-purple-600 text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Complete Package</h3>
                <p className="text-sm text-gray-600">Everything you need in one convenient package</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaStar className="text-purple-600 text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Premium Quality</h3>
                <p className="text-sm text-gray-600">High-quality materials and craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Product" 
              className="max-w-full max-h-screen object-contain rounded-lg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x600/8B5CF6/FFFFFF?text=Bedroom+Set+Image';
              }}
            />
            <button
              className="absolute top-4 right-4 bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-lg"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification && (
        <div className="fixed top-24 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out z-40">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{notification}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BedroomPage;