
const express = require("express");
const { obtenerReservas, crearReserva } = require("../controllers/reservas.controllers");
const validateReserva = require("../middlewares/validateReserva");

const router = express.Router();

router.get("/", obtenerReservas);
router.post("/",validateReserva, crearReserva);


module.exports = router