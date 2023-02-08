
const cors = require("cors");
const express = require("express");
const v1Router = require("./route/route");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/recetario", v1Router);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});