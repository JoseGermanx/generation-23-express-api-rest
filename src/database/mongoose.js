
const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/cowork');
        console.log("Mongo corriendo correctamente.")
    } catch (error) {
        throw new Error(error)
    }

}

module.exports = {
    connect
}