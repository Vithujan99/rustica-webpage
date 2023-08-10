import { createContext, useEffect, useState } from "react";
import { getProductData } from "../data/productsStore";

//Function are not defined here, but this indicates that we have room for thease Function
export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  deleteCart: () => {},
  getTotalCost: () => {},
  getTotalCount: () => {},
});

export function CartProvider({ children }) {
  //Man kann auch sessionStorage benutzten
  const storedCartProducts = JSON.parse(localStorage.getItem("cartProducts"));
  const [cartProducts, setCartProducts] = useState(
    storedCartProducts === null ? [] : storedCartProducts
  );
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function getProductQuantity(id, ingredientsIds, description) {
    const quantity = cartProducts.find(
      (product) =>
        product.id === id &&
        JSON.stringify(product.ingredientsIds) ===
          JSON.stringify(ingredientsIds) &&
        product.description === description
    )?.quantity; //If there exist no Product with id it wont call quantity.
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id, ingredientsIds, description) {
    if (ingredientsIds !== undefined) {
      ingredientsIds = [...ingredientsIds].sort(
        (a, b) => a.ingredientId - b.ingredientId
      );
    }
    var currentCartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    const quantity = getProductQuantity(id, ingredientsIds, description);
    if (quantity === 0) {
      setCartProducts([
        ...currentCartProducts,
        {
          id: id,
          quantity: 1,
          ingredientsIds: ingredientsIds,
          description: description,
        },
      ]);
    } else {
      setCartProducts(
        currentCartProducts.map((product) =>
          product.id === id &&
          JSON.stringify(product.ingredientsIds) ===
            JSON.stringify(ingredientsIds) &&
          product.description === description
            ? {
                ...product,
                quantity: product.quantity + 1,
                ingredientsIds: ingredientsIds,
                description: description,
              }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id, undefined);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts(cartProducts.filter((product) => product.id !== id));
  }
  function deleteCart() {
    setCartProducts([]);
  }

  function getTotalCost() {
    let totalCost = 0;
    // eslint-disable-next-line array-callback-return
    cartProducts.map((product) => {
      const productData = getProductData(product.id);
      totalCost += productData.price * product.quantity;
    });
    return totalCost;
  }

  function getTotalCount() {
    return cartProducts.reduce((sum, product) => sum + product.quantity, 0);
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    deleteCart,
    getTotalCost,
    getTotalCount,
  };
  //we are giving contextValue as Value so all the children can access these Functions
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

//Context(carrt, addToCart, removeCart)
//Provider -> gives your React app access to all the things in your context
