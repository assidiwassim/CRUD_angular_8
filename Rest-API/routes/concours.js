const express = require("express")
const cors = require("cors")
const concours = express.Router()
concours.use(cors())
var ConcoursController = require("../Controllers/ConcoursController");

concours.post("/add", ConcoursController.add);
concours.get("/all", ConcoursController.all);
concours.delete("/remove/:id", ConcoursController.remove)


module.exports = concours