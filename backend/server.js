const axios = require("axios");
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors"); //to access the Server from diffrent Domains
const bodyParser = require("body-parser");
const router = require("./routes/router");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();
app.use(bodyParser.json()); //to get form as json Data
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credential: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//this code must be include after everything above
app.use("/", router); //u can also add here all the get and post functions, but file get long

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(process.env.DB_URI, dbOptions)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

//Paypal
const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PORT } = process.env; //out frontend runs on 3000 our backend on 4000 for using api
const base = "https://api-m.sandbox.paypal.com";
//app.use(express.static("client")); We are using cors line 17
app.use(express.json());
const generateAccessToken = async () => {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS");
    }
    const auth = Buffer.from(
      PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET
    ).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
  }
};

function getPData(id, productsArray) {
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
function getPriceWithIData(id, ingredientsData) {
  return ingredientsData.find((data) =>
    data.items.find((item) => item._id === id)
  );
}
async function getPrice(cart) {
  const productsArray = await axios
    .get("http://localhost:4000/products")
    .then((res) => {
      return res.data;
    });
  const ingredientsData = await axios
    .get("http://localhost:4000/ingredients")
    .then((res) => {
      return res.data;
    });
  let totalCost = 0;

  cart.map((product) => {
    const productData = getPData(product.id, productsArray);
    let ingCost = 0;
    product.ingredientsIds.map((ing) => {
      const ingData = getPriceWithIData(ing.ingredientId, ingredientsData);
      ingCost += ingData.price * ing.quantity;
    });
    totalCost += (productData.price + ingCost) * product.quantity;
  });
  var cost = Number(totalCost);
  return cost.toFixed(2);
}

const createOrder = async (cart) => {
  // use the cart information passed from the front-end to calculate the purchase unit details
  console.log(
    "shopping cart information passed from the frontend createOrder() callback:",
    cart
  );
  const price = await getPrice(cart);
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "EUR",
          value: price, //Needs to be changed!!!!!
        },
      },
    ],
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};
const captureOrder = async (orderID) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
  });

  return handleResponse(response);
};
async function handleResponse(response) {
  try {
    const jsonResponse = await response.json();
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}
app.post("/my-server/create-paypal-order", async (req, res) => {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const { cart } = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});
app.post("/my-server/capture-paypal-order", async (req, res) => {
  try {
    const { orderID } = req.body;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
});
//End of Paypall

const server = app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
