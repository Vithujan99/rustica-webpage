import React from "react";
import Hero from "./Hero/Hero";
import MenuContent from "./MenuContent/MenuContent";
import RentContent from "./RentContent/RentContent";

const Home = () => {
  return (
    <div>
      <Hero />
      <MenuContent />
      <RentContent />
    </div>
  );
};

export default Home;
