import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-br to-gray-800 from-teal-800  text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            Home Services
          </h2>
          <p className="text-gray-300">
            Trusted professionals at your doorstep. Painter, Electronics,
            Carpenter services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Servicers" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/Painter" className="hover:text-white transition">
                Painter
              </Link>
            </li>
            <li>
              <Link to="/Electronics" className="hover:text-white transition">
                Electronics
              </Link>
            </li>
            <li>
              <Link to="/Carpenter" className="hover:text-white transition">
                Carpenter
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p className="text-gray-300 mb-2">123 Street, City, Country</p>
          <p className="text-gray-300 mb-2">Phone: +92 300 1234567</p>
          <p className="text-gray-300 mb-2">Email: info@homeservices.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-400 pt-6 text-center text-orange-300 text-sm">
        &copy; {new Date().getFullYear()} HomeServices. All rights reserved.
      </div>
    </footer>
  );
}
