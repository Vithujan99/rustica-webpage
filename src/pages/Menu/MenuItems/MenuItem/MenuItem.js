import React, { useContext, useState } from "react";
import { CartContext } from "../../../../context/CartContext";
import { IngredientsContext } from "../../../../context/IngredientsContext";
import { formatCurrency } from "../../../../utilities/formatCurrency";
import {
  getIngredientstData,
  ingredientsData,
} from "../../../../data/ingredientsData";

import "./MenuItem.css";
import "./MenuZusatz.css";

export const MenuItem = ({ data }) => {
  const cart = useContext(CartContext);
  const ingredients = useContext(IngredientsContext);
  const [show, setShow] = useState(false);
  function handleZusatzShow() {
    setShow(true);
  }
  function handleZusatzClose() {
    setShow(false);
  }
  const [zusatzName, setZusatzName] = useState();
  function handleZusatzName(name) {
    setZusatzName(name);
  }
  const [text, handleText] = useState("");
  function setText(newText) {
    handleText(newText.target.value);
  }

  return (
    <div className="item-card">
      <div className="item-card-content">
        <div className="item-name">
          {("0" + data.id).slice(-3)}.{data.name.toUpperCase()}
        </div>
        <div className="item-stoff"></div>
        <div className="item-beschreibung">{data.beschreibung}</div>

        <div className="item-preis">{formatCurrency(data.price)}</div>
      </div>
      <button
        className="item-kaufen"
        onClick={() => {
          if (data.zusatz === undefined) {
            cart.addOneToCart(data.id, undefined, undefined);
          } else {
            handleZusatzShow();
            ingredients.handleItemId(data.id);
            handleZusatzName(data.zusatz);
          }
        }}
      >
        Hinzufügen
      </button>
      <div>
        <div
          className={
            show ? "ask-zusatz-container" : "ask-zusatz-container hide"
          }
        >
          <div
            className="black-background"
            onClick={() => handleZusatzClose()}
          />
          <div className="ask-zusatz-content">
            <div className="ask-zusatz-head">
              <div className="ask-zusatz-head-titel">
                {("0" + data.id).slice(-3)}.{data.name}
              </div>
              <div
                className="ask-zusatz-close"
                onClick={() => handleZusatzClose()}
              >
                X
              </div>
              <div className="ask-zusatz-head-header">
                <div className="ask-zusatz-head-header-summe">
                  Summe{" "}
                  <span>
                    {formatCurrency(data.price + ingredients.getTotalCost())}
                  </span>
                </div>
                <button
                  className="ask-zusatz-head-item-kaufen"
                  onClick={() => {
                    cart.addOneToCart(
                      data.id,
                      ingredients.ingredientsArray,
                      text
                    );
                    ingredients.removeItem(data.id);
                    handleText("");
                    handleZusatzClose();
                  }}
                >
                  Hinzufügen
                </button>
              </div>
              <div className="ask-zusatz-head-added-items">
                {ingredients.ingredientsArray.length === 0 ? (
                  <>Extras</>
                ) : (
                  <></>
                )}
                {ingredients.ingredientsArray.map((ingredient) => (
                  <div className="ask-zusatz-head-added-item">
                    <div
                      onClick={() =>
                        ingredients.removeIngredient(
                          data.id,
                          ingredient.ingredientId
                        )
                      }
                      className="ask-zusatz-item-button"
                    >
                      -
                    </div>
                    <p>
                      <b className="ask-zusatz-item-count">
                        {ingredient.quantity}
                      </b>
                      {getIngredientstData(ingredient.ingredientId).name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="ask-zusatz-body">
              {zusatzName === "Zusatz2" ? (
                <div className="ask-zusatz-body-section">
                  <label
                    className="ask-zusatz-body-section-name"
                    for="salatIng"
                  >
                    Salat Dressing
                  </label>
                  <br></br>
                  <select
                    className="ask-zusatz-body-section-select"
                    onChange={(event) => {
                      ingredients.addDressingIngredient(
                        data.id,
                        event.target.value
                      );
                    }}
                    required
                    name="salatIngredients"
                    id="salatIng"
                  >
                    {ingredientsData.map((ingredientSection) =>
                      ingredientSection.name === zusatzName ? (
                        ingredientSection.items.map((ingredient) => (
                          <option value={ingredient.id}>
                            {ingredient.name}
                          </option>
                        ))
                      ) : (
                        <></>
                      )
                    )}
                  </select>
                </div>
              ) : (
                <>
                  {ingredientsData.map((ingredientSection) =>
                    ingredientSection.name === zusatzName ? (
                      <div className="ask-zusatz-body-section">
                        <p className="ask-zusatz-body-section-name">
                          Zutaten für:{formatCurrency(ingredientSection.price)}
                        </p>
                        <div className="ask-zusatz-body-section-items">
                          {ingredientSection.items.map((ingredient) => (
                            <div className="ask-zusatz-body-section-item">
                              <div
                                onClick={() => {
                                  ingredients.addIngredient(
                                    data.id,
                                    ingredient.id
                                  );
                                }}
                                className="ask-zusatz-item-button"
                              >
                                +
                              </div>
                              <p>{ingredient.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )
                  )}
                </>
              )}
              <div className="ask-zusatz-body-section-textfeld-container">
                <label className="ask-zusatz-body-section-textfeld-beschreibung">
                  {" "}
                  Hinweis:{" "}
                  <span>
                    z.B. dunkel backen, ohne Oregano, schneiden, etc. ( Sonstige
                    Extra-Zutaten werden bei der Lieferung/Abholung zusätzlich
                    berechnet).
                  </span>
                </label>

                <textarea
                  className="ask-zusatz-body-section-textfeld"
                  value={text}
                  onChange={(event) => setText(event)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
