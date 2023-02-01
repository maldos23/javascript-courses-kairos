const express = require("express");

const app = express();

const PORT = 3301 || process.env.PORT;

app.use(express.json());


const cars = {
    mazda: {
        color: "Rojo"
    },
    kia: {
        color: "Azul"
    },
    ford: {
        color: "Blanco"
    },
    nissan: {
        color: "Gris"
    },
    toyota: {
        color: "Negro"
    }
}


app
    .get("/cars", (req, res) => {
        res.json({ cars });
    })
    .post("/cars", (req, res) => {
        const car = req.body;

        if (!car.nombre || !car.color) {
            res.status(400).json({ message: "Error en el formato" });
        } else {
            cars[car.nombre] = {};
            cars[car.nombre] = { color: car.color };
            res.json({ cars });
        }
    })


app.listen(PORT, () => {
    console.log("Servidor de autos arriba");
})