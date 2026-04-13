// inicializar la aplicación de express

const express = require("express");

const espaciosRoutes = require("./routes/espacios.routes")
const reservarRoutes = require("./routes/reservas.routes")

const app = express();


//middlewares
app.use(express.json());

// Rutas de espacios
app.use("/espacios", espaciosRoutes);

// Rutas de reservas
app.use("/reservas", reservarRoutes);


module.exports = app;


