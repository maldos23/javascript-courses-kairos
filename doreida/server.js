const cors = require("cors");
const express = require("express");
const carsRoutes = require("./routes/cars.route");
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", carsRoutes);

app.use(function handleErrors(err, req, res, next) {
  if (err) {
    res.status(400).json({ message: err });
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto: ${PORT}`);
});
