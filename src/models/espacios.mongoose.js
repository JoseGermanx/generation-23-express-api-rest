
// importar mongoose
 const mongoose = require('mongoose')



// Definir el schema

const espacioSchema = new mongoose.Schema({
    nombre: String,
    ubicacion: String,
    capacidad: Number,
    disponibilidad: Boolean
})

// Crear el modelo

const Espacio = mongoose.model('Espacio', espacioSchema)

// Modelo Espacio --->>>>>> mongodb  colección espacios

// obtener todos los espacios

async function obtenerTodosLosEspacios() {
    return await Espacio.find({});
}


module.exports = {
    obtenerTodosLosEspacios
};