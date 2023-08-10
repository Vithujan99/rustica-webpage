const ingredientsData = [
  {
    name: "Zusatz1",
    price: 0.3,
    items: [
      { id: 201, name: "Knoblauch" },
      { id: 202, name: "Scharf" },
    ],
  },
  {
    name: "Zusatz1",
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
    name: "Zusatz1",
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
      {
        id: 209,
        name: "Kapern",
      },
      {
        id: 210,
        name: "Käse",
      },
      {
        id: 211,
        name: "Mais",
      },
      {
        id: 212,
        name: "Oliven",
      },
      {
        id: 213,
        name: "Paprika",
      },
      {
        id: 214,
        name: "Peperoni",
      },
      {
        id: 215,
        name: "Rucola",
      },
      {
        id: 216,
        name: "Salami",
      },
      {
        id: 217,
        name: "Spinat",
      },
      {
        id: 218,
        name: "VorderSchinken",
      },
      {
        id: 219,
        name: "Zwiebeln",
      },
    ],
  },
  {
    name: "Zusatz1",
    price: 1.5,
    items: [
      {
        id: 220,
        name: "Gorgonzola",
      },
      {
        id: 221,
        name: "Mozzarella",
      },
      {
        id: 222,
        name: "Parmaschinken",
      },
      {
        id: 223,
        name: "Sardellen",
      },
      {
        id: 224,
        name: "Sauce Hollandaise",
      },
      {
        id: 225,
        name: "Schafskäse",
      },
      {
        id: 226,
        name: "Sucuk",
      },
      {
        id: 227,
        name: "Thunfisch",
      },
    ],
  },
  {
    name: "Zusatz1",
    price: 2.5,
    items: [
      {
        id: 228,
        name: "Babymuscheln",
      },
      {
        id: 229,
        name: "Hähnchenfilet",
      },
      {
        id: 230,
        name: "Krabben",
      },
      {
        id: 231,
        name: "Lachs",
      },
      {
        id: 232,
        name: "Meeresfrüchte",
      },
      {
        id: 233,
        name: "Putenfleisch",
      },
    ],
  },
  {
    name: "Zusatz2",
    price: 0,
    items: [
      {
        id: 234,
        name: "Cocktail-Dressing",
      },
      {
        id: 235,
        name: "Essing und Öl",
      },
      {
        id: 236,
        name: "Joghurt-Dressing",
      },
    ],
  },
  {
    name: "Zusatz2",
    price: 1,
    items: [
      {
        id: 237,
        name: "extra Kräuterbutter",
      },
    ],
  },
];

function getZusatzIngredientstData(zusatz) {
  console.log(ingredientsData.find((item) => item.name === zusatz));
  return ingredientsData.find((item) => item.name === zusatz);
}

function getPriceWithIngredientsData(id) {
  let data = ingredientsData.find((data) =>
    data.items.find((item) => item.id === id)
  );

  console.log(data);
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

export {
  ingredientsData,
  getZusatzIngredientstData,
  getIngredientstData,
  getPriceWithIngredientsData,
};
