import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { productsData } from '../assets/data';
import { FiTag, FiBox, FiShield, FiZoomIn, FiCheck } from 'react-icons/fi';
import { RiShirtFill } from 'react-icons/ri';

const TowelsPage = () => {
  const [selectedSize, setSelectedSize] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [notification, setNotification] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { addToCart } = useCart();

  // Filter only towel products
  const allProducts = productsData.men;
  const towelProducts = allProducts.filter(product => product.category === 'Towels');

  // Extract unique sizes and materials for filters
  const sizes = ['All', ...new Set(towelProducts.map(product => product.size).filter(Boolean))];
  const materials = ['All', ...new Set(towelProducts.map(product => product.material).filter(Boolean))];

  // Apply filters
  const filteredProducts = towelProducts.filter(product => {
    const sizeMatch = selectedSize === 'All' || product.size === selectedSize;
    const materialMatch = selectedMaterial === 'All' || product.material === selectedMaterial;
    return sizeMatch && materialMatch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} has been added to the cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Premium Towels Collection</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality towels in various sizes, materials, and designs to suit your needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4 w-full">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Filter Towels</h2>
              
              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Size</h3>
                <ul className="space-y-2">
                  {sizes.map((size) => (
                    <li
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex items-center cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
                        selectedSize === size
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      {selectedSize === size && <FiCheck className="mr-2" />}
                      <span className="font-medium">{size}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4 w-full">
            {/* Results Header */}
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              
              {/* Sort Options (if needed in future) */}
              {/* <div className="mt-4 sm:mt-0">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div> */}
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Product Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.material && (
                          <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
                            {product.material}
                          </span>
                        )}
                        {product.size && (
                          <span className="bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded">
                            {product.size}
                          </span>
                        )}
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
                    
                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                      
                      {/* Product Details */}
                      <div className="mb-3 space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Size:</span>
                          <span className="font-medium">{product.size || 'Standard'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Material:</span>
                          <span className="font-medium">{product.material || 'Cotton'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Quantity:</span>
                          <span className="font-medium">1 piece</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-blue-600">₹{product.price}</span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
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
                <div className="text-gray-400 text-6xl mb-4">🧺</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No towels found</h3>
                <p className="text-gray-500">Try adjusting your filters or browse our other categories</p>
              </div>
            )}
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
            />
            {/* Close Button */}
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
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          {notification}
        </div>
      )}
    </div>
  );
};

export default TowelsPage;