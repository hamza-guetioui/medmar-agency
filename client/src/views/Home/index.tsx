import React from "react";

import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import OurClient from "./components/OurClient";
import AboutUs from "./components/AboutUs";

function Index() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
       <Reviews />
      <OurClient /> 
      <AboutUs />
    </main>
  );
}

export default Index;
