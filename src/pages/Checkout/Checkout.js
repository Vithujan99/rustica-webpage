import React, { useContext } from "react";
import "./Checkout.css";
import { CartContext } from "../../context/CartContext";
import { TimeContext } from "../../context/TimeContext";
import CartCard from "../../components/CartBar/CartCard/CartCard";

const Checkout = () => {
  const cart = useContext(CartContext);
  const time = useContext(TimeContext);
  return (
    <div className="checkout-page">
      <div className="checkout-buyform"></div>
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
              {cart.getTotalCost() < 10.0 ? (
                <p>Mindestbestellwert für Lieferung (ohne Getränke) 10,00€</p>
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
