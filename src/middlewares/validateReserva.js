const { getAllEspacios } = require("../models/espacios.models");
const { obtenerUnEspacioPorId } = require("../models/espacios.mongoose");


const validateReserva = async (req, res, next) => {

    const { espacioId, fecha, horaInicio, horaFin } = req.body;

    // validar que todos los campos sean obligatorios
    if (!espacioId || !fecha || !horaInicio || !horaFin ) {
        return res.status(400).json({
            msg: "Todos los campos son obligatorios."
        })
    }

    try {
        
        // validar id del espacio que se va a reservar
    
        const espacioExiste = await obtenerUnEspacioPorId(espacioId)
    
        if(!espacioExiste) {
            return res.status(404).json({
                msg: "El espacio seleccionado no existe."
            })
        }
       
    } catch (error) {
        return next(error);
        
    }

     next();
}


module.exports = validateReserva;