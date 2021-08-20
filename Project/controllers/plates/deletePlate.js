/**
 * Controlador para eliminar un plato
 * Solo usuarios administradores
 */
const response = require('../../config/response.js')

const {deletePlateId} = require('../../model/db_plates')

const deletePlate = (req, res) => {
    let { id } = req.query

    deletePlateId(id).then(function () {
        res.status(200).send(
            new response(
                'ok',
                '200',
                'plato eliminado correctamente'
            )
        )
    }).catch((err) => {
            res.status(500).send(
                new response(
                    'error',
                    '500',
                    'ha ocurrido un error al eliminar el plato'
                )
            )
    })
}

module.exports = {deletePlate}