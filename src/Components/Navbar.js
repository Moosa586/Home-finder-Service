import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-teal-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">Home Services</h1>

        {/* Links / Buttons */}
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

        {/* Sign In Button */}
        <Link
          to="/Login"
          className="bg-teal-900 text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="bg-teal-700 shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-3xl font-bold text-white">Home Services</h1>

//         {/* Links */}
//         <ul className="hidden md:flex space-x-4 font-medium">
//           <li>
//             <Link
//               to="/"
//               className="px-4 py-2 rounded-lg text-white hover:bg-teal-600 transition"
//             >
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="/Booking"
//               className="px-4 py-2 rounded-lg text-white hover:bg-teal-600 transition"
//             >
//               Booking Services
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="/Servicers"
//               className="px-4 py-2 rounded-lg text-white hover:bg-teal-600 transition"
//             >
//               Services
//             </Link>
//           </li>

//           <li>
//             {/* <Link
//               to="/contact"
//               className="px-4 py-2 rounded-lg text-white hover:bg-teal-600 transition"
//             >
//               Contact
//             </Link> */}
//           </li>
//         </ul>

//         {/* Sign In */}
//         {/* <Link
//           to="/signin"
//           className="bg-teal-900 text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition"
//         >
//           Sign In
//         </Link> */}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
