const response = require('../../utils/response.js')

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
            console.error('Error de conexion:', err);
            res.status(400).send(
                new response(
                    'error',
                    '400',
                    'ha ocurrido un error'
                )
            )
    })
}

module.exports = {selPlateId}