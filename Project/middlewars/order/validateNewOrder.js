/**
 * Validar que toda la informacion necesaria para crear una orden este en el body
 */
const response = require('../../utils/response.js')

exports.validateNewOrder = (req, res, next) => {
    const {id_user, order, payment, address} = req.body

    if (id_user && order && payment && address){
        next()
    }else{
        res.status(400).send(
            new response(
                'error',
                '400',
                'informacion incompleta'
            )
        )
    }
}