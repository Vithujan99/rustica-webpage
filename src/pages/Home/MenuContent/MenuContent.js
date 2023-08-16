import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../Menu/MenuItems/MenuItem/MenuItem";
import { getDataByType } from "../../../data/productsStore";
import PizzaImg from "../../../asset/homePage/top-view-italian-pizza-sticker-white-background-removebg.png";
import SpaghettiImg from "../../../asset/homePage/top-view-paghetti-carbonara-dish-sticker-white.jpg";
import ReisgerichteImg from "../../../asset/homePage/detailed-gopalkala-illustration-removebg.png";

import "./MenuContent.css";

const MenuContent = () => {
  const [randomPizza] = useState(
    Math.floor(Math.random() * getDataByType("Pizza").length)
  );
  const [randomSpaghetti] = useState(
    Math.floor(Math.random() * getDataByType("Spaghetti").length)
  );
  const [randomReisgerichte] = useState(
    Math.floor(Math.random() * getDataByType("Reisgerichte").length)
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
          <img className="pizza-img" alt="Pizza" src={PizzaImg}></img>
          <MenuItem
            key={getDataByType("Pizza")[randomPizza].id}
            data={getDataByType("Pizza")[randomPizza]}
          />
        </div>
        <div className="home-item">
          <img className="pizza-img" alt="Pizza" src={SpaghettiImg}></img>
          <MenuItem
            key={getDataByType("Spaghetti")[randomSpaghetti].id}
            data={getDataByType("Spaghetti")[randomSpaghetti]}
          />
        </div>
        <div className="home-item">
          <img
            className="pizza-img reis-img"
            alt="Pizza"
            src={ReisgerichteImg}
          ></img>
          <MenuItem
            key={getDataByType("Reisgerichte")[randomReisgerichte].id}
            data={getDataByType("Reisgerichte")[randomReisgerichte]}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
