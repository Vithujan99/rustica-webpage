const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  type: { type: String },
  items: {
    type: [
      {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        stoff: { type: String },
        beschreibung: { type: String },
        price: { type: Number, required: true },
        zusatz: { type: String },
      },
    ],
  },
});

const ingredientSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  items: {
    type: [
      {
        _id: { type: Number, required: true },
        name: { type: String, required: true },
      },
    ],
  },
});

const orderAbholungSchema = new Schema({
  vorname: { type: String, required: true },
  nachname: { type: String, required: true },
  ordered_items: {
    type: [
      {
        id: { type: Number },
        quantity: { type: Number },
        ingredientsIds: {
          type: [
            {
              ingredientId: { type: Number },
              quantity: { type: Number },
            },
          ],
        },
        description: { type: String },
      },
    ],
  },
  entryDate: { type: Date, default: Date.now },
});

const orderLieferSchema = new Schema({
  vorname: { type: String, required: true },
  nachname: { type: String, required: true },
  straße: { type: String, required: true },
  hausnummer: { type: String, required: true },
  plz: { type: String, required: true },
  stadt: { type: String, required: true },
  ordered_items: {
    type: [
      {
        id: { type: Number },
        quantity: { type: Number },
        ingredientsIds: {
          type: [
            {
              ingredientId: { type: Number },
              quantity: { type: Number },
            },
          ],
        },
        description: { type: String },
      },
    ],
  },
  entryDate: { type: Date, default: Date.now },
});

const Products = mongoose.model("Products", productSchema, "products");
const Ingredients = mongoose.model(
  "Ingredients",
  ingredientSchema,
  "ingredients"
);
const OrderAbholung = mongoose.model(
  "OrderAbholung",
  orderAbholungSchema,
  "order_abholung"
);
const OrderLiefer = mongoose.model(
  "OrderLiefer",
  orderLieferSchema,
  "order_liefer"
);

const mySchemas = {
  Products: Products,
  Ingredients: Ingredients,
  OrderAbholung: OrderAbholung,
  OrderLiefer: OrderLiefer,
};

module.exports = mySchemas;
