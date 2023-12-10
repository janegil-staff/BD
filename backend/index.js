const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("db is connected!");

    app.listen(8000, () => {
      console.log("the port is listening on port 8000");
    });
  })
  .catch((ex) => {
    console.log("db connection failed: ", ex);
  });
