import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { ShowContext } from "../../../../context/ShowContext";
import { IngredientsContext } from "../../../../context/IngredientsContext";
import { formatCurrency } from "../../../../utilities/formatCurrency";

import MenuZusatz from "../MenuZusatz/MenuZusatz";
import "./MenuItem.css";

export const MenuItem = ({ data }) => {
  const cart = useContext(CartContext);
  const show = useContext(ShowContext);
  const ingredients = useContext(IngredientsContext);

  return (
    <div className="item-card">
      <div className="item-card-content">
        <div className="item-name">
          {("0" + data.id).slice(-3)}.{data.name.toUpperCase()}
        </div>
        <div className="item-stoff"></div>
        <div className="item-beschreibung">{data.beschreibung}</div>

        <div className="item-preis">{formatCurrency(data.price)}</div>
      </div>
      <button
        className="item-kaufen"
        onClick={() => {
          if (data.zusatz === undefined) {
            cart.addOneToCart(data.id, undefined, undefined);
          } else {
            show.handleZusatzShow();
            ingredients.handleItemId(data.id);
            show.handleZusatzName(data.zusatz);
          }
        }}
      >
        Hinzufügen
      </button>
      <MenuZusatz data={data} />
    </div>
  );
};

export default MenuItem;
