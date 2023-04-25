const jwt = require("jsonwebtoken");

exports.claveJWT = "j9EjY#yQb^#NJdCR";

/**
 * Extrae el token de la sesión
 * @param {*} req 
 * @returns 
 */
exports.extractToken = (req) => {
    console.log("----JWT extract---");
    console.log(req.session);
    if (req.session && req.session.token) {
        return req.session.token;
    }
    return null;
}

/**
 * Requiere el token de la sesión y devuelve un estado acorde a si es válido
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.requireJWT = (req, res, next) => {

    console.log("------JWT require----");
    console.log(req.session);
    const token = this.extractToken(req);

    if (token) {
        jwt.verify(token, this.claveJWT, (err, token_decoded) => {
            if (err) {
                res.status(401).json({ msg: err })
            } else {
                next();
            }
        })
    } else {
        res.status(401).json({ codError: 401, desc: "No existe el token. Debes autenticarte primero" })
    }
}

/**
 * Crea un token en la sesión
 * @param {*} req 
 */
exports.createJWT = (req) => {
    const token = jwt.sign({ check: true }, this.claveJWT, {
        expiresIn: "24h"
    })

    req.session.token = token;
    console.log("----JWT Create---");
    console.log(req.session);
}