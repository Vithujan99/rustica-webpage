import React from "react";
import { CartContext } from "../../../../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../../../../utilities/formatCurrency";

import "./MenuItem.css";
export const MenuItem = ({ data }) => {
  const cart = useContext(CartContext);
  return (
    <div className="item-card">
      <div className="item-name">
        {("0" + data.id).slice(-3)}.{data.name}
      </div>
      <div className="item-stoff"></div>
      <div className="item-beschreibung">{data.beschreibung}</div>
      <div className="item-preis">{formatCurrency(data.price)}</div>
      <button
        className="item-kaufen"
        onClick={() => cart.addOneToCart(data.id)}
      >
        In den Einkaufswagen
      </button>
    </div>
  );
};

export default MenuItem;
