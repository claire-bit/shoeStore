const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const moment = require("moment");
const properties = require("./properties.json")
dotenv.config();

mongoose
  .connect(properties.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json());
  app.use(bodyParser.json());
  app.use(cors());
  app.use("/api/auth", authRoute); 
  app.use("/api/users", userRoute);
  app.use("/api/products", productRoute);
  app.use("/api/carts", cartRoute);
  app.use("/api/orders", orderRoute);

  app.get("/", async (req, res) => {
    res.send("<h1>😀 Your access token is Claire</h1>");
  });

  app.post("/stk", (req, res) => {
    const phone = req.body.phone;
    const amount = req.body.amount;

    res.json({phone, amount})
  });

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });
   