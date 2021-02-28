const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

// app.use(express.json());
//const cors = require("cors");
//Middle wares
//app.use(cors());
app.use(bodyParser.json());
//Import route
const restaurantRoute = require("./routes/restaurants");
const authRoute = require("./routes/auth");

app.use("/", authRoute);
app.use("/", restaurantRoute);

app.get("/", (req, res) => {
  res.send("We are at home");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to DB")
);
//How to listen to the server
app.listen(3001);
