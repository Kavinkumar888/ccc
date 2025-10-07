import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi'; // Import cart icon
import axios from 'axios'; // Import Axios for API calls

const CartPage = () => {
  const { cartItems, removeFromCart, changeQuantity, totalPrice } = useCart();

  // State for user details
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle quantity change
  const handleQuantityChange = (e, id) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      changeQuantity(id, newQuantity);
    } else {
      console.log('Invalid quantity');
    }
  };

  // Handle input change for user details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle payment with Razorpay
  const handlePayment = async () => {
    setIsLoading(true);

    try {
      const options = {
        key: 'rzp_live_7NPlRPgnX71k5h', // Replace with your Razorpay Key ID
        amount: totalPrice * 100, // Amount in paise (1 INR = 100 paise)
        currency: 'INR',
        name: 'Ck Textiles',
        description: 'Order Payment',
        image: '../assets/logo.png', // Optional: Your logo URL
        handler: async (response) => {
          console.log('Payment Successful:', response);

          // Send WhatsApp message after successful payment
          await sendWhatsAppMessage();
          setIsLoading(false);
        },
        prefill: {
          name: userDetails.name,
          email: 'customer@example.com', // Optional: Customer email
          contact: userDetails.phone,
        },
        notes: {
          address: userDetails.address,
        },
        theme: {
          color: '#F37254',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment failed:', error);
      setIsLoading(false);
    }
  };

  // Send WhatsApp Message
  const sendWhatsAppMessage = async () => {
    try {
      // Replace with your WhatsApp API endpoint or use Twilio/other providers
      const whatsappAPIUrl = 'YOUR_WHATSAPP_API_ENDPOINT';

      const messagePayload = {
        phone: userDetails.phone, // Customer's phone number
        message: `Hello ${userDetails.name}, your order of ₹${totalPrice.toFixed(
          2
        )} has been successfully placed! We will deliver it to: ${userDetails.address}. Thank you!`,
      };

      await axios.post(whatsappAPIUrl, messagePayload);
      console.log('WhatsApp message sent successfully!');
    } catch (error) {
      console.error('Failed to send WhatsApp message:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-4 p-4 bg-gray-100">
              <div className="flex">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div className="ml-4">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <p>
                    Quantity:{' '}
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(e, item.id)}
                      className="w-12 text-center"
                    />
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)} // Remove item from cart
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <h2 className="text-2xl">Total: ₹{totalPrice.toFixed(2)}</h2>
          </div>

          {/* Form for user details */}
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Delivery Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number:</label>
                <input
                  type="text"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Address:</label>
                <textarea
                  name="address"
                  value={userDetails.address}
                  onChange={handleInputChange}
                  placeholder="Enter your delivery address"
                  className="w-full px-4 py-2 border rounded-md"
                  rows="3"
                  required
                ></textarea>
              </div>
            </form>
          </div>

          {/* Proceed to Pay Button */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={handlePayment}
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500"
              disabled={isLoading}
            >
              <FiShoppingCart className="mr-2" />
              {isLoading ? 'Processing...' : 'Proceed to Pay'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
