import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
// import Properties from "../Components/Properties";

import Footer from "../Components/Footer";

import Electronics from "./Electronics";
import Painter from "./Painter";
import Carpenter from "./Carpenter";
import WhyUs from "./WhyUs";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Electronics />
      <Painter />
      <Carpenter />
      <WhyUs />
      <Footer />
    </div>
  );
}
export default Home;
