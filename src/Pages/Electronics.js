// export default function ElectronicsService() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white pt-20">
//       {/* Hero */}
//       <section
//         data-aos="fade-down"
//         className="h-[420px] flex items-center justify-center
//         bg-[url('https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=1200')]
//         bg-cover bg-center relative"
//       >
//         <div className="absolute inset-0 bg-black/70"></div>
//         <h1 className="relative text-5xl font-bold">Electronics Services</h1>
//       </section>

//       <div className="h-24"></div>

//       {/* Cards */}
//       <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8 ">
//         {["AC Repair", "Wiring", "Fan Repair"].map((item, i) => (
//           <div
//             key={i}
//             data-aos="fade-up"
//             data-aos-delay={i * 150}
//             className="bg-gradient-to-br to-gray-800 from-teal-800 p-8 rounded-xl border border-gray-800
//             hover:border-indigo-500 transition"
//           >
//             <h3 className="text-xl font-semibold mb-3">{item}</h3>
//             <p className="text-gray-400">
//               Certified technicians delivering safe and fast electronic
//               solutions.
//             </p>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function ElectronicsService() {
  const [services] = useState([
    {
      name: "AC Repair",
      description:
        "Certified technicians delivering safe and fast electronic solutions.",
      employees: [
        {
          name: "Ali",
          location: "Karachi",
          availableTime: "10:00 AM - 4:00 PM",
        },
        {
          name: "Sara",
          location: "Lahore",
          availableTime: "12:00 PM - 6:00 PM",
        },
        {
          name: "Ahmed",
          location: "Islamabad",
          availableTime: "9:00 AM - 3:00 PM",
        },
        {
          name: "Ayesha",
          location: "Karachi",
          availableTime: "11:00 AM - 5:00 PM",
        },
      ],
    },
    {
      name: "Wiring",
      description: "Expert electricians to handle safe and reliable wiring.",
      employees: [
        {
          name: "Bilal",
          location: "Karachi",
          availableTime: "10:00 AM - 4:00 PM",
        },
        {
          name: "Hina",
          location: "Lahore",
          availableTime: "12:00 PM - 6:00 PM",
        },
        {
          name: "Usman",
          location: "Islamabad",
          availableTime: "9:00 AM - 3:00 PM",
        },
        {
          name: "Fatima",
          location: "Karachi",
          availableTime: "11:00 AM - 5:00 PM",
        },
      ],
    },
    {
      name: "Fan Repair",
      description: "Quick fan repair and maintenance by certified staff.",
      employees: [
        {
          name: "Kamran",
          location: "Karachi",
          availableTime: "10:00 AM - 4:00 PM",
        },
        {
          name: "Maryam",
          location: "Lahore",
          availableTime: "12:00 PM - 6:00 PM",
        },
        {
          name: "Sami",
          location: "Islamabad",
          availableTime: "9:00 AM - 3:00 PM",
        },
        {
          name: "Zara",
          location: "Karachi",
          availableTime: "11:00 AM - 5:00 PM",
        },
      ],
    },
  ]);

  const handleBooking = (service, employee) => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push({
      id: Date.now(),
      service: service.name,
      employee: employee.name,
      location: employee.location,
      time: employee.availableTime,
      status: "Pending",
    });
    localStorage.setItem("bookings", JSON.stringify(bookings));
    alert(
      `Service booked with ${employee.name} at ${employee.location} (${employee.availableTime})`,
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero */}
      <section
        data-aos="fade-down"
        className="h-[420px] flex items-center justify-center 
        bg-[url('https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=1200')] 
        bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <h1 className="relative text-5xl font-bold">Electronics Services</h1>
      </section>

      <div className="h-24"></div>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="bg-gradient-to-br to-gray-800 from-teal-800 p-8 rounded-xl border border-gray-800 hover:border-indigo-500 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
            <p className="text-gray-400 mb-3">{service.description}</p>

            <h4 className="font-semibold mb-2">Available Employees:</h4>
            <ul className="space-y-1 mb-4">
              {service.employees.map((emp, idx) => (
                <li key={idx} className="text-gray-300">
                  {emp.name} - {emp.location} ({emp.availableTime})
                  <button
                    onClick={() => handleBooking(service, emp)}
                    className="ml-2 px-3 py-1 bg-teal-600 text-gray-900 rounded hover:bg-teal-500 transition"
                  >
                    Book Now
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
