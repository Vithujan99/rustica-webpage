import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../Menu/MenuItems/MenuItem/MenuItem";
import { getDataByType } from "../../../data/productsStore";

import "./MenuContent.css";

const MenuContent = () => {
  const [randomPizza, setRandomPizza] = useState(
    Math.floor(Math.random() * getDataByType("Pizza").length)
  );
  return (
    <div class="home-menu">
      <div className="home-menu-titel-holder">
        <Link className="home-menu-menu-titel" to="/rustica-webpage/menu">
          Menu
        </Link>
      </div>
      <div class="home-cards-holder">
        <div className="home-item">
          <MenuItem
            key={getDataByType("Pizza")[randomPizza].id}
            data={getDataByType("Pizza")[randomPizza]}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
