const express = require("express");
const recetarioContoller = require("../controllers/recetaController")
const router = express.Router();


router.get("/",recetarioContoller.getAllrecetas);

router.post("/",recetarioContoller.insertNewReceta);

module.exports = router;