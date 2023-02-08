const Recetario = require ("../database/Recetario");

const { v4: uuid } = require("uuid");

/**
 * getAllrecetas
 * @returns {object}
 * @description Regresa las
 * recetas
 */
const getAllrecetas = () => {
    const allRecetas = Recetario.getAllrecetas();
    return allRecetas;
};
      
/**
 * insertNewReceta
 * @param {object} nuevaReceta 
 * @returns {object}
 */
const insertNewReceta = (nuevaReceta) => {

    const insertaNuevaReceta = {
        ...nuevaReceta,
        id: uuid()
    } ;
    const creaReceta = Recetario.guardaReceta(insertaNuevaReceta);
    return creaReceta;
};

module.exports = { getAllrecetas, insertNewReceta };