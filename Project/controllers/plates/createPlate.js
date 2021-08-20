/**
 * Controlador para crear un nuevo plato
 * Solo usuarios administradores
 */
const response = require('../../config/response.js')

const {
    insertPlate,
    sellLastUser
} = require('../../model/db_plates')

const createPlate = (req, res) => {
    const{name, description, price, category} = req.body
    insertPlate([name, description, price, category]).then(function () {
        sellLastUser().then(function (resp) {
            res.status(200).send(
                new response(
                    'ok',
                    '200',
                    'Se ha creado exitosamente el plato',
                    resp
                )
            )
            }).catch((err) => {
                console.error(err)
                res.status(500).send(
                    new response(
                        'error',
                        '500',
                        'ha ocurrido un error al crear el plato11',
                        err
                    )
                )
        })
    }).catch((err) => {
            res.status(500).send(
                new response(
                    'error',
                    '500',
                    'ha ocurrido un error al crear el plato'
                )
            )
    })
}

module.exports = {createPlate}