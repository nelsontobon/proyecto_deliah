/**
 * Validacion para el usuario solo puede acceder a su informacion 
 */
const jwt_decode = require('jwt-decode');
const response = require('../../config/response.js')

exports.validateUserAccess = (req, res, next) => {

    let token = req.headers.authorization.split(' ')[1];
    let {id} = req.query

    if (jwt_decode(token).id == id){
        next()
    }else{
        res.status(403).send(
            new response(
                'error',
                '403',
                'el usuario no puede acceder a esta informacion'
            )
        )
    }
}