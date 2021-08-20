/**
 * Controlador para actualizar el estado de una orden
 */
const response = require('../../config/response.js')

const {
    selNewOrderStatus,
    updateStatusOrder
} = require('../../model/db_admin')

const updateStatus = (req, res) => {
    let {id} = req.query
    let {id_status} = req.body

    updateStatusOrder(id, id_status).then(() => {
        selNewOrderStatus(id).then((order) => {
            console.log();
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
                throw 'Error';
            }
        }).catch((err) => {
                res.status(500).send(
                    new response(
                        'error',
                        '500',
                        'Error en la base de datoss'
                    )
                )
        })
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

module.exports = {updateStatus}