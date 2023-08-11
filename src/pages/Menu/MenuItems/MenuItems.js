import React, { useState } from "react";
import { getDataByType } from "../../../data/productsStore";

import MenuItem from "./MenuItem/MenuItem";
import "./MenuItems.css";
const allButtons = [
  "Pizza",
  "Pizzabrötchen",
  "Salate",
  "Spaghetti",
  "Maccheroni",
  "Tagliatelle",
  "Tortellini",
  "Gnocchi",
  "Rustica Spezial Teil 1",
  "Reisgerichte",
  "Überbackenes",
  "Fitnessküche",
  "Pfannkuchen",
  "Carne",
  "Getränk außer Haus",
  "Dessert",
];
const leftButtons = [
  "Pizza",
  "Pizzabrötchen",
  "Salate",
  "Spaghetti",
  "Maccheroni",
  "Tagliatelle",
  "Tortellini",
  "Gnocchi",
];
const rightButtons = [
  "Rustica Spezial Teil 1",
  "Reisgerichte",
  "Überbackenes",
  "Fitnessküche",
  "Pfannkuchen",
  "Carne",
  "Getränk außer Haus",
  "Dessert",
];
const MenuItems = () => {
  const [titel, handleTitel] = useState("Pizza");
  const [items, handleItems] = useState(getDataByType("Pizza"));
  const setItems = (clickedItem) => {
    //normalerweiße handleItems(getDataByType(clickedItem)); Bis die Daten gefüült sind benutzen wir:
    handleItems(
      getDataByType(clickedItem) === undefined
        ? getDataByType("Pizza")
        : getDataByType(clickedItem)
    );
    handleTitel(clickedItem);
  };

  return (
    <div>
      <div className="menu-titel-container">
        <div className="menu-items-titel">
          <div className="white-background"></div>
          <h2 className="item-tiel">{titel}</h2>
        </div>
      </div>
      <div className="items-show-container">
        <div className="all-Item-buttons">
          {allButtons.map((item) => (
            <button
              className={
                titel === item
                  ? "all-item-button all-item-active"
                  : "all-item-button"
              }
              onClick={() => {
                setItems(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="left-Item-buttons">
          {leftButtons.map((item) => (
            <button
              className={
                titel === item ? "item-button item-active" : "item-button"
              }
              onClick={() => {
                setItems(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="item-holder">
          {items.map((item) => (
            <div className="menu-item" key={item.id}>
              <MenuItem key={item.id} data={item} />
            </div>
          ))}
        </div>
        <div className="right-Item-buttons">
          {rightButtons.map((item) => (
            <button
              className={
                titel === item ? "item-button item-active" : "item-button"
              }
              onClick={() => {
                setItems(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
