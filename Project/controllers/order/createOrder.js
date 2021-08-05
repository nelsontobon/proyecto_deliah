const response = require('../../utils/response.js')

const {
    insertOrder,
    selLastOrder,
    insertOrderPlate
} = require('../../model/db_orders')

const createOrder = (req, res) => {
    const {id_user, order, payment, address} = req.body

    insertOrder([id_user, payment.method, 1, address]).then(() => {
        selLastOrder().then((order_event) => {
            const {id_event, id_user, id_payment, id_status} = order_event[0]            
            let valueslist = []

            for (let item of order) {
                console.log(item)
                valueslist.push (`(${id_event}, ${item.id_plate}, ${item.quantity})`)
            }
            
            let values = valueslist.toString();

            insertOrderPlate(values).then(() => {
                res.status(200).send(
                    new response(
                        'ok',
                        '200',
                        'Se ha creado exitosamente la orden',
                        order_event[0]
                    )
                )
            }).catch((err) => {
                console.error('Error de conexion:', err);
                res.status(400).send(
                    new response(
                        'error',
                        '400',
                        'ha ocurrido un error al crear la order'
                    )
                )
            })
        }).catch((err) => {
            console.error('Error de conexion:', err);
            res.status(400).send(
                new response(
                    'error',
                    '400',
                    'ha ocurrido un crear la order'
                )
            )
        })
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

module.exports = {createOrder}