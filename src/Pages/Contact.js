import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-teal-700 text-white py-16 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-3 text-lg">
            We are here to help you with your home service needs
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-700">Get In Touch</h2>
            <p className="text-gray-600">
              If you need carpenter, electrician, or painter services, please
              contact us. Our team will respond quickly.
            </p>

            <div className="bg-white p-5 rounded-lg shadow">
              <p>
                <strong>Phone:</strong> +92 300 1234567
              </p>
              <p>
                <strong>Email:</strong> homeservices@gmail.com
              </p>
              <p>
                <strong>Location:</strong> Sindh, Pakistan
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Send Message</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              ></textarea>

              <button className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
