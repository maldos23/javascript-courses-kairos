const cors = require("cors");
const fs = require("fs");
const express = require("express");
const path = require("path");
const moviesRoutes = require("./routes/movies.route");
//App
const app = express();

//Caracteristicas de servidor
const PORT = 3000 || process.env.PORT;
const PUBLIC_INDEX = path.join(__dirname, "/src");

//Usar Json
app.use(cors());
app.use(express.static(PUBLIC_INDEX));
app.use(express.json());
app.use(function handleErrors(err, req, res, next) {
  if (err) {
    res.status(400).json({ message: err });
  }
  next();
});

app.use("/api", moviesRoutes);

//Start server
app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto: ${PORT}`);
});
