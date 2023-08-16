import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { IngredientsContext } from "../../../context/IngredientsContext";
import { formatCurrency } from "../../../utilities/formatCurrency";
import {
  getIngredientstData,
  ingredientsData,
} from "../../../data/ingredientsData";
import { getProductData } from "../../../data/productsStore";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import "./CartCard.css";

const CartCard = ({ dataAll }) => {
  const data = getProductData(dataAll.id);
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

  const [itemCount, handleItemCount] = useState(1);
  function setItemCount(e) {
    var count = parseInt(e.target.value);
    console.log(count);
    if (count === 0) {
      handleItemCount(1);
    } else if (count > 100) {
      handleItemCount(100);
    } else {
      handleItemCount(count);
    }
  }
  function addItemCount() {
    var count = itemCount;
    if (isNaN(count)) {
      count = 0;
    }
    handleItemCount(count + 1);
  }
  function subItemCount() {
    var count = itemCount;
    if (isNaN(count)) {
      count = 0;
    }
    if (count - 1 <= 0) {
      handleItemCount(1);
    } else {
      handleItemCount(count - 1);
    }
  }
  return (
    <div className="cart-card">
      {dataAll.ingredientsIds !== undefined ? (
        <div
          className="cart-card-zusatz"
          onClick={() => {
            handleZusatzShow();
            ingredients.handleItemId(data.id);
            handleZusatzName(data.zusatz);
            handleItemCount(dataAll.quantity);
            handleText(dataAll.description);
            if (data.zusatz === "Zusatz2") {
              // eslint-disable-next-line array-callback-return
              dataAll.ingredientsIds?.map((ingredient) => {
                ingredients.addDressingIngredient(
                  data.id,
                  ingredient.ingredientId
                );
              });
            } else {
              // eslint-disable-next-line array-callback-return
              ingredients.addAllIngredients(dataAll.id, dataAll.ingredientsIds);
            }
          }}
        />
      ) : (
        <></>
      )}
      <div className="cart-card-header">
        <div className="ask-zusatz-head-header-counter">
          <div className="ask-zusatz-head-header-count">{dataAll.quantity}</div>
          <div className="ask-zusatz-head-header-arows">
            <div
              onClick={() => {
                cart.addToCart(
                  data.id,
                  dataAll.ingredientsIds,
                  dataAll.description,
                  1
                );
                handleItemCount(dataAll.quantity + 1);
              }}
              className="ask-zusatz-head-header-arow"
            >
              <FaAngleUp size={20} />
            </div>
            <div
              onClick={() => {
                cart.removeOneFromCart(
                  data.id,
                  dataAll.ingredientsIds,
                  dataAll.description
                );
                handleItemCount(dataAll.quantity - 1);
              }}
              className="ask-zusatz-head-header-arow"
            >
              <FaAngleDown size={20} />
            </div>
          </div>
        </div>
        <div className="cart-card-preis"></div>
        <div className="cart-card-name">{data.name}</div>
        <div className="cart-car-delete"></div>
      </div>
      <div className="cart-card-ingredients">
        {dataAll.ingredientsIds.map((ingredient) => (
          <div>
            {ingredient.quantity +
              "" +
              getIngredientstData(ingredient.ingredientId).name}
          </div>
        ))}
      </div>
      <div clasName="cart-card-beschreibung"></div>
      <div
        className={show ? "ask-zusatz-container" : "ask-zusatz-container hide"}
      >
        <div
          className="black-background"
          onClick={() => {
            handleZusatzClose();
            ingredients.handleItemId(0);
          }}
        />
        <div className="ask-zusatz-content">
          <div className="ask-zusatz-head">
            <div className="ask-zusatz-head-top">
              <div className="ask-zusatz-head-titel">
                {("0" + data.id).slice(-3)}.{data.name}
              </div>
              <div
                className="ask-zusatz-close"
                onClick={() => {
                  handleZusatzClose();
                  ingredients.handleItemId(0);
                }}
              >
                X
              </div>
            </div>
            <div className="ask-zusatz-head-header">
              <div className="ask-zusatz-head-header-summe">
                Summe{" "}
                <span>
                  {formatCurrency(
                    (isNaN(itemCount) ? 1 : itemCount) *
                      (data.price + ingredients.getTotalCost())
                  )}
                </span>
              </div>
              <div className="ask-zusatz-head-header-counter">
                <input
                  className="ask-zusatz-head-header-count"
                  type="number"
                  pattern="[0-9]*"
                  value={itemCount}
                  onChange={(e) => setItemCount(e)}
                ></input>
                <div className="ask-zusatz-head-header-arows">
                  <div
                    onClick={() => addItemCount()}
                    className="ask-zusatz-head-header-arow"
                  >
                    <FaAngleUp size={20} />
                  </div>
                  <div
                    onClick={() => subItemCount()}
                    className="ask-zusatz-head-header-arow"
                  >
                    <FaAngleDown size={20} />
                  </div>
                </div>
              </div>
              <button
                className="ask-zusatz-head-item-kaufen"
                onClick={() => {
                  cart.delteOldAddNewToCart(
                    data.id,
                    dataAll.ingredientsIds,
                    dataAll.description,
                    ingredients.ingredientsArray,
                    text,
                    isNaN(itemCount) ? 1 : itemCount
                  );
                  ingredients.removeItem(data.id);
                  handleText(dataAll.description);
                  handleZusatzClose();
                  handleItemCount(itemCount);
                }}
              >
                Hinzufügen
              </button>
            </div>
            <div className="ask-zusatz-head-added-items">
              {ingredients.ingredientsArray.length === 0 ? <>Extras</> : <></>}
              {ingredients.ingredientsArray.map((ingredient) => (
                <div
                  key={ingredient.ingredientId}
                  className="ask-zusatz-head-added-item"
                >
                  <IoMdRemoveCircle
                    color="#ffc300"
                    onClick={() =>
                      ingredients.removeIngredient(
                        data.id,
                        ingredient.ingredientId
                      )
                    }
                    className="ask-zusatz-item-button"
                  />
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
                    ingredientSection.name === zusatzName ? (
                      ingredientSection.items.map((ingredient) => (
                        <option key={ingredient.id} value={ingredient.id}>
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
                    <div
                      key={ingredientSection.price}
                      className="ask-zusatz-body-section"
                    >
                      <p className="ask-zusatz-body-section-name">
                        Zutaten für: {formatCurrency(ingredientSection.price)}
                      </p>
                      <div className="ask-zusatz-body-section-items">
                        {ingredientSection.items.map((ingredient) => (
                          <div
                            key={ingredient.id}
                            className="ask-zusatz-body-section-item"
                          >
                            <IoMdAddCircle
                              color="#ffc300"
                              onClick={() => {
                                ingredients.addIngredient(
                                  data.id,
                                  ingredient.id
                                );
                              }}
                              className="ask-zusatz-item-button"
                            />
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

export default CartCard;
