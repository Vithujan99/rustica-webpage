import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-img container">
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
    </div>
  );
};

export default Hero;
