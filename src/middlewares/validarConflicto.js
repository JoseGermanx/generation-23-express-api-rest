const { encontrarReservaPrevia } = require("../models/reservas.mogoose");


const validarConflicto = async (req, res, next) => {

  const { espacio, fecha, horaInicio, horaFin } = req.body;

  try {
    //aquí esta el error
    const hayConflicto = await encontrarReservaPrevia(espacio, fecha, horaInicio, horaFin);

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