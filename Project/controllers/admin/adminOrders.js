const response = require('../../utils/response.js')

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
            res.status(400).send(
                new response(
                    'error',
                    '400',
                    'No se ha encontrado ninguna orden'
                )
            )
    })
}

module.exports = {adminOrders}