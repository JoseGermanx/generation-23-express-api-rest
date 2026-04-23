

 const mongoose = require('mongoose')


 // schema

 const reservaSchema = new mongoose.Schema({
    "espacio": {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Espacio'},
    "usuario": {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Usuario'},
    "fecha": {type: String, required: true},
    "horaInicio": {type: String, required: true},
    "horaFin": {type: String, required: true},
 })

 // model
const Reserva = mongoose.model('Reserva', reservaSchema);


 // funciones personalizadas

 //obtener todas las reservas
 async function obtenerTodasLasReservas(){
    return await Reserva.find({}).populate('espacio',{
      ubicacion: 0,
      disponibilidad: 0,
      id: 0,
      capacidad: 0,
      _id: 0
    }).populate('usuario', {
      password: 0,
      _id: 0,
      _v0: 0,
      rol: 0
    });
 }

 //crear una nueva reserva

 async function crearUnaNuevaReserva(reserva) {
    const nuevaReserva = new Reserva(reserva);

    return await nuevaReserva.save();
 }

 // validar conflicto
 async function encontrarReservaPrevia(espacio, fecha, horaInicio, horaFin) {
   return await Reserva.findOne({
      espacio: espacio,
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