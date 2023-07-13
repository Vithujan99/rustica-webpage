import React from "react";
import { Link } from "react-router-dom";

import "./MenuContent.css";

const MenuContent = () => {
  return (
    <div class="home-menu">
      <div className="titel-holder">
        <Link className="menu-titel" to="/rustica-webpage/menu">
          Menu
        </Link>
      </div>
      <div class="container">
        <ul>
          <li>Menu1</li>
          <li>Menu2</li>
          <li>Menu3</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuContent;
