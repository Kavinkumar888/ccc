import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Returns = () => {
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, { opacity: 0, y: -30, duration: 0.8 });
    gsap.from(cardRef.current, { opacity: 0, x: -40, duration: 1, delay: 0.2 });
    gsap.from(stepsRef.current, { opacity: 0, x: 40, duration: 1, delay: 0.3 });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5">
      {/* Title */}
      <h1
        ref={titleRef}
        className="text-4xl font-extrabold text-center mb-8 text-gray-800"
      >
        Returns & Exchanges
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Return Policy Card */}
        <div
          ref={cardRef}
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Our Return Policy
          </h2>

          <p className="text-gray-600 mb-4">
            At <strong>CK Textile</strong>, customer satisfaction is our top priority.
            If you are not happy with your purchase, you can return or exchange
            the product within <strong>7 days of delivery</strong>.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Eligible Conditions:</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Product must be unused</li>
            <li>No perfume / detergent smell</li>
            <li>Original packaging must be intact</li>
            <li>Return must include invoice/bill</li>
            <li>Wrong / damaged product delivered</li>
          </ul>

          <p className="text-gray-600 mt-4">
            <strong>Note:</strong> Customized, stitched items and sale products
            are not eligible for return.
          </p>
        </div>

        {/* Return Steps */}
        <div
          ref={stepsRef}
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            How to Request a Return?
          </h2>

          <ol className="list-decimal ml-6 text-gray-700 space-y-3">
            <li>
              Contact our support team through WhatsApp or call:
              <span className="font-bold"> +91 99528 00199</span>
            </li>
            <li>Share your order number & reason for return.</li>
            <li>Send images of the product (front, back & packaging).</li>
            <li>Our QC team verifies the request within 24 hours.</li>
            <li>Pickup will be arranged within 2–3 business days.</li>
            <li>Refund/exchange will be processed after quality approval.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-5 mb-2">Refund Methods:</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Bank Transfer (IMPS/NEFT)</li>
            <li>UPI Refund</li>
            <li>Store Credit</li>
            <li>Exchange with another product</li>
          </ul>

          <p className="text-gray-600 mt-4 italic">
            Refund duration: 3–5 working days after product pickup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Returns;
