import React from "react";
import { Link } from "react-router-dom";

import "./RentContent.css";

const RentContent = () => {
  return (
    <div class="rent-content">
      <div className="button-holder">
        <Link className="rent-titel" to="/rustica-webpage/menu">
          Raum Mieten
        </Link>
      </div>
    </div>
  );
};

export default RentContent;
