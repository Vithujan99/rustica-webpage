import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

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

  return (
    <div className={scroll ? "moving-header-nav" : "header-nav"}>
      <div className="container">
        <div className={scroll ? "moving-nav-bar" : "nav-bar"}>
          <ul className="nav-info">
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
            <li className="infob">
              <Link className={"nav-link info-logo"} to="/rustica-webpage">
                <img className="logo" src={logo} alt="logo" width={200} />
              </Link>
              <span className="info-zeit">Offen</span>
            </li>
            <li className="infoc">
              <NavLink className={"nav-link"} to="/rustica-webpage/checkout">
                <FaShoppingCart size={30} style={{ color: "#fff" }} />
              </NavLink>
            </li>
          </ul>

          <div className="divider"></div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="item-a" onClick={handleClick}>
              <NavLink className={"nav-link"} to="/rustica-webpage" end>
                Home
              </NavLink>
            </li>
            <li className="item-b" onClick={handleClick}>
              <NavLink className={"nav-link"} to="/rustica-webpage/menu">
                Menu
              </NavLink>
            </li>
            <li className="item-c" onClick={handleClick}>
              <NavLink className={"nav-link"} to="/rustica-webpage/rent">
                Raum Buchen
              </NavLink>
            </li>
            <li className="item-d" onClick={handleClick}>
              <NavLink className={"nav-link"} to="/rustica-webpage/about">
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
