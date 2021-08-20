/**
 * Validar que la informacion para crear un nuevo usario este en el body
 */
const response = require('../../config/response.js')

exports.validateInfoNewUser = (req, res, next) => {
    let {
        name,
        lastname,
        email,
        phone,
        address,
        username,
        password,
        admin
    } = req.body;

    console.log('validar usuario');
    if (name && lastname && email && phone && address && username && password && admin){
        next()
    }else{
        res.status(401).send(
            new response(
                'error',
                '401',
                'informacion incompleta'
            )
        )
    }

}