const express = require("express");
const cors = require("cors"); //to access the Server from diffrent Domains
const bodyParser = require("body-parser");
const router = require("./routes/router");

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

const port = 4000; //out frontend runs on 3000 our backend on 4000 for using api
const server = app.listen(port, () => {
  console.log("Server is running on port " + port);
});
