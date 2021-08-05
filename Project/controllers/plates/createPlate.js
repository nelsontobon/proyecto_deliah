const response = require('../../utils/response.js')

const {
    insertPlate
} = require('../../model/db_plates')

const createPlate = (req, res) => {
    const{name, description, price, category} = req.body
    insertPlate([name, description, price, category]).then(function () {
        res.status(200).send(
            new response(
                'ok',
                '200',
                'Se ha creado exitosamente el plato',
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

module.exports = {createPlate}