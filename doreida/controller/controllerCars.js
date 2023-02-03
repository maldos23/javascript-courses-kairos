const cars = require("../lib/cars");

/**
 * @method getRouter
 * @param {object} req
 * @param {object} res
 * @description This route gets all cars
 * @returns {object}
 */
function getRouter(req, res) {
    res.json({ cars: cars.getCars() });
}

/**
 * @method postRouter
 * @param {object} req
 * @param {object} res
 * @description This route creates new car
 * @returns {object}
 */
function postRouter(req, res) {
    cars.createCar(req.body);
    res.json({ message: "Add new car", cars: cars.getCars() });
}

module.exports = {
    getRouter,
    postRouter,
};