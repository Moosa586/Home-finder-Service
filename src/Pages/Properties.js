// import house1 from "../Assets/Images/image-1.jpg";
// import house2 from "../Assets/Images/996688-86945o.jpg";
// import house3 from "../Assets/Images/image-3.jpg";

// const properties = [
//   {
//     title: "Painter",
//     price: "$250,000",
//     city: "Karachi",
//     image: house1,
//   },
//   {
//     title: "Electricians",
//     price: "$120,000",
//     city: "Lahore",
//     image: house2,
//   },
//   {
//     title: "Corpinter",
//     price: "$180,000",
//     city: "Islamabad",
//     image: house3,
//   },
// ];

// export default function Properties() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <h3 className="text-3xl font-bold mb-10 text-center">Servicers</h3>

//         <div className="grid md:grid-cols-3 gap-8">
//           {properties.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
//             >
//               {/* IMAGE */}
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="h-48 w-full object-cover"
//               />

//               {/* CONTENT */}
//               <div className="p-6">
//                 <h4 className="font-semibold text-lg">{item.title}</h4>
//                 <p className="text-gray-500">{item.city}</p>
//                 <p className="text-blue-600 font-bold mt-2">{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";

// const services = [
//   {
//     title: "Painter Service",
//     desc: "Professional wall painting, home renovation aur texture design services.",
//     image:
//       "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800",
//   },
//   {
//     title: "Electronics Service",
//     desc: "Fan, AC, wiring, switch repair aur electronics maintenance solutions.",
//     image:
//       "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Carpenter Service",
//     desc: "Furniture making, door fixing, cabinets aur wood polishing service.",
//     image:
//       "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
//   },
// ];

// export default function Services() {
//   return (
//     <div className="min-h-screen bg-gray-100 py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-4">
//           Our Home Services
//         </h1>
//         <p className="text-center text-gray-600 mb-12">
//           Trusted professionals for your home maintenance
//         </p>

//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="h-56 w-full object-cover"
//               />

//               <div className="p-6">
//                 <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
//                 <p className="text-gray-600 mb-4">{item.desc}</p>

//                 <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
//                   Book Service
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";

// const services = [
//   {
//     title: "Painter Service",
//     desc: "Professional wall painting, home renovation aur texture design services.",
//     image:
//       "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800",
//   },
//   {
//     title: "Electronics Service",
//     desc: "Fan, AC, wiring, switch repair aur electronics maintenance solutions.",
//     image:
//       "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Carpenter Service",
//     desc: "Furniture making, door fixing, cabinets aur wood polishing service.",
//     image:
//       "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="bg-gray-100 py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Our Home Services
//           </h1>
//           <p className="text-gray-600 text-lg md:text-xl">
//             Trusted professionals for your home maintenance and repairs.
//           </p>
//         </div>

//         {/* Service Cards */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {services.map((item, index) => (
//             <div
//               key={index}
//               className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300"
//             >
//               {/* Image */}
//               <div className="relative h-64">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/25"></div>
//                 {/* Image Title */}
//                 <h2 className="absolute bottom-4 left-4 text-white text-2xl font-semibold drop-shadow-lg">
//                   {item.title}
//                 </h2>
//               </div>

//               {/* Card Content */}
//               <div className="p-6">
//                 <p className="text-gray-700 mb-6">{item.desc}</p>
//                 <button className="w-full py-3 font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-800 rounded-xl hover:from-teal-800 hover:to-teal-500 transition">
//                   Book Service
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";

// // Services Data
// const services = [
//   {
//     title: "Painter Service",
//     desc: "Professional wall painting, home renovation aur texture design services.",
//     image:
//       "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800",
//   },
//   {
//     title: "Electronics Service",
//     desc: "Fan, AC, wiring, switch repair aur electronics maintenance solutions.",
//     image:
//       "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Carpenter Service",
//     desc: "Furniture making, door fixing, cabinets aur wood polishing service.",
//     image:
//       "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="bg-gray-100 py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Our Home Services
//           </h1>
//           <p className="text-gray-600 text-lg md:text-xl">
//             Trusted professionals for your home maintenance and repairs.
//           </p>
//         </div>

//         {/* Service Cards */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300"
//             >
//               {/* Service Image */}
//               <div className="relative h-64">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Dark overlay */}
//                 <div className="absolute inset-0 bg-black/25"></div>
//                 {/* Image Title */}
//                 <h2 className="absolute bottom-4 left-4 text-white text-2xl font-semibold drop-shadow-lg">
//                   {service.title}
//                 </h2>
//               </div>

//               {/* Card Content */}
//               <div className="p-6">
//                 <p className="text-gray-700 mb-6">{service.desc}</p>
//                 <button className="w-full py-3 font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition">
//                   Book Service
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function Servicers({ title, image, desc, features = [] }) {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section
        className="relative h-96 md:h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-6xl text-white font-bold drop-shadow-lg">
          {title}
        </h1>
      </section>

      {/* Description Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-gray-700 text-lg md:text-xl mb-12">{desc}</p>

        {/* Call To Action */}
        <button className="px-10 py-4 font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 transition">
          Book This Service
        </button>
      </section>

      {/* Features Section */}
      {features.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                {/* Feature Icon Circle */}
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full mb-4 text-2xl font-bold">
                  {feature.title[0]}
                </div>

                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
