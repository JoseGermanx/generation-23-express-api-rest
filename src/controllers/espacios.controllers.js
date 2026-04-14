const { getAllEspacios } = require("../models/espacios.models")


const obtenerEspacios = async (req, res) => {
    try {
        const espacios = await getAllEspacios(); // pide los datos a la capa modelo
        res.status(200).json(espacios) // respuesta al cliente
    } catch (error) {
        console.log("error",error)
        res.status(500).json({
            msg: "Error de servidor."
        })
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