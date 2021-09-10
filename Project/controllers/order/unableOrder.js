/**
 * Controlador para actualizar el estado de una orden
 */
const response = require('../../config/response.js')

const {
    updateIsActiveOrder
} = require('../../model/db_orders')

const unableOrder = (req, res) => {
    let {id} = req.query
    let {is_active} = req.body

    updateIsActiveOrder(id, is_active).then(() => {
                res.status(200).send(
                    new response(
                        'ok',
                        '200',
                        'Orden actualizada inhabilitada correctamente'
                    )
                )
    }).catch((err) => {
            console.error('Error de conexion:', err);
            res.status(500).send(
                new response(
                    'error',
                    '500',
                    'Error en la base de datos'
                )
            )
    })
}

module.exports = {unableOrder}