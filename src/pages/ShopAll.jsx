import React from 'react';
import { productsData } from '../assets/data';
import { useCart } from '../context/CartContext';

const ShopAll = () => {
  const { addToCart } = useCart();
  
  // Combine all products from all categories
  const allProducts = Object.values(productsData).flat();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">SHOP ALL PRODUCTS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopAll;