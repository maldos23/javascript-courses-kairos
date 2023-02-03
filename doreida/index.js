const cors = require("cors");
const express = require("express");

const app = express();

const PORT = 3300 || process.env.PORT;

app.use(express.json());
app.use(cors())

app.get("/web", (req, res) => {
  res.json({
    message: "Hola Mundo",
  });
});

const countries = {
  Mexico: {
    capital: "Ciudad de Mexico",
  },
  Francia: {
    capital: "Paris",
  },
  Argentina: {
    capital: "Buenos Aires",
  },
  Austria: {
    capital: "viena",
  },
  Chile: {
    capital: "santiago",
  },
};

app
  .get("/paises", (req, res) => {
    res.json({ countries });
  })
  .post("/paises", (req, res) => {
    const nuevoPais = req.body;

    if (!nuevoPais.nombre || !nuevoPais.capital) {
      res.status(400).json({ message: "Error en el formato" });
    } else {
      countries[nuevoPais.nombre] = {};
      countries[nuevoPais.nombre] = { capital: nuevoPais.capital };
      res.json({ countries });
    }
  });

app.listen(PORT, () => {
  console.log("Servidor en linea");
});
