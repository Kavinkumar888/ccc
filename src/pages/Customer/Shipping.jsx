import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Shipping = () => {
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, { opacity: 0, y: -30, duration: 0.8 });
    gsap.from(infoRef.current, { opacity: 0, x: -40, duration: 1, delay: 0.2 });
    gsap.from(chartRef.current, { opacity: 0, x: 40, duration: 1, delay: 0.3 });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5">
      <h1
        ref={titleRef}
        className="text-4xl font-extrabold text-center mb-8 text-gray-800"
      >
        Shipping Information
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Shipping Info */}
        <div
          ref={infoRef}
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Fast & Safe Delivery
          </h2>

          <p className="text-gray-600 mb-4">
            CK Textile ensures your products are packed safely and delivered as early as possible.
          </p>

          <h3 className="font-semibold text-lg mb-2">Delivery Timelines:</h3>
          <ul className="ml-6 list-disc text-gray-700 space-y-1">
            <li>South India – 2 to 4 Days</li>
            <li>North India – 3 to 7 Days</li>
            <li>Metro Cities – 2 to 3 Days</li>
            <li>Rural Areas – 5 to 8 Days</li>
          </ul>

          <h3 className="font-semibold text-lg mt-4 mb-2">Shipping Charges:</h3>
          <ul className="ml-6 list-disc text-gray-700">
            <li>Order above ₹999 – <strong>Free Shipping</strong></li>
            <li>Below ₹999 – ₹49 to ₹79</li>
          </ul>

          <p className="mt-4 text-gray-600">
            COD Available in selected pincodes.
          </p>
        </div>

        {/* Shipping Chart */}
        <div
          ref={chartRef}
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Shipment Process
          </h2>

          <ol className="list-decimal ml-6 text-gray-700 space-y-4">
            <li>Order is confirmed by CK Textile team.</li>
            <li>Product goes through quality check.</li>
            <li>Safely packed using tamper-proof packaging.</li>
            <li>Handed over to our trusted courier partners.</li>
            <li>Tracking ID shared within 12 hours.</li>
            <li>Delivery partner delivers to your doorstep.</li>
          </ol>

          <h3 className="font-semibold mt-5 text-lg mb-2">Tracking Info:</h3>
          <p className="text-gray-600">
            Once shipped, tracking link will be sent via SMS & WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
