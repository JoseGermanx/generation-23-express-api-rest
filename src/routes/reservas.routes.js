
const express = require("express");

const router = express.Router();

router.get("/", (req, res)=>{
    res.json({
        msg: "Ruta para obtener reservas."
    })
})


module.exports = router