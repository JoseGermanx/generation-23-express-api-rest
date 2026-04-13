
const express = require("express");
const { obstenerEspacios } = require("../controllers/espacios.controllers");

const router = express.Router();

router.get("/", obstenerEspacios)


module.exports = router


