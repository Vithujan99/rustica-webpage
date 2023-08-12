import React from "react";

import "./Hero.css";
import HeroImg from "../../../asset/pizza-time-tasty-homemade-traditional-pizza-italian-recipe-low.webp";

const Hero = () => {
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
          <span className="spacial-word"> 021668544178</span>
        </p>
      </div>
      <img
        className="hero-image"
        alt="Pizza auf Schwarzen Brett"
        src={HeroImg}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Hero;
