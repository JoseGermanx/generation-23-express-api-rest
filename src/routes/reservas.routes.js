
const express = require("express");
const { obtenerReservas, crearReserva } = require("../controllers/reservas.controllers");

const router = express.Router();

router.get("/", obtenerReservas);
router.post("/", crearReserva);


module.exports = router