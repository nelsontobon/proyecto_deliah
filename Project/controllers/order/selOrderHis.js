/**
 * Controlador para seleccionar el detalle de una orden por parte de un usaurio
 * no admin
 */
const response = require('../../config/response.js')

const {
    selOrderId,
} = require('../../model/db_orders')

const selOrderHis = (req, res) => {
    const {id} = req.query

    selOrderId(id).then((order) => {
        
        const {id_event, id_user, id_payment, id_status} = order           
        let plates = []

        for (item of order){
            plates.push ( {
                "id_plate" : item.id_plate,
                "name": item.name,
                "price": item.price
            } )
        }

        console.log(
            plates
        );

        let resp = {
            "id_event" : order[0].id_event,
            "id_user": order[0].id_user,
            "id_payment": order[0].id_payment,
            "id_status": order[0].id_status,
            "plates": plates, 
            "address": order[0].address,
            "method": order[0].method,
            "event_hour": order[0].event_hour
        }

        res.status(200).send(
            new response(
                'ok',
                '200',
                'Orden encontrada correctamente',
                resp
            )
        )
    }).catch((err) => {
            console.error('Error de conexion:', err);
            res.status(500).send(
                new response(
                    'error',
                    '500',
                    'Error al seleccionar la orden'
                )
            )
    })
}

module.exports = {selOrderHis}