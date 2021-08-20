/**
 * Validacion para asegurarse que el status al que se desea actualizar la orden exista
 */
const response = require('../../config/response.js')

const {
    selStatusId
} = require('../../model/db_admin')


exports.validateStatus = (req, res, next) => {
    let {id_status} = req.body;

    selStatusId(id_status).then(function (status) {
        if (status.length > 0) {
            next()
        } else {
            res.status(404).send(
                new response(
                    'error',
                    '404',
                    `el estado con el id: ${id_status} no existe`
                )
            )
        }
    })
}