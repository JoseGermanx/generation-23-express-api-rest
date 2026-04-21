// inicializar la aplicación de express

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const espaciosRoutes = require("./routes/espacios.routes")
const reservarRoutes = require("./routes/reservas.routes");
const usuariosRoutes = require("./routes/users.routes")
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");

const app = express();


//middlewares
app.use(express.json());  // -> Middleware incopodado
app.use(morgan("dev")); /// _> Middleware de terceros
app.use(cors());

app.use((req, res, next)=>{ // Middleware personalizado

    const valido = true;
    
    if (valido) {
         console.log("Datos válidos, avanza.")
         next();
    } else {
        return res.status(400).json({
            msg: "Datos invalidos"
        })
    }
})


// Rutas de espacios
// app.use("/api/v1/espacios", espaciosRoutes); definición específica de una versión de la api
app.use("/espacios", espaciosRoutes); 

// Rutas de reservas
app.use("/reservas", reservarRoutes);

// Rutas de gestion de usuarios
app.use("/usuario", usuariosRoutes)


app.use(notFound); // manejador de rutas no definidas.
app.use(errorHandler); // sobreescribimos el manejador de errores de express.


module.exports = app;


