const { encontrarReservaPrevia } = require("../models/reservas.mogoose");


const validarConflicto = async (req, res, next) => {

  const { espacioId, fecha, horaInicio, horaFin } = req.body;

  try {
    
    const hayConflicto = await encontrarReservaPrevia();

    console.log(hayConflicto)
  
    if(hayConflicto){
      return res.status(400).json({
          msg: "Ya existe una reserva para ese horario y oficina seleccionados."
      })
    }
  
    next();
    
  } catch (error) {
    next(error)
  }
}


module.exports = validarConflicto