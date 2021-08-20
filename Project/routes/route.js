const user = require('../modules/user')
const plates = require('../modules/plates')
const orders = require('../modules/order')
const admin = require('../modules/admin')

/**
 * instacia para generar las entidades con sus respectivos endpoint
 * @param {*} app instacia de la aplicacion creada con express
 */
module.exports = function (app) {
    app.use('/user',user)
    app.use('/plates',plates)
    app.use('/order',orders)
    app.use('/admin',admin)
}