import React, { useContext } from "react";
import "./Checkout.css";
import { CartContext } from "../../context/CartContext";
import { TimeContext } from "../../context/TimeContext";
import CartCard from "../../components/CartBar/CartCard/CartCard";
import { ServiceContext } from "../../context/ServiceContext";
import { formatCurrency } from "../../utilities/formatCurrency";

const Checkout = () => {
  const cart = useContext(CartContext);
  const serv = useContext(ServiceContext);
  const time = useContext(TimeContext);
  return (
    <div className="checkout-page">
      <div className="checkout-buyform">
        <div className="checkout-select-service">
          <button
            className={
              serv.service === "Lieferung"
                ? "checkout-serv-button active"
                : "checkout-serv-button"
            }
            onClick={() => serv.setService("Lieferung")}
          >
            Liefern
          </button>
          <button
            className={
              serv.service === "Abholung"
                ? "checkout-serv-button active"
                : "checkout-serv-button"
            }
            onClick={() => serv.setService("Abholung")}
          >
            Abholen
          </button>
        </div>
      </div>
      <div className="checkout-cart-items">
        <div className="checkout-items-content-holder">
          {cart.getTotalCount() > 0 ? (
            <>
              {time.isOpen() ? (
                <></>
              ) : (
                <p>zur Zeit geschlossen - nur Vorbestellung möglich</p>
              )}
              <div className="checkout-cards-holder">
                {cart.items.map((currentProduct) => (
                  <CartCard
                    key={JSON.stringify(currentProduct)}
                    dataAll={currentProduct}
                  />
                ))}
              </div>
              <div className="checkout-items-footer">
                <div>Gesamt: </div>
                <div>{formatCurrency(cart.getTotalCost().toFixed(2))}</div>
              </div>

              {serv.service === "Abholung" ? (
                cart.getTotalCost() >= 8.0 ? (
                  ""
                ) : (
                  <div className="min-cost-red">Mindestbestellwert 8,00€</div>
                )
              ) : serv.testPlz() ? (
                cart.getTotalCost() >= 15.0 ? (
                  ""
                ) : (
                  <div className="min-cost-red">
                    Mindestbestellwert für Lieferung (ohne Getränke) 15,00€
                  </div>
                )
              ) : (
                <></>
              )}
            </>
          ) : (
            <div>
              <h3>Noch keine Waren hinzugefügt!</h3>
              {time.isOpen() ? (
                <></>
              ) : (
                <p className="">
                  zur Zeit geschlossen - nur Vorbestellung möglich
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
