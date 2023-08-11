import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ServiceContext } from "../../context/ServiceContext";
import { TimeContext } from "../../context/TimeContext";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

import "./Navbar.css";
import logo from "../../asset/rustica.png";

const Navbar = () => {
  const cart = useContext(CartContext);
  const serv = useContext(ServiceContext);
  const time = useContext(TimeContext);

  //setting active Route
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  //change nav when scrolling
  const [scroll, setScroll] = useState(false);
  const changeScroll = () => {
    if (
      window.scrollY >= 90 &&
      window.innerWidth >= 800 &&
      window.innerHeight >= 300
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeScroll);

  //hanldes when clicked on ShoppingCart
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <div className={scroll ? "moving-header-nav" : "header-nav"}>
        <div className="container">
          <div className={scroll ? "moving-nav-bar" : "nav-bar"}>
            <ul className={scroll ? "moving-nav-info" : "nav-info"}>
              <div className="hamburger" onClick={handleClick}>
                {click ? (
                  <FaTimes size={22} style={{ color: "#fff" }} />
                ) : (
                  <FaBars size={22} style={{ color: "#fff" }} />
                )}
              </div>
              <li className="infoa">
                <span>
                  +02166 <b style={{ color: "#ffc300" }}>8544178</b>
                </span>
              </li>
              <li className={scroll ? "moving-infob" : "infob"}>
                <Link className={"nav-link info-logo"} to="/rustica-webpage">
                  <img className="logo" src={logo} alt="logo" width={200} />
                </Link>
                <span className="info-zeit">
                  {time.isOpen() ? "Offen" : "Geschlossen"}
                </span>
              </li>
              <li className="infoc">
                <div className="shopping-cart-holder" onClick={handleShow}>
                  <FaShoppingCart
                    className="shpping-cart"
                    size={scroll ? 45 : 50}
                    style={{ color: "#fff" }}
                  />
                  <div className="items-in-shop">{cart.getTotalCount()}</div>
                </div>
              </li>
            </ul>

            <div className={scroll ? "moving-divider" : "divider"}></div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="item-a" onClick={handleClick}>
                <NavLink
                  className={scroll ? "moving-nav-link" : "nav-link"}
                  to="/rustica-webpage"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="item-b" onClick={handleClick}>
                <NavLink
                  className={scroll ? "moving-nav-link" : "nav-link"}
                  to="/rustica-webpage/menu"
                >
                  Menu
                </NavLink>
              </li>
              <li className="item-c" onClick={handleClick}>
                <NavLink
                  className={scroll ? "moving-nav-link" : "nav-link"}
                  to="/rustica-webpage/rent"
                >
                  Raum Buchen
                </NavLink>
              </li>
              <li className="item-d" onClick={handleClick}>
                <NavLink
                  className={scroll ? "moving-nav-link" : "nav-link"}
                  to="/rustica-webpage/about"
                >
                  Über uns
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={show ? "blackBackground" : "blackBackground hide"}
        onClick={handleClose}
      ></div>
      <div className={show ? "barShoppedItems" : "barShoppedItems hide"}>
        <div className="closeBar" onClick={handleClose}>
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
                  <h1>{currentProduct.id + " " + currentProduct.quantity}</h1>
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

export default Navbar;
