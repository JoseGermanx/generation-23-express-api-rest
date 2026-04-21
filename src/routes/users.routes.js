

const express = require('express');
const { registrar, login } = require('../controllers/usuarios.controllers');

const router = express.Router();


router.post('/registro', registrar); // crear un nuevo usuario
router.post('/login', login); // login---

module.exports = router;