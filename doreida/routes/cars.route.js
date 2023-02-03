const { Router} = require("express");
const router = Router();

const controllerCars = require("../controller/controllerCars");

router.get("/cars", controllerCars.getRouter);
router.post("/cars", controllerCars.postRouter);

module.exports = router;