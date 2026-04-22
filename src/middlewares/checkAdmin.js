

const checkAdmin = (req, res, next) => {

    // req.user.id

    if (!req.user) {
        return res.status(401).json({
            msg: "User No autenticado."
        })
    }

// user por su id --- > 

    if (req.user.rol !== 'admin') {
        return res.status(403).json({
            msg: "Acceso denegado."
        })
    }

    next();
}

module.exports = checkAdmin