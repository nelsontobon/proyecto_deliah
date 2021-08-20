/**
 * Controlador para seleccionar la informacion de un plato
 */
const response = require('../../config/response.js')

const {
    selPlateById
} = require('../../model/db_plates')

const selPlateId = (req, res) => {
    const {id} = req.query

    selPlateById(id).then(function (plate) {
        res.status(200).send(
            new response(
                'ok',
                '200',
                'Plato seleccionado correctamente',
                plate[0]
            )
        )
    }).catch((err) => {
            res.status(500).send(
                new response(
                    'error',
                    '500',
                    'ha ocurrido un error al seleccionar el plato'
                )
            )
    })
}

module.exports = {selPlateId}