import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatCurrency } from "../../utilities/formatCurrency";
import { getProductData } from "../../data/productsData";
import {
  getIngredientstData,
  getPriceWithIngredientsData,
} from "../../data/ingredientsData";

import "./Admin.css";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get("http://localhost:4000/orders")
          .then((res) => {
            return res.data;
          });
        setOrders(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  function getTotalCost(order) {
    let totalCost = 0;
    // eslint-disable-next-line array-callback-return
    order.map((product) => {
      const productData = getProductData(product.id);

      let ingCost = 0;
      // eslint-disable-next-line array-callback-return
      product.ingredientsIds.map((ing) => {
        const ingData = getPriceWithIngredientsData(ing.ingredientId);
        ingCost += ingData.price * ing.quantity;
      });

      totalCost += (productData.price + ingCost) * product.quantity;
    });
    return totalCost;
  }
  return (
    <div className="orders-container">
      <h1 className="orders-title">Orders</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Bezahlung</th>
            <th>Kunde</th>
            <th>Bestellung</th>
            <th>Anmerkung</th>
            <th>Datum/Summe</th>
            <th>Aktion</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.service}</td>
              <td>{order.paymentMethod}</td>
              <td>
                <p>{order.vorname + " " + order.nachname}</p>
                <p>
                  {order.plz + " " + order.straße + " " + order.hausnummer}{" "}
                </p>
                <p>{order.telefonnummer}</p>
              </td>
              <td>
                {order.ordered_items.map((item) => (
                  <div key={item._id}>
                    <p key={item.id}>
                      {item.quantity + "x"}
                      <b className="item-name">
                        {getProductData(item.id).name}
                      </b>
                      {item.ingredientsIds.map((ingredient) => (
                        <div key={ingredient._id} className="zusatz-container">
                          {" Zusatz: " + ingredient.quantity + "x"}
                          <b className="zusatz-name">
                            {getIngredientstData(ingredient.ingredientId).name}
                          </b>
                        </div>
                      ))}

                      {item.description ? (
                        " Beschreibung: " + item.description
                      ) : (
                        <></>
                      )}
                    </p>
                  </div>
                ))}
                <p className="orders-table-order-betrag">
                  {formatCurrency(getTotalCost(order.ordered_items))}
                </p>
              </td>
              <td>{order.anmerkung}</td>
              <td>{new Date(order.entryDate).toLocaleString()}</td>
              <td>
                <button>Löschen</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
