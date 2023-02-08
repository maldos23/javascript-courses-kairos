const DB = require("./db.json");

const { saveToDatabase } = require("./utils");
//var  currentDB =DB;


/**
 * getAllrecetas
 * @returns {object}
 */
const getAllrecetas = () => {
  //return currentDB.recetario;
  return DB.recetario;
};


/**
 * guardaReceta
 * @param {object} recetaNueva 
 * @returns {Object}
 * @description guarda la nueva receta en 
 * bd
 */
const guardaReceta = (recetaNueva) =>{
    const isAlreadyAdded  = DB.recetario.findIndex((recetario) => recetario.descripcion == recetaNueva.descripcion) > -1;
    if(isAlreadyAdded){
        return;
    }
    DB.recetario.push(recetaNueva);
    saveToDatabase(DB);
    return recetaNueva;
}


module.exports = { 
    getAllrecetas, 
    guardaReceta,
 };