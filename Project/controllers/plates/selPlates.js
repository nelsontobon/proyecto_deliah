/**
 * Controlador para seleccionar todos los platos
 */
const response = require('../../config/response.js')

const {
    selAllPlates
} = require('../../model/db_plates')

const selPlates = (req, res) => {

    selAllPlates().then(function (plates) {
        res.status(200).send(
            new response(
                'ok',
                '200',
                'Todos los platos',
                plates
            )
        )
    }).catch((err) => {
            res.status(500).send(
                new response(
                    'error',
                    '500',
                    'ha ocurrido un error al seleccionar los platos'
                )
            )
    })
}

module.exports = {selPlates}