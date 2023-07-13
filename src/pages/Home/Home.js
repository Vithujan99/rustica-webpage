import React from "react";
import Hero from "./Hero/Hero";
import MenuContent from "./MenuContent/MenuContent";
import RentContent from "./RentContent/RentContent";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <MenuContent />
      <RentContent />
      <AboutUs />
    </div>
  );
};

export default Home;
