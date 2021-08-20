/**
 * Validar que el id del usario exista
 */
const response = require('../../config/response.js')

const {
    selUserId
} = require('../../model/db_user')

exports.validateId = (req, res, next) => {
    let {
        id
    } = req.query;

    selUserId(id).then(function (users) {
        if (users.length > 0) {
            next()
        } else {
            res.status(404).send(
                new response(
                    'error',
                    '404',
                    `el usuario con el id:${id} no existe`
                )
            )
        }
    })
}