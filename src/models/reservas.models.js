
const fs = require("fs/promises");
const path = require("path");

const reservasPath = path.join(__dirname, "../../data/reservas.json");


// leer las reservas
const readReservas = async () => {
     const data = await fs.readFile(reservasPath, "utf8");
        return JSON.parse(data)
}

// escribir las reservas
const writeReservas = async (reservas) => {
    await fs.writeFile(reservasPath, JSON.stringify(reservas, null, 2), "utf8");
}



const getAllReservas = async () => {

}

const createReserva = async () => {

}

const updateReserva = async () => {

}

const deleteReserva = async () => {

}

module.exports = {
    getAllReservas,
    createReserva,
    updateReserva,
    deleteReserva
}