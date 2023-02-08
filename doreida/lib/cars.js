const initCars = [
  {
    nombre: "Kia",
    color: "Blanco"
  }
];

/**
 * @name getCars
 * @description This function returns all cars
 * @example
 * [{ nombre: NOMBRE_CARRO, color: COLOR_CARRO }]
 */
function getCars() {
  return initCars;
}

/**
 * @name createCar
 * @description This function creates new car
 * @example
 * { nombre: NOMBRE_CARRO, color: COLOR_CARRO }
 */
function createCar(car = { nombre: null, color: null }) {
  if (car.nombre && car.color) {
    initCars.push({ ...car });
  } else throw "Ingresa nombre y color";
}

module.exports = {
  getCars,
  createCar,
};