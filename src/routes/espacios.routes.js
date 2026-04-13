
const express = require("express");
const { obstenerEspacios, crearEspacios } = require("../controllers/espacios.controllers");

const router = express.Router();

router.get("/", obstenerEspacios)

router.post("/", crearEspacios)


module.exports = router


