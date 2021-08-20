/**
 * Validar que toda la informacion necesaria para crear el plato este en el body
 */
const response = require('../../config/response.js')

exports.validateNewPlate = (req, res, next) => {
    const {name, description, price, category} = req.body

    if (name && description && price && category){
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