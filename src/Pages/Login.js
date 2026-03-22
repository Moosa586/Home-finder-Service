import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      navigate("/admin");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find((u) => u.email === email);

    if (!userExists) {
      existingUsers.push({ name, email, password, id: Date.now() });
      localStorage.setItem("users", JSON.stringify(existingUsers));
    }

    if (userExists) {
      localStorage.setItem("username", userExists.name);
    } else {
      localStorage.setItem("username", name);
    }

    if ((email === "user@gmail.com" && password === "123456") || userExists) {
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center relative">
        {/* Dark Modern Background similar to About page */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden"></div>

        <div className="bg-gradient-to-br to-gray-800 from-teal-800 p-8 rounded-xl shadow-lg w-full max-w-md relative z-10">
          <h2 className="text-3xl font-bold text-center text-teal-400 mb-6">
            Sign In
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
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

            <button className="w-full bg-teal-400 text-gray-900 py-2 rounded-lg hover:bg-teal-500 transition">
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-gray-300">
            Don't have an account?{" "}
            <Link to="/register" className="text-teal-400 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
