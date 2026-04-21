const { crearNuevoUsuario } = require("../models/usuarios.mongoose");


const registrar = async (req, res, next) => {

    try {
        const { nombre, email, password } = req.body;

        // validación 

        // consulta al modelo para crear el documento en la base de datos
        const usuario = await crearNuevoUsuario({ nombre, email, password })

        res.status(201).json({
            msg: "Usuario creado correctamente.",
            id: usuario._id
        })
        
    } catch (error) {
        next(error)
    }

}

// login

const login = async (req, res, next) => {

    try {
        const { email, password } = req.body;

        // validación 

        // consulta al modelo para validar identidad del usuario

        res.status(200).json({
            msg: "Login correcto"
        })
        
    } catch (error) {
        next(error)
    }

}

module.exports = {
    registrar,
    login
}