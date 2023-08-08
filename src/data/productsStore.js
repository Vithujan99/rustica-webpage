const productsArray = [
  {
    type: "Pizza",
    items: [
      { id: 54, name: "MARGHERITA", price: 5 },
      { id: 2, name: "Computer", price: 1199 },
      { id: 3, name: "Banana", price: 1.05, zusatz: "Zusatz1" },
      { id: 4, name: "Kartoffel", price: 1.05, zusatz: "Zusatz2" },
    ],
  },
  {
    type: "Pizzabrötchen",
    items: [
      {
        id: 181,
        name: "PIZZABRÖTCHEN, 6 STÜCK MIT KRÄUTERCREME",
        price: 2.5,
        zusatz: "Zusatz1",
      },
      {
        id: 182,
        name: "EXTRA KRÄUTERCREME",
        price: 1,
      },
    ],
  },
  {
    type: "Salate",
    items: [
      {
        id: 1,
        name: "INSALATA TONNO",
        beschreibung: "mit Thunfisch, Bohnen und Peperoni",
        price: 6.5,
      },
      {
        id: 2,
        name: "INSALATA MOZZARELLA",
        beschreibung: "mit Mozzarella, Tomaten, Basilikum, Öl und Essig",
        price: 6.5,
      },
    ],
  },
];

function getDataByType(type) {
  let typeData = productsArray.find((products) => products.type === type);
  if (typeData === undefined) {
    console.log("Product data does not exist for Type:" + type);
    return undefined;
  }
  return typeData.items;
}

function getProductData(id) {
  let productData = undefined;
  for (const product of productsArray) {
    productData = product.items.find((item) => item.id === id);
    if (productData !== undefined) {
      return productData;
    }
  }
  console.log("Product data does not exist for Id:" + id);
  return undefined;
}

export { productsArray, getDataByType, getProductData };
