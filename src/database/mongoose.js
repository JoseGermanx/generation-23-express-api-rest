
const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongo corriendo correctamente.")
    } catch (error) {
        throw new Error(error)
    }

}

module.exports = {
    connect
}