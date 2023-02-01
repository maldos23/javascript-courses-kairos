const { Router } = require("express");
const router = Router();

//Imports
const controllerMovies = require("../controller/controllerMovies");

//Routes
router.get("/movies", controllerMovies.getRouter);
router.post("/movies", controllerMovies.postRouter);

module.exports = router;