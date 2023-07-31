import React, { useState, useContext } from "react";
import "./AskService.css";

const AskService = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="askServiceContainer">
      <div
        className={show ? "blackBackground" : "blackBackground hide"}
        onClick={handleClose}
      />
      <div className={show ? "askService" : "askService hide"}>
        <FontAwesomeIcon
          icon="fa-duotone fa-truck"
          bounce
          style={{
            "--fa-primary-color": "#ffffff",
            "--fa-secondary-color": "#ffc300",
            "--fa-secondary-opacity": "1",
          }}
        />
        <button className="askServiceButton left">Lieferung</button>
        <button className="askServiceButton right">Abholung</button>
      </div>
    </div>
  );
};

export default AskService;
