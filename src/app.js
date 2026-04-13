// inicializar la aplicación de express

const express = require("express");

const app = express();


//middlewares
app.use(express.json());


app.get("/", (req,res)=> {
    res.send("HOLA MUNDO")
});



module.exports = app;


