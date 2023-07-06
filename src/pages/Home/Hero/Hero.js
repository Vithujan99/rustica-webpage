import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-img container">
      <div className="hero-content">
        <h1 className="hero-heading">
          Welcome to <span>Rustica</span>
        </h1>
        <p className="hero-text">
          The best gourmet restaurant available in Manhatten
        </p>
        <p className="hero-text">
          Book online or call<span className="spacial-word"> 021668544178</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
