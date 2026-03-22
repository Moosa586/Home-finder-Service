import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (existingUsers.find((u) => u.email === email)) {
      alert("User already exists");
      return;
    }

    const newUser = { id: Date.now(), name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    localStorage.setItem("username", name); // Save for dashboard

    alert("Registration successful!");
    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center relative">
        {/* Dark Modern Background like Login */}
        <div className="absolute inset-0 bg-gradient-to-br to-gray-800 from-teal-800 overflow-hidden">
          <div className="absolute bottom-[-150px] left-[-120px] w-128 h-128 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-full opacity-30 filter blur-3xl animate-spin-slow"></div>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md relative z-10">
          <h2 className="text-3xl font-bold text-center text-teal-400 mb-6">
            Create Account
          </h2>

          <form className="space-y-4" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none bg-gray-900 text-white border-gray-700"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none bg-gray-900 text-white border-gray-700"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none bg-gray-900 text-white border-gray-700"
              required
            />

            <button
              type="submit"
              className="w-full bg-teal-400 text-gray-900 py-2 rounded-lg hover:bg-teal-500 transition"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-4 text-gray-300">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-400 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
