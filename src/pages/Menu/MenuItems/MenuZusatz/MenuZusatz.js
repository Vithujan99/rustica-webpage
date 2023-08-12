import React, { useContext, useState } from "react";
import {
  getIngredientstData,
  ingredientsData,
} from "../../../../data/ingredientsData";
import { CartContext } from "../../../../context/CartContext";
import { ShowContext } from "../../../../context/ShowContext";
import { IngredientsContext } from "../../../../context/IngredientsContext";
import { formatCurrency } from "../../../../utilities/formatCurrency";

import "./MenuZusatz.css";

const MenuZusatz = ({ data }) => {
  const cart = useContext(CartContext);
  const show = useContext(ShowContext);
  const ingredients = useContext(IngredientsContext);
  const [text, handleText] = useState("");
  function setText(newText) {
    handleText(newText.target.value);
  }
  return (
    <div>
      <div
        className={
          show.showZusatz ? "ask-zusatz-container" : "ask-zusatz-container hide"
        }
      >
        <div
          className="black-background"
          onClick={() => show.handleZusatzClose()}
        />
        <div className="ask-zusatz-content">
          <div className="ask-zusatz-head">
            <div className="ask-zusatz-head-titel">
              {("0" + data.id).slice(-3)}.{data.name}
            </div>
            <div
              className="ask-zusatz-close"
              onClick={() => show.handleZusatzClose()}
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
                  show.handleZusatzClose();
                }}
              >
                Hinzufügen
              </button>
            </div>
            <div className="ask-zusatz-head-added-items">
              {ingredients.ingredientsArray.length === 0 ? <>Extras</> : <></>}
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
            {show.zusatzName === "Zusatz2" ? (
              <div className="ask-zusatz-body-section">
                <label className="ask-zusatz-body-section-name" for="salatIng">
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
                    ingredientSection.name === show.zusatzName ? (
                      ingredientSection.items.map((ingredient) => (
                        <option value={ingredient.id}>{ingredient.name}</option>
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
                  ingredientSection.name === show.zusatzName ? (
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
  );
};

export default MenuZusatz;
