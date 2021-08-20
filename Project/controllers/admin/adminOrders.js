/**
 * Controlador para seleccionar todas las ordenes por parte de un usuario admin
 */
const response = require('../../config/response.js')

const {
    selAdminOrders
} = require('../../model/db_admin')

const adminOrders = (req, res) => {
    selAdminOrders().then((orders) => {
        console.log(orders)

        res.status(200).send(
            new response(
                'ok',
                '200',
                'Orden encontrada correctamente',
                orders
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

module.exports = {adminOrders}