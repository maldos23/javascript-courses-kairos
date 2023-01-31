const express = require("express");

const aplicacion = express();

const PORT = 4000 || process.env.PORT;

aplicacion.use(express.json());

aplicacion.get("/pagina", (req, res) => {
  const { name = "Ingrea un nombre " } = req.query;
  res.json({ mensaje: `El serevidor dice ${name} ` });
});

const countries = {
  mexico: "Mexico",
  usa: "Washington",
  brasil: "SanPaublo",
  canada: "toronto",
  argentina: "buenosAires",
};

console.log(countries);

aplicacion.get("/countries", (req, res) => {
  res.json({ countries });
});

/* aplicacion.post("", (req, res) => {
    const nuevoPais = req.body;

    if (!nuevoPais?.name || !nuevoPais?.)
}); */

aplicacion.listen(PORT, () => {
  console.log("Servidor en linea port:", PORT);
});
