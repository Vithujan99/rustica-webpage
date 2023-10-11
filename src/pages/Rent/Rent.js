import React from "react";
import { motion } from "framer-motion";
import data from "../../data/carouselData.json";

import "./Rent.css";

const Rent = () => {
  return (
    <div className="rent-page">
      <div className="rent-page-showcase">
        <div className="rent-page-showcase-section">
          <div className="rent-page-showcase-section-img-holder">
            <img
              className="rent-page-showcase-section-img"
              src={data.slides[0].src}
              alt={data.slides[0].alt}
            ></img>
            <div className="rent-page-showcase-section-img-first-background" />
            <div className="rent-page-showcase-section-img-second-background" />
          </div>
          <p className="rent-page-showcase-section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="rent-page-showcase-section">
          <p className="rent-page-showcase-section-text right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="rent-page-showcase-section-img-holder">
            <img
              className="rent-page-showcase-section-img right"
              src={data.slides[1].src}
              alt={data.slides[1].alt}
            ></img>
            <div className="rent-page-showcase-section-img-first-background right" />
            <div className="rent-page-showcase-section-img-second-background right" />
          </div>
        </div>
        <div className="rent-page-showcase-section">
          <div className="rent-page-showcase-section-img-holder">
            <img
              className="rent-page-showcase-section-img"
              src={data.slides[2].src}
              alt={data.slides[2].alt}
            ></img>
            <div className="rent-page-showcase-section-img-first-background" />
            <div className="rent-page-showcase-section-img-second-background third" />
          </div>
          <p className="rent-page-showcase-section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="rent-form-holder">
        <h1 className="rent-form-titel">Kontaktiere uns</h1>
        <form
          className="rent-form"
          action="https://formsubmit.co/9fb23e074e30e87073e9cf50cadd0b8f"
          method="POST"
        >
          <label className="rent-form-label">Vorname</label>
          <input
            name="Vorname"
            className="rent-form-input"
            type="text"
            required="true"
          ></input>
          <label className="rent-form-label">Nachname</label>
          <input
            name="Nachname"
            className="rent-form-input"
            type="text"
            required="true"
          ></input>
          <label className="rent-form-label">Email</label>
          <input
            name="email"
            className="rent-form-input"
            type="email"
            required="true"
          ></input>
          <label className="rent-form-label">Nachricht</label>
          <textarea
            className="rent-form-textarea"
            name="Nachricht"
            required
          ></textarea>
          <button className="rent-form-button" type="submit">
            Senden
          </button>
        </form>
      </div>
    </div>
  );
};

export default Rent;
