
// importar mongoose
 const mongoose = require('mongoose')



// Definir el schema

const espacioSchema = new mongoose.Schema({
    nombre: {type: String, require: true},
    ubicacion: {type: String, require: true},
    capacidad: {type: Number, require: true},
    disponibilidad: {type: Boolean, default: true}
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