import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import Holidays from "date-holidays";

import "./Navbar.css";
import logo from "../../asset/rustica.png";
const Navbar = () => {
  //setting active Route
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  //change nav when scrolling
  const [scroll, setScroll] = useState(false);
  const changeScroll = () => {
    if (window.scrollY >= 90 && window.innerWidth >= 800) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeScroll);
  var hd = new Holidays("DE", "nw");
  const [open, setTime] = useState(false);
  useEffect(() => {
    const handleOpen = setInterval(() => {
      var Now = new Date();
      const time = Now.getHours() * 100 + Now.getMinutes();
      if (hd.isHoliday(Now)) {
        if (time <= 2230 && time >= 1700) {
          setTime(true);
        }
      } else if (Now.getDay() === 1 || Now.getDay() === 2) {
        if (time <= 2230 && time >= 1730) {
          setTime(true);
        }
      } else if (Now.getDay() === 3 || Now.getDay() === 4) {
        if (time <= 1430 && time >= 1130) {
          setTime(true);
          console.log(Now.toTimeString());
        } else if (time <= 1730 && time >= 2230) {
          setTime(true);
        }
      } else if (Now.getDay() === 5) {
        if (time <= 1430 && time >= 1130) {
          setTime(true);
        } else if (time <= 2300 && time >= 1730) {
          setTime(true);
        }
      } else if (Now.getDay() === 6) {
        if (time <= 2300 && time >= 1700) {
          setTime(true);
        }
      } else if (Now.getDay() === 0) {
        if (time <= 2230 && time >= 1700) {
          setTime(true);
        }
      } else {
        setTime(false);
      }
    }, []);
    return () => clearInterval(handleOpen);
  });

  return (
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
                {open ? "Offen" : "Geschlossen"}
              </span>
            </li>
            <li className="infoc">
              <NavLink className={"nav-link"} to="/rustica-webpage/checkout">
                <div className="shopping-cart-holder">
                  <FaShoppingCart
                    className="shpping-cart"
                    size={scroll ? 45 : 50}
                    style={{ color: "#fff" }}
                  />
                  <div className="items-in-shop">3</div>
                </div>
              </NavLink>
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
  );
};

export default Navbar;
