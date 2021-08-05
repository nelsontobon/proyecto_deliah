const response = require('../../utils/response.js')

const {
    selNewOrderStatus,
    updateStatusOrder
} = require('../../model/db_admin')


const updateStatus = (req, res) => {
    let {id} = req.query
    let {id_status} = req.body

    updateStatusOrder(id, id_status).then(() => {
        selNewOrderStatus(id).then((order) => {

            console.log(id_status == order[0].id_status)
            if (id_status == order[0].id_status){
                res.status(200).send(
                    new response(
                        'ok',
                        '200',
                        'Orden actualizada correctamente',
                        order
                    )
                )
            }else{
                res.status(400).send(
                    new response(
                        'error',
                        '400',
                        'No se ha actualizado la orden'
                    )
                )
            }
            
        }).catch((err) => {
                console.error('Error de conexion:', err);
                res.status(400).send(
                    new response(
                        'error',
                        '400',
                        'No se ha actualizado la orden'
                    )
                )
        })
    }).catch((err) => {
            console.error('Error de conexion:', err);
            res.status(400).send(
                new response(
                    'error',
                    '400',
                    'No se ha actualizado la orden'
                )
            )
    })
}

module.exports = {updateStatus}