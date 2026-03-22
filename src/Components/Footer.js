// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h4 className="text-xl font-bold text-white">HomeFinder</h4>
//         <p className="mt-3 text-sm">
//           © 2026 HomeFinder. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   )
// }

import React from "react";

export default function Footer() {
  return (
    <footer
      className="
    bg-teal-700 text-gray-100 py-16"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-100  mb-4">
            HomeServices
          </h2>
          <p className="text-gray-300 ">
            Trusted professionals at your doorstep. Painter, Electronics,
            Carpenter services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Book Service</li>

            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Painter</li>
            <li className="hover:text-white cursor-pointer">Electronics</li>
            <li className="hover:text-white cursor-pointer">Carpenter</li>
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
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-100  text-sm">
        &copy; {new Date().getFullYear()} HomeServices. All rights reserved.
      </div>
    </footer>
  );
}
