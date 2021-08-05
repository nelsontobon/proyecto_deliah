const response = require('../../utils/response.js')

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
            console.error('Error de conexion:', err);
            res.status(400).send(
                new response(
                    'error',
                    '400',
                    'ha ocurrido un error al eliminar el plato'
                )
            )
    })
}

module.exports = {deletePlate}