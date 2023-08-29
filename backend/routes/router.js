const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

router.post("/products", async (req, res) => {
  const { type, items } = req.body;
  const product = {
    type: type,
    items: items,
  };
  try {
    const newProduct = new schemas.Products(product);
    const saveProduct = await newProduct.save();
    res.status(201).json(saveProduct);
  } catch (err) {
    res.status(500).json(err);
  }

  res.end();
});

router.get("/products", async (req, res) => {
  try {
    const products = schemas.Products;
    const allProducts = await products.find({}).exec();
    res.send(JSON.stringify(allProducts));
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/ingredients", async (req, res) => {
  const { name, price, items } = req.body;
  const ingredient = {
    name: name,
    price: price,
    items: items,
  };
  try {
    const newIngredient = new schemas.Ingredients(ingredient);
    const saveIngredient = await newIngredient.save();
    res.status(201).json(saveIngredient);
  } catch (err) {
    res.status(500).json(err);
  }

  res.end();
});
router.get("/ingredients", async (req, res) => {
  try {
    const ingredients = schemas.Ingredients;
    const allIngredients = await ingredients.find({}).exec();
    res.send(JSON.stringify(allIngredients));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/orders/abholung", async (req, res) => {
  const { vorname, nachname, ordered_items } = req.body;
  const orederAbholungData = {
    vorname: vorname,
    nachname: nachname,
    ordered_items: ordered_items,
  };
  const newOrder = new schemas.OrderAbholung(orederAbholungData);
  //always use await when interact with url|database
  const saveOrder = await newOrder.save();
  if (saveOrder) {
    res.send("Ihre Bestellung wurde angenommen");
  } else {
    res.send("Faliled to send");
  }
  res.end();
});

router.post("/orders/liefer", async (req, res) => {
  const { vorname, nachname, straße, hausnummer, plz, stadt, ordered_items } =
    req.body;
  const orederLieferData = {
    vorname: vorname,
    nachname: nachname,
    straße: straße,
    hausnummer: hausnummer,
    plz: plz,
    stadt: stadt,
    ordered_items: ordered_items,
  };
  const newOrder = new schemas.OrderLiefer(orederLieferData);
  //always use await when interact with url|database
  const saveOrder = await newOrder.save();
  if (saveOrder) {
    res.send("Ihre Bestellung wurde angenommen");
  }
  res.end();
});
module.exports = router;
