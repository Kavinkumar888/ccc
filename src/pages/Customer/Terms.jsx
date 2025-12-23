import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiShield, FiCheckCircle } from "react-icons/fi";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-100 p-4 rounded-2xl">
              <FiFileText className="text-4xl text-indigo-600" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-3">Terms & Conditions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read our terms carefully before using our website and services.
          </p>
        </motion.div>

        {/* Content */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using CK Textile website, you agree to comply with these Terms & Conditions. 
              If you do not agree, you may discontinue using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Use of Website</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>You must not misuse our platform or engage in fraudulent activity.</li>
              <li>All product information is true to our best knowledge.</li>
              <li>We reserve the right to modify or discontinue services at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Orders & Payments</h2>
            <p className="text-gray-700">By placing an order, you confirm that:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>You are legally capable of entering into a binding contract.</li>
              <li>Payment information provided is accurate.</li>
              <li>CK Textile reserves the right to reject or cancel orders.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Shipping & Returns</h2>
            <p className="text-gray-700">
              Shipping timelines vary by location. Our return and refund policies 
              follow the guidelines mentioned on the “Returns & Exchanges” page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Intellectual Property</h2>
            <p className="text-gray-700">
              All content including images, designs, logo, and text belong to CK Textile.  
              Using or copying content without permission is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
            <p className="text-gray-700">
              CK Textile is not responsible for any loss or damage arising from misuse of products or delays in service.
            </p>
          </section>

          <section className="bg-teal-50 p-6 rounded-xl border border-teal-200">
            <div className="flex items-center mb-3">
              <FiCheckCircle className="text-2xl text-teal-600 mr-2" />
              <h2 className="text-2xl font-bold text-teal-900">Contact for Legal Queries</h2>
            </div>
            <p className="text-teal-800">
              Email: legal@cktextile.com  
              <br />
              Phone: +91-XXXXX-XXXXX
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
