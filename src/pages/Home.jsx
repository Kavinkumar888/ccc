import React from "react";
import HomeCatalog from "../components/HomeCatalog";
import About from "../components/About";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero / Catalog Section */}
      <section className="pt-8">
        <HomeCatalog />
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8 bg-white shadow-sm rounded-2xl my-8 mx-2 md:mx-12">
        <About />
      </section>

      {/* Contact Section */}
      <section className="pb-12 px-4 md:px-8">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
