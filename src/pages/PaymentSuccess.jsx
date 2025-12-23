import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const orderId = params.get("order_id");

  useEffect(() => {
    if (orderId) {
      axios.post(`${API}/api/payment/mark-success`, { orderId });
    }
  }, [orderId]);

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h2>Payment Successful 🎉</h2>
      <p>Order ID: {orderId}</p>
    </div>
  );
};

export default PaymentSuccess;
