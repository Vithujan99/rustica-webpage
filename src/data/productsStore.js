const productsArray = [
  {
    type: "Pizza",
    items: [
      { id: 54, name: "MARGHERITA", stoff: "(1)(7)", price: 5 },
      {
        id: 55,
        name: "UOVO",
        stoff: "(13)",
        beschreibung: "Eier",
        price: 6,
        zusatz: "Zusatz1",
      },
      {
        id: 56,
        name: "SALAMI",
        stoff: "(1)(2)(3)(4)(5)",
        price: 6,
        zusatz: "Zusatz1",
      },
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
          "Thunfisch, Paprikaschoten, Vorderschinken, Champignons, Artischocken",
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
  {
    type: "Spaghetti",
    items: [
      {
        id: 13,
        name: "Spaghetti Napoli",
        beschreibung: "mit Tomatensoße",
        price: 6,
        zusatz: "Zusatz1",
      },
      {
        id: 14,
        name: "Spaghetti Bologna",
        beschreibung: "mit Fleischsoße",
        price: 6.5,
        zusatz: "Zusatz1",
      },
      {
        id: 15,
        name: "Spaghetti Carbonara",
        beschreibung: "mit Speck, Ei, Sahne",
        price: 6.5,
        zusatz: "Zusatz1",
      },
      {
        id: 16,
        name: "Spaghetti Matriciane",
        beschreibung: "mit Tomatens., Speck, Zwiebeln",
        price: 6.5,
        zusatz: "Zusatz1",
      },
      {
        id: 17,
        name: "Spaghetti Emilia",
        beschreibung: "mit Sahne, Vordersch., Pilzen",
        price: 6.5,
        zusatz: "Zusatz1",
      },
      {
        id: 18,
        name: "Spaghetti Vongole",
        beschreibung: "mit Tomatensoße und Babymuscheln",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 19,
        name: "Spaghetti Holly (überbacken)",
        beschreibung:
          "mit Tomatensoße, Thunfisch, gemischte Gemüse, Knoblauch, pikant",
        price: 8.5,
        zusatz: "Zusatz1",
      },
      {
        id: 20,
        name: "Spaghetti Meerkamp",
        beschreibung: "Pilzen, Putenbrust, Knoblauch und Weißweinsoße",
        price: 8.5,
        zusatz: "Zusatz1",
      },
      {
        id: 21,
        name: "Spaghetti alla Vesuviana",
        beschreibung:
          "mit Mozzarella, frische Tomaten, Basilikum und Tomatensoße",
        price: 6.5,
        zusatz: "Zusatz1",
      },
      {
        id: 22,
        name: "Spaghetti Pollo",
        beschreibung:
          "mit Hähnchen, Zwiebeln, Paprika, Champignons, Knoblauch, Tomaten, Sauce Hollandaise",
        price: 8.5,
        zusatz: "Zusatz1",
      },
      {
        id: 23,
        name: "paghetti Dario",
        beschreibung:
          "mit Champignons, Zwiebeln, Sahne, Tomatensoße, Knoblauch",
        price: 6.5,
        zusatz: "Zusatz1",
      },
      {
        id: 24,
        name: "Spaghetti Chef",
        beschreibung: "mit Champignons, Erbsen, Vorderschinken und Sahnesoße",
        price: 7,
        zusatz: "Zusatz1",
      },
    ],
  },
  {
    type: "Maccheroni",
    items: [
      {
        id: 25,
        name: "Maccheroni Gratinati (überbacken)",
        stoff: "(4)(5)(7)(8)(11)(13)",
        beschreibung:
          "mit Ei, Vorderschinken, Champignons, Erbsen, Tomatensoße und Käse",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 26,
        name: "Maccheroni Rustica",
        beschreibung:
          "Pilze, Zwiebeln, Brokkoli, Putenbrust, Knobl, Tomatensoße, Sahnesoße, pikant",
        price: 8.5,
        zusatz: "Zusatz1",
      },
      {
        id: 27,
        name: "Maccheroni Al Arrabiata",
        stoff: "(4)(5)(7)(11)(13)",
        beschreibung: "mit Vorderschinken, Tomatensoße, Knoblauch, pikant",
        price: 6.5,
        zusatz: "Zusatz1",
      },
      {
        id: 28,
        name: "Maccheroni Gorgonzola",
        beschreibung: "mit Gorgonzolakäse, Sahne",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 29,
        name: "Maccheroni quattro Formaggi (überbacken)",
        stoff: "(1)(4)",
        beschreibung: "mit vier Käsesorten, Sahnesoße",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 30,
        name: "Maccheroni",
        beschreibung:
          "mit Putenfleisch, Brokkoli, Zwiebeln, Zuchini, Paprika, Knoblauch, Ei, Spezialsoße, Bolognesesoße",
        price: 8.5,
        zusatz: "Zusatz1",
      },
      {
        id: 31,
        name: "Maccheroni Mina",
        beschreibung: "mit Champignons, Krabben, Knoblauch und Sahnesoße",
        price: 8,
        zusatz: "Zusatz1",
      },
      {
        id: 32,
        name: "Maccheroni Diavola",
        beschreibung:
          "mit Rindfleischstreifen, Paprika, Peperoni, Knoblauch und Spezialsoße",
        price: 8,
        zusatz: "Zusatz1",
      },
      {
        id: 33,
        name: "Maccheroni Ricca",
        beschreibung: "mit Lachs, Spinat, Krabben, Sahne und Knoblauch",
        price: 8.5,
        zusatz: "Zusatz1",
      },
      {
        id: 34,
        name: "Maccheroni Brokkoli",
        stoff: "(4)(5)(7)(8)(11)(13)",
        beschreibung: "Vorderschinken, Sahne, Tomatensobe, Knoblauch",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 35,
        name: "Maccheroni alla Casa",
        beschreibung:
          "mit Spinat, Parmaschinken, Sahne, Tomatensoße und Knoblauch",
        price: 7,
        zusatz: "Zusatz1",
      },
      {
        id: 36,
        name: "Maccheroni alla Francescana",
        beschreibung:
          "mit Schweinefleisch, Paprika, Knoblauch, Zwiebeln und Tomatensoße",
        price: 7,
        zusatz: "Zusatz1",
      },
    ],
  },
  {
    type: "Tagliatelle",
    items: [
      {
        id: 37,
        name: "Tagliatelle al Forno",
        stoff: "(4)(5)(7)(8)(11)(13)",
        beschreibung:
          "Bandnudeln mit Champignons, Vorderschinken, Sahne und Gewürzen",
        price: 7.5,
        zusatz: "Zusatz1",
      },
      {
        id: 38,
        name: "Tagliatelle Salmone",
        beschreibung: "Bandnudeln mit Knoblauch, Lachs und Sahnesoße",
        price: 8,
        zusatz: "Zusatz1",
      },
      {
        id: 39,
        name: "Tagliatelle Paesana",
        beschreibung: "Bandnudeln mit Krabben, Sahne, Brokkoli und Knoblauch",
        price: 8,
        zusatz: "Zusatz1",
      },
      {
        id: 40,
        name: "Tagliatelle Steinpilz",
        beschreibung:
          "Bandnudeln mit Steinpilzen, Zwiebeln, Sahnesoße und Knoblauch",
        price: 8,
        zusatz: "Zusatz1",
      },
      {
        id: 41,
        name: "Tagliatelle Rustica",
        stoff: "(1)(4)",
        beschreibung:
          "Bandnudeln mit Lachs, Krabben, Brokkoli, Knoblauch und Käse",
        price: 8.5,
        zusatz: "Zusatz1",
      },
      {
        id: 42,
        name: "Tagliatelle Salmone Spinat",
        beschreibung: "Bandnudeln mit Lachs, Spinat, Sahne und Knoblauch",
        price: 8,
        zusatz: "Zusatz1",
      },
    ],
  },
  {
    type: "Reisgerichte",
    items: [
      {
        id: 209,
        name: "Reis Bombay",
        beschreibung: "Gebratener Reis mit Hähnchenfleisch, Paprika, Curry",
        price: 9,
        zusatz: "Zusatz3",
      },
      {
        id: 210,
        name: "Reis Madros",
        beschreibung: "mit Fleischsoße",
        price: 9,
        zusatz: "Zusatz3",
      },
      {
        id: 211,
        name: "Reis Kashmir",
        beschreibung: "gebratener Reis mit Meeresfrüchten, Krabben, Zwiebeln",
        price: 9,
        zusatz: "Zusatz3",
      },
      {
        id: 212,
        name: "Reis Punjab",
        beschreibung: "Gebratener Reis mit Gemüse und Chilli-Soße",
        price: 8.5,
        zusatz: "Zusatz3",
      },
      {
        id: 213,
        name: "Reis al Forno",
        beschreibung:
          "mit Rindfleisch, Gemüse, India-Curry-Soße und mit Käse überbacken",
        price: 9,
        zusatz: "Zusatz3",
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

function getProductDataByName(name) {
  let productData = undefined;
  for (const product of productsArray) {
    productData = product.items.filter((item) =>
      item.name.toUpperCase().includes(name.toUpperCase())
    );
    console.log(productData);
    if (productData !== undefined) {
      return productData;
    }
  }
  console.log("Product data does not exist for Name:" + name);
  return undefined;
}

export { productsArray, getDataByType, getProductData, getProductDataByName };
