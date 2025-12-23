import React, { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const Cart = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const total = 500;
  const tax = Math.round(total * 0.18);
  const finalAmount = total + tax;

  // ✅ LOAD CASHFREE LIVE SDK
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/ui/2.0.0/cashfree.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    if (!user.name || !user.phone || !user.address) {
      alert("All fields required");
      return;
    }

    try {
      // 🔹 CREATE ORDER (BACKEND)
      const res = await axios.post(
        `${API}/api/payment/create-order`,
        {
          amount: finalAmount,
          customer: {
            name: user.name,
            phone: user.phone,
            email: "test@gmail.com",
            address: user.address,
          },
        }
      );

      // 🔹 OPEN CASHFREE CHECKOUT
      const cashfree = new window.Cashfree();
      cashfree.checkout({
        paymentSessionId: res.data.payment_session_id,
        redirectTarget: "_self",
      });

    } catch (err) {
      console.error(err);
      alert("Payment failed. Try again");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <h2>Checkout</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <textarea
        name="address"
        placeholder="Address"
        onChange={handleChange}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <button onClick={handlePayment} style={{ width: "100%" }}>
        Pay ₹{finalAmount}
      </button>
    </div>
  );
};

export default Cart;
