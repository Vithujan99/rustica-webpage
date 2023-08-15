import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ServiceContext } from "../../context/ServiceContext";
import { TimeContext } from "../../context/TimeContext";
import { ShowContext } from "../../context/ShowContext";
import CartCard from "./CartCard/CartCard";

import "./CartBar.css";

const CartBar = () => {
  const cart = useContext(CartContext);
  const serv = useContext(ServiceContext);
  const time = useContext(TimeContext);
  const show = useContext(ShowContext);

  return (
    <div>
      <div
        className={show.showBar ? "blackBackground" : "blackBackground hide"}
        onClick={() => show.handleBarClose()}
      ></div>
      <div
        className={show.showBar ? "barShoppedItems" : "barShoppedItems hide"}
      >
        <div className="closeBar" onClick={() => show.handleBarClose()}>
          X
        </div>
        <div className="barContent">
          <div className="barTitel">Warenkorb</div>
          {cart.getTotalCount() > 0 ? (
            <>
              <div className="barBody">
                {time.isOpen() ? (
                  <></>
                ) : (
                  <p>zur Zeit geschlossen - nur Vorbestellung möglich</p>
                )}
                <p>Aktuell im Wagen:</p>

                {cart.items.map((currentProduct) => (
                  <CartCard
                    key={JSON.stringify(currentProduct)}
                    dataAll={currentProduct}
                  />
                ))}
              </div>
              <div className="barFooter">
                <h3>Gesamt: {cart.getTotalCost().toFixed(2)}</h3>

                {cart.getTotalCost() < 10.0 ? (
                  <p>Mindestbestellwert für Lieferung (ohne Getränke) 10,00€</p>
                ) : (
                  <>
                    <div className="barFooterService-buttons">
                      <button
                        className={
                          serv.service === "Lieferung"
                            ? "barFooterService-button active"
                            : "barFooterService-button"
                        }
                        onClick={() => serv.setService("Lieferung")}
                      >
                        Liefern
                      </button>
                      <button
                        className={
                          serv.service === "Abholung"
                            ? "barFooterService-button active"
                            : "barFooterService-button"
                        }
                        onClick={() => serv.setService("Abholung")}
                      >
                        Abholen
                      </button>
                    </div>
                    {serv.service === "Lieferung" ? (
                      <div className="barFooterService-input">
                        <label className="bar-plz-text">
                          Gebe Postleitzahl an
                        </label>
                        <input
                          className="bar-plz-input"
                          type="text"
                          name="PLZ"
                          minLength="5"
                          maxLength="5"
                          required
                          value={serv.plz}
                          onChange={(e) => serv.setPlz(e.target.value)}
                        />
                        {serv.testPlz() ? (
                          <></>
                        ) : (
                          <>
                            {serv.plz.length === 5 ? (
                              <>
                                <p className="bar-plz-error-text">
                                  Befindet sich nicht im Liefergebiet
                                </p>
                              </>
                            ) : (
                              <></>
                            )}
                          </>
                        )}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="barFooterKaufen">
                      {serv.service === "Abholung" ? (
                        <button className="barFooterKaufen-button">
                          Zur Kasse
                        </button>
                      ) : (
                        <>
                          {serv.testPlz() ? (
                            <button className="barFooterKaufen-button">
                              Zur Kasse
                            </button>
                          ) : (
                            <></>
                          )}
                        </>
                      )}

                      <button
                        className="barFooterKaufen-button"
                        onClick={() => cart.deleteCart()}
                      >
                        Wahrenkorb leeren
                      </button>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <div className="barBody">
              <h3>Noch keine Waren hinzugefügt!</h3>
              {time.isOpen() ? (
                <></>
              ) : (
                <p className="barGeschlossenText">
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

export default CartBar;
