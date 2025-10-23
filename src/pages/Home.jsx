import React from "react";
import HomeCatalog from "../components/HomeCatalog";
import About from "../components/About";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Catalog / Hero Section */}
      <section className="pt-6 sm:pt-10 px-3 sm:px-6">
        <HomeCatalog />
      </section>

      {/* About Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-10 bg-white shadow-md rounded-2xl mx-3 sm:mx-10 mt-6">
        <div className="text-center sm:text-left">
          <About />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <ContactUs />
        </div>
      </section>
    </div>
  );
};

export default Home;
