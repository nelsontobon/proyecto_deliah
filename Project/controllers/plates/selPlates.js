const response = require('../../utils/response.js')

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

module.exports = {selPlates}