import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const services = [
  {
    title: "Painter",
    desc: "Professional painting, texture finishing and home renovation services.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000",
    link: "/Painter",
  },
  {
    title: "Electronics",
    desc: "Certified technicians for AC repair, wiring, fan repair and maintenance.",
    image:
      "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=1000",
    link: "/Electronics",
  },
  {
    title: "Carpenter",
    desc: "Custom furniture, cabinets, doors and professional wood polishing.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000",
    link: "/Carpenter",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-24">
        {/* Header */}
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-20 px-6"
        >
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 text-lg">
            Choose from our trusted professional home services tailored for your
            needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {services.map(function (service, index) {
            return (
              <Link
                to={service.link}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl transition"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                  <p className="text-gray-600 mb-6">{service.desc}</p>

                  <span className="inline-block text-indigo-600 font-semibold group-hover:underline">
                    View Service →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
