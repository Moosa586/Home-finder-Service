// import { useState } from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// export default function Booking() {
//   const [formData, setFormData] = useState({
//     service: "",
//     name: "",
//     phone: "",
//     address: "",
//     date: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Booking Submitted Successfully!");
//     console.log(formData);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//         <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8">
//           <h1 className="text-3xl font-bold text-center mb-6">
//             Book a Service
//           </h1>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Service Select */}
//             <div>
//               <label className="block mb-1 font-medium">Select Service</label>
//               <select
//                 name="service"
//                 required
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 <option value="">Choose Service</option>
//                 <option>Painter</option>
//                 <option>Electronics</option>
//                 <option>Carpenter</option>
//               </select>
//             </div>

//             {/* Name */}
//             <div>
//               <label className="block mb-1 font-medium">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 required
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block mb-1 font-medium">Phone Number</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="03XXXXXXXXX"
//                 required
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             {/* Address */}
//             <div>
//               <label className="block mb-1 font-medium">Address</label>
//               <textarea
//                 name="address"
//                 placeholder="Enter your address"
//                 required
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             {/* Date */}
//             <div>
//               <label className="block mb-1 font-medium">Booking Date</label>
//               <input
//                 type="date"
//                 name="date"
//                 required
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition font-semibold"
//             >
//               Confirm Booking
//             </button>
//           </form>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Booking() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const loggedInUserEmail = localStorage.getItem("currentUser");
  const handleBooking = (e) => {
    e.preventDefault();

    if (!service || !date) {
      alert("Please select service and date");
      return;
    }

    const newBooking = {
      id: Date.now(),
      service,
      date,
      status: "Pending",
      email: loggedInUserEmail, // save email
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(existing));

    alert("Service booked successfully!");
    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <form
          onSubmit={handleBooking}
          className="bg-white p-8 rounded-lg shadow w-full max-w-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-teal-700">Book a Service</h2>

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Service</option>
            <option>Carpenter</option>
            <option>Electrician</option>
            <option>Painter</option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <button className="w-full bg-teal-700 text-white py-2 rounded">
            Book Now
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Booking;
