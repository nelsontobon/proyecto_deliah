const rateLimit = require('express-rate-limit');
const response = require('../utils/response.js')
const {selUserUsername, selUserId} = require('../model/db_user')


exports.limiterSingUp = rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutos
    max: 3,
    message: "Se supero el limite de 3 peticiones por hora"
});

// MODULAR
exports.validateUser = (req, res, next) => {
    let {username} = req.body;

    selUserUsername(username).then( function (users) {
        if (users.length > 0) {
            if (username == users[0].username) {
                res.status(401).send(
                    new response(
                        'error',
                        '402',
                        'el usuario ya existe'
                    )
                )
            } else {
                next()
            }
        } else {
            next()
        }
    })
}

exports.validateId = (req, res, next) => {

    let {id} = req.query;

    selUserId(id).then(function (users) {
        if (users.length > 0) {
            next()
        } else {
            res.status(401).send(
                new response(
                    'error',
                    '402',
                    `el usuario con el id:${id} no existe`
                )
            )
        }
    })
}

