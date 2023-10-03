const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const schemas = require("../models/schemas");

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  console.log(token);
  if (!token) {
    res.send("Nicht Angemeldet");
  } else {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "Zugriff nicht erlaubt" });
      } else {
        req.userID = decoded.id;
        next();
      }
    });
  }
};

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

//Authentifizierung einbauen
router.post("/orders", async (req, res) => {
  const {
    vorname,
    nachname,
    telefonnummer,
    straße,
    hausnummer,
    plz,
    stadt,
    anmerkung,
    service,
    paymentMethod,
    ordered_items,
    entryDate,
  } = req.body;
  const orederData = {
    vorname: vorname,
    nachname: nachname,
    telefonnummer: telefonnummer,
    straße: straße,
    hausnummer: hausnummer,
    plz: plz,
    stadt: stadt,
    anmerkung: anmerkung,
    service: service,
    paymentMethod: paymentMethod,
    ordered_items: ordered_items,
    entryDate: entryDate,
  };
  const newOrder = new schemas.Order(orederData);
  //always use await when interact with url|database
  const saveOrder = await newOrder.save();
  if (saveOrder) {
    res.send("Vielen Dank für Ihre Bestellung");
  } else {
    res.send("Faliled to send");
  }
  res.end();
});
//Authentifizierung einbauen
router.get("/orders", verifyJWT, async (req, res) => {
  try {
    const order = schemas.Order;
    const allOrder = await order.find({}).exec();
    res.send(JSON.stringify(allOrder));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/orders/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const order = schemas.Order;
    await order.deleteOne({ _id: id });
    const answer = "Sucessfully Deleted _id: " + id;
    console.log(answer);
    res.send(answer);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const id = process.env.ADMIN_ID;
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300 * 96,
    });

    res.json({ auth: true, token: token });
  } else {
    res.json({ auth: false, message: "Wrong Credentials!" });
  }
});

module.exports = router;
