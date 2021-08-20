/**
 * Valida que el username a crear no exista
 */
const response = require('../../config/response.js')
const {
    selUserUsername
} = require('../../model/db_user')

exports.validateUser = (req, res, next) => {
    let {
        username
    } = req.body;

    selUserUsername(username).then(function (users) {
        if (users.length > 0) {
            if (username == users[0].username) {
                res.status(400).send(
                    new response(
                        'error',
                        '400',
                        'el usuario ya existe'
                    )
                )
            } else {
                next()
            }
        } else {
            next()
        }
    }).catch((err) => {
        res.status(500).send('Error de conexion:', err)
    })
}