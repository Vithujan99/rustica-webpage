import React, { useState } from "react";
import pizza from "../../../data/pizza.json";
import MenuItem from "./MenuItem/MenuItem";
import "./MenuItems.css";

const MenuItems = () => {
  const [titel, handleTitel] = useState("Pizza");
  const setTitel = (clickedTitel) => {
    handleTitel(clickedTitel);
  };
  const [items, handleItems] = useState(pizza);
  const setItems = (clickedItem) => {
    handleItems(require("../../../data/" + clickedItem + ".json"));
  };

  return (
    <div>
      <div className="menu-titel-container">
        <div className="menu-items-titel">
          <div className="white-background"></div>
          <h2 className="item-tiel">{titel}</h2>
        </div>
      </div>
      <div className="test">
        <div className="left-Item-buttons">
          <button
            className={
              titel === "Pizza" ? "item-button item-active" : "item-button"
            }
            onClick={() => {
              setItems("pizza");
              setTitel("Pizza");
            }}
          >
            Pizza
          </button>
          <button
            className={
              titel === "Pizzabrötchen"
                ? "item-button item-active"
                : "item-button"
            }
            onClick={() => {
              setItems("pizzabrötchen");
              setTitel("Pizzabrötchen");
            }}
          >
            Pizza-
            <br /> brötchen
          </button>
          <button
            className={
              titel === "Salate" ? "item-button item-active" : "item-button"
            }
            onClick={() => {
              setItems("salate");
              setTitel("Salate");
            }}
          >
            Salate
          </button>
          <button className="item-button">Spaghetti</button>
          <button className="item-button">Maccheroni</button>
          <button className="item-button">Tagliatelle</button>
          <button className="item-button">Tortellini</button>
          <button className="item-button">Gnocchi</button>
        </div>
        <div className="item-holder">
          {items.map((item) => (
            <div className="menu-item" key={item.id}>
              <MenuItem key={item.id} data={item} />
            </div>
          ))}
        </div>
        <div className="right-Item-buttons">
          <button
            className={
              titel === "Rustica Spezial Teil 1"
                ? "item-button item-active"
                : "item-button"
            }
            onClick={() => {
              setItems("pizza");
              setTitel("Rustica Spezial Teil 1");
            }}
          >
            Rustica Spezial Teil 1
          </button>
          <button className="item-button">Reisgerichte</button>
          <button className="item-button">Überbackenes</button>
          <button className="item-button">Fitnessküche</button>
          <button className="item-button">Pfannkuchen</button>
          <button className="item-button">Carne</button>
          <button className="item-button">Getränk außer Haus</button>
          <button className="item-button">Dessert</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
