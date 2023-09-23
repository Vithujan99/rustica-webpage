import React, { useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../../context/CartContext";
import { TimeContext } from "../../context/TimeContext";
import CartCard from "../../components/CartBar/CartCard/CartCard";
import { ServiceContext } from "../../context/ServiceContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { PayPalButtons } from "@paypal/react-paypal-js";
import "./Checkout.css";

const Checkout = () => {
  const cart = useContext(CartContext);
  const serv = useContext(ServiceContext);
  const time = useContext(TimeContext);

  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [straße, setStraße] = useState("");
  const [hnr, setHnr] = useState("");
  const [stadt, setStadt] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [anmerkung, setAnmerkung] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [messageForClient, setMessageForClient] = useState("");

  const axiosPostAbholungData = async () => {
    const postData = {
      vorname: vorname,
      nachname: nachname,
      anmerkung: anmerkung,
      ordered_items: cart.items,
    };
    await axios
      .post("http://localhost:4000/orders/abholung", postData)
      .then((res) => setMessageForClient(<p>{res.data}</p>));
  };
  const handleAbholungSubmit = (e) => {
    e.preventDefault();
    axiosPostAbholungData();
  };

  const axiosPostLieferData = async () => {
    const postData = {
      vorname: vorname,
      nachname: nachname,
      straße: straße,
      hausnummer: hnr,
      plz: serv.plz,
      stadt: stadt,
      anmerkung: anmerkung,
      ordered_items: cart.items,
    };
    await axios
      .post("http://localhost:4000/orders/liefer", postData)
      .then((res) => setMessageForClient(<p>{res.data}</p>));
  };
  const handleLieferSubmit = (e) => {
    e.preventDefault();
    if (!serv.testPlz()) {
      setErrorText(true);
    } else {
      setErrorText(false);
    }
    axiosPostLieferData();
  };
  function checkLieferData() {
    if (
      vorname.length === 0 ||
      nachname.length === 0 ||
      straße.length === 0 ||
      hnr.length === 0 ||
      !serv.testPlz() ||
      stadt.length === 0
    ) {
      setPaymentMethod("");
      return false;
    } else {
      return true;
    }
  }
  const [formError, setFormError] = useState(false);
  function clickCheckLieferData() {
    if (
      vorname.length === 0 ||
      nachname.length === 0 ||
      straße.length === 0 ||
      hnr.length === 0 ||
      !serv.testPlz() ||
      stadt.length === 0
    ) {
      setPaymentMethod("");
      setFormError(true);
      return false;
    } else {
      setFormError(false);
      return true;
    }
  }

  const serverUrl = "http://localhost:4000";

  const createOrder = (data) => {
    // Order is created on the server and the order id is returned
    return fetch(`${serverUrl}/my-server/create-paypal-order`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      // use the "body" param to optionally pass additional order information

      // like product skus and quantities

      body: JSON.stringify({
        cart: [...cart.items],
      }),
    })
      .then((response) => response.json())

      .then((order) => order.id);
  };

  const onApprove = (data) => {
    // Order is captured on the server and the response is returned to the browser

    return fetch(`${serverUrl}/my-server/capture-paypal-order`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => {
        console.log("Payment successfull");
        return response.json();
      })
      .then((data) => console.log(data));
  };

  return (
    <div className="checkout-page">
      <div className="checkout-buyform">
        <div className="client-message">{messageForClient}</div>
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

        {serv.service === "Abholung" ? (
          <form className="checkout-form-holder">
            <div className="checkout-form-name">
              <input
                name="vorname"
                className="checkout-form-name-input"
                placeholder="Vorname"
                type="text"
                required="true"
                value={vorname}
                onChange={(e) => setVorname(e.target.value)}
              ></input>
              <input
                name="nachname"
                className="checkout-form-name-input"
                placeholder="Nachname"
                type="text"
                required="true"
                value={nachname}
                onChange={(e) => setNachname(e.target.value)}
              ></input>
            </div>
            <div className="form-submit-holder">
              <button
                className="form-submit"
                type="submit"
                onClick={handleAbholungSubmit}
              >
                Bestellen
              </button>
            </div>
          </form>
        ) : (
          <form className="checkout-form-holder">
            <h2>Lieferadresse</h2>
            <div className="checkout-form-name">
              <input
                name="vorname"
                className={
                  formError && vorname.length === 0
                    ? "checkout-form-name-input error"
                    : "checkout-form-name-input"
                }
                placeholder="Vorname"
                type="text"
                required="true"
                value={vorname}
                onChange={(e) => setVorname(e.target.value)}
              ></input>
              <input
                name="nachname"
                className={
                  formError && nachname.length === 0
                    ? "checkout-form-name-input error"
                    : "checkout-form-name-input"
                }
                placeholder="Nachname"
                type="text"
                required="true"
                value={nachname}
                onChange={(e) => setNachname(e.target.value)}
              ></input>
            </div>
            <div className="checkout-form-street-hnr">
              <input
                name="straße"
                className={
                  formError && straße.length === 0
                    ? "checkout-form-street error"
                    : "checkout-form-street"
                }
                placeholder="Straße"
                type="text"
                required="true"
                value={straße}
                onChange={(e) => setStraße(e.target.value)}
              ></input>
              <input
                name="hausnummer"
                className={
                  formError && hnr.length === 0
                    ? "checkout-form-hnr error"
                    : "checkout-form-hnr"
                }
                placeholder="Hnr."
                type="text"
                required="true"
                value={hnr}
                onChange={(e) => setHnr(e.target.value)}
              ></input>
            </div>
            <div className="checkout-form-plz-city">
              <input
                name="plz"
                className={
                  formError && (serv.plz.length === 0 || !serv.testPlz())
                    ? "checkout-form-plz error"
                    : "checkout-form-plz"
                }
                placeholder="Postleitzahl"
                type="number"
                required="true"
                value={serv.plz}
                onChange={(e) => serv.setPlz(e.target.value)}
              ></input>
              <input
                name="stadt"
                className={
                  formError && stadt.length === 0
                    ? "checkout-form-city error"
                    : "checkout-form-city"
                }
                placeholder="Stadt"
                type="text"
                required="true"
                value={stadt}
                onChange={(e) => setStadt(e.target.value)}
              ></input>
            </div>
            {serv.testPlz() ? (
              <></>
            ) : serv.plz.length === 5 || errorText ? (
              <div className="checkout-form-wrong-plz">
                Befindet sich nicht im Liefergebiet
              </div>
            ) : (
              <></>
            )}
            <div className="checkout-form-anmerkung-holder">
              <label>Anmerkung</label>
              <textarea
                className="checkout-form-anmerkung"
                type="text"
                name="anmerkung"
                value={anmerkung}
                onChange={(e) => setAnmerkung(e.target.value)}
              ></textarea>
            </div>
            <div className="payment-selct">
              <button
                className={
                  paymentMethod === "PayPal"
                    ? "payment-select-paypal active"
                    : "payment-select-paypal"
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (clickCheckLieferData()) {
                    setPaymentMethod("PayPal");
                  }
                }}
              >
                PayPal
              </button>
              <button
                className={
                  paymentMethod === "Bargeld"
                    ? "payment-select-bargeld active"
                    : "payment-select-bargeld"
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (clickCheckLieferData()) {
                    setPaymentMethod("Bargeld");
                  }
                }}
              >
                Bargeld
              </button>
            </div>
            {paymentMethod === "PayPal" && checkLieferData() ? (
              <PayPalButtons
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
              />
            ) : paymentMethod === "Bargeld" && checkLieferData() ? (
              <button
                className="form-submit"
                type="submit"
                onClick={handleLieferSubmit}
              >
                Bestellen
              </button>
            ) : (
              <></>
            )}
          </form>
        )}
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
