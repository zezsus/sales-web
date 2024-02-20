/** @format */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const router = require("./routers/index");

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected successfully!");
  })
  .catch((error) => console.log(error));

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
