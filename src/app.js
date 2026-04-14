// inicializar la aplicación de express

const express = require("express");
const morgan = require("morgan");
const espaciosRoutes = require("./routes/espacios.routes")
const reservarRoutes = require("./routes/reservas.routes")

const app = express();


//middlewares
app.use(express.json());  // -> Middleware incopodado
app.use(morgan("dev")); /// _> Middleware de terceros

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
app.use("/espacios", espaciosRoutes);

// Rutas de reservas
app.use("/reservas", reservarRoutes);


module.exports = app;


