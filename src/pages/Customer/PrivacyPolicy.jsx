import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiShield, 
  FiLock, 
  FiUser, 
  FiCreditCard, 
  FiMail, 
  FiGlobe,
  FiArrowUp,
  FiCheckCircle
} from 'react-icons/fi';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <FiUser className="text-blue-600" />
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Data',
      icon: <FiGlobe className="text-green-600" />
    },
    {
      id: 'data-protection',
      title: 'Data Protection',
      icon: <FiShield className="text-purple-600" />
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      icon: <FiLock className="text-orange-600" />
    },
    {
      id: 'payment',
      title: 'Payment Security',
      icon: <FiCreditCard className="text-red-600" />
    },
    {
      id: 'rights',
      title: 'Your Rights',
      icon: <FiCheckCircle className="text-teal-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-indigo-700 transition-colors"
      >
        <FiArrowUp size={20} />
      </motion.button>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-100 p-4 rounded-2xl">
              <FiShield className="text-4xl text-indigo-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-green-800 font-semibold">
              Last Updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FiMail className="mr-2 text-indigo-600" />
                Quick Navigation
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      document.getElementById(section.id)?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                      setActiveSection(section.id);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                      activeSection === section.id
                        ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {section.icon}
                    <span className="ml-3 font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Introduction */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At <strong>CK Textiles</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and make purchases.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy. 
                We comply with applicable data protection laws, including the Information Technology Act, 2000 and its rules.
              </p>
            </section>

            {/* Information We Collect */}
            <section id="information-collection" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FiUser className="text-2xl text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-900 mb-3">Personal Information</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li className="flex items-start">
                      <FiCheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Full name and contact details</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Email address and phone number</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Shipping and billing addresses</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Payment information (processed securely)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-semibold text-green-900 mb-3">Technical Information</h3>
                  <ul className="text-green-800 space-y-2">
                    <li className="flex items-start">
                      <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>IP address and browser type</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Device information and operating system</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Pages visited and time spent on site</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Cookies and usage data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Data */}
            <section id="data-usage" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FiGlobe className="text-2xl text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Data</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <span className="text-green-600 font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Order Processing & Delivery</h3>
                    <p className="text-gray-700">To process your orders, arrange shipping, and provide customer support.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <span className="text-blue-600 font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Communication</h3>
                    <p className="text-gray-700">To send order confirmations, delivery updates, and respond to inquiries.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <span className="text-purple-600 font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Improvement</h3>
                    <p className="text-gray-700">To analyze website usage and improve our products and services.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <span className="text-orange-600 font-bold">04</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Marketing</h3>
                    <p className="text-gray-700">To send promotional offers (only with your consent) and personalized recommendations.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section id="data-protection" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FiShield className="text-2xl text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Data Protection & Security</h2>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-purple-900 mb-4">We implement robust security measures including:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <FiCheckCircle className="text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-purple-800">SSL encryption for data transmission</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheckCircle className="text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-purple-800">Secure payment gateways</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheckCircle className="text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-purple-800">Regular security audits</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheckCircle className="text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-purple-800">Access controls and authentication</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700">
                While we implement industry-standard security measures, no method of transmission over the Internet or electronic storage is 100% secure. 
                We continuously work to enhance our security practices.
              </p>
            </section>

            {/* Cookies & Tracking */}
            <section id="cookies" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FiLock className="text-2xl text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Cookies & Tracking Technologies</h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                  Cookies are files with a small amount of data that may include an anonymous unique identifier.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 mb-2">Types of Cookies We Use:</h4>
                  <ul className="text-orange-800 space-y-1">
                    <li>• <strong>Essential Cookies:</strong> Required for basic site functionality</li>
                    <li>• <strong>Performance Cookies:</strong> Help us understand how visitors interact</li>
                    <li>• <strong>Functional Cookies:</strong> Enable personalized features</li>
                    <li>• <strong>Marketing Cookies:</strong> Used for targeted advertising</li>
                  </ul>
                </div>

                <p className="text-gray-700">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                  However, if you do not accept cookies, you may not be able to use some portions of our service.
                </p>
              </div>
            </section>

            {/* Payment Security */}
            <section id="payment" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FiCreditCard className="text-2xl text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Payment Security</h2>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-red-900 mb-3">Secure Payment Processing</h3>
                <p className="text-red-800 mb-4">
                  All payment transactions are processed through secure payment gateways. We do not store your credit card details on our servers.
                </p>
                <div className="space-y-2 text-red-800">
                  <div className="flex items-center">
                    <FiCheckCircle className="text-red-600 mr-2 flex-shrink-0" />
                    <span>PCI DSS compliant payment processing</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheckCircle className="text-red-600 mr-2 flex-shrink-0" />
                    <span>Tokenization for secure transactions</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheckCircle className="text-red-600 mr-2 flex-shrink-0" />
                    <span>3D Secure authentication</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section id="rights" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FiCheckCircle className="text-2xl text-teal-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-teal-50 rounded-xl p-6">
                  <h3 className="font-semibold text-teal-900 mb-3">Data Access & Control</h3>
                  <ul className="text-teal-800 space-y-2">
                    <li>• Access your personal data</li>
                    <li>• Correct inaccurate data</li>
                    <li>• Request data deletion</li>
                    <li>• Object to data processing</li>
                    <li>• Data portability</li>
                    <li>• Withdraw consent</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="font-semibold text-indigo-900 mb-3">Contact Us</h3>
                  <p className="text-indigo-800 mb-4">
                    To exercise your rights or for any privacy-related questions, contact our Data Protection Officer:
                  </p>
                  <div className="space-y-2 text-indigo-800">
                    <p>📧 Email: privacy@cktextiles.com</p>
                    <p>📞 Phone: +91-XXX-XXXX-XXX</p>
                    <p>📍 Address: [Your Company Address]</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Policy Updates */}
            <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">Policy Updates</h2>
              <p className="text-yellow-800 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                and updating the "Last Updated" date.
              </p>
              <p className="text-yellow-800">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            {/* Consent */}
            <section className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Consent</h2>
              <p className="text-gray-700 text-lg">
                By using our website and services, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;