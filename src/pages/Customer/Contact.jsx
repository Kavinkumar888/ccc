// src/pages/Contact.jsx
import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Navigation, Clock } from "lucide-react";
import emailjs from "emailjs-com";
import gsap from "gsap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");

  const [distance, setDistance] = useState(null);
  const [travelTime, setTravelTime] = useState(null);

  const contactRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      );

      setSendStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSendStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="min-h-screen py-16 px-4 flex justify-center"
    >
      <div ref={contactRef} className="max-w-6xl w-full">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-blue-900 drop-shadow">
            Contact Us
          </h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto mt-3">
            Reach out to SSS Ventures for all premium textile requirements,
             bulk orders
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE – INFO CARD */}
          <div className="space-y-10">

            {/* INFO CARD */}
            <div className="bg-white/65 backdrop-blur-xl border border-blue-100 shadow-[0_8px_25px_rgba(0,70,200,0.12)] rounded-2xl p-8">

              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">

                {/* EMAIL */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-650 rounded-xl flex items-center justify-center text-white">
                    <Mail />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-900">
                      Email
                    </h3>
                    <a
                      href="mailto:support@cktextile.in"
                      className="text-blue-700 hover:text-blue-900"
                    >
                      support@cktextile.in
                    </a>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-650 rounded-xl flex items-center justify-center text-white">
                    <Phone />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-900">
                      Phone
                    </h3>
                    <a
                      href="tel:+919585519593"
                      className="text-blue-700 hover:text-blue-900"
                    >
                     +91 99528 00199
                    </a>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-650 rounded-xl flex items-center justify-center text-white">
                    <MapPin />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-900">
                      Address
                    </h3>
                    <p className="text-blue-700 leading-relaxed">
                     N.S Building, 103-F Arunachala Asari Street, Salem-636001
                    </p>
                  </div>
                </div>
              </div>

              {/* BUSINESS HOURS */}
              <div className="mt-8 pt-5 border-t border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="text-blue-700" />
                  <h3 className="text-lg font-semibold text-blue-900">
                    Business Hours
                  </h3>
                </div>

                <p className="flex justify-between text-blue-800">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold">9:00 AM - 7:00 PM</span>
                </p>
                <p className="flex justify-between text-blue-800">
                  <span>Sunday</span>
                  <span className="font-semibold text-red-600">Closed</span>
                </p>
              </div>
            </div>

            {/* DISTANCE BOX */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,60,200,0.22)]">
              <h3 className="text-2xl font-bold mb-2">Distance Calculator</h3>
              <p className="opacity-90 mb-6">
                Check how far you are from our factory
              </p>

              <button className="w-full bg-white text-blue-700 font-semibold py-3 rounded-xl mb-3 hover:bg-blue-100 transition">
                Find My Distance
              </button>

              <button className="w-full border border-white text-white font-semibold py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
                Get Directions
              </button>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="bg-white/65 backdrop-blur-xl border border-blue-100 shadow-[0_8px_25px_rgba(0,70,200,0.12)] rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/80 border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/80 border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />

              {/* SUBJECT */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/80 border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />

              {/* MESSAGE */}
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/80 border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />

              {/* SEND BUTTON */}
              <button
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold hover:from-blue-800 hover:to-blue-950 shadow-[0_4px_15px_rgba(0,60,200,0.25)] flex items-center justify-center gap-3"
              >
                {isSending ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send size={20} />
                )}
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {/* STATUS */}
              {sendStatus === "success" && (
                <p className="text-green-700 bg-green-100 p-3 rounded-xl text-center">
                  Message sent successfully!
                </p>
              )}
              {sendStatus === "error" && (
                <p className="text-red-700 bg-red-100 p-3 rounded-xl text-center">
                  Failed to send message. Try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
