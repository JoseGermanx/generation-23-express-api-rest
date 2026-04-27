
// const mongoose = require('mongoose');

// async function connect() {

//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
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

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Falta la variable MONGODB_URI");
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
        cached.promise = mongoose.connect(MONGODB_URI, {
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