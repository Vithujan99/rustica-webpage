import React from "react";
import { Link } from "react-router-dom";

import "./MenuContent.css";

const MenuContent = () => {
  return (
    <div class="home-menu container">
      <div className="button-holder">
        <Link className="menu-titel" to="/rustica-webpage/menu">
          Menu
        </Link>
      </div>
      <div>
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
