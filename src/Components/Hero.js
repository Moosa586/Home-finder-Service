// function Hero() {
//   return (
//     <section className="bg-gradient-to-r from-teal-700 to-indigo-600 text-white">
//       <div className="max-w-7xl mx-auto px-6 py-20 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           Find Your Perfect Home
//         </h2>
//         <p className="text-lg mb-8 text-blue-100">
//           Search homes, apartments and plots at the best locations
//         </p>

//         <div className="bg-white p-4 rounded-xl flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
//           <input
//             type="text"
//             placeholder="City or Location"
//             className="flex-1 border rounded-lg px-4 py-3 text-gray-700"
//           />
//           <select className="border rounded-lg px-4 py-3 text-gray-700">
//             <option>Buy</option>
//             <option>Rent</option>
//           </select>
//           <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
//             Search
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
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
          <Link to="/Booking">
          <button  className="border border-white hover:bg-teal-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
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
