const express = require("express");

//App
const app = express();

//Caracteristicas de servidor

const PORT = 3000 || process.env.PORT;

//Usar Json
app.use(express.json());

//Rutas
app.get("/paginita", (req, res) => {
  const { name = "Por favor ingresa un nombre" } = req.query;

  res.json({
    message: `El servidor dice ${name}`,
  });
});

const countries = {
  Colombia: {
    capital: "Bogota",
  },
  Chile: {
    capital: "Santiago",
  },
  Bolivia: {
    capital: "Guayaquil",
  },
  Peru: {
    capital: "Quito",
  },
  Egipto: {
    capital: "Cairo",
  },
};

app.get("/countries", (req, res) => {
  res.json({ countries });
});

app.post("/countries", (req, res) => {
  const newCountry = req.body;

  if (!newCountry?.name || !newCountry?.capital) {
    res.status(400).json({ error: "Formato incompleto" });
  } else {
    countries[newCountry.name] = {};
    countries[newCountry.name].capital = newCountry?.capital;
    res.json({ countries });
  }
});

//Start server
app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto: ${PORT}`);
});
