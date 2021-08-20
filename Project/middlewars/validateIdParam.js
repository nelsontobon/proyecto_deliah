/**
 * Validacion para asegurarse de que hay un id en los query params
 */
const response = require('../config/response.js')

exports.validateIdParam = (req, res, next) => {
    let {id} = req.query;

    if (id){
        next()
    }else {
        res.status(404).send(
            new response(
                'error',
                '404',
                `no hay id para buscar`
            )
        )
    }
}