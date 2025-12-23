import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const FAQ = () => {
  const titleRef = useRef(null);
  const faqRef = useRef(null);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqData = [
    {
      q: "Do you offer Cash on Delivery?",
      a: "Yes. COD is available in most serviceable pincodes across India.",
    },
    {
      q: "How long does delivery take?",
      a: "Delivery usually takes 3–7 working days depending on your location.",
    },
    {
      q: "Can I return a purchased item?",
      a: "Yes. You can return within 7 days of delivery if the product is unused.",
    },
    {
      q: "Do you provide bulk orders?",
      a: "Yes. We handle bulk textile orders for events, corporate needs, and wholesalers.",
    },
    {
      q: "How do I track my order?",
      a: "A tracking link will be shared by SMS/WhatsApp once shipped.",
    },
  ];

  useEffect(() => {
    gsap.from(titleRef.current, { opacity: 0, y: -30, duration: 0.8 });
    gsap.from(faqRef.current, { opacity: 0, duration: 1, delay: 0.3 });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5">
      <h1
        ref={titleRef}
        className="text-4xl font-extrabold text-center mb-8 text-gray-800"
      >
        Frequently Asked Questions
      </h1>

      <div
        ref={faqRef}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-200"
      >
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b py-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold text-gray-700 flex justify-between items-center">
              {item.q}
              <span className="text-xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </h3>

            {openIndex === index && (
              <p className="mt-2 text-gray-600">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
