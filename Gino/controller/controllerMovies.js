const movies = require("../lib/moviesRecords");

/**
 * getRouter
 * @param {object} req
 * @param {object} res
 * @description Esta es la ruta para obtener todas
 * las peliculas.
 * @returns {object}
 */
function getRouter(req, res) {
  res.json({ movies: movies.getMovies() });
}

/**
 * postRouter
 * @param {object} req
 * @param {object} res
 * @description Esta es la ruta para agregar una nueva pelicula
 * @returns {object}
 */
function postRouter(req, res) {
  movies.setNewMovie(req.body);
  res.json({ message: "Add new movie", movies: movies.getMovies() });
}

module.exports = {
  getRouter,
  postRouter,
};
