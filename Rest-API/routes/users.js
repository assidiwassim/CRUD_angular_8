const express = require("express")
const cors = require("cors")
const users = express.Router()
users.use(cors())
var AuthController = require("../Controllers/AuthController");

users.post("/register", AuthController.register);
users.post("/login",AuthController.login);

module.exports = users