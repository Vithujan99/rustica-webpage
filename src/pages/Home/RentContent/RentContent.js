import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "../../../components/Carousel/Carousel";
import data from "../../../data/carouselData.json";
import "./RentContent.css";

const RentContent = () => {
  return (
    <div class="rent-content">
      <div className="button-holder">
        <Link className="rent-titel" to="/rustica-webpage/rent">
          Raum Buchen
        </Link>
      </div>
      <Carousel data={data} />
    </div>
  );
};

export default RentContent;
