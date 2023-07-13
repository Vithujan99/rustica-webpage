import React from "react";
import { Link } from "react-router-dom";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div class="aboutus-content">
      <div className="titel-holder">
        <Link className="aboutus-titel" to="/rustica-webpage/about">
          Über Uns
        </Link>
      </div>
      <div className="container aboutus">
        <div className="aboutus-text"></div>
        <div className="aboutus-map"></div>
      </div>
    </div>
  );
};

export default AboutUs;
