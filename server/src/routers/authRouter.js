/** @format */

const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController.js");

authRouter.post("/login", authController.Login);
authRouter.post("/signup", authController.SignUp);

module.exports = authRouter;
