// Levantar el servidor

const app = require("./app");
const { connect } = require("./database/mongoose");

const PORT = process.env.PORT || 3000;

connect();
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
