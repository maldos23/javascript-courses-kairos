const initMoives = [
  {
    name: "Avatar",
    description: "Monitos azules gigantes",
  },
];

/**
 * @name getMovies
 * @description This function returns all movies
 * @example
 * [{ name: NAME_MOVIE, description: MOVIE_DESCRIPTION }]
 */
function getMovies() {
  return initMoives;
}

/**
 * @name setNewMovie
 * @description This function create new movie
 * @example {name: "Titanic", description: "Romantic movie"}
 */
function setNewMovie(movie = { name: null, description: null }) {
  if (movie?.description && movie?.name) {
    initMoives.push({ ...movie });
  } else throw "Ingresa movie.description y movie.name";
}

module.exports = {
  getMovies,
  setNewMovie,
};
