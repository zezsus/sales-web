/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  brand: { type: String, require: true },
  category: { type: String, require: true },
});

module.exports = mongoose.model("prducts", productSchema);
