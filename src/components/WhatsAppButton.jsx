import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/9952800199";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 md:bottom-24 right-4 md:right-6 bg-gradient-to-r from-green-500 to-green-600 text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl transition-all duration-500 hover:shadow-3xl transform hover:scale-110 z-40 flex items-center justify-center group"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={20} className="md:text-[24px] group-hover:scale-110 transition-transform duration-300" />
      
      {/* Tooltip */}
      <span className="absolute -top-10 md:-top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs md:text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
