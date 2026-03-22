import React from "react";
import Image from "../Assets/Images/bg-1.png";

import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div
      data-aos="fade-in"
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Professional Home Services
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-lg md:text-xl mb-8 text-gray-200"
        >
          Painter, Electronics Repair aur Carpenter services – trusted
          professionals at your doorstep.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/login">
            <button className="border border-white hover:bg-teal-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
              Book Now
            </button>
          </Link>

          <Link to="/Servicers">
            <button className="border border-white hover:bg-teal-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
              View Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
