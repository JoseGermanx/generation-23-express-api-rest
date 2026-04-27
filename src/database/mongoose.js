
// const mongoose = require('mongoose');

// async function connect() {

//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("Mongo corriendo correctamente.")
//     } catch (error) {
//         throw new Error(error)
//     }

// }

// module.exports = {
//     connect
// }

// db.js
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Falta la variable MONGO_URI");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

async function connect() {

  try {
    
      if (cached.conn) {
        return cached.conn;
      }
    
      if (!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URI, {
          bufferCommands: false,
        });
        console.log("MongoDB conectado correctamente.");
      }
  } catch (error) {
    throw new Error(error);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = {connect};