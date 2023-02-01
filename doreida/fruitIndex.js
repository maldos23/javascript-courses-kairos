const express = require("express");

const app = express();

const PORT = 3302 || process.env.PORT;

app.use(express.json())

const fruits = {
    naranja: {
        color: "Naranja"
    },
    platano: {
        color: "Amarillo"
    },
    fresa: {
        color: "Rojo"
    },
    pera: {
        color: "Verde"
    },
    uva: {
        color: "Morado"
    }
}

app
    .get("/fruits", (req, res) => {
        res.json({ fruits });
    })
    .post("/fruits", (req, res) => {
        const fruit = req.body;

        if (!fruit.nombre || !fruit.color) {
            res.status(400).json({ message: "Error en el formato" });
        } else {
            fruits[fruit.nombre] = {};
            fruits[fruit.nombre] = { color: fruit.color };
            res.json({ fruits });
        }
    })

app.listen(PORT, () => {
    console.log("Servidor de frutas arriba");
})