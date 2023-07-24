import React from "react";
import menuItems from "../../../data/menu.json";
import "./MenuItems.css";

const MenuItems = () => {
  return (
    <div>
      <dkv>
        <h2>Pizza</h2>
      </dkv>
      <div className="test">
        <div className="left-Item-buttons"></div>
        <div className="item-holder"></div>
        <div className="right-Item-buttons"></div>
      </div>
    </div>
  );
};

export default MenuItems;
