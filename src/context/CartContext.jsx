// CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create CartContext
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
    return useContext(CartContext);
  };
  
  

export const CartProvider = ({ children }) => {
  // Load initial cart data from localStorage if available
  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  };

  // Cart state to store added items
  const [cartItems, setCartItems] = useState(loadCartFromLocalStorage);

  // Sync the cart with localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        // Increment quantity of existing item
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to change item quantity in the cart
  const changeQuantity = (id, quantity) => {
    if (quantity <= 0) {
      // If quantity is 0 or less, remove the item from the cart
      removeFromCart(id);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  // Total price calculation
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        changeQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;