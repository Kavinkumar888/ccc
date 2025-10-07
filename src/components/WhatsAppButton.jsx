import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/1234567890";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 bg-gradient-to-r from-green-500 to-green-600 text-white w-14 h-14 rounded-full shadow-2xl transition-all duration-500 hover:shadow-3xl transform hover:scale-110 z-40 flex items-center justify-center group"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={24} className="group-hover:scale-110 transition-transform duration-300" />
      <span className="absolute -top-8 bg-green-500 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;