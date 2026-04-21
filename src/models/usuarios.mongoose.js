const bycrypt = require('bcryptjs')


 const mongoose = require('mongoose')


 const usuarioSchema = new mongoose.Schema({
    nombre: {type: String, require: true},
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    rol: { type: String, default: 'user' }
 })

 // middleware pre

 usuarioSchema.pre("save", async function () {
    if(!this.isModified('password')) return;
    this.password = await bycrypt.hash(this.password, 10);
 });


 const Usuario = mongoose.model('Usuario', usuarioSchema);

async function crearNuevoUsuario(usuario) {

    const nuevoUsuario = new Usuario(usuario);
    return await nuevoUsuario.save();

}

module.exports = {
    crearNuevoUsuario
}