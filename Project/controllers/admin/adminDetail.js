const response = require('../../utils/response.js')

const {
    selAdminOrderId
} = require('../../model/db_admin')



const adminDetail = (req, res) => {
    const {id} = req.query

    selAdminOrderId(id).then((order) => {
        let plates = []
        let totalPrice = 0
        for (item of order){
            totalPrice += parseFloat(item.price) * parseFloat(item.quantity)
            plates.push ( {
                "id_plate" : item.id_plate,
                "name": item.name,
                "price": item.price,
                "quantity": item.quantity
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
            "totalPrice": totalPrice,
            "method": order[0].method,
            "address":order[0].address,
            "fullname": order[0].name + ' ' + order[0].lastname,
            "email": order[0].email,
            "username": order[0].username,
            "phone": order[0].phone,
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
            res.status(400).send(
                new response(
                    'error',
                    '400',
                    'No se ha encontrado ninguna orden'
                )
            )
    })
}

module.exports = {adminDetail}