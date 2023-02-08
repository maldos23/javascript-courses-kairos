const recetarioService = require ("../lib/recetaService");

/**
 * getAllrecetas
 * @param {object} req 
 * @param {object} res
 * @description Obtiene todas las recetas
 * del recetario 
 */
const getAllrecetas = (req, res) => {
    const allRecetas = recetarioService.getAllrecetas();
    res.json(allRecetas);
};


/**
 * insertNewReceta
 * @param {object} req 
 * @param {object} res 
 * @returns {object}
 * @description Inserta una 
 * receta
 */
const insertNewReceta = (req, res) => {
    const { body } = req;
    if (!body?.descripcion ||
        !body?.sabor ||
        !body?.topico ||
        !body?.precio  
        ){ 
            //return;
            res.status(400);
        }

    const newReceta = {
        descripcion: body.descripcion,
        sabor: body.sabor,
        topico: body.topico,
        precio: body.precio
    };
    const insertaReceta = recetarioService.insertNewReceta(newReceta);
    res.status(201).send({status : "OK", data: insertaReceta });
};


module.exports = { 
    getAllrecetas, 
    insertNewReceta, 
};
