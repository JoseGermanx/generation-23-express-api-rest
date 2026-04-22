

 const mongoose = require('mongoose')


 // schema

 const reservaSchema = new mongoose.Schema({
    "espacioId": {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Espacio'},
    "fecha": {type: String, required: true},
    "horaInicio": {type: String, required: true},
    "horaFin": {type: String, required: true},
 })

 // model
const Reserva = mongoose.model('Reserva', reservaSchema);


 // funciones personalizadas

 //obtener todas las reservas
 async function obtenerTodasLasReservas(){
    return await Reserva.find({});
 }

 //crear una nueva reserva

 async function crearUnaNuevaReserva(reserva) {
    const nuevaReserva = new Reserva(reserva);

    return await nuevaReserva.save();
 }

 // validar conflicto
 async function encontrarReservaPrevia(espacioId, fecha, horaInicio, horaFin) {
   return await Reserva.findOne({
      espacioId: espacioId,
      fecha: fecha,
      horaInicio: {$lt: horaFin},
      horaFin: {$gt: horaInicio}
   })

 }


 module.exports = {
    obtenerTodasLasReservas,
    crearUnaNuevaReserva,
    encontrarReservaPrevia
 }