// import React from "react";
// import Navbar from "../Components/Navbar";

// const bookings = [
//   {
//     id: 1,
//     service: "Painter",
//     date: "2026-01-10",
//     address: "Karachi, Gulshan Block 5",
//     status: "Pending",
//   },
//   {
//     id: 2,
//     service: "Electronics",
//     date: "2026-01-12",
//     address: "Lahore, Johar Town",
//     status: "Confirmed",
//   },
//   {
//     id: 3,
//     service: "Carpenter",
//     date: "2026-01-15",
//     address: "Islamabad, G-10",
//     status: "Completed",
//   },
// ];

// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-teal-700 p-6">
//       <Navbar />
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold">User Dashboard</h1>
//           <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">
//             New Booking
//           </button>
//         </div>

//         {/* Booking Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {bookings.map((booking) => (
//             <div
//               key={booking.id}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//             >
//               <h2 className="text-xl font-semibold mb-2">
//                 {booking.service} Service
//               </h2>

//               <p className="text-gray-600 mb-1">📅 Date: {booking.date}</p>

//               <p className="text-gray-600 mb-1">
//                 📍 Address: {booking.address}
//               </p>

//               <span
//                 className={`inline-block mt-3 px-3 py-1 text-sm rounded-full
//                 ${
//                   booking.status === "Pending"
//                     ? "bg-yellow-100 text-yellow-700"
//                     : booking.status === "Confirmed"
//                     ? "bg-blue-100 text-blue-700"
//                     : "bg-green-100 text-green-700"
//                 }`}
//               >
//                 {booking.status}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  return (
    <>
      {" "}
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-3xl font-bold text-teal-700">User Dashboard</h1>

        <h2 className="mt-6 text-xl font-semibold">My Booked Services</h2>

        {bookings.length === 0 ? (
          <p className="mt-4 text-gray-500">No services booked yet.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-5 mt-4">
            {bookings.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-lg shadow">
                <p>
                  <strong>Service:</strong> {item.service}
                </p>
                <p>
                  <strong>Date:</strong> {item.date}
                </p>
                <p><strong>Status:</strong> {item.status}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
