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
        <div className="aboutus-map">
          <h2>ÖffnungsZeiten</h2>
          <ul>
            <li>
              <span>Mo-Di:</span> 17:30-22:30
            </li>
            <li>
              <span>Mi-Do:</span> 11:30-14:30 und 17:30 - 22:30
            </li>
            <li>
              <span>Fr:</span> 11:30-14:30 und 17:30 - 23:00
            </li>
            <li>
              <span>Sa:</span> 17:00-23:00
            </li>
            <li>
              <span>So/Feiertags:</span> 17:00-22:30
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
