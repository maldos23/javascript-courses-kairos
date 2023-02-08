const fs = require("fs");

/**
 * saveToDatabase
 * @param {object} DB 
 * @description se crea un nuevo
 * archivo 
 */
const saveToDatabase = (DB) => {
    fs.writeFileSync("./database/db.json", JSON.stringify(DB, null, 2), {
        encoding: "utf-8",
      });
    };

    module.exports = { saveToDatabase };