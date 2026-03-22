import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Calendar, CheckCircle, Clock, X } from "lucide-react";

const allServices = [
  {
    id: 1,
    name: "Electric",
    description: "Certified electricians for installations and repairs.",
    locations: ["Islamabad", "Lahore"],
    pricePerHour: 30,
    timeSlots: ["9:00 AM - 12:00 PM", "1:00 PM - 4:00 PM"],
  },
  {
    id: 2,
    name: "Painting",
    description: "Interior and exterior painting services with quality finish.",
    locations: ["Karachi"],
    pricePerHour: 15,
    timeSlots: ["8:00 AM - 12:00 PM", "1:00 PM - 5:00 PM"],
  },

  {
    id: 3,
    name: "Carpainter",
    description: "Interior and exterior painting services with quality finish.",
    locations: ["Karachi"],
    pricePerHour: 15,
    timeSlots: ["8:00 AM - 12:00 PM", "1:00 PM - 5:00 PM"],
  },
];

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [modalService, setModalService] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  const handleConfirmBooking = () => {
    if (!selectedLocation || !selectedTime) return;
    const newBooking = {
      id: Date.now(),
      service: modalService.name,
      description: modalService.description,
      location: selectedLocation,
      time: selectedTime,
      pricePerHour: modalService.pricePerHour,
      date: new Date().toLocaleDateString(),
      status: "Pending",
    };
    const updated = [...bookings, newBooking];
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
    setModalService(null);
    setSelectedLocation("");
    setSelectedTime("");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-teal-50 via-teal-100 to-teal-200 relative overflow-hidden">
        {/* Decorative Background Shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-teal-300 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-teal-400 to-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              Dashboard,{" "}
              <span className="text-teal-700">
                {localStorage.getItem("username") || "User"}
              </span>
            </h1>
            <p className="text-gray-600 mt-1">
              Welcome back! Here’s your activity.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
              <CheckCircle className="text-green-500" />
              <div>
                <p className="text-gray-500 text-sm">Total Bookings</p>
                <h2 className="text-2xl font-bold">{bookings.length}</h2>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
              <Clock className="text-yellow-500" />
              <div>
                <p className="text-gray-500 text-sm">Pending</p>
                <h2 className="text-2xl font-bold">
                  {bookings.filter((b) => b.status === "Pending").length}
                </h2>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
              <Calendar className="text-blue-500" />
              <div>
                <p className="text-gray-500 text-sm">Upcoming</p>
                <h2 className="text-2xl font-bold">
                  {bookings.filter((b) => b.status === "Upcoming").length}
                </h2>
              </div>
            </div>
          </div>

          {/* My Bookings Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              My Bookings
            </h2>
            {bookings.length === 0 ? (
              <div className="bg-white p-10 rounded-2xl shadow text-center">
                <p className="text-gray-500">No services booked yet.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {bookings.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.service}
                    </h3>
                    <p className="text-gray-500 text-sm mb-1">📅 {item.date}</p>
                    <p className="text-gray-500 text-sm mb-1">
                      📍 {item.location}
                    </p>
                    <p className="text-gray-500 text-sm mb-1">⏰ {item.time}</p>
                    <span
                      className={`inline-block mt-3 px-3 py-1 text-sm rounded-full font-medium ${item.status === "Completed" ? "bg-green-100 text-green-600" : item.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-blue-100 text-blue-600"}`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* New Service Booking */}
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Book a New Service
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {allServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {service.description}
                  </p>
                  <button
                    onClick={() => setModalService(service)}
                    className="mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {modalService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setModalService(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">{modalService.name}</h2>
            <p className="text-gray-500 mb-3">{modalService.description}</p>

            <label className="block mb-2 text-gray-700">Select Location:</label>
            <select
              className="w-full p-2 mb-4 border rounded"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Choose Location</option>
              {modalService.locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            <label className="block mb-2 text-gray-700">
              Select Time Slot:
            </label>
            <select
              className="w-full p-2 mb-4 border rounded"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Choose Time Slot</option>
              {modalService.timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <p className="mb-4 text-gray-700">
              Price per Hour: ${modalService.pricePerHour}
            </p>
            <button
              onClick={handleConfirmBooking}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 w-full"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Dashboard;
