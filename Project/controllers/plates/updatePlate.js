/**
 * Controlador para actualizar la informacion de un plato
 * Solo usuarios administradores 
 */
const response = require('../../config/response.js')

const {
    selPlateById,
    updatePlateId
} = require('../../model/db_plates')

const updatePlate = (req, res) => {
    let {
        id
    } = req.query

    let body = req.body
    let fields = []

    for (let key in body) {
        fields.push(`${key}='${body[key]}'`)
    }

    updatePlateId(id, fields).then(function () {
        selPlateById(id).then(function (plate) {
            res.status(200).send(
                new response(
                    'ok',
                    '200',
                    'plato actualizado correctamente',
                    plate[0]
                )
            )
        }).catch((err) => {
            res.status(500).send(
                new response(
                    'error',
                    '500',
                    'ha ocurrido un error al actualizar el plato'
                )
            )
        })
    }).catch((err) => {
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al actualizar el plato'
            )
        )
    })
}

module.exports = {updatePlate}