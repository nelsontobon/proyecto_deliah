const response = require('../../utils/response.js')

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
                    'plato actulizado correctamente',
                    plate[0]
                )
            )
        }).catch((err) => {
            console.error('Error de conexion:', err);
        })
    }).catch((err) => {
        console.error('Error de conexion:', err);
        res.status(400).send(
            new response(
                'error',
                '400',
                'ha ocurrido un error al actualizar el plato'
            )
        )
    })
}

module.exports = {updatePlate}