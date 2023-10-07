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

const orderSchema = new Schema({
  vorname: { type: String, required: true },
  nachname: { type: String, required: true },
  telefonnummer: { type: String, required: true },
  straße: { type: String },
  hausnummer: { type: String },
  plz: { type: String },
  stadt: { type: String },
  anmerkung: { type: String },
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
    required: true,
  },
  service: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  entryDate: { type: Date },
});

const Products = mongoose.model("Products", productSchema, "products");
const Ingredients = mongoose.model(
  "Ingredients",
  ingredientSchema,
  "ingredients"
);
const AdminOrder = mongoose.model("AdminOrder", orderSchema, "admin_orders");
const Order = mongoose.model("Order", orderSchema, "orders");

const mySchemas = {
  Products: Products,
  Ingredients: Ingredients,
  AdminOrder: AdminOrder,
  Order: Order,
};

module.exports = mySchemas;
