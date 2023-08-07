const ingredientsData = [
  {
    price: 0.3,
    items: [
      { id: 201, name: "Knoblauch" },
      { id: 202, name: "Scharf" },
    ],
  },
  {
    price: 0.5,
    items: [
      {
        id: 203,
        name: "scharf (extra verpackt)",
      },
      {
        id: 204,
        name: "Knoblauch",
      },
    ],
  },
  {
    price: 1.2,
    items: [
      {
        id: 205,
        name: "Ananas",
      },
      {
        id: 206,
        name: "Artischocke",
      },
      {
        id: 207,
        name: "Brokkoli",
      },
      {
        id: 208,
        name: "Champignon",
      },
    ],
  },
];

function getPriceWithIngredientsData(id) {
  let data = ingredientsData.find((data) =>
    data.items.find((item) => item.id === id)
  );
  return data;
}

function getIngredientstData(id) {
  let ingredientData = undefined;
  for (const ingredient of ingredientsData) {
    ingredientData = ingredient.items.find((item) => item.id === id);
    if (ingredientData !== undefined) {
      return ingredientData;
    }
  }
  console.log("Ingredient data does not exist for Id:" + id);
  return undefined;
}

export { ingredientsData, getIngredientstData, getPriceWithIngredientsData };
