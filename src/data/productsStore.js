const productsArray = [
  {
    type: "Pizza",
    items: [
      { id: 54, name: "MARGHERITA", price: 5 },
      {
        id: 55,
        name: "UOVO",
        beschreibung: "Eier",
        price: 6,
        zusatz: "Zusatz1",
      },
      { id: 56, name: "SALAMI", price: 6, zusatz: "Zusatz1" },
      { id: 57, name: "MAIS", price: 6, zusatz: "Zusatz1" },
      {
        id: 58,
        name: "CIPOLLA",
        beschreibung: "Zwiebeln",
        price: 6,
        zusatz: "Zusatz1",
      },
      {
        id: 59,
        name: "SINDACO",
        beschreibung:
          "Zucchini, Karotten, Brocoli, Spinat, Champignons, Thunfisch, Knoblauch, Bolognese, Sauce Hollandaise (scharf)",
        price: 9.5,
        zusatz: "Zusatz1",
      },
      {
        id: 60,
        name: "VULCANO",
        beschreibung: "Paprika (scharf)",
        price: 6,
        zusatz: "Zusatz1",
      },
      {
        id: 61,
        name: "MATTA",
        beschreibung: "Knoblauch, Sardellen, Peperoni",
        price: 6.5,
        zusatz: "Zusatz1",
      },
      {
        id: 62,
        name: "FUNGHI",
        beschreibung: "Champignons",
        price: 6,
        zusatz: "Zusatz1",
      },
      {
        id: 63,
        name: "CAMPAGNOLA",
        beschreibung: "Salami, Sardellen, Kapern",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 64,
        name: "CONTADINA BAUERNART",
        beschreibung: "Kapern und schwarzen Oliven",
        price: 6.5,
        zusatz: "Zusatz1",
      },
      {
        id: 65,
        name: "DIAVOLO",
        beschreibung: "Teufelspizza mit Salami (sehr scharf)",
        price: 6.5,
        zusatz: "Zusatz1",
      },
      {
        id: 66,
        name: "CALZONE (GEFÜLLT)",
        beschreibung: "Vorderschinken, Thunfisch, Champignons",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 67,
        name: "Bomba (gefüllt)",
        beschreibung: "Vorderschinken, Thunfisch, Spinat, Champignons, Paprika",
        price: 9.5,
        zusatz: "Zusatz1",
      },
      {
        id: 68,
        name: "Vesuvio",
        beschreibung: "Zwiebeln, Paprikaschoten",
        price: 6.5,
        zusatz: "Zusatz1",
      },
      {
        id: 69,
        name: "Spinaci",
        beschreibung: "Spinat, Knoblauch",
        price: 6,
        zusatz: "Zusatz1",
      },
      {
        id: 70,
        name: "Hawaii",
        beschreibung: "Ananas",
        price: 6,
        zusatz: "Zusatz1",
      },
      {
        id: 71,
        name: "Prosciutto",
        beschreibung: "Vorderschinken",
        price: 6.5,
        zusatz: "Zusatz1",
      },
      {
        id: 72,
        name: "Puttanesca",
        beschreibung: "Vorderschinken , Oliven, Sardellen",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 73,
        name: " Hawaii Speciale",
        beschreibung: "Vorderschinken, Ananas",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 74,
        name: "Italia",
        beschreibung: "Spinat, Zwiebeln, Paprika",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 75,
        name: "Calabresina",
        beschreibung: "Zwiebeln, Thunfisch",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 76,
        name: "Rucola",
        beschreibung: "Rucula, Parmaschinken",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 77,
        name: "Pirata",
        beschreibung: "Fleischsoße",
        price: 6.5,
        zusatz: "Zusatz1",
      },
      {
        id: 78,
        name: "Stagioni",
        beschreibung: "Vorderschinken, Thunfisch, Champignons",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 79,
        name: "Rustica",
        beschreibung: "Vorderschinken, Paprika, Champignons",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 80,
        name: "Ortolana",
        beschreibung: "Champignons, Artischocken, Paprikaschoten",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 81,
        name: "Mozzarella",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 82,
        name: "Brokkoli",
        price: 6,
        zusatz: "Zusatz1",
      },
      {
        id: 83,
        name: "Roma",
        beschreibung: "Thunfisch, Paprikaschoten",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 84,
        name: "Alla Tedesca",
        beschreibung: "Hähnchen, Champignons, Erbsen, Sauce Hollandaise",
        price: 9,
        zusatz: "Zusatz1",
      },
      {
        id: 85,
        name: "Frutti di Mare",
        beschreibung: "Meeresfrüchte",
        price: 8.5,
        zusatz: "Zusatz1",
      },
      {
        id: 86,
        name: "Salmone",
        beschreibung: "Lachs, Spinat",
        price: 8.5,
        zusatz: "Zusatz1",
      },
      {
        id: 87,
        name: "Pompei",
        beschreibung: "Krabben, Thunfisch, Knoblauch, Babymuscheln",
        price: 9,
        zusatz: "Zusatz1",
      },
      {
        id: 88,
        name: "Taormina",
        beschreibung:
          "Krabben, Thunfisch, Zwiebeln, Sardellen, Kapern, Knoblauch",
        price: 9,
        zusatz: "Zusatz1",
      },
      {
        id: 89,
        name: "Mamma",
        beschreibung:
          "Krabben, Meeresfrüchte, Artischocken, Thunfisch, Oliven, Salami, Paprika",
        price: 10,
        zusatz: "Zusatz1",
      },
      {
        id: 90,
        name: "Marco",
        beschreibung:
          "Champignons, Vorderschinken, Krabben, Zwiebeln, Knoblauch",
        price: 9,
        zusatz: "Zusatz1",
      },
      {
        id: 91,
        name: "Marinara",
        beschreibung: "Meeresfrüchte, Thunfisch, Knoblauch",
        price: 9,
        zusatz: "Zusatz1",
      },
      {
        id: 92,
        name: "Etna",
        beschreibung:
          "Champignons, Sardellen, Salami, Knoblauch, Kapern, scharf",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 93,
        name: "La Bamba (scharf)",
        beschreibung: "Thunfisch, Vorderschinken, Spinat, Zwiebeln",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 94,
        name: "Capricciosa",
        beschreibung: "Champignons, Thunfisch, Vorderschinken, Artischocken",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 95,
        name: "Pasquale",
        beschreibung:
          "Champignons, Spinat, Zwiebeln, Sardellen, Knoblauch, scharf",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 96,
        name: "Completa",
        beschreibung:
          "Spinat, Zwiebeln, Thunfisch, Oliven, Paprika, Vorderschinken , Champignons",
        price: 9,
        zusatz: "Zusatz1",
      },
      {
        id: 97,
        name: "Pirata Speciale",
        beschreibung: "Fleischsoße mit Spaghetti",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 98,
        name: "Tonno",
        beschreibung: "mit Thunfisch",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 99,
        name: "Scampi",
        beschreibung: "Krabben, Knoblauch",
        price: 8.5,
        zusatz: "Zusatz1",
      },
      {
        id: 100,
        name: "Famiglia",
        beschreibung: "Champignons, Thunfisch, Vorderschinken",
        price: 12,
        zusatz: "KeinZusatz",
      },
      {
        id: 101,
        name: "Sorrento",
        beschreibung:
          "Champignongs, Vorderschinken, Krabben, Babymuscheln, Knoblauch",
        price: 9,
        zusatz: "Zusatz1",
      },
      {
        id: 102,
        name: "Bella",
        beschreibung:
          "Thunfisch, Oliven, Vorderschinken, Paprika, Champignons Zwiebeln, Knoblauch",
        price: 9,
        zusatz: "Zusatz1",
      },
      {
        id: 103,
        name: "Pescatore",
        beschreibung: "Krabben, Babymuscheln,Sardellen, Knoblauch",
        price: 9,
        zusatz: "Zusatz1",
      },
      {
        id: 104,
        name: "Montanara",
        beschreibung: "Spinat, Champignongs, Zwiebeln, Knoblauch",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 105,
        name: "Altstadt",
        beschreibung: "Champignons, Thunfisch, fr. Paprika, Vorderschinken",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 106,
        name: "Chef",
        beschreibung: "Thunfisch, Vorderschinken, Spinat, Artischocken",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 107,
        name: "Mista",
        beschreibung: "Vorderschinken, Salami, Thunfisch, Champignons",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 108,
        name: "Zingara",
        beschreibung:
          "Thunfisch, Paprikaschoten,Vorderschinken, Champignons, Artischocken",
        price: 8,
        zusatz: "Zusatz1",
      },
      {
        id: 109,
        name: "Inferno",
        beschreibung: "Champignpns, Salami, Peperoni, pikant",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 110,
        name: "San Marco",
        beschreibung: "Thunfisch, Zwiebeln, Mais, Spiegelei",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 111,
        name: "Ferrari",
        beschreibung:
          "rote Zwiebeln, fr. Paprika, Spinat, Champignons, Brokkoli",
        price: 8,
        zusatz: "Zusatz1",
      },
      {
        id: 112,
        name: "4 Formaggi",
        beschreibung: "4 verschiedene Sorten Käse",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 113,
        name: "Sucuk Rucola",
        beschreibung: "Sucuk und Rucola",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 114,
        name: "Sucuk Peperoni",
        beschreibung: "Sucuk, Peperoni, Rote Zwiebeln",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 115,
        name: "Jaffna",
        beschreibung: "Rote Zwiebel, Schafskäse, Thunfisch, Mais",
        price: 8,
        zusatz: "Zusatz1",
      },
      {
        id: 116,
        name: "Pizza Milano",
        beschreibung: "fr. Tomaten, Vorderschinken, Schafskäse",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 117,
        name: "Amigo",
        beschreibung: "Putenfleisch und Ananas",
        price: 8.5,
        zusatz: "Zusatz1",
      },
      {
        id: 118,
        name: "Amigo Speciale",
        beschreibung: "Putenfleisch, Champignons und Zwiebeln",
        price: 8.5,
        zusatz: "Zusatz1",
      },
      {
        id: 119,
        name: "Bacon",
        beschreibung: "Speck, Zwiebeln",
        price: 7.5,
        zusatz: "Zusatz1",
      },
    ],
  },
  {
    type: "Pizzabrötchen",
    items: [
      {
        id: 181,
        name: "PIZZABRÖTCHEN, 6 STÜCK MIT KRÄUTERCREME",
        price: 2.5,
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
        zusatz: "Zusatz2",
      },
      {
        id: 2,
        name: "INSALATA MOZZARELLA",
        beschreibung: "mit Mozzarella, Tomaten, Basilikum, Öl und Essig",
        price: 6.5,
        zusatz: "Zusatz2",
      },
      {
        id: 3,
        name: "INSALATA MISTA",
        beschreibung:
          "mit grünem Salat, Tomaten, Gurken, Karotten, Rettich, Mais und Zwiebeln",
        price: 5.5,
        zusatz: "Zusatz2",
      },
      {
        id: 4,
        name: "INSALATA TONNO-MAIS-CIPOLLA",
        beschreibung: "mit Thunfisch, Mais und Zwiebeln",
        price: 6.5,
        zusatz: "Zusatz2",
      },
      {
        id: 5,
        name: "Insalata Bulgara",
        beschreibung:
          "mit Tomaten, Gurken, Oliven, Bohnen, Schafskäse, milden Peperoni, Zwiebeln, Öl und Essig",
        price: 7,
        zusatz: "Zusatz2",
      },
      {
        id: 6,
        name: "Insalata Pomodoro",
        beschreibung: "mit Zwiebeln und Tomaten",
        price: 5,
        zusatz: "Zusatz2",
      },
      {
        id: 7,
        name: "Insalata Contadina",
        beschreibung:
          "mit grünem Salat, Vorderschinken, Artischocken, Krabben, Käse, Zwiebeln",
        price: 8,
        zusatz: "Zusatz2",
      },
      {
        id: 8,
        name: "Insalata Rustica",
        beschreibung:
          "mit grünem Salat, Tomaten, Gurken, Karotten, Mais, Paprika, Artischocken, Vorderschinken, Thunfisch, Käse, Ei, Oliven, Zwiebeln",
        price: 8.5,
        zusatz: "Zusatz2",
      },
      {
        id: 9,
        name: "Griechischer Bauernsalat",
        beschreibung:
          "mit Tomaten, Oliven, Paprika, Peperoni, Schafskäse, mit Öl und Essig",
        price: 7,
      },
      {
        id: 10,
        name: "Insalata Claudia",
        beschreibung: "mit Champignons, Krabben, Knoblauch und Cocktailsauce",
        price: 8,
        zusatz: "Zusatz2",
      },
      {
        id: 11,
        name: "Insalata Capricciosa",
        beschreibung: "mit gem. Salat, Thunfisch, Vorderschinken und Käse",
        price: 7,
        zusatz: "Zusatz2",
      },
      {
        id: 12,
        name: "Insalata Naso",
        beschreibung: "mit Salat, Oliven, Tomaten und Thunfisch",
        price: 6.5,
        zusatz: "Zusatz2",
      },
      {
        id: 13,
        name: "Insalata Hawaii Speciale",
        beschreibung: "mit grünem Salat, Vorderschinken, Käse und Anana",
        price: 7,
        zusatz: "Zusatz2",
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
