import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white w-14 h-14 rounded-full shadow-2xl transition-all duration-500 hover:shadow-3xl transform hover:scale-110 focus:outline-none flex items-center justify-center z-40 ${
        showButton ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-lg animate-bounce" />
    </button>
  );
};

export default ScrollToTopButton;