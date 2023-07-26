import React from "react";

import "./MenuItem.css";
import { formatCurrency } from "../../../../utilities/formatCurrency";

export const MenuItem = ({ data }) => {
  return (
    <div className="item-card">
      <div className="item-name">
        {("0" + data.id).slice(-3)}.{data.name}
      </div>
      <div className="item-stoff"></div>
      <div className="item-beschreibung">{data.beschreibung}</div>
      <div className="item-preis">{formatCurrency(data.price)}</div>
      <button className="item-kaufen">In den Einkaufswagen</button>
    </div>
  );
};

export default MenuItem;
