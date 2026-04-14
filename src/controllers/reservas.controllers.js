const { getAllReservas, createReserva } = require("../models/reservas.models");


const obtenerReservas = async (req, res) => {
    try {
        const reservas = await getAllReservas(); // pide los datos a la capa modelo
        res.status(200).json(reservas) // respuesta al cliente
    } catch (error) {
        console.log("error",error)
        res.status(500).json({
            msg: "Error de servidor."
        })
    }
};

const crearReserva = async (req, res) => {

    const { espacioId, fecha, horaInicio, horaFin } = req.body;

    try {        
        const reservas = await getAllReservas();
    
        const nuevoId = reservas.length ? Math.max(...reservas.map(elem => elem.id) + 1) : 1;
    
         const nuevaReserva = {
            id: nuevoId,
            espacioId,
            fecha,
            horaInicio,
            horaFin
         };
    
         const reservaCreada = await createReserva(nuevaReserva);
    
         res.status(201).json(reservaCreada);
    } catch (error) {
         console.log("error",error)
         res.status(500).json({
            msg: "Error de servidor."
        })
    }

}


module.exports = {
    obtenerReservas,
    crearReserva
}