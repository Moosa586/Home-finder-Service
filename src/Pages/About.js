import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Users, Star, Globe } from "lucide-react";

function About() {
  return (
    <>
      <Navbar />

      {/* Background */}
      <div className="min-h-screen relative bg-gray-900 overflow-hidden">
        {/* Decorative animated shapes */}

        <div className="relative z-10 max-w-6xl mx-auto p-6 md:p-10">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            About Us
          </h1>
          <p className="text-orange-300 text-center mb-12 max-w-3xl mx-auto">
            Welcome to our platform! We are dedicated to providing the best
            services to make your life easier and more comfortable. Our team is
            committed to quality, reliability, and customer satisfaction.
          </p>

          {/* Features/Sections */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
              <Users className="text-teal-400 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Our Team
              </h3>
              <p className="text-orange-300 text-sm">
                A talented group of professionals working to deliver top-notch
                services for our users.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
              <Star className="text-teal-400 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Quality Service
              </h3>
              <p className="text-orange-300 text-sm">
                We maintain the highest standards in every service we provide to
                ensure customer satisfaction.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
              <Globe className="text-teal-400 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Global Reach
              </h3>
              <p className="text-orange-300 text-sm">
                Our platform connects users and services across multiple
                locations for convenience and accessibility.
              </p>
            </div>
          </div>

          {/* Team Section or Story */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-orange-300 max-w-2xl mx-auto">
              To provide reliable, high-quality services to all users, making it
              easier to find and book the services you need in your location. We
              strive to create a seamless experience that saves time and brings
              satisfaction.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
