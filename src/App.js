import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import Servicers from "./Pages/Servicers";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/UserDashboard";
import Admin from "./Pages/Admin";
import Carpenter from "./Pages/Carpenter";
import Electronics from "./Pages/Electronics";
import Painter from "./Pages/Painter";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false, // IMPORTANT: animation repeats
      mirror: true, // animation runs when scrolling up also
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Servicers" element={<Servicers />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Carpenter" element={<Carpenter />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Painter" element={<Painter />} />
      </Routes>
    </Router>
  );
}
export default App;
