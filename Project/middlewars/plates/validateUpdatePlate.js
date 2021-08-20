/**
 * Validar que toda la informacion necesaria para actulizar el plato este en el body
 */
const response = require('../../config/response.js')

exports.validateUpdatePlate = (req, res, next) => {
    const {name, description, price, category} = req.body

    if (name || description || price || category){
        next()
    }else{
        res.status(400).send(
            new response(
                'error',
                '400',
                'información incompleta'
            )
        )
    }
}