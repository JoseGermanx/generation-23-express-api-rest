const { getAllEspacios } = require("../models/espacios.models")


const obtenerEspacios = async (req, res, next) => {

    try {            
        const espacios = await getAllEspacios(); // pide los datos a la capa modelo
        res.status(200).json(espacios) // respuesta al cliente
    } catch (error) {
       next(error);
    }
}

const crearEspacios = async (req, res) => {
    res.json({
        msg: "Crear espacios"
    })
}


module.exports = {
    obtenerEspacios,
    crearEspacios
}