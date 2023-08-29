import React, { useState, useContext } from "react";
import "./Checkout.css";
import { CartContext } from "../../context/CartContext";
import { TimeContext } from "../../context/TimeContext";
import CartCard from "../../components/CartBar/CartCard/CartCard";
import { ServiceContext } from "../../context/ServiceContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import axios from "axios";

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
  const [messageForClient, setMessageForClient] = useState("");

  const axiosPostAbholungData = async () => {
    const postData = {
      vorname: vorname,
      nachname: nachname,
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
                value={vorname}
                onChange={(e) => setVorname(e.target.value)}
              ></input>
              <input
                name="nachname"
                className="checkout-form-name-input"
                placeholder="Nachname"
                type="text"
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
                className="checkout-form-name-input"
                placeholder="Vorname"
                type="text"
                value={vorname}
                onChange={(e) => setVorname(e.target.value)}
              ></input>
              <input
                name="nachname"
                className="checkout-form-name-input"
                placeholder="Nachname"
                type="text"
                value={nachname}
                onChange={(e) => setNachname(e.target.value)}
              ></input>
            </div>
            <div className="checkout-form-street-hnr">
              <input
                name="straße"
                className="checkout-form-street"
                placeholder="Straße"
                type="text"
                value={straße}
                onChange={(e) => setStraße(e.target.value)}
              ></input>
              <input
                name="hausnummer"
                className="checkout-form-hnr"
                placeholder="Hnr."
                type="text"
                value={hnr}
                onChange={(e) => setHnr(e.target.value)}
              ></input>
            </div>
            <div className="checkout-form-plz-city">
              <input
                name="plz"
                className="checkout-form-plz"
                placeholder="Postleitzahl"
                type="number"
                value={serv.plz}
                onChange={(e) => serv.setPlz(e.target.value)}
              ></input>
              <input
                name="stadt"
                className="checkout-form-city"
                placeholder="Stadt"
                type="text"
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
              ></textarea>
            </div>
            <div className="form-submit-holder">
              <button
                className="form-submit"
                type="submit"
                onClick={handleLieferSubmit}
              >
                Bestellen
              </button>
            </div>
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
