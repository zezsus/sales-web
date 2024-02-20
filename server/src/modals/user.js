/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  address: { type: String },
  phoneNumber: { type: String },
});

module.exports = mongoose.model("users", userSchema);
