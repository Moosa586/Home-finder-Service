import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">Home Services</h1>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-4 font-medium">
          <li>
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-white hover:bg-teal-600 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Servicers"
              className="px-4 py-2 rounded-lg text-white hover:bg-teal-600 transition"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="px-4 py-2 rounded-lg text-white hover:bg-teal-600 transition"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="px-4 py-2 rounded-lg text-white hover:bg-teal-600 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Sign In Button Desktop */}
        <Link
          to="/Login"
          className="hidden md:inline-block bg-teal-900 text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition"
        >
          Sign In
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-teal-700">
          <Link
            to="/"
            className="block px-4 py-2 rounded-lg text-white hover:bg-teal-600 transition"
          >
            Home
          </Link>
          <Link
            to="/Servicers"
            className="block px-4 py-2 rounded-lg text-white hover:bg-teal-600 transition"
          >
            Services
          </Link>
          <Link
            to="/About"
            className="block px-4 py-2 rounded-lg text-white hover:bg-teal-600 transition"
          >
            About Us
          </Link>
          <Link
            to="/Contact"
            className="block px-4 py-2 rounded-lg text-white hover:bg-teal-600 transition"
          >
            Contact
          </Link>
          <Link
            to="/Login"
            className="block bg-teal-900 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
