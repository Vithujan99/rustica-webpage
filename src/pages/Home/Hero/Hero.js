import React, { useState } from "react";

import HeroImg1 from "../../../asset/pizza-time-tasty-homemade-traditional-pizza-italian-recipe-low.webp";
import HeroImg2 from "../../../asset/vintage-old-rustic-cutlery-dark-low.webp";
import "./Hero.css";

const Hero = () => {
  //change nav when scrolling
  const [imgH, setImgH] = useState(HeroImg1);
  const handleImgH = () => {
    if (window.innerWidth <= 800) {
      setImgH(HeroImg2);
    } else {
      setImgH(HeroImg1);
    }
  };
  window.addEventListener("resize", handleImgH);
  return (
    <div className="hero-container container">
      <div className="hero-spaceholder"></div>
      <div className="hero-content">
        <h1 className="hero-heading">
          Willkommen zu <span>Rustica</span>
        </h1>
        <p className="hero-text">
          Das beste verfügbare Restaurant in Mönchengladbach
        </p>
        <p className="hero-text">
          Buche Online oder rufe
          <span className="spacial-word"> 0216688844</span>
        </p>
      </div>
      {console.log(imgH)}
      <img
        className="hero-image"
        alt="Pizza auf Schwarzen Brett"
        src={window.innerWidth <= 800 ? HeroImg2 : HeroImg1}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Hero;
