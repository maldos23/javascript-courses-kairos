

const express = require("express");
const api = express();
const PORT = 4000 || process.env.PORT;

api.use(express.json());


const miReceta = 
    {
    descripcion: "Pastel 3 leches ",
    precio: 23.4,
    ingredientes:{masa:{"harina":"100 grs","sal":"1 cucharada","agua":"1 taza"},
                  vetum:{"azucar":"120 grs","chocolate":"1 cucharada"}
                },
};

api.get("/receta", (req, res) => {
    res.json( { miReceta });
});

const  flora = 
    [{tipo: "flores", lista: ["rosas","tulipanes","pensa"]},
     {tipo: "arbolres", lista:["abeto","pino","abedul"]}
    ];

api.get("/flora", (req, res) => {
    res.json ( { flora } );
});


api.listen(PORT, ()=> {
    console.log("Servidor en Linea, Puerto ", PORT);
});
