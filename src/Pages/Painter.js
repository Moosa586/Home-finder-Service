// export default function PainterService() {
//   return (
//     <div className="min-h-screen bg-gray-900">
//       {/* Hero */}
//       <section
//         data-aos="fade-down"
//         className="relative h-[420px] flex items-center justify-center
//         bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200')]
//         bg-cover bg-center"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-indigo-600/70"></div>
//         <h1 className="relative text-white text-5xl font-bold">
//           Painter Services
//         </h1>
//       </section>

//       {/* Content */}
//       <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
//         <img
//           data-aos="zoom-in"
//           className="rounded-3xl shadow-xl"
//           src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=900"
//           alt=""
//         />

//         <div data-aos="fade-left">
//           <h2 className="text-3xl font-bold mb-4 text-white">
//             Bring Colors to Life
//           </h2>
//           <p className="text-orange-300 mb-6">
//             Professional wall painting, texture finishes, waterproof coating and
//             full home renovation solutions.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import painter1 from "../Assets/Images/ernys-57ldq9age5U-unsplash.jpg";
import painter2 from "../Assets/Images/Texture Finish.jpg";
import painter3 from "../Assets/Images/Exterior Painting.jpg";

export default function PainterService() {
  const services = [
    {
      name: "Wall Painting",
      description: "Professional wall painting with premium paints.",
      employees: [
        {
          name: "Ali Khan",
          location: "Karachi",
          available: "10:00 AM - 4:00 PM",
        },
        {
          name: "Sara Ahmed",
          location: "Karachi",
          available: "12:00 PM - 6:00 PM",
        },
      ],
      image: painter1,
      price: 30,
    },
    {
      name: "Texture Finish",
      description: "Add unique textures to walls for a modern look.",
      employees: [
        {
          name: "Omar Raza",
          location: "Lahore",
          available: "9:00 AM - 3:00 PM",
        },
        {
          name: "Hina Malik",
          location: "Lahore",
          available: "11:00 AM - 5:00 PM",
        },
      ],
      image: painter2,
      price: 35,
    },
    {
      name: "Exterior Painting",
      description: "Durable and weatherproof exterior painting services.",
      employees: [
        {
          name: "Bilal Sheikh",
          location: "Islamabad",
          available: "10:00 AM - 2:00 PM",
        },
        {
          name: "Fatima Noor",
          location: "Islamabad",
          available: "1:00 PM - 5:00 PM",
        },
      ],
      image: painter3,
      price: 40,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        className="relative h-[420px] flex items-center justify-center
        bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200')]
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-indigo-600/70"></div>
        <h1 className="relative text-5xl font-bold text-teal-400">
          Painter Services
        </h1>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-teal-400 transition"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-teal-400">
                {service.name}
              </h3>
              <p className="text-gray-300 mb-4">{service.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-1">Available Painters:</h4>
                {service.employees.map((emp, i) => (
                  <p key={i} className="text-gray-400 text-sm">
                    {emp.name} - {emp.location} ({emp.available})
                  </p>
                ))}
              </div>

              <p className="text-orange-300 font-semibold mb-3">
                Price per hour: ${service.price}
              </p>

              <button className="w-full bg-teal-400 text-gray-900 py-2 rounded-lg hover:bg-teal-500 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
