const { obtenerTodasLasReservas, crearUnaNuevaReserva, obtenerReservasPorUsuario } = require("../models/reservas.mogoose");



const obtenerReservas = async (req, res) => {
    try {
        const reservas = await obtenerTodasLasReservas(); // pide los datos a la capa modelo
        res.status(200).json(reservas) // respuesta al cliente
    } catch (error) {
        console.log("error",error)
        res.status(500).json({
            msg: "Error de servidor."
        })
    }
};

const crearReserva = async (req, res, next) => {

    const {usuario, espacio, fecha, horaInicio, horaFin } = req.body;

    try {        
        const nuevaReserva = {
            usuario,
            espacio,
            fecha,
            horaInicio,
            horaFin
         };
    
         const reservaCreada = await crearUnaNuevaReserva(nuevaReserva);
    
         res.status(201).json(reservaCreada);
    } catch (error) {
        next(error);       
    }
}


const obtenerReservasPorUsuarioId = async (req, res, next) => {
    try {
        const { usuarioId } = req.params;
        const reservas = await obtenerReservasPorUsuario(usuarioId);
        res.status(200).json(reservas);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    obtenerReservas,
    crearReserva,
    obtenerReservasPorUsuarioId
}